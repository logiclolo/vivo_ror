class UserinputsController < ApplicationController
  def new
     @userinput = Userinput.new
  end
  
  def index
  @userinputs = Userinput.all
  end

  def create
    @userinput = Userinput.new(userinput_params)
     @userinput.save
      flash[:success] = "IP camera property successful created!"
      redirect_to :action => :index
    
  end
  
  def show
    @userinput = Userinput.find(params[:id])
  end

  private

   def userinput_params
     params.require(:userinput).permit(:property, :vivocamera_id)
   end
  
  
  
  
  
end
