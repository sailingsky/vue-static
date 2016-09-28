var data = {
    name:"beck",
    message:"this is a message",
    arrays:[{text:"text 1 "},{text:'text 2'},{text:'text 4'}]
};

var vue = new Vue({
   el:'#example-1',
   data:data,
   methods:{
       alert:function(){
           alert("alert !!");
       }
   }
});
