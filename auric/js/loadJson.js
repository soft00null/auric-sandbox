 /*
 Function to fill service.
 By: Rahul Kumar Saw
 On: 22-Nov-2017
 */
 var RESOLVED_STATUS=5;
 var ONHOLD_STATUS=4;
 var DISCARD_STATUS=8;
 var CATEGORYOTHER=12;
 //console.log(appURL);
 //var appURL = 'https://www.auric.city/Application'; 
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
      Function to get GMS Sub Category
      By: Shweta Choudhury bhakat
      On: 18-12-2016
    */
   
    function fillGmsCategory(controllId,serviceId,selVal,typeId)
    {
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
    });
    }
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
  Function to check duplicate Email-id
  By: Arpita Rath
  On: 01-12-2017
*/
function checkDuplicatemail(emailId)
{
    $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'checkDuplicatemail', Email: emailId},
        success: function (data) {

            var res = data.dupStatus;  //console.log(res);
            $("#mailFlag").val(res);
            if (Number(res) > 0) {
                $(".errMail").show().html("Email ID Already in Use");
                $("[name='btnSubmit']").attr('disabled', 'disabled');
            } else {
                $(".errMail").hide();
                $("[name='btnSubmit']").removeAttr('disabled');
            }
        }
    });
}

    /*
      Function to fill Job Type
      By: Arpita Rath
      On: 12-4-2017
     */

   function fillJobType(controlId,selval) {
    //$('#' + controlId + ' option').not(":first").remove();
    $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillJobType'},
        success: function (data) {
              var res = data.jobType;
              var resultlen    = data.jobType.length;  
              var cirDiv       ='';
              var showData     = 0;
                if(resultlen > 0)  { 
                   $(res).each(function(i)
                    {
                      showData++; 
                      var strJobId               = res[i]['strJobId']; 
                      var strJobNm               = res[i]['strJobNm'];
                      if(selval==strJobId){
                          var chackedStatus      ='checked="ckecked"';
                      }else {
                          var chackedStatus      ='';
                      }                     
                      
                      
                      // cirDiv+= '<label><input type="checkbox" value="'+strlocId+'" class="checkboxCls'+rectype+'"  '+chackedStatus+'   onclick="fillJobList(); "><span class="cr"><i class="cr-icon fa fa-check"></i></span>'+strLocName+'</label>';

                       cirDiv+= '<label><input type="checkbox" value="'+strJobId+'" class="checkboxCls" '+chackedStatus+'  onclick="fillJobList(); "><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>'+strJobNm+'</label>';
                     
                       $("#"+controlId).html(cirDiv); 
                     });
                       
                }
            }     
    });
}

    /*
      Function to fill Job Type
      By: Arpita Rath
      On: 12-4-2017
     */

   function fillVaccancy(controlId,selval) {
    //$('#' + controlId + ' option').not(":first").remove();
    $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillVaccancy'},
        success: function (data) {
              var res = data.jobType;
              var resultlen    = data.jobType.length;  
              var cirDiv       ='';
              var showData     = 0;
                if(resultlen > 0)  { 
                   $(res).each(function(i)
                    {
                      showData++; 
                      var strJobId               = res[i]['strJobId']; 
                      var strJobNm               = res[i]['strJobNm'];
                      if(selval==strJobId){
                          var chackedStatus      ='checked="ckecked"';
                      }else {
                          var chackedStatus      ='';
                      }                     
                      
                      
                      // cirDiv+= '<label><input type="checkbox" value="'+strlocId+'" class="checkboxCls'+rectype+'"  '+chackedStatus+'   onclick="fillJobList(); "><span class="cr"><i class="cr-icon fa fa-check"></i></span>'+strLocName+'</label>';

                       cirDiv+= '<label><input type="checkbox" value="'+strJobId+'" class="checkboxCls" '+chackedStatus+'  onclick="fillJobList(); "><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>'+strJobNm+'</label>';
                     
                       $("#"+controlId).html(cirDiv); 
                     });
                       
                }
            }     
    });
}

    /*
      Function to fill Job
      By: Arpita Rath
      On: 12-04-2017
    */


function fillJobOpening(experince) 
{   
    $("#joblistDiv").html('<div  class="text-center"><img src="'+siteUrl +'/images/Loading.gif"></div>');
    
    $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillJobOpening',experince:experince},
        success: function (data) 
        {
              var res = data.joblist;
              $("#joblistDiv").html(res); 
                   
               $('.longDesc').click(function(){
                    var showDiv= $(this).data('val');
                    var hideDiv= $(this).data('id');
                    $('#longDesc'+hideDiv).hide();
                    $('#shortDesc'+hideDiv).show();            
               });

                $('.shortDesc').click(function(){
                    var showDiv= $(this).data('val');
                    var hideDiv= $(this).data('id');
                   // alert(hideDiv)
                    $('#'+showDiv).show();
                    $('#shortDesc'+hideDiv).hide();            
                });

                $('.paggingClass').click(function(){
                    
                   $('.pagination li').removeClass('active');
                   $(this).closest('li').addClass('active');
                     var divId =$(this).data('page');
                    $('.jobRowdiv').hide();
                    $('#'+divId).show();
                });        
        
        }     
    });
}

    /*
      Function to fill Job
      By: Arpita Rath
      On: 12-04-2017
    */


function fillVacOpening(locId,experince,skill,desgn) 
{   
    $("#joblistDiv").html('<div  class="text-center"><img src="'+siteUrl +'/images/Loading.gif"></div>');
    
    $.ajax({
        type: "POST",
        url: siteUrl + '/proxy',
        dataType: "json",
        data: {method: 'fillVacOpening',locId:locId,experince:experince,skill:skill,desgn:desgn},
        success: function (data) 
        {
              var res = data.joblist;
              $("#joblistDiv").html(res); 
                   
               $('.longDesc').click(function(){
                    var showDiv= $(this).data('val');
                    var hideDiv= $(this).data('id');
                    $('#longDesc'+hideDiv).hide();
                    $('#shortDesc'+hideDiv).show();            
               });

                $('.shortDesc').click(function(){
                    var showDiv= $(this).data('val');
                    var hideDiv= $(this).data('id');
                   // alert(hideDiv)
                    $('#'+showDiv).show();
                    $('#shortDesc'+hideDiv).hide();            
                });

                $('.paggingClass').click(function(){
                    
                   $('.pagination li').removeClass('active');
                   $(this).closest('li').addClass('active');
                     var divId =$(this).data('page');
                    $('.jobRowdiv').hide();
                    $('#'+divId).show();
                });        
        
        }     
    });
}

 /*=======================================
        Function to check duplicate page alias .
        By: Arpita Rath 
        On:03-11-2017
    =========================================*/    
           function checkAvailabilityRoom(strtDt,endDt,roomName,roomTypeName,hordType,ctrlId)
          {
              $.ajax({
                  type: "POST",
                  url: siteUrl + '/proxy',
                  dataType: "json",
                  data: {method: 'checkAvailabilityRoom', strtDt: $('#'+strtDt).val(),endDt :  $('#'+endDt).val(),roomName: $('#'+roomName).val(), roomTypeName: $('#'+roomTypeName).val(), hordType : $('#'+hordType).val()},
                  success: function (data) {

                      var res = data.dupStatus;  

                      var status = data.status;

                      $("#"+ctrlId).html(res);
                      $('#divBookingStatus').modal();

                      if(status>0) 
                      {
                          $("[name='btnSubmit']").attr('disabled', 'disabled');
                      } else {
                          $("[name='btnSubmit']").removeAttr('disabled');
                      }
                  }
              });
          }
 /* --------------------------------------
     Function to get Details of Job Type 
     Created by     : Arpita Rath
     Created On     : 20-12-2017
* -------------------------------------- */ 
 function getJobType1(ctrlId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getJobType1"},
        success  : function(data) 
        {
            var res = data.getJobType;            
            //$('#myModalLabel').html('CV Details');             

            $("."+ctrlId).html(res);
        }
     });
 } 

