Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/users/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
