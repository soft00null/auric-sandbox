var printMe
var indicate
var backMe
var refreshMe
var archiveMe
var publishMe
var unpublishMe
var deleteMe
var activeMe
var inactiveMe
var enableMe
var disableMe
var updateMe
var showHome
var hideHome
var downloadMe;
var headerPageName
var strFirstLink
var strLastLink
var backPath


// *** Script for get Absolute path and Updated by Sudam Chandra Panda on 28th Jun 2012 ****//
	var host 		= window.location.host;
	var pathInfo	= window.location.pathname;	
	var FN1			= pathInfo.split('/')[1];
	var FN2			= pathInfo.split('/')[2];
	
	/* if(host=='ppmsi.auric.city')
	{ 
	   var appURL		= "http://ppmsi.auric.city"; 
	} else {
	   var appURL		= "http://"+host+"/Application";
	} */
	
	
	//var siteUrl 	= "http://"+host;
	//var appURL		= "http://"+host+"/Application"; 
	
	
	var siteUrl 	= "https://www.auric.city"; 
	var appURL		= "https://portal.auric.city";

	if(host=='www.auric.city' || host=='auric.city'){
			var appURL		= "https://www.auric.city/Application"; 
	}
	if(host=='cfc.auric.city' || host=='www.cfc.auric.city'){
			var appURL		= "https://cfc.auric.city/Application"; 
	}
	else{
		var appURL		= "https://portal.auric.city"; 
	}
	
	
	
	
	//var siteUrl 	= "https://msi.auric.city"; 
	//var appURL		= "https://ppmsi.auric.city";
	
$(document).keypress(function(e) {
    if(e.which == 13) {
		if($('#btnAlertOk').is(':visible'))
		{
			$('#btnAlertOk').click();
		}
		else if($('#btnConfirmOk').is(':visible'))
		{
			$('#btnConfirmOk').click();
		}
		else if($('#btnUpdateConfirmOk').is(':visible'))
		{
			$('#btnUpdateConfirmOk').click();
		}
		else
		{
        	$('.defaultBtn').click();
		}
		return false;
    }
});
$(document).ready(function() {
	
	
	$('[data-toggle="tooltip"]').tooltip();
         
	if($('.chkAll').length>0)
	{
		$('.chkAll').on('click',function(){
                    
                    
			if($(this).is(':checked'))
			{
				$('.chkItem').prop('checked',true);
			}
			else
			{
				$('.chkItem').prop('checked',false);
			}
		});
	}		
	$('.chkItem').on('click',function(){
		var chkAllFlag	= 0;
		$('.chkItem').each(function(){
			if($(this).is(':checked'))
				chkAllFlag++;
		});
               
		if(Number(chkAllFlag)==Number($('.chkItem').length))
			$('.chkAll').prop('checked',true);
		else
			$('.chkAll').prop('checked',false);
	});
	
	$('#btnUpdateConfirmOk').on('click',function(){
		$('#frmAITL').submit();
	});
	       
       
});
// GET THE CURRENT FISCAL YEAR and Developed By Ajit Kumar Sahoo on 22-SEP-2015//
function getCurrentFiscalYear() {

   
    var today = new Date();    
   
    var curMonth = today.getMonth();
    
    var fiscalYr = "";
    if (curMonth > 3) { //
        var nextYr1 = (today.getFullYear() + 1).toString();
        fiscalYr = today.getFullYear().toString() + "-" + nextYr1.charAt(2) + nextYr1.charAt(3);
    } else {
        var nextYr2 = today.getFullYear().toString();
        fiscalYr = (today.getFullYear() - 1).toString() + "-" + nextYr2.charAt(2) + nextYr2.charAt(3);
    }
    
    //document.write(fiscalYr);
    return fiscalYr;
 }
 function viewAlert(msg, ctrlId, redLoc)
    {
        $('#btnAlertOk').off('click');
        if (typeof (ctrlId) == 'undefined')
        {
            ctrlId = '';
        }
        if (typeof (redLoc) == 'undefined')
        {
            redLoc = '';
        }
        $('#alertModal').modal({backdrop: 'static', keyboard: false}).show();
        $('.alertMessage').html(msg);
        $('#btnAlertOk').on('click', function () {
            $('#alertModal').modal('hide');
            if (ctrlId != '')
            {
                $('#' + ctrlId).focus();
            }
            if (redLoc != '')
            {
                window.location.href = redLoc;
            }
        });

    }
function loadNavigation(fLink,glName,plName) 
{
	var totLink = '';
	var glName	= (fLink!='Dashboard')? glName :'Dashboard';
	var plName	= (fLink!='Dashboard')? plName :'';
			//alert(glName);
	if(plName!='')
		totLink="<li>" +  glName + " </li><li>" + plName + "</li>";
	else
		totLink=" <li class='active'> " +  glName + "</li>";
	
	$('#navigation').html('<li><a href="'+appURL+'/dashboard" alt="Home" title="Home" data-original-title="Home" data-rel="tooltip" ><i class="ace-icon fa fa-home home-icon"></i></a></li>'+ totLink);
	$('#title').html(fLink);	
}
// Created by : Ashok kumar Samal :: ON: 07-12-2017
/*function loadHeader(pageName,ctrlId='header-page-name')
{
	$('#header-page-name').html(pageName);
}*/
function loadHeader(pageName,ctrlId)
{
	//='header-page-name'
	ctrlId = (ctrlId=='' || ctrlId==null  || ctrlId==undefined)?'header-page-name':ctrlId;
	//$('#'+ctrlId).html(pageName);
	$('#header-page-name').html(pageName);
}
function loadNavigation_old(fLink) 
{
	var totLink = '';
	var glName	= (getCookie("GlName")!='' && fLink!='Dashboard')?getCookie("GlName"):'Dashboard';
	var plName	= (getCookie("PlName")!='' && fLink!='Dashboard')?getCookie("PlName"):'';
			
	if(plName!='')
		totLink="<li>" +  glName + " </li><li>" + plName + "</li>";
	else
		totLink=" <li class='active'> " +  glName + "</li>";
	
	$('#navigation').html('<li><a href="'+appURL+'/dashboard" alt="Home" title="Home" data-original-title="Home" data-rel="tooltip" ><i class="ace-icon fa fa-home home-icon"></i></a></li>'+ totLink);
	$('#title').html(fLink);	
}

