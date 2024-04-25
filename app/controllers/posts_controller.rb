class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]

  def index
    @posts = Post.all.includes(:tags)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save_with_tag(tag_names: params[:post][:tag_names])
      redirect_to posts_path, notice: 'create'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show;end

  def edit;end

  def update
    @post.assign_attributes(post_params)

    if @post.save_with_tag(tag_names: params[:post][:tag_names])
      redirect_to post_path(@post), notice: 'update'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy!
    redirect_to posts_path
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
