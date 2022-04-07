Rails.application.routes.draw do

  devise_for :users
  resources :memberships
  resources :products
  post "checkout/create", to: "checkout#create"
  #root to: "stations#index"

  get "about/about"
  get "about", to: "about#index"

  root to: "about#index"

  get "login", to: "login#index"
  get "membership", to: "memberships#index"
  get "map", to: "map#index"
  get "register", to: "register#index"
  get "stations", to: "stations#index"
end
