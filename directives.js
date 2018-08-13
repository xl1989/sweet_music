app.directive("headInfo", function() { 
  return { 
    restrict: "E", 
    scope: { 
      headinfo: "=" 
    }, 
    templateUrl: "header.html" 
  }; 
});

app.directive("footerInfo", function(){
    return{
        restrict:"E",
        scope:{
            footerInfo:"="
        },
        templateUrl:"footer.html"
    };
});

