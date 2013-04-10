configure :production do
  DataMapper.setup(:default, ENV['DATABASE_URL'])
end
configure :development do
  DataMapper.setup(:default,  'sqlite:///Users/JonathanCutrell/Sites/exbeer_db/dev.db')
end

class Drink
  include DataMapper::Resource

  property :api_id, String, :key => true
  has n, :purchases
  has n, :users, :through => Resource

end
class User
  include DataMapper::Resource

  property :id,         Serial    # An auto-increment integer key
  property :username,      String, :length => 3..18    # A varchar type string, for short strings
  property :phash,    String, :length => 120 # password hash
  property :salt,   String # pass salt
  property :created_at, DateTime #signup date
  property :email, String # User's email
  property :gravatar, String, :length => 120 # User's gravatar based on email

  validates_uniqueness_of :email, :message => "There's already a user with that email address."
  validates_uniqueness_of :username, :message => "That username has already been taken."
  validates_presence_of :username, :message => "You must enter a username."
  validates_presence_of :email, :message => "You must enter an email."
  validates_presence_of :phash, :message => "Did you forget to enter a password?"

  has n, :purchases
  has n, :drinks, :through => Resource

end
class Purchase
  include DataMapper::Resource

  property :id,         Serial    # An auto-increment integer key

  belongs_to :user
  belongs_to :drink

end


DataMapper.auto_upgrade!