/* --------------------------------------
     Function to get Details of Job Type 
     Created by     : Arpita Rath
     Created On     : 20-12-2017
* -------------------------------------- */ 
 function getJobCat(typeId,ctrlId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getJobCat", typeId: typeId},
        success  : function(data) 
        {
            var res = data.getJobCat;            
            //$('#myModalLabel').html('CV Details');             

            $("."+ctrlId).html(res);
        }
     });
 }  

 /* --------------------------------------
     Function to get Details of Job Type 
     Created by     : Arpita Rath
     Created On     : 20-12-2017
* -------------------------------------- */ 
 function getBookType(ctrlId,protoTypeId,parentId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getBookType", protoTypeId: protoTypeId, parentId: parentId},
        success  : function(data) 
        {
            var res = data.getBook; 
            $("#"+ctrlId).html(res);
        }
     });
 }
 
 /* --------------------------------------
 Function to get Calender Event.
 Created by     : Pusparani Mandal
 Created On     : 07-01-2018
 * -------------------------------------- */
/*function fetchUserCalenderEvent() {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: siteUrl + '/proxy',
    data: {
      method: "fetchCalenderEvent"
    },
    success: function (data) {
      var eventdata = "";
      if (data.length != 0) {
        eventdata = "[";
        $.each(data, function (key, value) {

          eventdata += "{";

          eventdata += "'date':'" + value.sdate_year + "-" + value.sdate_month + "-" + value.sdate_date + "',";
          eventdata += "'note':['" + value.name + "'],";
          eventdata += "'holidaytype':'" + value.holidaytype + "',";
          eventdata += "'enddate':'" + value.edate_year + "-" + value.edate_month + "-" + value.edate_date + "',";


          eventdata = eventdata.slice(0, -1);
          eventdata += "},";
        });
        eventdata = eventdata.slice(0, -1);
        eventdata += "]";
      }
      calenderview(eventdata);
    }
  });
}*/

function fetchUserCalenderEvent() {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: siteUrl + '/proxy',
    data: {
      method: "fetchCalenderEvent"
    },
    success: function (data) {
        //console.log(data);
      var eventdata = "";
      if (data.length != 0) {
        eventdata = "[";
        $.each(data, function (key, value) {

          eventdata += "{";

          eventdata += "'date':'" + value.sdate_year + "-" + value.sdate_month_real + "-" + value.sdate_date + "',";
          eventdata += "'note':['" + value.name + "'],";
          eventdata += "'holidaytype':'" + value.holidaytype + "',";
          eventdata += "'enddate':'" + value.edate_year + "-" + value.edate_month_real + "-" + value.edate_date + "',";


          eventdata = eventdata.slice(0, -1);
          eventdata += "},";
        });
        eventdata = eventdata.slice(0, -1);
        eventdata += "]";
      }
      calenderview(eventdata);
    }
  });
}

function getCitizenFeedbacks(intComplainId)
{
    $.ajax({
    type: "POST",
    dataType: "json",
    url: siteUrl + '/proxy',
    data: {
      method: "getCitizenFeedbacks", intComplainId: intComplainId
    },
    success: function (data) {
      
    }
  });
}

 /* --------------------------------------
 Function to get Feedback details .
 Created by     : Ashok Samal
 Created On     : 22-01-2018
 * -------------------------------------- */

