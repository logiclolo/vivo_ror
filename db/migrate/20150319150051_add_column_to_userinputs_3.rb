class AddColumnToUserinputs3 < ActiveRecord::Migration
  def change
    add_column :userinputs, :remotefocus, :integer
    add_column :userinputs, :backfocus, :integer
    add_column :userinputs, :focusassist, :integer
  end
end
