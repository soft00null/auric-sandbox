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

// *** Script for get Absolute path and Updated by Sudam Chandra Panda on 28th Jun 2012 ****//
var host = window.location.host;

var pathInfo = window.location.pathname;
//var path		= pathInfo.split("/");
var FN1 = pathInfo.split('/')[1];
var FN2 = pathInfo.split('/')[2];
var url = "https://" + host + "/";
//var appURL = url + 'Application'+ "/"+FN1+ "/";
var appURL = url + 'Application'+ "/";
if(host == 'portallms.auric.city') 
{
	var siteUrl 	= 'https://lms.auric.city/';
	var appURL		= "https://portallms.auric.city";
}
else
{
	var appURL		= url+"Application";
}
	
function loadNavigation(fLink)
{
    var totLink = '';
    var glName = (getCookie("WebGlName") != '' && fLink != 'home') ? getCookie("WebGlName") : 'home';
    var plName = (getCookie("WebPlName") != '' && fLink != 'home') ? getCookie("WebPlName") : '';
    if (plName != '')
        totLink = "<li>" + glName + " </li><li>" + plName + "</li>";
    else
        totLink = " <li class='active'> " + glName + "</li>";

    $('#navigation').html('<li><a href="' + url + '/home" alt="Home" title="" ><i class="ace-icon fa fa-home home-icon"></i></a></li>' + totLink);
    $('#innerPageTitle').html(glName);
    $('#title').html(fLink);
}

// *** Script for Print page and Updated by Sudam Chandra Panda on 22nd Aug 2012 ****//
function PrintPage() {
    var windowName = "PrintPage";
    var wOption = "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    var cloneTable = $("#viewTable").clone();
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
    var pageTitle = $("#title").text();
    var wWinPrint = window.open("", windowName, wOption);
    wWinPrint.document.open();
    wWinPrint.document.write("<html><head><link href='" + url + "css/bootstrap.min.css' rel='stylesheet'><link href='" + url + "css/Print.css' rel='stylesheet'><title></title></head><body>");
    wWinPrint.document.write("<div id='header'><img src='" + url + "/img/AITL-logo.png' border='0' align='absmiddle' alt='Aurangabad Industrial City' class='logo' /><div class='clear'>&nbsp;</div></div>")
    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + cloneTable.html() + "</div>");
    wWinPrint.document.write("<div id='printFooter'>&copy; 2016, Aurangabad Industrial City. All Rights Reserved.</div>");
    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    return wWinPrint;
}

//===================== Function to print modal content By Sunil Kumar Parida On 3-Jan-2015 ==========
function printModal(title, content) {
    var windowName = "PrintPage";
    var wOption = "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    var cloneTable = $("#" + content).clone();
    if (content == 'dispProfile' || content == 'treeDetailsMDiv') {
        cloneTable.find(".form-con").prepend('<div class="header1"><img src="' + url + 'img/AITL-logo.png" border="0" align="absmiddle" alt="Aurangabad Industrial City" class="logo"><div class="clear">&nbsp;</div></div>');
        cloneTable.find(".form-content").show().append('<div style="page-break-after: always;"></div>');
        cloneTable.find(".fa-chevron-down").hide();
        cloneTable.find(".fa-chevron-up").hide();
        var conHt = $("#" + content).height();
        wOption = wOption + "width=1000,height=" + conHt + ",menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    } else {

        var wOption = "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    }
    cloneTable.find('.viewPrint').show();
    cloneTable.find('input[type=text],select,textarea').each(function() {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SELECT')
            var textVal = $(this).find("option:selected").text();
        else
            var textVal = $(this).val();
        $(this).replaceWith('<label>' + textVal + '</label>');
    });
    cloneTable.find('a').each(function() {
        var anchorVal = $(this).html();
        $(this).replaceWith('<label>' + anchorVal + '</label>');
    });
    var pageTitle = $("#" + title).text();
    var wWinPrint = window.open("", windowName, wOption);
    wWinPrint.document.open();
    wWinPrint.document.write("<html><head><link href='" + url + "css/bootstrap.min.css' rel='stylesheet'><link href='" + url + "css/Print.css' rel='stylesheet'><title></title></head><body>");
    wWinPrint.document.write("<div id='header'><img src='" + url + "/img/AITL-logo.png' border='0' align='absmiddle' alt='Aurangabad Industrial City' class='logo' /><div class='clear'>&nbsp;</div></div>")
    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + cloneTable.html() + "</div>");
    wWinPrint.document.write("<div align='center'><a href='javascript:void(0);' class='btn btn-success btn-sm center' onclick='window.print();'>Print</a></div>");
    wWinPrint.document.write("<div id='printFooter'>&copy; 2016, Aurangabad Industrial City. All Rights Reserved.</div>");
    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    return wWinPrint;

}


function printModal2(title, content)
{	//alert(content);
    //var t=document.querySelector("#approvalFormFrame");
    //var page = $('#approvalFormFrame').contents().find('html');
    // alert(t.innerHTML());
    var windowName = "PrintPage";
    var wOption = "";

    var cloneTable = $("#" + content).clone();
    if (content == 'dispProfile') {
        cloneTable.find(".form-content").show();
        cloneTable.find(".fa-chevron-down").hide();
        cloneTable.find(".fa-chevron-up").hide();
        var conHt = $("#" + content).height();
        wOption = wOption + "width=1000,height=" + conHt + ",menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    } else if(content == 'propertyCardDIV') {
        var conHt = $("#" + content).height();
        wOption = wOption + "width=1000,height="+conHt+",menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    }
    else {
        wOption = wOption + "width=1000,height=600,menubar=yes,scrollbars=no,location=no,left=100,top=100";
    }
    
    //var cloneTable =  $( "object" ).find("#"+content).contents();
    //alert(cloneTable);
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
    //alert(vdata);
    wWinPrint.document.write("<html><head><link href='" + appURL + "/css/bootstrap.min.css' rel='stylesheet'><title></title>");
    wWinPrint.document.write("<link href='" + appURL + "/css/print.css' rel='stylesheet'>");
    wWinPrint.document.write("<link href='" + appURL + "/css/font-awesome.css' rel='stylesheet'>");
    wWinPrint.document.write("<script src='" + appURL + "/js/jquery-2.1.1.js' type='text/javascript'></script>");
    wWinPrint.document.write("</head><body>");
    wWinPrint.document.write("<div id='header'><img src='" + appURL + "/img/AITL-Innerlogo.png' border='0' align='absmiddle' alt='Aurangabad Industrial Township Limited' class='logo' /><div class='pull-left text_logo'><h1 class='logo'>Aurangabad Industrial Township Limited<br /><span>e-Land Management System</span></h1></div><a href='javascript:void(0)' title='Print' class='btn btn-success btn-sm pull-right' style='margin-right:10px; margin-top:20px; background-color: #5cb85c;border-width: 1px;font-size: 13px; padding: 4px 9px;color:#fff;text-decoration: none;float: right;border-color: #4cae4c' onclick='$(this).hide();window.print();$(this).show();'><i class='icon-white icon-print'></i> Print</a><div class='clear'>&nbsp;</div></div>")
    //wWinPrint.document.write("<html><head><link href='"+appURL+"/css/print.css' rel='stylesheet'><title></title></head><body>");
    /*wWinPrint.document.write("<div id='header'><img src='"+appURL+"/img/printLogo.png' border='0' align='absmiddle' alt='Department of Town and Country Planning, Himachal Pradesh' class='logo' /><div class='pull-left text_logo'><h1 class='logo'>Department of Town and Country Planning<br /><span>Government of Himachal Pradesh</span></h1></div><div class='clear'>&nbsp;</div></div>")
     */
    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + vdata + "</div>");
    //wWinPrint.document.write("<div id='printFooter'>&copy; 2014-15, Department of Town & country Planning, Himachal Pradesh</div>");
    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    return wWinPrint;



}

function printModal3(title, content)
{	
    var windowName = "PrintPage";
    var wOption = "";

    var cloneTable = $("#" + content).clone();
    cloneTable.find(".noPrint").remove();
    if (content == 'dispProfile') {
        cloneTable.find(".form-content").show();
        cloneTable.find(".fa-chevron-down").hide();
        cloneTable.find(".fa-chevron-up").hide();
        var conHt = $("#" + content).height();
        wOption = wOption + "width=1000,height=" + conHt + ",menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    } else if(content == 'propertyCardDIV') {
        var conHt = $("#" + content).height();
        cloneTable.find(".noPrint").hide();
        wOption = wOption + "width=1000,height="+conHt+",menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    }
    else {
        wOption = wOption + "width=1000,height=600,menubar=yes,scrollbars=no,location=no,left=100,top=100";
    }
    
    //var cloneTable =  $( "object" ).find("#"+content).contents();
    //alert(cloneTable);
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
    
    wWinPrint.document.write("<html><head><link href='" + appURL + "/css/bootstrap.min.css' rel='stylesheet'><title></title>");
    wWinPrint.document.write("<link href='" + appURL + "/css/print.css' rel='stylesheet'>");
    wWinPrint.document.write("<link href='" + appURL + "/css/font-awesome.css' rel='stylesheet'>");
    wWinPrint.document.write("<script src='" + appURL + "/js/jquery-2.1.1.js' type='text/javascript'></script>");
    wWinPrint.document.write("</head><body>");
    wWinPrint.document.write("<div id='printContent'>" + vdata + "</div>");
    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    return wWinPrint;



}

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

/*for surrender print by manali ranjan on 04-01-2019*/
function printModalSurrender(title, content, contentFoot) {
    var windowName = "PrintPage";
    var wOption = "width=1000,height=600,menubar=yes,scrollbars=no,location=no,left=100,top=100";
    var cloneTable = $("#" + content).clone();
    //var cloneTable = $("#" + contentFoot).clone();
    cloneTable.find('input[type=text],select,textarea').each(function() {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SELECT')
            var textVal = $(this).find("option:selected").text();
        else
            var textVal = $(this).val();
        $(this).replaceWith('<label>' + textVal + '</label>');
    });
    cloneTable.find('a').each(function() {
        var anchorVal = $(this).html();
        $(this).replaceWith('<label>' + anchorVal + '</label>');
    });

    var pageTitle = $("#" + title).text();
    var wWinPrint = window.open("", windowName, wOption);
    wWinPrint.document.open();
    var vdata = cloneTable.html();
    var vdataFoot = $("#" + contentFoot).html();
    wWinPrint.document.write("<html><head><link href='" + appURL + "css/print.css' rel='stylesheet'><title></title></head><body>");

    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + vdata + "</div>");
    wWinPrint.document.write("<div style='margin-top:50px;' id='printContent'>" + vdataFoot + "</div>");

    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    //return wWinPrint;
    setTimeout(function() {
        wWinPrint.print();
    }, 500);

}

