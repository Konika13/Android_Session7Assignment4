  
function outerfunction(innerfunction)
      {
      if (innerfunction &&(typeof innerfunction =="function"))
            {
            innerfunction();
            }
       }
     outerfunction(function()
        {
     console.log("Hello World from inner function")
        });
