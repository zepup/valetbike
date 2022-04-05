# README

This README would normally document whatever steps are necessary to get the
application up and running.

* Ruby version
Ruby version 3.0.2

* System dependencies
MySQL8
Rails 6.1.4

* Configuration
Install required gems with bundle install

To configure database: make a file called .env in the valetbike folder
In the file add:

MYSQL_USERNAME=root
MYSQL_PASSWORD=YOURPASSWORD
MYSQL_SOCKET=/tmp/mysql.sock              # For Mac
MYSQL_SOCKET=/var/run/mysqld/mysqld.sock  # For Windows

* Database creation and initialization
Run rake db:create
then run rake db:migrate

* How to run the test suite
In your terminal launch the web app with rails s then go to http://localhost:3000 in your browser
