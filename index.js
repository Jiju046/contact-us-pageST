function handleClick(){
    // validation
    // fname
    

    if($("#name").val() == ""){
        $("#name").addClass("warning")
        console.log("red applied");
    }
  

    //email
    let emailRegex=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    if(!$("#email").val().match(emailRegex)){
        $("#email").addClass("warning")
    }
   
    //phone
    let phoneRegex=/^(\+91|\+91\-|0)?[6789]\d{9}$/
    
    if(!$("#phone").val().match(phoneRegex)){
        $("#phone").addClass("warning")
    }


    //message
    let message=$("#message")
    if(message.val()== ""){
        message.addClass("warning")
    }
    else if(message.val().length > 300){
        message.addClass("warning")
    }
  
    
}

$("#form").on("submit",function(event){
    event.preventDefault()
    console.log("HR");
    let name= $("#name").val()
    let email= $("#email").val()
    let phone= $("#phone").val()
    let textArea= $("#message").val()

    $("#viewInput").html(
        `<h3>Given Data</h3>
        <p>Name: <span>${name}</span></p>
        <p>Email: <span>${email}</span></p>
        <p>Phone: <span>${phone}</span></p>
        <p>Message: <span>${textArea}</span></p>`
    )
    
    $("#trigger").click()
    
})

