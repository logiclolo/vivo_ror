class VivocameraUserinputsController < ApplicationController
   require 'mymodule'
   require 'vivocommon'
   before_action :find_vivocamera , only: [:new,:create, :show]
   STATUS = [['Active', 'active'], ['In Active', 'inactive']]
  def new
     @userinput = @vivocamera.userinputs.build
  end
  
  def show
    
    @userinputs = @vivocamera.userinputs
  end
  
  
  def index
  @userinputs = @vivocamera.userinputs
  end

  def create
     
     @userinput = @vivocamera.userinputs.build(userinput_params)
     
     #@my_obj = ::Mymodule.new(@userinput)
     @my_obj2 = ::Vivocommon.new(@userinput)
     
     #im_awesome
     #gen_config
     
     #@target  = "../../vivoconfig/vivoconfig"
     #@content = "hellohello"
     
     #@f = File.open('/home/ubuntu/workspace/vivo/vivoconfig/vivoconfig.xml', "w+")
     #@f.write(@content)   
     #@f.close()
     #File.open('/home/ubuntu/workspace/vivo/vivoconfig.xml', 'w') do |f2|  
        # use "\n" for two lines of text  
     #   f2.puts "Created by Satish\nThank God!"  
     #end  
     
    if @userinput.save
       flash[:success] = "IP camera property successful created!"
    redirect_to  cameraindex_path
    else
    render :action => :new
    end
  end
  
  def edit
     @vivocamera = Vivocamera.find( params[:vivocamera_id] )
    @userinput = @vivocamera.userinputs.find(params[:vivocamera_id])
  end

  def update
       @vivocamera = Vivocamera.find( params[:vivocamera_id] )
     @userinput = @vivocamera.userinputs.find( params[:vivocamera_id] )

     @userinput.update_attributes(userinput_params)
      flash[:success] = "IPcamera properties updated!"
      redirect_to cameraindex_path
    

  end


  private
  
  
  def gen_config
      gen_capability
      gen_ddns
      
  end
  
  def gen_audioin
      
  end
  
  def gen_audioout
      
  end
  
  def gen_capability
     @f = File.open('/home/ubuntu/workspace/vivo/vivoconfig/config_capability.xml', "w+")
     @content='<?xml version="1.0" standalone="yes"?>' + "\n"
     @content+='<root>' + "\n"
     @content+='<capability>' + "\n"
     
     @content+='<bootuptime>'
     @content+=@userinput.bootuptim
     @content+='</bootuptime>'+ "\n"
     
     @f.write(@content)   
     @f.close()      
  end
  
  def gen_ddns
     @f = File.open('/home/ubuntu/workspace/vivo/vivoconfig/config_ddns.xml', "w+")
     @content='config_ddns.xml'
     @f.write(@content)   
     @f.close()     
  end
  
  def gen_disk

  end
  
  def gen_dst
      
  end
  
  def gen_eptz
      
  end
  
  def gen_exposurewindows
  
  end
  
  
  
  
  
  
  
  
  

  def find_vivocamera
    @vivocamera = Vivocamera.find( params[:vivocamera_id] )
  end

  
  
  
  
   def userinput_params
     params.require(:userinput).permit(:bootuptim,
                                       :ir,
                                       :extir,
                                       :npir,
                                       :ndi,
                                       :nvi )
   end
  
  
end
