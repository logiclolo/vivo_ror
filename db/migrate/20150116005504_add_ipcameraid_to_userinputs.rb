class AddIpcameraidToUserinputs < ActiveRecord::Migration
  def change
    add_column :userinputs, :ipcamera_id, :integer
    add_column :userinputs, :sensortype, :string
    add_column :userinputs, :iristype, :string
  end
end
