fetch("https://fakestoreapi.com/products").then((data) => {

    return data.json();
}).then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
        tableData += ` <tr>
             
                <td>${values.title}</td>
                <td>${values.description}</td>
                <td>${values.price}</td>
                <td><img src="${values.image}"/></td>
              <td>  <button onclick="addToCart(${values.id})"; class="btn-primary";">Add to Cart</button></td>

            </tr>`;
    })
    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})