// ******************** function for Date & Time ********************** //
function dateTime(idVal)
{
    //Set Weedday against current day in numeric
    var WeekDay = new Array(7);
    WeekDay[0] = "Sunday";
    WeekDay[1] = "Monday";
    WeekDay[2] = "Tuesday";
    WeekDay[3] = "Wednesday";
    WeekDay[4] = "Thursday";
    WeekDay[5] = "Friday";
    WeekDay[6] = "Saturday";

    //Set month Name against current Month in numeric 
    var monthName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

    var CurDateTime = new Date();
    //alert(CurDate);
    var curDay = CurDateTime.getDay();
    var curDate = CurDateTime.getDate();
    var curMonth = CurDateTime.getMonth();
    var curYear = CurDateTime.getFullYear();
    var curHH = CurDateTime.getHours();
    var curMM = CurDateTime.getMinutes();
    var curSS = CurDateTime.getSeconds();

    if (curHH >= 12)
    {
        curHH = curHH - 12;
        var Hour = "PM";
    }
    else
        var Hour = "AM";

    if (curMM < 10)
        curMM = '0' + curMM;
    if (curSS < 10)
        curSS = '0' + curSS;

    var date = "<span class='clock'>" + WeekDay[curDay] + ", " + monthName[curMonth] + " " + curDate + ", " + curYear + "  " + curHH + ":" + curMM + ":" + curSS + " " + Hour + "</span>";
    //alert(date)
    $('#' + idVal).html(date);
    setTimeout('dateTime(\'' + idVal + '\')', 1000);
}
//======== Function for set cookie value By Sunil Kumar Parida On 11/09/2014 =========
function setCookie(cname, cvalue, exdays)
{
    removeCookie(cname);
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//======== Function for get cookie value By Sunil Kumar Parida On 11/09/2014 =========
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
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
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
//======== Function for redirect to page By Sunil Kumar Parida On 11/09/2014 =========
function goToPage(page, Gl, Pl, GlName, PlName)
{
    setCookie("WebGlName", Gl, 2);
    setCookie("WebPlName", Pl, 2);
    setCookie("WebGlName", GlName, 2);
    setCookie("WebPlName", PlName, 2);
    window.location.href = page;
}
//scripts for popover
$(function () {
    if ($(".popover-html").length > 0)
        $(".popover-html").popover({html: true});
});


//Function to textcounter.
function TextCounter(ctlTxtName, lblCouter, numTextSize)
{
    var txtName = $('#' + ctlTxtName).val();
    var txtNameLength = txtName.length;
    if (parseInt(txtNameLength) > parseInt(numTextSize))
    {
        var txtMaxTextSize = txtName.substr(0, numTextSize);
        $("#" + ctlTxtName).val(txtMaxTextSize);
        alert("Entered Text Exceeds '" + numTextSize + "' Characters.");
        $("#" + lblCouter).text(0);
        return false;
    }
    else
    {
        $("#" + lblCouter).text(parseInt(numTextSize) - parseInt(txtNameLength));
        return true;

    }
}
/* --------------------------------------
 Function to Load Industrial Area
 Created by     : Sonali Satapathy
 Created On     : 06-Oct-2016
 * -------------------------------------- */
function IndustrialArea(controllerId, selVal)
{
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "IndustrialArea", selVal: selVal},
        success: function (data)
        {
            var res = data.IndustrialArea;

            $('#selInArea').html(res);
        }
    });

}
function getPdf(pfile) {
    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'pdfForcedwn', pfile: pfile},
        success: function (data) {
            alert(1);
        }
    });

}
/*
 Function to generate Payment Pdf.
 By: Sonali Satapathy
 On: 25-Nov-2017
 */
function genrtPaymentPdf(strUniqId, industrialArea, appLandsq, propertyCategory, strMobileNo, landsqmRate, appName, landCost, processFee, tokenAmt, totPayments, remainingAmt, plotNo, sectorNo,frontage,corner,frontageV,cornerV)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtPaymentPdf', strUniqId: strUniqId, industrialArea: industrialArea, appLandsq: appLandsq,
            propertyCategory: propertyCategory, strMobileNo: strMobileNo, landsqmRate: landsqmRate, appName: appName, landCost: landCost,
            processFee: processFee, tokenAmt: tokenAmt, totPayments: totPayments, remainingAmt: remainingAmt, plotNo: plotNo, sectorNo: sectorNo,frontage:frontage,corner:corner,frontageV:frontageV,cornerV:cornerV},
        success: function (data) {
            var data_ul = url + 'uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank',
                href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

/*
 Function to generate Bop Payment Pdf.
 By: Abhiram Samantara
 On: 26-Dec-2016
 */
function genrtBopPaymentPdf(strUniqId, industrialArea, appLandsq, propertyCategory, strMobileNo, landsqmRate, appName, landCost, remainingAmt, plotNo, sectorNo,payDate)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtBopPaymentPdf', strUniqId: strUniqId, industrialArea: industrialArea, appLandsq: appLandsq,
            propertyCategory: propertyCategory, strMobileNo: strMobileNo, landsqmRate: landsqmRate, appName: appName, landCost: landCost, remainingAmt: remainingAmt, plotNo: plotNo, sectorNo: sectorNo,payDate:payDate},
        success: function (data) {
            var data_ul = url + 'uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank',
                href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}
/* --------------------------------------
 Function to Load Property Type 
 Created by     : Sonali Satapathy
 Created On     : 06-Oct-2016
 * -------------------------------------- */
function fillAnexure(controllerId, typeId, selVal, parentId)
{
    $('#' + controllerId + ' option').not(":first").remove();
    parentId = (typeof (parentId) == 'undefined' || parentId == '') ? 0 : parentId;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "fillAnexure", typeId: typeId, selVal: selVal, parentId: parentId},
        success: function (data)
        {
            var res = data.anexure;
            //alert(res);
            $('#' + controllerId).html(res);
        }
    });

}
/* --------------------------------------
 Function to Load All Countries  
 Created by     : Abhiram Samantara
 Created On     : 07-Oct-2016
 * -------------------------------------- */
function fillCountry(selval, controlId) {
    $('#' + controlId + ' option').not(":first").remove();
    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'fillCountry', selVal: selval},
        success: function (data) {
            var res = data.countryProp;
            $("#" + controlId).html(res);
        }
    });
}
/* --------------------------------------
 Function to Load States  
 Created by     : Abhiram Samantara
 Created On     : 07-Oct-2016
 * -------------------------------------- */
function fillState(selval, countryVal, controlId) {

    $('#' + controlId + ' option').not(":first").remove();
    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'fillState', countryVal: countryVal, selVal: selval},
        success: function (data) {
	    
            var res = data.stateProp;
            $("#" + controlId).html(res);
        }
    });

}

/* --------------------------------------
 Function to Load States  
 Created by     : Abhiram Samantara
 Created On     : 07-Oct-2016
 * -------------------------------------- */
function fillStateIND(selval, countryVal, controlId) {
    $('#' + controlId + ' option').not(":first").remove();
    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'fillStateIND', countryVal: countryVal, selVal: selval},
        success: function (data) {
            var res = data.stateProp;
            $("#" + controlId).html(res);
        }
    });

}


/*
 * Function to fill District
 * By : Rasmi ranajn  Swain
 * On : 13-April-2015
 */
function fillDistrict(Stateid, selval, controlId)
{
    $("#" + controlId + " option").not(':first').remove();
    if (Stateid > 0)
    {
        $.ajax({
            type: "POST",
            url: url + '/proxy',
            dataType: "json",
            data: {method: 'fillDistrict', sID: Stateid, selVal: selval},
            success: function (data) {
                var res = data.result;
                $("#" + controlId).html(res);
            }
        });
    }
}



function fillTehsil(distid, selval, controlId)
{
    if (distid == 0)
    {
        $("#" + controlId).html('<option value="0">--Select-</option>');
    }
    else
    {
        $.ajax({
            type: "POST",
            url: url + '/proxy',
            dataType: "json",
            data: {method: 'fillTehsil', distId: distid, selVal: selval},
            success: function (data) {
                var res = data.result;
                $("#" + controlId).html(res);
            }
        });
    }
}


/* --------------------------------------
 Function to Fill Country Code  
 Created by     : Abhiram Samantara
 Created On     : 11-Nov-2016
 * -------------------------------------- */
function fillCountryCode(countryId, controlId) {
    $("#" + controlId).val('');
    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'fillCountryCode', countryId: countryId},
        success: function (data) {
            var res = data.countryCode;
            $("#" + controlId).val(res);
        }
    });

}
/* --------------------------------------
 Function to Load Property Type 
 Created by     : Sonali Satapathy
 Created On     : 12-Oct-2016
 * -------------------------------------- */
function fillIndustry(controllerId, selVal)
{
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "fillIndustry", selVal: selVal},
        success: function (data)
        {
            var res = data.industryType;
            //alert(res);
            $('#' + controllerId).html(res);
        }
    });

}
/* --------------------------------------
 Function to Load Educational Qualification  
 Created by     : Abhiram Samantara
 Created On     : 12-Oct-2016
 * -------------------------------------- */
function fillEdQualAnexure(selval, controllerId)
{
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "fillEdQualAnexure", selVal: selval},
        success: function (data)
        {
            var res = data.edQualProp;
            $('#' + controllerId).html(res);
        }
    });

}
/* --------------------------------------
 Function to Load Special Category  
 Created by     : Abhiram Samantara
 Created On     : 12-Oct-2016
 * -------------------------------------- */
function fillSpclCatAnexure(selval, controllerId)
{
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "fillSpclCatAnexure", selVal: selval},
        success: function (data)
        {
            var res = data.spclCatProp;
            $('#' + controllerId).html(res);
        }
    });

}
/* --------------------------------------
 Function to Load Constitution Type 
 Created by     : Abhiram Samantara
 Created On     : 12-Oct-2016
 * -------------------------------------- */
function fillConstTypeAnexure(selval, controllerId)
{
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "fillConstTypeAnexure", selVal: selval},
        success: function (data)
        {
            var res = data.constTypeProp;
            $('#' + controllerId).html(res);
        }
    });

}

/* --------------------------------------
 Function to Upload File to Temporary Folder 
 Created by     : Abhiram Samantara
 Created On     : 14-Oct-2016
 * -------------------------------------- */
function uploadFileToTempFolder(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId) {



    if (!IsCheckFile(filename, 'Invalid file format.', fileType)) {
        //scrollToPosition(filename);
        $("#" + filename).val('');
        $("#" + hdnFilename).val('');
        return false;
    }
    if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        $("#" + hdnFilename).val('');
        return false;
    }
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
    /*******Check whether the file is being uploaded or not********/
    $.ajaxFileUpload({
        url: url + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadFileToTempFolder', filename: filename, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {
            $("#" + hdnFilename).val(data.savedFileName);
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#" + linkId).show();

            if (spanId) {
                $("#" + spanId).closest("div.form-group").find('.docName').html(uploadFileName);
                $("#" + linkId + " a").show().attr('href', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).show();
            } else {
                $("#" + linkId).show().attr('src', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).show();
            }
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
        error: function (data, status, e) {
            alert(e);
        }
    });
    return false;
}


/*
 Function to check duplicate Email-id
 By: T Ketaki Debadarshini 
 On: 17-Oct-2016
 */
