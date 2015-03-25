// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require jquery.ui.tabs
//= require_tree .

var strcodec;
var ntable=3;
var restablewidth = [241, 311, 381, 451];
var defaulttablewidth = [171, 311, 451, 591];


jQuery(function() {
  jQuery( "#tabs" ).tabs();
});

function loadcurrentsetting()
{
  $(".params").each(function(){
    var value = $(this).val();
    var id = $(this).attr('id');
    eval(id + "=" + value);
  })
}


/* table scroll */

function initVideoModeTable(mode)
{
    // compose jquery selector strings
    var res_tablescroll_body = "#res_tablescroll_body" + mode;
    var table_resolution = "#table_resolution" + mode;
  
  	// Init "add preset location"
    $('label.pre').labelOver('overlay').show();

    // Preset - Select All or Clear
    $("#chk_SelAllPreset").click(function() {
        $(this).attr("checked") ? $(table_resolution + " :checkbox").attr("checked", true) : $(table_resolution + " :checkbox").attr("checked", false);
    });

    // Patrol - Select All or Clear
    $("#chk_SelAllPatrol").click(function() {
        $(this).attr("checked") ? $(res_tablescroll_body + " :checkbox").attr("checked", true) : $(res_tablescroll_body + " :checkbox").attr("checked", false);
    });

    // Generate Preset table
    var presetItemStr = "";
    /*
    for (i = 0; i < MAX_PRESET_COUNT; i ++)
    {
      //var presetName = eval("camctrl_c0_preset_i" + i + "_name");
		
		  //add by ken, for eptz
		  var presetName = eval("eptz_c0_s" + streamsource + "_preset_i" + i + "_name");
		  if (presetName != "")
      {
        presetItemStr += "<tr><td><input type='checkbox'/></td><td style='cursor: default;' title='" + presetName + "'>" + presetName + "</td></tr>";
      }
    }
    */
    $(table_resolution + " tbody").append(presetItemStr);
    
    //Avoid draggin operation on this field.
    $(table_resolution + " td:odd").live("mousedown", function(){
        return false;
    });

    // Generate Patrol table
    var patrolItemStr = "";
	
	  //add by ken, for eptz
	  /*
	  var tmpPatrol = eval("eptz_c0_s"+ streamsource +"_patrolseq").split(',');
	  var tmpDwelling = eval("eptz_c0_s"+ streamsource +"_patroldwelling").split(','); 
	
    if (tmpPatrol != "")
    {
        for (i = 0; i < tmpPatrol.length; i ++)
        {
			var patrolName = eval("eptz_c0_s"+ streamsource +"_preset_i"+tmpPatrol[i]+"_name");
			var patrolDwell = tmpDwelling[i];
			
			patrolItemStr += "<tr><td><input type='checkbox'/></td><td title='"+ patrolName +"'>" + patrolName + "</td><td><input type='text' style='width:70px;' value='" + patrolDwell + "' maxlength='3'/></td></tr>";
        }
		
		$("#res_tablescroll_body tbody").append(patrolItemStr);
    }
    */

    // Make Patrol locations Drag & Drop
    //$("#res_tablescroll_body").tableDnD({ onDragClass: "myDragClass" });
    //if (bIsWinMSIE) $("#res_tablescroll_body :checkbox").css("cursor", "default");

    $(res_tablescroll_body + " tr").live('click', function(){
        $(this).siblings().attr("selected", 0).css("background", "#fff");
        $(this).attr("selected", 1).css("background", "#ccc");
    });

    // Finetune Patrol dwell time layout
    $(res_tablescroll_body + " :text").css("padding", "0 3px");
}

function newResolution(mode)
{
  $("#res_tablescroll_new"+mode).show();
}

function addResolution(mode)
{
  // compose jquery selector strings
  var table_resolution = "#table_resolution" + mode;
  
  $(table_resolution + " tbody").append("<tr><td><input type='checkbox'/></td><td style='cursor: default;' title='" + $("#new_resolution_input"+mode).val()+ "'>" + $("#new_resolution_input"+mode).val() + "</td></tr>");
}

