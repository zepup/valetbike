# README

* Ruby version


Ruby version 3.0.2

* System dependencies


MySQL8
Rails 6.1.4

* Configuration

Install required gems by running ```bundle install```
Then run:

```
rails webpacker:install

rake assets:precompile
```


* Database creation and initialization

Run the following commands:
```
rake db:drop

rake db:create

rake db:migrate

rake import_csv:data

```

<h3> How to run the test suite </h3>


In your terminal launch the web app with ```rails s```then go to http://localhost:3000 in your browser

Description of MVP functionality:


Navigation bar with links to About Us, Map, Login, Register, and Membership
After signing in, the nav bar options are About Us, Map, Sign Out, Profile and Membership 

Registration functionality: create account with username and password, Email confirmation for user registration 

"forget password" option will send email to user's email address

After log in, user can edit their profile or delete their account.

Membership payment functionality: Users can select one of three membership tiers and click "Buy Now!" to be redirected to Stripe checkout

Map functionality: Displays "Nipmuck Notch" (Northampton) with panning and zooming in/out

Displays marker at station location with name, address, available docks and available bikes

At each marker, there is a button to "rent a bike" that takes you to the bike rental page


