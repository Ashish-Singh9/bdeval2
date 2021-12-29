const form = document.getElementById( "myForm" );
 form.addEventListener('submit',(e)=>{
     e.preventDefault();
     submitFun(e);
     console.log("form");
 })
 function submitFun(e){
    const name=document.getElementById('name');
    const email=document.getElementById('email');
    const address=document.getElementById('address');
    const phno=document.getElementById('phno');
    const XHR = new XMLHttpRequest();

    let data={
        name:name.value,
        email:email.value,
        address:address.value,
        phno:phno.value
    }
    
    // Define what happens on successful data submission
    XHR.addEventListener("load", function()
    {

        XHR.status === 200 && console.log("data send")

    });


    // Set up our request
    XHR.open( "POST", "http://localhost:3000" );
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.send(JSON.stringify( data));
    // The data sent is what the user provided in the form

 }
 