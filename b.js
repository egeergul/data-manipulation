

const btnRepos = document.getElementById("btnRepos"); 
btnRepos.addEventListener("click", getRepos);

async  function getRepos() {
    const url = "https://api.github.com/search/repositories?q=stars:>10000"
    const response = await fetch(url)
    console.log(response)
    const result = await response.json()
    console.log(result)

    var jsonData = JSON.stringify(result);

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    download(jsonData, 'json.txt', 'text/plain');
            
            
    
}