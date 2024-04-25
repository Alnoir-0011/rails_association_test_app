class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false, index: { unique: true }
      t.text :content

      t.timestamps
    end
  end
end
