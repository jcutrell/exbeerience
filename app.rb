require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'digest/md5'
require 'sinatra/flash'
require 'bcrypt'
#only needed for heroku...
require 'dm-postgres-adapter'
# CONFIG = {}
# configure :development do
# 	CONFIG[:DEV] = true
# end
require File.dirname(__FILE__) + '/models.rb'
require 'json'
require 'pg'
# Dir[File.dirname(__FILE__) + '/initializers/*.rb'].each {|file| require file }
# Dir[File.dirname(__FILE__) + '/controllers/*.rb'].each {|file| require file }

enable :sessions

helpers do
	def logged_in?
		puts !session[:username].nil?
		return !session[:username].nil?
	end
	def authenticate!
		if !logged_in?
			flash[:warning] = "You must be logged in to do that!"
			redirect '/'
		end
	end
	def current_user
		@username = session[:username]
		puts @username
		puts User.first(:username => @username)
		User.first(:username => session[:username].downcase)
	end
	def current_user_name
		@cuser = current_user
		@username = @cuser.username unless @cuser.nil?
	end
end

get "/logout" do
	session.clear
	redirect "/"
end



get "/" do
	erb :layout
end

post "/user/create" do
	user = User.new
	user.salt = BCrypt::Engine.generate_salt
	user.phash = BCrypt::Engine.hash_secret(params[:password], user.salt)
	email_hash = Digest::MD5.hexdigest(params[:email].downcase)
	user.gravatar = "http://www.gravatar.com/avatar/#{email_hash}"
	user.username = params["username"].downcase
	user.email = params["email"].downcase
	user.created_at = Time.now
	if user.save
		puts "saved!"
		puts user
 		session[:username] = user.username
 		redirect '/'
 	else
 		session[:username] = nil
 		redirect "/"
 	end
end

post "/user/login" do
	username = params[:username]
	pass = params[:password]
	@user = User.first(:username => username)
	if @user.nil?
		redirect "/"
	end
	salt = @user.salt
	hash = BCrypt::Engine.hash_secret(pass, salt)
	if (hash == @user.phash)
		session[:username] = username
		redirect "/"
	else
		session[:username] = nil
		@user = nil
		redirect "/"
	end
end

post "/cellar/add" do
	authenticate!
	@user = current_user
	d = Drink.first_or_create(:api_id => params[:api_id])
	d.save
	@user.drinks << d
	if @user.save!
		puts "yes"
		status 200
		{:drink => d, :user => @user, :message => "Successfully added drink." }.to_json
	else
		puts "no"
		status 500
		{:error => "Could not add drink", :user => @user}.to_json
	end
end
post "/cellar/remove" do
	authenticate!
	@user = current_user
	dlink = @user.user_drinks.first(:api_id => params[:api_id])
	dlink.destroy!
	if @user.save
		flash[:success] = "Added #{params[:dname]} successfully."
	else
		flash[:error] = "Adding #{params[:dname]} failed. Try again?"
	end
end

post "/purchases/add" do
end

post "/reviews/add" do
end

post "/reviews/remove" do
end

get "/mycellar" do
	@user = current_user
	@user.drinks.to_json
end
get "/me" do
	@user = current_user
	@user.to_json(:methods => :drinks)
end