function checkDuplicatemail(emailId)
{

    $.ajax({
        type: "POST",
        url: url + '/proxy',
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
 Function to check duplicate Email-id
 By: T Ketaki Debadarshini 
 On: 17-Oct-2016
 */
function checkDuplicatMobile(mobNo)
{
    if (mobNo != '') {
        $(".errMob").hide();
        $.ajax({
            type: "POST",
            url: url + '/proxy',
            dataType: "json",
            data: {method: 'checkDuplicatMobile', mobNo: mobNo},
            success: function (data) {

                var res = data.dupStatus;
                $("#mobFlag").val(res);
                if (Number(res) > 0) {
                    $(".errMob").show().html("Mobile Number Already Exists");
                    $("[name='btnSubmit']").attr('disabled', 'disabled');
                    $("[name='btnNext']").attr('disabled', 'disabled');
                } else {
                    $(".errMob").hide();
                    $("[name='btnSubmit']").removeAttr('disabled');
                    $("[name='btnNext']").removeAttr('disabled');
                }
            }

        });
    } else {
        $(".errMob").hide();
    }

}

/*
 Function to update profile picture
 By: Abhiram Samantara 
 On: 19-Oct-2016
 */
function updateProfilePic(profileid, uniqueId, profilePic, fileType, loadingId, fileSize, errMsgSize, mbKbType, linkId)
{
    if (!IsCheckFile(profilePic, 'Invalid File Type', fileType)) {
        scrollToPosition(profilePic);
        $("#" + profilePic).val('');
        return false;
    }
    if (!chkFileSize(profilePic, fileSize, errMsgSize, mbKbType)) {
        $("#" + profilePic).val('');
        return false;
    }
    $("#" + loadingId).show();

    $.ajaxFileUpload({
        url: url + '/proxy',
        secureuri: false,
        fileElementId: profilePic,
        dataType: 'json',
        data: {method: 'updateProfilePic', profileid: profileid, uniqueId: uniqueId, profilePic: profilePic},
        success: function (data) {
            $("#" + loadingId).hide();
            $("#" + linkId).attr('src', url + "uploadDocuments/" + uniqueId + "/" + data.savedFileName);
        },
        error: function (data, status, e) {
            alert(e);
        }
    });
}
/*
 Function to show Tooltip
 By: Abhiram Samantara 
 On: 05-Nov-2016
 */
function showTooltip(ctrlId, msg) {

    if (!$('#' + ctrlId).data('tooltip')) {
        $('#' + ctrlId).tooltip({
            html: true,
            placement: 'top',
            title: '<p align="left">' + msg + '</p>'
        });
    }
}

/*Function to show indian money format
 By Sunil Kumar Parida 
 On 08-Nov-2016
 */
function custom_money_format(price)
{
    if (price != '')
    {
        price = price.replace(/,/g, "");
        var afterPoint = '.00';
        if (price.indexOf('.') > 0) {
            afterPoint = price.substring(price.indexOf('.'), price.length);
            afterPoint = '.' + afterPoint.substring(1, 3);
        }
        price = Math.floor(price);
        price = price.toString();
        var lastThree = price.substring(price.length - 3);
        var otherNumbers = price.substring(0, price.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    }
    else
    {
        var res = '';
    }
    return res;
}
/*
 Function to update profile status
 By: Abhiram Samantara
 On: 14-Nov-2016
 */
function updateProfileStatus(redUrl, profId, appStatus)
{

    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'updateProfileStatus', profId: profId, appStatus: appStatus},
        success: function (data) {

            var res = data.result;
            if (res) {
                window.location.href = redUrl;
            } else {
                alert(res);
            }
        }

    });
}
function convertToLbl(controlId) {
    /*$(".input-group-addon,.btn,.sizeMsg").not('.logBtn').remove();
    $("#" + controlId).find('input[type=text],select,textarea').each(function () {
        var elementType = $(this).prop('tagName');

        if (elementType == 'SELECT')
            var textVal = $(this).find("option:selected").text();
        else
            var textVal = $(this).val();

        $('.form-group div').find(".input-group").removeClass("input-group");

        $(this).replaceWith('<label title="'+textVal+'" class="form-control ' + $(this).attr('class') + '" style="overflow:hidden;' + $(this).attr('style') + '">' + textVal + '</label>');



        //$(elementType).attr("disabled","disabled");
        //$('.lblArea').attr("disabled","disabled");
    });
    $("#" + controlId).find('input[type=radio],input[type=checkbox],input[type=file]').each(function () {
        var elementType = $(this).prop('type');
        if (elementType == 'file') {
            //$(this).closest('div').removeClass('col-sm-4').addClass('col-sm-1');
            $(this).remove();
        }
        if (elementType == 'radio' || elementType == 'checkbox') {
            if ($(this).is(':checked')) {
                var textVal = $(this).closest('.radio').find('.lbl').text();
                $(this).closest('div.radio').removeClass('radio');
                $(this).closest('label').replaceWith('<label class="form-control">' + textVal + '</label>');
            } else {
                $(this).closest('div.radio').remove();
            }

        }

    });
    $("#" + controlId).find('.txtCount,.mandatory,.hlpICN').each(function () {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SPAN' || elementType == 'LABEL' || elementType == 'I') {
            $(this).remove();
        }
    });*/
    $("#rightLoad").hide();
    $("#rightCon").show();
}
function convertToLblReadOnly(controlId) {
    $("#" + controlId).find('input[type=text],select,textarea').each(function () {
        var elementTag = $(this).prop('tagName');
        if (elementTag == 'SELECT') {
            $("#" + controlId).append("<input type='hidden' name='" + $(this).attr('id') + "' id='" + $(this).attr('id') + "' value='" + $(this).val() + "'/>");
            $("#" + controlId).find('SELECT').attr("disabled", "disabled");
        } else {
            $(this).attr("readonly", "readonly");
        }

        $('.lblArea').attr("disabled", "disabled");
    });
    $("#" + controlId).find('input[type=radio],input[type=checkbox],input[type=file]').each(function () {
        var elementType = $(this).prop('type');
        if (elementType == 'file') {
            $(this).remove();
        }
        if (elementType == 'radio' || elementType == 'checkbox') {
            if ($(this).is(':checked')) {
                $(this).attr('type', 'hidden');
                $(this).closest(".radio").attr("readonly", "readonly");
                $(this).closest(".radio").attr('class', 'form-control');
            } else {
                $(this).closest(".radio").remove();
                $(this).remove();
            }
            $(this).attr("readonly", "readonly");
        }

    });
    $("#" + controlId).find('.txtCount,.mandatory,.hlpICN').each(function () {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SPAN' || elementType == 'LABEL' || elementType == 'I') {
            $(this).remove();
        }
    });
}
function continueSession() {
    $.ajax({
        type: "POST",
        url: url + 'checkSession',
        dataType: "json",
        data: {contSess: 1},
        success: function (data) {
            var res = data.result;
            if (res) {
                //console.log(data.sessExp+'-'+data.sessNow);
                $('#inactiveModal').modal('hide');
                clearInterval(interval);
                stopUnixTimer();
                startUnixTimer();
                CheckIdleTime();
            }
        }

    });
}
/*
 Function to fill plot no
 By: Rasmi Ranjan Swain
 On: 06-NOV-2016
 */
function fillAvailablePlot(fillCtrl, selVal, propertyType, plotSize, sectorId)
{

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'fillAvailablePlot', selVal: selVal, propertyType: propertyType, plotSize: plotSize, sectorId: sectorId},
        success: function (data) {
            $('#' + fillCtrl).html(data.plotNo);
            if (selVal > 0)
            {
                var landArea = $('#' + fillCtrl).find(':selected').data('area');
                $('#' + fillCtrl).closest('.form-group').find('.lblArea').text(landArea);
            }
        }
    });

}

/*
 Function to fill Sector Master
 By: Rasmi Ranjan Swain
 On: 25-NOV-2016
 */
function fillSector(fillCtrl, selVal, industryType)
{

    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'fillSectorDeatils', SelVal: selVal, industryType: industryType},
        success: function (data) {
            $('#' + fillCtrl).html(data.stector);
        }
    });

}

/* --------------------------------------
 Function to Load permission annexures
 Created by     : T Ketaki Debadarshini
 Created On     : 03-Dec-2016
 * -------------------------------------- */
function getPermissionAnnexureComponent(controllerId, typeId, selVal, parentId)
{
    $('#' + controllerId + ' option').not(":first").remove();
    parentId = (typeof (parentId) == 'undefined' || parentId == '') ? 0 : parentId;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "getPermissionAnnexureComponent", typeId: typeId, selVal: selVal, parentId: parentId},
        success: function (data)
        {
            var res = data.anexure;
            //alert(res);
            $('#' + controllerId).html(res);

            var intCount = 0;
            if (typeId == 4) {
                $(".clsParticulars").each(function () {
                    intCount++;

                    if (intCount > 1)
                        $(this).html($('#selParticulars_1').html());

                    $(this).val($('#hidSelParticular_' + intCount).val());
                });
            }

            var intflrCount = 0;
            if (typeId == 17) {
                $(".selFloorType").each(function () {
                    intflrCount++;

                    if (intflrCount > 1)
                        $(this).html($('#selFloorType1_1').html());

                    $(this).val($(this).closest('tr').find(".clsHidFloorType").val());
                });
            }
            var inttypCount = 0;
            if (typeId == 18) {
                $(".useType").each(function () {
                    inttypCount++;

                    if (inttypCount > 1)
                        $(this).html($('#selUseType1_1').html());

                    $(this).val($(this).closest('tr').find(".clsHidUseType").val());
                });
                $( ".selFloorOccupType" ).each(function() {
                     intflrCount++;

                     if(intflrCount>1)
                        $(this).html($('#selFloorOccupType1').html());

                    $(this).val($(this).closest('tr').find(".flooroccpclass").val());  
                });
            }
            if (typeId == 12) {
                $(".selfloor").each(function () {
                    intflrCount++;

                    if (intflrCount > 1)
                        $(this).html($('#selfloor1').html());

                    $(this).val($(this).closest('tr').find(".floorclass").val());
                });
            }
            
        }
    });

}
function getPermissionAnnexureComponentN(controllerId, typeId, selVal, parentId)
{
    $('#' + controllerId + ' option').not(":first").remove();
    parentId = (typeof (parentId) == 'undefined' || parentId == '') ? 0 : parentId;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "getPermissionAnnexureComponent", typeId: typeId, selVal: selVal, parentId: parentId},
        success: function (data)
        {
            var res = data.anexure;
            //alert(res);
            $('#' + controllerId).html(res);

            var intCount = 0;
            if (typeId == 4) {
                $(".clsParticulars").each(function () {
                    intCount++;

                    if (intCount > 1)
                        $(this).html($('#selParticulars_1').html());

                    $(this).val($('#hidSelParticular_' + intCount).val());
                });
            }

            var intflrCount = 0;
            if (typeId == 17) {
                $(".selFloorType").each(function () {
                    intflrCount++;

                    if (intflrCount > 1)
                        $(this).html($('#selFloorType1_1').html());

                    $(this).val($(this).closest('tr').find(".clsHidFloorType").val());
                });
            }
            var inttypCount = 0;
            
            if (typeId == 12) {
                $(".selfloorE").each(function () {
                    intflrCount++;

                    if (intflrCount > 1)
                        $(this).html($('#selfloorE1').html());

                    $(this).val($(this).closest('tr').find(".floorclassE").val());
                });
            }
            if(typeId==18){                           
                $( ".selFloorOccupTypeE" ).each(function() {
                     intflrCount++;

                     if(intflrCount>1)
                        $(this).html($('#selFloorOccupTypeE1').html());

                    $(this).val($(this).closest('tr').find(".flooroccpclassE").val());  
                });
            }
        }
    });

}

/*
 Function to generate Water power Payment Pdf.
 Created by     : T Ketaki Debadarshini
 Created On     : 07-Dec-2016
 */
function genrtWaterPowerPaymentPdf(strUniqId, intPermissionId, decPowerpayment, decWaterpayment, strReferenceNo, appName, totPayments, intsuplyType, suplyType)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtWaterPowerPaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId, decPowerpayment: decPowerpayment, decWaterpayment: decWaterpayment,
            strReferenceNo: strReferenceNo, appName: appName, totPayments: totPayments, intsuplyType: intsuplyType, suplyType: suplyType},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

/*
 Function to check duplicate Architect Email-id
 By: T Ketaki Debadarshini 
 On: 08-Dec-2016
 */
function checkDuplicatArchemail(emailId)
{
    if (emailId != '') {
        $.ajax({
            type: "POST",
            url: url + '/proxy',
            dataType: "json",
            data: {method: 'checkDuplicatArchemail', Email: emailId},
            success: function (data) {

                var res = data.dupStatus;  //console.log(res);
                $("#mailFlag").val(res);
                if (Number(res) > 0) {
                    $(".errMail").show().html("Email ID Already in Use");
                    $("[name='btnRegister']").attr('disabled', 'disabled');
                } else {
                    $(".errMail").hide();
                    $("[name='btnRegister']").removeAttr('disabled');
                }
            }

        });
    }
}
/*
 Function to check duplicate Architect Mobile no
 By: T Ketaki Debadarshini 
 On: 08-Dec-2016
 */
function checkDuplicatArchMobile(mobNo)
{
    if (mobNo != '') {
        $.ajax({
            type: "POST",
            url: url + '/proxy',
            dataType: "json",
            data: {method: 'checkDuplicatArchMobile', mobNo: mobNo},
            success: function (data) {

                var res = data.dupStatus;
                $("#mobFlag").val(res);
                if (Number(res) > 0) {
                    $(".errMob").show().html("Mobile Number Already Exists");
                    $("[name='btnRegister']").attr('disabled', 'disabled');
                } else {
                    $(".errMob").hide();
                    $("[name='btnRegister']").removeAttr('disabled');
                }
            }

        });
    }

}
/*
 Function to generate Water power Payment Pdf.
 Created by     : Chinmayee
 Created On     : 09-Dec-2016
 */
function genrtNOCfirePaymentPdf(strUniqId, intPermissionId, strMobileNo, appName, totPayments, appliedArea, appliedFloors)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtNOCfirePaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId,
            strMobileNo: strMobileNo, appName: appName, totPayments: totPayments, appliedArea: appliedArea, appliedFloors: appliedFloors},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}


