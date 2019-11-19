/* ================================================
/* ================================================
 File Name            : loadAjax.js
 Description          : This page is used to load AJAX JSON request.
 Author Name          : Arpita Rath 
 Date Created         : 30-10-2017
 Update History       :
 <Updated by>           <Updated On>        <Remarks>   
 ==================================================*/
   /*
    Function to read Page content
    By: Arpita Rath 
    On: 30-10-2017
    */
	
    var RESOLVED_STATUS=5;
     var CATEGORYOTHER=38;
        var arrcontent = new Array();
        var validFlag   = '0';
       function readPageContent(pageId)
       { 

             $.ajax({
                    type: "POST",
                    url: appURL + '/proxy',
                    dataType: "json",
                    data     : {method:"redContent",PID:pageId},
                    success  : function(data) 
                    {
                        var totalRecord = data.contentResult.length;
                        var pageID      = '0';  
                        var hdnContentId    = '0';
                        var hdnPagevalue    = '';
                        $('#hdnPageId1').val(pageID);
                        $('#hdnContentId1').val(hdnContentId);  
                        $('#hdnPagevalue1').val(hdnPagevalue); 
                        var activeBtn   = 1;
                        if(totalRecord>0){
                            for(var i=1;i<=totalRecord;i++)
                            {
                                
                                pageID         = data.contentResult[i-1].intPageNo;
                                hdnPagevalue   = data.contentResult[i-1].strContent;                                  
                                    $('#hdnPageId'+i).val(pageID);
                                    $('#hdnContentId'+i).val(pageId);   
                                    $('#hdnPagevalue'+i).val(hdnPagevalue);
                                    CKEDITOR.instances['txtContentE'].setData(hdnPagevalue);
                                    arrcontent.push(hdnPagevalue);
                                    validFlag=1; 
                                    if(i<totalRecord)
                                        $('.addMore').click();
                                    validFlag=0;                                     
                            }
                            activeBtn=totalRecord;
                        }                       
                    }
            });
        }

     /*
     Function to read Page hindi content
     By: Arpita Rath
     On: 31-10-2017
    */

    var arrcontentH = new Array();
    var validFlagH = '0';
    function readPageContentH(pageId)
    {
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: "redContentH", PID: pageId},
            success: function (data)
            {
                var totalRecord = data.contentResult.length;
                var pageID = '0';
                var hdnContentId = '0';
                var hdnPagevalue = '';
                $('#hdnPageIdH1').val(pageID);
                $('#hdnContentIdH1').val(hdnContentId);
                $('#hdnPagevalueH1').val(hdnPagevalue);
                var activeBtn = 1;
                if (totalRecord > 0) {
                    for (var i = 1; i <= totalRecord; i++)
                    {
                        pageID       = data.contentResult[i - 1].intPageNo;
                        hdnContentId = data.contentResult[i - 1].intContentId;
                        hdnPagevalue = data.contentResult[i - 1].strContent;

                        $('#hdnPageIdH' + i).val(pageID);
                        $('#hdnContentIdH' + i).val(hdnContentId);
                        $('#hdnPagevalueH' + i).val(hdnPagevalue);
                        CKEDITOR.instances['txtContentH'].setData(hdnPagevalue);
                        arrcontentH.push(hdnPagevalue);
                        validFlagH = 1;
                        if (i < totalRecord)
                            $('.addMoreH').click();
                        validFlagH = 0;
                    }
                    activeBtn = totalRecord;
                }
            }
        });
    }

    /*
     Function to read Page Marathi content
     By: Arpita Rath
     On: 31-10-2017
   */

    var arrcontentM = new Array();
    var validFlagM  = '0';
    function readPageContentM(pageId)
    {
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: "redContentM", PID: pageId},
            success: function (data)
            {
                var totalRecord = data.contentResult.length;
                var pageID = '0';
                var hdnContentId = '0';
                var hdnPagevalue = '';
                $('#hdnPageIdM1').val(pageID);
                $('#hdnContentIdM1').val(hdnContentId);
                $('#hdnPagevalueM1').val(hdnPagevalue);
                var activeBtn = 1;
                if (totalRecord > 0) {
                    for (var i = 1; i <= totalRecord; i++)
                    {
                        pageID       = data.contentResult[i - 1].intPageNo;
                        hdnContentId = data.contentResult[i - 1].intContentId;
                        hdnPagevalue = data.contentResult[i - 1].strContent;

                        $('#hdnPageIdM' + i).val(pageID);
                        $('#hdnContentIdM' + i).val(hdnContentId);
                        $('#hdnPagevalueM' + i).val(hdnPagevalue);
                        CKEDITOR.instances['txtContentM'].setData(hdnPagevalue);
                        arrcontentM.push(hdnPagevalue);
                        validFlagM = 1;
                        if (i < totalRecord)
                            $('.addMoreM').click();
                        validFlagM = 0;
                    }
                    activeBtn = totalRecord;
                }
            }
        });
    }
    

       
     /*
     Function to read Page Name Id
     By: Pusparani Mandal
     On: 31-Oct-2017
     */
    $.fillPageNm = function(controlId,selValue)
    {
        $.ajax({
            type: "POST",
            url: appURL+'/proxy',
            dataType: "json",
            data: {method:'fillPageNm',selVal:selValue},
            success: function(data){
                if(data.PageNm.length>0){
                 $('#'+controlId).html(data.PageNm);	
                }
            }
        });	
    }
    
     /*
     Function to read Media Category Name Id
     By: Pusparani Mandal
     On: 04-Nov-2017
     
    $.fillMediaCategory = function(controlId,selValue,galType)
    {alert(0);return false;
        $.ajax({
            type: "POST",
            url: appURL+'/proxy',
            dataType: "json",
            data: {method:'fillMediaCategory',selVal:selValue,galType:galType},
            success: function(data){
                if(data.CategoryNm.length>0){
                 $('#'+controlId).html(data.CategoryNm);	
                }
            }
        });	
    }*/
	
	function fillMediaCategory(controlId,selValue,galType,galCatType,otherVal)
	{
		$.ajax({
            type: "POST",
            url: appURL+'/proxy',
            dataType: "json",
            data: {method:'fillMediaCategory',selVal:selValue,galType:galType,galCatType:galCatType,otherVal:otherVal},
            success: function(data){
               // if(data.CategoryNm.length>0){
                 $('#'+controlId).html(data.CategoryNm);	
                //}
            }
        });
	}
    
    /*
     Function to get Published Page.
     By: Pusparani Mandal
     On: 08-Nov-2017
     */
    function getPublishedPage(crtlId,crtlId1,publishOn,pageNm)
    {
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getPublishedPage',pubOn:publishOn,pageNm:pageNm},
            success: function (data) {
                var res = data.result;
                if(res.length>0){
                var finalRes = res.split('~::~');                
                // Load results. //
                $("#"+crtlId).html(finalRes[0]);
                $("#"+crtlId1).val(finalRes[1]);
                if(finalRes==','){
                    $("#"+crtlId).html("No record(s) found !");
                }
               }
               else{
                   $("#"+crtlId).html("No record(s) found !");
               }
            }
        });
    }
    
    /*
        Function to fill menu list
        By: Pusparani Mandal
        On: 08-Nov-2017
	*/	
	function fillMenuList(fillCtrlId,menutype,pmId)
	{   
		$('.dd').nestable().removeData().off();
            if(menutype==0){
                 displayEmptyText();
            }
            else{
		$.ajax({
		   type     : "POST",
		   dataType : "json",
		   url      : appURL + '/proxy',
		   data     : {method:"fillMenuList",MTYPE:menutype,PMID:pmId},
		   success  : function(data) 
		   {
		   		var tabdiv	= '';
				var res = data.menu;
                                if(res.length>0){
				 $(res).each(function(i){
						tabdiv+=res[i];
				   });
				 $("#"+fillCtrlId).html(tabdiv);
				 //setTimeout(function(){
                    $('.dd').nestable();
					$('.dd-handle a').on('mousedown', function (e) {
			
						e.stopPropagation();
					});					
					$('.dd-handle .close').on('mousedown', function (e) {
						e.stopPropagation();
					});
					$('.dd-handle .txt').on('mousedown', function (e) {
						e.stopPropagation();
					});
                                         $("#btnPublish,#btnDelete").show();
                                }
                                else
                                {
                                 displayEmptyText();
                                }
               }
	   });
           } 
	} 

    /* --------------------------------------
     Function to get Details of page
     Created by     : Arpita Rath
     Created On     : 31-10-2017
    * -------------------------------------- */ 
     function getPageDetailsUnPub(id,ctrlId,langType)
     {
        $('#pageDetailsEn').find(".modal-body").html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPageDetailsUnPub", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getPageDet;                

                   if(langType==1) {
                      $('#myModalLabel').html('Page Contents');
                   } else if(langType==2) {
                      $('#myModalLabel').html('पैज डिटेल�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('पैज डिटेल�?स');
                   }

                $("#"+ctrlId).html(res);
                //$('#contnId1').show();$('#contnId2').hide();
            }
         });
     }

    /* --------------------------------------
     Function to get Details of page
     Created by     : Arpita Rath
     Created On     : 31-10-2017
    * -------------------------------------- */ 
     function getPageDetails(id,ctrlId,langType)
     {
        $('#pageDetailsEn').find(".modal-body").html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPageDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getPage;

                   if(langType==1) {
                      $('#myModalLabel').html('Page Contents');
                   } else if(langType==2) {
                      $('#myModalLabel').html('पैज कन�?टेन�?ट�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('पैज कन�?टेन�?ट�?स');
                   }

                $("#"+ctrlId).html(res);
            }
         });
     }
    
    /*
     Function to read Banner Details
     By: Pusparani Mandal
     On: 31-Oct-2017
     */
    $.showBannerDetails = function(bid,lng)
    {
        $.ajax({
        type: "POST",
        url: appURL+'/proxy',
        dataType: "json",
        data: {method:"readBannerDetails",bannerId:bid},
        success:function(data){            
            var modalData = '';
            if($(data.bannerResult ).length>0){
            var arr=data.bannerResult;          
            modalData += '<div class="row"><div class="col-sm-12">'; 
            if(lng=='E'){
                modalData += '<div class="form-group">';
                modalData += '<label class="col-sm-2 control-label no-padding-right"> Banner Caption</label>';
                modalData += '<span class="col-sm-10 control-label no-padding-right text-justify">: '+arr.vchBcNmEng+'</span>';	       modalData += '</div>';
                modalData += '<div class="form-group">';
                modalData += '<label class="col-sm-2 control-label no-padding-right"> Description</label>';
                modalData += '<span class="col-sm-10 control-label no-padding-right text-justify">: '+arr.vchDescpEng+'</span>';		modalData += '</div>';
            }
            if(lng=='H'){
                modalData += '<div class="form-group">';
                modalData += '<label class="col-sm-2 control-label no-padding-right"> बैनर कैप�?शन</label>';
                modalData += '<span class="col-sm-10 control-label no-padding-right text-justify">: '+arr.vchBcNmHindi+'</span>';	       modalData += '</div>';
                modalData += '<div class="form-group">';
                modalData += '<label class="col-sm-2 control-label no-padding-right"> विवरण</label>';
                modalData += '<span class="col-sm-10 control-label no-padding-right text-justify">: '+arr.vchDescpHindi+'</span>';		modalData += '</div>';
            }
            if(lng=='M'){
                modalData += '<div class="form-group">';
                modalData += '<label class="col-sm-2 control-label no-padding-right"> बॅनर मथळा</label>';
                modalData += '<span class="col-sm-10 control-label no-padding-right text-justify">: '+arr.vchBcNmMarathi+'</span>';	       modalData += '</div>';
                modalData += '<div class="form-group">';
                modalData += '<label class="col-sm-2 control-label no-padding-right"> वर�?णन</label>';
                modalData += '<span class="col-sm-10 control-label no-padding-right text-justify">: '+arr.vchDescpMarathi+'</span>';		modalData += '</div>';
            }
            var linkType=(arr.tinLinkType==1)?'Yes':'No';
            var linkWebType=(arr.tinLinkWebType==1)?'Internal':'External';

            //var alignMentNm = (arr.vchAlignment=='top')?'Extreme Right':arr.vchAlignment;alert(alignMentNm);
            
            /* START Eng/Hindi/Marathi Text for label */
              var lblHeading='Banner Details'; 
              var lblLink='Link Exist';
              var lblLinkText='Link Text';
              var lblUrlType='Url Type';
              var lblUrl='Page / Url';
              var lblWebUrl='Web Url';
              var lblAlignment='Alignment';
              var lblImage='Image';
              if(lng=='H'){
                 lblLink='लिंक मौजूद है';
                 lblLinkText='लिंक पाठ';
                 lblUrlType='यूआर�?ल टाइप';
                 lblUrl='पेज यूआर�?ल';
                 lblWebUrl='वेब यूआर�?ल';
                 lblAlignment='संरेखण';
                 lblImage='छवि';
                 lblHeading='बैनर विवरण';
              }
              if(lng=='M'){
                 lblLink='द�?वा अस�?तित�?वात आहे';
                 lblLinkText='लिंक मजकूर';
                 lblUrlType='Url प�?रकार';
                 lblUrl='पृष�?ठ / यूआर�?ल';
                 lblWebUrl='वेब Url';
                 lblAlignment='संरेखन';
                 lblImage='प�?रतिमा';
                 lblHeading='बॅनर तपशील';
              }
              
            /* END Eng/Hindi/Marathi Text for label */
            
            
            modalData += '<div class="form-group">';
	    modalData += '<label class="col-sm-2 control-label no-padding-right">'+lblLink+'</label>';
	    modalData += '<span class="col-sm-2 control-label no-padding-right text-justify">: '+linkType+'</span>';
            if(linkType=='Yes'){
                modalData += '<label class="col-sm-2 control-label no-padding-right">'+lblLinkText+'</label>';
                modalData += '<span class="col-sm-2 control-label no-padding-right text-justify">: '+arr.vchLinkTitle+'</span>';
                modalData += '</div>';
                modalData += '<div class="form-group">';
            if(arr.tinLinkWebType==1){
                modalData += '<label class="col-sm-2 control-label no-padding-right">'+lblUrlType+'</label>';
                modalData += '<span class="col-sm-2 control-label no-padding-right text-justify">: '+linkWebType+' </span>';	
                modalData += '<label class="col-sm-2 control-label no-padding-right">'+lblUrl+'</label>';
                modalData += '<span class="col-sm-6 control-label no-padding-right text-justify">: '+arr.tinPageName+'</span>';
            }
            else if(arr.tinLinkWebType==2){
                modalData += '<label class="col-sm-2 control-label no-padding-right">'+lblWebUrl+'</label>';
                modalData += '<span class="col-sm-6 control-label no-padding-right text-justify">:<a href="'+arr.vchWebUrl+'" target="_blank"> '+arr.vchWebUrl+' </a></span>';
            }
        }
	    modalData += '</div>';
            modalData += '<div class="form-group">';
	    modalData += '<label class="col-sm-2 control-label no-padding-right">'+lblAlignment+'</label>';
	    modalData += '<span class="col-sm-2 control-label no-padding-right text-justify">: '+arr.vchAlignment+' </span>';             var imageFile = "#";
            var targetLink=''; 
            if((arr.vchFeaturedImage)!=''){
              imageFile = appURL+'/uploadDocuments/bannerImage/'+arr.vchFeaturedImage;
              targetLink='target="_blank"'; 
           }
            
	    modalData += '</div>';
            modalData += '</div></div>';
            $('#myModalLabel').html(lblHeading);
            $('#divContent').html(modalData);
          }
        }
    });
}

/*
   Function to Publish content
   By:Arpita Rath
   On: 04-11-2017
 */
function publishContent(pageid,type)
{ 
    $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'publishContent', pageId: pageid, type: type},
        success: function (data) {
           $('#pageDetailsEn').hide();
            if(type==1) 
            {  
               viewAlert('Content in english published successfully','',appURL+'/view-page');
            } else if(type==2) {
               viewAlert('Content in hindi published successfully','',appURL+'/view-page'); 
            } else if(type==3) {
               viewAlert('Content in marathi published successfully','',appURL+'/view-page');
            }  
        }
    });
}

 /*
   Function to Publish record
   By:Arpita Rath
   On: 04-11-2017
*/

function publishRecord(pageid,type)
{ 
    $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'publishRecord', pageId: pageid, type: type},
        success: function (data) {
           $('#pageDetailsEn').hide();
            if(type==1) 
            {  
               viewAlert('Content in english published successfully','',appURL+'/view-page');
            } else if(type==2) {
               viewAlert('Content in hindi published successfully','',appURL+'/view-page'); 
            } else if(type==3) {
               viewAlert('Content in marathi published successfully','',appURL+'/view-page');
            }  
        }
    });
}

 /*
     Function to unpublish record
     By:Arpita Rath
     On: 04-11-2017
 */

    function unPublishRecord(pageid,type)
    { 
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'unPublishRecord', pageId: pageid, type: type},
            success: function (data) {
               $('#pageDetailsEn').hide();
                if(type==1) 
                {  
                   viewAlert('Content in english unpublished successfully','',appURL+'/view-page');
                } else if(type==2) {
                   viewAlert('Content in hindi unpublished successfully','',appURL+'/view-page'); 
                } else if(type==3) {
                   viewAlert('Content in marathi unpublished successfully','',appURL+'/view-page');
                }  
            }
        });
    }

/* --------------------------------------
     Function to get Edited Details of page
     Created by     : Arpita Rath
     Created On     : 03-11-2017
* -------------------------------------- */ 
     function getEditPgDetails(id,ctrlId,type)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getEditPgDetails", id :id, type :type},
            success  : function(data) 
            {
                var res = data.getEditPage;                 

                $('#myModalLabel').html('Page Edited Details');

                $("#"+ctrlId).html(res);
            }
         });
     }

 /*
    Function to check duplicate unique page alias
    By: Arpita Rath
    On: 11-03-2017
 */

    function checkDuplicatAlias(pageAlias,id)
    {
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'checkDuplicatAlias', pageAlias: pageAlias, id: id},
            success: function (data) {

                var res = data.dupStatus; 
                $("#aliasFlag").val(res);
                if (Number(res) > 0) {
                    $(".errAlias").show().html("Unique Page Alias already in use");
                    $("[name='btnSubmit']").attr('disabled', 'disabled');
                } else {
                    $(".errAlias").hide();
                    $("[name='btnSubmit']").removeAttr('disabled');
                }
            }
        });
    }    


    /* --------------------------------------
 Function to Load from Annexture Master for auric CMS
 Created by     : Ashok Samal
 Created On     : 06-11-2017
 * -------------------------------------- */
function fillAnexure(controllId, typeId, selVal, parentId,pCategory)
{
    $('#' + controllId + ' option').not(":first").remove();
    parentId = (typeof (parentId) == 'undefined' || parentId == '') ? 0 : parentId;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: appURL + '/proxy',
        data: {method: "fillAnexure", typeId: typeId, selVal: selVal, parentId: parentId},
        success: function (data)
        {
            var res = data.anexure;
            //alert(res);
            $('#' + controllId).html(res);
            if(pCategory!=null){
                if(pCategory.toLowerCase()=='notification'){
                    $("#" + controllId +" option[value='7'],#" + controllId +" option[value='10'], #" + controllId +" option[value='11'], #" + controllId +" option[value='14']").remove();
					$('.selPortletTypeDiv').show();
					$('.imgVidDiv').hide();
					$('.lablImgDiv').hide();
                }
                if(pCategory.toLowerCase()=='news' || pCategory.toLowerCase()=='usefulllink' || pCategory.toLowerCase()=='event'){
                    $('.selPortletTypeDiv').hide();
                }
            }
        }
    });

}

  /* --------------------------------------
 Function to Load from Annexture Master for auric CMS
 Created by     : Ashok Samal
 Created On     : 07-11-2017
 * -------------------------------------- */
