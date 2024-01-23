
        function run() {
            let htmlcode = document.getElementById("html-code").value;
            let csscode = document.getElementById("css-code").value;
            let jscode = document.getElementById("js-code").value;
            let output = document.getElementById("output");

            
            let outputDocument = output.contentDocument || output.contentWindow.document;

            
            outputDocument.body.innerHTML = htmlcode;
            let styleElement = outputDocument.createElement("style");
            styleElement.innerHTML = csscode;

    
            outputDocument.head.appendChild(styleElement);

    
             let scriptElement = outputDocument.createElement("script");
            scriptElement.innerHTML = jscode;
            outputDocument.body.appendChild(scriptElement);

        }
    