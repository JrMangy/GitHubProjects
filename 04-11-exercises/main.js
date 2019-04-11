/*$('#circle').click(function(){
    $('img').attr('src','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81B%252BMxLoNfL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FRWBY-Shirow-Miwa%2Fdp%2F1421595125&docid=QwGa45zMwXmFVM&tbnid=mjWIlA14TCdS_M%3A&vet=10ahUKEwiZ-JP2mcjhAhUjVt8KHTmpDsMQMwhCKAMwAw..i&w=1400&h=2008&safe=off&bih=689&biw=1280&q=rwby&ved=0ahUKEwiZ-JP2mcjhAhUjVt8KHTmpDsMQMwhCKAMwAw&iact=mrc&uact=8')
});*/

$('#circle').click(function(){
    alert('Clicked!');
});

$('#circle').hover(function(){
    $('p').html('We changed the text');
});

$('#square').click(function(){
    $(this).css('background-color','blue');
});