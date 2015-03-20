function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

$(document).ready(function(){
    //md_content = readTextFile('https://github.com/AssassinPig/znotes/blob/master/markdown.md');
    //$('.content').apppend(md_content);
    /*
    $.get(
            //'https://raw.githubusercontent.com/AssassinPig/znotes/master/markdown.md', function(data){
            'http://www.baidu.com', function(data){
                console.log('get ok');
            }
        );
    */
    /*
    $.ajax(
            {
                url:'https://raw.githubusercontent.com/AssassinPig/znotes/master/markdown.md'
            }
        ).done(function(content){
            console.log('abc');
        });
    */
    $('.content').load('https://raw.githubusercontent.com/AssassinPig/znotes/master/markdown.md',
        function(response, status, xhr){
        //console.log('load ok');
        console.log(response);
    });
});