function getCitizenFeedback(intComplainId,ctrlid){
    $.ajax({
    type: "POST",
    dataType: "json",
    url: siteUrl + '/proxy',
    data: {
      method: "getCitizenFeedbacks", intComplainId: intComplainId
    },
    success: function (data) {
      $('#'+ctrlid).html(data.result);
    }
  });
}


     // get Dashboard Portlet List by Pusparani Mandal on 15-JAN-2018     
       function getDashboardPortletList(ctrlCls){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
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
     
     // set Dashboard Portlet List by Pusparani Mandal on 15-JAN-2018     
       function setDashboardPortletList(allPortIds){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
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
     
     // get All Dashboard Portlet List which is not added to user by Pusparani Mandal on 15-JAN-2018     
       function getAllDashboardPortletList(ctrlCls){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
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


     function getEventDetailsSearch(strtDt,fromDt,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"getEventDetailsSearch", strtDt :strtDt,fromDt :fromDt},
            success  : function(data) 
            {
                var i=0;
                var res = data.getEvent;
                $("#"+ctrlId).html(res);              
                $(".table-date").removeClass('event-date');
                for(i=0;i<=$("#"+ctrlId).find('.white').length;i++)
                {  
                    var ap=$("#"+ctrlId).find('#white'+i).text();  
                    //console.log(ap);                  
                    $("#table-date"+ap).addClass('event-date');                    
                }
                
            }
         });
     }

     function getPastEventDetailsSearch(strtDt,fromDt,ctrlId)
     { 
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"getPastEventDetailsSearch", strtDt :strtDt,fromDt :fromDt},
            success  : function(data) 
            {
                var i=0;
                var res = data.getPastEventDt;
                $("#"+ctrlId).html(res);

                $(".table-date").removeClass('event-date');
                for(i=0;i<=$("#"+ctrlId).find('.white').length;i++)
                {  
                    var ap=$("#"+ctrlId).find('#white'+i).text();  
                    //console.log(ap);                  
                    $("#table-date"+ap).addClass('event-date');                    
                }
                
            }
         });
     }

     function getPastEventDetails(ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"getPastEventDetails"},
            success  : function(data) 
            {
                var i=0;
                var res = data.getPastEvent;
                $("#"+ctrlId).html(res);
               // console.log($('#label').text());
               // console.log($('#yearCls1').text());
                $(".table-date").removeClass('event-date');
                for(i=0;i<=$("#"+ctrlId).find('.white').length;i++)
                {  
                    var ap=$("#"+ctrlId).find('#white'+i).text();  
                    var clsYr = $("#"+ctrlId).find('#yearCls'+i).text();
                    var lblYr = $('#label').text();
                    //console.log(clsYr+'==='+lblYr);             
                    if(clsYr==lblYr)
                    {
                       $("#table-date"+ap).addClass('event-date');   
                    } else {
                       $("#table-date"+ap).removeClass('event-date'); 
                    }    
                                     
                }
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
       // console.log("working");
        //alert(complaintId+'=='+vchTokenNo+'=='+vchContactNo);
        $.ajax({
           type     : "POST",
           dataType : "json",
           url      : siteUrl + '/proxy',
           data     : {method:"viewComplaintDetails",CID:complaintId,TOKEN_NO:vchTokenNo,CONTACT:vchContactNo,EMAIL:vchEmail},
           success  : function(data) 
           {
                  
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
                     var expectedResolveDate     =data.result[0]['expectedResolveDate'];
					 var desgName 				= data.result[0]['desgName'];
               
                      if(plotNo==0){
						plotNo='';
					}else{
						plotNo='<b>Plot no:</b> '+ plotNo+',' ;
					}
                    
                    var vchCompLogType   = data.result[0]['COMPLAINT_MODE'];
                    var ForeignCitizen   = '';
                    var Gender           = '';
                    var FileHref         = '';
                    var compTypes=''
                    
                    
                   var tbl                  = '';
                   
                    if(gmsType==2){ compTypes='Complaint'; }if(gmsType==1){ compTypes='Service Request'; }
                    if(vchComplaintFile!=''){FileHref=appURL+'/uploadDocuments/complaintPhoto/'+vchComplaintFile;}else{FileHref="javascript:void(0);";} 
                     if(vchComplaintFile1!=''){FileHrefs=appURL+'/uploadDocuments/complaintPhoto/'+vchComplaintFile1;}else{FileHrefs="javascript:void(0);";} 
                    
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
             if(statusId==ONHOLD_STATUS)
             {
          tbl                 += '<td>Expected Date</td> <td width="">:</td> <td>'+expectedResolveDate+'</td>';    
            }
            tbl                 +='</tr>';
                       
          tbl                 += '<tr><td>Address</td><td>:</td><td colspan="4">'+ plotNo +' <b>SectorNo:</b>'+ sectorNo  +'<br/>   <b>LandMark:</b>'+ landMark +'<br/>'+vchCompliantAgainstType+'</td></tr>';
                        

          tbl                 += '</tr> </tbody></table></div>';
		  
		   if(intPendingWith!='' && intPendingWith>0)
                        {   

                    if(statusId!= RESOLVED_STATUS)
                    {
          tbl                 += '<h3 class="blueTxt">Pending With</h3>';
          tbl                 += '<table class="table table-bordered table-hover addTable well">';
          tbl                 += '<thead> <tr>';
          tbl                 += '<th width="50">Sl#</th> <th>Authority Name</th>  <th>Assigned On</th><th>Department Name</th> <th>Escalation Date</th> <th width="">Status</th>';
          tbl                 += '</tr> </thead> <tbody>';
          tbl                 += '<tr> <td>1 </td> <td>'+ desgName +'</td>';//vchPendingWithName
          tbl                 += '<td>'+dtmLastUpdateDate+'</td><td>'+deptName+'</td><td>'+escalationDate+'</td> <td>'+vchcompStatus+'</td>';
          tbl                 += '</tr>  </tbody> </table>';
                    }

               }

                        //if(intPendingWith!='' && intPendingWith>0 )
                       // {   

                   /*  if(statusId!= RESOLVED_STATUS)
                    {
                    tbl                 += '<h3 class="blueTxt">Pending With</h3>';
          tbl                 += '<table class="table table-bordered table-hover addTable well">';
          tbl                 += '<thead> <tr>';
          tbl                 += '<th width="50">Sl#</th> <th>Authority Name</th>  <th>Assigned On</th><th>Department Name</th><th width="">Status</th>';
          tbl                 += '</tr> </thead> <tbody>';
          tbl                 += '<tr> <td>1 </td> <td>'+ vchPendingWithName+'</td>';
          tbl                 += '<td>'+dtmLastUpdateDate+'</td><td>'+deptName+'</td> <td>'+vchcompStatus+'</td>';
          tbl                 += '</tr>  </tbody> </table>';
                    } */


                // var totalRecord = logDetail.length;
    //tbl                 += '<h3 class="blueTxt">Summary of Action Taken</h3>';                 
              
                 /* if(totalRecord>0)
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
                    }*/
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
                      tbl                 += '<td> '+(i+1)+' </td> <td>Action '+(i+1)+' </td> <td>'+' '+logDetail[i]['vchDesgName']+' </td>';
                      tbl                 += '<td>'+logDetail[i]['vchComplaintStatus']+'</td><td>'+logDetail[i]['vchRemark']+'</td><td>'+logDetail[i]['vchActionDate']+'</td>';
                      tbl                 += '</tr>';
                        }
                    }
                    tbl                 += '</tbody> </table>';

                    console.log(escDetail.length);
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
                      tbl                 += '<th>Designation</th>';
                      //tbl                 +=' <th>Date of Escalation</th>';
                      tbl                 += '</tr>';

                    for (var j=0;j<totalRecord1;j++)
                         { 

                    tbl                 +=' <tr>';
                    tbl                 += '<td>'+escDetail[j]['SlNo']+'</td>  <td>'+escDetail[j]['level']+'</td>';
                    tbl                 += '<td>'+escDetail[j]['Designation']+'</td> ';
                    //tbl                 +='<td>'+escDetail[j]['escalationDate']+'</td>';
                    tbl                 += '</tr> ';
                        }
                   
                    }

                    tbl                 += ' </tbody></table>';
              }//} 
              else{ tbl                 += "<div class='noContent'>No Records Available</div>";}//end pending with

                   
                    $('#SuccessMessage').html(tbl);
           }
       });
    }


/* --------------------------------------
     Function to get Details of State 
     Created by     : Arpita Rath
     Created On     : 23-01-2018
* -------------------------------------- */ 
 function getStateName(ctrlId,countryId)
 {
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getStateName", countryId: countryId},
        success  : function(data) 
        {
            var res = data.getState; 
            $("#"+ctrlId).html(res);
        }
    });
 } 


/* --------------------------------------
     Function to load tender
     Created by     : Shweta Choudhury
     Created On     : 08-02-2018
* -------------------------------------- */ 
 function loadTenderPagging(recNo,pageNo)
 {
    //var recNo=$('#hdn_RecNo').val();
    
    var pageSize=2;
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"viewTenderDetails", recNo: recNo,pageSize:2,pageNo:pageNo},
        success  : function(data) 
        {
             var res = data.tenderList; 
             var dataRes = data.dataList; 
             $("#paggingDetails").html(res);
             $("#tenderRecords").html(dataRes);
             $('.pagingliclass').removeClass('active');
             $('#page'+pageNo).addClass('active');//firstLi
             if(pageNo==1)
             {
                 //$('#firstLi').hide();
             }
              
        }
    });
 } 
 var crl=0;
 function loadMore(recNo,pageNo,totalpageSize)
 {
    crl++;
    var pageSize=2;
   if(crl<totalpageSize){
    $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"viewTenderDetails", recNo: recNo,pageSize:2,pageNo:pageNo},
        success  : function(data) 
        {
             var res = data.tenderList; 
             var dataRes = data.dataList;
             //alert(res);
             //$("#tenderRecords").html(res);
             $("#paggingDetails").html(res);
             $("#tenderRecords").append(dataRes);
            
              
        }
    });
   }
 }

 /* --------------------------------------
     Function to load tender Archive
     Created by     : Arpita Rath
     Created On     : 04-03-2018
* -------------------------------------- */ 
 function loadTenderArcPagging(recNo,pageNo)
 {
    //var recNo=$('#hdn_RecNo').val();
    
    var pageSize=2;
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadTenderArcPagging", recNo: recNo,pageSize:2,pageNo:pageNo},
        success  : function(data) 
        {
             var res = data.tenderList; 
             var dataRes = data.dataList; 
             $("#paggingArcDetails").html(res);
             $("#tenderArcRecords").html(dataRes);
             $('.pagingliclass').removeClass('active');
             $('#page'+pageNo).addClass('active');//firstLi
             if(pageNo==1)
             {
                 //$('#firstLi').hide();
             }
              
        }
    });
 } 

 var crl=0;
 function loadMoreArc(recNo,pageNo,totalpageSize)
 {
    crl++;
    var pageSize=2;
   if(crl<totalpageSize){
    $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadTenderArcPagging", recNo: recNo,pageSize:2,pageNo:pageNo},
        success  : function(data) 
        {
             var res = data.tenderList; 
             var dataRes = data.dataList;
             //alert(res);
             //$("#tenderRecords").html(res);
             $("#paggingArcDetails").html(res);
             $("#tenderArcRecords").append(dataRes);
        }
    });
   }
 }
 

 /* --------------------------------------
   Function to get Do Paging
   Created by     : Arpita Rath
   Created On     : 08-02-2018
* -------------------------------------- */ 
     function doPaging(pageNo,recordNo)
     {
         $.ajax({
           type: "POST",
           url : siteUrl + '/proxy',
           dataType : "json",
           data : {method: 'doPaging', currentPage: currentPage, recordNo: recordNo},
           success:function (data)
           {
                $("#hdn_PageNo").val(currentPage);
                $("#hdn_RecNo").val(recordNo);
                //var res    = data.pageList;
           }

         });
     }