function fillAllMediaCategory(controllId, typeId, selVal, parentId)
{
    $('#' + controllId + ' option').not(":first").remove();
    parentId = (typeof (parentId) == 'undefined' || parentId == '') ? 0 : parentId;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: appURL + '/proxy',
        data: {method: "fillAllMediaCategory", typeId: typeId, selVal: selVal, parentId: parentId},
        success: function (data)
        {
            var res = data.mediacategory;
            //alert(res);
            $('#' + controllId).html(res);
        }
    });

}

 /* --------------------------------------
     Function to get Details of Opinion Poll
     Created by     : Arpita Rath
     Created On     : 07-11-2017
* -------------------------------------- */ 
     function getOpinionPoll(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getOpinionPoll", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getOpinion;

                   if(langType==1) {
                      $('#myModalLabel').html('Opinion Poll Details');
                   } else if(langType==2) {
                      $('#myModalLabel').html('ओपिनियन पोल�?ल डिटेल�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('ओपिनियन पॉल डिटेल�?स');
                   }
                $("#"+ctrlId).html(res);
            }
         });
     }

  /* --------------------------------------
     Function to get Details of category
     Created by     : Arpita Rath
     Created On     : 08-12-2017
* -------------------------------------- */ 
     function getCategoryDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getCategoryDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getCat;

                   if(langType==1) {
                      $('#myModalLabel').html('Category Details');
                   } else if(langType==2) {
                      $('#myModalLabel').html('केटेगरी डिटेल�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('केटेगरी डिटेल�?स');
                   }
                $("#"+ctrlId).html(res);
            }
         });
     }

 /* --------------------------------------
     Function to get Details of Key personnel
     Created by     : Arpita Rath
     Created On     : 08-11-2017
* -------------------------------------- */ 
     function getKeyPersonnel(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getKeyPersonnel", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getKey;

                   if(langType==1) {
                      $('#myModalLabel').html('Key personnel Details');
                   } else if(langType==2) {
                      $('#myModalLabel').html('के पर�?सनेल डिटेल�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('की पेर�?सोनेल डिटेल�?स');
                   }
                $("#"+ctrlId).html(res);
            }
         });
     }
     
     /* --------------------------------------
     Function to get Details of Blog
     Created by     : Shweta choudhury
     Created On     : 08-11-2017
    * -------------------------------------- */ 
     function getBlogDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getBlogDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getblogDetials;

                   if(langType==1) {
                      $('#myModalLabel').html('Blog Description');
                   } else if(langType==2) {
                      $('#myModalLabel').html('ब�?लॉग विवरण');
                   } else if(langType==3) {
                      $('#myModalLabel').html('ब�?लॉग विवरण');
                   }
                $("#"+ctrlId).html(res);
            }
         });
     }
     
    /* --------------------------------------
     Function to get Details of Blog Comment
     Created by     : Shweta choudhury
     Created On     : 08-11-2017
    * -------------------------------------- */ 
     
     function getBlogComment(id,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getBlogComment", id :id},
            success  : function(data) 
            {
                var res = data.blogComment;
                $('#myModalLabel').html('Blog Comment Details');
                 $("#"+ctrlId).html(res);
            }
         });
         
     }
     
      /*
        Function to fill Menu Type list
        By: Pusparani Mandal
        On: 08-Nov-2017
	*/	
	function fillMenuType(fillCtrlId,selVal)
	{   
		$.ajax({
		   type     : "POST",
		   dataType : "json",
		   url      : appURL + '/proxy',
		   data     : {method:"fillMenuType",selVal:selVal},
		   success  : function(data) 
		   {
		   	 if(data.MenuTypeNm.length>0){
                            $('#'+fillCtrlId).html(data.MenuTypeNm);	
                         }	
                   }
	   });                
	} 

  /* --------------------------------------
     Function to get Faq Details
     Created by     : Arpita Rath
     Created On     : 09-11-2017
  * -------------------------------------- */ 
     function getFaqDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getFaqDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getFaq;

                   if(langType==1) {
                      $('#myModalLabel').html('FAQ Details');
                   } else if(langType==2) {
                      $('#myModalLabel').html('FAQ विवरण');
                   } else if(langType==3) {
                      $('#myModalLabel').html('FAQ विवरण');
                   }

                $("#"+ctrlId).html(res);
            }
         });
     }

  /* --------------------------------------
     Function to get Blog Comment Details
     Created by     : Arpita Rath
     Created On     : 24-01-2018
  * -------------------------------------- */ 
   /*  function getBlogCommentDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getBlogCommentDetails", id :id},
            success  : function(data) 
            {
                var res = data.getBlogComment;                 
                $('#myModalLabel').html('Blog Comment Details'); 
                $("#"+ctrlId).html(res);
            }
         });
     } */

       /* --------------------------------------
     Function to get Details of Blog
     Created by     : Shweta choudhury
     Created On     : 08-11-2017
    * -------------------------------------- */ 
     function getBlogArchDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getArchBlogDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getblogDetials;

                   if(langType==1) {
                      $('#myModalLabel').html('Blog Description');
                   } else if(langType==2) {
                      $('#myModalLabel').html('ब�?लॉग विवरण');
                   } else if(langType==3) {
                      $('#myModalLabel').html('ब�?लॉग विवरण');
                   }
                $("#"+ctrlId).html(res);
            }
         });
     }


      /* --------------------------------------
     Function to get Details of Blog
     Created by     : Ashok Samal 
     Created On     : 10-11-2017
    * -------------------------------------- */ 
     /*function getPortletDetails(ctrlId,id,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPortletDetails", pid :id, langType :langType},
            success  : function(data) 
            {
                  var res = data.getPortletDetails;
                  $('#myModalLabel').html(res.title);
                  $("#"+ctrlId).html(res.strDesc);
            }
         });
     }*/
     function getPortletDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPortletDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getPortletDetails;

                   if(langType==1) {
                      $('#myModalLabel').html('Portlet Details');
                   } else if(langType==2) {
                      $('#myModalLabel').html('पोर�?ट�?लेट डिटेल�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('पोर�?ट�?लेट डिटेल�?स');
                   }

                $("#"+ctrlId).html(res);
            }
         });
     }
	 
	  /* --------------------------------------
     Function to get Tender List
     Created by     : Shweta Choudhury 
     Created On     : 13-11-2017
    * -------------------------------------- */
     function fillTenderfields(tenderId,tenderType,tenderno)
       { 
           $("#txtTenderNo").val(tenderno);
            $.ajax({
                 type: "POST",
                 url: appURL + '/proxy',
                 dataType: "json",
                 data: {method: "fillTenderfields",tenderId: tenderId,tenderType: tenderType},
                 success: function (data)
                 {
                    var res = data.result;
                    var totalRecord = data.result.length;
                    //console.log(res);
                    if(tenderId!=0){
                       
                         for (var i=0;i<totalRecord;i++)
                         { 
                            $('#hdnTenderNo').val(res[i].vchTenderNo);
                            $("#hdnTenderId").val(res[i].intTenderId);
                            $('#txtHeadlinE').val(res[i].vchHeadlineE);
                            $('#txtHeadlinH').val(res[i].vchHeadlineH);
                            $('#txtHeadlinM').val(res[i].vchHeadlineM);
                            $('#txtOpenDt').val(res[i].vchOpeningDate);
                            $('#txtCloseDt').val(res[i].vchClosingDate);
                            //$('#fileDoc1').val();
                            //var eng = res[i].ENLISH_DOCUMENT.split(',');
                            $('#txtDescE').val(res[i].vchDescE);
                            $('#txtDescH').val(res[i].vchDescH);
                            $('#txtDescM').val(res[i].vchDsecM);
                            
                            
                         }
                        
                    }
                    
                   $("#fillTenderNo").toggle();
                    
                    	
                 }
            });

       }
       
   /*Function to fill Tender No.
        By: Shweta choudhury
	On: 13-11-2017
    */
       function fillTender(tenderId,tenderType)
       { 
           $("#fillTenderNo").show();
           var details='';
          //console.log(appURL);
            $.ajax({
                 type: "POST",
                 url: appURL + '/proxy',
                 dataType: "json",
                 data: {method: "fillTender",tenderId: tenderId,tenderType: tenderType},
                 success: function (data)
                 {
                    var res = data.result;
                    var totalRecord = data.result.length;
                    if(totalRecord>0){
                         details +='<div>';
                         for (var i=0;i<totalRecord;i++)
                         { 
                            
                            
                            //details +='<div class="resultList" onclick=fillTenderfields('+res[i].intTenderId+',0,"'+res[i].vchTenderNo+'")>'+res[i].vchTenderNo;
                            details +='<div class="resultList" onclick="fillTenderfields('+res[i].intTenderId+',0,'+"'"+res[i].vchTenderNo+"'"+');">'+res[i].vchTenderNo;
							details +='</div>'
                                                        
                            
                         }
                         details +='</div>';
                         $("#fillTenderNo").html(details);
                         //$("#fillTenderNo").hide();
                    }
                    
                     //$("#"+fillCtrlId).html(tabDiv);				
                 }
            });

       }
       /*Function to fill infra Details.
        By: Rahul Kumar Saw
	On: 03-01-2018
        */
       function getInfraDetails(id,ctrlId,langType)
       {
           
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getInfraDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getInfraDetials;

                   if(langType==1) {
                      $('#myModalLabel').html('Description');
                   } else if(langType==2) {
                      $('#myModalLabel').html('डिस�?क�?रिप�?शन ');
                   } else if(langType==3) {
                      $('#myModalLabel').html('डिस�?क�?रिप�?शन ');
                   }
                $("#"+ctrlId).html(res);
            }
         });
           
       }
       /*Function to fill Tender Details.
        By: Shweta choudhury
	On: 13-11-2017
        */
       function getTenderDetails(id,ctrlId,langType)
       {
           
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getTenderDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getblogDetials;

                   if(langType==1) {
                      $('#myModalLabel').html('Tender Description');
                   } else if(langType==2) {
                      $('#myModalLabel').html('टेंडर डिस�?क�?रिप�?शन ');
                   } else if(langType==3) {
                      $('#myModalLabel').html('टेंडर डिस�?क�?रिप�?शन ');
                   }
                $("#"+ctrlId).html(res);
            }
         });
           
       }
        /*Function to fill Tender Archive Details.
        By: Shweta choudhury
	On: 13-11-2017
        */
       function getTenderArchiveDetails(id,ctrlId,langType)
       {
           
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getTenderArchiveDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getblogDetials;

                   if(langType==1) {
                      $('#myModalLabel').html('Tender Description');
                   } else if(langType==2) {
                      $('#myModalLabel').html('शीर�?षक विवरण');
                   } else if(langType==3) {
                      $('#myModalLabel').html('शीर�?षक विवरण');
                   }
                $("#"+ctrlId).html(res);
            }
         });
           
       }
       
       
      
    /* --------------------------------------
     Function to get citizen details of page
     Created by     : Shweta Choudhury
     Created On     : 22-11-2017
    * -------------------------------------- */ 
     function getcitizenDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getCitizenDetails", id :id, langType :langType},
            success  : function(data) 
            {
                 var res = data.getcitizenDetails;
               
                   if(langType==1) {
                      $('#myModalLabel').html('Citizen Service Contents');
                   } else if(langType==2) {
                      $('#myModalLabel').html('नागरिक सेवा कन�?टेन�?ट�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('नागरिक सेवा कन�?टेन�?ट�?स');
                   }

                $("#"+ctrlId).html(res);
            }
         });
     }

  /* --------------------------------------
     Function to get Job Details
     Created by     : Arpita Rath
     Created On     : 28-11-2017
  * -------------------------------------- */ 
     function getJobDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getJobDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getJob;

                   if(langType==1) {
                      $('#myModalLabel').html('Vacancy Details');
                   } else if(langType==2) {
                      $('#myModalLabel').html('जॉब पोस�?टिंग डिटेल�?स');
                   } else if(langType==3) {
                      $('#myModalLabel').html('जॉब पोस�?टिंग डिटेल�?स');
                   }

                $("#"+ctrlId).html(res);
            }
         });
     }

  /*=================================
    Function to fill Location.
    By: Arpita Rath 
    On: 28-11-2017
   ====================================*/
       function getLocation(fillCtrlId,selVal)
       { 
           var tabDiv='<option value="0">-- Select Job Location --</option>';
          
            $.ajax({
                 type: "POST",
                 url: appURL + '/proxy',
                 dataType: "json",
                 data: {method: "getLocation"},
                 success: function (data)
                 {
                    var res = data.result;
                    var totalRecord = data.result.length;
                     var selected='';
                    if(totalRecord>0){
                         for (var i=0;i<totalRecord;i++)
                         {                            
                            if(selVal==res[i].intLocId)
                              selected='selected="selected"';
                            else
                              selected='';
                             tabDiv+='<option value="'+res[i].intLocId+'" '+selected+'>';
                             tabDiv+= res[i].strLocName;
                             tabDiv+='</option>'; 
                         }
                    }
                     $("#"+fillCtrlId).html(tabDiv);        
                 }
            });

       }
       
       /*=================================
    Function to fill Job Type.
    By: Rahul Kumar Saw
    On: 27-12-2017
   ====================================*/
       function getJobType(fillCtrlId,selVal)
       { 
           var tabDiv='<option value="0">-- Select Job Type--</option>';
          
            $.ajax({
                 type: "POST",
                 url: appURL + '/proxy',
                 dataType: "json",
                 data: {method: "getJobType"},
                 success: function (data)
                 {
                    var res = data.result;
                    var totalRecord = data.result.length;
                    var selected='';
                    if(totalRecord>0){

                         for (var i=0;i<totalRecord;i++)
                         {                            
                            if(selVal==res[i].strJobTitle)
                              selected='selected="selected"';
                            else
                              selected='';
                             tabDiv+='<option value="'+res[i].strJobTitle+'" '+selected+'>';
                             tabDiv+= res[i].strJobTitle;
                             tabDiv+='</option>'; 
                         }
                    }
                     $("#"+fillCtrlId).html(tabDiv);        
                 }
            });

       }
       
      /* function getPdf(ids)
       { 
          $.ajax({
                 type: "POST",
                 url: appURL + '/proxy',
                 dataType: "json",
                 data: {method: "getPdf",id:ids},
                 success: function (data)
                 {
                    var res = data.result;
                    var totalRecord = data.result.length;
                     var selected='';
                    if(totalRecord>0){
                         for (var i=0;i<totalRecord;i++)
                         {                            
                            if(selVal==res[i].intLocId)
                              selected='selected="selected"';
                            else
                              selected='';
                             tabDiv+='<option value="'+res[i].intLocId+'" '+selected+'>';
                             tabDiv+= res[i].strLocName;
                             tabDiv+='</option>'; 
                         }
                    }
                     $("#"+fillCtrlId).html(tabDiv);        
                 }
            });

       }*/

        /*=================================
        Function to Paid Electricity Bill.
        By: Shweta Choudhury Bhakat 
        On: 15-12-2017
        ====================================*/
        function getPaidBill(id)
        {
           var tabDiv='';
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPaidElecBill", id :id},
            success  : function(data) 
            {
               var res = data.result;
               //console.log(res);
               var totalRecord = data.result.length;
               if(totalRecord>0){
                for (var i=0;i<totalRecord;i++)
                {                            
                       tabDiv+='<div><label><b>'+res[i].vchMonth+'</b></label>'
                       tabDiv+='<div><label>Transaction Date</label>: '+res[i].TxnDate+'</div>';
                       tabDiv+= '<div><label>Total Amount</label>:'+res[i].intTotalAmount+'</div>';
                       //tabDiv+='<div><label>'+res[i].TxnDate+'</div>';
                       tabDiv+='</div>';
                           
                } }
                else{
                    tabDiv+='<div>Not Paid</label>'
                }
                $("#divContent").html(tabDiv);
           
            }
         });
           
       }
       /*=================================
        Function to UnPaid Electricity Bill.
        By: Shweta Choudhury Bhakat 
        On: 15-12-2017
        ====================================*/
        function getUnpaidBill(id)
        {
           var tabDiv='';
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getUnpaidElecBill", id :id},
            success  : function(data) 
            {
               var res = data.result;
               //console.log(res);
               var totalRecord = data.result.length;
               if(totalRecord>0){
                for (var i=0;i<totalRecord;i++)
                {                            
                       tabDiv+='<div><label><b>'+res[i].vchMonth+'</b></label>'
                       tabDiv+='<div><label>Due Date</label>: '+res[i].vchDueDate+'</div>';
                       tabDiv+= '<div><label>Total Amount</label>:'+res[i].intTotalAmount+'</div>';
                       //tabDiv+='<div><label>'+res[i].TxnDate+'</div>';
                       tabDiv+='</div>';
                           
                }}
                $("#unpaiddivContent").html(tabDiv);
            
            }
         });
           
       }
       
        /*=================================
        Function to Paid Water Bill.
        By: Shweta Choudhury Bhakat 
        On: 15-12-2017
        ====================================*/
        function getWaterPaidBill(id)
        {
           var tabDiv='';
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getWaterPaidBill", id :id},
            success  : function(data) 
            {
               var res = data.result;
              
               var totalRecord = data.result.length;
               if(totalRecord>0){
                for (var i=0;i<totalRecord;i++)
                {                            
                       tabDiv+='<div><label><b>'+res[i].vchMonth+'</b></label>'
                       tabDiv+='<div><label>Transaction Date</label>: '+res[i].TxnDate+'</div>';
                       tabDiv+= '<div><label>Total Amount</label>:'+res[i].intTotalAmount+'</div>';
                       //tabDiv+='<div><label>'+res[i].TxnDate+'</div>';
                       tabDiv+='</div>';
                           
                } }
                else{
                    tabDiv+='<div>Not Paid</label>'
                }
                $("#divContent").html(tabDiv);
           
            }
         });
           
       }
       /*=================================
        Function to Paid Electric Bill.
        By: Rahul Kumar Saw
        On: 01-01-2018
        ====================================*/
        function getElectricPaidBill(id)
        {
           var tabDiv='';
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getElectricPaidBill", id :id},
            success  : function(data) 
            {
               var res = data.result;
              
               var totalRecord = data.result.length;
               if(totalRecord>0){
                for (var i=0;i<totalRecord;i++)
                {                            
                       tabDiv+='<div><label><b>'+res[i].vchMonth+'</b></label>'
                       tabDiv+='<div><label>Last Date To pay</label>: '+res[i].decPayBefore+'</div>';
                       tabDiv+= '<div><label>Due Amount</label>:'+res[i].decDueAmount+'</div>';
                       //tabDiv+='<div><label>'+res[i].TxnDate+'</div>';
                       tabDiv+='</div>';
                           
                } }
                else{
                    tabDiv+='<div>Not Paid</label>'
                }
                $("#divContent").html(tabDiv);
           
            }
         });
           
       }
       /*=================================
        Function to UnPaid Water Bill.
        By: Shweta Choudhury Bhakat 
        On: 15-12-2017
        ====================================*/
        function getWaterUnpaidBill(id)
        {
           var tabDiv='';
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getWaterUnpaidBill", id :id},
            success  : function(data) 
            {
               var res = data.result;
               
               var totalRecord = data.result.length;
               if(totalRecord>0){
                for (var i=0;i<totalRecord;i++)
                {                            
                       tabDiv+='<div><label><b>'+res[i].vchMonth+'</b></label>'
                       tabDiv+='<div><label>Due Date</label>: '+res[i].vchDueDate+'</div>';
                       tabDiv+= '<div><label>Total Amount</label>:'+res[i].intTotalAmount+'</div>';
                       //tabDiv+='<div><label>'+res[i].TxnDate+'</div>';
                       tabDiv+='</div>';
                           
                }}
                $("#unpaiddivContent").html(tabDiv);
            
            }
         });
           
       }
       
       
       /*=================================
        Function to Vacancy Details.
        By: Shweta Choudhury Bhakat 
        On: 16-12-2017
        ====================================*/
        function getVacancyDetails(id)
        {
           var tabDiv='';
            $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getVacancyDetails",id:id},
            success  : function(data) 
            {
               var res = data.getVacancy;
               $("#divContent").html(res);
            
            }
         });
           
       }

 /* --------------------------------------
     Function to get Details of CV 
     Created by     : Arpita Rath
     Created On     : 17-12-2017
* -------------------------------------- */ 
 function getCVDetails(id,ctrlId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getCVDetails", id :id},
        success  : function(data) 
        {
            var res = data.getCV;
            
            $('#myModalLabel').html('CV Details');                

            $("#"+ctrlId).html(res);
        }
     });

 }  
 
   /*Function to get service Type for esscalation
      By: shweta choudhury bhakat
      On: 18-12-2016
    */
   function getServiceTypes(controllId,departmentId,selVal,hvCat)
    {
        
        $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'getServiceType',departmentId:departmentId,selVal:selVal,hvCat:hvCat},
        success: function (data) {
           
          var res = data.ComplainType;
          $('#'+controllId).html(res);
        }
    });
}

   /*fill department drop down 
   * By: Shweta Choudhury Bhakat
   * On: 19-12-2017
   * fillFeildDepartmnet*/ 
   function fillDepartment(seldepid,controlId)
    { 
       // $("#"+controlId).html('');
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'fillDepartment',selId: seldepid},
            success: function (data) {
          
                var res = data.department;

                $("#"+controlId).html(res);	
            }
        });
    }  
	
	
	

 
    /* --------------------------------------
     Function to get Details of escalation  
     Created by     : Shweta choudhury Bhakat
     Created On     : 18-12-2017
    * -------------------------------------- */ 
    /*function viewEscalationDetails(id,catid,subcatid)
    {
        $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getEscalationDetails", id :id,catid:catid,subcatid:subcatid},
       success: function (data) {
          //console.log(data);
          //var deptName  = data.deptName;
          var deptName  = data.deptName;
          var serviceName  = data.serviceName;
          var category      = data.category;
          if(category == null )
          {
             category = '--'; 
          }
         
          var subCategory   = data.subCategory;
           if(subCategory == null )
          {
             subCategory = '--'; 
          } 
          var levelArr      = data.levelArr;
          var designationArr= data.designationArr;
          var stDaysArr     = data.stDaysArr;
          var totalLevel    = levelArr.length;
          var cnt=0;
          var tbl           = '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Department</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+deptName+'</label></div></div>';
              tbl          += '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Service Name</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+serviceName+'</label></div></div>';
              tbl          += '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Complain Category</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+category+'</label></div></div>';
              tbl          += '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Complain SubCategory</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+subCategory+'</label></div></div>';
              tbl          += '<table class="table  table-bordered table-hover"><thead><tr><td>Sl#</td><td>Authority Designation</td><td>Standard Action Taking Hours</td></tr></thead><tbody>';
           for(var i=0;i<totalLevel;i++)
           {
               cnt++;
           tbl          += '<tr><td>'+cnt+'</td><td>'+designationArr[i]+'</td><td>'+stDaysArr[i]+'</td></tr>';    
           }
           tbl          +='</tbody></table>';
           
           $('#SuccessMessage').html(tbl);
        }
     }); 
    }*/
    
    function viewEscalationDetails(id,catid,subcatid)
    {
		
		//$('#SuccessMessage').html('');
        //console.log("working");
        $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getEscalationDetails", id :id,catid:catid,subcatid:subcatid},
       success: function (data) {
          console.log(data);
          //var deptName  = data.deptName;
		  var bases=data.bases;
          var deptName  = data.deptName;
          var serviceName  = data.serviceName;
          var category      = data.category;
          var vendorName      = data.vendor;
          if(category == null )
          {
             category = '--'; 
          }
//console.log(vendorName);
          if(vendorName == null )
          {
			  //console.log("dd");
             venderName = '--'; 
          }
         
          var subCategory   = data.subCategory;
           if(subCategory == null )
          {
             subCategory = '--'; 
          } 
          var levelArr      = data.levelArr;
          var designationArr= data.designationArr;
          var vendorArr     = data.vendorArr;
          var stDaysArr     = data.stDaysArr;
          var totalLevel    = levelArr.length;
          var cnt=0;
          //console.log(vendorArr);
          var tbl           = '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Department</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+deptName+'</label></div></div>';
              // tbl          += '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Vendor Name</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+vendorName+'</label></div></div>';
              tbl          += '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Service Name</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+serviceName+'</label></div></div>';
              tbl          += '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Complain Category</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+category+'</label></div></div>';
              tbl          += '<div class="form-group"><label class="col-sm-4 control-label no-padding-right">Complain SubCategory</label><div class="col-sm-6"><span class="colon">:</span><label class="control-label">'+subCategory+'</label></div></div>';
              tbl          += '<table class="table  table-bordered table-hover"><thead><tr><td>Sl#</td><td>Vendor Name</td><td>Authority Designation</td><td>Standard Action Taking  '+bases+'</td></tr></thead><tbody>';
           for(var i=0;i<totalLevel;i++)
           {
               cnt++;
			   //console.log(vendorArr[i]);
               if(vendorArr[i]!="" && vendorArr[i] != null){
               var venderName=vendorArr[i];
           }else{
               var venderName="--";
           }
           tbl          += '<tr><td>'+cnt+'</td><td>'+venderName+'</td><td>'+designationArr[i]+'</td><td>'+stDaysArr[i]+'</td></tr>';    
           }
           //tbl          += '<tr><td>'+cnt+'</td><td>'+vendorName+'</td><td>'+data.hodName+'</td><td>'+stDaysArr[i]+'</td></tr>'; 
           tbl          +='</tbody></table>';
           
           $('#SuccessMessage').html(tbl);
        }
     }); 
    }
    /*
      Function to get GMS Sub Category
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
   
    function getGmsCategory(controllId,serviceId,selVal)
    {
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getGmsCategory',serviceId:serviceId,selVal:selVal},
            success: function (data) {
               
                var res = data.category;
                $('#'+controllId).html(res);
            }
        });
    }
      /*
      Function to get GMS Sub Category
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
   
    function fillGmsCategory(controllId,serviceId,selVal,typeId)
    { //alert('loading GMS Category');
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'fillGmsCategory',serviceId:serviceId,selVal:selVal,typeId:typeId},
            success: function (data) {
               
                var res = data.category;
                $('#'+controllId).html(res);
            }
        });
    }
    /*
      Function to get GMS Sub Category According Cat Id
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
    function getSubCategory(controllId,catId,selVal)
    {
       
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getSubCategory',catId:catId,selVal:selVal},
                success: function (data) {
                 var res = data.subCategory;
                $('#'+controllId).html(res);
            }
        });
    }
    
     /*
      Function to get Config escalation level
      By: Shweta Choudhury Bhakat
      On: 19-12-2016
    */
    function getConfigEscallation(typeId,catId,subCatId)
      {
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getConfigEscallation', grivencetypeId: typeId,typeId:catId,subCatId:subCatId},
                success: function (data) {
                var totalRecord = data.totalRecord;
                if(totalRecord>0)
                {
                    $("#approvalLevel").prop('disabled', true);
                    $("#btnSubmit").prop('disabled', true);
                    viewAlert('Escalation level(s) has already been added for this Category And Subcategory Name');
                }
                else
                {
                    $("#approvalLevel").prop('disabled', false);
                    $("#btnSubmit").prop('disabled', false);
                }
            }
        });
    }
    
    /*
      Function to get Config escalation level
      By: Shweta Choudhury Bhakat
      On: 19-12-2016
    */
    function getConfigServiceEscallation(typeId,catId,serviceId)
      {
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getConfigServiceEscallation', grivencetypeId: typeId,typeId:catId,serviceId:serviceId},
                success: function (data) {
                var totalRecord = data.totalRecord;
                if(totalRecord>0)
                {
                    $("#approvalLevel").prop('disabled', true);
                    $("#btnSubmit").prop('disabled', true);
                    viewAlert('Escalation level(s) has already been added for this Service Name');
                }
                else
                {
                    $("#approvalLevel").prop('disabled', false);
                    $("#btnSubmit").prop('disabled', false);
                }
            }
        });
    }

// Function to fill Designation	
    function fillDesignation(desgId,deptId,selval,fillnameId,fillControlId)
    {
      
       $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getDesg',deptId:deptId,desgId:desgId,selVal:selval},
                success: function (data) 
                {
                  var res = data.Desgs;
                
                  $('#'+fillControlId).html(res);
                 //setTimeout(function(){ 
                  assignDesgTitle(document.getElementById(fillControlId),fillnameId);
                   //}, 10);
                 
            }
        });

    }

    // Function to fill All Designation By: ashok kumar Samal :: by: 27-02-2018
    function fillAllDesignation(desgId,cnt,selval,fillnameId,fillControlId)
    {
        
       $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getAllDesg',desgId:desgId,selVal:selval},
                success: function (data) {
                  var res = data.Desgs;
                  //console.log(res);
                  //$("#ddlDesignation1").html(res);
                  $('#'+fillControlId).html(res);
                 // $('#ddlTagUsers').empty();
                  //$('#ddlTagUsers').html('');
            }
        });

    }

    //Function to fill user in Escalation
    function fillUser(dId,cnt,selval,fillnameId,fillControlId)
    {
     //alert(fillControlId);   
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getUser',dId:dId,selVal:selval},
                success: function (data) {
                   
                    var res = data.Desg;
                     //console.log(res);
                    // console.log(fillControlId);
                   //$('#ddlUser1').html(res);
                 $('#'+fillControlId).html(res);
                 // $('#ddluser1').html(res);
                 $('#'+fillControlId).trigger("chosen:updated");
            }
        });
    }
     //Function to fill user in return userid
    function getUserList(dId,cnt,selval,fillnameId,fillControlId)
    {
     //alert(fillControlId);   
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getUserList',dId:dId,selVal:selval},
                success: function (data) {
                   
                    var res = data.Desg;
                     //console.log(res);
                    // console.log(fillControlId);
                   //$('#ddlUser1').html(res);
                 $('#'+fillControlId).html(res);
                 // $('#ddluser1').html(res);
                 $('#'+fillControlId).trigger("chosen:updated");
                 $("#ddlTagUsers").empty();
            }
        });
    }
    
    
    function getUser(dId,cnt,selval,fillnameId,fillControlId)
    {
     //alert(fillControlId);   
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillUser',dId:dId,selVal:selval},
                success: function (data) {
                   
                    var res = data.Desg;
                     //console.log(res);
                    // console.log(fillControlId);
                   //$('#ddlUser1').html(res);
                 $('#'+fillControlId).html(res);
                 // $('#ddluser1').html(res);
                 $('#'+fillControlId).trigger("chosen:updated");
            }
        });
    }
    
    
     //Function to fill user in Escalation
    function fillUserDesg(dId,cnt,selval,fillnameId,fillControlId)
    {
     //alert(fillControlId);   
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getUserDesg',dId:dId,selVal:selval},
                success: function (data) {
                   
                    var res = data.Desg;
                     //console.log(res);
                    // console.log(fillControlId);
                   //$('#ddlUser1').html(res);
                 $('#'+fillControlId).html(res);
                 // $('#ddluser1').html(res);
            }
        });
    }
    /// Function to fill Designation	
    function deleteEscalationDetails(subcatId,catId,serviceId)
    {
         confirmAlert('Are you sure you wish to delete selected record(s)');
         $('#btnConfirmOk').on('click',function(){
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'deleteEscalation',subcatId:subcatId,catId:catId,serviceId:serviceId},
                success: function (data) {
                  var res = data.msg;
                  viewAlert(res,'','view-escalation')
                  
            }
        });
         });

    }
     
    function fillHierarchy(selval,fillControlId)
    {			
	$.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillHierarchy',selval:selval},
                success: function (data) {
                  var res = data.msg;
                  viewAlert(res);
            }
        });	
			
    }
        




 /* --------------------------------------
     Function to Forward Details of CV 
     Created by     : Arpita Rath
     Created On     : 19-12-2017
* -------------------------------------- */ 
 function forwardCVDetails(id,ctrlId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"forwardCVDetails", id :id},
        success  : function(data) 
        {
            var res = data.forwardCV;
            
            $('#myModalLabel').html('CV Details');                

            $("#"+ctrlId).html(res);
        }
     });

 }         

 /*
      Function to get GMS Sub Category According sub cat Id for details
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
    function getGMSSubCategory(subcatId,controllId,langType)
    {
       
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getGMSSubCategory',subcatId:subcatId,langType:langType},
                success: function (data) {
                   
                    if(langType==1) {
                        $('#myModalLabel').html('Description');
                    } else if(langType==2) {
                      $('#myModalLabel').html('डिस�?क�?रिप�?शन ');
                   } else if(langType==3) {
                      $('#myModalLabel').html('डिस�?क�?रिप�?शन ');
                   }
                 var res = data.getsubcategoryDetials;
                 //console.log(data);
                $('#'+controllId).html(res);
            }
        });
    }
    
    /*
      Function to delete subcategory
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
    function deletesubCategoryDetails(subcatId)
    {
       confirmAlert('Are you sure to delete selected Record(s)');
       $('#btnConfirmOk').on('click',function(){
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'deleteSubCategory',subcatId:subcatId},
                success: function (data) {
                   
                  var res = data.msg;
                  viewAlert(res,'','view-subCategory');
                 
            }
        });
    });
    }
    
    /*
      Function to delete category
      By: Shweta Choudhury bhakat
      On: 20-12-2016
    */
    function categoryDelete(catId)
    {
       confirmAlert('Are you sure to delete selected Record(s)');
       $('#btnConfirmOk').on('click',function(){
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'deleteCategory',catId:catId},
                success: function (data) {
                    
                 var res = data.msg;
                  viewAlert(res,'','view-category');
                 
            }
        });
        });
    }
       /*
      Function to delete category
      By: Shweta Choudhury bhakat
      On: 20-12-2016
    */
    function deleteDemoGraphyDetails(demoGraphyId,userId)
    {
       confirmAlert('Are you sure to delete selected Record(s)');
       $('#btnConfirmOk').on('click',function(){
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'deletedemography',demoGraphyId:demoGraphyId,userId:userId},
                success: function (data) {
                    //console.log(data);
                 var res = data.msg;
                  viewAlert(res,'','view-demographyMapping');
                 
            }
        });
        });
    }
    
     /*
 Function to fill service.
 By: Rahul Kumar Saw
 On: 22-Nov-2017
 */
 
 function fillService(controlId,selVal)
{

   $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillService',selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.service);	
        }
    });
}

/*
 Function to fill category
 By: Rahul Kumar Saw
 On: 22-Nov-2017
 */
 
 function fillCategory(controlId,selVal,serviceId)
{
  $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillCategory',selVal:selVal,serviceId:serviceId},
        success: function (data) {
          
            $('#'+controlId).html(data.category);	
        }
    });
}

