//Use this function on click event and provide id of the element to print or leave it blank.
        // Example: printDocument("") OR printDocument("myDivId") OR printDocument("myDivId1, myDivId2")
       
        function printContent() {
            document.getElementById("printBtn").addEventListener("click", function() {
                var printContent = document.getElementById('contentToPrint').innerHTML;

                var allContent = document.body.innerHTML;
                document.body.innerHTML = printContent ;
                window.print();
                document.body.innerHTML = allContent;
              });
         }