/* --------------------------------------
   Function to get Paging in Job Search 
   Created by     : Arpita Rath
   Created On     : 08-02-2018
* -------------------------------------- */  
     function jobSearchPaging(recNo,pageNo)
     {
          var pageSize=3;
          $.ajax({
            type: "POST",
            url: siteUrl + '/proxy',
            dataType: "json",
            data: {method: 'jobSearchPaging', recNo: recNo,pageSize:2,pageNo:pageNo},
             success: function (data) 
             {

               //  var res = data.joblist;
               // $("#jobPaging").html(res);              
          
               //  $('.paggingClass').click(function(){
                    
               //     $('.pagination li').removeClass('active');
               //     $(this).closest('li').addClass('active');
               //     var divId =$(this).data('page');
               //      $('.jobRowdiv').hide();
               //      $('#'+divId).show();
               // });
               var res = data.joblist; 
               var dataRes = data.dataList; 
                 $("#paggingDetails").html(res);
                 $("#jobListRecords").html(dataRes);
                 $('.pagingliclass').removeClass('active');
                 $('#page'+pageNo).addClass('active');//firstLi
                 if(pageNo==1)
                 {
                     //$('#firstLi').hide();
                 }
            }     
        });
     }

/* --------------------------------------
     Function to load Circular
     Created by     : Arpita Rath
     Created On     : 12-02-2018
* -------------------------------------- */ 
 function loadCircularPagging(recNo,pageNo)
 {    
    var pageSize=4;
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadCircularPagging", recNo: recNo,pageSize:4,pageNo:pageNo},
        success  : function(data) 
        {
             var res     = data.circularList; 
             var dataRes = data.dataList; 
             $("#paggingDetails").html(res);
             $("#circularRecords").html(dataRes);
             $('.pagingliclass').removeClass('active');
             $('#page'+pageNo).addClass('active');//firstLi
             if(pageNo==1)
             {
                 //$('#firstLi').hide();
             }
              
        }
    });
 } 

 var crl=0;
 function loadMoreCircular(recNo,pageNo,totalpageSize)
 {
    crl++;
    var pageSize=2;
   if(crl<totalpageSize){
    $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadCircularPagging", recNo: recNo,pageSize:4,pageNo:pageNo},
        success  : function(data) 
        {
             var res     = data.circularList; 
             var dataRes = data.dataList;   

             $("#paggingDetails").html(res);
             $("#circularRecords").append(dataRes);              
        }
    });
   }
 }

/* --------------------------------------
     Function to load Office Order
     Created by     : Arpita Rath
     Created On     : 12-02-2018
* -------------------------------------- */ 
 function loadOfficeOrderPagging(recNo,pageNo)
 {    
    var pageSize=4;
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadOfficeOrderPagging", recNo: recNo,pageSize:4,pageNo:pageNo},
        success  : function(data) 
        {
             var res     = data.officeOrderList; 
             var dataRes = data.dataList; 
             $("#paggingDetails").html(res);
             $("#officeOrderRecords").html(dataRes);
             $('.pagingliclass').removeClass('active');
             $('#page'+pageNo).addClass('active');//firstLi
             if(pageNo==1)
             {
                 //$('#firstLi').hide();
             }
              
        }
    });
 } 

 var crl=0;
 function loadMoreOfficeOrder(recNo,pageNo,totalpageSize)
 {
    crl++;
    var pageSize=4;
   if(crl<totalpageSize){
    $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadOfficeOrderPagging", recNo: recNo,pageSize:4,pageNo:pageNo},
        success  : function(data) 
        {
             var res     = data.circularList; 
             var dataRes = data.dataList;   

             $("#paggingDetails").html(res);
             $("#officeOrderRecords").append(dataRes);              
        }
    });
   }
 }

