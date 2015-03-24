class AddColumnToUserinputs2 < ActiveRecord::Migration
  def change
    add_column :userinputs, :flickerless, :integer
    add_column :userinputs, :eis, :integer
    add_column :userinputs, :aespeed, :integer
    add_column :userinputs, :defog, :integer
    add_column :userinputs, :scenemode, :integer
    add_column :userinputs, :wdrpro, :integer
    add_column :userinputs, :wdrc, :integer
  end
end