function pushResolution(mode)
{
  // compose jquery selector strings
  var res_tablescroll_body = "#res_tablescroll_body" + mode;
  var table_resolution = "#table_resolution" + mode;
  
  var res_str = "";
  $(table_resolution + " :checked").each(function(i, obj){
    
    var res_name = $(obj).parent().siblings().attr("title");
    //res_str += "<tr><td><input type='checkbox'/></td><td title='" + res_name +"'>" + res_name + "</td><td><input id='userinput_maxfps' style='padding: 0 3px; width: 70px;' type='text' value='30'/></td>";
    res_str += "<tr><td><input name='userinput["+res_name+"]' type='checkbox'/></td><td title='" + res_name +"'>" + res_name + "</td>" +
              "<td style='text-align:left'><input id='userinput[maxfps]' style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>";
   
    var codec_name = strcodec.split(',') ;
    for (i = 0; i < ncodec; i ++)
    {
      res_str += "<td class='" + codec_name[i] + "' style='text-align:left'><input name='userinput["+codec_name[i]+"]'style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>";
    }
    res_str += "</tr>";
    
  });
  
  $(res_tablescroll_body + " tbody").append(res_str);
  
  //Make new item Drag & Drop
  //$("#res_tablescroll_body").tableDnD({ onDragClass: "myDragClass" });
  //if (bIsWinMSIE) $("#res_tablescroll_body :checkbox").css("cursor", "default");


}

function popResolution(mode)
{
  // compose jquery selector strings
  var res_tablescroll_body = "#res_tablescroll_body" + mode;
  
  $(res_tablescroll_body + " :checked").parent().parent().remove();
}

function MoveUp(mode)
{
  // compose jquery selector strings
  var res_tablescroll_body = "#res_tablescroll_body" + mode;
  
  var Index = $(res_tablescroll_body + " tr").index($(res_tablescroll_body + " tr[selected='1']"));
  if ( -1 == Index) return;

  if ( Index == $(res_tablescroll_body + " tr").index($(res_tablescroll_body + " tr:first")) ) return;  // At first place
    $(res_tablescroll_body + " tr[selected='1']").insertBefore($(res_tablescroll_body + " tr:eq("+ (Index-1) +")"));
}

function MoveDown(mode)
{
  // compose jquery selector strings
  var res_tablescroll_body = "#res_tablescroll_body" + mode;
  
  var Index = $(res_tablescroll_body + " tr").index($(res_tablescroll_body + " tr[selected='1']"));
  if ( -1 == Index ) return;

  if ( Index == $(res_tablescroll_body + " tr").index($(res_tablescroll_body + " tr:last")) ) return;  // At last place
  $(res_tablescroll_body + " tr[selected='1']").insertAfter($(res_tablescroll_body + " tr:eq("+ (Index + 1) +")"));
}

function expandTableScroll(obj, mode, width, width2)
{
  var add = $(obj).attr('id');
  var name;
  
  if (add =="userinput_h265")
  {
    name = "h265";
  }
  else if (add == "userinput_h264")
  {
    name = "h264";
  }
  else if (add == "userinput_mjpeg")
  {
    name = "mjpeg";
  }
  
  /* Resolutions */
  //var width;
  // 70 and 2 are magic numbers
  //width = $("#res_tablescroll_head"+mode).width()+70+2;
  $("#res_tablescroll_head"+mode).css("width",width);
  $("#res_div_body"+mode).css("width",width);
  $("#res_tablescroll_body"+mode).css("width",width);
  $("#res_tablescroll_foot"+mode).css("width",width);
  $("#colgroup"+mode).append("<col class='"+name+"' width='70'/>");
  $("#tablescroll_tr"+mode).append("<th class='"+name+"'  style='width: 70px;text-align:left'><span title='symbol'>Max FPS (" + name + ")</span></th>");
  
  if($("#tbody"+mode).children() != null)
  {
    $("#tbody"+mode).find('tr').each(function(){
      $(this).append("<td class='" + name + "' style='text-align:left'><input name='userinput["+name+"]' style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>")
    })
  }
  
  /* Default bitrate and framerate */
  $("#default_tablescroll_head"+mode).css("width",width2);
  $("#default_div_body"+mode).css("width",width2);
  $("#default_tablescroll_body"+mode).css("width",width2);
  $("#default_tablescroll_foot"+mode).css("width",width2);
  $("#default_colgroup"+mode).append("<col class='"+name+"' width='70'/>");
  $("#default_colgroup"+mode).append("<col class='"+name+"' width='70'/>");
  $("#default_tablescroll_tr"+mode).append("<th class='"+name+"'  style='width: 70px;text-align:left'><span title='symbol'>Bitrate (" + name + ")</span></th>" +
                                            "<th class='"+name+"'  style='width: 70px;text-align:left'><span title='symbol'>Framerate (" + name + ")</span></th>");
  
  if($("#default_tbody"+mode).children() != null)
  {
    $("#default_tbody"+mode).find('tr').each(function(){
      $(this).append("<td class='" + name + "' style='text-align:left'><input name='userinput["+name+"]' style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>" +
                      "<td class='" + name + "' style='text-align:left'><input name='userinput["+name+"]' style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>")
    })
  }
  
  
}