/* --------------------------------------
     Function to load Notices
     Created by     : Arpita Rath
     Created On     : 12-02-2018
* -------------------------------------- */ 
 function loadNoticesPagging(recNo,pageNo)
 {    
    var pageSize=4;
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadNoticesPagging", recNo: recNo,pageSize:4,pageNo:pageNo},
        success  : function(data) 
        {
             var res     = data.noticesList; 
             var dataRes = data.dataList; 
             $("#paggingDetails").html(res);
             $("#noticesRecords").html(dataRes);
             $('.pagingliclass').removeClass('active');
             $('#page'+pageNo).addClass('active');//firstLi
             if(pageNo==1)
             {
                 //$('#firstLi').hide();
             }
              
        }
    });
 } 

 var crl=0;
 function loadMoreNotices(recNo,pageNo,totalpageSize)
 {
    crl++;
    var pageSize=4;
   if(crl<totalpageSize){
    $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"loadNoticesPagging", recNo: recNo,pageSize:4,pageNo:pageNo},
        success  : function(data) 
        {
             var res     = data.noticesList; 
             var dataRes = data.dataList;   

             $("#paggingDetails").html(res);
             $("#noticesRecords").append(dataRes);              
        }
    });
   }
 }
 
 //---- Function for Autofill Form By:: Arpita Rath On:: 21-04-2018  
    function getWebSearchAutoFill(text)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"getWebSearchAutoFill", text :text},
            success  : function(data) 
            {  
                var res = data.getWebSearchAuto;
                var errFlag = data.errFlag; 
                $(".autoSrchDiv").html(res);//console.log(errFlag);

                if(errFlag==0)
                {
                   $('.autoSrchDiv').show();
                } else if(errFlag==1) {                  
                   $('.autoSrchDiv').hide();
                }  
                
                 $('.srchVal').on('click',function() {
                     var srchTxt = $(this).attr('data-val'); 
                     $('#txtwebSearch').html(srchTxt);
                     $('#txtwebSearch').val(srchTxt);
                     $("form").submit();
                });              
            }
         });
     }

     //Added On: 25-09-2018 start

     /* --------------------------------------
     Function to get digital doc category
     Created by     : Amitashree Mallick
     Created On     : 13-04-2018
  * -------------------------------------- */
    function fillDigiDocCategory(selVal,ctrlId){
        $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"fillDigiDocCategory", selVal :selVal},
            success  : function(data) 
            {
                var res = data.result;
                $("#"+ctrlId).html(res);
            }
         });
    }
    
    /* --------------------------------------
     Function to get digital doc category
     Created by     : Amitashree Mallick
     Created On     : 13-04-2018
  * -------------------------------------- */
    function fillDigiDocFolders(selVal,ctrlId){
        $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"fillDigiDocFolders", selVal :selVal},
            success  : function(data) 
            {
                var res = data.result;
                $("#"+ctrlId).html(res);
            }
         });
    }
    
      function fillDigiDocFoldersCFC(selVal,userId,ctrlId){
        $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"fillDigiDocFoldersCFC", selVal :selVal,userId:userId},
            success  : function(data) 
            {
                var res = data.result;
                $("#"+ctrlId).html(res);
            }
         });
    }
    
    /*function saveDownloadHistory(docId,documentIndexId,strDocCategory,documentname,strEmailId,strMobileNo,strName){
        $('#downloadModal').modal();
        $('#download'+documentIndexId).attr('href','');
        //save history
        $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"saveDownloadHistory", docId :docId,strDocCategory:strDocCategory,documentname:documentname,strEmailId:strEmailId,strMobileNo:strMobileNo,strName:strName},
            success  : function(data) 
            {
                var res = data.result;
            }
         });
         
         var downloadstring = '';
         
         //download 
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"viewDigitalDoc", documentIndexId :documentIndexId,documentname:documentname},
            success  : function(data) 
            {
                $('#downloadModal').modal('toggle');
                var applicationType = data.applicationType;
                var base64append    = 'data:application/'+applicationType+';base64,';
                var res             = data.result;
                var base64_string   = base64append+res;//console.log(base64_string);alert(base64_string);//return false;
                
                if(res != null){
                   // setTimeout(function(){
                    if(applicationType == 'pdf'){
                    //for pdf only
                        var base64stringPdf = data.result;
                        var blob = b64toBlob(base64stringPdf, 'application/pdf');
                        var blobUrl = URL.createObjectURL(blob);
                        downloadstring = blobUrl;
                    }else{
                        downloadstring = base64_string;
                    }



                    //$(this).attr("href", downloadstring);
                    $('#download'+documentIndexId).attr('href',downloadstring);
                    var a = document.createElement('a');
                    a.href = downloadstring;
                    a.download = documentname;
                    a.click();
                    window.URL.revokeObjectURL(downloadstring);
               // }, 3000);
            }else{
                viewAlert('Could not download, try again later');
            }
                
            }
         });
         
    }*/
 
 
 function saveDownloadHistory(docId,documentIndexId,strDocCategory,documentname,strEmailId,strMobileNo,strName){
        $('#download'+documentIndexId).attr('href','');
    $('#downloadModal').modal();
    
    //$('#download'+documentIndexId).removeAttr("download");
        //save history
        $.ajax({
            type     : "POST",
            dataType : "json",
            url      : appURL+'/proxy',
            data     : {method:"saveDownloadHistory", docId :docId,strDocCategory:strDocCategory,documentname:documentname,strEmailId:strEmailId,strMobileNo:strMobileNo,strName:strName},
            success  : function(data) 
            {
                var res = data.result;
            }
         });
         
         var downloadstring = '';
         
         //download 
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"viewDigitalDoc", documentIndexId :documentIndexId,documentname:documentname},
            success  : function(data) 
            {
                $('#downloadModal').modal('toggle');
                var applicationType = data.applicationType;
                var base64append    = 'data:application/'+applicationType.toLowerCase()+';base64,';
                var res             = data.result;
                var base64_string   = base64append+res;//console.log(base64_string);alert(base64_string);//return false;
                
                if(res != null){
                   
                    if(applicationType == 'pdf'){
                    //for pdf only
                        var base64stringPdf = data.result;
                        var blob = b64toBlob(base64stringPdf, 'application/pdf');
                        var blobUrl = URL.createObjectURL(blob);
                        downloadstring = blobUrl;
                    }else{
                        downloadstring = base64_string;
                    }



                    //$(this).attr("href", downloadstring);
                    $('#download'+documentIndexId).attr('href',downloadstring);
                    var a = document.createElement('a');
                    a.href = downloadstring;
                    a.download = documentname;
         //setTimeout(function(){
           if($('#download'+documentIndexId).attr('href')!=''){
                    a.click();
                    window.URL.revokeObjectURL(downloadstring);
           }
         //}, 500);
               
            }else{
                viewAlert('Could not download, try again later');
            }
                
            }
         });
    }
    
    function modifyFolderName(folderIndexId){//alert(folderIndexId);
        var folderName  = $('#txtFolderNameEd'+folderIndexId).val();
        if(folderName!=''){
        $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"modifyFolderName", folderIndexId :folderIndexId,folderName:folderName},
            success  : function(data) 
            {
                var res = data.result;
                if(data.msg!=''){
                
                viewAlert(data.msg);  
                if(data.result==0){
                    $('#btnAlertOk').on('click',function(){
                        window.location.reload();
                    });
                }
              }  
            }
         });
     }else{
         viewAlert('Folder Name can not be blank');  
     }
    }
    
    function viewDigitalDoc(documentIndexId,documentname,ctrlId,strEmailId,strMobileNo){
        $('#Loader').show();
        $('#Loader').html('<center><img src="'+siteUrl+'/images/loading.gif"><p> Loading... <p></center>');
        $('#digitalDocumentImg').hide();
        $('#digitalDocument').hide();
       // $('#digitalDocument').attr('data','');
     $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"viewDigitalDoc", documentIndexId :documentIndexId,documentname:documentname,strEmailId:strEmailId,strMobileNo:strMobileNo},
            success  : function(data) 
            {
                
                var applicationType = data.applicationType;
                var base64append    = 'data:application/'+applicationType.toLowerCase()+';base64,';
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
 
 
 /***************convert base64 to blob ***Created by ::Amitashree Mallick***On: 10-May-2018********************/
 function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}
 
 function downloadDigitalDoc(documentIndexId,documentname,ctrlId){
     $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"viewDigitalDoc", documentIndexId :documentIndexId,documentname:documentname},
            success  : function(data) 
            {
                var res = data.result;
                $('#digitalDocument').attr('data',res);
            }
         });
     
    // $('#divViewDoc').modal();
 }
 
 function deleteDigiFolder(folderIndexId){
     confirmAlert("Are you sure to delete file? ");
    
    $('#btnConfirmOk').on('click', function ()
                    {
     $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"deleteDigiFolder", folderIndexId :folderIndexId},
            success  : function(data) 
            {
                var res = data.result;
                var msg = data.msg;
                viewAlert(msg,'','');
                if(res == 0){
                  window.location.href=  window.location.href;
                }
            }
         });
         });
 }


 /*
 Function to fill smart card property type
 By: Abhiram Samantara
 On: 20-Apr-2017
 */
 
  function deleteDigiDocument(documentIndexId)
  {
    confirmAlert("Are you sure to delete file? ");
    
    $('#btnConfirmOk').on('click', function ()
    {
                        $.ajax({
          type: "POST",
          url: siteUrl + '/proxy',
          dataType: "json",
          data: {method: 'deleteDigiDocument',documentIndexId:documentIndexId},
          success: function (data) {
                var res = data.result;
                var msg = data.msg;
                viewAlert(msg,'','');
                if(res == 0){
                  window.location.href=  window.location.href;
                }
          }
      });
    });
    //$('#hdn_qs').val('DFL');
  
  }

  /*********************show digtal doc history*****************/
     function showDigitalDocHistory(documentIndexId,ctrlId)
     { 
         $('#'+ctrlId).html('<center><img src="'+appURL+'/img/loading.gif"><p> Loading... <p></center>');
         //$('#historyModal').modal();
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"showDigitalDocHistory", documentIndexId :documentIndexId},
            success  : function(data) 
            {  
                var res = data.result;
                $("#"+ctrlId).html(res); 
            }
         });
     }

	  /*********************resend OTP*****************/
    function resendOTP(strMobileNo,strOTP){
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"resendOTP",strMobileNo:strMobileNo,strOTP:strOTP},
            success  : function(data) 
            {  
                var res = data.status;
                viewAlert('OTP resent succesfully');
               
            }
         });                       
    }
	
	/***Smart card***/
	function getQrData(data)
  {
     //var qrdata = JSON.stringify(data);
     var qrdata = data;
     $.ajax({
      type: "POST",
      url: siteUrl + '/proxy',
      dataType: "json",
      data: {method: 'getQrData',qrdata:qrdata},
      success: function (data) {
        var uniqueId = data.uniqid;
        $("#txtUserName").val(uniqueId);
      }
    });
  }

  function getQrSData(data,userID)
  {
     //var qrdata = JSON.stringify(data);
     var qrdata = data;
     //console.log(qrdata);
     $.ajax({
      type: "POST",
      url: siteUrl + '/proxy',
      dataType: "json",
      data: {method: 'getQrSData',qrdata:qrdata,userID:userID},
      success: function (data) {
         var uniqueId = data.uniqid;
         $("#txtUniqueId").val(uniqueId);
      }
    });
  }

  function validateQr(data)
  {
     //var qrdata = JSON.stringify(data);
     var qrdata = data;
     $.ajax({
      type: "POST",
      url: siteUrl + '/proxy',
      dataType: "json",
      data: {method: 'validateQr',qrdata:qrdata},
      success: function (data) {
        var status = data.status;
        var name   = data.name;

        if(Number(status) == 1)
        {
          $(".qrCodeS").show();
          $(".qrDIV").hide();
          $("#welcomeTXT").html("Welcome "+name+".").show();
          $(".pinTxt").show();
        }
        else
        {
          $(".qrCodeS").hide();
          $("#txtUniqueId").val('');
          $("#welcomeTXT").hide();
          $(".pinTxt").hide();
          viewAlert('Invalid QR Code', '', '');
        }
      }
    });
  }

  function validateQrD(data)
  {
     //var qrdata = JSON.stringify(data);
     var qrdata = data;
     $.ajax({
      type: "POST",
      url: siteUrl + '/proxy',
      dataType: "json",
      data: {method: 'validateQr',qrdata:qrdata},
      success: function (data) {
        var status = data.status;
        var name   = data.name;

        if(Number(status) == 1)
        {
          $("form").attr("action",$("#smURL").val());
          $("form").submit();
        }
        else
        {
          $("#txtUniqueId").val('');
          viewAlert('Invalid QR Code', '', '');
        }
      }
    });
  }

 /*
 Function to fill smart card sector
 By: Abhiram Samantara
 On: 20-Apr-2017
 */
 
  function fillSmSector(controlId,selVal)
  {

     $.ajax({
          type: "POST",
          url: siteUrl + '/proxy',
          dataType: "json",
          data: {method: 'fillSmSector',selVal:selVal},
          success: function (data) {
              $('#'+controlId).html(data.option); 
          }
      });
  }

  /*
 Function to fill smart card plots
 By: Abhiram Samantara
 On: 20-Apr-2017
 */
 
  function fillSmPlot(controlId,selVal,sectorId)
  {

     $.ajax({
          type: "POST",
          url: siteUrl + '/proxy',
          dataType: "json",
          data: {method: 'fillSmPlot',selVal:selVal,sectorId:sectorId},
          success: function (data) {
              $('#'+controlId).html(data.option); 
          }
      });
  }

  /*
 Function to fill smart card property type
 By: Abhiram Samantara
 On: 20-Apr-2017
 */
 
  function fillSmProperty(controlId,selVal)
  {

     $.ajax({
          type: "POST",
          url: siteUrl + '/proxy',
          dataType: "json",
          data: {method: 'fillSmProperty',selVal:selVal},
          success: function (data) {
              $('#'+controlId).html(data.option); 
          }
      });
  }
  
    /*********************View Profile Details*****************/
    function viewProfielDetails(ctrlId,enc)
    {
       $.ajax({
          type     : "POST",
          dataType : "json",
          url      : siteUrl+'/proxy',
          data     : {method:"viewProfielDetails",enc:enc},
          success  : function(data) 
          {  
              var res = data.html;
              $("#"+ctrlId).html(res);
          }
       });                       
    }
  
     //Added On: 25-09-2018 End

	 
	 ////////////////////////////Added On: 2-11-2018 START//////////////////////
	 
		 /* --------------------------------------
		 Function to get Authority Details 
		 Created by     : Arpita Rath
		 Created On     : 24-06-2018
	* -------------------------------------- */ 
	 function getAuthorityName(ctrlId,deptId,authId)
	 {   
		 $.ajax({
			type     : "POST",
			dataType : "json",
			url      : siteUrl+'/proxy',
			data     : {method:"getAuthorityName", deptId: deptId, authId: authId},
			success  : function(data) 
			{
			   var res = data.getAuth; 
			   $("#"+ctrlId).html(res);
			}
		});
	 }
	 
	 /* --------------------------------------
     Function to send otp for RTI
     Created by     : Arpita Rath
     Created On     : 02-07-2018
* -------------------------------------- */ 
 function sendRtiOtp(refNo,mobNo,otpNo)
 {   
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"sendRtiOtp", refNo: refNo, mobNo: mobNo, otpNo: otpNo},
        success  : function(data) 
        {
           var res = data.getRtiOtp; 

           if(res==0)
           {
              $('#btnsenOTP').hide();
              $('#btnCheckStatus').show(); 
              $('.btnOTP').hide();
              $('.refDiv').hide();
              $('.divGo').show();              
           } else {
              $('#btnsenOTP').show();
              $('#btnCheckStatus').hide();               
              $('.refDiv').show();

           }
           
        }
    });
 }


 /* --------------------------------------
     Function to send otp for RTI
     Created by     : Arpita Rath
     Created On     : 02-07-2018
* -------------------------------------- */
function sendRTiOtps(refNo,mobNo,sessUserId)
 { 
     $('#Loader').show();  
     $('#Loader').html('<center><img src="'+siteUrl+'/images/loading_doc.gif"><p> Loading... <p></center>');
     $('#btnsenOTP').hide();
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"sendRTiOtps", refNo: refNo, mobNo: mobNo, sessUserId:sessUserId},
        success  : function(data) 
        {         
           var res = data.getRtiOtps; 

             if(res==0)
             {
                $('#Loader').hide();
                $('.otpDiv').show();
                $('#btnsenOTP').hide();
                $('#btnCheckStatus').show(); 
                $('.btnOTP').hide();
                $('.refDiv').hide();
                $('.divGo').show();    
                $('#btnResendOtp').show(); 
                $('.hideOtp').show(); 
                viewAlert('OTP send successfully.');   
                $('.otpNum').html(data.otpNum);     
             } else {
                $('#btnsenOTP').show();
                $('#btnCheckStatus').hide();               
                $('.refDiv').show();
                $('#btnResendOtp').hide(); 
                $('.hideOtp').hide();  
                $('#Loader').hide();
                $('.otpDiv').hide();              
                viewAlert('Invalid Mobile No. or Reference No.');
                return false;
             }           

             if(res==0)
             {
                 $('#btnResendOtp').on('click',function() {
                       $('.msgDiv').show();
                 });
             } else {
                $('.msgDiv').hide();
             }
        }
    });
 }

 /* --------------------------------------
     Function to send otp for RTI
     Created by     : Arpita Rath
     Created On     : 02-07-2018
* -------------------------------------- */

