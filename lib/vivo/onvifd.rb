class Onvifd

   def initialize(k)
       @input = k
       #print @input.bootuptim
       

     @f = File.open('/home/ubuntu/workspace/vivo/vivoconfig/config_capability.xml', "w+")
     @content='<?xml version="1.0" standalone="yes"?>' + "\n"
     @content+='<root>' + "\n"
     @content+='<capability>' + "\n"
     
     @content+='<bootuptime>'
     @content+=@input.bootuptim
     @content+='</bootuptime>'+ "\n"
     
     @f.write(@content)   
     @f.close()       
       
       
       
   end




end