/*
 Function to fill subcategory.
 By: Rahul Kumar Saw
 On: 22-Nov-2017
 */
 
 function fillSubCategory(controlId,catId,selVal)
{
    
    if(catId!=CATEGORYOTHER){
         $(".complaintSubcategory").show();

   $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillSubCategory',catId: catId,selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.subcategory);	
        }
    });}
    else{
        $(".complaintSubcategory").hide();
    }
}

 /*
 Function to fill service.
 By: Ashok Kumar Samal
 On: 29-Nov-2017
 */
 function fillSector(controlId,selVal)
{
   $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillSector',selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.service);    
        }
    });
}


 /*
 Function to fill service.
 By: Ashok Kumar Samal
 On: 29-Nov-2017
 */
 function fillPlot(controlId,sectorno,selVal)
{
   $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillPlot',sectorno: sectorno, selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.service);    
        }
    });
}
  
 /*
 Function to take action
 By: Shweta Choudhury Bhakat
 On: 23-12-2017
 */  
  function takeAction(tokenNo)
    {
       $("#txtActionDocument").val("");
       $("#imageFile").hide();
       $("#close").hide();
       $("#txtRemark").val("");
        //setDefault();
       $('#myModalTA').modal();
       $('#myModalTA #QueryDetails').css('text-align', 'center');
       $("#myModalTA #QueryDetails").html('<img src="'+appURL+'/img/loading.gif">');
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'takeAction',  tokenNo: tokenNo},
            success: function (data) {
              var QueryDetails  = data.QueryDetails;
               var status       = data.status;
               var option       = data.option;
              $('#myModalTA #QueryDetails').css('text-align', 'left');
              $('#myModalTA #QueryDetails').html(QueryDetails);
              //$('#myModalTA #divLegand').html(status);
              $('#myModalTA #slctStatus').html(option);
          
         }
        });
    }


    /*
 Function to Review of Discarded And Resolved complaint
 By: Ashok Kumar Samal
 On: 14-02-2018
 */  
  function takeReview(tokenNo)
    {
        //setDefault();
       $('#myModalTA').modal();
       $('#myModalTA #QueryDetails').css('text-align', 'center');
       $("#myModalTA #QueryDetails").html('<img src="'+appURL+'/img/loading.gif">');
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'takeAction',  tokenNo: tokenNo},
            success: function (data) {
              var QueryDetails  = data.QueryDetails;
               //var status       = data.status;
               //var option       = data.option;
              $('#myModalTA #QueryDetails').css('text-align', 'left');
              $('#myModalTA #QueryDetails').html(QueryDetails);
              //$('#myModalTA #divLegand').html(status);
              //$('#myModalTA #slctStatus').html(option);
          
         }
        });
    }
    
    
    /*
 Function to take action
 By: Shweta Choudhury Bhakat
 On: 23-12-2017
 */  
  function transfer(tokenNo)
    {
        //setDefault();
       $('#myModalTF').modal();
       
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'transfer',  tokenNo: tokenNo},
            success: function (data) {
               if(data.intDeptId!=0){
                     fillTagSector('slctSector',data.intDeptId,data.intSector);
               }
               else
               {
                     fillSector('slctSector',data.intSector);
               }
             
               fillPlot('slctPlot', data.intSector,data.intPlot);
               //fillPlot('slctPlot',data.intSector,data.intPlot);
               fillDepartmnet('slctDept',data.intDeptId);
               $("#hdnComplantId").val(data.compId);
               $("#hdnTokenNo").val(tokenNo);
              
          
         }
        });
    }

 /*
 Function to Reply Suggestion
 By: Rahul Kumar Saw
 On: 19-02-2018
 */  
  function replySuggestion(suggestionId)
    {

        //setDefault();

       //$('#myModalTA').modal();
        $('#myModalTA #QueryDetails').css('text-align', 'center');
       $("#myModalTA #QueryDetails").html('<img src="'+appURL+'/img/loading.gif">');
       
        $.ajax({
             
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'replySuggestion', suggestionId: suggestionId},
            success: function (data) {

             var QueryDetails  = data.QueryDetails;
            $("#suggestionId").val(data.suggestionId);
              $('#myModalTA #QueryDetails').css('text-align', 'left');
              $('#myModalTA #QueryDetails').html(QueryDetails);
         }
        });
    }


     /*
     Function to View History of suggestion page
      By: Rahul Kumar Saw
      On: 21-Feb-2018
     */ 

    function viewHistory(suggestionId)
    {
       // alert(123);
       $("#myModalTA #QueryDetails").html('<img src="'+appURL+'/img/loading.gif">');
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'viewHistory', suggestionId:suggestionId},
            success: function (data) {
                $('#SuccessMessage').html(data.result);
            }
        });
    }



     /*
 Function to take action details
 By: Shweta Choudhury Bhakat
 On: 23-12-2017
 */ 
    function viewComplaintDetails(complaintId,vchTokenNo,vchContactNo,vchEmail) 
    {        
        //console.log("working");
        //alert(complaintId+'=='+vchTokenNo+'=='+vchContactNo);
		
		$('#SuccessMessage').html("");
        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"viewComplaintDetails",CID:complaintId,TOKEN_NO:vchTokenNo,CONTACT:vchContactNo,EMAIL:vchEmail},
           success  : function(data) 
           {////alert();
                 
                    var totalLength =data.result.length;
                  
                    var compDetail=data.result[0];
                    var logDetail=data.result[1];
                    var escDetail=data.result[2];
                    
                    var vchcompStatus              = data.result[0]['compStatus'];
                    var dtmLastUpdateDate          = data.result[0]['dtmLastUpdateDate'];
                    var dtmApproxResDate           = data.result[0]['dtmApproxResDate'];
                    var dtmEscalationDate          = data.result[0]['dtmEscalationDate'];
                    var intCategoryId              = data.result[0]['intCategoryId'];
                    var intCompTypeId              =data.result[0]['intCompTypeId'];
                    var vchComplaintTypeE          = data.result[0]['vchComplaintTypeE'];
                    var vchCategoryE               = data.result[0]['vchCategoryE'];
                    var vchSubCategoryE            = data.result[0]['vchSubCategoryE'];
                    var vchCompLogTypeE            = data.result[0]['vchCompLogTypeE'];
                    var vchCompLogTypeA            = data.result[0]['vchCompLogTypeA'];
                    var vchCompLogTypeF            = data.result[0]['vchCompLogTypeF'];
                    var gmsType                    = data.result[0]['gmsType'];
                    var intHeirachyId              = data.result[0]['intHeirachyId'];
                    var intDistId                  = data.result[0]['intDistId'];
                    var intComplaintLogTypeId      = data.result[0]['intComplaintLogTypeId'];
                    var intComplaintPriority       = data.result[0]['intComplaintPriority'];
                    var intGender                  = data.result[0]['intGender'];
                    var intProofTypeId             = data.result[0]['intProofTypeId'];
                    var vchTokenno                 = data.result[0]['vchTokenno'];
                    var vchCompliantantName        = data.result[0]['vchCompliantantName'];
                    var vchContactNo               = data.result[0]['vchContactNo'];
                    var vchEmail                   = data.result[0]['vchEmail'];
                    var vchProofType               = data.result[0]['vchProofType'];
                    var vchAddress                 = data.result[0]['vchAddress'];
                    var vchLandmark                = data.result[0]['vchLandmark'];
                    var vchLongtitude              = data.result[0]['vchLongtitude'];
                    var vchLatitude                = data.result[0]['vchLatitude'];
                    var vchCompliantAgainstType    = data.result[0]['vchCompliantAgainstType'];
                    var vchCompliantAgainstCode    = data.result[0]['vchCompliantAgainstCode'];
                    var vchComplaintAgainstName    = data.result[0]['VCH_SUBJECT'];
                    var vchComplaintImage          = data.result[0]['vchComplaintImage'];
                    var vchComplaintFile           = data.result[0]['vchComplaintFile'];
                    var vchComplaintFile1          = data.result[0]['vchComplaintFile1'];
                    var vchComplaintDetails        = data.result[0]['vchComplaintDetails'];
                    var vchDocnature               = data.result[0]['vchDocnature'];
                    var intComplaintStatusId       = data.result[0]['intComplaintStatusId'];
                    var intPendingWith             = data.result[0]['intPendingWith'];
                    var intlevel                   = data.result[0]['intlevel'];
                    var intNextAta                 = data.result[0]['intNextAta'];
                    var vchRemark                  = data.result[0]['vchRemark'];
                    var vchActionFile              = data.result[0]['vchActionFile'];
                    var dtmCreatedOn               = data.result[0]['dtmCreatedOn'];
    		    var vchPendingWithName         = data.result[0]['vchPendingWithName'];
                    var vchComplaintType           = data.result[0]['vchServiceName']; 
                     var plotNo                   =data.result[0]['plotNo'];
                     var sectorNo                  =data.result[0]['sectorNo'];
                     var landMark                  =(data.result[0]['vchLandmark']!='')?data.result[0]['vchLandmark']:'--';
                     var escalationDate        = data.result[0]['escalationDate'];
                     var deptName                = data.result[0]['deptName'];
                     var statusId                = data.result[0]['statusId'];

               
                    
                    
                    var vchCompLogType   = data.result[0]['COMPLAINT_MODE'];
                    var ForeignCitizen   = '';
                    var Gender           = '';
                    var FileHref         = '';
                    var compTypes=''
                    
                    
                  
                   
                    if(gmsType==2){ compTypes='Complaint'; }if(gmsType==1){ compTypes='Service Request'; }
                    if(vchComplaintFile!=''){FileHref=appURL+'/uploadDocuments/complaintPhoto/'+vchComplaintFile;}else{FileHref="javascript:void(0);";} 
                    
                   if(totalLength>0)
                  {
                var tbl                  = '<script src="'+siteUrl+'/js/html5lightbox.js"></script>';
                 //var tbl                  = '';
                    tbl                 += '<h3 class="blueTxt">Complainant Details <a class="btn btn-info prntBtnside pull-right noPrint" href="javascript:printModal(\'ComplaintDetails\',\'myModal\');void(0)" title="" id="printIcon" data-toggle="tooltip" data-placement="top" class="btn btn-outline btn-success btn-sm w-30" data-original-title="Print"><i class="fa fa-print noPrint"></i></a></h3><div class="clearfix"></div>';           
                    tbl                 += '<div class="addTable well">';      
                    tbl                 += '<table width="100%" border="0" cellspacing="0" cellpadding="2">';
                    tbl                 += '<tbody><tr>';
                    tbl                 += '<td width="200">Complaint Mode</td><td width="10">:</td><td>'+vchCompLogType+'</td><td width="200">Token No.</td><td width="10">:</td><td>'+vchTokenno+'</td>';
                    tbl                 += '</tr>';
         
                    tbl                 += '<tr>';
					tbl                 += '<td>Complainant Name</td><td>:</td><td>'+vchCompliantantName+'</td>';
					tbl                 += '<td>Email</td><td>:</td><td>'+vchEmail+'</td>';
					tbl                 += '</tr><tr>';
					tbl                 += '<td>Phone</td><td width="10">:</td><td>'+vchContactNo+'</td>';
					
					tbl                 += '</tr>';
					tbl                 += '<tr>';
					tbl                 += '';
					tbl                 += '</tr></tbody></table></div>';

					tbl                 += '<h3 class="blueTxt">Complaint Details</h3>';
					tbl                 += '<div class="addTable well">';
					tbl                 += '<table width="100%" border="0" cellspacing="0" cellpadding="2">';
					tbl                 += '<tbody><tr>';
					//tbl                 += '<td width="200">Type</td><td width="">:</td><td colspan="4">'+compTypes+'</td>';
                  if(gmsType==1){
					tbl                 += '<td width="200"> Service</td><td width="">:</td><td>'+vchComplaintType+'</td>';
                    }
				    tbl                 += '<tr><td width="200">Category</td><td width="">:</td><td width="">'+((vchCategoryE=='')?'N/A':vchCategoryE)+'</td></tr>';
                   if(gmsType==2){
					tbl                 += '<td width="200">Sub-Category</td><td width="">:</td><td>'+((vchSubCategoryE=='')?'N/A':vchSubCategoryE)+'</td>';
					
                    }
                    tbl                 += '</tr>';
                
              
					tbl                 += '<tr><td>Complaint date & time</td><td>:</td><td>'+dtmCreatedOn+'</td>';
                    if(vchComplaintFile!='' ){
                        

                        tbl                 += '<td>Image</td> <td width="">:</td> <td><a class="html5lightbox" href="'+FileHref+'"> <img src="'+FileHref+'" height="80" width="80"> </a>  </td>';


					//tbl                 += '<td>Image</td> <td width="">:</td> <td><a href="#" class="html5lightbox"><img src='+FileHref+' height="80" width="80"></td>';


                    



                        }else{
                            tbl                 += '<td></td> <td width=""></td> <td></td>';
                        }

					tbl                 += '</tr>';

					tbl                 += '<tr><td>Complaint Detail in Brief</td><td width="">:</td> <td colspan="4">'+vchComplaintDetails+'</td><tr>';
                       
					tbl                 += '<tr><td>Address</td><td>:</td><td colspan="4">Plot no:'+ plotNo +',  SectorNo:'+ sectorNo  +'<br/>   LandMark:'+ landMark +'<br/>'+vchCompliantAgainstType+'</td></tr>';
                        

					tbl                 += '</tr> </tbody></table></div>';
                        if(intPendingWith!='' && intPendingWith>0 )
                        {		

                    /*if(statusId!= RESOLVED_STATUS)
                    {
                    tbl                 += '<h3 class="blueTxt">Pending With</h3>';
					tbl                 += '<table class="table table-bordered table-hover addTable well">';
					tbl                 += '<thead> <tr>';
					tbl                 += '<th width="50">Sl#</th> <th>Authority Name</th>  <th>Assigned On</th><th>Department Name</th> <th>Escalation Date</th> <th width="">Status</th>';
					tbl                 += '</tr> </thead> <tbody>';
					tbl                 += '<tr> <td>1 </td> <td>'+ vchPendingWithName+'</td>';
					tbl                 += '<td>'+dtmLastUpdateDate+'</td><td>'+deptName+'</td><td>'+escalationDate+'</td> <td>'+vchcompStatus+'</td>';
					tbl                 += '</tr>  </tbody> </table>';
                    }*/



					    /* tbl                 += '<h3 class="blueTxt">Summary of Action Taken</h3>';                 
               var totalRecord = logDetail.length;
                  if(totalRecord>0)
                  {
            				tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
            				tbl                 += '<tbody><tr>';
            				tbl                 += '<th width="50">Sl#</th> <th>Action No</th> <th> Action Taken By</th>';
            				tbl                 += '<th>Action</th><th>Remark</th><th>Action Date & time</th>';
            				tbl                 += '</tr>';
                    for (var i=0;i<totalRecord;i++)
                         { 
                              tbl                 +=' <tr>';
            				tbl                 += '<td> '+(i+1)+' </td> <td>Action '+(i+1)+' </td> <td>'+vchPendingWithName+'</td>';
            				tbl                 += '<td>'+logDetail[i]['vchComplaintStatus']+'</td><td>'+logDetail[i]['vchRemark']+'</td><td>'+logDetail[i]['vchActionDate']+'</td>';
            				tbl                 += '</tr>';
                          }
                    }
                    tbl                 += '</tbody> </table>';

                    //console.log(escDetail.length);
                    if(totalLength>2)
                    {
                        var totalRecord1 =escDetail.length;
                    }
                    else
                    {
                        var totalRecord1 = 0
                    }*/
                     
                   /*   if(totalRecord1>0)
                   {
            					tbl                 += '<h3 class="blueTxt">Escalation Level</h3>';
            					tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
            					tbl                 += '<tbody> ';

                                tbl                 += '<tr>';
            					tbl                 += '<th width="50">Sl#</th><th>Escalation Level</th>';
            					tbl                 += '<th>Designation</th> <th>Date of Escalation</th>';
            					tbl                 += '</tr>';

                    for (var j=0;j<totalRecord1;j++)
                         { 

                    tbl                 +=' <tr>';
                    tbl                 += '<td>'+escDetail[j]['SlNo']+'</td>  <td>'+escDetail[j]['level']+'</td>';
                    tbl                 += '<td>'+escDetail[j]['Designation']+'</td> <td>'+escDetail[j]['escalationDate']+'</td>';
                    tbl                 += '</tr> ';
                        }
                   
                    }*/

                    tbl                 += ' </tbody></table>';
              }} else{ tbl                 += "<div class='noContent'>No Record Available</div>";}//end pending with

                   //console.log(tbl);
                    $('#SuccessMessage').html(tbl);
           }
       });
    }

     /*
 Function to take action details
 By: Ashok  Kumar Samal 
 On: 07-01-2018
 */ 
    function viewEscalationStatusDetails(complaintId,vchTokenNo,vchContactNo,vchEmail) 
    {        
   $('#SuccessMessage').html("");
        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"viewComplaintDetails",CID:complaintId,TOKEN_NO:vchTokenNo,CONTACT:vchContactNo,EMAIL:vchEmail},
           success  : function(data) 
           {
                    
                    var totalLength =data.result.length;
                    var logDetail=data.result[1];
                    var escDetail=data.result[2];
                    
                     
                    var vchcompStatus              = data.result[0]['compStatus'];
                    var dtmLastUpdateDate          = data.result[0]['dtmLastUpdateDate'];
                    var dtmApproxResDate           = data.result[0]['dtmApproxResDate'];
                    var dtmEscalationDate          = data.result[0]['dtmEscalationDate'];
                    var intCategoryId              = data.result[0]['intCategoryId'];
                    var intCompTypeId              = data.result[0]['intCompTypeId'];
                    var vchComplaintTypeE          = data.result[0]['vchComplaintTypeE'];
                    var vchCategoryE               = data.result[0]['vchCategoryE'];
                    var vchSubCategoryE            = data.result[0]['vchSubCategoryE'];
                    var vchCompLogTypeE            = data.result[0]['vchCompLogTypeE'];
                    var vchCompLogTypeA            = data.result[0]['vchCompLogTypeA'];
                    var vchCompLogTypeF            = data.result[0]['vchCompLogTypeF'];
                    var gmsType                    = data.result[0]['gmsType'];
                    var desgName                   = data.result[0]['desgName'];
                    var intDistId                  = data.result[0]['intDistId'];
                    var intComplaintLogTypeId      = data.result[0]['intComplaintLogTypeId'];
                    var intComplaintPriority       = data.result[0]['intComplaintPriority'];
                    var intGender                  = data.result[0]['intGender'];
                    var intProofTypeId             = data.result[0]['intProofTypeId'];
                    var vchTokenno                 = data.result[0]['vchTokenno'];
                    var vchCompliantantName        = data.result[0]['vchCompliantantName'];
                    var vchContactNo               = data.result[0]['vchContactNo'];
                    var vchEmail                   = data.result[0]['vchEmail'];
                    var vchProofType               = data.result[0]['vchProofType'];
                    var vchAddress                 = data.result[0]['vchAddress'];
                    var vchLandmark                = data.result[0]['vchLandmark'];
                    var vchLongtitude              = data.result[0]['vchLongtitude'];
                    var vchLatitude                = data.result[0]['vchLatitude'];
                    var vchCompliantAgainstType    = data.result[0]['vchCompliantAgainstType'];
                    var vchCompliantAgainstCode    = data.result[0]['vchCompliantAgainstCode'];
                    var vchComplaintAgainstName    = data.result[0]['VCH_SUBJECT'];
                    var vchComplaintImage          = data.result[0]['vchComplaintImage'];
                    var vchComplaintFile           = data.result[0]['vchComplaintFile'];
                    var vchComplaintFile1          = data.result[0]['vchComplaintFile1'];
                    var vchComplaintDetails        = data.result[0]['vchComplaintDetails'];
                    var vchDocnature               = data.result[0]['vchDocnature'];
                    var intComplaintStatusId       = data.result[0]['intComplaintStatusId'];
                    var intPendingWith             = data.result[0]['intPendingWith'];
                    var intlevel                   = data.result[0]['intlevel'];
                    var intNextAta                 = data.result[0]['intNextAta'];
                    var vchRemark                  = data.result[0]['vchRemark'];
                    var vchActionFile              = data.result[0]['vchActionFile'];
                    var dtmCreatedOn               = data.result[0]['dtmCreatedOn'];
                    var vchPendingWithName         = data.result[0]['vchPendingWithName'];
                    var vchComplaintType           = data.result[0]['vchServiceName']; 
                    var plotNo                     = data.result[0]['plotNo'];
                    var sectorNo                   = data.result[0]['sectorNo'];
                    var landMark                   = (data.result[0]['vchLandmark']!='')?data.result[0]['vchLandmark']:'--';
                    var escalationDate             = data.result[0]['escalationDate'];
                    var deptName                   = data.result[0]['deptName'];
                    var statusId                   = data.result[0]['statusId'];                    
                    var vchCompLogType             = data.result[0]['COMPLAINT_MODE'];
                    var vchFeedback                = (data.result[0]['feedbackmsg']!='' && data.result[0]['feedbackmsg']!=null)?data.result[0]['feedbackmsg']:'';
                    var rating                     = data.result[0]['rating'];
					 var bases                       =data.result[0]['basess'];

                    if(vchPendingWithName!="--")
                    {
                         vchPendingWithName= vchPendingWithName+' ('+desgName +')';
                    }

                    var ForeignCitizen   = '';
                    var Gender           = '';
                    var FileHref         = '';
                    var compTypes        = '';
                    
                    
                   
                    if(gmsType==2){ compTypes='Complaint'; }if(gmsType==1){ compTypes='Service Request'; }
                    if(vchComplaintFile!=''){
                        FileHref=appURL+'/uploadDocuments/complaintPhoto/'+vchComplaintFile;}else{FileHref="javascript:void(0);";
                        } 
                    
                   
                var tbl                  = '';
                    //tbl                 += '<h3 class="blueTxt"> <a class="btn btn-info prntBtnside pull-right noPrint" href="javascript:printModal(\'ComplaintDetails\',\'myModal\');" title="" id="printIcon" data-toggle="tooltip" data-placement="top" class="btn btn-outline btn-success btn-sm w-30" data-original-title="Print"><i class="fa fa-print"></i></a></h3><div class="clearfix"></div>';           

              if(intPendingWith!='' && intPendingWith>0)
                        {   

                    if(statusId!= RESOLVED_STATUS)
                    {
          tbl                 += '<h3 class="blueTxt">Pending With</h3>';
          tbl                 += '<table class="table table-bordered table-hover addTable well">';
          tbl                 += '<thead> <tr>';
          tbl                 += '<th width="50">Sl#</th> <th>Authority Name</th>  <th>Assigned On</th><th>Department Name</th> <th>Escalation Date</th> <th width="">Status</th>';
          tbl                 += '</tr> </thead> <tbody>';
          tbl                 += '<tr> <td>1 </td> <td>'+ vchPendingWithName+'</td>';
          tbl                 += '<td>'+dtmLastUpdateDate+'</td><td>'+deptName+'</td><td>'+escalationDate+'</td> <td>'+vchcompStatus+'</td>';
          tbl                 += '</tr>  </tbody> </table>';
                    }

               }

        
                if(typeof logDetail!="undefined"){
                     var totalRecord = logDetail.length;}
                 else{
                     var totalRecord=0;
                 }
                  if(totalRecord>0)
                  {
                       tbl                 += '<h3 class="blueTxt">Summary of Action Taken</h3>';  
                      tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
                      tbl                 += '<tbody><tr>';
                      tbl                 += '<th width="50">Sl#</th> <th>Action No</th> <th> Action Taken By</th>';
                      tbl                 += '<th>Status</th><th>Remark</th><th>Action Date & time</th>';
                      tbl                 += '</tr>';
                    for (var i=0;i<totalRecord;i++)
                         { 
                             
                      tbl                 +=' <tr>';
                      tbl                 += '<td> '+(i+1)+' </td> <td>Action '+(i+1)+' </td> <td>'+logDetail[i]['vchPendingWithName']+' ( '+logDetail[i]['vchDesgName']+' )</td>';
                      tbl                 += '<td>'+logDetail[i]['vchComplaintStatus']+'</td><td>'+logDetail[i]['vchRemark']+'</td><td>'+logDetail[i]['vchActionDate']+'</td>';
                      tbl                 += '</tr>';
                        }
                    }
                    tbl                 += '</tbody> </table>';

                    //console.log(escDetail.length);
                    if(totalLength>2)
                    {
                        var totalRecord1 =escDetail.length;
                    }
                    else
                    {
                        var totalRecord1 = 0;
                    }
                     
                     if(totalRecord1>0)
                     {
                        tbl                 += '<h3 class="blueTxt">Escalation Level</h3>';
                        tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
                        tbl                 += '<tbody> ';
                        tbl                 += '<tr>';
                        tbl                 += '<th width="50">Sl#</th><th>Escalation Level</th>';
                          tbl                 += '<th>Designation</th> <th>Standard Action Taking '+bases+' </th>';
                       // tbl                 += '<th>Date of Escalation</th>';
                        tbl                 += '</tr>';

                        for (var j=0;j<totalRecord1;j++)
                        { 
                          tbl                 +=' <tr>';
                          tbl                 += '<td>'+escDetail[j]['SlNo']+'</td>  <td>'+escDetail[j]['level']+'</td>';
                          tbl                 += '<td>'+escDetail[j]['Designation']+'</td> <td>'+escDetail[j]['escalationHours']+'</td>';
                          // tbl                 += '<td>'+escDetail[j]['escalationDate']+'</td>';
                          tbl                 += '</tr> ';
                        }
                   
                    }

                    tbl                 += ' </tbody></table>';

                     if(vchFeedback!='' || rating>0)
                        {   

                          if(statusId == RESOLVED_STATUS)
                          {
                          tbl                   += '<h3 class="blueTxt">Citizen Feedback Details</h3>';
                            tbl                 += '<table class="table table-bordered table-hover addTable well">';
                            tbl                 += '<tbody>';
							 if(vchFeedback!=''){
							 tbl                 += '<tr>';
                            tbl                 += ' <td>Feedback </td>  <td>'+vchFeedback+' </td>';
							 tbl                 += '</tr>  ';}
                            tbl                 += '<tr> <td>Rating</td>';
                            //tbl                 += '<td>'+parseInt(rating)+' </td>';
                       
                            var activeP        = (rating>=1)?'active':'';
                            var activeS        = (rating>=2)?'active':'';
                            var activeG        = (rating>=3)?'active':'';
                            var activeVG       = (rating>=4)?'active':'';
                            var activeA        = (rating>=5)?'active':'';
                            tbl                 += '<td><ul class="rating" style="float: left;margin-left: -41px;">';
                            tbl                 += '<li><a href="#" class="'+activeP+'" data-toggle="tooltip" data-original-title="Poor" title="Poor"></a></li>';
                            tbl                 += '<li><a href="#" class="'+activeS+'" data-toggle="tooltip" data-original-title="Satisfactory" title="Satisfactory"></a></li>';
                            tbl                 += '<li><a href="#" class="'+activeG+'" data-toggle="tooltip" data-original-title="Good" title="Good"></a></li>';
                            tbl                 += '<li><a href="#" class="'+activeVG+'" data-toggle="tooltip" data-original-title="Very Good" title="Very Good"></a></li>';
                            tbl                 += '<li><a href="#" class="'+activeA+'" data-toggle="tooltip" data-original-title="Awesome" title="Awesome"></a></li>';
                            tbl                 += '</ul></td>';
                    
                            //'<ul class="rating"><li><a href="#" class="active" data-toggle="tooltip" data-original-title="Poor"></a></li><!-- --><li> <a href="#" class="active" data-toggle="tooltip" data-original-title="Satisfactory"></a></li><!----><li><a href="#" data-toggle="tooltip" data-original-title="Good"></a></li><!----><li> <a href="#" data-toggle="tooltip" data-original-title="Very Good"></a></li><!----><li> <a href="#" data-toggle="tooltip" data-original-title="Awesome"></a> </li> </ul></td>';
                            tbl                 += '</tr>  </tbody> </table>';
                          }

                        }

           //} //end pending with

                   //console.log(tbl);
                      $('#SuccessMessage').html(tbl);
					 $('#myModal').modal();
           }
       });
    }
    
    function fillCityOperators(controlId,selVal)
    {
        $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillCityOperators', selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.result);    
        }
    });
    }

    
    function getcomplaintMode(selVal,controlId)
    {
        
         $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'getcomplaintMode', selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.result);    
        }
    });
    }
    
    
    function getUserPendingReport(controlId,intOperatorId){
        $('#'+controlId).html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getUserPendingReport', intOperatorId:intOperatorId},
            success: function (data) {
                $('#'+controlId).html(data.result);
                //$('#clsRow'+intOperatorId).css('background-color','#cfd8e0');
                //$('#clsRow'+intOperatorId).toggleClass("rowHighlight");
            }
        });
    }

    
      /*
     Function to fill department
     By: Shweta Choudhury Bhakat
     On: 29-12-2017
     */ 
 function fillDepartmnet(controlId,selVal){
        
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getDept', selVal:selVal},
            success: function (data) {
                $('#'+controlId).html(data.result);
                
            }
        });
    }
	
	
	  /*
     Function to fill department
     By: Shweta Choudhury Bhakat
     On: 29-12-2017
     */ 
 function fillFieldDepartmnet(controlId,selVal){
        
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getFieldDept', selVal:selVal},
            success: function (data) {
                $('#'+controlId).html(data.result);
                
            }
        });
    }
    
        /*
        Function to fill HOD
        By: Shweta Choudhury Bhakat
        On: 29-12-2017
        */ 
 function fillHod(controlId,selVal,deptId){
         
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getHod', selVal:selVal,deptId:deptId},
            success: function (data) {
                var res=data.result;
                //console.log(res);
                var dataRes=data.result.split('-');
                 var hodid=dataRes['0'];
                 var name=dataRes['1'];
                 $("#ddlhod").val(hodid);
                 $("#ddlhodname").val(name);
                 $("#divHod").show();
               
               
            }
        });
    }
    
    // All function for Calender Events by Pusparani Mandal 14-Jul-2017
function getCalenderDetails(vendorId){
    $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getCalenderDetails', vendorId:vendorId},
            success: function (data) {
                var id=data.intOrgId;
                var fromTime=data.strTmFrom;
                var toTime=data.timeTo;
                 fillVendorName('selVendorName',0,id);
                 fetchCalenderEvent(vendorId);
                 $("#txtTmFrom").val(fromTime);
                 $("#txtTmTo").val(toTime);
               
            }
        });
}
 /*
     Function to quick page
     By: Arpita Rath
     On: 30-Dec-2017
     */
    $.payQuick = function(uniqueId,mobileno)
    {
        $.ajax({
            type: "POST",
            url: appURL+'/proxy',
            dataType: "json",
            data: {method:'payQuick',uniqueId:uniqueId,mobileno:mobileno},
            success: function(data){
                
               if(data.status==1){
               
                    $('#uniqueIdDiv').hide();
                    $('#otpDiv').show();

                    var quickOtp = data.quickPayOtp;
                    $('#txtOtp').html(quickOtp);
                    $('#btnQuickPay').on('click',function() {
                         
                         if(Number($('#txtOTPID').val())==Number(quickOtp))
                         {
                            window.location=siteUrl+"/utility/"+data.profId;
                         } else {
                             viewAlert('Invalid OTP');
                         }
                    });
                    //window.location=siteUrl+"/utility/"+data.profId;
               }
               else
               {
                  
                  viewAlert(data.msg);
               }
            }
        }); 
    }

  /* --------------------------------------
     Function to get Utility History
     Created by     : Arpita Rath
     Created On     : 02-01-2018
  * -------------------------------------- */ 
     function getBillDetails(id,ctrlId,type)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getBillDetails", id :id, type :type},
            success  : function(data) 
            {
                var res = data.getBill;
                   
                $('#myModalLabel').html('Bill Details');
                $("#"+ctrlId).html(res);
            }
         });
     }  

     /* --------------------------------------
     Function to get Utility History
     Created by     : Arpita Rath
     Created On     : 02-01-2018
  * -------------------------------------- */ 
     function getUtilityBillDetails(id,ctrlId,type)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getUtilityBillDetails", id :id, type :type},
            success  : function(data) 
            {
                var res = data.getUtilityBill;
                $('#myModalLabel').html('Bill Details');
                $("#"+ctrlId).html(res);
            }
         });
     }

   /* --------------------------------------
     Function to get Book Details
     Created by     : Arpita Rath
     Created On     : 02-01-2018
  * -------------------------------------- */ 
     function getBookDetails(id,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getBookDetails", id :id},
            success  : function(data) 
            {
                var res = data.getBook;                   
                $('#myModalLabel').html('Booking Details');                  

                $("#"+ctrlId).html(res);
            }
         });
     }  

      /* --------------------------------------
     Function to get Utility History
     Created by     : Arpita Rath
     Created On     : 02-01-2018
  * -------------------------------------- */ 
     function getBookBillDetails(id,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getBookBillDetails", id :id},
            success  : function(data) 
            {
                var res = data.getBookBill;
                   
                $('#myModalLabel').html('Booking Details');
                $("#"+ctrlId).html(res);
            }
         });

     }
    /* Function to check duplicate according dept
        By: Shweta Choudhury Bhakat
        On: 05-01-2017
        */ 
 function chkDuplicate(gmsType,catId,subcatId,serviceId,deptId){
        var existTr=$("#appendTr").find('.addTr').length;
       if(existTr>0)
        {
               $(".designation option[selected]").removeAttr("selected");
                $('.addTr').remove();
        }
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'chkDuplicate',gmsType:gmsType, catId:catId,subcatId:subcatId,serviceId:serviceId,deptId:deptId},
            success: function (data) 
            {
               // console.log(data);
               var res=data.contentResult;
               var catId=data.categoryId;
              
               var totalRecord = res.length;
             
                var totRowNumber = $('.addTr').length;
                
                var x=totalRecord;
               /*var existTr=$("#appendTr").find('.addTr').length;
               if(existTr>0)
               {
               $(".designation option[selected]").removeAttr("selected");
                $('.addTr').remove();
               }*/
               //$('#userData').hide();
               if(totalRecord>0)
               {
                   $("#btnSubmit").val("Update");
                   $("#btnSubmit").val("Update");
                   $("#txtApprovalLevel").val(totalRecord);
                   $("#hdnConfigId").val(catId);
                   $('#userData').show();
                    if(totRowNumber<x)
                    {
                        //var z	= Number(x)-Number(totRowNumber);
                        var tempHTML = "";
                        var cnt=0;
                        for(var i=totRowNumber+1; i<=x; i++)
                        {
                            
                            tempHTML = "";
                            tempHTML += '<tr class="addTr" id="nodeTr'+i+'">';
                            tempHTML += '<td id="desgcnt"> '+ i + '</td>';
                            tempHTML += '<td><input type="hidden" name="designationName[]" id="designationName'+i+'" value="'+res[cnt]['VCH_DESG_NAME']+'"/><select class="form-control designation" id="ddlDesignation'+i+'" name="ddlDesignation[]" onChange="checkPreviousDesignation(this.id,this.value);"><option value="0">--Select--</option></select> </td>';
                            tempHTML += '<td> <input type="text" class="form-control days" id="txtEscalationStdDays'+i+'" name="txtEscalationStdDays[]" maxlength="3" onkeyup="return isNumberKey(event);" onkeypress="return isNumberKey(event);" value="'+res[cnt]['VCH_STANDARD_DAY']+'"/> </td>';
                            tempHTML += '</tr>';
                            fillDesignation(1,deptId,res[cnt]['INT_DESG_ID'],'designationName'+i,'ddlDesignation'+i);
                            $("#appendTr").append(tempHTML);
                            
                            cnt++;
                        }
                    }
                   else
                    {
                       var m = Number(x)-1;
                       $("#appendTr tr:gt("+m+")").detach();
                    }
                    
                     //$('#txtApprovalLevel').val('');
                    $("#ddlServices").prop( "disabled", true );
                    $("#ddlGrivence").prop( "disabled", true );
                    $("#ddlCategory").prop( "disabled", true );
                    $("#ddlSubCategory").prop( "disabled", true );
               }
               if(totalRecord==0)
               {
                    $('#userData').hide();
                     $("#ddlServices").prop( "disabled", false );
                    $("#ddlGrivence").prop( "disabled", false );
                    $("#ddlCategory").prop( "disabled", false );
                    $("#ddlSubCategory").prop( "disabled", false );
                    $('#txtApprovalLevel').val('');
                    $("#btnSubmit").val("Submit");
                     $("#hdnConfigId").val('');
                   
               }
               
                         
               /* if(res>=1)
                {
                     viewAlert('This Department already selected',0,'');
                }*/
               
               
               
            }
        });
    }

  
     
     
     
     function getALLComplainStatus(ctrlId, selVal){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getALLComplainStatus", selVal :selVal},
            success  : function(data) 
            {
                var res = data.result;
                $("#"+ctrlId).html(res);
            }
         });

     }
     function getComplainStatus(ctrlId, selVal){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getComplainStatus", selVal :selVal},
            success  : function(data) 
            {
                var res = data.result;
                $("#"+ctrlId).html(res);
            }
         });

     }
     // get Link Permission by Pusparani Mandal on 08-JAN-2018     
       /*function getSGLPLPermission(userId){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getSGLPLPermission", userId :userId},
            success  : function(data) 
            {
                var arrSgl = data.arrSgl;
                var arrGl = data.arrGl;
                var arrPl = data.arrPl;
                var arrAction = data.arrAction;
                var arrType = data.arrType;
                $('.sglChk').prop('checked',false);
                $('.glChk').prop('checked',false);
                $('.plChk').prop('checked',false);
                $('.radAction').prop('checked',false);
                $('.radAction').prop('checked',false); 
                $('.sglChkr').prop('checked',false);
                $('.sglReport').prop('checked',false);
                
               
                if(arrSgl!=""){
                    var arrSqlM = arrSgl.split(',');
                    var arrGlM  = arrGl.split(',');
                    var arrPlM  = arrPl.split(',');
                    var arrAct  = arrAction.split(',');
                    var arrType  = arrType.split(',');
                   for(var sgl=0;sgl<arrSqlM.length;sgl++) {
                       //console.log(arrType[sgl]);
                        if(arrType[sgl]!=2)
                        {
                            
                            $("#chkBox"+arrSqlM[sgl]).prop('checked',true);
                            $("#chkBox"+arrSqlM[sgl]+'_'+arrGlM[sgl]).prop('checked',true);
                            $("#chkBox"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]).prop('checked',true);
                            $("#rad_"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]+'_'+arrAct[sgl]).prop('checked',true); 
                        }
                         else if(arrType[sgl]==2){
                            
                             $("#chkBoxs").prop('checked',true);
                            $("#chkBoxr"+arrSqlM[sgl]).prop('checked',true);
                            $("#chkBoxr"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]).prop('checked',true);
                             $("#radr_"+arrSqlM[sgl]).prop('checked',true);
                             
                        }
                    }                    
                }else{
                    $('.sglChk').prop('checked',false);
                    $('.glChk').prop('checked',false);
                    $('.plChk').prop('checked',false);
                    $('.radAction').prop('checked',false); 
                     $('.sglChkr').prop('checked',false);
                      $("#chkBoxs").prop('checked',false);
                }
              
            }
         });

     }*/
      /*function getSGLPLPermission(userId){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getSGLPLPermission", userId :userId},
            success  : function(data) 
            {
                $('.collapseArrow').click();
                var arrSgl = data.arrSgl;
                var arrGl = data.arrGl;
                var arrPl = data.arrPl;
                var arrAction = data.arrAction;
                var arrType = data.arrType;
                $('.sglChk').prop('checked',false);
                $('.glChk').prop('checked',false);
                $('.plChk').prop('checked',false);
                $('.radAction').prop('checked',false);
                $('.radAction').prop('checked',false); 
                $('.sglChkr').prop('checked',false);
                $('.sglReport').prop('checked',false);
                
               
                if(arrSgl!=""){
                    var arrSqlM = arrSgl.split(',');
                    var arrGlM  = arrGl.split(',');
                    var arrPlM  = arrPl.split(',');
                    var arrAct  = arrAction.split(',');
                    var arrType  = arrType.split(',');
                   for(var sgl=0;sgl<arrSqlM.length;sgl++) {
                        if(arrType[sgl]!=2)
                        {                            
                            $("#chkBox"+arrSqlM[sgl]).prop('checked',true);
                            $("#chkBox"+arrSqlM[sgl]+'_'+arrGlM[sgl]).prop('checked',true);
                            $("#chkBox"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]).prop('checked',true);
                            $("#rad_"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]+'_'+arrAct[sgl]).prop('checked',true); 
                            $('#chkBox'+arrSqlM[sgl]).closest('.menu-click').find('.expandArrow').click();
                        }
                         else if(arrType[sgl]==2)
                         {                            
                            $("#chkBoxs").prop('checked',true);
                            $("#chkBoxr"+arrSqlM[sgl]).prop('checked',true);
                            $("#chkBoxr"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]).prop('checked',true);
                            $("#radr_"+arrSqlM[sgl]).prop('checked',true);
                            $('#chkBox'+arrSqlM[sgl]).closest('.menu-click').find('.collapseArrow').click();                        }
                    }                    
                }else{
                    $('.sglChk').prop('checked',false);
                    $('.glChk').prop('checked',false);
                    $('.plChk').prop('checked',false);
                    $('.radAction').prop('checked',false); 
                    $('.sglChkr').prop('checked',false);
                    $("#chkBoxs").prop('checked',false);                     
                }
              
            }
         });

     }*/

       // get Link Permission by Pusparani Mandal on 08-JAN-2018     
       function getSGLPLPermission(userId, userType, deptId){
           $('#btnDelete').hide();
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getSGLPLPermission", userId :userId, userType : userType, deptId:deptId},
            success  : function(data) 
            {
                $('.collapseArrow').click();
                var arrSgl = data.arrSgl;
                var arrGl = data.arrGl;
                var arrPl = data.arrPl;
                var arrAction = data.arrAction;
                var arrType = data.arrType;
                $('.sglChk').prop('checked',false);
                $('.glChk').prop('checked',false);
                $('.plChk').prop('checked',false);
                $('.radAction').prop('checked',false);
                $('.radAction').prop('checked',false); 
                $('.sglChkr').prop('checked',false);
                $('.sglReport').prop('checked',false);
                
               
                if(arrSgl!=""){
                    var arrSqlM = arrSgl.split(',');
                    var arrGlM  = arrGl.split(',');
                    var arrPlM  = arrPl.split(',');
                    var arrAct  = arrAction.split(',');
                    var arrType  = arrType.split(',');
                   for(var sgl=0;sgl<arrSqlM.length;sgl++) {
                        if(arrType[sgl]!=2)
                        {                            
                            $("#chkBox"+arrSqlM[sgl]).prop('checked',true);
                            $("#chkBox"+arrSqlM[sgl]+'_'+arrGlM[sgl]).prop('checked',true);
                            $("#chkBox"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]).prop('checked',true);
                            $("#rad_"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]+'_'+arrAct[sgl]).prop('checked',true); 
                            $('#chkBox'+arrSqlM[sgl]).closest('.menu-click').find('.expandArrow').click();
                        }
                         else if(arrType[sgl]==2)
                         {                            
                            $("#chkBoxs").prop('checked',true);
                            $("#chkBoxr"+arrSqlM[sgl]).prop('checked',true);
                            $("#chkBoxr"+arrSqlM[sgl]+'_'+arrGlM[sgl]+'_'+arrPlM[sgl]).prop('checked',true);
                            $("#radr_"+arrSqlM[sgl]).prop('checked',true);
                            $('#chkBox'+arrSqlM[sgl]).closest('.menu-click').find('.collapseArrow').click();                        }
                    }     
                    if(userType == 2)
                    {
                        $('#btnDelete').show();
                    }
                }else{
                    $('.sglChk').prop('checked',false);
                    $('.glChk').prop('checked',false);
                    $('.plChk').prop('checked',false);
                    $('.radAction').prop('checked',false); 
                    $('.sglChkr').prop('checked',false);
                    $("#chkBoxs").prop('checked',false);                                     
                }
            }
         });
     }
     

     // get Dashboard Portlet List by Pusparani Mandal on 09-JAN-2018     
       function getDashboardPortletList(ctrlCls){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getDashboardPortletList"},
            success  : function(data) 
            {
              var finalData="";
              var cnt=0;
              if(data.result!=""){
                  var resultArr=data.result;
                  var totalCnt=resultArr[0]['totalCnt'];
                  $.each(resultArr,function(k,v){                    
                     finalData+='<div id="ID_'+cnt+'" class="'+v['vchClasses']+' ctpd" data-portletnm="'+v['vchPortletName']+'" data-portletid="'+v['intPortletId']+'" data-clsnm="'+v['vchClasses']+'"><div class="dragar">'+v['vchPortletName']+'</div><a href="javascript:void(0);" class="btn btn-sm btn-default closePrtletbtn"> <i class="fa fa-times" aria-hidden="true"></i></a></div>';
                     cnt++;
                  }); 
                  var dis='';
                  if(totalCnt==cnt){dis='style="display:none"';}
                  finalData+='<a href="javascript:void(0);" '+dis+' id="addNewPortlrt" class="col-sm-6"><div class="dragarLight">Add New Portlet</div></a>';
                  
              }              
              $("."+ctrlCls).html(finalData);
            }
         });
     }