function validateRTIOTP(entOtp,mobileNo,refNo)
 {   
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"validateRTIOTP", entOtp: entOtp, mobileNo: mobileNo, refNo: refNo},
        success  : function(data) 
        {
           var res     = data.validRtiOtps; 
           var otpFlag = data.otpFlag

           if(otpFlag==0)
           {
              $('#hdnQs').val('U');
              $('form').submit();
           } else {
              viewAlert('Please enter valid OTP');
              return false;
           }           
        }
    });
 }

 /* --------------------------------------
     Function to download rti doconly once
     Created by     : Arpita Rath
     Created On     : 03-07-2018
* -------------------------------------- */ 
 function downloadRtiDoc(rtiId)
 {    
     confirmAlerts('This document can be downloaded only once.Please save this document for future purpose.');    
     $('#btnConfirmOks').on('click',function() {

         $.ajax({
              type     : "POST",
              dataType : "json",
              url      : siteUrl+'/proxy',
              data     : {method:"downloadRtiDoc", rtiId: rtiId},
              success  : function(data) 
              {  
                  $('#btnConfirmOks').modal('toggle');
                  var errFlag = data.errFlag;
                  var outMsg  = data.outMsg;  
                  var doc     = data.doc; 
                  var actDoc  = appURL + '/uploadDocuments/RTI/'+ doc;

                  if(errFlag==1)
                  {
                     viewAlert(outMsg);                     
                  }
                  else if(errFlag==0) { 
                    $('#confirmModals').hide();                 
                    $('form').submit();
                    return false;
                  }    
              }
        });

     });     
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
        url      : siteUrl+'/proxy',
        data     : {method:"getAllDist", stateId: stateId, distId: distId},
        success  : function(data) 
        {
           var res = data.getDist; 
           $("#"+ctrlId).html(res);
        }
    });
 }

 /* --------------------------------------
     Function to get All Tehsil 
     Created by     : Arpita Rath
     Created On     : 05-07-2018
* -------------------------------------- */ 
 function getAllTehsil(ctrlId,distId,tehsilId)
 {   
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getAllTehsil", distId: distId, tehsilId: tehsilId},
        success  : function(data) 
        {
           var res = data.getTehsil; 
           $("#"+ctrlId).html(res);
        }
    });
 }

 /* --------------------------------------
     Function to get All Village 
     Created by     : Arpita Rath
     Created On     : 05-07-2018
* -------------------------------------- */ 
 function getAllVillage(ctrlId,villageId,tehsilId)
 {   
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getAllVillage", villageId: villageId, tehsilId: tehsilId},
        success  : function(data) 
        {
           var res = data.getVillage; 
           $("#"+ctrlId).html(res);
        }
    });
 }

 /* --------------------------------------
     Function to get ground appeal details 
     Created by     : Arpita Rath
     Created On     : 06-07-2018
* -------------------------------------- */ 
 function getAllGroundAppeal(ctrlId,groundId)
 {   
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getAllGroundAppeal", groundId: groundId},
        success  : function(data) 
        {
           var res = data.getGround; 
           $("#"+ctrlId).html(res);
        }
    });
 }

 /* --------------------------------------
     Function to get details using reference no
     Created by     : Arpita Rath
     Created On     : 06-07-2018
* -------------------------------------- */ 
 function getRTIAppealDetails(refNo)
 {   
     $.ajax({
        type     : "POST",
        dataType : "json",
        url      : siteUrl+'/proxy',
        data     : {method:"getRTIAppealDetails", refNo: refNo},
        success  : function(data) 
        {
           var res = data.getRTIAppeal; 

             if(data.errFlag==0)
             {
                $('#selDept').val(res[0]['deptId']);  
                getAuthorityName('selPIO',res[0]['deptId'],res[0]['pioId']);
               //$('#selPIO').val(res[0]['pioId']);
                $('.povertyAce').val(res[0]['poverty']);  
                $('#txtBplCard').val(res[0]['bplNumber']);
                $('#txtBplIssueAuth').val(res[0]['bplAuth']);
                $('#txtBplYear').val(res[0]['bplYear']);
                $('#txtReqInfo').val(res[0]['reqInfo']);
                $('#selDelivery').val(res[0]['delivMode']);
                $('#selMedia').val(res[0]['mediaType']);
                $('#selFileN').val(res[0]['fileInspe']);
                $('#selFileN').val(res[0]['fileInspe']);
                $('#txtName').val(res[0]['name']);
                $('.genderAce').val(res[0]['gender']);
                $('#txtAddress').val(res[0]['address']);
                $('#txtPinCode').val(res[0]['pin']);
                $('#txtPinCode').val(res[0]['pin']);
                $('#selCountry').val(res[0]['country']);
                $('#selState').val(res[0]['state']);
                $('#txtDistricts').val(res[0]['district']);
                $('#txtTehsil').val(res[0]['tehsil']);
                $('#txtVillage').val(res[0]['village']);
                $('.selEdu').val(res[0]['eduStatus']);
                $('.selLoc').val(res[0]['location']);
                $('#selQual').val(res[0]['highQual']);
                $('#txtMobile').val(res[0]['mobile']);
                $('#txtEmail').val(res[0]['email']);
             } 
            
        }
    });
 }

 //--- Function for Pincode mapping By:: Arpita Rath On:: 20-07-2018
   function pinCodeMapping(ctrlId,pinCode)
   {
      $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"pinCodeMapping", pinCode: pinCode},
            success  : function(data) 
            {
               var subDist = data.getSubDistId; 
               var dist    = data.getDistId;
               var state   = data.getStateId;

               $('#selState').val(state); 
               $('#txtDistricts').val(dist);
               getAllTehsil('txtTehsil',dist,subDist);
               $('#txtTehsil').val(subDist);
                                      

            }
        });
   }
   
   
   
