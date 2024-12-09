function search() {
    let searchbox = document.getElementById('search-item').value.toUpperCase().split(" ").join("")
    let storeitems = document.getElementById('product-list')
    let product = document.querySelectorAll(".product")
    // let proll = document.querySelectorAll(".roll")
    // console.log(proll)
    // console.log(product)

    for(var i=0; i < product.length; i++){
        let match = product[i].getElementsByTagName("h3")[0];
        let match2 = product[i].getElementsByTagName("p")[0];
        console.log(match)
        if(match){
            let textvalue = match.textContent
            let textvalue2 = match2.textContent
            if(textvalue.split(" ").join("").indexOf(searchbox) > -1){
                product[i].style.display = "";
            }
            else if(textvalue2.indexOf(searchbox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
        //  if(match2){
        //     let textvalue = match2.textContent 
        //     if(textvalue.indexOf(searchbox) > -1){
        //         product[i].style.display = "";
        //     }
        //     else{
        //         product[i].style.display = "none";
        //     }
        // }
        
    }

    // for(var i=0; i < proll.length; i++){
    //     let match = proll[i].getElementsByTagName("p")[0];
    //     if(match){
    //         let textvalue = match.textContent 
    //         if(textvalue.indexOf(searchbox) > -1){
    //             proll[i].style.display = "";
    //         }
    //         else{
    //             proll[i].style.display = "none";
    //         }
    //     }
    // }
}