/* --------------------------------------
 Function to Upload File to Temporary Folder 
 Created by     : Abhiram Samantara
 Created On     : 16-Jan-2017
 * -------------------------------------- */
function archCertuploadFileToTempFolder(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId) {


    if (!IsCheckFile(filename, 'Invalid file types.', fileType)) {
        scrollToPosition(filename);
        $("#" + hdnFilename).val('');
        return false;
    }
    if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        $("#" + hdnFilename).val('');
        return false;
    }
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
    /*******Check whether the file is being uploaded or not********/
    $.ajaxFileUpload({
        url: url + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadFileToTempFolder', filename: filename, hdnFormName: hdnFormName},
        success: function (data) {
            $("#" + hdnFilename).val(data.savedFileName);
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#" + linkId).show();

            $("#" + linkId).closest(".clsAlldocfile").find('.docName').html(data.savedFileName);
            $("#" + linkId).closest(".clsAlldocfile").find('.docName').show();

            if (spanId) {
                //  $("#"+spanId).closest("div.form-group").find('.docName').html(uploadFileName);
                $("#" + linkId + " a").show().attr('href', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).show();
            } else {
                $("#" + linkId).show().attr('src', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).show();
            }
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
        error: function (data, status, e) {
            alert(e);
        }
    });
    return false;
}

/* --------------------------------------
 Function to Upload File to Temporary Folder 
 Created by     : T Ketaki Debadarshini
 Created On     : 12-Dec-2016
 * -------------------------------------- */
function nocuploadFileToTempFolder(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId) {

    if (!IsCheckFile(filename, 'Invalid file types.', fileType)) {
        scrollToPosition(filename);
        $("#" + hdnFilename).val('');
        $("#" + filename).val('');
        $("#"+linkId).find('a').hide();
        $("#"+linkId).find('.docName').html('');
        $("#"+spanId).hide();
        return false;
    }
    if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        scrollToPosition(filename);
        $("#" + hdnFilename).val('');
        $("#" + filename).val('');
        $("#"+linkId).find('a').hide();
        $("#"+linkId).find('.docName').html('');
        $("#"+spanId).hide();
        return false;
    }
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
    /*******Check whether the file is being uploaded or not********/
    $.ajaxFileUpload({
        url: url + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadFileToTempFolder', filename: filename, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {
            $("#" + hdnFilename).val(data.savedFileName);
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#" + linkId).show();

            $("#" + linkId).closest(".clsAlldocfile").find('.docName').html(data.savedFileName);
            $("#" + linkId).closest(".clsAlldocfile").find('.docName').show();

            if (spanId) {
                //  $("#"+spanId).closest("div.form-group").find('.docName').html(uploadFileName);
                $("#" + linkId + " a").show();
                $("#" + linkId + " a").not('.clearDocs').attr('href', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).show();
            } else {
                $("#" + linkId).show().attr('src', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).show();
            }
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
        error: function (data, status, e) {
            alert(e);
        }
    });
    return false;
}


/*
 Function to get architect details
 Created by     : T Ketaki Debadarshini
 Created On     : 13-Dec-2016
 */
function getArchitectDetails(strArchitectname, selLandid)
{
    if (strArchitectname != '') {

        if (!checkSpecialChar('txtArchName_' + selLandid))
            return false;

        $('.architectInfo_' + selLandid).show();
        $('#hidArchId_' + selLandid).val(0);
        $.ajax({
            type: "POST",
            url: url + 'proxy',
            dataType: "json",
            data: {method: 'getArchitectDetails', strArchitectname: strArchitectname, selLandid: selLandid},
            success: function (data) {

                if (data.archDetails)
                    $(".architectInfo_" + selLandid).html(data.archDetails);
                else {
                    $(".architectInfo_" + selLandid).html('No match found');
                    $('#hidArchId_' + selLandid).val(0);
                }
            }
        });
    } else {
        $('#hidArchId_' + selLandid).val(0);
    }

}

/*
 Function to get structure engineer details
 Created by     : Abhiram Samantara
 Created On     : 17-Mar-2017
 */
function getStructureEngineertDetails(strArchitectname, selLandid)
{
    if (strArchitectname != '') {

        if (!checkSpecialChar('txtArchName_' + selLandid))
            return false;

        $('.architectInfo_' + selLandid).show();
        $('#hidArchId_' + selLandid).val(0);
        $.ajax({
            type: "POST",
            url: url + 'proxy',
            dataType: "json",
            data: {method: 'getStructureEngineertDetails', strArchitectname: strArchitectname, selLandid: selLandid},
            success: function (data) {

                if (data.archDetails)
                    $(".architectInfo_" + selLandid).html(data.archDetails);
                else {
                    $(".architectInfo_" + selLandid).html('No match found');
                    $('#hidArchId_' + selLandid).val(0);
                }
            }
        });
    } else {
        $('#hidArchId_' + selLandid).val(0);
    }

}


/*
 Function to show architect details
 Created by     : T Ketaki Debadarshini
 Created On     : 13-Dec-2016
 */
function showArchitectdetails(selEml, selLandid)
{

    var dispArch = '';
    dispArch += '<div class="form-group " >';
    dispArch += '    <label class="col-sm-3 control-label no-padding-right ">Name</label>';
    dispArch += '     <div class="col-sm-3 " > <span class="colon">:</span>';
    dispArch += '        <label class="control-label no-padding-right">' + $(selEml).data("arch") + '</label>';
    dispArch += '     </div>';
    dispArch += ' <label class="col-sm-3 control-label no-padding-right">Registration No.</label>';
    dispArch += '     <div class="col-sm-3"> <span class="colon">:</span>';
    dispArch += '        <label class="control-label no-padding-right">' + $(selEml).data("unique") + '</label>';
    dispArch += '     </div>';
    dispArch += ' </div>';
    dispArch += ' <div class="form-group " >';
    dispArch += '    <label class="col-sm-3 control-label no-padding-right showArch">Mobile No.</label>';
    dispArch += '    <div class="col-sm-3 " > <span class="colon">:</span>';
    dispArch += '        <label class="control-label no-padding-right">+91-' + $(selEml).data("mob") + '</label>';
    dispArch += '    </div>';
    dispArch += '   <label class="col-sm-3 control-label no-padding-right" >eMail Id</label>';
    dispArch += '   <div class="col-sm-3"> <span class="colon">:</span>';
    dispArch += '       <label class="control-label no-padding-right">' + $(selEml).data("mail") + '</label>';
    dispArch += '    </div>';
    dispArch += ' </div>';

    if ($(selEml).data("addr")) {
        dispArch += '<div class="form-group " >';
        dispArch += '    <label class="col-sm-3 control-label no-padding-right" >Address</label>';
        dispArch += '    <div class="col-sm-3"> <span class="colon">:</span>';
        dispArch += '       <label class="control-label no-padding-right">' + $(selEml).data("addr") + '</label>';
        dispArch += '    </div>';
        dispArch += '</div>';
    }

    var archtDetails = $(selEml).data("arch") + '(' + $(selEml).data("unique") + ')';

    $('.architectInfo_' + selLandid).hide();
    $('.showArch_' + selLandid).html(dispArch);
    $('.showArchName_' + selLandid).html($(selEml).data("arch"));
    $('.showArch_' + selLandid).show();
    $('#txtArchName_' + selLandid).val(archtDetails);
    $('#hidArchId_' + selLandid).val(selEml.value);


}

/*
 Function to show architect details
 Created by     : T Ketaki Debadarshini
 Created On     : 13-Dec-2016
 */
function showStructureEngineerdetails(selEml, selLandid)
{

    var dispArch = '<table class="table table-bordered">';
    dispArch += '<tr>';
    dispArch += '    <td width="19%">Name</td>';
    dispArch += '    <td width="5">:</td>';
    dispArch += '    <td>' + $(selEml).data("arch") + '</td>';
    dispArch += '    <td width="19%">Registration No.</td>';
    dispArch += '    <td width="5">:</td>';
    dispArch += '    <td>' + $(selEml).data("unique") + '</td>';
    dispArch += '</tr>';
    dispArch += ' <tr>';
    dispArch += '    <td>Mobile No.</td>';
    dispArch += '    <td width="5">:</td>';
    dispArch += '    <td>+91-' + $(selEml).data("mob") + '</td>';
    dispArch += '    <td>eMail Id</td>';
    dispArch += '    <td width="5">:</td>';
    dispArch += '    <td>' + $(selEml).data("mail") + '</td>';
    dispArch += ' </tr>';

    if ($(selEml).data("addr")) {
        dispArch += '<tr>';
        dispArch += '    <td>Address</td>';
        dispArch += '    <td width="5">:</td>';
        dispArch += '    <td colspan="4">' + $(selEml).data("addr") + '</td>';
        dispArch += '</tr>';
    }
    dispArch += ' </table>';
    var archtDetails = $(selEml).data("arch") + '(' + $(selEml).data("unique") + ')';

    $('.architectInfo_' + selLandid).hide();
    $('.showArch_' + selLandid).html(dispArch);
    $('.showArch_' + selLandid).show();
    $('#txtArchName_' + selLandid).val(archtDetails);
    $('#hidArchId_' + selLandid).val(selEml.value);
    $("#assignBtnDIV").show();
    $(".otherStructureEng").hide();
}
/*
 Function to show architect details
 Created by     : T Ketaki Debadarshini
 Created On     : 13-Dec-2016
 */
function showOtherStructureEngineer(selLandid)
{
    
    $('.architectInfo_' + selLandid).hide();
    $('.showArch_' + selLandid).hide();
    $('#txtArchName_' + selLandid).val('Other Structure Engineer');
    $('#hidArchId_' + selLandid).val('0');
    $("#assignBtnDIV").hide();
    $(".otherStructureEng").show();
}
/*
 Function to generate building permission Pdf.
 Created by     : T Ketaki Debadarshini
 Created On     : 14-Dec-2016
 Updated By     : 15-Dec-2017
 Updated By     : Pusparani Mandal On 23-Aug-2018
 */
function genrtBuildingplanPaymentPdf(strUniqId, intPermissionId, decApplicationpayment, decArea, appName, totPayments, strRefenceno,scrutinyType,scrutinyFee,tinConstType,decBuildingplanPayment,tinWallChargeType,workersWelFareFee,securityFee,firePaymentFee,actualPayment,compundWallChargesApply,compundWallCharges)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtBuildingplanPaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId, decApplicationpayment: decApplicationpayment, decArea: decArea,
            appName: appName, totPayments: totPayments, strRefenceno: strRefenceno,scrutinyType:scrutinyType,scrutinyFee:scrutinyFee,tinConstType:tinConstType,decBuildingplanPayment:decBuildingplanPayment,tinWallChargeType:tinWallChargeType,workersWelFareFee:workersWelFareFee,securityFee:securityFee,firePaymentFee:firePaymentFee,actualPayment:actualPayment,compundWallChargesApply:compundWallChargesApply,compundWallCharges:compundWallCharges},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}



/*
 Function to generate ARCHITECT Payment Pdf.
 Created by     : Chinmayee
 Created On     : 16-Dec-2016
 */
function genrtArchPaymentPdf(strUniqId, intPermissionId, strMobileNo, appName, totPayments, totPaymentsA, totPaymentsB, totPaymentsC)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtArchPaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId,
            strMobileNo: strMobileNo, appName: appName, totPayments: totPayments, totPaymentsA: totPaymentsA, totPaymentsB: totPaymentsB, totPaymentsC: totPaymentsC},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

/*
 Function to generate building permission Pdf.
 Created by     : T Ketaki Debadarshini
 Created On     : 14-Dec-2016
 */
function genrtDrainagePaymentPdf(strUniqId, intPermissionId, decApplicationpayment, decDrainageConnCharge, strConnectionType, appName, totPayments, strRefenceno)
{
    //alert(strUniqId+'--'+intPermissionId+'--'+decApplicationpayment+'--'+decDrainageConnCharge+'--'+strConnectionType+'--'+appName+'--'+totPayments+'--'+strRefenceno);
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtDrainagePaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId, decDrainageConnCharge: decDrainageConnCharge, decApplicationpayment: decApplicationpayment, strConnectionType: strConnectionType,
            appName: appName, totPayments: totPayments, strRefenceno: strRefenceno},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

