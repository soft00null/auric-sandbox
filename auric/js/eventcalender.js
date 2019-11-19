// Setup the calendar with the current date
var datas="";var topdatas=""; var events="";
$(document).ready(function(){
    var date = new Date();
    var today = date.getDate();
    // Set click handlers for DOM elements
    $(".right-button").click({date: date}, next_year);
    $(".left-button").click({date: date}, prev_year);
    $(".month").click({date: date}, month_click);
    $("#add-button").click({date: date}, new_event);
    // Set current month as active
    $(".months-row").children().eq(date.getMonth()).addClass("active-month");
    init_calendar(date);
    var chkevents = check_events(today, date.getMonth()+1, date.getFullYear());
   if(chkevents.length==0)
   {
        events = check_topevents(today, date.getMonth()+1, date.getFullYear());
      
   }
   else
   {
        events = check_events(today, date.getMonth()+1, date.getFullYear());
   }
    show_events(events, months[date.getMonth()], today);  

    // $('#pastEvent').on('click',function() {

    //     if(chkevents.length==0)
    //     {
    //         events = check_pastevents(today, date.getMonth()+1, date.getFullYear());
          
    //     }
    //    else
    //     {
    //         events = check_events(today, date.getMonth()+1, date.getFullYear());
    //     }

    //     show_past_events(events, months[date.getMonth()], today);

    // });
});


///console.log(event_data);
const months = [ 
    "Jan", 
    "Feb", 
    "Mar", 
    "April", 
    "May", 
    "Jun", 
    "Jul", 
    "Aug", 
    "Sep", 
    "Oct", 
    "Nov", 
    "Dec" 
]
// Initialize the calendar by appending the HTML dates
function init_calendar(date) {
    $(".tbody").empty();
    $(".events-container").empty();
    var calendar_days = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = days_in_month(month, year);
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();
    // Set date to 1 to find the first day of the month
    date.setDate(1);
    var first_day = date.getDay();
    // 35+firstDay is the number of date elements to be added to the dates table
    // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
    for(var i=0; i<35+first_day; i++) {
        // Since some of the elements will be blank, 
        // need to calculate actual date from index
        var day = i-first_day+1;
        // If it is a sunday, make a new row
        if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
        }
        // if current index isn't a day in this month, make it blank
        if(i < first_day || day > day_count) {
            var curr_date = $("<td class='table-date nil' id='table-date"+i+"'>"+"</td>");
            row.append(curr_date);
        }   
        else {
            var curr_date = $("<td class='table-date' id='table-date"+i+"'><span>"+day+"</span></td>");
            var events = check_events(day, month+1, year);
            if(today===day && $(".active-date").length===0) {
                curr_date.addClass("active-date");
                show_events(events, months[month], day);
              //  show_past_events(events, months[month], day)
            }
            // If this date has any events, style it with .event-date
            if(events.length!==0) {
                curr_date.addClass("event-date");
            }
            // Set onClick handler for clicking a date
            curr_date.click({events: events, month: months[month], day:day}, date_click);
           
            row.append(curr_date);
        }
    }
    // Append the last row and set the current year
    calendar_days.append(row);
    $(".year").text(year);
}

// Get the number of days in a given month/year
function days_in_month(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);    
}

// Event handler for when a date is clicked
function date_click(event) {

    $(".pastEvents").css("display", "none");
    $("#upcomingE").show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    //console.log(event.data.events['length'])
    if(event.data.events['length']===0)
    {  
         //$("#upcomingE").html('<div class="norecord"><h1>Coming Soon</h1></div>');       
         //$("#upcomingP").html('<div class="norecord"><h1>No Event Available for this Month.</h1></div>');

    } else {
       show_events(event.data.events, event.data.month, event.data.day);       
      // show_past_events(event.data.events, event.data.month, event.data.day);
    }
};


