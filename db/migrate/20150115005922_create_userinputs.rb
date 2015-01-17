class CreateUserinputs < ActiveRecord::Migration
  def change
    create_table :userinputs do |t|

      t.timestamps null: false
    end
    
    add_column :userinputs, :bootuptim, :string
    add_column :userinputs, :ir, :string
    add_column :userinputs, :extir, :string
    add_column :userinputs, :npir, :string
    add_column :userinputs, :ndi, :string
    add_column :userinputs, :nvi, :string
  end
end
