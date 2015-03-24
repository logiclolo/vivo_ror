class AddDescriptionToUserinputs < ActiveRecord::Migration
  def change
    add_column :userinputs, :sensortype, :string
  end
end
