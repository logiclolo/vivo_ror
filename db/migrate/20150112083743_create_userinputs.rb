class CreateUserinputs < ActiveRecord::Migration
  def change
    create_table :userinputs do |t|
      t.string :property1
      t.string :property2
     
      t.timestamps null: false
    end
   
  end
end
