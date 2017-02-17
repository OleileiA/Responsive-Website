/**
 * Created by cyw on 16/9/11.
 */
window.onload = function(){
  var input1 = document.querySelector("header input");
  var search = document.querySelector(".first-input");
  input1.onfocus = function(){
    search.style.display = "none";
    this.style.width = "10%";
  };
  input1.onblur = function(){
    search.style.display = "inline-block";
    this.style.width = "40px";
  };
  (function(class1,class2){
    //getStyle获取到总元素的宽度
    var part = document.querySelector(".water-fall");
    var part1 = getStyle(part).width;
    var partHeight = part1.substring(0,part1.length-2);
    function getStyle(obj){
      if(obj.currentStyle){
        return obj.currentStyle;
      }else{
        return getComputedStyle(obj);
      }
    }
    /*
     * 1.实现瀑布流
     * */
//先获取到瀑布流中所有的块
    var parts = document.querySelectorAll(class1);
    var waterFall = document.querySelector(class2);
//partWidth定义为块的宽度,初始就是400
    var clientWidth = document.documentElement.clientWidth;
    if(clientWidth <= 768){
      var col = 1;
    }else{
      var col = 3;
    }
    var cols = col;
//定义容器的宽度
    var allWidth = partHeight;
    console.log(allWidth);
    waterFall.style.width = allWidth + "px";
    //partWidth定义为块的宽度,初始就是400
    var partWidth = allWidth/cols;
//定义两个数组分别储存块绝对定位的位置.
    var arrT = [];
    var arrL = [];
    for(var i = 0;i < cols;i++){
      arrL.push(partWidth * i);//push进去块的left值.
      arrT.push(0);            //push进去块的top值.
    }
    setPage();
    function setPage(){
      for(var i = 0;i < parts.length;i++){
        parts[i].style.width = partWidth + "px";
        //获取高度
        if(parts[i].currentStyle){
          var partH = parts[i].currentStyle.height;       //支持IE
        }else{
          var partH = getComputedStyle(parts[i]).height;  //支持高级浏览器
        }
        var index = pageIndex();
        parts[i].style.top = arrT[index]+"px";
        parts[i].style.left = arrL[index]+"px";
        arrT[index] += Number(partH.substring(0,partH.length - 2 ));
      }
      waterFall.style.height = arrT[index] + "px";
    }
//找到一排中之最小的那个图片的index
    function pageIndex() {
      var index = 0;
      var arrNum = arrT[0];
      for (var i = 1; i < arrT.length; i++) {
        if (arrT[i] < arrNum) {
          arrNum = arrT[i];
          index = i;
        }
      }
      return index;
    }
  })(".fall1 .part",".fall1 .main");
  (function(class1,class2,col){
    //getStyle获取到总元素的宽度
    var part = document.querySelector(".water-fall");
    var part1 = getStyle(part).width;
    var partHeight = part1.substring(0,part1.length-2);
    function getStyle(obj){
      if(obj.currentStyle){
        return obj.currentStyle;
      }else{
        return getComputedStyle(obj);
      }
    }
    /*
     * 1.实现瀑布流
     * */
//先获取到瀑布流中所有的块
    var parts = document.querySelectorAll(class1);
    var waterFall = document.querySelector(class2);

//初始化每排块的个数,初始化为3个
    var clientWidth = document.documentElement.clientWidth;
    if(clientWidth <= 767){
      var col = 1;
    }else{
      var col = 2;
    }
    var cols = col;
//定义容器的宽度
    var allWidth = partHeight;
    waterFall.style.width = allWidth + "px";
    //partWidth定义为块的宽度,初始就是400
    var partWidth = allWidth/cols;
//定义两个数组分别储存块绝对定位的位置.
    var arrT = [];
    var arrL = [];
    for(var i = 0;i < cols;i++){
      arrL.push(partWidth * i);//push进去块的left值.
      arrT.push(0);            //push进去块的top值.
    }
    setPage();
    function setPage(){
      for(var i = 0;i < parts.length;i++){
        parts[i].style.width = partWidth+"px";
        //获取高度
        if(parts[i].currentStyle){
          var partH = parts[i].currentStyle.height;       //支持IE
        }else{
          var partH = getComputedStyle(parts[i]).height;  //支持高级浏览器
        }
        var index = pageIndex();
        parts[i].style.top = arrT[index]+"px";
        parts[i].style.left = arrL[index]+"px";
        arrT[index] += Number(partH.substring(0,partH.length - 2 ));
      }
      waterFall.style.height = arrT[index] + "px";
    }
//找到一排中之最小的那个图片的index
    function pageIndex() {
      var index = 0;
      var arrNum = arrT[0];
      for (var i = 1; i < arrT.length; i++) {
        if (arrT[i] < arrNum) {
          arrNum = arrT[i];
          index = i;
        }
      }
      return index;
    }
  })(".fall2 .part",".fall2 .main");
  window.onresize = function(){
    //获取窗口的当前宽度.
    //var clientW = document.documentElement.clientWidth;
    setTimeout(function(){
      var clientW = document.documentElement.clientWidth;
      if (clientW >= 1200) {
        var partHeight = 1200;
      } else if (clientW > 992 && clientW <= 1199) {
        var partHeight = 970;
      } else if (clientW > 768 && clientW <= 991) {
        var partHeight = 750;
      }else if(clientW <= 768){
        var col = 1;
        var partHeight = clientW;
      }


      (function(class1,class2,col){
        /*
         * 1.实现瀑布流
         * */
//先获取到瀑布流中所有的块
        var parts = document.querySelectorAll(class1);
        var waterFall = document.querySelector(class2);
//partWidth定义为块的宽度,初始就是400
       if(col){
         var cols = col;
       }else {
         var cols = 3;
       }
//定义容器的宽度
        var allWidth = partHeight;
        waterFall.style.width = allWidth + "px";
        //partWidth定义为块的宽度,初始就是400
        var partWidth = allWidth/cols;
//定义两个数组分别储存块绝对定位的位置.
        var arrT = [];
        var arrL = [];
        for(var i = 0;i < cols;i++){
          arrL.push(partWidth * i);//push进去块的left值.
          arrT.push(0);            //push进去块的top值.
        }
        setPage();
        function setPage(){
          for(var i = 0;i < parts.length;i++){
            parts[i].style.width = partWidth + "px";
            //获取高度
            if(parts[i].currentStyle){
              var partH = parts[i].currentStyle.height;       //支持IE
            }else{
              var partH = getComputedStyle(parts[i]).height;  //支持高级浏览器
            }
            var index = pageIndex();
            parts[i].style.top = arrT[index]+"px";
            parts[i].style.left = arrL[index]+"px";
            arrT[index] += Number(partH.substring(0,partH.length - 2 ));
          }
          waterFall.style.height = arrT[index] + "px";
        }
//找到一排中之最小的那个图片的index
        function pageIndex() {
          var index = 0;
          var arrNum = arrT[0];
          for (var i = 1; i < arrT.length; i++) {
            if (arrT[i] < arrNum) {
              arrNum = arrT[i];
              index = i;
            }
          }
          return index;
        }
      })(".fall1 .part",".fall1 .main",col);
      (function(class1,class2,col){
        /*
         * 1.实现瀑布流
         * */
//先获取到瀑布流中所有的块
        var parts = document.querySelectorAll(class1);
        var waterFall = document.querySelector(class2);

//初始化每排块的个数,初始化为3个
       if(col){
         var cols = col;
       }else{
         var cols = 2;
       }
//定义容器的宽度
        var allWidth = partHeight;
        waterFall.style.width = allWidth + "px";
        //partWidth定义为块的宽度,初始就是400
        var partWidth = allWidth/cols;
//定义两个数组分别储存块绝对定位的位置.
        var arrT = [];
        var arrL = [];
        for(var i = 0;i < cols;i++){
          arrL.push(partWidth * i);//push进去块的left值.
          arrT.push(0);            //push进去块的top值.
        }
        setPage();
        function setPage(){
          for(var i = 0;i < parts.length;i++){
            parts[i].style.width = partWidth+"px";
            //获取高度
            if(parts[i].currentStyle){
              var partH = parts[i].currentStyle.height;       //支持IE
            }else{
              var partH = getComputedStyle(parts[i]).height;  //支持高级浏览器
            }
            var index = pageIndex();
            parts[i].style.top = arrT[index]+"px";
            parts[i].style.left = arrL[index]+"px";
            arrT[index] += Number(partH.substring(0,partH.length - 2 ));
          }
          waterFall.style.height = arrT[index] + "px";
        }
//找到一排中之最小的那个图片的index
        function pageIndex() {
          var index = 0;
          var arrNum = arrT[0];
          for (var i = 1; i < arrT.length; i++) {
            if (arrT[i] < arrNum) {
              arrNum = arrT[i];
              index = i;
            }
          }
          return index;
        }
      })(".fall2 .part",".fall2 .main",col);
    },500)

  };
  function turn1(){
    var n = 0;
    setInterval(function(){
      function getStyle(obj){
        if(obj.currentStyle){
          return obj.currentStyle;
        }else{
          return getComputedStyle(obj);
        }
      }
      var height = getStyle($(".news ul li")[0]).height;
      var numRight = height.substring(0,height.length-2);
      n++;
      $(".news ul").animate({
        marginTop:-40*n+"px"
      },500,function(){
        if(n == $(".news ul").children().length-1){
          n = 0;
          $(".news ul").css("marginTop",0);
        }
      })
    },2000)
  }
  function turn2(){
    var n = 0;
    setInterval(function(){

      function getStyle(obj){
        if(obj.currentStyle){
          return obj.currentStyle;
        }else{
          return getComputedStyle(obj);
        }
      };
      var left = getStyle($(".pic-turn ul li")[0]).width;
      var numLeft = left.substring(0,left.length-2);
      n++;
      $(".pic-turn ul").animate({
        marginLeft:-numLeft*n+"px"
      },500,function(){
        if(n == $(".pic-turn ul").children().length-3){
          n = 0;
          $(".pic-turn ul").css("marginLeft",0);
        }
      })
    },3000)
  }
  turn1();
  turn2();
};