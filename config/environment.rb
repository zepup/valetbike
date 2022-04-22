# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :user_name => 'apikey', # This is the string literal 'apikey', NOT the ID of your API key
  :password => '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', # This is the secret sendgrid API key which was issued during API key creation
  :domain => 'http://127.0.0.1:3000',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}