/*
 Function to generate building permission Pdf.
 Created by     : T Ketaki Debadarshini
 Created On     : 14-Dec-2016
 */
function genrtWatersupplyPaymentPdf(strUniqId, intPermissionId, decApplicationpayment, strConnectionType, appName, totPayments, strRefenceno, decWaterRequirement, strMeterType)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtWatersupplyPaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId, decApplicationpayment: decApplicationpayment, strConnectionType: strConnectionType,
            appName: appName, totPayments: totPayments, strRefenceno: strRefenceno, decWaterRequirement: decWaterRequirement, strMeterType: strMeterType},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}
/*
 Function to generate building permission Pdf.
 Created by     : T Ketaki Debadarshini
 Created On     : 14-Dec-2016
 */
function genrtWaterPowersupplyPaymentPdf(strUniqId, intPermissionId, decApplicationpayment, strConnectionType, appName, totPayments, strRefenceno, decWaterRequirement, strMeterType)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtWaterPowersupplyPaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId, decApplicationpayment: decApplicationpayment, strConnectionType: strConnectionType,
            appName: appName, totPayments: totPayments, strRefenceno: strRefenceno, decWaterRequirement: decWaterRequirement, strMeterType: strMeterType},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

/*
 Function to generate building permission Pdf.
 Created by     : T Ketaki Debadarshini
 Created On     : 14-Dec-2016
 */

function genrtBuildingCompPaymentPdf(strUniqId, intPermissionId, appName, totPayments, strRefenceno)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtBuildingCompPaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId,
            appName: appName, totPayments: totPayments, strRefenceno: strRefenceno},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}




/*
 Function to get payment details.
 Created by     : Abhiram Samantara
 Created On     : 07-Jan-2017
 */
function getAllPaymentDetails(ctrlId, profileId, landAppId)
{

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'getAllPaymentDetails', profileId: profileId, landAppId: landAppId},
        success: function (data) {
            $("#" + ctrlId).html(data.details);

            $('#mobHlp').tooltip({
                    html: true,
                    placement: 'top',
                    title: '<table width="100%" class="text-left"><tr><td>Processing Fee</td><td><i class="fa fa-inr"></i> '+data.totProcessingFee+'</td></tr><tr><td>CGST</td><td><i class="fa fa-inr"></i> '+data.cgstAmount+'</td></tr><tr><td>SGST</td><td><i class="fa fa-inr"></i> '+data.sgstAmount+'</td></tr></table>'
            });
        }
    });
}
/*
 Function to get payment details.
 Created by     : Abhiram Samantara
 Created On     : 07-Jan-2017
 */
function getAllPaymentDetailsN(ctrlId, profileId, landAppId)
{

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'getAllPaymentDetailsN', profileId: profileId, landAppId: landAppId},
        success: function (data) {
            $("#" + ctrlId).html(data.details);
        }
    });
}

function withdrawLand(landAppId) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'withdrawLand', landAppId: landAppId},
        success: function (data) {
            if (data.landAppId > 0) {
                window.location.href = url + 'citizen-dashboard';
            }
        }
    });
}

function updateMortgageConsent(encUrl, addUpdateStatus, applyType) {
	$("#btnProcess").show();
    $("#btnDiv").hide();
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updateMortgageConsent', encUrl: encUrl},
        success: function (data) {
            if (data.landAppId > 0) {
                if (applyType == 1) {
                    viewAlert('Consent to mortgage ' + addUpdateStatus + ' successfully', '', url + 'citizen-permissions');
                } else {
                    viewAlert('Consent to mortgage ' + addUpdateStatus + ' successfully', '', url + 'arch-dashboard');
                }

            }
        }
    });
}

function updateWatersupplyConsent(encUrl, addUpdateStatus, applyType) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updateWatersupplyConsent', encUrl: encUrl},
        success: function (data) {
            if (data.landAppId > 0) {
                if (applyType == 1) {
                    viewAlert('Application for grant of AURIC\' Water Supply Connection ' + addUpdateStatus + ' Successfully', '', url + 'citizen-permissions');
                } else {
                    viewAlert('Application for grant of AURIC\' Water Supply Connection ' + addUpdateStatus + ' Successfully', '', url + 'arch-dashboard');
                }
            }
        }
    });
}

function updateFireApproval(encUrl, addUpdateStatus, applyType) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updateFireApproval', encUrl: encUrl},
        success: function (data) {
            if (data.landAppId > 0) {
                if (applyType == 1) {
                    viewAlert('Provisional noc for fire ' + addUpdateStatus + ' successfully', '', url + 'citizen-permissions');
                } else {
                    viewAlert('Provisional noc for fire ' + addUpdateStatus + ' successfully', '', url + 'arch-dashboard');
                }
            }
        }
    });
}
function updateWaterPower(encUrl, addUpdateStatus, applyType) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updateWaterPower', encUrl: encUrl},
        success: function (data) {
            if (data.landAppId > 0) {
                if (applyType == 1) {
                    viewAlert('Water and  power connection ' + addUpdateStatus + ' successfully', '', url + 'citizen-permissions');
                } else {
                    viewAlert('Water and  power connection ' + addUpdateStatus + ' successfully', '', url + 'arch-dashboard');
                }
            }
        }
    });
}


function updateBuildingCompletion(encUrl, addUpdateStatus, applyType) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updateBuildingCompletion', encUrl: encUrl},
        success: function (data) {
            if (applyType == 1) {
                viewAlert('Application for building completion certificate ' + addUpdateStatus + ' successfully', '', url + 'citizen-permissions');
            } else {
                viewAlert('Application for building completion certificate ' + addUpdateStatus + ' successfully', '', url + 'arch-dashboard');
            }

        }
    });
}


function updatePowerConnectionStatus(encUrl, addUpdateStatus, applyType) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updatePowerConnectionStatus', encUrl: encUrl},
        success: function (data) {
            if (applyType == 1) {
                viewAlert('Power connection permission ' + addUpdateStatus + ' successfully', '', url + 'citizen-permissions');
            } else {
                viewAlert('Power connection permission ' + addUpdateStatus + ' successfully', '', url + 'arch-dashboard');
            }
        }
    });
}

function updateFinalFireNOC(encUrl, addUpdateStatus, applyType) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updateFinalFireNOC', encUrl: encUrl},
        success: function (data) {
            if (applyType == 1) {
                viewAlert('Final noc for fire ' + addUpdateStatus + ' successfully', '', url + 'citizen-permissions');
            } else {
                viewAlert('Final noc for fire ' + addUpdateStatus + ' successfully', '', url + 'arch-dashboard');
            }
        }
    });
}
function updateBuildingPermission(encUrl, addUpdateStatus) {
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'updateBuildingPermission', encUrl: encUrl},
        success: function (data) {
            //if(data.landAppId > 0){
            viewAlert('Application for building permission ' + addUpdateStatus + ' successfully', '', url + 'citizen-permissions');
            //}	
        }
    });
}
/*
 Function to get payment details.
 Created by     : Abhiram Samantara
 Created On     : 07-Jan-2017
 */
function showCommonApplDetails(ctrlId, profId, landId)
{

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'showCommonApplDetails', profId: profId, landId: landId},
        success: function (data) {
            $("#" + ctrlId).html(data.commonHtml);
        }
    });
}


/*
 Function to get payment details.
 Created by     : Amitashree Mallick
 Created On     : 07-Jan-2017
 */
function showWaterMeterRent(ctrlId, meterTypeId)
{
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'showWaterMeterRent', meterTypeId: meterTypeId},
        success: function (data) {
            $("#" + ctrlId).html(data.meterRentHtml);
        }
    });
}

/*
 Function to get document details.
 Created by     : Abhiram Samantara
 Created On     : 20-Jan-2017
 */

function getDocDetails(landAppId, profileId, uniqueId, ctrlId)
{
    $("#" + ctrlId).html("<div class='text-center'><i class='fa fa-spinner fa-spin'></i> Loading Details....</div>");
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'getDocDetails', landAppId: landAppId, profileId: profileId, uniqueId: uniqueId},
        success: function (data) {
            $("#" + ctrlId).html(data.docHtml);
        }
    });
}
/*
 Function to get Application details.
 Created by     : Abhiram Samantara
 Created On     : 20-Jan-2017
 */

function getAppDetails(landAppId, profileId, ctrlId)
{
    $("#" + ctrlId).html("<div class='text-center'><i class='fa fa-spinner fa-spin'></i> Loading Details....</div>");
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'getAppDetails', landAppId: landAppId, profileId: profileId},
        success: function (data) {
            $("#" + ctrlId).html(data.docHtml);
        }
    });
}
function getMOMDetails(landAppId, uniqueId, ctrlId)
{
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'getMOMDetails', landAppId: landAppId},
        success: function (data) {
//            var link = '<div class="form-group dashboardDocDiv"><div class="col-lg-8"><h5>Download Mom</h5></div><div class="col-lg-4 text-right"><h5><a href="'+url+'uploadDocuments/'+uniqueId+'/'+data.momDownload+'" class="btn auric-blue btn-xs" target="_blank"><i class="fa fa-download"></i> Download</a></h5></div><div class="clearfix"></div></div>';
            var link = data.momDownload;
            if (data.momDownload == null) {

            } else {
                $("#" + ctrlId).html(link);
            }

        }
    });
}
/*
 Function to get Application details.
 Created by     : Chinmayee
 Created On     : 27-Jan-2017
 */

function getAppBuildDetails(landAppId, profileId, PlotNo, ctrlId, Status)
{
    $("#" + ctrlId).html("<div class='text-center'><i class='fa fa-spinner fa-spin'></i> Loading Details....</div>");
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'getAppBuildDetails', landAppId: landAppId, PlotNo: PlotNo, profileId: profileId, Status: Status},
        success: function (data) {
            $("#" + ctrlId).html(data.docHtml);
            $("#cmplDate").html(data.docDate);
        }
    });
}





/*
 Function to generate Extension Payment Pdf.
 Created by     : Chinmayee
 Created On     : 28-Jan-2017
 */
function genrtextensionPaymentPdfs(strUniqId, intExtId, landcost, extmonth, penality, appName, totPayments, referanceNo,extSlno)
{  alert(extSlno);
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtextensionPaymentPdfs', strUniqId: strUniqId, intExtId: intExtId,
            landcost: landcost, appName: appName, totPayments: totPayments, extmonth: extmonth, penality: penality, 
            referanceNo: referanceNo ,extSlno: extSlno},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

/*
 Function to upload MPCB
 Created by     : Abhiram Samantara
 Created On     : 15-Feb-2017
 */
function uploadMPCB(profileId, landAppId, uniqueId, mpcbType, mpcbFile,applyType,hdnId,type,validity)
{
    var mpcbEType = 0;
    var mpcbvalid = '';
    var msg ='';
    
    if($("#"+type).val() > 0){
        mpcbEType = $("#"+type).val();
    }
    if($("#"+validity).val() != ''){
        mpcbvalid = $("#"+validity).val();
    }
    
    if($("#"+type).val() == 0 && mpcbType == 1){
        viewAlert("Select MPCB Type",type);
        return false;
    }else if($("#"+validity).val() == '' && mpcbType == 1){
        viewAlert("MPCB Validity cannot be left blank",validity);
        return false;
    }else if($("#"+type).val() == 0 && mpcbType == 2){
        viewAlert("Select MPCB Type",type);
        return false;
    }else if($("#"+validity).val() == '' && mpcbType == 2){
        viewAlert("MPCB Validity cannot be left blank",validity);
        return false;
    }else if(mpcbFile == ''){
        
        if(mpcbType == 1){
            viewAlert("Please upload mpcb consent to establish document",hdnId);
            return false;
        }else{
            viewAlert("Please upload mpcb consent to operate document",hdnId);
            return false;
        }
    }else{
        $.ajax({
            type: "POST",
            url: url + 'proxy',
            dataType: "json",
            data: {method: 'uploadMPCB', profileId: profileId, landAppId: landAppId, uniqueId: uniqueId, mpcbType: mpcbType, mpcbFile: mpcbFile,mpcbEType:mpcbEType,mpcbvalid:mpcbvalid},
            success: function (data) {
                if (data.upStatus) {

                    if (mpcbType == 1) {
                        msg = 'MPCB consent to establish uploaded successfully';
                    } else {
                        msg = 'MPCB consent to operate uploaded successfully';
                    }
                    if(applyType == 1){
                        viewAlert(msg, '', url + 'citizen-permissions');
                    }else{
                        viewAlert(msg, '', url + 'arch-dashboard');
                    }
                    
                }
            }
        });
    }

}


