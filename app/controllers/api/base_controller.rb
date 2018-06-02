module Api
  class BaseController < ActionController::Base

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    private

    def current_visitor
      @current_visitor ||= Visitor.where('visitors.uuid = ? OR visitors.id = ?', cookies[:visitor_uuid], cookies[:visitor_id]).first
    end

    def header_authorization_token
      request.headers['Authorization-Token']
    end
  end
end