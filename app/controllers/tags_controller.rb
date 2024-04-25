class TagsController < ApplicationController
  def search
    @tags = Tag.where('name like ?', "%#{params[:q]}%")
    render layout: false
  end
end
