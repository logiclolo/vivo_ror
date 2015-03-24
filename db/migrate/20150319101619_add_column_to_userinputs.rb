class AddColumnToUserinputs < ActiveRecord::Migration
  def change
    add_column :userinputs, :iristype, :string
    add_column :userinputs, :dnr, :integer
  end
end