// Event handler for when a month is clicked
function month_click(event) {
    $("#upcomingE").show(250);
    $("#dialog").hide(250);
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()+1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()-1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for clicking the new event button
function new_event(event) {
    // if a date isn't selected then do nothing
    if($(".active-date").length===0)
        return;
    // remove red error input on click
    $("input").click(function(){
        $(this).removeClass("error-input");
    })
    // empty inputs and hide events
    $("#dialog input[type=text]").val('');
    $("#dialog input[type=number]").val('');
    $(".events-container").hide(250);
    $("#dialog").show(250);
    // Event handler for cancel button
    $("#cancel-button").click(function() {
        $("#name").removeClass("error-input");
        $("#count").removeClass("error-input");
        $("#dialog").hide(250);
        $(".events-container").show(250);
    });
    // Event handler for ok button
    $("#ok-button").unbind().click({date: event.data.date}, function() {
        var date = event.data.date;
        var name = $("#name").val().trim();
        var count = parseInt($("#count").val().trim());
        var day = parseInt($(".active-date").html());
        // Basic form validation
        if(name.length === 0) {
            $("#name").addClass("error-input");
        }
        else if(isNaN(count)) {
            $("#count").addClass("error-input");
        }
        else {
            $("#dialog").hide(250);
            //console.log("new event");
            new_event_json(name, count, date, day);
            date.setDate(day);
            init_calendar(date);
        }
    });
}

// Adds a json event to event_data
function new_event_json(name, count, date, day) {
    var event = {
        "occasion": name,
        "invited_count": count,
        "year": date.getFullYear(),
        "month": date.getMonth()+1,
        "day": day
    };
    event_data["events"].push(event);
}

// Display all events of the selected date in card views
function show_events(events, month, day) {
   
   
    // Clear the dates container
    $("#upcomingE").empty();
    $("#upcomingE").show(250);
  
    // If there are no events for this date, notify the user
    if(events.length===0) {      
        //var event_card = $("<div class='event-card'></div>");
        //var event_name = $("<div class='event-name'>There are no events planned for "+month+" "+day+".</div>");
        //var event_name = $("<div class='event-name'>hii</div>");
        $(event_card).css({ "border-left": "10px solid #FF1744" });
        $(event_card).append(event_name);
        $(".events-container").append(event_card);
		//$("#upcomingE").html("<div class='norecord'><h1>No Event Available for this Month.</h1></div>");
    }
    else {
            $("#upcomingE").empty();
            
            if(events[0]["noRecord"]===undefined){

          
        // Go through and add each event as a card to the events container
        for(var i=0; i<events.length; i++) {
           
            //console.log(events[i]["month"]);
            //console.log(months[11-1])
            var event_card = $("<div class='event-card'></div>");
            var event_name=$("<div class='eventbox upComingEvents'><div class='row row-sm'><div class='col-sm-12'><div class='event-text'> <a href='"+events[i]["eventUrl"]+"'><h3>"+events[i]["occasion"]+"</h3><p>"+events[i]["snippet"]+"</p></a></div><a class='eventdt' href='"+events[i]["eventUrl"]+"'> <div class='white'>"+events[i]["day"]+"</div><div class='red'>"+months[events[i]["month"]-1]+",  "+events[i]["year"]+"</div></a></div></div>");
           
            //var event_name = $("<div class='event-name'>"+events[i]["occasion"]+":</div>");
            //var event_count = $("<div class='event-count'>"+events[i]["invited_count"]+" Invited</div>");
            if(events[i]["cancelled"]===true) {
                $(event_card).css({
                    "border-left": "10px solid #FF1744"
                });
                event_count = $("<div class='event-cancelled'>Cancelled</div>");
            }
            //console.log(event_name);
            //$(event_card).append(event_name).append(event_count);
           // $(event_card).append(event_name);
            //
            $("#upcomingE").append(event_name);
            //$(".events-container").append(event_card);
           
        }
}else{
    //$("#upcomingE").html("<div class='norecord'><h1>Coming Soon</h1></div>");
    $("#upcomingE").html("<div class='norecord'><h1>No events available for this month.</h1></div>");
}    
}
}

// function show_past_events(events, month, day) {
   
   
//     // Clear the dates container
//     $("#upcomingP").empty();
//     $("#upcomingP").show(250);
  
//     // If there are no events for this date, notify the user
//     if(events.length===0) {      
      
//         $(event_card).css({ "border-left": "10px solid #FF1744" });
//         $(event_card).append(event_name);
//         $(".events-container").append(event_card);
//     }
//     else {
//             $("#upcomingP").empty();
            
//             if(events[0]["noRecord"]===undefined){

          
//         // Go through and add each event as a card to the events container
//         for(var i=0; i<events.length; i++) {
           
           
//             var event_card = $("<div class='event-card'></div>");
//             var event_name=$("<div class='row eventbox upComingEvents'><div class='col-sm-2'><a class='eventdt' href='#'> <div class='white'>"+events[i]["day"]+"</div><div class='red'>"+months[events[i]["month"]-1]+",  "+events[i]["year"]+"</div></a></div><div class='col-sm-8'> <h3>"+events[i]["occasion"]+"</h3><p>"+events[i]["description"]+"</p></div>");
           
            
//             if(events[i]["cancelled"]===true) {
//                 $(event_card).css({
//                     "border-left": "10px solid #FF1744"
//                 });
//                 event_count = $("<div class='event-cancelled'>Cancelled</div>");
//             }
            
//             $("#upcomingP").append(event_name);           
           
//         }
//  }else{
//      $("#upcomingP").html("<div class='norecord'><h1>Coming Soon</h1></div>");
//  }    
// }
// }

// Checks if a specific date has any events
function check_events(day, month, year) {
   
   //console.log(day+"--------"+month+"---------"+year);
    var events = [];
   
    //console.log(event_data["events"]);
    for(var i=0; i<event_data["events"].length; i++) {
        var event = event_data["events"][i];
        
        if(event["day"]==day && event["month"]==month && event["year"]==year) 
        {
                events.push(event);
        }
      
    }
    return events;
}

// Checks if a specific date has any events
function check_topevents(day, month, year) {
   
   //console.log(day+"--------"+month+"---------"+year);
    var events = [];
   
  
    for(var i=0; i<event_topdata["events"].length; i++) {
        var event = event_topdata["events"][i];
         events.push(event);
       
    }
    return events;
}

// Checks if a specific date has any events
function check_pastevents(day, month, year) {
   
   //console.log(day+"--------"+month+"---------"+year);
    var events = [];
   
  
    for(var i=0; i<event_pastdata["events"].length; i++) {
        var event = event_pastdata["events"][i];
         events.push(event);
       
    }
    return events;
}
function eventData(data)
{ 
    datas=data;
    
}
function eventtopData(data)
{ 
    topdatas=data;
  
}

function eventpastData(data)
{ 
    pastdatas=data;
  
}
//var datas=datas
/*var datas=[
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month":11,
        "day": 20,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 11,
        "day": 21,
        "cancelled": true
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
        {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10,
        "cancelled": true
    },
    {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 10
    },
    {
        "occasion": " Test Event",
        "invited_count": 120,
        "year": 2017,
        "month": 5,
        "day": 11
    }
    ];*/
    
// Given data for events in JSON format
//var datas=  ;
  //Given data for events in JSON format

 // $.ajax({
 //            type     : "POST",
 //            dataType : "json",
 //            async    :false,
 //            url      : appURL+'/proxy',
 //            data     : {method:"getEventDetails"},
 //            success  : function(data) 
 //            {
 //                //console.log(data);
 //                eventData(data);
              
 //            }
 //         });
         
 $.ajax({
            type     : "POST",
            dataType : "json",
            async    :false,
            url      : appURL+'/proxy',
            data     : {method:"gettopEventDetails"},
            success  : function(data) 
            {
                //console.log("gg");
                //console.log(data);
                eventtopData(data);
              
                eventData(data);
            }
         });

 $.ajax({
            type     : "POST",
            dataType : "json",
            async    :false,
            url      : appURL+'/proxy',
            data     : {method:"getpastEventDetails"},
            success  : function(data) 
            {
                //console.log("gg");
                //console.log(data);
                eventpastData(data);
                eventData(data);
              
            }
         });
         
var event_data = {
   "events":datas
};

var event_topdata = {
   "events":topdatas
};

// var event_pastdata = {
//    "events":pastdatas
// };