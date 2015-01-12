class VivocamerasController < ApplicationController


 def show
  @vivocamera=Vivocamera.find(params[:id])
 end

 def new
   @vivocamera=Vivocamera.new
 end

 def index
  @vivocameras=Vivocamera.all
 end


  def create
    @vivocamera = Vivocamera.new(vivocamera_params)
     @vivocamera.save
      flash[:success] = "IP camera successful created!"
       redirect_to :action => :show
  
  end

 


  private

    def vivocamera_params
      params.require(:vivocamera).permit(:name)
    end



end
