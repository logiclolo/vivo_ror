class CreateVivocameras < ActiveRecord::Migration
  def change
    create_table :vivocameras do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