/*
 Function to fill plot no
 By: Rasmi Ranjan Swain
 On: 06-NOV-2016
 */
function loadPlotMap(fillCtrl, selVal,sectorId)
{

    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'fillMapPlot', selVal: selVal,sectorId: sectorId},
        success: function (data) {
            $('#' + fillCtrl).html(data.plotNo);
        }
    });

}
/*
 Function to get previous mpcb details
 By: Abhiram Samantara
 On: 13-APR-2017
 */
function getPreviousMPCB(fillCtrl, landId,type,uniqId)
{

    $.ajax({
        type: "POST",
        url: url + '/proxy',
        dataType: "json",
        data: {method: 'getPreviousMPCB', landId: landId,type: type,uniqId:uniqId},
        success: function (data) {
            $('#' + fillCtrl).html(data.html);
            if(type == 1){
                $("#mpcbModalTitle").html('MPCB consent to establish document history')
            }else{
                $("#mpcbModalTitle").html('MPCB consent to operate document history')
            }
            
            $("#mpcbModal").modal();
        }
    });

}
/*
    Function to get Parent Annexure ID.
    Created by     : Abhiram Samantara
    Created On     : 20-Jan-2017
    */

   function getParentAnnexureId(fillctrl,anxID)
   {
       $.ajax({
           type: "POST",
           url: url + '/proxy',
           dataType: "json",
           data: {method: 'getParentAnnexureId', anxID: anxID},
           success: function (data) {
               $('#'+fillctrl).val(data.parentId);
           }
       });
   }
   
   /*
    Function to get service documents
    Created by     : Abhiram Samantara
    Created On     : 26-07-2017
    */

   function getServiceDocuments(fillctrl,intServiceId)
   {
       $('#'+fillctrl).html('<div class="text-center"><i class="fa fa-spin fa-spinner"></i></div>');
       $.ajax({
           type: "POST",
           url: url + '/proxy',
           dataType: "json",
           data: {method: 'getServiceDocuments', intServiceId: intServiceId},
           success: function (data) {
               $('#'+fillctrl).html(data.html);
           }
       });
   }
   
   function fnExcelReport(ctrlId)
    {
        var tab_text="";
        var j=0;
        var dt = new Date();
        var day = dt.getDate();
        var month = dt.getMonth() + 1;
        var year = dt.getFullYear();
        var hour = dt.getHours();
        var mins = dt.getMinutes();
        var postfix = day + "." + month + "." + year + "_" + hour + "." + mins;
        var fileName = 'Exported_Excel'+postfix+".xls";
        tab = document.getElementById(ctrlId);

        tab_text=tab.innerHTML;


        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE "); 

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
        {
           txtArea1.document.open("txt/html","replace");
           txtArea1.document.write(tab_text);
           txtArea1.document.close();
           txtArea1.focus(); 
           sa=txtArea1.document.execCommand("SaveAs",true,fileName);
        }  
        else //other browser not tested on IE 11
           sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  
          return (sa);
    }
    
    /*
    Function to load post allotment services
    Created by     : Abhiram Samantara
    Created On     : 26-07-2017
    */

   function loadPaService(fillctrl,selVal,type)
   {
       $.ajax({
           type: "POST",
           url: url + '/proxy',
           dataType: "json",
           data: {method: 'loadPaService', selVal: selVal,type:type},
           success: function (data) {
               $('#'+fillctrl).html(data.options+'<div class="clearfix"></div>');               
           }
       });
   }
    
    /*
    Function to fill sector from gis data
    Created by     : Sunil Kumar Parida
    Created On     : 24-08-2017
    */

   function fillGISSector(fillctrl,selVal,availableStatus)
   {
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'fillGISSector', selVal: selVal,availableStatus:availableStatus},
           success: function (data) {
               $('#'+fillctrl).html(data.sector);               
           }
       });
   }
    
    /*
    Function to fill sector from gis data
    Created by     : Sunil Kumar Parida
    Created On     : 24-08-2017
    */

   function fillGISPlot(fillctrl, sector, selVal,availableStatus)
   {
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'fillGISPlot', sector:sector, selVal: selVal,availableStatus:availableStatus},
           success: function (data) {
               $('#'+fillctrl).html(data.plots);               
           }
       });
   }
    
    /*
    Function to fill plot info from gis data
    Created by     : Sunil Kumar Parida
    Created On     : 24-08-2017
    */

   function fillGISPlotInfo(sector, plotNo)
   {
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'fillGISPlotInfo', sector:sector, plotNo: plotNo},
           success: function (data) {
			   var dataRow		= data.info;
			   var availArea	= dataRow['area_sqm'];
			   var permArea		= dataRow['permbuiltup'];
			   var corner		= (dataRow['cornerplot'].toLowerCase() == 'yes')?1:0;
			   var frontage		= (Number(dataRow['decfrontage'])>0)?dataRow['decfrontage']:0;
               $('.lblArea').html(availArea);               
               $('#txtReqPlSz').val(availArea);  
               //console.log($("#selCatProp").val());
	           if(Number($("#selCatProp").val()) == 4)
	       	   {
			if($('#txtBuiltUpAr').val()!='')
                        {

                        }
                        else
                        {
                            $('#txtBuiltUpAr').val('');
                            $('#txtBuiltUpAr').attr('placeholder','Built-up Area (Sq. mt.)');
                        }
	       	   }
		       else
		       {
		       	   $('#txtBuiltUpAr').val(permArea);
				   $('#txtBuiltUpAr').attr('placeholder','Permissible Built-up Area (Sq. mt.)');
		       }  
		                            
               //$('#txtBuiltUpAr').val(permArea);             
               $('#cornerStatus').val(corner);            
               $('#frontageArea').val(frontage);             
           }
       });
   }
   
    /*
    Function to update DPR 
    Created by     : Abhiram Samantara
    Created On     : 12-09-2017
    */
   
   function updateDPR(profileID, landAppId)
   {
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'updateDPR', profileID:profileID, landAppId: landAppId},
           success: function (data) {
		console.log(data.status);	            
           }
       });
   }
   
   
   /*
    Function to fill plot info from gis data
    Created by     : Sunil Kumar Parida
    Created On     : 24-08-2017
    */

   function fillQualification(authId,selVal,ctrlId)
   {
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'fillQualification', authId:authId,selVal:selVal},
           success: function (data) {
            var options	= data.options;            
            $('#'+ctrlId).html(options);    
           }
       });
   }
   /*
    Function to fill plot info from gis data
    Created by     : Sunil Kumar Parida
    Created On     : 24-08-2017
    */

   function downloadLicence(licenceData)
   {
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'downloadLicence', licenceData:licenceData},
           success: function (data) {
             window.location.href = url+data.licenceData; 
           }
       });
   }
   
   /*
    Function to get applicant APZ details.
    Created by     : Pusparani Mandal
    Created On     : 14-Nov-2017
    */
   function showCommonApplLandDetails(ctrlId1,ctrlId2,ctrlId3,ctrlId4, profId, landId)
   {
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'showCommonApplLandDetails', profId: profId, landId: landId},
           success: function (data) {
               $("#" + ctrlId1).val(data.appName);
               $("#" + ctrlId2).val(data.plotSize);
               $("#" + ctrlId3).val(data.flderName);     
               $("#" + ctrlId4).val(data.proptyCatg);
           }
       });
   }
   
/* --------------------------------------
 Function to Upload File to Temporary Folder 
 Created by     : Abhiram Samantara
 Created On     : 15-Nov-2017
 * -------------------------------------- */
function apzUploadFileToTempFolder(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId,profileId,landAppId,buildPerId) {

    if (!IsCheckFile(filename, 'Invalid file types.', fileType)) {
        scrollToPosition(filename);
        $("#" + hdnFilename).val('');
        $("#" + filename).val('');
        $("#"+linkId).find('a').hide();
        $("#"+linkId).find('.docName').html('');
        $("#resultAPZ").html('');
        $("#validateConfirm").hide();
        $(".uploadConf").hide();
        return false;
    }
    if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        $("#" + hdnFilename).val('');
        $("#resultAPZ").html('');
        $("#validateConfirm").hide();
        $(".uploadConf").hide();
        return false;
    }
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
   
    /*******Check whether the file is being uploaded or not********/
    $.ajaxFileUpload({
        url: url + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        data: {method: 'uploadFileToTempFolder', filename: filename, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {
            $("#" + hdnFilename).val(data.savedFileName);
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#" + linkId).show();
            $(".btnUploadAPZ").hide();
            $("#validateConfirm").hide();

            $("#" + linkId).closest(".clsAlldocfile").find('.docName').html(data.savedFileName);
            $("#" + linkId).closest(".clsAlldocfile").find('.docName').show();

            if (spanId) {
                //  $("#"+spanId).closest("div.form-group").find('.docName').html(uploadFileName);
                $("#" + linkId + " a").show();
                $("#" + linkId + " a").not('.clearDocs').attr('href', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).show();
            } else {
                $("#" + linkId).show().attr('src', url + "temp/" + data.savedFileName);
                $("#clearDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearDocs" + docId).hide();
            }
            //validateAPZ(docId,url + "temp/" + data.savedFileName,profileId,landAppId,data.savedFileName,0,buildPerId,'');
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
        error: function (data, status, e) {
            alert(e);
        }
    });
    return false;
}

/* --------------------------------------
 Function to Upload File to Database 
 Created by     : Pusparani Mandal
 Created On     : 27-Nov-2017
 * -------------------------------------- */
function apzUploadFileConfirm(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId,profileId,landAppId,buildPerId) {
    confirmAlert("Confirm to upload APZ File?");
    $("#btnConfirmOk").off('click').on('click',function(){
        //$(this).hide();
        var uploadFileName = $("#" + hdnFilename).val();    
        var apzRecord      = $("#apzRecord").val();
        //validateAPZ(docId,url + "temp/" + uploadFileName,profileId,landAppId,uploadFileName,1,buildPerId,apzRecord);
    });
    
}
   /*
    Function to get applicant APZ details.
    Created by     : Abhiram Samantara
    Created On     : 15-Nov-2017
   */
   function validateAPZ(docId,fileURL,profileId,landAppId,savedFileName, uploadFlag,buildPerId,apzRecord)
   {
       $("#clearDocs53").attr('href', 'javascript:void(0);');
       $("#clearDocs53").hide();
       $("#resultAPZ").html('');
       $("#validateProcess").show();
       $("#notValidApzMsg").html('');
       $(".btnContainer").hide();
       $(".btnUploadAPZ").hide();
       $(".afterAPZDiv").hide();
       $(".scrutinyDiv").hide();
       $("#validateConfirm").hide();
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'validateAPZ', fileURL: fileURL,profileId:profileId,landAppId:landAppId,savedFileName:savedFileName, uploadFlag:uploadFlag,buildPerId:buildPerId,apzRecord:apzRecord},
           success: function (data) {
            if(data.uploadFlag == 1)
            {
                    window.location=url+'building-plan-scrutiny';
            }
            else{
                $("#clearDocs" + docId).show();
                $("#validateProcess").hide();
                $("#resultAPZ").html(data.html);
                var apzStatus = $("#apzStatus").val();
               // $(".scrutinyDiv").show();
                $(".btnUploadAPZ").hide();
               // $(".uploadAPZDiv").hide();
               // $(".afterAPZDiv").show();
               apzStatus=0;
                if(Number(apzStatus) == 0)
                {                   
                     //$(".btnContainer").show();
                     $(".btnUploadAPZ").hide();
                     $(".afterAPZDiv").show();
                     $("#validateConfirm").show();
                }
                else
                {
                    //$(".btnContainer").hide();
                    $(".btnUploadAPZ").hide();
                    $(".afterAPZDiv").hide();
                    $("#validateConfirm").hide();
                    $("#notValidApzMsg").html("Data not matched with APZ File.Please upload a valid APZ file.");
                }
            }
           }
       });
   }

