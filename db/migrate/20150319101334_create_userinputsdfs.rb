class CreateUserinputsdfs < ActiveRecord::Migration
  def change
    create_table :userinputsdfs do |t|

      t.timestamps null: false
    end
  end
end
