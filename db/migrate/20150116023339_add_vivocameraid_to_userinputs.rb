class AddVivocameraidToUserinputs < ActiveRecord::Migration
  def change
    remove_column :userinputs, :ipcamera_id
    add_column :userinputs, :vivocamera_id, :integer
    
  end
end
