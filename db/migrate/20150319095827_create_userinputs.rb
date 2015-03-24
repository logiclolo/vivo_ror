class CreateUserinputs < ActiveRecord::Migration
  def change
    create_table :userinputs do |t|

      t.timestamps null: false
    end
  
    add_column :userinputs, :vivocamera_id, :integer
    
    add_column :userinputs, :api_httpversion, :string
    add_column :userinputs, :bootuptime, :integer
    add_column :userinputs, :npir, :integer
    add_column :userinputs, :ndi, :integer
    add_column :userinputs, :nvi, :integer
    add_column :userinputs, :ndo, :integer
    add_column :userinputs, :naudioin, :integer
    add_column :userinputs, :naudioout, :integer
    add_column :userinputs, :nvideoin, :integer
    add_column :userinputs, :nvideoout, :integer
    add_column :userinputs, :nmediastream, :integer
    add_column :userinputs, :nuart, :integer
    add_column :userinputs, :nvideoinprofile, :integer
    add_column :userinputs, :nmotion, :integer
    add_column :userinputs, :nmotionprofile, :integer
    add_column :userinputs, :ptzenabled, :integer
    add_column :userinputs, :windowless, :integer
    add_column :userinputs, :evctrlchannel, :integer
    add_column :userinputs, :joystick, :integer
    add_column :userinputs, :npreset, :integer
    add_column :userinputs, :eptz, :integer
    add_column :userinputs, :nanystream, :integer
    add_column :userinputs, :iva, :integer
    add_column :userinputs, :whitelight, :integer
    add_column :userinputs, :iris, :integer
    add_column :userinputs, :tampering, :integer
    add_column :userinputs, :adaptiverecording, :integer
    add_column :userinputs, :adaptivestreaming, :integer
    add_column :userinputs, :supportsd, :integer
    add_column :userinputs, :fisheye, :integer
    add_column :userinputs, :supporttriggertypes, :string

    add_column :userinputs, :daynight_support, :integer
    add_column :userinputs, :daynight_builtinir, :integer
    add_column :userinputs, :daynight_externalir, :integer        
    add_column :userinputs, :daynight_smartir, :integer    
    add_column :userinputs, :daynight_ircutfilter, :integer
    add_column :userinputs, :daynight_lightsensor, :integer
  end
end