// get Dashboard Portlet List by Pusparani Mandal on 09-JAN-2018     
     /*  function getMenuLinkList(ctrlCls)
       {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getMenuLinkList"},
            success  : function(data) 
            {
              var finalData="";
              var cnt=0;
              if(data.result!=""){
                  var resultArr=data.result;
                  var totalCnt=resultArr[0]['totalCnt'];
                  $.each(resultArr,function(k,v){                    
                     finalData+='<div id="ID_'+cnt+'" class="'+v['VCH_ICON_NAME']+' ctpd" data-portletnm="'+v['VCH_SGL_NAME']+'" data-portletid="'+v['intPortletId']+'" data-clsnm="'+v['VCH_ICON_NAME']+'"><div class="dragar">'+v['VCH_SGL_NAME']+'</div><a href="javascript:void(0);" class="btn btn-sm btn-default closePrtletbtn"> <i class="fa fa-times" aria-hidden="true"></i></a></div>';
                     cnt++;
                  }); 
                  var dis='';
                  if(totalCnt==cnt){dis='style="display:none"';}
                
                  
              }              
              $("."+ctrlCls).html(finalData);
            }
         });
     } */

     /* --------------------------------------
     Function to get Faq Details
     Created by     : Arpita Rath
     Created On     : 09-11-2017
  * -------------------------------------- */ 
     function getMenuLinkList(ctrlCls)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getMenuLinkList"},
            success  : function(data) 
            {
                var res = data.getLink;
                $("#"+ctrlCls).html(res);
            }
         });
     }
     
     // set Dashboard Portlet List by Pusparani Mandal on 09-JAN-2018     
       function setDashboardPortletList(allPortIds){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"setDashboardPortletList",allPortIds:allPortIds},
            success  : function(data) 
            {
              if(data.result==1){
                $('#myModalportlet').modal('hide');
                viewAlert(data.msg);  
                $('#btnAlertOk').on('click',function(){
                    window.location.reload();
                });
              }             
            }
         });
     }

      // set Dashboard Portlet List by Pusparani Mandal on 09-JAN-2018     
       function setMenuLinkList(allMenuLinkIds){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"setMenuLinkList",allMenuLinkIds:allMenuLinkIds},
            success  : function(data) 
            {
              if(data.result==1){
                $('#myModalportlet').modal('hide');
                viewAlert(data.msg);  
                $('#btnAlertOk').on('click',function(){                    
                    window.location.reload();
                });
              }             
            }
         });
     }
     
     // get All Dashboard Portlet List which is not added to user by Pusparani Mandal on 09-JAN-2018     
       function getAllDashboardPortletList(ctrlCls){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getAllDashboardPortletList"},
            success  : function(data) 
            {
              var finalData="";
              var cnt=0;
              if(data.result!=""){
                  var resultArr=data.result;
                  finalData+='<div class="chkbox-portlet"><ul>';
                  $.each(resultArr,function(k,v){                    
                     finalData+='<li id="li_'+v['intPortletId']+'"><div style=""><input type="checkbox" id="'+v['intPortletId']+'" class="PortletItem" attr-clsnm="'+v['vchClasses']+'" attr-portletname="'+v['vchPortletName']+'" onclick="void(0)" value="'+v['intPortletId']+'"><label for="'+v['intPortletId']+'">'+v['vchPortletName']+'</label></div></li>';
                     cnt++;
                  });
                  finalData+='</ul></div>';
              }
              else{
                  finalData+='<ul></ul><p class="text-center noMenuList">No more portlets</p>';
                  $("#btnBulkSel,#chkAll").hide();
                  $("#chkAll").parent().hide();
              }
              $("#"+ctrlCls).html(finalData);
            }
         });
     }
     
function addOperator()
{
    var sectorId =[];
     $(':checkbox:checked').each(function(i){
          sectorId[i] = $(this).val();
        });
    var sectorIds=sectorId.toString();
   
    var selectedValues = $('#ddlTagUsers').val();
    var leng=selectedValues.length;
    var userId=[];
    for (var i = 0; i < leng; i++ ) 
    {
           
           userId[i]=selectedValues[i]                                    
				
				
    }
   var userIds=userId.toString();
   var deptId=$("#ddlCityOperator").val();
   var desgId=$("#ddlDesg").val();

    $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"addOperator",deptId:deptId,desgId:desgId,sectorId:sectorIds,userId:userIds},
            success  : function(data) 
            {
             
            }
         })
    
}

/* --------------------------------------
     Function to get Track Status
     Created by     : Rahul Kumar Saw
     Created On     : 16-01-2018
  * -------------------------------------- */ 
     function getTrackStatus(id,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getTrackStatus", id :id},
            success  : function(data) 
            {
                var res = data.getBill;
                   
                $('#myModalLabel').html('Visited Details');
                $("#"+ctrlId).html(res);
            }
         });
     }  
     
     
      /*
 Function to fill tag  sector.
 By: shweta Choudhury
 On: 22-01-2018
 */
 function fillTagSector(controlId,deptId,selVal)
{
   $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillTagSector',deptId:deptId,selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.service);    
        }
    });
}

/* --------------------------------------
     Function to send Reminder
     Created by     : Arpita Rath
     Created On     : 25-01-2018
* -------------------------------------- */ 
 function sendReminder(emailId,ctrlId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"sendReminder", emailId :emailId},
        success  : function(data) 
        {
            var res = data.getEmail;                
            $("#"+ctrlId).html(res);
        }
     });
 }

 /* --------------------------------------
     Function to send Reminder
     Created by     : Arpita Rath
     Created On     : 25-01-2018
* --------------------------------------- */ 
 function sendReminderMail(emailId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"sendReminderMail", emailId :emailId},
        success  : function(data) 
        { console.log(data); 
            var res   = data.getRemEmail;   
            var flag  = data.errFlag;   
            if(flag==0)
            {
                viewAlert('Reminder has been sent successfully');
                $('#pageDetailsEn').hide();
            }      
        }
     });
 }
  /* --------------------------------------
     Function to Show Popup in Mobile wise report
     Created by     : Shweta Choudhury
     Created On     : 12-02-2018
* --------------------------------------- */ 
 
 function viewComplaintList(vchContactNo) 
    {        
        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"viewComplaintList",vchContactNo:vchContactNo},
           success  : function(data) 
           {
              
                $('#SuccessMessage').html(data.getdata);
            }

                   //console.log(tbl);
               
          
       });
    }
    /* --------------------------------------
     Function to show Payment details in compensation
     Created by     : Shweta Choudhury
     Created On     : 14-02-2018
* --------------------------------------- */ 
    function viewComplaintPaymentDetails(complaintId,vchTokenNo) 
    {        
       
        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"viewComplaintPaymentDetails",CID:complaintId,TOKEN_NO:vchTokenNo},
           success  : function(data) 
           {
              
               var tbl=data.getdata;
                
                $('.searchTables').html(tbl);
           }
       });
    }
    
    /* --------------------------------------
     Function to delete Compensation
     Created by     : Shweta Choudhury
     Created On     : 14-02-2018
* --------------------------------------- */ 
    function deleteCompensationDetails(compId)
    {
         confirmAlert('Are you sure to delete selected Record(s)');
         $('#btnConfirmOk').on('click',function(){
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'deleteCompensation',compId:compId},
                success: function (data) {
                  var res = data.msg;
                  viewAlert(res,'','view-Compensation')
                  
            }
        });
         });

    }
    
    function findEscalationPeriod(ctrlId,catId,subCatId){
        
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'findEscalationPeriod',catId:catId,subCatId:subCatId},
                success: function (data) 
                {
                  //console.log(data.day);
                  var res  = data.message;
                  var time = data.time;
                  var unit = data.unit;
                  var unitName = data.unitName;
                if(res!="")
                {
                    $('#slaAssignHr').val(time);
                    $("#slaPeriod").html(res);
                    $("#slaPeriod").show();
                    $('#ddlUnit').val(unit);
                   // setTimeout(function(){alert();
                     $('#unitName').html(unitName);
                   // },1000);
                    
                }
                else
                {
                    $('#slaAssignHr').val('');
                    $("#slaPeriod").html('');
                    $("#slaPeriod").hide();
                    $('#ddlUnit').val(1);
                     $('#unitName').val();


                }
                  
                  
            }
        });
        
        
    }
    
     /*
 Function to display transfer complaint details
 By: Pusparani Mandal 
 On: 07-03-2018
 */ 
    function viewForwardedStatusDetails(complaintId,vchTokenNo,vchContactNo,vchEmail) 
    {        

        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"viewTransferComplaintDetails",CID:complaintId,TOKEN_NO:vchTokenNo,CONTACT:vchContactNo,EMAIL:vchEmail},
           success  : function(data) 
           {
                    
                    var totalLength =data.result.length;
                    var logDetail=data.result[1];
                    var logPrevDetail=data.result[1];
                    var escDetail=data.result[3];
                     
                    var vchcompStatus              = data.result[0]['compStatus'];
                    var dtmLastUpdateDate          = data.result[0]['dtmLastUpdateDate'];
                    var dtmApproxResDate           = data.result[0]['dtmApproxResDate'];
                    var dtmEscalationDate          = data.result[0]['dtmEscalationDate'];
                    var intCategoryId              = data.result[0]['intCategoryId'];
                    var intCompTypeId              = data.result[0]['intCompTypeId'];
                    var vchComplaintTypeE          = data.result[0]['vchComplaintTypeE'];
                    var vchCategoryE               = data.result[0]['vchCategoryE'];
                    var vchSubCategoryE            = data.result[0]['vchSubCategoryE'];
                    var vchCompLogTypeE            = data.result[0]['vchCompLogTypeE'];
                    var vchCompLogTypeA            = data.result[0]['vchCompLogTypeA'];
                    var vchCompLogTypeF            = data.result[0]['vchCompLogTypeF'];
                    var gmsType                    = data.result[0]['gmsType'];
                    var desgName                   = data.result[0]['desgName'];
                    var intDistId                  = data.result[0]['intDistId'];
                    var intComplaintLogTypeId      = data.result[0]['intComplaintLogTypeId'];
                    var intComplaintPriority       = data.result[0]['intComplaintPriority'];
                    var intGender                  = data.result[0]['intGender'];
                    var intProofTypeId             = data.result[0]['intProofTypeId'];
                    var vchTokenno                 = data.result[0]['vchTokenno'];
                    var vchCompliantantName        = data.result[0]['vchCompliantantName'];
                    var vchContactNo               = data.result[0]['vchContactNo'];
                    var vchEmail                   = data.result[0]['vchEmail'];
                    var vchProofType               = data.result[0]['vchProofType'];
                    var vchAddress                 = data.result[0]['vchAddress'];
                    var vchLandmark                = data.result[0]['vchLandmark'];
                    var vchLongtitude              = data.result[0]['vchLongtitude'];
                    var vchLatitude                = data.result[0]['vchLatitude'];
                    var vchCompliantAgainstType    = data.result[0]['vchCompliantAgainstType'];
                    var vchCompliantAgainstCode    = data.result[0]['vchCompliantAgainstCode'];
                    var vchComplaintAgainstName    = data.result[0]['VCH_SUBJECT'];
                    var vchComplaintImage          = data.result[0]['vchComplaintImage'];
                    var vchComplaintFile           = data.result[0]['vchComplaintFile'];
                    var vchComplaintFile1          = data.result[0]['vchComplaintFile1'];
                    var vchComplaintDetails        = data.result[0]['vchComplaintDetails'];
                    var vchDocnature               = data.result[0]['vchDocnature'];
                    var intComplaintStatusId       = data.result[0]['intComplaintStatusId'];
                    var intPendingWith             = data.result[0]['intPendingWith'];
                    var intlevel                   = data.result[0]['intlevel'];
                    var intNextAta                 = data.result[0]['intNextAta'];
                    var vchRemark                  = data.result[0]['vchRemark'];
                    var vchActionFile              = data.result[0]['vchActionFile'];
                    var dtmCreatedOn               = data.result[0]['dtmCreatedOn'];
                    var vchPendingWithName         = data.result[0]['vchPendingWithName'];
                    var vchComplaintType           = data.result[0]['vchServiceName']; 
                    var plotNo                     = data.result[0]['plotNo'];
                    var sectorNo                   = data.result[0]['sectorNo'];
                    var landMark                   = (data.result[0]['vchLandmark']!='')?data.result[0]['vchLandmark']:'--';
                    var escalationDate             = data.result[0]['escalationDate'];
                    var deptName                   = data.result[0]['deptName'];
                    var statusId                   = data.result[0]['statusId'];                    
                    var vchCompLogType             = data.result[0]['COMPLAINT_MODE'];
                    var vchFeedback                = (data.result[0]['feedbackmsg']!='' && data.result[0]['feedbackmsg']!=null)?data.result[0]['feedbackmsg']:'';
                    var rating                     = data.result[0]['rating'];
var bases                       =data.result[0]['basess'];
                    if(vchPendingWithName!="--")
                    {
                         vchPendingWithName= vchPendingWithName+' ('+desgName +')';
                    }

                    var ForeignCitizen   = '';
                    var Gender           = '';
                    var FileHref         = '';
                    var compTypes        = '';
                    
                    
                   
                    if(gmsType==2){ compTypes='Complaint'; }if(gmsType==1){ compTypes='Service Request'; }
                    if(vchComplaintFile!=''){FileHref=appURL+'/uploadDocuments/complaintPhoto/'+vchComplaintFile;}else{FileHref="javascript:void(0);";} 
                    
                   
                var tbl                  = '';
                    //tbl                 += '<h3 class="blueTxt"> <a class="btn btn-info prntBtnside pull-right noPrint" href="javascript:printModal(\'ComplaintDetails\',\'myModal\');" title="" id="printIcon" data-toggle="tooltip" data-placement="top" class="btn btn-outline btn-success btn-sm w-30" data-original-title="Print"><i class="fa fa-print"></i></a></h3><div class="clearfix"></div>';   
                    
               if(totalLength>0)
                  {
               
                    tbl                 += '<h3 class="blueTxt">Complainant Details <a class="btn btn-info prntBtnside pull-right noPrint" href="javascript:printModal(\'ComplaintDetails\',\'myModal\');" title="" id="printIcon" data-toggle="tooltip" data-placement="top" class="btn btn-outline btn-success btn-sm w-30 noPrint" data-original-title="Print"><i class="fa fa-print noPrint"></i></a></h3><div class="clearfix"></div>';           
                    tbl                 += '<div class="addTable well">';      
                    tbl                 += '<table width="100%" border="0" cellspacing="0" cellpadding="2">';
                    tbl                 += '<tbody><tr>';
                    tbl                 += '<td width="200">Complaint Mode</td><td width="10">:</td><td>'+vchCompLogType+'</td><td width="200">Token No.</td><td width="10">:</td><td>'+vchTokenno+'</td>';
                    tbl                 += '</tr>';
         
                    tbl                 += '<tr>';
          tbl                 += '<td>Complainant Name</td><td>:</td><td>'+vchCompliantantName+'</td>';
          tbl                 += '<td>Email</td><td>:</td><td>'+vchEmail+'</td>';
          tbl                 += '</tr><tr>';
          tbl                 += '<td>Phone</td><td width="10">:</td><td>'+vchContactNo+'</td>';
          
          tbl                 += '</tr>';
          tbl                 += '<tr>';
          tbl                 += '';
          tbl                 += '</tr></tbody></table></div>';

          tbl                 += '<h3 class="blueTxt">Complaint Details</h3>';
          tbl                 += '<div class="addTable well">';
          tbl                 += '<table width="100%" border="0" cellspacing="0" cellpadding="2">';
          tbl                 += '<tbody><tr>';
          tbl                 += '<td width="200">Type</td><td width="">:</td><td colspan="4">'+compTypes+'</td>';
                  if(gmsType==1){
          tbl                 += '<td width="200"> Service</td><td width="">:</td><td>'+vchComplaintType+'</td>';
                    }
            tbl                 += '<tr><td width="200">Category</td><td width="">:</td><td width="">'+((vchCategoryE=='')?'N/A':vchCategoryE)+'</td></tr>';
                   if(gmsType==2){
          tbl                 += '<td width="200">Sub-Category</td><td width="">:</td><td>'+((vchSubCategoryE=='')?'N/A':vchSubCategoryE)+'</td>';
          
                    }
                    tbl                 += '</tr>';
                
              
          tbl                 += '<tr><td>Registration Date & Time</td><td>:</td><td>'+dtmCreatedOn+'</td>';
                    if(vchComplaintFile!='' ){
          tbl                 += '<td>Image</td> <td width="">:</td> <td><img src='+FileHref+' height="80" width="80"></td>';
                        }else if(vchComplaintFile1!='' ){
          tbl                 += '<td>Image</td> <td width="">:</td> <td><img src='+FileHrefs+' height="80" width="80"></td>';
                        }else{
                            tbl                 += '<td></td> <td width=""></td> <td></td>';
                        }

          tbl                 += '</tr>';

          tbl                 += '<tr><td>Complaint Detail in Brief</td><td width="">:</td> <td colspan="4">'+vchComplaintDetails+'</td>';
            
            tbl                 +='</tr>';
                       
          tbl                 += '<tr><td>Address</td><td>:</td><td colspan="4"><b>Plot no:</b>'+ plotNo +',  <b>SectorNo:</b>'+ sectorNo  +'<br/>   <b>LandMark:</b>'+ landMark +'<br/>'+vchCompliantAgainstType+'</td></tr>';
                        

          tbl                 += '</tr> </tbody></table></div>';
                        //if(intPendingWith!='' && intPendingWith>0 )
                       // {   

                    if(statusId!= RESOLVED_STATUS)
                    {
                        tbl                 += '<h3 class="blueTxt">Lodged at Action Taking Authority</h3>';
                        tbl                 += '<table class="table table-bordered table-hover addTable well">';
                        tbl                 += '<thead> <tr>';
                        tbl                 += '<th>Authority Name</th><th>Assigned On</th><th>Department Name</th><th width="">Sector</th><th width="">Plot</th>';
                        tbl                 += '</tr> </thead> <tbody>';
                        tbl                 += '<tr>';
                        tbl                 += '<td>'+ logPrevDetail['vchPrevPendingWithName']+' ('+logPrevDetail['prevDesgName'] +')'+'</td>';
                        tbl                 += '<td>'+logPrevDetail['dtmPrevEscalationDate']+'</td><td>'+logPrevDetail['prevDeptName']+'</td> <td>'+logPrevDetail['prevSectorNo']+'</td><td>'+logPrevDetail['prevPlotNo']+'</td>';
                        tbl                 += '</tr>  </tbody> </table>';
                        
                        // transfer autority details
                        tbl                 += '<h3 class="blueTxt">Transfered to Action Taking Authority</h3>';
                        tbl                 += '<table class="table table-bordered table-hover addTable well">';
                        tbl                 += '<thead> <tr>';
                        tbl                 += '<th>Authority Name</th> <th>Assigned On</th><th>Department Name</th><th width="">Sector</th><th width="">Plot</th><th width="">Status</th>';
                        tbl                 += '</tr> </thead> <tbody>';
                        tbl                 += '<tr> <td>'+ vchPendingWithName+'</td>';
                        tbl                 += '<td>'+logPrevDetail['dtmPrevEscalationDate']+'</td><td>'+deptName+'</td> <td>'+sectorNo+'</td><td>'+plotNo+'</td><td>'+vchcompStatus+'</td>';
                        tbl                 += '</tr>  </tbody> </table>';
                        
                        // transfer reason
                        tbl                 += '<h3 class="blueTxt">Reason to Transfer</h3>';
                        tbl                 += '<table class="table table-bordered table-hover addTable well">';
                        tbl                 += '<tbody>';
                        tbl                 += '<tr><td width="100">Remark : </td> <td><p>'+ logPrevDetail['vchPrevRemark']+'</p></td>';
                        tbl                 += '</tr>  </tbody> </table>';
                    }


                 var totalRecord = logDetail.length;    
                    if(totalLength>2)
                    {
                        var totalRecord1 =escDetail.length;
                    }
                    else
                    {
                        var totalRecord1 = 0
                    }
                     
                   if(totalRecord1>0)
                     {
                        tbl                 += '<h3 class="blueTxt">Escalation Level</h3>';
                        tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
                        tbl                 += '<tbody> ';
                        tbl                 += '<tr>';
                        tbl                 += '<th width="50">Sl#</th><th>Escalation Level</th>';
                        tbl                 += '<th>Designation</th> <th>Standard Action Taking '+bases+' </th>';
                       // tbl                 += '<th>Date of Escalation</th>';
                        tbl                 += '</tr>';

                        for (var j=0;j<totalRecord1;j++)
                        { 
                          tbl                 +=' <tr>';
                          tbl                 += '<td>'+escDetail[j]['SlNo']+'</td>  <td>'+escDetail[j]['level']+'</td>';
                          tbl                 += '<td>'+escDetail[j]['Designation']+'</td> <td>'+escDetail[j]['escalationHours']+'</td>';
                          // tbl                 += '<td>'+escDetail[j]['escalationDate']+'</td>';
                          tbl                 += '</tr> ';
                        }
                        tbl                 += ' </tbody></table>';
                    }

              }    
              
                    
                     
                    
                    

           //} //end pending with

                   //console.log(tbl);
                    $('#SuccessMessage').html(tbl);
           }
       });
    }
    
    
 function viewFieldDetails(complaintId,vchTokenNo,vchContactNo,vchEmail,fcrId) 
    {        

        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"viewFieldtDetails",CID:complaintId,TOKEN_NO:vchTokenNo,CONTACT:vchContactNo,EMAIL:vchEmail,FCRID:fcrId},
           success  : function(data) 
           {
                    
                    var totalLength =data.result.length;
                    var logDetail=data.result[1];
                    var escDetail=data.result[2];
               //console.log(logDetail);
                     
                    var vchcompStatus              = data.result[0]['compStatus'];
                    var dtmLastUpdateDate          = data.result[0]['dtmLastUpdateDate'];
                    var dtmApproxResDate           = data.result[0]['dtmApproxResDate'];
                    var dtmEscalationDate          = data.result[0]['dtmEscalationDate'];
                    var intCategoryId              = data.result[0]['intCategoryId'];
                    var intCompTypeId              = data.result[0]['intCompTypeId'];
                    var vchComplaintTypeE          = data.result[0]['vchComplaintTypeE'];
                    var vchCategoryE               = data.result[0]['vchCategoryE'];
                    var vchSubCategoryE            = data.result[0]['vchSubCategoryE'];
                    var vchCompLogTypeE            = data.result[0]['vchCompLogTypeE'];
                    var vchCompLogTypeA            = data.result[0]['vchCompLogTypeA'];
                    var vchCompLogTypeF            = data.result[0]['vchCompLogTypeF'];
                    var gmsType                    = data.result[0]['gmsType'];
                    var desgName                   = data.result[0]['desgName'];
                    var intDistId                  = data.result[0]['intDistId'];
                    var intComplaintLogTypeId      = data.result[0]['intComplaintLogTypeId'];
                    var intComplaintPriority       = data.result[0]['intComplaintPriority'];
                    var intGender                  = data.result[0]['intGender'];
                    var intProofTypeId             = data.result[0]['intProofTypeId'];
                    var vchTokenno                 = data.result[0]['vchTokenno'];
                    var vchCompliantantName        = data.result[0]['vchCompliantantName'];
                    var vchContactNo               = data.result[0]['vchContactNo'];
                    var vchEmail                   = data.result[0]['vchEmail'];
                    var vchProofType               = data.result[0]['vchProofType'];
                    var vchAddress                 = data.result[0]['vchAddress'];
                    var vchLandmark                = data.result[0]['vchLandmark'];
                    var vchLongtitude              = data.result[0]['vchLongtitude'];
                    var vchLatitude                = data.result[0]['vchLatitude'];
                    var vchCompliantAgainstType    = data.result[0]['vchCompliantAgainstType'];
                    var vchCompliantAgainstCode    = data.result[0]['vchCompliantAgainstCode'];
                    var vchComplaintAgainstName    = data.result[0]['VCH_SUBJECT'];
                    var vchComplaintImage          = data.result[0]['vchComplaintImage'];
                    var vchComplaintFile           = data.result[0]['vchComplaintFile'];
                    var vchComplaintFile1          = data.result[0]['vchComplaintFile1'];
                    var vchComplaintDetails        = data.result[0]['vchComplaintDetails'];
                    var vchDocnature               = data.result[0]['vchDocnature'];
                    var intComplaintStatusId       = data.result[0]['intComplaintStatusId'];
                    var intPendingWith             = data.result[0]['intPendingWith'];
                    var intlevel                   = data.result[0]['intlevel'];
                    var intNextAta                 = data.result[0]['intNextAta'];
                    var vchRemark                  = data.result[0]['vchRemark'];
                    var vchActionFile              = data.result[0]['vchActionFile'];
                    var dtmCreatedOn               = data.result[0]['dtmCreatedOn'];
                    var vchPendingWithName         = data.result[0]['vchPendingWithName'];
                    var vchComplaintType           = data.result[0]['vchServiceName']; 
                    var plotNo                     = data.result[0]['plotNo'];
                    var sectorNo                   = data.result[0]['sectorNo'];
                    var landMark                   = (data.result[0]['vchLandmark']!='')?data.result[0]['vchLandmark']:'--';
                    var escalationDate             = data.result[0]['escalationDate'];
                    var deptName                   = data.result[0]['deptName'];
                    var statusId                   = data.result[0]['statusId'];                    
                    var vchCompLogType             = data.result[0]['COMPLAINT_MODE'];
                    var vchFeedback                = (data.result[0]['feedbackmsg']!='' && data.result[0]['feedbackmsg']!=null)?data.result[0]['feedbackmsg']:'';
                    var rating                     = data.result[0]['rating'];


                  
                    if(vchPendingWithName!="--")
                    {
                         vchPendingWithName= vchPendingWithName+' ('+desgName +')';
                    }

                    var ForeignCitizen   = '';
                    var Gender           = '';
                    var FileHref         = '';
                    var compTypes        = '';
                    
                    
                   
                    if(gmsType==2){ compTypes='Complaint'; }if(gmsType==1){ compTypes='Service Request'; }
                    if(vchComplaintFile!=''){FileHref=appURL+'/uploadDocuments/complaintPhoto/'+vchComplaintFile;}else{FileHref="javascript:void(0);";} 
                    
                   
                var tbl                  = '';
                    //tbl                 += '<h3 class="blueTxt"> <a class="btn btn-info prntBtnside pull-right noPrint" href="javascript:printModal(\'ComplaintDetails\',\'myModal\');" title="" id="printIcon" data-toggle="tooltip" data-placement="top" class="btn btn-outline btn-success btn-sm w-30" data-original-title="Print"><i class="fa fa-print"></i></a></h3><div class="clearfix"></div>';           

            

        
                if(typeof logDetail!="undefined"){
                     var totalRecord = logDetail.length;}
                 else{
                     var totalRecord=0;
                 }
                 
                  if(totalRecord>0)
                  {
                      
                      if(totalRecord==1)
                      {
                          var style='style="display: block;"';
                          
                      }
                      else{
                          var style='';
                      }
                   /* if(fcrId==1){
						var style='style="display: block;"';
						
					}*/
					
                      var ctr=0;
                       tbl                 += '<h3 class="blueTxt">Summary of Field Report</h3>';  
                      tbl                 += '<div class="panel-group" id="accordion">';
                     // tbl                 += '<tbody><tr>';
                      //tbl                 += '<th width="50">Sl#</th> <th>Action No</th> <th> Action Taken By</th>';
                      //tbl                 += '<th>Status</th><th>Remark</th><th>Action Date & time</th>';
                      //tbl                 += '</tr>';
                       // if(personame!='' && personame!='--'){
                    for (var i=0;i<totalRecord;i++)
                         {
                           
                            
                          if(logDetail[i]['personName']!='' &&  logDetail[i]['personName']!='--' && fcrId==1){
                               
                               ctr=ctr+1;
                             
                         tbl        +='<div class="panel panel-default">';
                         tbl        +='<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">';
                         tbl        +='<div class="panel-heading menu-clicks">';

                          tbl        +='<div class="panel-title">Report of '+logDetail[i]['vchPendingWithName'];

                                 
                          tbl       +='<a class="pull-right collapseArrow"'+style+'><i class="fa fa-arrow-up"></i></a>';
                          tbl       +='<a class="pull-right expandArrow" id="assign"><i class="fa fa-arrow-down"></i></a></div></a>';

                          tbl       +='<div id="collapse'+i+'" class="panel-collapse collapse datacontainer" ><div class="table-responsive userdetails-table"> <table class="table  table-bordered"> <thead><tr> <td width="250">Type</td>   <td>'+logDetail[i]['linkType']+'</td> </tr><tr> <td width="150">Company Name</td>   <td>'+logDetail[i]['companyName']+'</td> </tr><tr> <td width="250">Assigned To</td> <td>'+logDetail[i]['personName']+'</td></tr><tr> <td width="250">Problem Description</td> <td>'+logDetail[i]['vchProblemDesc']+'</td></tr><tr> <td width="250">As Is status</td> <td>'+logDetail[i]['vchStatus']+'</td></tr><tr> <td width="250">Action Taken</td> <td>'+logDetail[i]['fieldActionTaken']+'</td></tr><tr> <td width="250">Material Used</td> <td>'+logDetail[i]['materialUsed']+'</td></tr><tr><td width="250">Status </td>  <td>'+logDetail[i]['vchComplaintStatus']+'</td> </tr><tr><td width="250">Remark</td>  <td>'+logDetail[i]['vchRemark']+'</td> </tr><tr><td width="250">Visting Date</td>   <td>'+logDetail[i]['visitedOn']+' '+logDetail[i]['visitingTime'] +'</td></tr><tr> <td width="150">Closing Date</td>  <td>'+logDetail[i]['dtmClosedOn']+' '+logDetail[i]['closingTime']+'</td> </tr> </thead> </table></div>';


                            tbl        +='</div>';
                            tbl        +='</div>';
                           tbl        +='</div>';


           
                          //tbl       +='<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse"><div class="panel-title"><a class="pull-right expandArrow"><i class="fa fa-arrow-down"></i></a><a class="pull-right collapseArrow"><i class="fa fa-arrow-up"></i></a></div> </a>'
                          //tbl    +=' <div id="collapse" class="panel-collapse collapse datacontainer" style="padding-top: 15px;" ><div class="table-responsive userdetails-table"><table class="table  table-bordered"><thead><tr><th width="20">Sl.#</th><th>User Id</th><th>Designation</th><th>Mobile No</th><th>Email Id</th></tr></thead><tbody><tr>';
                     // tbl                 +=' <tr>';
                    //  tbl                 += '<td> '+(i+1)+' </td> <td>Action '+(i+1)+' </td> <td>'+logDetail[i]['vchPendingWithName']+' ( '+logDetail[i]['vchDesgName']+' )</td>';
                     // tbl                 += '<td>'+logDetail[i]['vchComplaintStatus']+'</td><td>'+logDetail[i]['vchRemark']+'</td><td>'+logDetail[i]['vchActionDate']+'</td>';
                    //  tbl                 += '</tr>';
                            }
							else if(fcrId==2){
								tbl       +='<div class="table-responsive userdetails-table" id="fcrwithout"> <table class="table  table-bordered"> <thead><tr><td>Status </td>  <td>'+logDetail[i]['vchComplaintStatus']+'</td><td>Action By</td><td>'+logDetail[i]['vchPendingWithName']+'</td><td>Date & Time</td><td>'+logDetail[i]['vchActionDate']+'</td> </tr><tr><td>Remark</td>  <td colspan="5">'+logDetail[i]['vchRemark']+'</td> </tr> </thead> </table></div>';


                            tbl        +='</div>';
							}
							else{ 
							}
                        }
                          tbl        +='</div>';
                          tbl        +='</div>';
                    //}
                 

                   
                    /* if(totalRecord1>0)
                     {
                        tbl                 += '<h3 class="blueTxt">Escalation Level</h3>';
                        tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
                        tbl                 += '<tbody> ';
                        tbl                 += '<tr>';
                        tbl                 += '<th width="50">Sl#</th><th>Escalation Level</th>';
                        tbl                 += '<th>Designation</th> <th>Standard Action Taking Hours </th>';
                       // tbl                 += '<th>Date of Escalation</th>';
                        tbl                 += '</tr>';

                        for (var j=0;j<totalRecord1;j++)
                        { 
                          tbl                 +=' <tr>';
                          tbl                 += '<td>'+escDetail[j]['SlNo']+'</td>  <td>'+escDetail[j]['level']+'</td>';
                          tbl                 += '<td>'+escDetail[j]['Designation']+'</td> <td>'+escDetail[j]['escalationHours']+'</td>';
                          // tbl                 += '<td>'+escDetail[j]['escalationDate']+'</td>';
                          tbl                 += '</tr> ';
                        }
                   
                    }

                    tbl                 += ' </tbody></table>';*/

                     

           //} //end pending with

                   //console.log(tbl);
                    $('#SuccessMessage').html(tbl);
                       $('.collapseArrow').on('click',function()
                       {
			$(this).closest('.menu-clicks').find('.datacontainer').slideUp();
			$(this).hide();
			$(this).closest('.menu-clicks').find('.expandArrow').show();
		});
		$('.expandArrow').on('click',function(){
			$(this).closest('.menu-clicks').find('.datacontainer').slideDown();
			$(this).hide();
			$(this).closest('.menu-clicks').find('.collapseArrow').show();
		});
		console.log(fcrId);
		if(fcrId==1){
						$("#fcrwithout").hide();
					}
					if(fcrId==2){
						$("#fcrwithout").show();
						//var styles="'style="display: block;"';
					}
        $('.collapseArrow').hide();
          for (var i=0;i<totalRecord;i++)
            {
                      if(i==1)   {  $('.expandArrow')[0].click(); }
            }
                         
      
         if(totalRecord==2)
                  {
                     
                  }
       
                  }
                  //}
           }
       });
    }
	
	  /*
      Function to get GMS Sub Category
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
   
    function getFieldCategory(controllId,serviceId,selVal)
    {
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getFieldCategory',serviceId:serviceId,selVal:selVal},
            success: function (data) {
               
                var res = data.category;
                $('#'+controllId).html(res);
            }
        });
    }
	
	 
    /*
      Function to get GMS Sub Category According Cat Id
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
    function getFieldSubCategory(controllId,catId,selVal)
    {
       
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getFieldSubCategory',catId:catId,selVal:selVal},
                success: function (data) {
                 var res = data.subCategory;
                $('#'+controllId).html(res);
            }
        });
    }
	
	 function departmentSearch(formDated,toDated,deptId,catId,subcatId)
    {
        //console.log(formDated+' '+toDated+' '+deptId+' '+catId+' '+subcatId);
        $(".showfilterbox").hide();
        $("#deptwiseReport").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"departmentSearch",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
			   
              //if(data.length>0){
               $("#deptwiseReport").html(data.contentResult);
			   //}
			   //else{
 //$("#deptwiseReport").html('<div class="noRecord">No Records Found </div>');				   
			 //  }
               //console.log(html);
           }
       });
        
    }
    
    
       function summarySearch(formDated,toDated,deptId,catId,subcatId)
    {
        //console.log(formDated+' '+toDated+' '+deptId+' '+catId+' '+subcatId);
        $(".showfilterbox").hide();
        $("#deptwiseReport").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"summarySearch",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
              
               var htmldata=data.contentResult;
               var res=data.allData;
               $("#summaryReport").html(htmldata);
               
               
               var numberWithCommas = function(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };
                
       var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [res['lodgedComplain'],res['resolve'],res['pending'],res['escalated'],res['reOpenGrievance']],
                backgroundColor: [
                    '#064469',
                    '#1ead2a',
		    '#d6ac31',
                    '#ff5d36',
		    '#f15475',
                    '#2cecdc',
                    '#9966ff'
                ],
		borderWidth:[0,0,0,0,0,0,0,0],
                label: 'Dataset 1'
            }],
            labels: [
                "Received",
                "Resolved",
                "Pending", 
                "Escalated",
                "Re-Open",
                "Forwarded",
                "Feedback"
            ]
        },
        options: {
            responsive: false,
            legend: {
				display: false,
                position: 'right',
            },
            title: {
                display: false
            },
            animation: {
                animateScale: false,
				duration:3000,
				easing: "easeOutBounce",
                animateRotate: false
            }
        }
    };
	
	$('#complaintSummayChart').empty();
                    $('#complaintSummayChart').html(' <canvas id="doughnutChart"  style="margin-left: -75px;" ></canvas>'); 
	//#complaintSummayChart
               var myDoughnut;
                
                var ctx4 = $("#doughnutChart");
                if(myDoughnut){
                myDoughnut.destroy();
            }
                //var myDoughnut = new Chart(ctx4, configs);
                window.myDoughnut = new Chart(ctx4, config);
                //myDoughnut.destroy();
                 
                
                    
           }
       });
        
    }
    /*
  * Function for Emp Wise Pending Report Search
  * By:Shweta Choudhury
  * 
  * 
  */
 
    function empWiseReportSearch(formDated,toDated,deptId,catId,subcatId)
    {
        //console.log(formDated+' '+toDated+' '+deptId+' '+catId+' '+subcatId);
        $(".showfilterbox").hide();
        
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"empWiseReport",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
              //$("#empwiseReport").html('Please wait...');
              var html = data.contentResult;
               $("#empwiseReportDetails").html(html);
           }
       });
        
    }

    
    /* Desg wise*/
    
    function desgSearch(formDated,toDated,deptId,catId,subcatId)
    {
        
        
        $(".showfilterbox").hide();
        $("#deptwiseReport").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"searchDesg",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
			   console.log(data);
               var numberWithCommas = function(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };
                
              var res=data.contentResult;
			  if(res.length>0){
               var pendig=[];
               var desg=[];
              for (var i in res){
				  if(res[i].totPending !=undefined){
					  pendig.push(res[i].totPending);
					  desg.push(res[i].Desg);
					}
                  
              }
             var configDeptBar =  {
                            labels: desg,
                            datasets: [
                            {
                                label: 'Pending',
                                data: pendig,
                                label: 'Pending',
				backgroundColor: "rgba(6, 68, 105, 0.6)",
				borderWidth: 1,
                                    
                            }]
                  };
		/**for updating chart**/
                
                    $('#desgWiseChart').empty();
                    $('#desgWiseChart').html(' <canvas id="complaintsDesg" style="height:220px; width:100%"></canvas>'); 
                    
                var ctx=$('#complaintsDesg');
                var barGraph = new Chart(ctx, {
				type: 'bar',
				data: configDeptBar,
                                options: {
				responsive: true,
				title:{
					display:false,
					text:""
				},
				tooltips: {
					mode: 'index',
				},
				hover: {
					mode: 'index'
				},
				legend: {
					position: 'bottom',
				},
                                scales: {
                                xAxes: [{ 
                                      stacked: true, 
                                  gridLines: { display: false },
                                  }],
                                yAxes: [{ 
                                      stacked: true, 
                                  ticks: {
                                                      callback: function(value) {  return numberWithCommas(value); },
                                                      }, 
                                  }],
                              },
			}
			});
                        
                       $('#complaintsDesg').on('click',function(evt){
                       
                       //console.log(desgIds);
                            var activePoint = barGraph.getElementAtEvent(evt)[0];
                            var data = activePoint._chart.data;
                            var datasetIndex = activePoint._datasetIndex;
                            var label = data.datasets[datasetIndex].label;
                            
                            var value = data.datasets[datasetIndex].data[activePoint._index];
                            var sectorName=activePoint._model.label
                            var res = sectorName.split(" ");
                            var indexValue=activePoint._index;
                            var desgId=desgIds[indexValue];
                            //console.log(activePoint);
                            //console.log(desgId);console.log(activePoint._datasetIndex);console.log(activePoint._index);
                            window.location="desgWiseComplaintReport/"+desgId;
                        });
                        
               barGraph.update();
               event.preventDefault();
			   }
			  else{
				  $('#desgWiseChart').html(' <div class="noRecord">No Records Found</div>'); 
			  }
                    //var myBar = new Chart(ctx, configDeptBar);
                    
                
           }
       });
        
    }
    
    
    
    function statusSearch(formDated,toDated,deptId,catId,subcatId)
    {
        //console.log(toDated);
        $(".showfilterbox").hide();
        $("#allstatuswiseReport").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"searchStatus",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
               var html = data.contentResult;
               $("#allstatuswiseReport").html(html);
               //console.log(html);
           }
           });
        
    }
    
    
    function compWisesearch(formDated,toDated,deptId,catId,subcatId)
    {
        
        $(".showfilterbox").hide();
        $("#compWiseStatus").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"searchCompWise",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
               
              
               var htmlData = data.contentResult; //console.log(html);
               
               var res=data.allResult;
               
               var configs = {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [res['lodgedComplain'],res['resolve'],res['pending'],res['escalated'],res['reOpenGrievance']],
                            backgroundColor: [
                                'rgb(6, 68, 105)',
                                'rgb(30, 173, 42)',
                                'rgb(214, 172, 49)',
                                'rgb(255, 93, 54)',
                                'rgb(241, 84, 117)',
                                'rgb(153, 102, 255)'
                            ],
                            borderWidth:[0,0,0,0,0,0,0,0],
                            label: 'Dataset 1'
                        }],
                        labels: [
                            "Received",
                            "Resolved",
                            "Pending",
                            "Escalated",
                            "Re-Open",
                            "Feedback"
                        ]
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display:false,
                            position: 'right',
                        },
                        title: {
                            display: false
                        },
                        animation: {
                            animateScale: true,
                                            duration:3000,
                                            easing: "easeOutBounce",
                            animateRotate: true
                        }
                    }
                };
                
                //var myDoughnut='';
                
                var ctx4 = $("#doughnutCharts");
                
                var myDoughnut = new Chart(ctx4, configs);
                $("#compWiseStatus").html(htmlData);
               
               
           }
           });
        
    }
    
    function sectorsSearch(formDated,toDated,deptId,catId,subcatId)
    {
          
               var numberWithCommas = function(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };
        $(".showfilterbox").hide();
       
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"sectorsSearch",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
              
               
               var html = data.contentResult;
            
               var res=data.allResult;
               if(html.length>0){
               //var res=data.contentResult;
               var closed=[];
               var sector=[];var reopen=[];
               var inprocess=[];
               var forward=[];
               var escalated=[];
               var onhold=[]; var wip=[];var discard=[];
               
              for (var i in html){
                  closed.push(html[i].closed);
                  sector.push(html[i].sector);
                  escalated.push(html[i].escalated);
                  forward.push(html[i].forwarded);
                  onhold.push(html[i].onhold);
                  reopen.push(html[i].reopen);
                  wip.push(html[i].wip);
                  discard.push(html[i].discard);
                  
              }
               
              var configsectorBars = {
			type: 'bar',
			 data: {
                           
                            labels:sector ,
                            datasets: [
                            {
                                label: 'In Process',
                                data: wip,
                                label: 'In Process',
				backgroundColor: "rgba(210,172,62, 0.6)",
				borderWidth: 1,
                                borderColor: "rgb(210,172,62)",                    
                            },
                           {
                                label: 'Reopen',
                                data: reopen,  
                                label: 'Reopen',
				backgroundColor: "rgba(251,134,63, 0.6)",
				borderWidth: 1,
				borderColor: "rgb(251,134,63)",
                            },
                            
                             {
                                label: 'Forwarded',
                                data:  forward,
                                label: 'Forward',
				backgroundColor: "rgba(35,202,187, 0.6)",
				borderWidth: 1,
				borderColor: "rgb(35,202,187)",
                            },
                            {
                                label: 'Resolved',
                                data:  closed,
                                label: 'Resolved',
                                backgroundColor: "rgba(77,195,19, 0.6)",
				borderWidth: 1,
				borderColor: "rgb(77,195,19)",
                            },
                             {
                                label: 'Discarded',
                                data:  discard,
                                label: 'Discard',
				backgroundColor: "rgba(236,61,48, 0.6)",
				borderWidth: 1,
				borderColor: "rgb(236,61,48)",
                            }
                            ]
                         },
			options: {
				responsive: true,
				title:{
					display:false,
					text:""
				},
				tooltips: {
					mode: 'index'
                                        
				},
				hover: {
					mode: 'index'
				},
				legend: {
					position: 'bottom',
				},
                               
				 scales: {
                                xAxes: [{ 
                                      stacked: true, 
                                  gridLines: { display: false },
                                  }],
                                yAxes: [{ 
                                      stacked: true, 
                                  ticks: {
                                                      callback: function(value) { return numberWithCommas(value); },
                                                      }, 
                                  }],
                              },
			}
		};
                 $('#sectorWisestatus').empty();
                 $('#sectorWisestatus').html('<canvas id="complaintseSource" style="height:220px; width:100%"></canvas>'); 
                var myChart;
                
                var ctx4 = $("#complaintseSource");
                if(myChart){
                   myChart.destroy();
                }
                window.myChart = new Chart(ctx4, configsectorBars);
                //myChart.destroy();
                
                var canvas =$('#complaintseSource');
                var myChart = new Chart(canvas, configsectorBars);
				}
				else{
					 $('#sectorWisestatus').html('<div class="noRecord">No Records Found</div>'); 
				}
              
                    $('#complaintseSource').on('click',function(evt){
                       
                            var activePoint = myChart.getElementAtEvent(evt)[0];
                            var data = activePoint._chart.data;
                            var datasetIndex = activePoint._datasetIndex;
                            var label = data.datasets[datasetIndex].label;
                            var statusId=0;
                           if(label=='Reopen'){  statusId=3; } if(label=='On Hold'){  statusId=4; }
                           if(label=='Resolved'){  statusId=5; } if(label=='Discard'){ statusId=8; }
                           if(label=='In Process'){  statusId=2; }  if(label=='Forward'){  statusId=6; }
                            var value = data.datasets[datasetIndex].data[activePoint._index];
                            var sectorName=activePoint._model.label
                            var res = sectorName.split(" ");
                            var sectorId=res[1];
                            //console.log(statusId);console.log(sectorId);console.log(label);
                            window.location="sectorWiseComplaintReport/"+sectorId+"/"+statusId;
                        });
         
               
           }
           });
        
    }
    function sourceSearch(formDated,toDated,deptId,catId,subcatId)
    {
        console.log(toDated);
        $(".showfilterbox").hide();
        //$("#allstatuswiseReport").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"sourceSearch",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
               var res=data.contentResult;
			    if(res.length>0){
               var configLine = {
			type: 'bar',
			data: {
				labels: ["Online", "Mobile", "Email"],
				datasets: [{
					label: 'Current Month',
					backgroundColor: "rgba(6, 68, 105,0.6)",
					borderWidth: 1,
					data: [res['currentMonthOnline'],res['currentMonthMobile'],res['currentMonthEmail'] ]
				}, {
					label: 'Today',
					backgroundColor: "rgb(214, 172, 49)",
					borderWidth: 1,
					data: [res['todayOnline'],res['todayMobile'],res['todayEmail']]
                                        //data: [1,1,1]
				}]
			},
			options: {
				animation:false,
				responsive: false,
				title:{
					display:false,
					text:""
				},
				tooltips: {
					mode: 'index',
				},
				hover: {
					mode: 'index'
				},
				legend: {
					position: 'bottom',
				},
				scales: {
					xAxes: [{
						scaleLabel: {
							display: false,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						stacked: false,
						scaleLabel: {
							display: false,
							labelString: 'Value'
						},
      ticks: {
                beginAtZero: true,
        userCallback: function(label, index, labels) {
                     if (Math.floor(label) === label) {
                         return label;
                     }
                 },         
            }
					}]
				}
			}
		};
                console.log(configLine);
                $('#complaintbysource').empty();
                 $('#complaintbysource').html('<canvas id="complaintsSource" style="height:220px; width:100%"></canvas>'); 
                var myChart;
                
                var ctx4 = $("#complaintsSource");
               
                window.myChart = new Chart(ctx4, configLine);
                //myChart.destroy();
                
                var canvas =$('#complaintsSource');
                var myChart = new Chart(canvas, configLine);
				}else{
				   
				   $('#complaintbysource').html('<div class="noRecord">No Records Found</div>'); 
			   }


		/*var canvas1 = document.getElementById('complaintsSource');
                 var myChart1 = new Chart(canvas1, configLine);
                    canvas1.onclick = function(evt) {
                          //alert("dffd");
						  
                            var activePoint = myChart1.getElementAtEvent(evt)[0];
							//console.log(evt);
							///console.log(activePoint._index);
                            var data = activePoint._chart.data;
                            var datasetIndex = activePoint._datasetIndex;
                            var label = data.datasets[datasetIndex].label;
							//alert(label);alert(evt.dataPoint.x);
							//alert("Point", points[0].value);
                            var statusId=0;
                           if(activePoint._index=='0'){  statusId=2; } if(activePoint._index=='1'){  statusId=1; }
                           if(activePoint._index=='2'){  statusId=3; } if(label=='IVR'){ statusId=4; }
                           if(label=='KIOSK'){  statusId=5; }  if(label=='CFC'){  statusId=6; }
                            var value = data.datasets[datasetIndex].data[activePoint._index];
							//console.log(data.datasets[datasetIndex]);
                            var sectorName=activePoint._model.label
                            var res = sectorName.split(" ");
                            var sectorId=res[1];
                            //console.log(statusId);console.log(sectorId);console.log(label);
                           window.location="modeWiseReport-details/"+statusId+"/"+'22';
              
            };*/
           }
           })
        
    }
    
    
    /*
 Function to fill subcategory.
 By: Rahul Kumar Saw
 On: 22-Nov-2017
 */
 
