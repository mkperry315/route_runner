Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/tracks', to: "static_pages#index"
  get '/tracks/:id', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
      resources :tracks, only: [:index]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
