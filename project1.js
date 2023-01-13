function register(){
    var namefromhtml =document.getElementById("Name");
    if (namefromhtml) {
        var name = namefromhtml.value ;
        console.log(name);
    }
    var emailfromhtml =document.getElementById("Email");
    if(emailfromhtml){
        var email = emailfromhtml.value;
        console.log(email);
    }
    var passwordfromhtml =document.getElementById("Password");
    if(passwordfromhtml){
        var password = passwordfromhtml.value; 
    }
    
    if(name && email && password ){
        localStorage.setItem(
            "userData", 
            JSON.stringify({name:name , email:email, password:password})
        );
        localStorage.setItem("isUserLoggedin", "true");
        alert("You Registered Succesfully");
        window.location.href = "./login (Project1).html";
    } else{
        alert("Please fill all the details")
    }
}

function login(){
    var emailFromHTML = document.getElementById("Email");
    if(emailFromHTML){
        var emailFromLogin = emailFromHTML.value;
        console.log(emailFromLogin);
    }
    var passwordfromhtml =document.getElementById("Password");
    if(passwordfromhtml){
        var passwordFromLogin = passwordfromhtml.value; 
    }

    if(emailFromLogin && passwordFromLogin){
        var datafomlocal = localStorage.getItem("userData");
        var parsedData = JSON.parse(datafomlocal);

        if(
            emailFromLogin==parsedData.email && 
            passwordFromLogin == parsedData.password){
                localStorage.setItem("isUserLoggedin","true");
                alert("Login Sucessfull");
                window.location.href="./HOME.html";
            }else {
                alert("Wrong Credentilas !!!");
            }
    }else{
        alert("Erroe:Please fill all the Details")
    }
}

function addToCart(proId){
    alert("adding to cart");

    var existingProducts =JSON.parse(localStorage.getItem("allProducts"));
    console.log(existingProducts);

    if(existingProducts==null)
    {existingProducts=[]
    };

    var proPs= proId.querySelectorAll("p");
    var proName= proPs[0].innerText;
    var proImg = proId.querySelector("img").src;
    var proPrice = proPs[2].innerText;

    var proObj={pN:proName, pP:proPrice , pI:proImg}
    existingProducts.push(proObj);
    localStorage.setItem("allProducts",JSON.stringify(existingProducts))
    alert("Product Added")
}

function logOut(){
    alert("Logging out....")
    console.log(localStorage.getItem("userData"));
    localStorage.removeItem("userData")
    localStorage.removeItem("allProducts")
    localStorage.removeItem("isUserLoggedin")
    alert("Bye Bye for Now.... Visit again ...")
    window.location.href='./login (Project1).html'
}