function fillDashboardSubCategory(controlId,catId,selVal)
{
    
    if(catId!=CATEGORYOTHER){
         $(".complaintSubcategory").show();

   $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillSubCategory',catId: catId,selVal:selVal},
        success: function (data) {
            $('.'+controlId).html(data.subcategory);	
        }
    });}
    else{
        $(".complaintSubcategory").hide();
    }
}


   /*
      Function to get GMS Sub Category
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
   
function fillGmsDashboardCategory(controllId,serviceId,selVal,typeId)
{
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'fillGmsCategory',serviceId:serviceId,selVal:selVal,typeId:typeId},
            success: function (data) {
               
                var res = data.category;
                $('.category').html(res);
            }
        });
}


      /*
     Function to fill department
     By: Shweta Choudhury Bhakat
     On: 29-12-2017
     */ 
 function fillDashboardDepartmnet(controlId,selVal){
        
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getDept', selVal:selVal},
            success: function (data) {
                $('.'+controlId).html(data.result);
                
            }
        });
    }
	
	
	/** Top Performance **/
    
    /* function userSearch(formDated,toDated,deptId,catId,subcatId)
    {
        
        $(".showfilterbox").hide();
        //$("#userSearch").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"userSearch",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
              
               var htmldata=data.contentResult;
               var res=data.allData;
               var username=[];
               var resolved=[];
               
              for (var i in htmldata){
                  
                 
                  username.push(htmldata[i].pendingWith);
                  resolved.push(htmldata[i].resolved);
                 
                  
              }
              
                 $('#userSearch').empty();
                 $('#userSearch').html('<canvas id="multiReopen" style="height:220px; width:100%"></canvas>'); 
              
              /**/
               /*var numberWithCommas = function(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };
                
                var configLine1 = {
                     type: 'bar',
                     data: {
                         //labels: username,
                         labels: username,
                         datasets: [{
                             label: 'Top Peformance ',
                             backgroundColor: "rgba(214, 172, 49,0.6)",
                             borderWidth: 1,
                             data:resolved
                         }] 
                     },
                     options: {
                         animation:false,
                         responsive: false,
                         title:{
                             display:false,
                             text:""
                         },
                         tooltips: {
                             mode: 'index',
                         },
                         hover: {
                             mode: 'index'
                         },
                         legend: {
                             position: 'bottom',
                         },
                         scales: {
                             xAxes: [{
                                 scaleLabel: {
                                     display: false,
                                     labelString: 'Month'
                                 }
                             }],
                             yAxes: [{
                                 stacked: false,
                                 scaleLabel: {
                                     display: false,
                                     labelString: 'Value'
                                 },
               ticks: {
                         beginAtZero: true,
                 userCallback: function(label, index, labels) {
                              if (Math.floor(label) === label) {
                                  return label;
                              }
                          },         
                     }
                             }]
                         }
                     }
                 };

         var canvas1 =$('#multiReopen');
         var myChart1 = new Chart(canvas1, configLine1);
        //var canvas1 = document.getElementById('multiReopen');
        //var myChart1 = new Chart(canvas1, configLine1);
                 
                
                    
           }
       });
        
    }*/
	
	
	
	 function userSearch(formDated,toDated,deptId,catId,subcatId,textdept)
    {
      
        $(".showfilterbox").hide();
        //$("#userSearch").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"userSearch",formDated:formDated,toDated:toDated,deptids:deptId,catId:catId,subcatId:subcatId},
           success  : function(data) 
           {
               //console.log(data);
               if(deptId!=0)
               {
                $("#deptsName").html(" of "+textdept);
                }
            
              var dataCol=data.colors; 
               var htmldata=data.contentResult;
               var res=data.allData;
               var username=[];
               var resolved=[];
               var received=[];
               var totreceived=[];
               var dd1=["rgba(236,61,48, 0.6)","rgba(77,195,19, 0.6)","rgba(214, 172, 49,0.6)"];
               var dd=dataCol;
             
              for (var i in htmldata){
                  
                 
                  username.push(htmldata[i].pendingWith);
                  resolved.push(htmldata[i].resolved);
                 received.push(htmldata[i].receive);
                  totreceived.push(htmldata[i].totresolved);
                 
                  
              }
              console.log(totreceived);
                 $('#userSearch').empty();
                 $('#userSearch').html('<canvas id="multiReopen" style="height:220px; width:100%"></canvas>'); 
              
              /**/
               var numberWithCommas = function(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };
                
                var configLine1 = {
                     type: 'bar',
                     data: {
                         //labels: username,
                         labels: username,
                         datasets: [{
                             //label: ["Top Performer"],
                             backgroundColor:eval(dataCol),
                             borderWidth: 1,
                             data:resolved,
                             received:received,
                             totreceived:totreceived,
                             displayLegend:false
                         }] 
                     },
                     options: {
                         animation:false,
                         responsive: false,
                         title:{
                             display:false,
                             text:""
                         },
                         tooltips: {
                             enabled: false,
                             custom: function(tooltipModel,data) {
                                     
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = "<table class='tooltipTable'></table>";
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }
               // console.log(tooltipModel);
                //console.log(data);
                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        
                        var colors = tooltipModel.labelColors[i];
                        //var style = 'background:' + colors.backgroundColor;
                        //style += '; border-color:' + colors.borderColor;
                        //style += '; border-width: 2px';
                        var span = '<span>Total Resolved %: </span>';
                        var span1 = '<span>Total Resolved : </span>';
                        var span2 = '<span>Total Received : </span>';
                        innerHtml += '<tr><td>' + span2 + received[tooltipModel.dataPoints[0].index] + '</td></tr>';
                        innerHtml += '<tr><td>' + span1 + totreceived[tooltipModel.dataPoints[0].index] + '</td></tr>';
                         innerHtml += '<tr><td>' + span + body + '</td></tr>';
                        
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            }
       
                },
                              /*callbacks: {
                               label: function(tooltipItem,data) {
                                   //content:"x:" +data.datasets[0].received[tooltipItem.index]
                                   
                                return " Total Received :"+data.datasets[0].received[tooltipItem.index] +"\r Total Resolved :"+data.datasets[0].totreceived[tooltipItem.index]+ " Total Resolved :" +Number(tooltipItem.yLabel);
                            }
                         }}*/
                         hover: {
                             mode: 'index'
                         },
                         legend: {
                             
                             display: false,
                         },
                         scales: {
                             xAxes: [{
                                 scaleLabel: {
                                     display: false,
                                     labelString: 'Month'
                                 }
                             }],
                             yAxes: [{
                                 stacked: false,
                                 scaleLabel: {
                                     display: false,
                                     labelString: 'Value'
                                 },
               ticks: {
                         beginAtZero: true,
                 userCallback: function(label, index, labels) {
                              if (Math.floor(label) === label) {
                                  return label;
                              }
                          },         
                     }
                             }]
                         }
                     }
                 };

         var canvas1 =$('#multiReopen');
         var myChart1 = new Chart(canvas1, configLine1);
        //var canvas1 = document.getElementById('multiReopen');
        //var myChart1 = new Chart(canvas1, configLine1);
                 
                
                    
           }
       });
        
    }


