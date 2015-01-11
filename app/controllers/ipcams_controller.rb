class IpcamsController < ApplicationController
  def show
    @ipcam = Ipcam.find(params[:id])
  end
  
  def new
    @ipcam = Ipcam.new
  end
  
  def create
    @ipcam = Ipcam.new(ipcam_params)
    if @ipcam.save
      redirect_to @ipcam
    else
      render 'new'
    end
  end
  
  
    private

    def ipcam_params
      params.require(:ipcam).permit(:type1)
    end
end