/* --------------------------------------
 Function to Load banks
 Created by     : Abhiram Samantara
 Created On     : 18-Nov-2017
 * -------------------------------------- */
function fillBanks(controlId,selVal)
{
    $('#' + controlId + ' option').not(":first").remove();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "fillBanks",selVal: selVal},
        success: function (data)
        {
            var res = data.options;
            $('#' + controlId).html(res);
            var intCount = 0;
            
            $(".selBankName").each(function () {
                intCount++;

                if (intCount > 1)
                {
                    $(this).html($('#selBankName1').html());
                }
                $(this).val($('#hdnBankName' + intCount).val());
            });
            
            
        }
    });

}

/* --------------------------------------
 Function to Load banks
 Created by     : Abhiram Samantara
 Created On     : 18-Nov-2017
 * -------------------------------------- */
function fillBanks(controlId,selVal)
{
    $('#' + controlId + ' option').not(":first").remove();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "fillBanks",selVal: selVal},
        success: function (data)
        {
            var res = data.options;
            $('#' + controlId).html(res);
            var intCount = 0;
            
            $(".selBankName").each(function () {
                intCount++;

                if (intCount > 1)
                {
                    $(this).html($('#selBankName1').html());
                }
                $(this).val($('#hdnBankName' + intCount).val());
            });
            
            
        }
    });

}

function showMoneyReceipt(appId)
{
       $('#moneyRecModal').modal();
       $("#receiptTitle").html('Payment Receipt');
       $('#receipt').attr('data', appURL+'/moneyReceipt/'+ appId);
}
function showBOPReceipt(appId)
{
       $('#moneyRecModal').modal();
       $("#receiptTitle").html('Payment Receipt');
       $('#receipt').attr('data', appURL+'/bopReceipt/'+ appId);
}


function loadGISMap(sector,plot)
{
    $.ajax({
        type: "POST",
        url: appURL + 'proxy',
        dataType: "json",
        data: {method: 'loadGISMap', sector: sector, plot: plot},
        success: function (data) {
            $("#hdnplotGid").val(data.gid);
            $('#mapModal').modal();
            $("#mapTitle").html('Site Map');
            $('#mapFrame').attr('data', url +'gisMap');
        }
    });
}

    
    /*
    Function to fill Id and value of Hazard
    By: Pusparani Mandal 
    On: 18-Dec-2017
    */
    function getHazardType(lblId,txtId,anxId)
    {  //$("#viewTable").html('<center> <img src="'+appURL+'/img/loading.gif"> </center>');
       
        $.ajax({
            type: "POST",
            url: url + 'proxy',
            dataType: "json",
            data: {method: "getHazardType",anxId: anxId},
            success: function (data)
            {
                if(data.txtId>0){
                    $("#"+lblId).html(data.lblId);
                    $("#"+txtId).val(data.txtId);
                }
                else{
                    $("#"+lblId).html('--');
                    $("#"+txtId).val(0);
                }
            }
        });
    }
    
    
/*
 Function to generate FSI Challan Pdf
 Created by     : Abhiram Samantara
 Created On     : 23-DEC-2017
 */
function genrtFSIPaymentPdf(strUniqId, intFSIId, appName, totPayments,strRefenceno)
{ 
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtFSIPaymentPdf', strUniqId: strUniqId, intFSIId: intFSIId, appName: appName, totPayments: totPayments,strRefenceno:strRefenceno},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}
    /*
    Function to send building data for review
    By: Pusparani Mandal 
    On: 02-Jan-2018
    */
    function sendForReview(landId,profId, buildId)
    { 
        $.ajax({
            type: "POST",
            url: url + 'proxy',
            dataType: "json",
            data: {method: "sendForReview",landId: landId,profId:profId,buildId:buildId},
            success: function (data)
            {
                if(data.result==1){
                    viewAlert("Data send for review");
                    var encyptUrl= data.encyptUrl;
                    $("#btnAlertOk").on('click',function(){
                     window.location=url+"building-plan-fire-approval/P?"+encyptUrl;
                    });
                   
                }
            }
        });
    }
    /*
    Function to get building data for review
    By: Pusparani Mandal 
    On: 02-Jan-2018
    */
    function getForReview(landId,profId, buildId)
    { 
      
        $.ajax({
            type: "POST",
            url: url + 'proxy',
            dataType: "json",
            data: {method: "getForReview",landId: landId,profId:profId,buildId:buildId},
            success: function (data)
            {
               // alert(data.reviewStatus+"--"+landId+"--"+profId+"--"+buildId);
              if(data.reviewStatus==3){
                   $("#btnSendReview").hide();
                   $("#btnSaveProceed").hide();
                   $("#btnReUpload").show();
                   $("#btnReset").hide();
                   $("#reviewMsg").hide();
                   $("#scrutinyRemark").html("<h4>Scrutiny Review Remark</h4><hr><p>&nbsp;&nbsp;"+data.reviewRemark+"</p>");
                   $("#scrutinyRemark").show();
                }
                else if(data.reviewStatus==2){
                   $("#btnSendReview").show();
                   $("#btnSaveProceed").show();
                   $("#btnReUpload").show();
                   $("#btnReset").show();
                   $("#reviewMsg").hide();
                   $("#scrutinyRemark").html("<h4>Scrutiny Review Remark</h4><hr><p>&nbsp;&nbsp;"+data.reviewRemark+"</p>");
                   $("#scrutinyRemark").show();
                }
                else if(data.reviewStatus==1){
                   $("#btnSendReview").hide();
                   $("#btnSaveProceed").hide();
                   $("#btnReUpload").hide();
                   $("#btnReset").hide();
                   $("#reviewMsg").html("Your current .apz file and drawing has been sent for review");
                   $("#reviewMsg").show();
                   $("#scrutinyRemark").hide();
                }
                else{
                   $("#btnSendReview").show();
                   $("#btnSaveProceed").show();
                   $("#btnReUpload").show();
                   $("#btnReset").show();
                   $("#reviewMsg").hide();
                   $("#scrutinyRemark").hide();
                }
            }
        });
    }
    
    /*
    Function to send for Re-Upload
    By: Pusparani Mandal 
    On: 02-Jan-2018
    */
    function sendReUpload(landId,profId,intCommPermId,intApplyAnxId)
    { 
        $.ajax({
            type: "POST",
            url: url + 'proxy',
            dataType: "json",
            data: {method: "sendReUpload",landId: landId,profId:profId,intCommPermId:intCommPermId,intApplyAnxId:intApplyAnxId},
            success: function (data)
            {
                if(data.result==1){
                    var encyptUrl= data.encyptUrl;
                    //window.location=url+"building-plan-fire-approval/P?"+encyptUrl;
                    var redirectReUrl=url+"building-plan-fire-approval/P?"+encyptUrl;
                    viewAlert('Application enabled for re-upload', '', redirectReUrl);
                }
            }
        });
    }
/*
 Function to generate FSI Challan Pdf
 Created by     : Abhiram Samantara
 Created On     : 23-DEC-2017
 */
function genrtFSIPaymentPdf(strUniqId, intFSIId, appName, totPayments,strRefenceno)
{ 
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtFSIPaymentPdf', strUniqId: strUniqId, intFSIId: intFSIId, appName: appName, totPayments: totPayments,strRefenceno:strRefenceno},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

/*************************TREE PERMIT*************************/

/*
 Function to generate Tree Scrutiny Challan Pdf
 Created by     : Abhiram Samantara
 Created On     : 20-FEB-2018
 */
function genrtTreeScrutinyPaymentPdf(strUniqId, intTreeAppId, appName, totPayments,strRefenceno)
{ 
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtTreeScrutinyPaymentPdf', strUniqId: strUniqId, intTreeAppId: intTreeAppId, appName: appName, totPayments: totPayments,strRefenceno:strRefenceno},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}
/*
 Function to generate Tree Scrutiny Challan Pdf
 Created by     : Abhiram Samantara
 Created On     : 20-FEB-2018
 */
function genrtTreeSecurityPaymentPdf(strUniqId, intTreeAppId, appName, totPayments,strRefenceno,secCharge,cutAmt,trimAmt,transAmt)
{ 
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtTreeSecurityPaymentPdf', strUniqId: strUniqId, intTreeAppId: intTreeAppId, appName: appName, totPayments: totPayments,strRefenceno:strRefenceno,secCharge:secCharge,cutAmt:cutAmt,trimAmt:trimAmt,transAmt:transAmt},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}

function getComplianceDetails(compid,treeid,uniqueid)
{
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'getComplianceDetails', compid: compid, treeid: treeid,uniqueid:uniqueid},
        success: function (data) {
            $('#complianceModal').modal();
            $('#complianceDIV').html(data.html);
        }
    });
}

/* --------------------------------------
     Function to get Security Deposit Details
     Created by     : Abhiram Samantara
     Created On     : 28-02-2018
* -------------------------------------- */ 
function getSecurityPaymentTreeD(ctrlId,id)
{
	$.ajax({
	   type     : "POST",
	   dataType : "json",
	   url      : appURL+'/proxy',
	   data     : {method:"getSecurityPaymentTree", id :id},
	   success  : function(data) 
	   {
		   var res = data.html;           
		   $("#"+ctrlId).html(res);
	   }
	});
}

/*************************TREE PERMIT*************************/

function goBackUrl(bkurl)
{
    if(bkurl !='')
    {
        window.location.href=bkurl;
        
    }
}
   
   
function convertToMoney(ctrlId,amount)
{
   $.ajax({
	   type: "POST",
	   url: url + 'proxy',
	   dataType: "json",
	   data: {method: 'convertToMoney',amount:amount},
	   success: function (data) {
		   $(ctrlId).html(data.amount);
	   }
   });
}

/*** Plinth Module START ***/
/*
    Function to get Inspection Building Image details.
    Created by     : Pusparani Mandal
    Created On     : 24-May-2018
    */

   function getBuildingImage(landAppId,inspId,vchUniqueId,ctrlId)
   {
       $("#" + ctrlId).html("<div class='text-center'><i class='fa fa-spinner fa-spin'></i> Loading Details....</div>");
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'getBuildingImage',landAppId:landAppId, inspId: inspId,vchUniqueId:vchUniqueId},
           success: function (data) {
               $("." + ctrlId).html(data.docHtml);
           }
       });
   }
   
   function getBuildingImageAuth(landAppId,inspId,vchUniqueId,ctrlId)
    {
     $("#" + ctrlId).html("<div class='text-center'><i class='fa fa-spinner fa-spin'></i> Loading Details....</div>");
     $.ajax({
         type: "POST",
         url: url + 'proxy',
         dataType: "json",
         data: {method: 'getBuildingImageAuth',landAppId:landAppId, inspId: inspId,vchUniqueId:vchUniqueId},
         success: function (data) {
             $("." + ctrlId).html(data.docHtml);
         }
     });
    }
   
   /*
    Function to get Inspection Resubmitted details.
    Created by     : Pusparani Mandal
    Created On     : 24-May-2018
    */

   function getResubmittedDetails(landAppId,inspId,vchUniqueId,ctrlId)
   {
       $("#" + ctrlId).html("<div class='text-center'><i class='fa fa-spinner fa-spin'></i> Loading Details....</div>");
       $.ajax({
           type: "POST",
           url: url + 'proxy',
           dataType: "json",
           data: {method: 'getResubmittedDetails',landAppId:landAppId, inspId: inspId,vchUniqueId:vchUniqueId},
           success: function (data) {
               $("." + ctrlId).html(data.docHtml);
           }
       });
   }
  /*** Plinth Module END ***/
  
  /*** BPAS Manual Process START ***/
  /*
 Function to generate building plan permission Remaining Payment Pdf.
 Created by     : Pusparani Mandal
 Created On     : 01-Sep-2018
 */
