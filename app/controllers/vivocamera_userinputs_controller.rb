class VivocameraUserinputsController < ApplicationController
   before_action :find_vivocamera , only: [:new,:create, :show]
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
