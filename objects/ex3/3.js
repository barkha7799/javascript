    function myFunc() {
        var a = 100;
        var b = 10;
        
        try {
           if ( b == 0 ) {
              throw( "Divide by zero error." ); 
           } else {
              var c = a / b;
           }
        }
        catch ( e ) {
           alert("Error: " + e );
        }
    }