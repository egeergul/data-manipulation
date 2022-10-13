const fs = require("fs");
const { parse } = require("csv-parse");

async function main() {

    const urls = []
    fs.createReadStream("./files/small.csv")
        .pipe(parse({ delimiter: ",", from_line: 1 }))
        .on("data",  function (row) {
            rowStr = row + ""
            rowStr = rowStr.substring(19)
            rowStr = "https://api.github.com/repos/" + rowStr
            urls.push(rowStr)
        })
        .on("end", function () {
            for(i = 0; i < urls.length; i++){
                getResponse(urls[i])
            }
            
            console.log("finished");
        })
        .on("error", function (error) {
            console.log(error.message);
        });
    
    async function getResponse(raw_url){
        const url = raw_url + "/actions/workflows"
        const response = await fetch(url)
        const result = await response.json()
        console.log( result);
        if (result["total_count"]> 0){
            // do smthing
        }
    }
    
   

 


}


main()