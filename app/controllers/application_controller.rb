class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
    protect_from_forgery unless: -> { request.format.json? }
  
    before_action :configure_permitted_parameters, if: :devise_controller?
  
    protected
  
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :zip])
    end
  end