class CreateIpcams < ActiveRecord::Migration
  def change
    create_table :ipcams do |t|
      t.string :type1

      t.timestamps null: false
    end
  end
end