// *** Script for Print page and Updated by Ashok kumar Samal on 13 02 2018 ****//
	function PrintCanvasPage() 
	{
		 var windowName = "PrintPage";
		 var wOption 	= "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
		           
                 
                  if($('#viewTable').has('.comp-summery-sec ')) 
                    {
                        
                             $(".canvasDisplay").css("margin-top", "35px");
                               
                    }
                        var cloneTable 	= $("#viewTable").clone();
               
              
		 cloneTable.find('input[type=text],select,textarea').each(function(){
			var elementType	= $(this).prop('tagName');	
			if(elementType=='SELECT')
				var textVal	= $(this).find("option:selected").text();
			else
				var textVal	= $(this).val();
			$(this).replaceWith('<label>'+ textVal +'</label>');
		 });
		 cloneTable.find('a').each(function(){
			var anchorVal	= $(this).html();
			$(this).replaceWith('<label>'+anchorVal+'</label>');
		 });
		 	var pageTitle	= $("#title").val();
		 	var wWinPrint 	= window.open("",windowName,wOption);
			wWinPrint.document.open();
			wWinPrint.document.write("<html><head><link href='"+appURL+"/css/bootstrap.min.css' rel='stylesheet'><title></title>");
			wWinPrint.document.write("<link href='"+appURL+"/css/print.css' rel='stylesheet'>");
			wWinPrint.document.write('<script src="'+appURL+'/js/chartjs-demo.js"></script><script src="'+appURL+'/js/jquery-ui.min.js"></script><script src="'+appURL+'/js/amcharts.js"></script>			<script src="'+appURL+'/js/pie.js"></script><script src="'+appURL+'/js/Chart.bundle.js"></script>');
			wWinPrint.document.write("</head><body>");
                        //<h1 class='logo'>Aurangabad Industrial Township Limited<br /><span>e-Land Management System</span></h1>
			wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/AITL-Innerlogo.png' border='0' align='absmiddle' alt='Aurangabad Industrial Township Limited' class='logo' /><div class='pull-left text_logo'><h1 class='logo'><br /></h1></div><a href='javascript:void(0)' title='Print' class='btn btn-success btn-sm pull-right' style='margin-right:10px; margin-top:20px; background-color: #5cb85c;border-width: 1px;font-size: 13px; padding: 4px 9px;color:#fff;text-decoration: none;float: right;border-color: #4cae4c' onclick='$(this).hide();window.print();$(this).show();'><i class='icon-white icon-print'></i> Print</a><div class='clear'>&nbsp;</div></div>")
			wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");		
			wWinPrint.document.write("<div id='printContent'>"+cloneTable.html()+"</div>");
			wWinPrint.document.write("<div id='printFooter'>&copy;"+ getCurrentFiscalYear()+ ", AURIC - Aurangabad Industrial City | Maharashtra</div>");
			wWinPrint.document.write("<script src='"+appURL+"/js/jquery-2.1.1.js' type='text/javascript'></script></body></html>");
			
			
			wWinPrint.document.close();
			wWinPrint.focus();			
			return wWinPrint;
}


// *** Script for Print page and Updated by Sudam Chandra Panda on 22nd Aug 2012 ****//
	function PrintPage() 
	{
		 var windowName = "PrintPage";
		 var wOption 	= "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
		 var cloneTable 	= $("#viewTable").clone();
               
		 cloneTable.find('input[type=text],select,textarea').each(function(){
			var elementType	= $(this).prop('tagName');	
			if(elementType=='SELECT')
				var textVal	= $(this).find("option:selected").text();
			else
				var textVal	= $(this).val();
			$(this).replaceWith('<label>'+ textVal +'</label>');
		 });
		 cloneTable.find('a').each(function(){
			var anchorVal	= $(this).html();
			$(this).replaceWith('<label>'+anchorVal+'</label>');
		 });
		 	var pageTitle	= $("#title").val();
		 	var wWinPrint 	= window.open("",windowName,wOption);
			wWinPrint.document.open();
			wWinPrint.document.write("<html><head><link href='"+appURL+"/css/bootstrap.min.css' rel='stylesheet'><title></title>");
			wWinPrint.document.write("<link href='"+appURL+"/css/print.css' rel='stylesheet'>");
			wWinPrint.document.write("</head><body>");          
			wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/AITL-Innerlogo.png' border='0' align='absmiddle' alt='Aurangabad Industrial Township Limited' class='logo' /><div class='pull-left text_logo'><h1 class='logo'><br /></h1></div><a href='javascript:void(0)' title='Print' class='btn btn-success btn-sm pull-right' style='margin-right:10px; margin-top:20px; background-color: #5cb85c;border-width: 1px;font-size: 13px; padding: 4px 9px;color:#fff;text-decoration: none;float: right;border-color: #4cae4c' onclick='$(this).hide();window.print();$(this).show();'><i class='icon-white icon-print'></i> Print</a><div class='clear'>&nbsp;</div></div>")
			wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");		
			wWinPrint.document.write("<div id='printContent'>"+cloneTable.html()+"</div>");
			wWinPrint.document.write("<div id='printFooter'>&copy;"+ getCurrentFiscalYear()+ ", AURIC - Aurangabad Industrial City | Maharashtra</div>");
			wWinPrint.document.write("<script src='"+appURL+"/js/jquery-2.1.1.js' type='text/javascript'></script></body></html>");
			wWinPrint.document.close();
			wWinPrint.focus();
			
			return wWinPrint;
}