function uploadFileToTempFolder(currentId,filename,filenames, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId, thisObj,docid) {
    
        thisObj.closest('tr').find('.uploadConf').show();
        thisObj.hide();
   if (!IsCheckFile(filename, 'Invalid file type', fileType)) {
      
        $("#" + filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    /*if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        $("#" + hdnFilename).val('');
        return false;
    }*/
    var uploadFileName = $("#" + filename).val();
    uploadFileName = uploadFileName.split('\\');
    uploadFileName = uploadFileName[Number(uploadFileName.length) - 1];
    var hdnFormName = $("#hdnFormName").val();
   
    $("#" + loadingId).show();
    /*******Check whether the file is being uploaded or not********/
    if (!typeof (chkStatusId) == 'undefined' || chkStatusId != '') {
        $("#" + chkStatusId).val('1');
    }

    $.each($(".clsCheckdouploadsts"), function () {
        var updatsts = $(this).val();
        if (!typeof (updatsts) == 'undefined' || updatsts != '') {
            if (updatsts > 0) {
                $('input[type="submit"]').prop('disabled', true);
            }
        }
    });
    var disblests = 0;
    if(linkId==1){
        var lang='English';
    }
    /*******Check whether the file is being uploaded or not********/
    if(uploadFileName!=''){
            $.ajaxFileUpload({
                url: appURL + '/proxy',
                secureuri: false,
                fileElementId: filename,
                dataType: 'json',
                data: {method: 'uploadFileToTempFolder', filename: filenames, hdnFormName: hdnFormName, docId: docId},
                success: function (data) {
                    $("#" + hdnFilename).val(data.savedFileName);
                    $("#"+currentId).hide();
                    $("#spnDocE").show();
                    $("#" + spanId).show();
                    $("#" + loadingId).hide();
                    
              var elem='<a href="'+appURL+'/temp/'+data.savedFileName+'" class="documentEnglish" target="_blank"><img id="userImage" src="'+appURL+'/img/pdf.png" alt=""  border="0" align="absmiddle" class="imgDocE" style=""></a>';
              
                $('#'+docid).html(elem); 

                    /*******Check whether the file is being uploaded or not********/
                    if (!typeof (chkStatusId) == 'undefined' || chkStatusId != '') {
                        $("#" + chkStatusId).val('0');
                    }

                    $.each($(".clsCheckdouploadsts"), function () {
                        var updatsts = $(this).val();
                        if (!typeof (updatsts) == 'undefined' || updatsts != '') {
                            if (updatsts > 0) {
                                disblests++;
                                $('input[type="submit"]').prop('disabled', true);
                            }
                        }
                    });
                    if (disblests == 0)
                        $('input[type="submit"]').prop('disabled', false);
                    /*******Check whether the file is being uploaded or not********/
              },
        //        error: function (data, status, e) {
        //            alert(e);
        //        }
            });
    }
    else{
        viewAlert('Please Upload Tender Document in '+lang);
    }
    return false;
}




function uploadFileToTempFolderHindi(currentId,filename,filenames, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId,thisObj,docid) {
      
     thisObj.closest('tr').find('.uploadConf').show();
        thisObj.hide();
   if (!IsCheckFile(filename, 'Invalid file type', fileType)) {
      
        $("#" + filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    /*if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        $("#" + hdnFilename).val('');
        return false;
    }*/
    var uploadFileName = $("#" + filename).val();
    uploadFileName = uploadFileName.split('\\');
    uploadFileName = uploadFileName[Number(uploadFileName.length) - 1];
    var hdnFormName = $("#hdnFormName").val();
   
    $("#" + loadingId).show();
    /*******Check whether the file is being uploaded or not********/
    if (!typeof (chkStatusId) == 'undefined' || chkStatusId != '') {
        $("#" + chkStatusId).val('1');
    }

    $.each($(".clsCheckdouploadsts"), function () {
        var updatsts = $(this).val();
        if (!typeof (updatsts) == 'undefined' || updatsts != '') {
            if (updatsts > 0) {
                $('input[type="submit"]').prop('disabled', true);
            }
        }
    });
    var disblests = 0;
       if(linkId==1){
        var lang='Hindi';
    }
    /*******Check whether the file is being uploaded or not********/
     if(uploadFileName!=''){
    $.ajaxFileUpload({
        url: appURL + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadFileToTempFolder', filename: filenames, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {
            $("#" + hdnFilename).val(data.savedFileName);
            
            $("#"+currentId).hide();
            $("#spnDocH").show();
            $("#" + spanId).show();
            $("#" + loadingId).hide();
             var elem='<a href="'+appURL+'/temp/'+data.savedFileName+'" class="documentHindi" target="_blank"><img id="userImage" src="'+appURL+'/img/pdf.png" alt=""  border="0" align="absmiddle" class="imgDocH" style=""></a>';
              
                $('#'+docid).html(elem);
         
            //$("#spnDoc").hide();
          
            /*******Check whether the file is being uploaded or not********/
            if (!typeof (chkStatusId) == 'undefined' || chkStatusId != '') {
                $("#" + chkStatusId).val('0');
            }

            $.each($(".clsCheckdouploadsts"), function () {
                var updatsts = $(this).val();
                if (!typeof (updatsts) == 'undefined' || updatsts != '') {
                    if (updatsts > 0) {
                        disblests++;
                        $('input[type="submit"]').prop('disabled', true);
                    }
                }
            });
            if (disblests == 0)
                $('input[type="submit"]').prop('disabled', false);
            /*******Check whether the file is being uploaded or not********/
      },
//        error: function (data, status, e) {
//            alert(e);
//        }
    });}
    else{
        viewAlert('Please Upload Tender Document in '+lang);
    }
    return false;
}

	 /* --------------------------------------
     Function to get Faq Details
     Created by     : Arpita Rath
     Created On     : 09-11-2017
  * -------------------------------------- */ 
     function getWebSearchDetails(text,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getWebSearchDetails", text :text},
            success  : function(data) 
            {
                var res = data.getWebSearch;
                $("#"+ctrlId).html(res);
            }
         });
     }   

      /* --------------------------------------
     Function to get Faq Details
     Created by     : Arpita Rath
     Created On     : 09-11-2017
  * -------------------------------------- */ 
     function getPortalSearchDetails(text,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPortalSearchDetails", text :text},
            success  : function(data) 
            {
                var res = data.getPortalSearch;
                $("#"+ctrlId).html(res);
            }
         });
     }
    

function uploadFileToTempFolderMarathi(currentId,filename,filenames, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId,thisObj,docid) {
      thisObj.closest('tr').find('.uploadConf').show();
        thisObj.hide();
   
   if (!IsCheckFile(filename, 'Invalid file type', fileType)) {
      
        $("#" + filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    /*if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        $("#" + hdnFilename).val('');
        return false;
    }*/
    var uploadFileName = $("#" + filename).val();
    uploadFileName = uploadFileName.split('\\');
    uploadFileName = uploadFileName[Number(uploadFileName.length) - 1];
    var hdnFormName = $("#hdnFormName").val();
   
    $("#" + loadingId).show();
    /*******Check whether the file is being uploaded or not********/
    if (!typeof (chkStatusId) == 'undefined' || chkStatusId != '') {
        $("#" + chkStatusId).val('1');
    }

    $.each($(".clsCheckdouploadsts"), function () {
        var updatsts = $(this).val();
        if (!typeof (updatsts) == 'undefined' || updatsts != '') {
            if (updatsts > 0) {
                $('input[type="submit"]').prop('disabled', true);
            }
        }
    });
    var disblests = 0;
    var disblests = 0;
       if(linkId==1){
        var lang='Marathi';
    }
    /*******Check whether the file is being uploaded or not********/
     if(uploadFileName!=''){
    $.ajaxFileUpload({
        url: appURL + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadFileToTempFolder', filename: filenames, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {
            $("#" + hdnFilename).val(data.savedFileName);
            $("#"+currentId).hide();
            $("#spnDocM").show();
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#" + linkId).show();


  var elem='<a href="'+appURL+'/temp/'+data.savedFileName+'" class="documentMarathi" target="_blank"><img id="userImage" src="'+appURL+'/img/pdf.png" alt=""  border="0" align="absmiddle" class="imgDocM" style=""></a>';
              
                $('#'+docid).html(elem);
         
            /*******Check whether the file is being uploaded or not********/
            if (!typeof (chkStatusId) == 'undefined' || chkStatusId != '') {
                $("#" + chkStatusId).val('0');
            }

            $.each($(".clsCheckdouploadsts"), function () {
                var updatsts = $(this).val();
                if (!typeof (updatsts) == 'undefined' || updatsts != '') {
                    if (updatsts > 0) {
                        disblests++;
                        $('input[type="submit"]').prop('disabled', true);
                    }
                }
            });
            if (disblests == 0)
                $('input[type="submit"]').prop('disabled', false);
            /*******Check whether the file is being uploaded or not********/
      },
//        error: function (data, status, e) {
//            alert(e);
//        }
    });
    }
    else{
        viewAlert('Please Upload Tender Document in '+lang);
    }
    return false;
} 

//---- Function for Autofill Form By:: Arpita Rath On:: 21-04-2018  
     function getPortalSearchAutoFill(text)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPortalSearchAutoFill", text :text},
            success  : function(data) 
            {
                var res = data.getPortalSearchAuto;
                var errFlag = data.errFlag; 
                $(".autoSrchDiv").html(res);
                 if(errFlag==1)
                {
                   $('.autoSrchDiv').hide();
                }
                $('.srchVal').on('click',function() {
                     var srchTxt = $(this).attr('data-val'); 
                     $('#txtAdminPortalSearch').html(srchTxt);
                     $('#txtAdminPortalSearch').val(srchTxt);    
                     $('.autoSrchDiv').hide();                 
                }); 
            }
         });
     }

  //---- Function for Autofill Form By:: Arpita Rath On:: 21-04-2018  
     function getPortalSearchAutoFillPort(text)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getPortalSearchAutoFillPort", text :text},
            success  : function(data) 
            {  
                var res = data.getPortalSearchAutoPort; //console.log(res);
                var errFlag = data.errFlag; 
                $(".autoSrchDivPort").html(res);
                 if(errFlag==1)
                {
                   $('.autoSrchDivPort').hide();
                } else if(errFlag==0) {
					$('.autoSrchDivPort').show();
				}
                $('.srchValId').on('click',function() {
                     var srchTxt = $(this).attr('data-val'); 
                     $('#searchId').html(srchTxt);
                     $('#searchId').val(srchTxt);    
                     $('.autoSrchDivPort').hide();                 
                }); 
            }
         });
     }

/* --------------------------------------
     Function to get News Letter Details
     Created by     : Arpita Rath
     Created On     : 09-11-2018
  * -------------------------------------- */ 
     function getNewsLetterDetails(id,ctrlId,langType)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getNewsLetterDetails", id :id, langType: langType},
            success  : function(data) 
            {
                var res = data.getNewsLetter;                   
                $('#myModalLabel').html('Newsletter Details');  
                $("#"+ctrlId).html(res);
            }
         });
     }       

// Added ON: 25-09-2018 Start
        //---- Function for document category modules Form By:: Amitashree Mallick On:: 27-04-2018  
     function fillDigiDocModules(ctrlId,selVal)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"fillDigiDocModules", selVal :selVal},
            success  : function(data) 
            {
                var res = data.result;
                $('#'+ctrlId).html(res);    
                     
            }
         });
     }
     // Added ON: 25-09-2018 End
     
     
     
     //Added ON::26-09-2018
     //For CFC
        /*******/
            /*
 Function to take action details
 By: Shweta Choudhury Bhakat
 On: 23-12-2017
 */ 
   function authorityTransfer(compId,tokenNo,email,phoneNo,catid,subcatid,deptid,sectorNo,pendingwith,level,controlId)
    {
          //$('#myModalTAN').modal();
          
          $('#myModalTF').modal();
          $("#hdnComplantIdAuthority").val(compId);
          $("#hdnTokenNoAuthority").val(tokenNo);
          $("#hdnEmailAuthority").val(email);
           $("#hdnPhoneNoAuthority").val(phoneNo);
        /**/
       
         $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'transfer',  tokenNo: tokenNo},
            success: function (data) {
               if(data.intDeptId!=0){
                     fillTagSector('slctSector',data.intDeptId,data.intSector);
               }
               else
               {
                     fillSector('slctSector',data.intSector);
               }
             
               fillPlot('slctPlot', data.intSector,data.intPlot);
               //fillPlot('slctPlot',data.intSector,data.intPlot);
               fillDepartmnet('slctDept',data.intDeptId);
               getauthorityTransfer(tokenNo,catid,subcatid,deptid,sectorNo,pendingwith,level,controlId)
               $("#hdnComplantId").val(data.compId);
               $("#hdnTokenNo").val(tokenNo);
              
          
         }
        });
    }
	
	 //---- Function for Get Authority Form By:: Shweta Choudhury On:: 27-04-2018  
    function getauthorityList(deptId,ctrl)
    {
               
         $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getAuthority',  deptId: deptId},
            success: function (data) {
              
               $("#"+ctrl).html(data.result);
              
          
         }
        });
    }
    
    
    /*
 Function to take action details
 By: Shweta Choudhury Bhakat
 On: 23-12-2017
 */ 
    function viewComplaintCFCDetails(complaintId,vchTokenNo,vchContactNo,vchEmail) 
    {        
        //console.log("working");
        //alert(complaintId+'=='+vchTokenNo+'=='+vchContactNo);
        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"viewComplaintDetails",CID:complaintId,TOKEN_NO:vchTokenNo,CONTACT:vchContactNo,EMAIL:vchEmail},
           success  : function(data) 
           {
                 //console.log(data);
                    var totalLength =data.result.length;
                  
                    var compDetail=data.result[0];
                    var logDetail=data.result[1];
                    var escDetail=data.result[2];
                    
                    var vchcompStatus              = data.result[0]['compStatus'];
                    var dtmLastUpdateDate          = data.result[0]['dtmLastUpdateDate'];
                    var dtmApproxResDate           = data.result[0]['dtmApproxResDate'];
                    var dtmEscalationDate          = data.result[0]['dtmEscalationDate'];
                    var intCategoryId              = data.result[0]['intCategoryId'];
                    var intCompTypeId              =data.result[0]['intCompTypeId'];
                    var vchComplaintTypeE          = data.result[0]['vchComplaintTypeE'];
                    var vchCategoryE               = data.result[0]['vchCategoryE'];
                    var vchSubCategoryE            = data.result[0]['vchSubCategoryE'];
                    var vchCompLogTypeE            = data.result[0]['vchCompLogTypeE'];
                    var vchCompLogTypeA            = data.result[0]['vchCompLogTypeA'];
                    var vchCompLogTypeF            = data.result[0]['vchCompLogTypeF'];
                    var gmsType                    = data.result[0]['gmsType'];
                    var intHeirachyId              = data.result[0]['intHeirachyId'];
                    var intDistId                  = data.result[0]['intDistId'];
                    var intComplaintLogTypeId      = data.result[0]['intComplaintLogTypeId'];
                    var intComplaintPriority       = data.result[0]['intComplaintPriority'];
                    var intGender                  = data.result[0]['intGender'];
                    var intProofTypeId             = data.result[0]['intProofTypeId'];
                    var vchTokenno                 = data.result[0]['vchTokenno'];
                    var vchCompliantantName        = data.result[0]['vchCompliantantName'];
                    var vchContactNo               = data.result[0]['vchContactNo'];
                    var vchEmail                   = data.result[0]['vchEmail'];
                    var vchProofType               = data.result[0]['vchProofType'];
                    var vchAddress                 = data.result[0]['vchAddress'];
                    var vchLandmark                = data.result[0]['vchLandmark'];
                    var vchLongtitude              = data.result[0]['vchLongtitude'];
                    var vchLatitude                = data.result[0]['vchLatitude'];
                    var vchCompliantAgainstType    = data.result[0]['vchCompliantAgainstType'];
                    var vchCompliantAgainstCode    = data.result[0]['vchCompliantAgainstCode'];
                    var vchComplaintAgainstName    = data.result[0]['VCH_SUBJECT'];
                    var vchComplaintImage          = data.result[0]['vchComplaintImage'];
                    var vchComplaintFile           = data.result[0]['vchComplaintFile'];
                    var vchComplaintFile1          = data.result[0]['vchComplaintFile1'];
                    var vchComplaintDetails        = data.result[0]['vchComplaintDetails'];
                    var vchDocnature               = data.result[0]['vchDocnature'];
                    var intComplaintStatusId       = data.result[0]['intComplaintStatusId'];
                    var intPendingWith             = data.result[0]['intPendingWith'];
                    var intlevel                   = data.result[0]['intlevel'];
                    var intNextAta                 = data.result[0]['intNextAta'];
                    var vchRemark                  = data.result[0]['vchRemark'];
                    var vchActionFile              = data.result[0]['vchActionFile'];
                    var dtmCreatedOn               = data.result[0]['dtmCreatedOn'];
                var vchPendingWithName         = data.result[0]['vchPendingWithName'];
                    var vchComplaintType           = data.result[0]['vchServiceName']; 
                     var plotNo                   =data.result[0]['plotNo'];
                     var sectorNo                  =data.result[0]['sectorNo'];
                     var landMark                  =(data.result[0]['vchLandmark']!='')?data.result[0]['vchLandmark']:'--';
                     var escalationDate        = data.result[0]['escalationDate'];
                     var deptName                = data.result[0]['deptName'];
                     var statusId                = data.result[0]['statusId'];
                     var compSource             =data.result[0]['intCompSource'];
                     //alert(statusId);
                     var arrStatus=['Open','In Process','ReOpen','On Hold','Resolved','Forward','Escalated','Discarded','Transferd'];
                     var arrSource=['Postal','Email','Phone Call','SMS','Physical visit to CFC']
               
                    //console.log(arrStatus);
                    
                    var vchCompLogType   = data.result[0]['COMPLAINT_MODE'];
                    var ForeignCitizen   = '';
                    var Gender           = '';
                    var FileHref         = '';
                    var compTypes=''
                    
                    
                  
                   
                    if(gmsType==2){ compTypes='Complaint'; }if(gmsType==1){ compTypes='Service Request'; }
                    if(vchComplaintFile!=''){FileHref=appURL+'/uploadDocuments/complaintPhoto/'+vchComplaintFile;}else{FileHref="javascript:void(0);";} 
                    
                   if(totalLength>0)
                  {
                var tbl                  = '<script src="'+siteUrl+'/js/html5lightbox.js"></script>';
                 //var tbl                  = '';
                    tbl                 += '<h3 class="blueTxt">Complainant Details <a class="btn btn-info prntBtnside pull-right noPrint" href="javascript:printModal(\'ComplaintDetails\',\'myModal\');void(0)" title="" id="printIcon" data-toggle="tooltip" data-placement="top" class="btn btn-outline btn-success btn-sm w-30" data-original-title="Print"><i class="fa fa-print noPrint"></i></a></h3><div class="clearfix"></div>';           
                    tbl                 += '<div class="addTable well">';      
                    tbl                 += '<table width="100%" border="0" cellspacing="0" cellpadding="2">';
                    tbl                 += '<tbody><tr>';
                    tbl                 += '<td width="200">Complaint Mode</td><td width="10">:</td><td>'+vchCompLogType+'</td><td width="200">Complaint Source</td><td width="10">:</td><td>'+arrSource[compSource-1]+'</td>';
                    tbl                 += '</tr>';
         
                    tbl                 += '<tr>';
                    tbl                 += '<td>Complainant Name</td><td>:</td><td>'+vchCompliantantName+'</td>';
                    tbl                 += '<td width="200">Token No.</td><td width="10">:</td><td>'+vchTokenno+'</td>';
                    tbl                 += '</tr><tr>';
                    tbl                 += '<td>Phone</td><td width="10">:</td><td>'+vchContactNo+'</td>';
                    tbl                 += '<td>Email</td><td>:</td><td>'+vchEmail+'</td>';
                    tbl                 += '</tr>';
                    tbl                 += '<tr>';
                    tbl                 += '';
                    tbl                 += '</tr></tbody></table></div>';

                    tbl                 += '<h3 class="blueTxt">Complaint Details</h3>';
                    tbl                 += '<div class="addTable well">';
                    tbl                 += '<table width="100%" border="0" cellspacing="0" cellpadding="2">';
                    tbl                 += '<tbody><tr>';
                    //tbl                 += '<td width="200">Type</td><td width="">:</td><td colspan="4">'+compTypes+'</td>';
                  if(gmsType==1){
                    tbl                 += '<td width="200"> Service</td><td width="">:</td><td>'+vchComplaintType+'</td>';
                    }
                    tbl                 += '<tr><td width="200">Category</td><td width="">:</td><td width="">'+((vchCategoryE=='')?'N/A':vchCategoryE)+'</td></tr>';
                   if(gmsType==2){
                    tbl                 += '<td width="200">Sub-Category</td><td width="">:</td><td>'+((vchSubCategoryE=='')?'N/A':vchSubCategoryE)+'</td>';
                    
                    }
                    tbl                 += '</tr>';
                
              
                    tbl                 += '<tr><td>Complaint date & time</td><td>:</td><td>'+dtmCreatedOn+'</td>';
                    if(vchComplaintFile!='' ){
                        

                        tbl                 += '<td>Image</td> <td width="">:</td> <td><a class="html5lightbox" href="'+FileHref+'"> <img src="'+FileHref+'" height="80" width="80"> </a>  </td>';


                    //tbl                 += '<td>Image</td> <td width="">:</td> <td><a href="#" class="html5lightbox"><img src='+FileHref+' height="80" width="80"></td>';


                    



                        }else{
                            tbl                 += '<td></td> <td width=""></td> <td></td>';
                        }

                    tbl                 += '</tr>';

                    tbl                 += '<tr><td>Complaint Detail in Brief</td><td width="">:</td> <td colspan="4">'+vchComplaintDetails+'</td><tr>';
                                        tbl                 += '<tr><td>Status</td><td>:</td><td colspan="4">'+arrStatus[statusId-1]+'</td></tr>';
                    tbl                 += '<tr><td>Address</td><td>:</td><td colspan="4">Plot no:'+ plotNo +',  SectorNo:'+ sectorNo  +'<br/>   LandMark:'+ landMark +'<br/>'+vchCompliantAgainstType+'</td></tr>';
                    
                        

                    tbl                 += '</tr> </tbody></table></div>';
                        if(intPendingWith!='' && intPendingWith>0 )
                        {       

                    /*if(statusId!= RESOLVED_STATUS)
                    {
                    tbl                 += '<h3 class="blueTxt">Pending With</h3>';
                    tbl                 += '<table class="table table-bordered table-hover addTable well">';
                    tbl                 += '<thead> <tr>';
                    tbl                 += '<th width="50">Sl#</th> <th>Authority Name</th>  <th>Assigned On</th><th>Department Name</th> <th>Escalation Date</th> <th width="">Status</th>';
                    tbl                 += '</tr> </thead> <tbody>';
                    tbl                 += '<tr> <td>1 </td> <td>'+ vchPendingWithName+'</td>';
                    tbl                 += '<td>'+dtmLastUpdateDate+'</td><td>'+deptName+'</td><td>'+escalationDate+'</td> <td>'+vchcompStatus+'</td>';
                    tbl                 += '</tr>  </tbody> </table>';
                    }*/



                        /* tbl                 += '<h3 class="blueTxt">Summary of Action Taken</h3>';                 
               var totalRecord = logDetail.length;
                  if(totalRecord>0)
                  {
                            tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
                            tbl                 += '<tbody><tr>';
                            tbl                 += '<th width="50">Sl#</th> <th>Action No</th> <th> Action Taken By</th>';
                            tbl                 += '<th>Action</th><th>Remark</th><th>Action Date & time</th>';
                            tbl                 += '</tr>';
                    for (var i=0;i<totalRecord;i++)
                         { 
                              tbl                 +=' <tr>';
                            tbl                 += '<td> '+(i+1)+' </td> <td>Action '+(i+1)+' </td> <td>'+vchPendingWithName+'</td>';
                            tbl                 += '<td>'+logDetail[i]['vchComplaintStatus']+'</td><td>'+logDetail[i]['vchRemark']+'</td><td>'+logDetail[i]['vchActionDate']+'</td>';
                            tbl                 += '</tr>';
                          }
                    }
                    tbl                 += '</tbody> </table>';

                    //console.log(escDetail.length);
                    if(totalLength>2)
                    {
                        var totalRecord1 =escDetail.length;
                    }
                    else
                    {
                        var totalRecord1 = 0
                    }*/
                     
                   /*   if(totalRecord1>0)
                   {
                                tbl                 += '<h3 class="blueTxt">Escalation Level</h3>';
                                tbl                 += '<table class="table table-bordered table-striped table-hover addTable well" cellspacing="0">';
                                tbl                 += '<tbody> ';

                                tbl                 += '<tr>';
                                tbl                 += '<th width="50">Sl#</th><th>Escalation Level</th>';
                                tbl                 += '<th>Designation</th> <th>Date of Escalation</th>';
                                tbl                 += '</tr>';

                    for (var j=0;j<totalRecord1;j++)
                         { 

                    tbl                 +=' <tr>';
                    tbl                 += '<td>'+escDetail[j]['SlNo']+'</td>  <td>'+escDetail[j]['level']+'</td>';
                    tbl                 += '<td>'+escDetail[j]['Designation']+'</td> <td>'+escDetail[j]['escalationDate']+'</td>';
                    tbl                 += '</tr> ';
                        }
                   
                    }*/

                    tbl                 += ' </tbody></table>';
              }} else{ tbl                 += "<div class='noContent'>No Record Available</div>";}//end pending with

                   //console.log(tbl);
                    $('#SuccessMessage').html(tbl);
           }
       });
    }
    
    function emailComplaint()
    {
        $('#Loader').html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
        $.ajax({
            type: "POST",
            url: appURL+'/proxy',
            dataType: "json",
            data: {method:'emailComplaint'},
            success: function(data){
               window.location.href=appURL+'/viewEmailComplaint';
            }
        });
    }
     
        /*
 Function to take action details
 By: Shweta Choudhury Bhakat
 On: 23-12-2017
 */ 
    function getauthorityTransfer(tokenNo,catid,subcatid,deptid,sectorNo,pendingwith,level,controlId){
    
    $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'authorityTransfer',  tokenNo: tokenNo,catid:catid,subcatid:subcatid,deptid:deptid,sectorNo:sectorNo,pendingwith:pendingwith,level:level},
           success: function (data) {
            $('#'+controlId).html(data.service);    
                }
                
        });
    }
    
     
    function trackSmartCard(uid,uniqueId,pin,issuedDate,name,email,mobile){
         $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'smartCardTrack',  uid: uid,uniqueId:uniqueId,pin:pin,issuedDate:issuedDate,name:name,email:email,mobile:mobile},
           success: function (data) {
           if(data.result=='0'){
               window.print();
           }  
                }
                
        });
        
    }
    
    
    function viewNotifiedDetails(id,tokenNo){
         $('#SuccessNotification').html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
      
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'viewNotifiedDetails',id: id,tokenNo:tokenNo},
           success: function (data) {
               console.log(data.result);
           if(data.result!=''){
               $('#SuccessNotification').html(data.result);
           }  
                }
                
        });
        
    }
    
    
    
      //---- Function for Get Authority Form By:: Shweta Choudhury On:: 27-04-2018  
    function getNotificationSendDetails(id,pendingWith,deptHead,name,phno,email){
       
          $('.authorityDetails').html('');
          $.ajax({
                    type: "POST",
                    url: appURL + '/proxy',
                    dataType: "json",
                    data: {method: 'getAuthDetails',  pendingWith: pendingWith,source:id,deptId:deptHead},
                    success: function (data) {
                        var html='';
                        html+='<div class="" style="padding-bottom: 18px;padding-top: 13px;">';
                        html+=' <table width="100%" border="0" cellspacing="0" cellpadding="2"><tbody>';
                       console.log(data);
                                  
                                
                         if(id==1){
                              html+='<tr><td width="200">Name</td><td width="10">:</td><td>'+name+'</td><td width="200">Email</td><td width="10">:</td><td>'+email+'</td></tr>';
                          html+='<tr><td>Phone No</td><td>:</td><td>'+phno+'</td></tr>';
            
                            }else{
                                html+='<tr><td width="200">Name</td><td width="10">:</td><td>'+data.name+'</td><td width="200">Email</td><td width="10">:</td><td>'+data.email+'</td></tr>';
                          html+='<tr><td>Phone No</td><td>:</td><td>'+data.mobileno+'</td></tr>';
                            }
                            
                            
                            html+='</tbody></table></div>';
                            if(id!=0){
                            $('.authorityDetails').html(html);
                        }else{
                            $('.authorityDetails').html('');
                        }
                        
                    }
        });
        
    }
     function viewLandDetails(profileid,landappid,entityname,name,tokenNo){
         $('#divLandContent').html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
      
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'viewLandDetails',id: profileid,landappid:landappid,entityname:entityname,name:name,tokenNo:tokenNo},
           success: function (data) {
               console.log(data.result);
           if(data.result!=''){
               $('#divLandContent').html(data.result);
           }  
                }
                
        });
        
    }
    
        function viewOfficerNotifiedDetails(id,tokenNo){
      
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'viewNotifiedOfficerDetails',id: id,tokenNo:tokenNo},
           success: function (data) {
               console.log(data.result);
           if(data.result!=''){
               $('#SuccessNotification').html(data.result);
           }  
                }
                
        });
        
    }
    
    /*
 Function to fill service.
 By: Shweta Choudhury
 On: 25-05-2018
 */
 function fillVendorName(controlId,vendorId,selVal)
{
   $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillVendor',vendorId: vendorId, selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.vendorDetails);    
        }
    });
}
   



    // Function to fill Vendor By:: Rahul Kumar Saw 
    function fillVendor(vendorId,selval,fillnameId,fillControlId)
    {
      
       $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillVendorList',vendorId:vendorId,selVal:selval},
                success: function (data) 
                {
                  var res = data.Vendor;
                
                  $('#'+fillControlId).html(res);
                 //setTimeout(function(){ 
                  assignVendorTitle(document.getElementById(fillControlId),fillnameId);
                  
                 
            }
        });

    }
    
    //function to fill calender name according vendor by::Shweta Choudhury On::29-05-2018
     function fillVendorCalender(vendorId,fillControlId,calenderId)
    {
       // console.log(vendorId+'-------------'+fillControlId+'-------------'+calenderId);
          $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillVendorCalender',vendorId:vendorId,calenderId:calenderId},
                success: function (data) 
                {
                  var res = data.CalenderDetails;
                
                  $('#'+fillControlId).html(res);
                 //setTimeout(function(){ 
                 // assignVendorTitle(document.getElementById(fillControlId),fillnameId);
                  
                 
            }
        });
    }



    /*
 Function to fill service.
 By: Rahul Kumar Saw
 On: 29-05-2018
 */
 function fillVendorReport(controlId,vendorId,selVal)
{
   $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillVendorReport',vendorId: vendorId, selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.Vendor);    
        }
    });
}
     /*
     * Function
     */
    function viewComplaintLists(complaintId,vchTokenNo,vchContactNo,vchEmail,deptId,name,pendingWith,status,source) 
    {       
       
        $("#notifiationModal").modal();
        var arr=['Open','In Process','Re Open','On Hold','Resolved','Forward','Escalate','Discard','Transferd'];
        
               $('#hdnNotificationComplantId').val(complaintId);
               $('#hdnNotificationTokenNo').val(vchTokenNo);
               $('#hdnNotificationPhoneNo').val(vchContactNo);
               $('#hdnNotificationEmail').val(vchEmail);
               $('#hdnNotificationdeptId').val(deptId);
               $('#hdnNotificationName').val(name);
               $('#hdnNotificationPendingwith').val(pendingWith);
               $('#hdnNotificationStatus').val(status);
              // $('#hdnNotificationSource').val(source);
               $('#complainanName').text(name);
               $('#complainanEmail').text(vchEmail);
               $('#complainanTokenNo').text(vchTokenNo);
               $('#complainanphoneNo').text(vchContactNo);
               $('#complainanStatus').text(arr[status-1]);
               
                var notificationDd='';
                notificationDd +='<select name="slctNotification" class="form-control" id="slctNotification" onchange="showHideNotification(this.value,'+pendingWith+','+deptId+',\''+name+'\'\,\''+vchContactNo+'\'\,\''+vchEmail+'\');">';
                notificationDd +='<option value="0">--Select--</option>';
                notificationDd +='<option value="1">Citizen</option>';
                notificationDd +='<option value="2">Authority</option>';
                notificationDd +='<option value="3">Department Head</option>';
                notificationDd += '</select>';
               $('#notifiedDropdown').html(notificationDd);
              /* $.ajax({
                    type: "POST",
                    url: appURL + '/proxy',
                    dataType: "json",
                    data: {method: 'getListDetails',  pendingWith: pendingWith,source:source,deptId:deptId},
                    success: function (data) {*/
                        //console.log(data.result)
                     /*if(data.result!='')
                     {
                         if(source==1){
                            
                               $("#authorityDetails").hide();
                         }
                         
                         if(source==2){
                              $('#authorityHeading').text('Authority Details');
                               $("#authorityDetails").show();
                         }
                         if(source==3){
                              $('#authorityHeading').text('Department Head Details');
                               $("#authorityDetails").show();
                         }
                         
                         $('.authorityDetails').html(data.result);
                    
                     }*/
          
                            //}
                   //});
               
               //sendCFCNotification(vchTokenNo,vchContactNo,vchEmail,deptId,name,pendingWith,status,source,ids)
                  
   }
   /* 

     Function to get Calender Events Details.
        By: Pusparani Mandal
        On: 14-Jul-2017

*/
 var tempArr = [];
