$(document).ready(function(){
    var val1="";
    var kirilLetter=["а","б","ҹ","ч","д","е","ә","ф","ҝ","ғ","һ","х","ы","и","ж","к","г","л","м","н","о","ө","п","р","с","ш","т","у","ү","в","ј","з",
    "А","Б","Ҹ","Ч","Д","Е","Ә","Ф","Ҝ","Ғ","Һ","Х","Ы","И","Ж","К","Г","Л","М","Н","О","Ө","П","Р","С","Ш","Т","У","Ү","В","Ј","З"];
    var azLetter=["a","b","c","ç","d","e","ə","f","g","ğ","h","x","ı","i","j","k","q","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z",
    "A","B","C","Ç","D","E","Ə","F","G","Ğ","H","X","I","İ","J","K","Q","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"];
    function convert(kirilText){
        for(var i=0;i<kirilText.length;i++){
            for(var j=0;j<kirilLetter.length;j++){
                if(kirilText[i]==kirilLetter[j]){
                    kirilText=kirilText.substr(0, i) + azLetter[j] + kirilText.substr(i + 1);
                    continue;
                }                
            }
        }
        return kirilText;
    } 
    $("#textkiril").keyup(function(){
        val1=$(this).val();
        $("#textaz").html(convert(val1));
    });
 
});