/* --------------------------------------
 Function to Upload File to Temporary Folder 
 Created by     : Abhiram Samantara
 Created On     : 14-Oct-2016
 * -------------------------------------- */
function uploadDocumentToTempFolder(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId,chkStatusId,clearDocDiv,nameDiv) {
    
     //alert('123');
    
    if (!IsCheckFile(filename, 'Invalid file type', fileType)) {
        //scrollToPosition(filename);
        $("#"+filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
      $("#"+filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    var uploadFileName = $("#"+filename).val();
  uploadFileName  = uploadFileName.split('\\');
  uploadFileName  = uploadFileName[Number(uploadFileName.length)-1];
    var hdnFormName = $("#hdnFormName").val();
    $("#" + loadingId).show(); 
    /*******Check whether the file is being uploaded or not********/
    if(!typeof(chkStatusId)=='undefined' || chkStatusId!=''){
            $("#"+chkStatusId).val('1');  
    }
        
    $.each($(".clsCheckdouploadsts"), function () {
        var updatsts = $(this).val();
        if(!typeof(updatsts)=='undefined' || updatsts!=''){
                  if (updatsts>0) {
                       $('input[type="submit"]').prop('disabled', true);
                }  
            }  
    });
   var disblests = 0;
   /*******Check whether the file is being uploaded or not********/
   if(uploadFileName!=''){ 
    $.ajaxFileUpload({
        url: siteUrl + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadDocumentToTempFolder', filename: filename, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {
            $("#" + hdnFilename).val(data.savedFileName);
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#"+ docId).show();
           // alert(spanId);
             
            if(spanId) { 
              
                $("#"+nameDiv).closest("div.form-group").find('.docName').html(uploadFileName);
                $('.'+linkId).show();
                $("."+linkId).attr('href', siteUrl + "/temp/" + data.savedFileName);
                $("#"+clearDocDiv).attr('href', 'javascript:void(0);');
                $("#"+clearDocDiv).show();
            } else {
                $(".docDownPrevBtn").show().attr('src', siteUrl + "/temp/" + data.savedFileName);
                $("#"+clearDocDiv).attr('href', 'javascript:void(0);');
                $("#"+clearDocDiv).show();
            }
            /*******Check whether the file is being uploaded or not********/
            if(!typeof(chkStatusId)=='undefined' || chkStatusId!=''){
                        $("#"+chkStatusId).val('0');  
                } 
                
                $.each($(".clsCheckdouploadsts"), function () {
                    var updatsts = $(this).val();
                    if(!typeof(updatsts)=='undefined' || updatsts!=''){
                              if (updatsts>0) {
                                   disblests++;
                                   $('input[type="submit"]').prop('disabled', true);
                            }  
                        }  
                });
                if(disblests==0)
                     $('input[type="submit"]').prop('disabled', false);
            /*******Check whether the file is being uploaded or not********/
        },
//        error: function (data, status, e) {
//            alert(e);
//        }
    });
  }  
    return false;
}



function uploadDocumentToNewTempFolder(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId,chkStatusId,clearDocDiv,nameDiv) {
    
    //alert(linkId);
    
    if (!IsCheckFile(filename, 'Invalid file type', fileType)) {
        //scrollToPosition(filename);
        $("#"+filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) 
    {
        $("#"+filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    var uploadFileName = $("#"+filename).val();
  uploadFileName  = uploadFileName.split('\\');
  uploadFileName  = uploadFileName[Number(uploadFileName.length)-1];
    var hdnFormName = $("#hdnFormName").val();
    //console.log(uploadFileName);
    $("#" + loadingId).show(); 
    /*******Check whether the file is being uploaded or not********/
    if(!typeof(chkStatusId)=='undefined' || chkStatusId!=''){
            $("#"+chkStatusId).val('1');  
    }
        
    $.each($(".clsCheckdouploadsts"), function () {
        var updatsts = $(this).val();
        if(!typeof(updatsts)=='undefined' || updatsts!=''){
                  if (updatsts>0) {
                       $('input[type="submit"]').prop('disabled', true);
                }  
            }  
    });
   var disblests = 0;
   /*******Check whether the file is being uploaded or not********/

   if(uploadFileName!=''){ console.log(uploadFileName+"=="+filename+"=="+hdnFilename);
    $.ajaxFileUpload({
        url: siteUrl + '/proxy',
        secureuri: true,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadDocumentToTempFolder', filename: filename, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {console.log(data);
            $("#" + hdnFilename).val(data.savedFileName);
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#"+ docId).show();
           // alert(spanId);
             
            if(spanId) { 
                $("#"+nameDiv).closest("div.form-group").find('.docName').html(uploadFileName);
                $('#'+linkId).show();
                $("#"+linkId).attr('href', siteUrl + "/temp/" + data.savedFileName);
                $("#"+clearDocDiv).attr('href', 'javascript:void(0);');
                $("#"+clearDocDiv).show();
            } else {
                $("#"+linkId).show().attr('src', siteUrl + "/temp/" + data.savedFileName);
                $("#"+clearDocDiv).attr('href', 'javascript:void(0);');
                $("#"+clearDocDiv).show();
            }
            /*******Check whether the file is being uploaded or not********/
            if(!typeof(chkStatusId)=='undefined' || chkStatusId!=''){
                        $("#"+chkStatusId).val('0');  
                } 
                
                $.each($(".clsCheckdouploadsts"), function () {
                    var updatsts = $(this).val();
                    if(!typeof(updatsts)=='undefined' || updatsts!=''){
                              if (updatsts>0) {
                                   disblests++;
                                   $('input[type="submit"]').prop('disabled', true);
                            }  
                        }  
                });
                if(disblests==0)
                     $('input[type="submit"]').prop('disabled', false);
            /*******Check whether the file is being uploaded or not********/
        },
//        error: function (data, status, e) {
//            alert(e);
//        }
    });
  }  
    return false;
} 

	 
	 ////////////////////////////Added On: 2-11-2018 END //////////////////////
	 
	 
	 

/***ADDED ON : 07-06-2019******/
/*-Function to view bill
   Created by    : Shweta Choudhury
   Created On    : 22-Oct-2018 */  

 function viewDocument(billNo,keyDate='',billDocNo='')
  {
       
        
     $('#pdfDocument').html('<div class="noRecord text-center m-t-82"><div>Bill loading is in process...</div><img src="'+appURL+'/img/loading.gif"></div>');
      
      $.ajax({
         type: "POST",
         url: siteUrl + '/proxy',
         dataType: "json", 
         data: {method: 'viewDocument',billNo:billNo,keyDate:keyDate, billDocNo:billDocNo},
         success: function (data) 
         {    
             var flag=data.errFlag;
             var attachment=data.dataAttach;
             var base64append    = 'data:application/'+attachment+';base64,';
             var base64_string   = base64append+data.result;
             var base64stringPdf = data.dataAttach;
             var blob = b64toBlob(base64stringPdf, 'application/pdf');
       
             var blobUrl = URL.createObjectURL(blob);
       
             $('#pdfDocument').html('<object data="'+blobUrl+'" type="application/pdf"  width="100%" height="500px"></object>');
         }
     });     
    
  }


   function viewLedger(profileId,keyDate){
      
        $('#ledgerDetails').html('<div class="noRecord text-center m-t-82"><div> Ledger loading is in process...</div><img src="'+siteUrl+'/images/loading.gif"></div>');
       $.ajax({
         type: "POST",
         url: siteUrl + '/proxy',
         dataType: "json", 
         data: {method: 'viewLedger',profileId:profileId,keyDate:keyDate},
         success: function (data) 
         {    
             var flag=data.errFlag;
             var data=data.data;
             var paging=data.cnt;
            $('#ledgerDetails').html(data);
            if(paging>=10){
           $('#ledgerReport').DataTable();
           $('#ledgerReport').DataTable( {
                    "bProcessing": false,
                    "sAutoWidth": false,
                    "bDestroy":true,
                    "bPaginate": true, 
                    "bFilter": false,
                    "bInfo": false, 
                    "bSort": false
            } );
        }
              
         }
     });
      
  }
  
  
  
  
    function fillAnnexureType(controlId,typeId,selVal)
    {

       $.ajax({
            type: "POST",
            url: siteUrl + '/proxy',
            dataType: "json",
            data: {method: 'fillAnnexureType',typeId:typeId,selVal:selVal},
            success: function (data) {
                $('#'+controlId).html(data.option); 
            }
        });
    }
    
    function paymentService(tokenNo,categoryId,subCategoryId,userUniqueId,sectorId,plotId)
    {
         viewAlert('Are you sure to pay');
         $.ajax({
            type: "POST",
            url: siteUrl + '/proxy',
            dataType: "json",
            data: {method: 'paymentService', tokenNo:tokenNo,categoryId:categoryId, subCategoryId: subCategoryId, userUniqueId:userUniqueId, sectorId:sectorId,plotId:plotId},
           success: function (data) { 

            if(data.result==1)
            {
               window.location=siteUrl+"/serviceRequest";
            } else {
               viewAlert('Error in Payment');
               return false;
            }  
          }
                
        });
        
    }
  /* Function to get Payment History
     Created by     : Rahul Kumar Saw
     Created On     : 21-05-2018 */ 
     function getPaymentDetails(tokenNo,categoryId,ctrlId)
     {
         $.ajax({
            type     : "POST",
            dataType : "json",
            url      : siteUrl+'/proxy',
            data     : {method:"getPaymentDetails", tokenNo :tokenNo, categoryId :categoryId},
            success  : function(data) 
            {
                var res = data.getPayment;
                   
                $('#myModalLabel').html('Payment Details');
                $("#SuccessMessage").html(res);
            }
         });
     } 
function showMoneyReceipt(tokenNo)
{
   
       $("#receiptTitle").html('Payment Receipt');

       $('#receipt').load(siteUrl+'/moneyServiceReceipt/'+ tokenNo);
}

/* --------------------------------------
     Function to get Details of State 
     Created by     : Arpita Rath
     Created On     : 13-06-2018
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
  
  
  
  
  
  
  
  
  
  
  