function fetchCalenderEvent(wcid)
{
   tempArr = [];
  $('#calendar').html('<div class="text-center"><i class="fa fa-spinner fa-2x"></i></div>');
 $("#hdnAddData").val('');
    $.ajax({
            type: "POST",                        
            dataType: "json",                       
            url: appURL + '/proxy',
            data: {method:"fetchCalenderEvent",wcid:wcid},
            success: function (data) {  
                //console.log(data);
            var eventdata="";
                if(data.length!=0)
                {                    
                    eventdata="[";
                    $.each(data, function(key, value) {
                        if (value.holidaytype == 1)
                        {
                            var clr = '#064469';
                        } else {
                            var clr = '#D2AC2B';
                        }
                           eventdata += "{";

                    eventdata += "id:" + value.id + ",";
                    eventdata += "name:'" + value.name + "',";
                    eventdata += "holidaytype:'" + value.holidaytype + "',";
                    eventdata += "startDate:new Date(" + value.sdate_year + "," + value.sdate_month + "," + value.sdate_date + "),";
                    eventdata += "endDate:new Date(" + value.edate_year + "," + value.edate_month + "," + value.edate_date + "),";
                    eventdata += "color:'" + clr + "',";

                    eventdata = eventdata.slice(0, -1);
                    eventdata += "},";
                    
                   var len=tempArr.length;
                   if(len>0){
                    for(var i=0;i<len;i++) {
                    if(tempArr[i]['id'] != value.id) {
                        
                 console.log(tempArr[i]['id']+'---'+ value.id);
                         }
                     }
                 }
                 
     
                    tempArr.push({
                        id: value.id,
                        name: value.name,
                        holidaytype: value.holidaytype,
                        startDate: value.sdate_date+ "-" + value.sdate_month_real+"-"+value.sdate_year,
                        endDate: value.edate_date+ "-" + value.edate_month_real + "-" +value.edate_year  ,
                        color: clr
                    });
              

                });
                eventdata = eventdata.slice(0, -1);
                eventdata += "]";

  

            }

            $("#hdnAddData").val(JSON.stringify(tempArr));
            //console.log(JSON.stringify(tempArr));
           // console.log(eventdata);
            
            calendarFun(wcid, eventdata);
        }
    });
 
    
}
/*function fetchCalenderEvent(currentYear)
{
    
                    $.ajax({
                        type: "POST",                        
                        dataType: "json",                       
                        url: appURL + '/proxy',
                        data: {method:"fetchCalenderEvent",currentYear:currentYear},
                        success: function (data) {  
                          var eventdata="";
                          if(data.length!=0)
                          {                    
                            eventdata="[";
                            $.each(data, function(key, value) {
                               eventdata+="{";

                                 eventdata+="id:"+value.id+",";
                                 eventdata+="name:'"+value.name+"',";
                                 eventdata+="holidaytype:'"+value.holidaytype+"',";
                                 eventdata+="startDate:new Date("+value.sdate_year+","+value.sdate_month+","+value.sdate_date+"),";
                                 eventdata+="endDate:new Date("+value.edate_year+","+value.edate_month+","+value.edate_date+"),";                             

                            
                               eventdata=eventdata.slice(0,-1);
                               eventdata+="},";  
                            });
                            eventdata=eventdata.slice(0,-1);
                            eventdata+="]";  
                          }                     
                            
                           calendarFun(currentYear,eventdata);
                        }
                    }); 
                   
}*/

/* 

     Function to get Calender Events Details calendarFun.
        By: Pusparani Mandal
        On: 14-Jul-2017

*/

/*function calendarFun(currentYear,eventdata)
{
    var alleventdata="";
    if(eventdata!="")
    {
        alleventdata=eval(eventdata);
    }
    $('#calendar').calendar({ 
        disabledWeekDays: [0,6],
        enableContextMenu: true,
        enableRangeSelection: true,
        contextMenuItems:[
            {
                text: 'Update',
                click: editEvent
            },
            {
                text: 'Delete',
                click: deleteEvent
            }
        ],
        selectRange: function(e) {
            editEvent({ startDate: e.startDate, endDate: e.endDate });
        },
        mouseOnDay: function(e) {
            if(e.events.length > 0) {
                var content = '';  
                var cnt=0;
                for(var i in e.events) {
                    cnt++;
                    content += '<div class="event-tooltip-content">'
                                    + '<div class="event-name" style="color:' + e.events[i].color + '">'+cnt+'. ' + e.events[i].name + '</div>'
                                + '</div>';
                }            
                $(e.element).popover({ 
                    trigger: 'manual',
                    container: 'body',
                    html:true,
                    content: content
                });
                
                $(e.element).popover('show');
            }
        },
        mouseOutDay: function(e) {
            if(e.events.length > 0) {
                $(e.element).popover('hide');
            }
        },
        dayContextMenu: function(e) {
            $(e.element).popover('hide');
        },       

     dataSource:alleventdata
       /*dataSource:
         [
            {
                id: 0,
                name: 'Google I/O',
                startDate:new Date(currentYear, 4, 15),
                endDate: new Date(currentYear, 4, 29)
            }
        ]*/
    /*});
}*/


function calendarFun(currentYear, eventdata,holidayData)
{
  var holidayTemp=[];
   
    var alleventdata = "";
    var listArray="";
    var holidayList="";
    if (eventdata != "")
    {
        alleventdata = eval(eventdata);
    }
    var selAll = 'chkweekItem';
   
        $(".chkweekItem:checked").each(function()
        {
           holidayTemp.push($(this).data('val'));
           holidayList=holidayTemp.toString();
         //  console.log(holidayList);
     
        });
     
    var array = JSON.parse("[" + holidayList + "]");
    $('#calendar').calendar({
        disabledWeekDays:array,
        enableContextMenu: true,
        enableRangeSelection: true,
        contextMenuItems: [
            {
                text: 'Update',
                click: editEvent
            },
            {
                text: 'Delete',
                click: deleteEvent
            }
        ],
        selectRange: function (e) {
            editEvent({startDate: e.startDate, endDate: e.endDate});
        },
        mouseOnDay: function (e) {
            if (e.events.length > 0) {
                var content = '';
                var cnt = 0;
                for (var i in e.events) {
                    cnt++;
                    content += '<div class="event-tooltip-content">'
                            + '<div class="event-name" style="color:' + e.events[i].color + '">' + cnt + '. ' + e.events[i].name + '</div>'
                            + '</div>';
                }
                $(e.element).popover({
                    trigger: 'manual',
                    container: 'body',
                    html: true,
                    content: content
                });

                $(e.element).popover('show');
            }
        },
        mouseOutDay: function (e) {
            if (e.events.length > 0) {
                $(e.element).popover('hide');
            }
        },
        dayContextMenu: function (e) {
            $(e.element).popover('hide');
        },
        dataSource: alleventdata

                /*dataSource:
                 [
                 {
                 id: 0,
                 name: 'Google I/O',
                 startDate:new Date(currentYear, 4, 15),
                 endDate: new Date(currentYear, 4, 29)
                 }
                 ]*/
    });
    //}, 1000);
}


/* 

     Function to Edit Calender Events Details editEvent.
        By: Pusparani Mandal
        On: 14-Jul-2017

*/
function editEvent(event) {
    $('#event-modal input[name="event-index"]').val(event ? event.id : '');
    $('#event-modal input[name="event-name"]').val(event ? event.name : '');
    $('#event-modal select[name="ddl-holiday"]').val(event ? event.holidaytype : '');
    $('#event-modal input[name="event-start-date"]').datepicker('update', event ? event.startDate : '');
    $('#event-modal input[name="event-end-date"]').datepicker('update', event ? event.endDate : '');
    $('#event-modal').modal();
}
function removeIndexOfArray(property, num, arr) {
    for (var i in arr) {
        if (arr[i][property] == num)
            arr.splice(i, 1);
    }
}
/* 

     Function to Delete Calender Events Details deleteEvent.
        By: Pusparani Mandal
        On: 14-Jul-2017

*/

function deleteEvent(event) {
  
  
  /* confirmAlert('Are you sure to delete selected Event(s)');
      $('#btnConfirmOk').on('click',function(){
            var eventid=event.id;
                        $.ajax({
                            type: "POST",                       
                            dataType: "json",                       
                            url: appURL + '/proxy',
                            data: {method:"deleteCalenderEvent",eventid:eventid},
                            success: function (data) { 
                                viewAlert(data.result,'','');
                            }
                        });  

            var dataSource = $('#calendar').data('calendar').getDataSource();

            for(var i in dataSource) {
                if(dataSource[i].id == event.id) {
                    dataSource.splice(i, 1);
                    break;
                }
            }
            
            $('#calendar').data('calendar').setDataSource(dataSource);
       });*/
    //confirmAlert('Are you sure to delete selected holiday(s)');
    //$('#btnConfirmOk').on('click', function () {        
        var eventid = event.id;
        var removeItem = eventid;

        removeIndexOfArray('id', eventid, tempArr);
       // remove(tempArr, eventid);
        console.log(JSON.stringify(tempArr));
     
        var dataSource = $('#calendar').data('calendar').getDataSource();
        for (var i in dataSource) {
            if (dataSource[i].id == event.id) {
                dataSource.splice(i, 1);
                break;
            }
        }
        $('#calendar').data('calendar').setDataSource(dataSource);
        $("#hdnAddData").val(JSON.stringify(tempArr));
}

/* 

     Function to Save Calender Events Details saveEvent.
        By: Pusparani Mandal
        On: 14-Jul-2017

*/

/*function saveEvent() {
     
   var type= $('#event-modal select[id="ddl-holiday"]').val();
   var hname= $('#event-modal input[name="event-name"]').val();
     if(!blankCheck('event-name','Holiday name can not be left blank'))
           return false;
     if(!checkSpecialChar('event-name'))
           return false;
     if(!maxLength('event-name',50, 'Holiday name'))
           return false;
     if(!blankCheck('event-start-date','From date can not be left blank'))
           return false;  
     if(!blankCheck('event-end-date','To date can not be left blank'))
           return false;
     if ($('#event-modal input[name="event-name"]').val()=="")
     {
        viewAlert('Holiday name can not be left blank');
     }
      else if (type==null)
     {
        viewAlert('Holiday type can not be left blank');
     }
      else
      {
        var event = {
            id: $('#event-modal input[name="event-index"]').val(),
            name: $('#event-modal input[name="event-name"]').val(),
            holidaytype:$('#event-modal select[name="ddl-holiday"]').val(),
            startDate: $('#event-modal input[name="event-start-date"]').datepicker('getDate'),
            endDate: $('#event-modal input[name="event-end-date"]').datepicker('getDate')
        }  
        var eventid=$('#event-modal input[name="event-index"]').val();  
        var hrefLoc=appURL+'/addCalender';
        if(eventid!="")
        {
                    $.ajax({
                            type: "POST",
                            dataType: "json",                       
                            url: appURL + '/proxy',
                            data: {method:"updateCalenderEvent",event:event},
                            success: function (data) {                           
                                viewAlert(data.result,'','');
                                }
                        });
        }
        else
        {
                        $.ajax({
                            type: "POST",
                            dataType: "json",                       
                            url: appURL + '/proxy',
                            data: {method:"saveCalenderEvent",event:event},
                            success: function (data) {                           
                                viewAlert(data.result,'',hrefLoc);
                                }
                        });
        }

        var dataSource = $('#calendar').data('calendar').getDataSource();

        if(event.id) {
            for(var i in dataSource) {
                if(dataSource[i].id == event.id) {
                    dataSource[i].name = event.name;
                    dataSource[i].holidaytype = event.holidaytype;
                    dataSource[i].startDate = event.startDate;
                    dataSource[i].endDate = event.endDate;
                }
            }
        }
        else
        {
            var newId = 0;
            for(var i in dataSource) {
                if(dataSource[i].id > newId) {
                    newId = dataSource[i].id;
                }
            }
            
            newId++;
            event.id = newId;
        
            dataSource.push(event);
        }
        
        $('#calendar').data('calendar').setDataSource(dataSource);
        $('#event-modal').modal('hide'); 
    }
}*/
var tempArr = [];
/***Updated by shweta choudhry on 25-05-2018**/
function saveEvent() {
   
    var type= $('#event-modal select[id="ddl-holiday"]').val();
    console.log(type);
    var hname= $('#event-modal input[name="event-name"]').val();
      console.log(hname);
     if(!blankCheck('event-name','Holiday name can not be left blank'))
           return false;
     if(!checkSpecialChar('event-name'))
           return false;
     if(!maxLength('event-name',50, 'Holiday name'))
           return false;
     if(!blankCheck('event-start-date','From date can not be left blank'))
           return false;  
     if(!blankCheck('event-end-date','To date can not be left blank'))
           return false;
     if ($('#event-modal input[name="event-name"]').val()=="")
     {
        viewAlert('Holiday name can not be left blank');
     }
      else if (type==null)
     {
        viewAlert('Holiday type can not be left blank');
     }
    else
      {
          
        if ($('#event-modal select[name="ddl-holiday"]').val() == 1)
        {
            var clr = '#064469';
        } else {
            var clr = '#D2AC2B';
        }
        var event = {
            id: $('#event-modal input[name="event-index"]').val(),
            name: $('#event-modal input[name="event-name"]').val(),
            holidaytype:$('#event-modal select[name="ddl-holiday"]').val(),
            startDate: $('#event-modal input[name="event-start-date"]').datepicker('getDate'),
            endDate: $('#event-modal input[name="event-end-date"]').datepicker('getDate')
        }  
        
        var selectedHoliday = {
            id: $('#event-modal input[name="event-index"]').val(),
            name: $('#event-modal input[name="event-name"]').val(),
            holidaytype: $('#event-modal select[name="ddl-holiday"]').val(),
            startDate: $('#event-modal input[name="event-start-date"]').val(),
            endDate: $('#event-modal input[name="event-end-date"]').val(),
            color: clr,
        }
console.log(selectedHoliday);
        var eventid=$('#event-modal input[name="event-index"]').val();  
        var hrefLoc=appURL+'/addCalender';
        
         if(eventid!="")
        {
            for (var i = 0; i < tempArr.length; i++) {
                if (tempArr[i].id === eventid) {
                    tempArr[i]['name'] = selectedHoliday.name;
                    tempArr[i]['holidaytype'] = selectedHoliday.holidaytype;
                    tempArr[i]['startDate'] = selectedHoliday.startDate;
                    tempArr[i]['endDate'] = selectedHoliday.endDate;
                    tempArr[i]['color'] = selectedHoliday.color;
                    break;
                }
            }
        }
        else
        {
            
            tempArr.push(selectedHoliday);
        }
        console.log(tempArr);
        $("#hdnAddData").val(JSON.stringify(tempArr));
        //console.log(JSON.stringify(tempArr));
            
        /*if (eventid != "")
         {
         $.ajax({
         type: "POST",
         dataType: "json",
         url: appURL + '/proxy',
         data: {method: "updateCalenderEvent", event: event},
         success: function (data) {
         //viewAlert(data.result, '', hrefLoc);
         }
         });
         }
         else
         {
         $.ajax({
         type: "POST",
         dataType: "json",
         url: appURL + '/proxy',
         data: {method: "saveCalenderEvent", event: event},
         success: function (data) {
         //viewAlert(data.result, '', hrefLoc);
         }
         });
         }*/

        
        //alert(event.id);
        var calData = $('#calendar').data('calendar').getDataSource();
        calData = calData.length;
        if(calData != '0'){
            var dataSource = $('#calendar').data('calendar').getDataSource();
        }else{
            var dataSource = [];
        }

        if(event.id) {
            for(var i in dataSource) {
                if (event.holidaytype == 1)
                    {
                        var clr = '#064469';
                    } else {
                        var clr = '#D2AC2B';
                    }
                if(dataSource[i].id == event.id) {
                    dataSource[i].name = event.name;
                    dataSource[i].holidaytype = event.holidaytype;
                    dataSource[i].startDate = event.startDate;
                    dataSource[i].endDate = event.endDate;
                }
            }
        }
        else
        {
            var newId = 0;
            for(var i in dataSource) {
                if(dataSource[i].id > newId) {
                    newId = dataSource[i].id;
                }
            }
            
            newId++;
            event.id = newId;
        
            dataSource.push(event);
        }
        
        $('#calendar').data('calendar').setDataSource(dataSource);
        $('#event-modal').modal('hide'); 
   
        
    }
       
 }
   
   
    /* --------------------------------------
     Function to send Reminder
     Created by     : Arpita Rath
     Created On     : 25-01-2018
* --------------------------------------- */ 
 function sendReminderMailNotification(emailId,dataNo)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"sendReminderMail", emailId :emailId,dataNo:dataNo},
        success  : function(data) 
        { console.log(data); 
            var res   = data.getRemEmail;   
            var flag  = data.errFlag;   
            if(flag==0)
            {
				//console.log(siteUrl+'Application/smart-card-home');
				 //viewAlert('Reminder has been sent successfully','','smart-card-home');
viewAlert('Reminder has been sent successfully','',siteUrl+'/Application/smart-card-home');
                $('#pageDetailsEn').hide();
				//window.location=appURL+"/smart-card-home";
            }      
        }
     });
 } 
/**********************RTI*****************************/
/* --------------------------------------
     Function to get RTI Application Details
     Created by     : Arpita Rath
     Created On     : 13-06-2018
* -------------------------------------- */ 
     function getRTINewAppDetails(rtiId,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getRTINewAppDetails", rtiId :rtiId},
            success  : function(data) 
            {
                var res = data.getRTINewApp;
                $("#"+ctrlId).html(res);
                var encRtiId = data.encRtiId;

                var bplDocIndex    = data.bplDocIndex;
                var rtiReqDocIndex = data.rtiReqDocIndex;

                $('.digiLocDocBPL').on('click',function() {
                     digiLocDownloadAPI(bplDocIndex,'BPL_DOC','pdf');
                });     

                $('.digiLocDocReqRTI').on('click',function() {
                     digiLocDownloadAPI(rtiReqDocIndex,'RTI_REQ','pdf');
                });           

                $('.linkMoneyReceipt').on('click',function() {
                     $('#dispMoneyReceipt').attr('data', siteUrl +'/rti-money-receipt/' + encRtiId);
                     $("#modalMoneyReceipt").modal();
                });
            }
         });
     }   

/* --------------------------------------
     Function to get Payment Configuration Details
     Created by     : Arpita Rath
     Created On     : 13-06-2018
* -------------------------------------- */ 
 function getPayConfiguration(ctrlId,selVal)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getPayConfiguration", selVal: selVal},
        success  : function(data) 
        {
            var res = data.getPayment; 
            $("#"+ctrlId).html(res);
        }
    });

 }   

/* --------------------------------------
     Function to fill pay details
     Created by     : Arpita Rath
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function viewPayConfig(processId)
    {
       
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'viewPayConfig',processId:processId},
                success: function (data) {
                     var res  =  data.payDetails;                     

                     if(res!='')
                     { 
                         var payModeTypes = res.vchPaymentMode;
                         var allAuthTypes = payModeTypes.split(',');

                         $(allAuthTypes).each(function(j){
                            var indAuthType =  allAuthTypes[j];
                            if(!$('#payMode'+indAuthType).is(':checked'))
                            {
                                $('#payMode'+indAuthType).click();                        
                                $('#payMode'+indAuthType).attr('checked',true);
                            }
                        }); 

                          $('.btnReset').on('click',function() {
                              window.location.href = appURL +'/viewPayConfig';
                         });

                         $('.btnReset').val('Cancel');
                        $('#txtCharges').val(res.decPayAmt);
                         $('#txtEffDt').val(res.dteEffectiveDate);
                        $('#txtGST').val(res.decGSTPercent); 
                        
                         
                         $('#btnSubmit').val('Update');
                         $('#selPayProcess').val(res.intProcessId);                        

                     } else {
                         $('#txtCharges').val('');
                         $('#txtEffDt').val('');
                         $('#btnSubmit').val('Submit');
                         $('.btnReset').val('Reset');
                         $('#selPayProcess').val(0); 
                         $('input[class=clsPaymodecheck]').attr('checked', false);

                         $('.btnReset').on('click',function() {
                              window.location.href = 'javascript:void(0);';
                         });
                     }        
           } 
       });
    } 

/* --------------------------------------
     Function to get Details of Rejection Clause
     Created by     : Arpita Rath
     Created On     : 25-06-2018
* -------------------------------------- */ 
 function getRejectionClause(ctrlId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getRejectionClause"},
        success  : function(data) 
        {
            var res = data.getReject; 
            $("#"+ctrlId).html(res);
        }
    });
 } 


/* --------------------------------------
     Function to get Name of Authority
     Created by     : Arpita Rath
     Created On     : 25-06-2018
* -------------------------------------- */ 
 function getDeptAuthName(ctrlId,deptId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getDeptAuthName",deptId: deptId},
        success  : function(data) 
        {
            var res = data.getAuthName; 
            $("#"+ctrlId).html(res);
        }
    });
 } 

 /*
 Function to fill set authority
 By: Sunil Kumar Parida
 On: 21-OCT-2016
 */
function fillSetAuthority(momProcessId)
{  
    var hierarchyId = $('#selDept').val(); 
    var processId   = $('#selProcess').val(); 
    var projectId   = $('#selPIO').val(); 
    
    
        $('.appendTr').not(':first').remove();
        $('.remove').hide();
        $('.appendTr').find('.timeLine').val('');
        $('.appendTr').find('.selRole').val(0);
        $('.appendTr').find('.selPrimaryAuth option').not(':first').remove();
        $('.appendTr').find('input[type=checkbox]').attr('Checked',false);
        $('.appendTr').find('input[type=hidden]').val('');
        //$('.appendTr').find('.signAuth').val(0);
        //$('.appendTr').find('.radSignNo').click();
    
    // if((Number(hierarchyId)>0 && Number(processId)> 0 && Number(projectId)>0) || (Number(hierarchyId)>0 && Number(processId) == momProcessId) )
    if(Number(processId)> 0)
    {       
    /*}
    if(Number(hierarchyId)==0 || Number(processId)==0 || Number(projectId)==0 )
    {}
    else
    {*/
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'viewSetAuthority',hierarchyId:hierarchyId, processId:processId, projectId:projectId, subParamC1:0, subParamC2:0},
            success: function (data) { //console.log(data);
                var allAuth = data.authorities;
                var authCtr = allAuth.length;
                var time = 0;
                if(authCtr>0)
                {
                $(allAuth).each(function(i){
                    setTimeout(function(){
                    var rowNo       = Number(i)+1;
                    var stageNo     = allAuth[i]['stageNo'];
                    var roleId      = allAuth[i]['roleId'];
                    var primaryAuth = allAuth[i]['primaryAuth'];
                    var timeLine    = allAuth[i]['timeLine'];
                    var isSign      = allAuth[i]['isSign'];
                    var signAuth    = allAuth[i]['signAuth'];
                    var authTypes   = allAuth[i]['authTypes']; 
                    var deprtName   = allAuth[i]['deptId']; 
                    var indusAreaNm = allAuth[i]['indusArea'];
                    var proTypes    = allAuth[i]['proTypes'];
                    var intAuthId   = allAuth[i]['intAuthId'];
                    if(i>0 && i<authCtr)
                    {
                        //$('.addMore:last').click();
                        addRow($('.addMore:last'),2);
                    }
                 //   fillDepartmnet('selDept',deprtName); 
                  //  fillAllDesignation(1,0,roleId,'selRole'+rowNo,'selRole'+rowNo);
                    //fillRoleWiseUser(roleId, 'selPrimaryAuth'+rowNo, primaryAuth, 0);

                    getUserList(0,0,intAuthId,'selPrimaryAuth'+rowNo,'selPrimaryAuth'+rowNo);
                    $('#selRole'+rowNo).val(roleId);
                    $('#timeLine'+rowNo).val(timeLine);                 
                    $('input:radio[name=radio'+rowNo+'][value='+isSign+']').attr('checked',true);
                    $('#selSignAuth'+rowNo).val(signAuth);
                    var allAuthTypes = authTypes.split(',');
                    $(allAuthTypes).each(function(j){
                        var indAuthType =  allAuthTypes[j];
                        if(!$('#chkAuthType'+indAuthType+'_'+rowNo).is(':checked'))
                        {
                            $('#chkAuthType'+indAuthType+'_'+rowNo).click();                        
                            $('#chkAuthType'+indAuthType+'_'+rowNo).attr('checked',true);
                        }
                    });
                    },time);
                    time+=500;
                });
                $('#btnSubmit').val('Update');
                }
                else
                {   
                    $('#btnSubmit').val('Submit');  
                }
            }
        });
    }
}


/*
 Function to fill set authority
 By: Sunil Kumar Parida
 On: 21-OCT-2016
 */
function fillSetAuthorityMD()
{  
    var hierarchyId = $('#selDept').val(); 
    var processId   = $('#selProcess').val(); 
    var projectId   = $('#selPIO').val(); 
    
    
        $('.appendTr').not(':first').remove();
        $('.remove').hide();
        $('.appendTr').find('.timeLine').val('');
        $('.appendTr').find('.selRole').val(0);
        $('.appendTr').find('.selPrimaryAuth option').not(':first').remove();
        $('.appendTr').find('input[type=checkbox]').attr('Checked',false);
        $('.appendTr').find('input[type=hidden]').val('');
        //$('.appendTr').find('.signAuth').val(0);
        //$('.appendTr').find('.radSignNo').click();
    
    // if((Number(hierarchyId)>0 && Number(processId)> 0 && Number(projectId)>0) || (Number(hierarchyId)>0 && Number(processId) == momProcessId) )
   // if(Number(processId)> 0)
    //{       
    /*}
    if(Number(hierarchyId)==0 || Number(processId)==0 || Number(projectId)==0 )
    {}
    else
    {*/
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'viewSetAuthorityMD',hierarchyId:hierarchyId, processId:processId, projectId:projectId, subParamC1:0, subParamC2:0},
            success: function (data) { //console.log(data);
                var allAuth = data.authorities;
                var authCtr = allAuth.length;
                var time = 0;
                if(authCtr>0)
                {
                $(allAuth).each(function(i){
                    setTimeout(function(){
                    var rowNo       = Number(i)+1;
                    var stageNo     = allAuth[i]['stageNo'];
                    var roleId      = allAuth[i]['roleId'];
                    var primaryAuth = allAuth[i]['primaryAuth'];
                    var timeLine    = allAuth[i]['timeLine'];
                    var isSign      = allAuth[i]['isSign'];
                    var signAuth    = allAuth[i]['signAuth'];
                    var authTypes   = allAuth[i]['authTypes']; 
                    var deprtName   = allAuth[i]['deptId']; 
                    var indusAreaNm = allAuth[i]['indusArea'];
                    var proTypes    = allAuth[i]['proTypes'];
                    var intAuthId   = allAuth[i]['intAuthId'];
                   
                    if(i>0 && i<authCtr)
                    {
                        //$('.addMore:last').click();
                        addRow($('.addMore:last'),2);
                    }
                 //   fillDepartmnet('selDept',deprtName); 
                  //  fillAllDesignation(1,0,roleId,'selRole'+rowNo,'selRole'+rowNo);
                    //fillRoleWiseUser(roleId, 'selPrimaryAuth'+rowNo, primaryAuth, 0);

                    getUserList(0,0,intAuthId,'selPrimaryAuth'+rowNo,'selPrimaryAuth'+rowNo);
                    $('#selRole'+rowNo).val(roleId);
                    $('#timeLine'+rowNo).val(timeLine);                 
                    $('input:radio[name=radio'+rowNo+'][value='+isSign+']').attr('checked',true);
                    $('#selSignAuth'+rowNo).val(signAuth);
                    var allAuthTypes = authTypes.split(',');
                    $(allAuthTypes).each(function(j){
                        var indAuthType =  allAuthTypes[j];
                        if(!$('#chkAuthType'+indAuthType+'_'+rowNo).is(':checked'))
                        {
                            $('#chkAuthType'+indAuthType+'_'+rowNo).click();                        
                            $('#chkAuthType'+indAuthType+'_'+rowNo).attr('checked',true);
                        }
                    });
                    },time);
                    time+=500;
                });
                $('#btnSubmit').val('Update');
                }
                else
                {   
                    $('#btnSubmit').val('Submit');  
                }
            }
        });
   // }
}


/* --------------------------------------
     Function to get All District 
     Created by     : Arpita Rath
     Created On     : 05-07-2018
* -------------------------------------- */ 
 function getAllDist(ctrlId,stateId,distId)
 {   
    
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getAllDist", stateId: stateId, distId: distId},
        success  : function(data) 
        {
           var res = data.getDist; 
           $("#"+ctrlId).html(res);
        }
    });
 }

//-- -Get Rejection Letter for RTI By:: Arpita Rath On:: 28-07-2018 Comented: 22-11-2018
/* 
     function getDivLetterAction(rtiId,rejectClause,remarks,rejClauses,rejClauseVal,subRejClauseVal,rtiAuthId)
     {    
         $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getDivLetterAction',rtiId:rtiId,rejectClause:rejectClause,remarks:remarks,rejClauses:rejClauses,rejClauseVal:rejClauseVal,subRejClauseVal:subRejClauseVal,rtiAuthId:rtiAuthId},
            success: function (data) {
                 
                 var res = data.getRejectLetter;   
                
                //  window.open(appURL + '/generate-rti-pdf-final/' + res, '_blank');
                
                 window.location.href =  appURL + '/generate-rti-pdf/' + res;
            }
        });    
     } */
	 
	 function getDivLetterAction(rtiId,rejectClause,remarks,rejClauses)
     {    
         $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'getDivLetterAction',rtiId:rtiId,rejectClause:rejectClause,remarks:remarks,rejClauses:rejClauses},
            success: function (data) {
                 
                 var res = data.getRejectLetter;   

                
                  window.open(appURL + '/generate-rti-pdf/' + res, '_blank');
               

            }
        });    
     }

//--- Send otp for auto sign
   function sendOtpDigiSign(mobileNo,requestUrl)
   {  
      confirmAlert('Do you want to generate the rejection letter ?');
      $('#btnConfirmOk').on('click',function()
      {  
          $('#btnSign').hide(); 
          $('#btnCancel').hide(); 
          $(this).closest('#confirmModal').find(".modal-body").html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
          $.ajax({
                type      : "POST",
                dataType  : "json",
                url       : appURL+'/proxy',
                data      : {method:"sendOtpDigiSign", mobileNo: mobileNo},
                success   : function(data)
                {
                   $('#rejectDiv').hide();
                   $('.rejectDiv').hide();
                   $('#Loader').hide();  
                   $('#confirmModal').modal('hide');
                   $('#displayOtp').show();
                   $('#otpDiv').html('An OTP has been send to your mobile no. '+data.otpMobileNum+'. Please enter OTP to verify.');
                   $('#otpNum').html(data.otp);
                } 
          });
      });    
   }  
   
 //---- Verify OTP for digi sign By:: Arpita Rath On:: 08-08-2018  
   function verifyOtpDigiSign(mobileNo,otp,rtiId,redUrl,docName)
   {    
         confirmAlertAjax('Do you want to submit ?');
         $('#btnConfirmOkAjax').on('click',function()   
         {  
              $(this).closest('#confirmAlertAjax').find(".modal-body").html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
              $.ajax({
                    type      : "POST",
                    dataType  : "json",
                    url       : appURL+'/proxy',
                    data      : {method:"verifyOtpDigiSign", mobileNo: mobileNo, otp: otp, rtiId: rtiId, redUrl: redUrl, docName: docName},
                    success   : function(data)
                    {
                       var otpFlag = data.otpFlag;  

                       if(otpFlag==0)
                       {
                          $('#displayOtp').hide();
                          $('#btnSign').hide();
                          $('#Loader').hide();
                          $('#confirmAlertAjax').modal('hide');
                         viewAlert('Application Rejected successfully','',appURL + '/generate-rti-pdf-final/' + data.changeURL);
                         return false;
                       } else {
                          $('#otpDiv').html('Invalid OTP');
                       }
                    } 
              });
         });           
   }       

 
  
 /**********************END RTI*****************************/    
 /****************************LEGAL***************************/
 
 
/*********Fill court type by :shweta choudhury On 11-06-2018***/

function fillCourtType(controlId,selVal,courtIds)
{
   $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillCourtType',selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.courtType);    
        }
    });
}


/*********Fill court name by :shweta choudhury On 11-06-2018***/

function fillCourtName(controlId,selVal,courtIds){
     $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillCourtName',selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.courtName);    
        }
    });
}

/* --------------------------------------
     Function to get Details of State 
     Created by     : Shweta Choudhury
     Created On     : 23-01-2018
* -------------------------------------- */ 
 function getStateName(ctrlId,countryId,selval)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : appURL+'/proxy',
        data     : {method:"getStateName", countryId: countryId,selval:selval},
        success  : function(data) 
        {
            var res = data.getState; 
            $("#"+ctrlId).html(res);
        }
    });
 } 


 
 
