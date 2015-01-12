class CreateVivocameras < ActiveRecord::Migration
  def change
    create_table :vivocameras do |t|
      t.string :name

      t.timestamps null: false
    end
    
    add_column :userinputs, :vivocamera_id, :integer
    add_index :userinputs, :vivocamera_id
    
  end
end