function reduceTableScroll(obj, mode, width, width2)
{
  var remove = $(obj).attr('id');
  var name;
  
  if (remove =="userinput_h265")
  {
   name = "h265";
  }
  else if (remove == "userinput_h264")
  {
    name = "h264";
  }
  else if (remove == "userinput_mjpeg")
  {
    name = "mjpeg";
  }
  
  $("#tbody tr"+mode).each(function() {
   $(this).find("td."+name).remove();
  });
  
  $("#default_tbody tr"+mode).each(function() {
   $(this).find("td."+name).remove();
  });
  
  /* Resolutions */
  //var width;
  // 70 and 2 are magic numbers
  //width = $("#res_tablescroll_head"+mode).width()-70+2;
  $("#res_tablescroll_head"+mode).css("width",width);
  $("#res_div_body"+mode).css("width",width);
  $("#res_tablescroll_body"+mode).css("width",width);
  $("#res_tablescroll_foot"+mode).css("width",width);
  $("#colgroup"+mode).find("col."+name).remove();
  $("#tablescroll_tr"+mode).find("th."+name).remove();
  
  /* Default bitrate and framerate */
  $("#default_tablescroll_head"+mode).css("width",width2);
  $("#default_div_body"+mode).css("width",width2);
  $("#default_tablescroll_body"+mode).css("width",width2);
  $("#default_tablescroll_foot"+mode).css("width",width2);
  $("#default_colgroup"+mode).find("col."+name).remove();
  $("#default_tablescroll_tr"+mode).find("th."+name).remove();
}

function addStreamsContent(mode)
{
  for (var i=0;i<userinput_nmediastream;i++)
  {
    $("#default_tbody"+mode).find("tr").remove();
  }
  
  for (var i=0;i<userinput_nmediastream;i++)
  {
    $("#default_tbody"+mode).append("<tr><td><input name='userinput["+i+"]' type='checkbox'/></td><td title='" + i +"'>Stream " + (i+1) + "</td>");
  }
}

function calNumberOfCodec()
{
  ncodec = 0;
  strcodec = "";
  
  prepareTable();
  
  $(".codec").each(function (){
    if($(this).is(":checked"))
    {
      ncodec = ncodec + 1;
      strcodec += $(this).attr('id').replace("userinput_","") + ',';//add codec string
      
      for (var i=0;i<ntable;i++)
      {
        var mode = "_mode" + i;
        expandTableScroll(this, mode, restablewidth[ncodec], defaulttablewidth[ncodec]);
      }
    }
  
  })
  
  
}

function prepareTable()
{
  // initial all tables
  for (var i=0;i<ntable;i++)
  {
    var mode = "_mode" + i;
    initVideoModeTable(mode);
    addStreamsContent(mode);
  }
  
  // only show nmode tables
  for (i=0;i<userinput_nmode;i++)
  {
    $("#div_videomode"+i).show();
  }
}

