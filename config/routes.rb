Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'home/index'

  root 'home#index'

  namespace :api do
    resources :items, only: [:show]
  end

  resources :item, only: [:show] do
    root to: 'item#show'
    get '*path' => 'item#show'
  end
end