function genrtBuildingplanRemainingPaymentPdf(strUniqId, intPermissionId, decApplicationpayment, decArea, appName, totPayments, strRefenceno,paymentarr)
{
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtBuildingplanRemainingPaymentPdf', strUniqId: strUniqId, intPermissionId: intPermissionId, decApplicationpayment: decApplicationpayment, decArea: decArea,appName: appName, totPayments: totPayments, strRefenceno: strRefenceno,paymentarr:paymentarr},
        success: function (data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({target: '_blank', href: data_ul});
            setTimeout(function () {
                $('#loadingmessage').hide();
                //$('#pdfLink')[0].click();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}
/*
 Function to generate building plan permission Application Details Pdf.
 Created by     : Pusparani Mandal
 Created On     : 14-Sep-2018
 */
function genrtBuildingplanApplicationPdf(bpFormHeading,bpFormContent,uniqueId,totalDiv)
{
    var totalForms= [];

    for (var i = 1; i <= totalDiv; i++) {
        if($("#"+bpFormHeading+i).length){
          totalForms.push({ bpFormHeading: $("#"+bpFormHeading+i).html(), bpFormContent: $("#"+bpFormContent+i).html() });
        }
    }
    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: {method: 'genrtBuildingplanApplicationPdf', totalForms: JSON.stringify(totalForms),uniqueId:uniqueId},
        success: function (data) {
            var data_ul = url + 'uploadDocuments/' + data.aurl;          
            var a = document.createElement('a');
                a.href =data_ul;
                a.download = data.fileName;
                a.click();
        }
    });
}

/* --------------------------------------
 Function to Load permission annexures
 Created by     : Pusparani Mandal
 Created On     : 22-Aug-2018
 * -------------------------------------- */
function getPermissionAnnexureComponentMB(controllerId, typeId, selVal, parentId)
{
    $('#' + controllerId + ' option').not(":first").remove();
    parentId = (typeof (parentId) == 'undefined' || parentId == '') ? 0 : parentId;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + 'proxy',
        data: {method: "getPermissionAnnexureComponentMB", typeId: typeId, selVal: selVal, parentId: parentId},
        success: function (data)
        {
            var res = data.anexure;
            //alert(res);
            $('#' + controllerId).html(res);

            var intCount = 0;
            if (typeId == 4) {
                $(".clsParticulars").each(function () {
                    intCount++;

                    if (intCount > 1)
                        $(this).html($('#selParticulars_1').html());

                    $(this).val($('#hidSelParticular_' + intCount).val());
                });
            }

            var intflrCount = 0;
            if (typeId == 17) {
                $(".selFloorType").each(function () {
                    intflrCount++;

                    if (intflrCount > 1)
                        $(this).html($('#selFloorType1_1').html());

                    $(this).val($(this).closest('tr').find(".clsHidFloorType").val());
                });
            }
            var inttypCount = 0;
            if (typeId == 18) {
                $(".useType").each(function () {
                    inttypCount++;

                    if (inttypCount > 1)
                        $(this).html($('#selUseType1_1').html());

                    $(this).val($(this).closest('tr').find(".clsHidUseType").val());
                });
                $( ".selFloorOccupType" ).each(function() {
                     intflrCount++;

                     if(intflrCount>1)
                        $(this).html($('#selFloorOccupType1').html());

                    $(this).val($(this).closest('tr').find(".flooroccpclass").val());  
                });
            }
            if (typeId == 12) {
                $(".selfloor").each(function () {
                    intflrCount++;

                    if (intflrCount > 1)
                        $(this).html($('#selfloor1').html());

                    $(this).val($(this).closest('tr').find(".floorclass").val());
                });
            }
            
        }
    });

}
  /*** BPAS Manual Process END ***/
  /* --------------------------------------
 Function to Upload File to Temporary Folder 
 Created by     : Pusparani Mandal
 Created On     : 09-May-2019
 * -------------------------------------- */
function nocuploadImageToTempFolder(filename, hdnFilename, fileType, loadingId, fileSize, errMsgSize, mbKbType, spanId, linkId, docId, chkStatusId) {    
  $("#" + linkId).closest("tr").find('.imgPreview').hide().attr('src', '');
    if (!IsCheckFile(filename, 'Invalid file types.', fileType)) {
        scrollToPosition(filename);
       
        $("#" + hdnFilename).val('');
        $("#" + filename).val('');
        $("#"+linkId).find('a').hide();
        $("#"+linkId).find('.docName').html('');
        $("#"+spanId).hide();
        //alert(filename+','+ hdnFilename+','+ fileType+','+ loadingId+','+ fileSize+','+ errMsgSize+','+ mbKbType+','+  spanId+','+  linkId+','+ docId+','+ chkStatusId);
        return false;
    }
   
    if (!chkFileSize(filename, fileSize, errMsgSize, mbKbType)) {
        scrollToPosition(filename);
        $("#" + hdnFilename).val('');
        $("#" + filename).val('');
        $("#"+linkId).find('a').hide();
        $("#"+linkId).find('.docName').html('');
        $("#"+spanId).hide();
        return false;
    }
     
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
    /*******Check whether the file is being uploaded or not********/
    
    $.ajaxFileUpload({
       
        url: url + '/proxy',
        secureuri: false,
        fileElementId: filename,
        dataType: 'json',
        
        data: {method: 'uploadFileToTempFolder', filename: filename, hdnFormName: hdnFormName, docId: docId},
        success: function (data) {  
            $("#" + hdnFilename).val(data.savedFileName);
            $("#" + spanId).show();
            $("#" + loadingId).hide();
            $("#" + linkId).show();
//console.log($("#" + linkId).closest(".clsAlldocfile").find('.docName').html(data.savedFileName));
            $("#" + linkId).closest(".clsAlldocfile").find('.docName').html(data.savedFileName);
            $("#" + linkId).closest(".clsAlldocfile").find('.docName').show();
            $("#" + linkId).closest("tr").find('.imgPreview').show().attr('src', url + "temp/" + data.savedFileName);

            if (spanId) {
                //  $("#"+spanId).closest("div.form-group").find('.docName').html(uploadFileName);
                $("#" + linkId + " a").show();
                $("#" + linkId + " a").not('.clearRlxDocs').attr('href', url + "temp/" + data.savedFileName);
                $("#clearRlxDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearRlxDocs" + docId).show();
            } else {
                $("#" + linkId).show().attr('src', url + "temp/" + data.savedFileName);
                $("#clearRlxDocs" + docId).attr('href', 'javascript:void(0);');
                $("#clearRlxDocs" + docId).show();
            }
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
        error: function (data, status, e) {
            alert(e);
        }
    });
    return false;
}

   /*--------------------------------------
     Function to upload signature of applicant
     Created by     : Manali Ranjan
     Created On     : 17-June-2019
* -------------------------------------- */  
 function uploadSignature(hdnSignature,hdnProfSign,hdnUniqSign,landId,ctrlId1,ctrlId2)
 {
     $("#loaderSearch").show();
    $.ajax({
        type        : "POST",
        dataType    : "json",
        url: url + 'proxy',
        data        : {method:'uploadSignature',hdnSignature:hdnSignature,hdnProfSign:hdnProfSign,hdnUniqSign:hdnUniqSign,landId:landId},
        success     : function(data)
        {
            $("#loaderSearch").hide();
            var status = data.status;
            var signature = data.signature;
            
            if(status==1){
                $('#'+ ctrlId2).show();
                $('#'+ ctrlId2).html(signature);
                $('#'+ ctrlId1).hide();
              // $("#btnAlertOk").on('click',function(){
               //    window.location=url+encUrl; 
              // });
               }
        }
    });
 }

  /*--------------------------------------
     Function to upload surrender deed from applicant
     Created by     : Manali Ranjan
     Created On     : 20-Feb-2019
* -------------------------------------- */  
 function uploadSurrSubDeed(surrId,profId,landId,processId,uniqueId,hdnSurrDeed,txtExecDate,regNmbr)
 {
    // alert(surrId+'==='+profId+'==='+landId+'==='+uniqueId+'==='+hdnSurrLet);
     $.ajax({
        type        : "POST",
        dataType    : "json",
        url: url + 'proxy',
        data        : {method:'uploadSurrSubDeed',surrId:surrId,profId:profId,landId:landId,uniqueId:uniqueId,hdnSurrDeed:hdnSurrDeed,
                        processId:processId,txtExecDate:txtExecDate,regNmbr:regNmbr},
        success     : function(data)
        {
            var status = data.status;
            if(status==1){
               viewAlert(data.msg); 
               $("#btnAlertOk").on('click',function(){
                   window.location=url+"postAllotmentServices"; 
               });
               }else{
                viewAlert(data.msg,'','');  
            }
        }
    });
 }

/*--------------------------------------
     Function to upload surrender letter from applicant
     Created by     : Manali Ranjan
     Created On     : 28-Jan-2019
* -------------------------------------- */  
 function uploadSurrLett(surrId,profId,landId,uniqueId,hdnSurrLet,intProcessId)
 {
     //alert(surrId+'==='+profId+'==='+landId+'==='+uniqueId+'==='+hdnSurrLet);
     $.ajax({
        type        : "POST",
        dataType    : "json",
        url: url + 'proxy',
        data        : {method:'uploadSurrLett',surrId:surrId,profId:profId,landId:landId,uniqueId:uniqueId,hdnSurrLet:hdnSurrLet,intProcessId:intProcessId},
        success     : function(data)
        {
            var status = data.status;
            if(status==1){
               viewAlert(data.msg); 
               $("#btnAlertOk").on('click',function(){
                   window.location=url+"postAllotmentServices"; 
               });
               }else{
                viewAlert(data.msg,'','');  
            }
        }
    });
 }


/* --------------------------------------
   Function to get Temporary construction Category
   Created by     : Arpita Rath
   Created On     : 26-Oct-2018
* -------------------------------------- */
function getTempConstCat(ctrlId, selPrototypeId, parentId, selVal) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + '/proxy',
        data: { method: "getTempConstCat", selPrototypeId: selPrototypeId, parentId: parentId, selVal: selVal },
        success: function(data) {
                var catVarArr = data.catVarArr;
                $('#' + ctrlId).html(catVarArr);

                $('#selCatTempConst').on('change', function() {
                    var catDataVal = $(this).find(':selected').attr('data-val');

                    if (catDataVal == 0) {
                        $('.selCatNm').html('');
                    } else {
                        $('.selCatNm').html(catDataVal);
                        $('.selCatNm').attr('style', 'display:block');
                    }

                }); // end   

            } // end of success
    });
}

/*
 Function to generate Temporary Construction Challan Pdf
 Created by     : Arpita Rath
 Created On     : 12-Nov-2018
 */
function genrtTemporaryConstPaymentPdf(strUniqId, intTempConstId, appName, totPayments, strRefenceno, scrutAmt, tempConstAmt, secuAmt) {
    $('#loadingmessage').show();

    $.ajax({
        type: "POST",
        url: url + 'proxy',
        dataType: "json",
        data: { method: 'genrtTemporaryConstPaymentPdf', strUniqId: strUniqId, intTempConstId: intTempConstId, appName: appName, totPayments: totPayments, strRefenceno: strRefenceno, scrutAmt: scrutAmt, tempConstAmt: tempConstAmt, secuAmt: secuAmt },
        success: function(data) {
            var data_ul = url + '/uploadDocuments/' + data.aurl;
            $('#pdfLink').attr({ target: '_blank', href: data_ul });
            setTimeout(function() {
                $('#loadingmessage').hide();
                $('#btnPdf').hide();
                $('#pdfLink').show();
            }, 1000);

        }
    });
}


/* --------------------------------------
   Function to get Temporary construction Resubmit Data
   Created by     : Arpita Rath
   Created On     : 28-Jan-2019
* -------------------------------------- */
function getTempConstResubmitData(ctrlId, tempConstId) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url + '/proxy',
        data: { method: "getTempConstResubmitData", tempConstId: tempConstId },
        success: function(data) {
                var tempConstResubmit = data.tempConstResubmit;

                $('#divContent').html(tempConstResubmit);

            } // end of success
    });
}
