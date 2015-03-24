class Mymodule
  require 'capability'


  def initialize(k)
     @input = k
     
     Capability.new(k)
  end


  def im_awesome

    puts "#{self} is so awesome" 

  end

end