//===================== Function to print modal content By Sunil Kumar Parida On 3-Jan-2015 ==========
function printModal(title,content)
{	
	 var windowName = "PrintPage";
         var wOption    = "";
         
	 var cloneTable 	= $("#"+content).clone();
         if(content == 'dispProfile'){
             cloneTable.find(".form-content").show();
             cloneTable.find(".fa-chevron-down").hide();
             cloneTable.find(".fa-chevron-up").hide();
             var conHt          = $("#"+content).height();
             wOption            = wOption+"width=1000,height="+conHt+",menubar=yes,scrollbars=yes,location=no,left=100,top=100";
         }else{
             wOption            = wOption+"width=1000,height=600,menubar=yes,scrollbars=no,location=no,left=100,top=100";
         }
        
	 cloneTable.find('input[type=text],select,textarea').each(function(){
		var elementType	= $(this).prop('tagName');	
		if(elementType=='SELECT')
			var textVal	= $(this).find("option:selected").text();
		else
			var textVal	= $(this).val();
		$(this).replaceWith('<label>'+textVal+'</label>');
	 });
	 cloneTable.find('a').each(function(){
		var anchorVal	= $(this).html();
		$(this).replaceWith('<label>'+anchorVal+'</label>');
	 });
		var pageTitle	= $("#"+title).text();
		var wWinPrint 	= window.open("",windowName,wOption);
		wWinPrint.document.open();
                 var vdata = cloneTable.html();              
		wWinPrint.document.write("<html><head><link href='"+appURL+"/css/bootstrap.min.css' rel='stylesheet'><title></title>");
			wWinPrint.document.write("<link href='"+appURL+"/css/print.css' rel='stylesheet'>");
			wWinPrint.document.write("<link href='"+appURL+"/css/font-awesome.css' rel='stylesheet'>");
			wWinPrint.document.write("<script src='"+appURL+"/js/jquery-2.1.1.js' type='text/javascript'></script>");
			wWinPrint.document.write("</head><body>");
			wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/AITL-Innerlogo.png' border='0' align='absmiddle' alt='Aurangabad Industrial Township Limited' class='logo' /><div class='pull-left text_logo'><h1 class='logo'> </h1></div><a href='javascript:void(0)' title='Print' class='btn btn-success btn-sm pull-right' style='margin-right:10px; margin-top:20px; background-color: #5cb85c;border-width: 1px;font-size: 13px; padding: 4px 9px;color:#fff;text-decoration: none;float: right;border-color: #4cae4c' onclick='$(this).hide();window.print();$(this).show();'><i class='icon-white icon-print'></i> Print</a><div class='clear'>&nbsp;</div></div>")
	
		
               wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");		
		wWinPrint.document.write("<div id='printContent'>"+vdata+"</div>");
		//wWinPrint.document.write("<div id='printFooter'>&copy; 2014-15, Department of Town & country Planning, Himachal Pradesh</div>");
		wWinPrint.document.write("</body></html>");
		wWinPrint.document.close();
		wWinPrint.focus();
                    return wWinPrint;
                //setTimeout(function(){ wWinPrint.print(); }, 1500);
		

	
}
function printModal3(title,content)
{	//alert(content);
    //var t=document.querySelector("#approvalFormFrame");
    //var page = $('#approvalFormFrame').contents().find('html');
   // alert(t.innerHTML());
	 var windowName = "PrintPage";
         var wOption    = "";
         
	 var cloneTable 	= $("#"+content).clone();
         if(content == 'dispProfile'){
             cloneTable.find(".form-content").show();
             cloneTable.find(".fa-chevron-down").hide();
             cloneTable.find(".fa-chevron-up").hide();
             var conHt          = $("#"+content).height();
             wOption            = wOption+"width=1000,height="+conHt+",menubar=yes,scrollbars=yes,location=no,left=100,top=100";
         }else{
             wOption            = wOption+"width=1000,height=600,menubar=yes,scrollbars=no,location=no,left=100,top=100";
         }
        //var cloneTable =  $( "object" ).find("#"+content).contents();
            //alert(cloneTable);
	 cloneTable.find('input[type=text],select,textarea').each(function(){
		var elementType	= $(this).prop('tagName');	
		if(elementType=='SELECT')
			var textVal	= $(this).find("option:selected").text();
		else
			var textVal	= $(this).val();
		$(this).replaceWith('<label>'+textVal+'</label>');
	 });
	 cloneTable.find('a').each(function(){
		var anchorVal	= $(this).html();
		$(this).replaceWith('<label>'+anchorVal+'</label>');
	 });
		var pageTitle	= $("#"+title).text();
		var wWinPrint 	= window.open("",windowName,wOption);
		wWinPrint.document.open();
                 var vdata = cloneTable.html();
                //alert(vdata);
		wWinPrint.document.write("<html><head><link href='"+appURL+"/css/bootstrap.min.css' rel='stylesheet'><title></title>");
			wWinPrint.document.write("<link href='"+appURL+"/css/print.css' rel='stylesheet'>");
			wWinPrint.document.write("<link href='"+appURL+"/css/font-awesome.css' rel='stylesheet'>");
			wWinPrint.document.write("<script src='"+appURL+"/js/jquery-2.1.1.js' type='text/javascript'></script>");
			wWinPrint.document.write("</head><body>");
			wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/AITL-Innerlogo.png' border='0' align='absmiddle' alt='Aurangabad Industrial Township Limited' class='logo' /><div class='pull-left text_logo'><h1 class='logo'>Aurangabad Industrial Township Limited<br /><span>e-Land Management System</span></h1></div><a href='javascript:void(0)' title='Print' class='btn btn-success btn-sm pull-right' style='margin-right:10px; margin-top:20px; background-color: #5cb85c;border-width: 1px;font-size: 13px; padding: 4px 9px;color:#fff;text-decoration: none;float: right;border-color: #4cae4c' onclick='$(this).hide();window.print();$(this).show();'><i class='icon-white icon-print'></i> Print</a><div class='clear'>&nbsp;</div></div>")
		//wWinPrint.document.write("<html><head><link href='"+appURL+"/css/print.css' rel='stylesheet'><title></title></head><body>");
		/*wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/printLogo.png' border='0' align='absmiddle' alt='Department of Town and Country Planning, Himachal Pradesh' class='logo' /><div class='pull-left text_logo'><h1 class='logo'>Department of Town and Country Planning<br /><span>Government of Himachal Pradesh</span></h1></div><div class='clear'>&nbsp;</div></div>")
		*/
               wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");		
		wWinPrint.document.write("<div id='printContent'>"+vdata+"</div>");
		//wWinPrint.document.write("<div id='printFooter'>&copy; 2014-15, Department of Town & country Planning, Himachal Pradesh</div>");
		wWinPrint.document.write("</body></html>");
		wWinPrint.document.close();
		wWinPrint.focus();
                    //return wWinPrint;
                //setTimeout(function(){ wWinPrint.print(); }, 1500);
		

	
}
//=====================================================================================================
function printModal2(title,content)
{	//alert(content);
    //var t=document.querySelector("#approvalFormFrame");
    //var page = $('#approvalFormFrame').contents().find('html');
   // alert(t.innerHTML());
	 var windowName = "PrintPage";
	 var wOption 	= "width=1000,height=600,menubar=yes,scrollbars=no,location=no,left=100,top=100";
	 var cloneTable 	= $("#"+content).clone();
        //var cloneTable =  $( "object" ).find("#"+content).contents();
            //alert(cloneTable);
	 cloneTable.find('input[type=text],select,textarea').each(function(){
		var elementType	= $(this).prop('tagName');	
		if(elementType=='SELECT')
			var textVal	= $(this).find("option:selected").text();
		else
			var textVal	= $(this).val();
		$(this).replaceWith('<label>'+textVal+'</label>');
	 });
	 cloneTable.find('a').each(function(){
		var anchorVal	= $(this).html();
		$(this).replaceWith('<label>'+anchorVal+'</label>');
	 });
		var pageTitle	= $("#"+title).text();
		var wWinPrint 	= window.open("",windowName,wOption);
		wWinPrint.document.open();
                 var vdata = cloneTable.html();
                //alert(vdata);
		wWinPrint.document.write("<html><head><link href='"+appURL+"/css/print.css' rel='stylesheet'><title></title></head><body>");
		/*wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/printLogo.png' border='0' align='absmiddle' alt='Department of Town and Country Planning, Himachal Pradesh' class='logo' /><div class='pull-left text_logo'><h1 class='logo'>Department of Town and Country Planning<br /><span>Government of Himachal Pradesh</span></h1></div><div class='clear'>&nbsp;</div></div>")
		*/
               wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");		
		wWinPrint.document.write("<div id='printContent' align='center'>"+vdata+"</div>");
		//wWinPrint.document.write("<div id='printFooter'>&copy; 2014-15, Department of Town & country Planning, Himachal Pradesh</div>");
		wWinPrint.document.write("</body></html>");
		wWinPrint.document.close();
		wWinPrint.focus();
                    //return wWinPrint;
                //setTimeout(function(){ wWinPrint.print(); }, 800);
		

	
}
//=====================================================================================================
function printModalLogo(title,content)
{	
	 var windowName = "PrintPage";
	 var wOption 	= "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
	 var cloneTable 	= $("#"+content).clone();
	 cloneTable.find('input[type=text],select,textarea').each(function(){
		var elementType	= $(this).prop('tagName');	
		if(elementType=='SELECT')
			var textVal	= $(this).find("option:selected").text();
		else
			var textVal	= $(this).val();
		$(this).replaceWith('<label>'+textVal+'</label>');
	 });
	 cloneTable.find('a').each(function(){
		var anchorVal	= $(this).html();
		$(this).replaceWith('<label>'+anchorVal+'</label>');
	 });
		var pageTitle	= (title!='')?$("#"+title).text():'';
		var wWinPrint 	= window.open("",windowName,wOption);
		wWinPrint.document.open();
		wWinPrint.document.write("<html><head><link href='"+appURL+"/css/print.css' rel='stylesheet'><title></title></head><body>");
		//wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/printLogo.png' border='0' align='absmiddle' alt='Department of Town and Country Planning, Himachal Pradesh' class='logo' /><div class='pull-left text_logo'><h1 class='logo'>Department of Town and Country Planning<br /><span>Government of Himachal Pradesh</span></h1></div><div class='clear'>&nbsp;</div></div>")
		wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");		
		wWinPrint.document.write("<div id='printContent'>"+cloneTable.html()+"</div>");
		//wWinPrint.document.write("<div id='printFooter'>&copy; 2014-15, Department of Town & country Planning, Himachal Pradesh</div>");
		wWinPrint.document.write("</body></html>");
		wWinPrint.document.close();
		wWinPrint.focus();
		return wWinPrint;
                 //setTimeout(function(){ wWinPrint.print(); }, 500);
	
}
//==================By : Ashok kumar Samal :: on: 2-12-2017==============================
	function PrintComplaintPage() {
		 var windowName = "PrintPage";
		 var wOption 	= "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
		 var cloneTable = $(".mdspeak").clone();
		 cloneTable.find('input[type=text],select,textarea,i').each(function(){
			var elementType	= $(this).prop('tagName');	
			if(elementType=='SELECT')
				var textVal	= $(this).find("option:selected").text();
			else
				var textVal	= $(this).val();
			$(this).replaceWith('<label>'+ textVal +'</label>');
		 });
		 cloneTable.find('a').each(function(){
			var anchorVal	= $(this).html();
			$(this).replaceWith('<label>'+anchorVal+'</label>');
		 });
		 	var pageTitle	= $(".headername").text();
		 	var wWinPrint 	= window.open("",windowName,wOption);
			wWinPrint.document.open();
			wWinPrint.document.write("<html><head><link href='"+appURL+"/css/print.css' rel='stylesheet'><title></title></head><body onload='window.print();'>");
		//	wWinPrint.document.write("<div id='header'><div class='pull-left text_logo'><img src='"+siteUrl+"/images/logo.png'></div>  <div class='pull-left text_logo'><h1 class='logo'>Republic of Sudan <br><small>General Secretariat of the Council of Minister</small></h1></div>  <a href='javascript:void(0);' title='Print'  onclick='window.print()' data-original-title='Print' class='innerContentprint'> Print </a> <div class='clear'>&nbsp;</div></div>");
			wWinPrint.document.write("<div id='header'><div class='pull-left text_logo'><img src='"+siteUrl+"/images/logo.png'></div>  <div class='pull-left text_logo'><h1 class='logo'> <br><small></small></h1></div>  <a href='javascript:void(0);' title='Print'  onclick='window.print()' data-original-title='Print' class='innerContentprint'> Print </a> <div class='clear'>&nbsp;</div></div>");
			wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");		
			wWinPrint.document.write("<div id='printContent'>"+cloneTable.html()+"</div>");
			wWinPrint.document.write("<div id='printFooter'>&copy;" + getCurrentFiscalYear()+", SGP, All Rights Reserved.</div>");
			wWinPrint.document.write("</body></html>");
			wWinPrint.document.close();
			wWinPrint.focus();
		return wWinPrint;
}

