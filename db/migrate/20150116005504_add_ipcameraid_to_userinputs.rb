class AddIpcameraidToUserinputs < ActiveRecord::Migration
  def change
    add_column :userinputs, :ipcamera_id, :integer
  end
end