/*********Fill Case name by :shweta choudhury On 11-06-2018***/

function fillCaseName(controlId,selVal,caseIds){
     $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillCaseName',selVal:selVal},
        success: function (data) {
            $('#'+controlId).html(data.caseType);    
        }
    });

}


 
/*********Fill Case Details by :shweta choudhury On 11-06-2018***/

function getCaseDetails(caseId,caseType){
    $('#caseDetailsModal').html('<div class="text-center"><i class="fa fa-spinner fa-2x"></i></div>');
     $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'getCaseDetails',caseId:caseId,caseType:caseType},
        success: function (data) {
            
             $('#caseDetailsModal').html(data.caseDetails);
             $('#logList').html(data.logDetails);
             $('#landDetailsModal').html(data.landData)
        }
    });

}


//********Fill Opposite Party Details:Shweta Choudhury on 13-06-2018***/
function petitionerName(ids,sectorId,plotId,uniqueId,userName){
     $('#errorMessages').html('');
     //console.log(ids);
     if(ids==1){  
     $('#aitlAppName').html('<div class="text-center"><i class="fa fa-spinner fa-2x"></i></div>');
        }
     if(ids==2){  
                        $('#oppAppName').html('<div class="text-center"><i class="fa fa-spinner fa-2x"></i></div>');
      }
     $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'getpetitionerName',sectorId:sectorId,plotId:plotId,uniqueId:uniqueId,userName:userName},
        success: function (data) {
            var result=data.getState;
           
            if(result!='' && result!=null){
               
               var applicantName=result.vchApplicantName;
               var entityName=result.entityName;
               var data='<label class="entityName entityLabel"><b>Owner Name&nbsp;:</b></label>&nbsp;&nbsp;<span class="applicantNamespan">'+applicantName+'</span> <label class="entityLabel" style="margin-left: 20px;"><b>Entity Name&nbsp;:</b></label>&nbsp;&nbsp;<span id="petitioneEntity" class="applicantNamespan">'+entityName+'</span>';
               if(ids==1){  
                        $('#aitlAppName').html(data);
               }
               
               if(ids==2){  
                        $('#oppAppName').html(data);
               }
              
            }else{
                var data1='<label></label>'
                if(ids==1){  
                        $('#aitlAppName').html(data1);
               }
               
               if(ids==2){  
                        $('#oppAppName').html(data1);
               }
                
            }
        }
    });

}

//********Fill Opposite Party Details:Shweta Choudhury on 13-06-2018***/
function getOppositeParty(ids,sectorId,plotId,uniqueId,userName){
     $('#errorMessages').html('');
     $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'getOppositeParty',sectorId:sectorId,plotId:plotId,uniqueId:uniqueId,userName:userName},
        success: function (data) {
            
            var result=data.getState;
            $('#ddlOppositeParty').html(result);
            $('.showfilterbox').hide();
                 // $('#ddluser1').html(res);
            $('#ddlOppositeParty').trigger("chosen:updated");
           
        }
    });

}
  /* --------------------------------------
     Function to get user list for advocate
     Created by     : shweta choudhury
     Created On     : 14-06-2018
* -------------------------------------- */ 
    function getCaseUserList(dId,cnt,selval,fillnameId,fillControlId)
    {
    // alert(dId+"--"+selval);   
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getCaseUserList',dId:dId,selVal:selval},
                success: function (data) {
                   
                    var res = data.Desg;
                     //console.log(res);
                    // console.log(fillControlId);
                   //$('#ddlUser1').html(res);
                 $('#'+fillControlId).html(res);
                 // $('#ddluser1').html(res);
                 $('#'+fillControlId).trigger("chosen:updated");
                 $("#ddlTagUsers").empty();
            }
        });
    }
    
    
    /* --------------------------------------
     Function to fill case details in modal
     Created by     : shweta choudhury
     Created On     : 14-06-2018
* -------------------------------------- */ 
    function fillCaseDetails(caseId,caseType,courtmasterId,courtType,caseNo,allocatedStatus)
    {
       
 
    
     if(allocatedStatus==1){
          $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getAssignAdvocateDetails',caseId:caseId,selVal:0},
                success: function (data) {
                    var res=data.advocateDetails;
                    
                    console.log(res);
                    var advId     = res.INT_ADVOCATE_ID
                    var officerId=res.INT_OFFICER_ID;
                    var desgId=res.INT_DESIGNATION_ID;
                    var advlId=res.INT_ADVOCATENAME_ID;
                    var sectionId=res.INT_SECTION_ID;
                    var fess=res.DEC_FEES;
                    var typeIds=res.INT_TYPE;
                    var lawId=res.INT_LAWFIRM_ID;
                     
                    console.log(typeIds);
                   getCaseUserList(0,0,officerId,'selAitlOffNm','selAitlOffNm');
                   fillAllDesignation(1,0,desgId,'selOffDesgn','selOffDesgn');
                   fillLawFirm('selLawFirm',0,lawId);
                   fillAdvocateName('selAdvocateNames',0,advlId);
                  console.log(typeIds);
                   if(typeIds==2){
                      var typeNew=2;
                         $('select[name="selType"]').find('option[value="' + typeNew + '"]').attr("selected", true);
                      
                       $('#lawFirmDiv').show();
                       $('#advocateDiv').hide();
                            
                   }else{
                        var typeNew=1;
                         $('select[name="selType"]').find('option[value="' + typeNew + '"]').attr("selected", true);
                  
                     $('#advocateDiv').show();
                      $('#lawFirmDiv').hide();
                   }
                   
                   
                   $('#txtFees').val(fess);
                   $('#hdnAdvId').val(advId);
                   $('#hdncaseId').val(caseId);
                   $('#hdncaseType').val(caseType);
                   $('#hdncourtMasterId').val(courtmasterId);
                   $('#hdncourtType').val(courtType);
                   $('#hdncaseNo').val(caseNo);
                   
                  
                   $('#hdnOfficerAdvId').val(advId);
                   $('#hdncaseOfficerId').val(caseId);
                   $('#hdncaseOfficerType').val(caseType);
                   $('#hdncourtOfficerMasterId').val(courtmasterId);
                   $('#hdncourtOfficerType').val(courtType);
                
                }
           });
         
     }else{
         //alert("working");
            getCaseUserList(0,0,0,'selAitlOffNm','selAitlOffNm');
            fillAllDesignation(1,0,0,'selOffDesgn','selOffDesgn');
            fillAdvocateName('selAdvocateNames',0,0)
             fillLawFirm('selLawFirm',0,0);
            $('#hdncaseId').val(caseId);
            $('#hdncaseType').val(caseType);
            $('#hdncourtMasterId').val(courtmasterId);
            $('#hdncourtType').val(courtType);
            $('#hdnAdvId').val(0);
            $('#txtFees').val('');
            $('#hdncaseNo').val(caseNo);
            
            $('#hdncaseOfficerId').val(caseId);
            $('#hdncaseOfficerType').val(caseType);
            $('#hdncourtOfficerMasterId').val(courtmasterId);
            $('#hdncourtOfficerMasterId').val(courtType);
            $('#hdnOfficerAdvId').val(0);
            $('#txtFees').val('');
     }
     
     //if(allocatedStatus)
    }
    
    /***fillLawFirm
   /* --------------------------------------
     Function to fill law firm
     Created by     : shweta choudhury
     Created On     : 14-06-2018
* -------------------------------------- */ 
    function fillLawFirm(controlId,lawId,selVal)
    {
     
          $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillLawFirm',lawId:lawId,selVal:selVal},
                success: function (data) {
                    var res=data.lawName;
                       $('#'+controlId).html(res);
                   
           }
       });
       //if(allocatedStatus)
    }
  
   /* --------------------------------------
     Function to fill advocate name
     Created by     : shweta choudhury
     Created On     : 14-06-2018
* -------------------------------------- */ 
    function fillAdvocateName(controlId,advId,selVal)
    {
     
          $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillAdvocateName',advId:advId,selVal:selVal},
                success: function (data) {
                    var res=data.advName;
                       $('#'+controlId).html(res);
                   
           }
       });
      //if(allocatedStatus)
    }
 

/*
 Function to fill set authority
 By: Sunil Kumar Parida
 On: 21-OCT-2016
 */
function fillSetAuthority(momProcessId)
{  
    var hierarchyId = $('#selDept').val(); 
    var processId   = $('#selProcess').val(); 
    var projectId   = $('#selPIO').val(); 
    
    
        $('.appendTr').not(':first').remove();
        $('.remove').hide();
        $('.appendTr').find('.timeLine').val('');
        $('.appendTr').find('.selRole').val(0);
        $('.appendTr').find('.selPrimaryAuth option').not(':first').remove();
        $('.appendTr').find('input[type=checkbox]').attr('Checked',false);
        $('.appendTr').find('input[type=hidden]').val('');
        //$('.appendTr').find('.signAuth').val(0);
        //$('.appendTr').find('.radSignNo').click();
    
    // if((Number(hierarchyId)>0 && Number(processId)> 0 && Number(projectId)>0) || (Number(hierarchyId)>0 && Number(processId) == momProcessId) )
    if(Number(processId)> 0)
    {       
    /*}
    if(Number(hierarchyId)==0 || Number(processId)==0 || Number(projectId)==0 )
    {}
    else
    {*/
        $.ajax({
            type: "POST",
            url: appURL + '/proxy',
            dataType: "json",
            data: {method: 'viewSetAuthority',hierarchyId:hierarchyId, processId:processId, projectId:projectId, subParamC1:0, subParamC2:0},
            success: function (data) { //console.log(data);
                var allAuth = data.authorities;
                var authCtr = allAuth.length;
                var time = 0;
                if(authCtr>0)
                {
                $(allAuth).each(function(i){
                    setTimeout(function(){
                    var rowNo       = Number(i)+1;
                    var stageNo     = allAuth[i]['stageNo'];
                    var roleId      = allAuth[i]['roleId'];
                    var primaryAuth = allAuth[i]['primaryAuth'];
                    var timeLine    = allAuth[i]['timeLine'];
                    var isSign      = allAuth[i]['isSign'];
                    var signAuth    = allAuth[i]['signAuth'];
                    var authTypes   = allAuth[i]['authTypes']; 
                    var deprtName   = allAuth[i]['deptId']; 
                    var indusAreaNm = allAuth[i]['indusArea'];
                    var proTypes    = allAuth[i]['proTypes'];
                    var intAuthId   = allAuth[i]['intAuthId'];
                    if(i>0 && i<authCtr)
                    {
                        //$('.addMore:last').click();
                        addRow($('.addMore:last'),2);
                    }
                 //   fillDepartmnet('selDept',deprtName); 
                  //  fillAllDesignation(1,0,roleId,'selRole'+rowNo,'selRole'+rowNo);
                    //fillRoleWiseUser(roleId, 'selPrimaryAuth'+rowNo, primaryAuth, 0);

                    getUserList(0,0,intAuthId,'selPrimaryAuth'+rowNo,'selPrimaryAuth'+rowNo);
                    $('#selRole'+rowNo).val(roleId);
                    $('#timeLine'+rowNo).val(timeLine);                 
                    $('input:radio[name=radio'+rowNo+'][value='+isSign+']').attr('checked',true);
                    $('#selSignAuth'+rowNo).val(signAuth);
                    var allAuthTypes = authTypes.split(',');
                    $(allAuthTypes).each(function(j){
                        var indAuthType =  allAuthTypes[j];
                        if(!$('#chkAuthType'+indAuthType+'_'+rowNo).is(':checked'))
                        {
                            $('#chkAuthType'+indAuthType+'_'+rowNo).click();                        
                            $('#chkAuthType'+indAuthType+'_'+rowNo).attr('checked',true);
                        }
                    });
                    },time);
                    time+=500;
                });
                $('#btnSubmit').val('Update');
                }
                else
                {   
                    $('#btnSubmit').val('Submit');  
                }
            }
        });
    }
}
/* --------------------------------------
     Function to fill hearing details
     Created by     : shweta choudhury
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function fillHearingDetails(caseId)
    {
       
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillHearingDetails',caseId:caseId},
                success: function (data) {
                    var res=data.hiringDetails;
                       $('#listDetails').html(res);
                   
           }
       });
    }
  
   /* --------------------------------------
     Function to fill case id
     Created by     : shweta choudhury
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function autoFillHearingDeatils(caseId)
    {
       
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'autoFillHearingDeatils',caseId:caseId},
                success: function (data) {
                    var res=data.hiringDetails;
                       $('#caseNoList').html(res);
                       
                       

                   
           }
       });
       
       var caseNoVal = $('#txtCaseNo').val(); 
      if(caseNoVal!='')
      {
         $('.divAutoFill').show();
      } else {
         $('.divAutoFill').hide();
      }
    }
    /* --------------------------------------
     Function to fill unique id
     Created by     : shweta choudhury
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function autoFillUniqueDeatils(uniqueId)
    {
       
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'autoFillUniqueDeatils',uniqueId:uniqueId},
                success: function (data) {
                    var res=data.uniqueDetails;
                       $('#caseNoList').html(res);
                       
                       

                   
           }
       });
       
       var caseNoVal = $('#txtUniqueID').val(); 
      if(caseNoVal!='')
      {
         $('.divAutoFill').show();
      } else {
         $('.divAutoFill').hide();
      }
    }

   /* --------------------------------------
     Function to fill Section
     Created by     : shweta choudhury
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function fillSection(controlId,sectionid,selval)
    {
       
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillSection',selval:selval},
                success: function (data) {
                    var res=data.uniqueDetails;
                       $('#caseNoList').html(res);
                       
                       

                   
           }
       });
   }
   /* --------------------------------------
     Function to fill Opposite User
     Created by     : shweta choudhury
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function getOppositeUserList(dId,cnt,selval,fillnameId,fillControlId)
    {  
        var data='';
        alert(dId);
        var desgText=dId.split("-");
        var desgName=desgText[1];
         data+='<option value="0">--Select--</option>';
       if(dId!=''){
          data+='<option value="'+dId+'">'+desgName+'</option>';
       }
        $('#ddlOppositeParty').html(data);
        $('.showfilterbox').hide();
        $('#ddlOppositeParty').trigger("chosen:updated");
        $('#ddlTagUsers').empty();
        /*$.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getUserList',dId:dId,selVal:selval},
                success: function (data) {
                   
                 var res = data.Desg;
                     
                 $('#ddlOppositeParty').html(res);
                 $('.showfilterbox').hide();
                 $('#ddlOppositeParty').trigger("chosen:updated");
                 $('#ddlTagUsers').empty();
                 
            }
        });*/
    }
   /* --------------------------------------
     Function to fill unique id
     Created by     : shweta choudhury
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function autoFillOppUniqueDeatils(uniqueId)
    {
       
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'autoFillUniqueDeatils',uniqueId:uniqueId},
                success: function (data) {
                    var res=data.uniqueDetails;
                       $('#caseNoOppList').html(res);
                       
                       

                   
           }
       });
       
       var caseNoVal = $('#txtUniqueOppositeID').val(); 
      if(caseNoVal!='')
      {
         $('.divAutoOppFill').show();
      } else {
         $('.divAutoOppFill').hide();
      }
    }
    
      /* --------------------------------------
     Function to fill unique id
     Created by     : shweta choudhury
     Created On     : 18-06-2018
* -------------------------------------- */ 
    function autoFillOppName(name)
    {
       
         $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'autoFillOppName',name:name},
                success: function (data) {
                    var res=data.uniqueDetails;
                       $('#caseNoName').html(res);                   
           }
       });
       
       var caseNoVal = $('#txtApplicantName').val(); 
      if(caseNoVal!='')
      {
         $('.divAutoNameFill').show();
      } else {
         $('.divAutoNameFill').hide();
      }
    }
    
     /* --------------------------------------
     Function to fillpwcAuthorize
     Created by     : shweta choudhury
     Created On     : 20-06-2018
* -------------------------------------- */ 
    function fillpwcAuthorize(caseId,courtType,courtId)
    {
        $('#caseDetails').html('<center><img src="'+appURL+'/img/loading.gif"><p>Loading...</p></center>');
        $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'fillpwcAuthorize',caseId:caseId,selVal:0},
                success: function (data) {
                    var allData=data.allDetails;
                    var res=data.oppositPartDetaiils;
                    var result=data.caseDetaiils;
                   
                    $('#hdnCaseId').val(allData.INT_CASE_ID);
                    $('#caseDetails').html(result);
                    $('#OppositepartyDetails').html(res);
                    $('#hdnCaseType').val(allData.INT_CASE_TYPE);
                    $('#hdnCaseNo').val(allData.VCH_CASE_NUMBER);
                    $('#hdnYear').val(allData.VCH_YEAR);
                    $('#hdnCaseReceivedDt').val(allData.DTM_CREATED_ON);
                    $('#txtPWCDate').val(allData.DTM_FIILINGPWC_DATE);
                    $('#txtaffidabitDate').val(allData.DTM_AFFIDAVIT_DATE);
                   var radStatus=allData.INT_COUNTER_STATUS;
                   //alert(radStatus);
                   if(radStatus==1){
                       $(".counterDiv").show();
                       $('#rbtCaseStatus1').prop('checked', true);
                   }else if(radStatus==2){
                      $(".counterDiv").hide();
                      $('#rbtCaseStatus2').prop('checked', true);
                   }
                  
                
                }
        });

    }
    

/*********Fill Authority Details by :shweta choudhury On 11-06-2018***/

function getPWCDetails(caseId,caseType,typeId,authAssignId){

    $('#hdnCaseId').val(caseId);
     $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'getPWCDetails',caseId:caseId,caseType:caseType,typeId:typeId,authAssignId:authAssignId},
        success: function (data) {
          
            var desgid=data.intAuthDesgId;
            var authid =data.intAuthId;
             fillAllDesignation(1,0,desgid,'ddlDesg','ddlDesg');
             getUserList(desgid,0,authid,'selOfficerNm','selOfficerNm')
             //$('#selOfficerNm').html(data.oppositPartDetaiils);
             //$('#hdnCaseId').val(caseId);
        }
    });

}

 function uploadToTempFolder(thisObj,name,upfileName,fileSize,fileType) {
   
       
       
      var trs =thisObj.closest('.additionalAffidavitDiv');  
      var ids = trs.find(".fileDoc").attr('id'); 
      
      var hdnids = trs.find(".hdnuploadFile").attr('id');
      var docid = trs.find(".additionalDoc").attr('id'); 
      var uploadFileName = $("#" + ids).val();
      uploadFileName = uploadFileName.split('\\');
      uploadFileName = uploadFileName[Number(uploadFileName.length) - 1];
    
    var disblests = 0;
  
      if (!IsCheckFile(ids, 'Not a valid file', 'pdf,doc,docx'))
      {
                return false;
      }
     
        /*$("#" + upfileName).val('');
        $("#" + hdnids).val('');
        return false;*/
  
    if (!chkFileSize(ids, fileSize, '', 'MB')) {
        $("#" + hdnids).val('');
        return false;
    }
    /*******Check whether the file is being uploaded or not********/
    if(uploadFileName!=''){
            $.ajaxFileUpload({
                url: appURL + '/proxy',
                secureuri: false,
                fileElementId: ids,
                dataType: 'json',
                data: {method: 'uploadToTempFolder', filename: name,  docId: docid,uploadfileName:upfileName},
                success: function (data) {
                    
                    console.log(data);
                     $("#" + hdnids).val(data.savedFileName);
                    
                    
              var elem='<a href="'+appURL+'/temp/'+data.savedFileName+'" class="documentEnglish" target="_blank"><img id="userImage" src="'+appURL+'/img/pdf.png" alt=""  border="0" align="absmiddle" class="imgDocE" style=""></a>';
              
                $('#'+docid).html(elem); 

                    /*******Check whether the file is being uploaded or not********/
                  

                    $.each($(".clsCheckdouploadsts"), function () {
                        var updatsts = $(this).val();
                        if (!typeof (updatsts) == 'undefined' || updatsts != '') {
                            if (updatsts > 0) {
                                disblests++;
                                $('input[type="submit"]').prop('disabled', true);
                            }
                        }
                    });
                    if (disblests == 0)
                        $('input[type="submit"]').prop('disabled', false);
              },
        //        error: function (data, status, e) {
        //            alert(e);
        //        }
            });
    }
    else{
        viewAlert('Please Upload Tender Document in '+lang);
    }
    return false;
}

     // Function to fill All Designation By: Shweta Choudhury :: by: 03-07-2018
    function fillAllDesignationCase(desgId,cnt,selval,fillnameId,fillControlId)
    {
        
       $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getAllDesgCase',desgId:desgId,selVal:selval},
                success: function (data) {
                  var res = data.Desgs;
                  //console.log(res);
                  //$("#ddlDesignation1").html(res);
                  $('#'+fillControlId).html(res);
                 // $('#ddlTagUsers').empty();
                  //$('#ddlTagUsers').html('');
            }
        });

    }
    

//function to get case no according to search By: Shweta Choudhury :: by: 03-07-2018

function getCaseNo(courtId,caseType,year,selVal)
{
    
    $.ajax({
                type: "POST",
                url: appURL + '/proxy',
                dataType: "json",
                data: {method: 'getCaseNo',courtId:courtId,caseType:caseType,year:year,selVal:selVal},
                success: function (data) {
                  var res = data.caseNo;
                  $('#ddlPrevCaseNo').html(res);
                 
            }
        });
    
}
 /* --------------------------------------
     Function to get Details of Act
     Created by     : Shweta choudhury
     Created On     : 03-07-2017
    * -------------------------------------- */ 
     function getActDetails(id,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getActDetails", id :id},
            success  : function(data) 
            {
                var res = data.actDesc;

                $("#"+ctrlId).html(res);
            }
         });
     }

 /* --------------------------------------
     Function to get Details of Act
     Created by     : Shweta choudhury
     Created On     : 03-07-2017
    * -------------------------------------- */ 
     function getHearingList(caseid,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getHearingList", id :caseid},
            success  : function(data) 
            {
                var res = data.actDesc;

                $("#"+ctrlId).html(res);
            }
         });
     }
     
   /* --------------------------------------
     Function to get Details of Act
     Created by     : Shweta choudhury
     Created On     : 03-07-2017
    * -------------------------------------- */ 
     function getDistrictName(distictId,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getHearingList", distictId :distictId},
            success  : function(data) 
            {
                var res = data.actDesc;

                $("#"+ctrlId).html(res);
            }
         });
     }
     
     
     /*-------*/
    function caseSearch(formDated,toDated,courtname,selYear,selCourtType)
    {
        //alert("working");
        $(".showfilterbox").hide();
        $("#deptwiseReport").html('Please wait...');
         $.ajax({
           type     : "POST",
           dataType : "json",
           url      : appURL + '/proxy',
           data     : {method:"caseReport",formDated:formDated,toDated:toDated,courtname:courtname,selYear:selYear,selCourtType:selCourtType},
           success  : function(data) 
           {
              
               var htmldata=data.caseHtml;
              
             var res=data.caseDetails;
              $("#casesummaryReport").html(htmldata);
               
                 $('#caseSummayChart').empty();
                 $('#caseSummayChart').html(' <canvas id="doughnutChartCase"   style="height: 213px; display: block; width: 426px;" width="426" height="213" ></canvas>'); 
               var numberWithCommas = function(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                };
                
       var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [res['totDisposed'],res['totPending'],res['totAppealed'],res['totContempt']],
                backgroundColor: [
                      'rgb(30, 173, 42)',
                      'rgb(214, 172, 49)',
                      'rgb(6, 68, 105)',
                      'rgb(255, 93, 54)'
           
                ],
        borderWidth:[0,0,0,0,0,0,0,0],
                label: 'Dataset 1'
            }],
            labels: [
                "Case Disposed",
                 "Pending",
                  "Appealed",
               "Contempt"
                
            ]
        },
        options: {
            responsive: false,
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: false
            },
            animation: {
                animateScale: false,
                duration:3000,
                easing: "easeOutBounce",
                animateRotate: false
            }
        }
    };
               var myDoughnut;
                
                var ctx4 = $("#doughnutChartCase");
                console.log(myDoughnut);
                if(myDoughnut){
                myDoughnut.destroy();
            }
                //var myDoughnut = new Chart(ctx4, configs);
                window.myDoughnut = new Chart(ctx4, config);
                myDoughnut.destroy();
                 
                
                    
           }
       });
        
    }
    
    function fillYear(ctrlId,year)
    {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"fillYear", year :year},
            success  : function(data) 
            {
                var res = data.yeardata;

                $("#"+ctrlId).html(res);
            }
         });
    }

 /* --------------------------------------
     Function to get Details of Case Query
     Created by     : Ashok Kumar Samal 
     Created On     : 06-07-2018
    * -------------------------------------- */ 
     function getCaseQueryDetails(id,ctrlId,langType)
     {
        $("#"+ctrlId).html('<center><img src="'+appURL+'/img/loading.gif"><p>Loading...</p></center>');
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getCaseQueryDetails", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getCaseQueryDetials;
                $('#myModalLabel').html('Case Details');                   
                $("#"+ctrlId).html(res);
            }
         });
     }
     

     /* --------------------------------------
     Function to get Details of Case Query
     Created by     : Ashok Kumar Samal 
     Created On     : 06-07-2018
    * -------------------------------------- */ 
     function getCaseQueryDocuments(id,ctrlId,langType)
     {
        $("#"+ctrlId).html('<center><img src="'+appURL+'/img/loading.gif"><p>Loading...</p></center>');
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getCaseQueryDocuments", id :id, langType :langType},
            success  : function(data) 
            {
                var res = data.getCaseQueryDocuments;
                $('#myModalLabel').html('Case Documents');                   
                $("#"+ctrlId).html(res);
            }
         });
     }
    /* --------------------------------------
     Function to get Details of Case Opinion 
     Created by     : Ashok Kumar Samal 
     Created On     : 06-07-2018
    * -------------------------------------- */ 
     
     function getCaseQueryOpinions(id,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"getCaseQueryOpinions", id :id},
            success  : function(data) 
            {
                var res = data.getCaseQueryOpinions;
                $('#myModalLabel').html('Opinion Details');
                 $("#"+ctrlId).html(res);
            }
         });
         
     }
 
 
     /* --------------------------------------
     Function to update case number
     Created by     : shweta choudhury
     Created On     : 11-07-2018
    * -------------------------------------- */ 
 function updateCaseDetails(caseid,casetype)
 {
  
    $('#hdnCaseIds').val(caseid);
    $('#hdnCaseType').val(casetype);
    
 }
  
 /*---------------*/
 
 function fetchCalenderDetalis(caseNo,createdBy){
     
    
      $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fetchCalenderDtalis',createdBy:createdBy,caseNo:caseNo},
        success: function (data) {
          // console.log(data);
            var eventdata = "";
      if (data.length != 0) {
        eventdata = "[";
        $.each(data, function (key, value) {

          eventdata += "{";

          eventdata += "'date':'" + value.sdate_year + "-" + value.sdate_month_real + "-" + value.sdate_date + "',";
          eventdata += "'note':['" + value.caseNo + "','" + value.advocateName + "','" + value.casestatus + "','" + value.hearingDate + "'],";
          eventdata += "'holidaytype':'" + value.holidaytype + "',";
          eventdata += "'enddate':'" + value.edate_year + "-" + value.edate_month_real + "-" + value.edate_date + "',";


          eventdata = eventdata.slice(0, -1);
          eventdata += "},";
        });
        eventdata = eventdata.slice(0, -1);
        eventdata += "]";
      }
      calenderRemianderview(eventdata);
        }    
    });

 }
 
 
  /* --------------------------------------
     Function to fill case status
     Created by     : shweta choudhury
     Created On     : 11-07-2018
    * -------------------------------------- */ 
 function fillCaseStatus(cntrl,selVal)
 {
  
      $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillCaseStatus',selVal:selVal},
        success: function (data) {
             var res = data.tbl;
           $("#"+cntrl).html(res);
        }
        });
    
 }
 
 /*---------------------*/
 function fillCaseNameDetail(cntrl,selVal){
      $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillCaseNameDetail',selVal:selVal},
        success: function (data) {
             var res = data.tbl;
           $("#"+cntrl).html(res);
        }
        });
 }


function fillCateEstablishment(controlId,selVal,catId){
    $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillCateEstablishment',selVal:selVal,catId:catId},
        success: function (data) {
            $('#'+controlId).html(data.CatEstaName);    
        }
    });
        }
        
         /*---------------------*/
 function fillLegalAdvocate(cntrl,selVal){
   
      $.ajax({
        type: "POST",
        url: appURL + '/proxy',
        dataType: "json",
        data: {method: 'fillLegalAdvocate',caseId:selVal},
        success: function (data) {
           var res = data.resdata;
           var details=res[0];
           
           var advId    =details['INT_PWCADV_ID'];
           var advName  =details['ADVOCATE_NAME'];
           if(advName!=""){
           $("#txtAdvName").val(advName);
           $("#txtAdvId").val(advId);
           $("#txtAdvName").prop('disabled', true);
            $('#advText').hide();
       }else{
           $("#txtAdvName").val(advName);
           $("#txtAdvId").val(advId)
           
           $("#txtAdvName").prop('disabled', false);
           $('#advText').html('<level class="text-danger">Advocate has not been assigned for this case</label>');
       }
        }
        });
 }

/*************/
 function viewCourtMaster(address1,address2,address3,state,district){
    
     if(address3!='')
     {
         var address23=' , '+address3;
     }else{
         var address23='';
     }
     if(address2!='')
     {
        var address22=' , '+address2;
     }else{
         var address22='';
     }
    
     var address=address1+address22;
    
     $('#address1').text(address);
     $('#stateName').text(state);
     $('#districtName').text(district);
     
     
 }
  /* --------------------------------------
     Function to get Details of State 
     Created by     : shweta choudhury
     Created On     : 04-08-2018
* -------------------------------------- */ 
 function getStateIdDetails(ctrlId,countryId,stateId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getStateIdDetails", countryId: countryId, stateId: stateId},
        success  : function(data) 
        {
            var res = data.getStateDetails; 
            $("#"+ctrlId).html(res);
        }
    });
 }
 
 
 function viewDigitalDocs(documentIndexId,documentname,ctrlId,strEmailId,strMobileNo){
        $('#Loader').show();
        $('#Loader').html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
        $('#digitalDocumentImg').hide();
        $('#digitalDocument').hide();
       // $('#digitalDocument').attr('data','');
     $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"viewDigitalDoc", documentIndexId :documentIndexId,documentname:documentname,strEmailId:strEmailId,strMobileNo:strMobileNo},
            success  : function(data) 
            {
                
                var applicationType = data.applicationType;
                var base64append    = 'data:application/'+applicationType+';base64,';
                var base64_string   = base64append+data.result;
                //for pdf only
                var base64stringPdf = data.result;
                
                console.log(base64_string);
                if(applicationType == 'pdf' || applicationType == 'doc' || applicationType == 'docx'){
                    var blob = b64toBlob(base64stringPdf, 'application/pdf');
                    var blobUrl = URL.createObjectURL(blob);

                    //window.location = blobUrl;
                    $('#digitalDocument').html('<object data="'+blobUrl+'" type="application/pdf"  width="100%" height="500px"></object>');
                    $('#digitalDocument').show();
                    $('#documentModallg').attr('class','modal-dialog modal-lg');
                }
                else if(applicationType == 'png' || applicationType == 'gif' || applicationType == 'jpg' || applicationType == 'jpeg'){
                    $('#digitalDocumentImg').show();
                    //$('#digitalDocumentImg').attr('src',base64_string);
                    $('#digitalDocumentImg').html('<img  id="digitalDocumentImg" src="'+base64_string+'">');
                    $('#documentModallg').attr('class','modal-dialog modal-lg');
                }
                $('#Loader').hide();
                
                
            }
         });
     
    // $('#divViewDoc').modal();
 }
 /*******************************END********************************/
     //END
    