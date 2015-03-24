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
var ncodec


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

function initPrestAndPatrolBlk()
{
	// Init "add preset location"
    $('label.pre').labelOver('overlay').show();

    // Preset - Select All or Clear
    $("#chk_SelAllPreset").click(function() {
        $(this).attr("checked") ? $("#table-preset :checkbox").attr("checked", true) : $("#table-preset :checkbox").attr("checked", false);
    });

    // Patrol - Select All or Clear
    $("#chk_SelAllPatrol").click(function() {
        $(this).attr("checked") ? $("#table-patrol :checkbox").attr("checked", true) : $("#table-patrol :checkbox").attr("checked", false);
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
    $("#table-preset tbody").append(presetItemStr);
    
    //Avoid draggin operation on this field.
    $("#table-preset td:odd").live("mousedown", function(){
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
		
		$("#table-patrol tbody").append(patrolItemStr);
    }
    */

    // Make Patrol locations Drag & Drop
    //$("#table-patrol").tableDnD({ onDragClass: "myDragClass" });
    //if (bIsWinMSIE) $("#table-patrol :checkbox").css("cursor", "default");

    $("#table-patrol tr").live('click', function(){
        $(this).siblings().attr("selected", 0).css("background", "#fff");
        $(this).attr("selected", 1).css("background", "#ccc");
    });

    // Finetune Patrol dwell time layout
    $("#table-patrol :text").css("padding", "0 3px");
}

function newResolution()
{
  $("#new_resolution_content").show();
}

function addResolution()
{
  $("#table-preset tbody").append("<tr><td><input type='checkbox'/></td><td style='cursor: default;' title='" + $("#new_resolution_input").val()+ "'>" + $("#new_resolution_input").val() + "</td></tr>");
}

function pushResolution()
{
  var res_str = "";
  $("#table-preset :checked").each(function(i, obj){
    
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
  
  $("#table-patrol tbody").append(res_str);
  
  //Make new item Drag & Drop
  //$("#table-patrol").tableDnD({ onDragClass: "myDragClass" });
  //if (bIsWinMSIE) $("#table-patrol :checkbox").css("cursor", "default");


}

function popResolution()
{
  $("#table-patrol :checked").parent().parent().remove();
}

function MoveUp()
{
  var Index = $("#table-patrol tr").index($("#table-patrol tr[selected='1']"));
  if ( -1 == Index) return;

  if ( Index == $("#table-patrol tr").index($("#table-patrol tr:first")) ) return;  // At first place
    $("#table-patrol tr[selected='1']").insertBefore($("#table-patrol tr:eq("+ (Index-1) +")"));
}

function MoveDown()
{
  var Index = $("#table-patrol tr").index($("#table-patrol tr[selected='1']"));
  if ( -1 == Index ) return;

  if ( Index == $("#table-patrol tr").index($("#table-patrol tr:last")) ) return;  // At last place
  $("#table-patrol tr[selected='1']").insertAfter($("#table-patrol tr:eq("+ (Index + 1) +")"));
}

function expandTableScroll(obj)
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
  
  var width;
  // 70 and 2 are magic numbers
  width = $("#res_tablescroll_head").width()+70;
  $("#res_tablescroll_head").css("width",width+2);
  $("#res_tablescroll_body").css("width",width+2);
  $("#table-patrol").css("width",width+2);
  $("#res_tablescroll_foot").css("width",width+2);
  $("#colgroup").append("<col class='"+name+"' width='70'/>");
  $("#tablescroll_tr").append("<th class='"+name+"'  style='width: 70px;text-align:left'><span title='symbol'>MaxFPS (" + name + ")</span></th>");
  
  if($("#tbody").children() != null)
  {
    $("#tbody").find('tr').each(function(){
      $(this).append("<td class='" + name + "' style='text-align:left'><input name='userinput["+name+"]' style='padding: 0 3px; width: 50px;' type='text' value='30'/></td>")
    })
  }
}

function reduceTableScroll(obj)
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
  
  $("#tbody tr").each(function() {
   $(this).find("td."+name).remove();
  });
  
  var width;
  // 70 and 2 are magic numbers
  width = $("#res_tablescroll_head").width()-70;
  $("#res_tablescroll_head").css("width",width+2);
  $("#res_tablescroll_body").css("width",width+2);
  $("#table-patrol").css("width",width+2);
  $("#res_tablescroll_foot").css("width",width+2);
  $("#colgroup").find("col."+name).remove();
  $("#tablescroll_tr").find("th."+name).remove();
}

function calNumberOfCodec()
{
  ncodec = 0;
  strcodec = "";
  
  $(".codec").each(function (){
    if($(this).is(":checked"))
    {
      ncodec = ncodec + 1;
      strcodec += $(this).attr('id').replace("userinput_","") + ',';//add codec string
      
      expandTableScroll(this);
    }
  
  })
}

$(document).ready(function(){
 
    loadcurrentsetting();
    initPrestAndPatrolBlk(); 
    
    $(".params").change( function(){
      var value = $(this).val();
      var id = $(this).attr('id');
      eval(id + "=" + value);
      //alert(eval(id));
    });
    
    // tab event handler
    var first_click = true;
    $("#tabs" ).tabs({                                                                  
      activate:function(event,ui){                                                       
        var active = $('#tabs').tabs('option', 'active');
        
        // first click video tab
        if (active == 2 && first_click)  
        {
          first_click = false;
          calNumberOfCodec();
        }
      }                                                                          
    }); 
    
  
    // when clicks video codec ...
    $(".codec").bind( "click", function() {
      if($(this).is(":checked"))
      {
        expandTableScroll(this);
        ncodec = ncodec + 1;
        strcodec += $(this).attr('id').replace("userinput_","") + ','; //add codec strings
      }
      else
      {
        reduceTableScroll(this);
        ncodec = ncodec - 1;
        strcodec = strcodec.replace($(this).attr('id').replace("userinput_","")+",", ""); //remove codec strings
        
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