$(document).ready(function(){
 
    loadcurrentsetting();
    
    // when changes setting ...
    $(".params").change( function(){
      var value = $(this).val();
      var id = $(this).attr('id');
      eval(id + "=" + value);
      
      //nmode
      if (id == "userinput_nmode")
      {
          for (i=0;i<ntable;i++)
          {
            $("#div_videomode"+i).hide();
          }
          
          for (i=0;i<userinput_nmode;i++)
          {
            $("#div_videomode"+i).show();
          }
      }
    });
    
    // tab event handler
    var first_click = true;
    $("#tabs" ).tabs({                                                                  
      activate:function(event,ui){                                                       
        var active = $('#tabs').tabs('option', 'active');
        
        // first click video tab
        if (active == 2)  
        {
          if(first_click)
          {
            first_click = false;
            calNumberOfCodec();
          }
          else
          {
              for (var i=0;i<ntable;i++)
              {
                var mode = "_mode" + i;
                addStreamsContent(mode);
                if($("#default_tbody"+mode).children() != null)
                {
                  var codec_name = strcodec.split(',') ;
                  for (var j=0; j<ncodec;j++)
                  {
                    $("#default_tbody"+mode).find('tr').each(function(){
                      $(this).append("<td class='" + codec_name[j] + "' style='text-align:left'><input name='userinput["+codec_name[j]+"]' style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>" +
                                    "<td class='" + codec_name[j] + "' style='text-align:left'><input name='userinput["+codec_name[j]+"]' style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>")
                
                    })
                  }
                 }
              }
          }
        }
 
      }                                                                          
    }); 
    
  
    // when clicks video codec ...
    $(".codec").bind( "click", function() {
      if($(this).is(":checked"))
      {
         ncodec = ncodec + 1;
        strcodec += $(this).attr('id').replace("userinput_","") + ','; //add codec strings
        for (i=0;i<ntable;i++)
        {
          var mode = "_mode" + i;
          expandTableScroll(this, mode, restablewidth[ncodec], defaulttablewidth[ncodec]);
        }
      }
      else
      {
        ncodec = ncodec - 1;
        strcodec = strcodec.replace($(this).attr('id').replace("userinput_","")+",", ""); //remove codec strings
        for (i=0;i<ntable;i++)
        {
          var mode = "_mode" + i;
          reduceTableScroll(this, mode, restablewidth[ncodec], defaulttablewidth[ncodec]);
        }
      }
    });
   
 

    // flickerless show or hide
    if ($("#userinput_iristype_fixed").is(":checked"))
    {
        $("#flickerless").show();
    }
    $('#userinput_iristype_fixed').click(
      function(){
        $("#flickerless").show();
        $("#userinput_flickerless_1").attr("checked",true);
        $("#flickerless").css("background-color","yellow");
      })
    $('#userinput_iristype_dc').click(
      function(){
        $("#flickerless").hide();
        $("#userinput_flickerless_0").attr("checked",true);
        
      })
    $('#userinput_iristype_p').click(
      function(){
        $("#flickerless").hide();
        $("#userinput_flickerless_0").attr("checked",true);
    })
    
    // video mode
})

jQuery.fn.labelOver = function(overClass) {
    return this.each(function(){
        var label = jQuery(this);
        var f = label.attr('for');
        if (f) {
            var input = jQuery('#' + f);
            
            this.hide = function() {
                label.css({ textIndent: -10000 });
				if (document.spdfm.presetLocs.length > MAX_PRESET_COUNT)
				{
					$(this).nextAll(":button").attr("disabled","true");
				}
				else
				{
					$(this).nextAll(":button").removeAttr("disabled");
				}
                $(this).nextAll(":button").css("visibility", "visible");
            };
            
            this.show = function() {
                if (input.val() == '') {
                    label.css({ textIndent: 0 });
                    $(this).nextAll(":button").css("visibility", "hidden");
                } 
            };

            // handlers
            input.focus(this.hide);
            input.blur(this.show);
            label.addClass(overClass).click(function(){ input.focus(); });
            
            if (input.val() != '') this.hide(); 
        }
    });
};