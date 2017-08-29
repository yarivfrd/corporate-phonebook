
let cap = {};


$.getJSON( "db.json", (data) => {
    
    let contacts = data.employees;
    
    for (let contact = 0; contact < contacts.length; contact++) {
        $('<li><a href=#'+contacts[contact].id+' data-rel="dialog">'+contacts[contact].firstName+' '+contacts[contact].lastName+''+' | '+contacts[contact].position+'</a></li>').appendTo('.contact-list');
        $('<div data-role="page" id='+contacts[contact].id+'><div data-role="header"><h1>'+contacts[contact].firstName+' '+contacts[contact].lastName+'</h1></div><div data-role="content"><div class="avatar" style="background-image: url('+contacts[contact].avatar+')"></div><div class="phone-numbers"><a class="ui-btn ui-btn-inline ui-icon-phone ui-btn-icon-left" href="tel:'+contacts[contact].mobile+'">Mobile</a><a class="ui-btn ui-btn-inline ui-icon-phone ui-btn-icon-left" href="tel:'+contacts[contact].work+'">Office</a></div></div>').appendTo('body');        
    }
    $(".contact-list").listview("refresh");
    
});