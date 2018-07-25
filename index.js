$(document).ready(function(){
    
    $('button').click(function(){
        printElem('.container table');
    });
    
    function printElem(elem) {
        $('.checkboxes').css('opacity', '0');
        //Popup($(elem).html());
        //$('.checkboxes').css('opacity', '1');
    }
    
    function Popup(data) {
        //console.log(data);
        var myWindow = window.open('', 'print', 'height=500, width=800');
        myWindow.document.write('<html><head><title>Печать</title>');
        myWindow.document.write('</head><body>');
        myWindow.document.write(data);
        myWindow.document.write('</body></html>');
        
        myWindow.print();
        myWindow.close();
    }
    
    console.log($('td:not(.active), td:not(:first-child)'));
    $('td:not(.active)').hide();
    $('td:first-child').show();
    
    /*
    if($('#first').prop('checked')) {
        $('td:nth-child(2)').addClass('active');
    } else {
        $('td:nth-child(2)').removeClass('active');
    }
    
    if($('#second').prop('checked')) {
        $('td:nth-child(3)').addClass('active');
    } else {
        $('td:nth-child(3)').removeClass('active');
    } */
    
    
});