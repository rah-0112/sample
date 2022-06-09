const api_url =
    "http://localhost:5000/";

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(response);

    if (response) {
        hideloader();
    }

    show(data);
}

getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab =
        `<tr>
          <th>Id</th>
          <th>Name</th>
         </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.name}</td>         
</tr>`;
    }
    document.getElementById("employees").innerHTML = tab;
}
