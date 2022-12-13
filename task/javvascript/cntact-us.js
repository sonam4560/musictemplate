function form_valid(){
    let fname=document.form1.fname.value;
    if( fname==""){
        document.getElementById("fname_mess").innerHTML="enter your name)"
        return false;
    }
}