// ******************** function for Date & Time ********************** //
function dateTime(idVal)
{
	//Set Weedday against current day in numeric
	var WeekDay	= new Array(7);
	WeekDay[0]	= "Sunday";
	WeekDay[1]	= "Monday";
	WeekDay[2]	= "Tuesday";
	WeekDay[3]	= "Wednesday";
	WeekDay[4]	= "Thursday";
	WeekDay[5]	= "Friday";
	WeekDay[6]	= "Saturday";
	
	//Set month Name against current Month in numeric 
	var monthName = new Array( "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
	
	var CurDateTime	= new Date();
	//alert(CurDate);
	var curDay		= CurDateTime.getDay();
	var curDate		= CurDateTime.getDate();
	var curMonth	= CurDateTime.getMonth();
	var curYear		= CurDateTime.getFullYear();
	var curHH		= CurDateTime.getHours();
	var curMM		= CurDateTime.getMinutes();
	var curSS		= CurDateTime.getSeconds();
	
	if(curHH>=12)
	{
		curHH=curHH-12;
		var Hour = "PM";
	}
	else
		var Hour = "AM";
		
	if(curMM<10)
		curMM='0'+curMM;
	if(curSS<10)
		curSS='0'+curSS;
	
	var date	 	= "<span class='clock'>"+WeekDay[curDay]+", "+monthName[curMonth]+" "+curDate+", "+curYear+"  "+curHH+":"+curMM+":"+curSS+" "+Hour+"</span>";
	//alert(date)
	$('#'+idVal).html(date);
	setTimeout('dateTime(\''+idVal+'\')',1000);
}
//======== Function for set cookie value By Sunil Kumar Parida On 11/09/2014 =========
function setCookie(cname,cvalue,exdays) 
{
	removeCookie(cname);
	var d = new Date();
	d.setTime(d.getTime() + (exdays*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}
//======== Function for get cookie value By Sunil Kumar Parida On 11/09/2014 =========
function getCookie(cname) 
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) 
		{
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
//======== Function for remove cookie By Sunil Kumar Parida On 11/09/2014 =========
function removeCookie(cname) 
{    
	document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
//======== Function for redirect to page By Sunil Kumar Parida On 11/09/2014 =========
/*function goToPage(page,Gl,Pl,GlName,PlName)
{
	setCookie("GLink",Gl,2);
	setCookie("PLink",Pl,2);	
	setCookie("GlName",GlName,2);
	setCookie("PlName",PlName,2);
	window.location.href=page;		
}*/
//scripts for popover
$(function () { 
		if($(".popover-html").length>0)
			$(".popover-html").popover({ html : true });		
});


//Function to textcounter.
function TextCounter(ctlTxtName,lblCouter,numTextSize)
{
   
	 var txtName = $('#'+ctlTxtName).val();	
	 var txtNameLength = txtName.length;
	 if (parseInt(txtNameLength) > parseInt(numTextSize)) 
	 {
		var txtMaxTextSize = txtName.substr(0,numTextSize);
		$("#"+ctlTxtName).val(txtMaxTextSize);		 
		viewAlert("Entered text exceeds "+ numTextSize +" characters.");
		$("#"+lblCouter).text(0);		  
		return false;
	 }
	 else
	 {
		 $("#"+lblCouter).text ( parseInt(numTextSize) -parseInt(txtNameLength));			 
		  return true;
	   
	 }
}
// Function to download excell :: By:: Rasmi Ranjan Swain ::on :: 03-OCT-2016
/*function downloadExcel()
{
	var actions = "EX";
	$("#hdn_qs").val(actions);
	$('#frmAITL').submit();
	$("#hdn_qs").val('');
}*/
    function downloadExcel()
    {
       var totalR = $("#hdn_totalRecord").val();
       
        if(totalR<=0)
        {
          alert("No Record Found");
        }
        else{
            var actions = "EX";
            $("#hdn_qs").val(actions);
            $('form').submit();
            $("#hdn_qs").val('');
        }
       
        //window.location.reload();
    }
// ****************** function for Delete Records ***************** //
function gotoDelete(action)
{	
	var PIds='';
	$('.chkItem').each(function(){
		if($(this).is(':checked'))
			PIds	+= $(this).val()+',';
	});
       
	if(PIds.length>0)
	{
					PIds        = PIds.substring(0,PIds.length - 1);
					var pidVal      =  PIds.split(',');
					var totalcount  = pidVal.length;
					for(var i=0;i<totalcount;i++)
					{
						var pubStatus	=$('#hdnPubStatus'+pidVal[i]).val();
						if(pubStatus==1 && action=='SH' )
						{
							  viewAlert("First publish record(s) to display on Homepage.");	
							  $('#hdnPubStatus'+pidVal[i]).focus();
								return false;
						}
						
						
					}
		 		   
				
		if(action=='D')
		{
			confirmAlert('Are you sure to delete selected record(s)')
		}
		if(action=='AR')
		{
			confirmAlert('Are you sure to archive selected record(s)')	
			
		}
		if(action=='IN')
		{
			confirmAlert(' Are you sure to unpublish selected record(s)')	
			
		}
		if(action=='AC')
		{
			confirmAlert('Are you sure to enable selected record(s)')	
			
		}
		if(action=='P')
		{
			confirmAlert('Are you sure to publish selected record(s)')
		}
		if(action=='US')
		{
            confirmAlert('Are you sure to change the position of selected record(s)')
		}
		if(action=='SH')
		{
			confirmAlert('Are you sure to display selected record(s) on homepage')
		}
		if(action=='HH')
		{
			confirmAlert('Are you sure to hide selected record(s) on homepage')					
		}
		$('#btnConfirmOk').on('click',function(){
                    $("#hdn_ids").val(PIds);
                    $("#hdn_qs").val(action);
                    $('#frmAITL').submit();
		});
	}
	else
	{
		viewAlert('Please select a record!');
		return false;
	}		
}
	
   

function DoPaging(CurrentPage,RecordNo)
{
	$("#hdn_PageNo").val(CurrentPage);
	$("#hdn_RecNo").val(RecordNo);
	$("form").submit();
}

function AlternatePaging()
{
	if($('#hdn_IsPaging').val()=="0")	
		$("#hdn_IsPaging").val("1");
	else	
		$("#hdn_IsPaging").val("0");
	$("form").submit();	
}
        
function displayCkeditor(id)
{
    
	if(CKEDITOR.instances[id])
	{
		CKEDITOR.remove(CKEDITOR.instances[id]);
	}

	CKEDITOR.replace(id,  {			
					filebrowserBrowseUrl : appURL+"/controller/browser.php",
		filebrowserUploadUrl :      appURL+"/controller/upload.php?type=files",
		filebrowserImageUploadUrl : appURL+"/controller/upload.php?type=images",
		filebrowserFlashUploadUrl : appURL+"/controller/upload.php?type=flash"
	});
			CKEDITOR.on( 'dialogDefinition', function( ev ) {
					// Take the dialog name and its definition from the event data.
					var dialogName = ev.data.name;
					var dialogDefinition = ev.data.definition;

					// Check if the definition is from the dialog window you are interested in (the "Link" dialog window).
					if ( dialogName == 'image' ) {
					   $('#hdnHttp').val('http://');
					}
					else if(dialogName == 'link')
					{
					 $('#hdnHttp').val('');
					 }
			});
}
		
// *** Script for show hide search pannel by Sunil Kumar Parida on 18th Oct 2013 ****//
function viewSearchPannel(flag, pannelId, buttonId)
{
	var window_width=$(window).width();
		
	 if(window_width< 660)	
	{
		
		$("#"+buttonId).html(' <i class="bigger-110 fa fa-filter"></i>');	
	}
	else{
	if(flag=='S')
	{
		
		
		$('#'+pannelId).show();
		$('#'+buttonId).html('Close Search Panel <i class="bigger-110 fa fa-chevron-circle-up"></i>');
		$('#'+buttonId).closest('div').removeClass('search-close');
		
		
	}
	else
	{
		$('#'+pannelId).hide();
		$('#'+buttonId).html('Open Search Panel <b class="bigger-110 fa fa-chevron-circle-down"></b>');
		$('#'+buttonId).closest('div').addClass('search-close');
	}
	}
	
	
	
	$("#"+buttonId).click(function(){
    if(window_width< 660)
		{
		$("#"+pannelId).slideToggle('slow', function() {
			
			if ($("#"+pannelId).is(":hidden")) 
			{
				$("#"+buttonId).html(' <i class="bigger-110 fa fa-filter"></i>');
				$('#'+buttonId).closest('div').addClass('search-close');
			}
			else
			{
				$('#'+buttonId).html('<i class="bigger-110 fa fa-times"></i>');
				$('#'+buttonId).closest('div').removeClass('search-close');	
			}
        });	
			}
		else{
			$("#"+pannelId).slideToggle('slow', function() {
			
			if ($("#"+pannelId).is(":hidden")) 
			{
				$("#"+buttonId).html('Open Search Panel <i class="bigger-110 fa fa-chevron-circle-down"></i>');
				$('#'+buttonId).closest('div').addClass('search-close');
			}
			else
			{
				$('#'+buttonId).html('Close Search Panel <i class="bigger-110 fa fa-chevron-circle-up"></i>');
				$('#'+buttonId).closest('div').removeClass('search-close');	
			}
        });	
			
		}
		
	});
}
// *** Script for function to check duplicate by Rasmi Ranjan Swain on 18th Feb 2015 ****//



function hasDuplicates(array) 
{
   var valuesSoFar = [];
   var flag =0;
   for (var i = 0; i < array.length; ++i) {
	   var value = array[i];
	   if (valuesSoFar.indexOf(value) !== -1) {           
				 flag++;
	   }
	   valuesSoFar.push(value);
   }
return flag;
}
       
// function to scroll to topposition
function scrollToPosition(id)
{  
    $('html, body').animate({ scrollTop: $('#'+id).offset().top-300 }, 'slow');
    $('#'+id).focus();
}

// *** Script for document pop up by Abhiram Samantara on 01th Nov 2016 ****//
function loadPopUp(){
    $(document).on('click','.docPopUp', function () {
        $(".popover").hide();
        $(this).find(".popover").show();
        var ht = $(this).find(".popover").height()+5;
        $(this).find(".popover").css("top","-"+ht+"px");
    });
    $(document).on('click','.closPopUp', function (e) {
        e.stopPropagation();
        $(this).closest('.popover').css("display","none");
    });
    
    $(".docPopUp").each(function(){
        //alert($(this).data('encryptid'));
        //alert($(this).attr('id')+'/'+$(this).data('profid')+'/'+$(this).data('status')+'/'+$(this).data('agreecopy')+'/'+$(this).data('alotcopy')+'/'+$(this).data('posslip')+'/'+$(this).data('meetid')+'/'+$(this).data('siteplan')+'/'+$(this).data('mom')+'/'+$(this).data('momsts'));
        appendPopUp($(this).attr('id'),
                    $(this).data('profid'),
                    $(this).data('status'),
                    $(this).data('agreecopy'),
                    $(this).data('uagreecopy'),
                    $(this).data('alotcopy'),
                    $(this).data('posslip'),
                    $(this).data('meetid'),
                    $(this).data('siteplan'),
                    $(this).data('mom'),
                    $(this).data('momsts'),
                    $(this).data('landid'),
                    $(this).data('encryptid')
                            
					);
    });
    
}
function showMoneyReceipt(appId)
{
       $('#moneyRecModal').modal();
       $("#receiptTitle").html('Payment Receipt');
       $('#receipt').attr('data', appURL+'/moneyReceipt/'+ appId);
}
function showMOM(meetId)
{
       $('#moneyRecModal').modal();
       $("#receiptTitle").html('LAC MOM Details');
       $('#receipt').attr('data', appURL+'/uploadMOMPdf/'+ meetId);
}
function showSitePlan(siteplan)
{
       $('#sitePlanModal').modal();
	   $("#sitePlanTitle").html('Site Plan');
       $("#sitePlan").html("<img src='"+siteUrl+"/uploadDocuments/"+siteplan+"' width='100%'/>");
}
function viewPDF(PDFFile,PDFTititle)
{
   $('#myModa20').modal();
   $("#PDFTitle").html(PDFTititle);
   $('#PDFFrame').attr('data', siteUrl+'/uploadDocuments/' + PDFFile);
}
function viewPDFAPP(PDFFile,PDFTititle)
{
   $('#myModa20').modal();
   $("#PDFTitle").html(PDFTititle);
   $('#PDFFrame').attr('data', appURL+'/uploadDocuments/' + PDFFile);
}
function appendPopUp(controlId,profileId,status,agreeCopy,uagreeCopy,alotCopy,posslip,meetId,siteplan,momDoc,momsts,landid,encryptId){
    var popUpHtmlHead = '<div class="popover fade top in" style="left: -110px; display: none;width: 250px;">'+
                    '<div class="arrow" style="left: 50%;"></div>'+
                    '<h3 class="popover-title">Documents<i class="fa fa-close pull-right closPopUp"></i></h3>'+
                    '<div class="popover-content"><table class="table"><tbody>';
            
    var popUpHtmlFoot ='</tbody></table></div></div>';
    
    /* if(status>=8){
        popUpHtmlHead = popUpHtmlHead+'<tr><td>MOM</td><td>:</td><td><a href="#" class="meetPopup" onclick=""><i class="fa fa-print"></i></a></td></tr>';
     }*/
    //if(status>=8 && momsts==2){
        if(status>=8 && momDoc != ''){
         popUpHtmlHead = popUpHtmlHead+'<tr><td>MOM</td><td>:</td><td><a href="#" class="meetPopup" onclick=""><i class="fa fa-file"></i></a></td></tr>';
     }
     
     if(status>=9){
         popUpHtmlHead = popUpHtmlHead+'<tr><td>Allotment Letter</td><td>:</td><td><a href="#" class="alotCopy" onclick=""><i class="fa fa-file"></i></a></td></tr>';
         //popUpHtmlHead = popUpHtmlHead+'<tr><td>Site Plan</td><td>:</td><td><a href="#" class="sitePlan" onclick=""><i class="fa fa-file"></i></a></td></tr>';
     }
     if(status>=11 && agreeCopy != ''){
         popUpHtmlHead = popUpHtmlHead+'<tr><td>Agreement Letter</td><td>:</td><td><a href="#" class="agreeCopy" onclick=""><i class="fa fa-file"></i></a></td></tr>';
     }
     if(status>=12){
         popUpHtmlHead = popUpHtmlHead+'<tr><td>Agreement Letter By Applicant</td><td>:</td><td><a href="#" class="uagreeCopy" onclick=""><i class="fa fa-file"></i></a></td></tr>';
     }
     if(status>=13){
         popUpHtmlHead = popUpHtmlHead+'<tr><td>Possesion Report</td><td>:</td><td><a href="#" class="posslip" onclick=""><i class="fa fa-file"></i></a></td></tr>';
     }
     if(status>=4){
          popUpHtmlHead = popUpHtmlHead+'<tr><td>Payment Receipt</td><td>:</td><td><a class="moneyPop" href="#" onclick=""><i class="fa fa-print"></i></a></td></tr>';
         
     }
     if(status>=12){
         popUpHtmlHead = popUpHtmlHead+'<tr><td>Property Card</td><td>:</td><td><a href="'+appURL+'/propertyCard/'+encryptId+'" target="_blank"><i class="fa fa-file"></i></a></td></tr>';
     }
     if(status<4){
         popUpHtmlHead = popUpHtmlHead+'<tr><td>No Documents</td></tr>';
     }
     //var applandid = profileId+':'+landid;
     //alert(5+'--'+encryptId);
    $("#"+controlId).append(popUpHtmlHead+popUpHtmlFoot);
    $("#"+controlId).find(".moneyPop").attr("onclick","showMoneyReceipt('"+encryptId+"')");
    $("#"+controlId).find(".meetPopup").attr("onclick","viewPDFAPP('"+momDoc+"','LAC MOM')");
    $("#"+controlId).find(".sitePlan").attr("onclick","showSitePlan('"+siteplan+"')");
    $("#"+controlId).find(".agreeCopy").attr("onclick","viewPDF('"+agreeCopy+"','Land Agreement')");
    $("#"+controlId).find(".uagreeCopy").attr("onclick","viewPDF('"+uagreeCopy+"','Uploaded Land Agreement By Applicant')");
    $("#"+controlId).find(".alotCopy").attr("onclick","viewPDF('"+alotCopy+"','Land Allotment')");
    $("#"+controlId).find(".posslip").attr("onclick","viewPDF('"+posslip+"','Posession Slip')");
}

/*Function to show indian money format
	By Sunil Kumar Parida 
	On 08-Nov-2016
*/
function custom_money_format(price)
{
	price = price.replace(/,/g , "");
	var afterPoint = '';
	if(price.indexOf('.') > 0){
            afterPoint = price.substring(price.indexOf('.'),price.length);
            afterPoint = '.'+afterPoint.substring(1,3);
        }
	price = Math.floor(price);
	price=price.toString();
	var lastThree = price.substring(price.length-3);
	var otherNumbers = price.substring(0,price.length-3);
	if(otherNumbers != '')
		lastThree = ',' + lastThree;
	var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
	return res;
}


  function goBack()
	{
		var path= backPath;
		if(typeof(path)=='undefined' || path==''){
		var referrer =  document.referrer;
		window.location.href = referrer;
		}
		else		
			window.location.href=path;
		
	}   

function convertToSlug(Text, bindId)
{
    var slug = Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    $("#" + bindId).val(slug);
}


////////////////////Added ON: 02-11-2018 START////////////////////////



function printModalPayment(title, content)
{
    var windowName = "PrintPage";
    var wOption = "width=1000,height=600,menubar=yes,scrollbars=no,location=no,left=100,top=100";
    var cloneTable = $("#" + content).clone();

    cloneTable.find('input[type=text],select,textarea').each(function () {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SELECT')
            var textVal = $(this).find("option:selected").text();
        else
            var textVal = $(this).val();
        $(this).replaceWith('<label>' + textVal + '</label>');
    });
    cloneTable.find('a').each(function () {
        var anchorVal = $(this).html();
        $(this).replaceWith('<label>' + anchorVal + '</label>');
    });

    var pageTitle = $("#" + title).text();
    var wWinPrint = window.open("", windowName, wOption);
    wWinPrint.document.open();
    var vdata = cloneTable.html();

    wWinPrint.document.write("<html><head><link href='" + appURL + "/css/print.css' rel='stylesheet'><title></title></head><body>");

    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + vdata + "</div>");

    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    //return wWinPrint;
    setTimeout(function () {
        wWinPrint.print();
    }, 500);

}


////////////////////Added ON: 02-11-2018 END ////////////////////////
