var arr=[]
$('button').on('click',function(){
                                         .                                                                                                                                                                                                                                                       mmmmmmmmmmmmmmmmmmmmmmmmmmm
})




























//$('sag').on('click',function()
//{
    //$('div').animate({
 
      // left:'+=40px'
    //   
   /// },fast)
    
//})
//$('sol').on('click',function()
//{
    //$('div').animate({
 
     // left:'-=40px'
       
   // },fast)
//})























$('button').on("click",function(){
     
   var text=$('input').val()
   $.ajax({
       method:" GET",
       url:``
   })


}).then(function(response)
{
    console.log(response)
    var img=document.querySelector('img');
    img.setAttribute('src',response.data)
    $('.sekiller').append(img)
}).catch(function(err)
{
    console.log('sistemde xeta:')
})
