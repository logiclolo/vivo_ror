class Image

   def initialize(k)
       @input = k
       #print @input.bootuptim
       

     @f = File.open('/home/ubuntu/workspace/vivo/vivoconfig/config_image.xml', "w+")
     @content="config_image.xml"
     @f.write(@content)   
     @f.close()       
   end
end
