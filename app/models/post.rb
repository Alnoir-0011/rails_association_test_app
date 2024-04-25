class Post < ApplicationRecord
  has_many :post_tags, dependent: :destroy
  has_many :tags, through: :post_tags

  validates :title, presence: true, uniqueness: true

  def save_with_tag(tag_names:)
    return false if invalid?

    ActiveRecord::Base.transaction do
      self.tags = tag_names.split(',').select { |s| s.present? }.uniq.map { |name| Tag.find_or_initialize_by(name: name)}
      save!
    end
    true
  rescue StandardError
    false
  end

  def tag_names
    tags.pluck(:name).join(',')
  end
end
