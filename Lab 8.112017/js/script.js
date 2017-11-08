
// checked olunmus checkboxlar
// document.querySelectorAll("#login form input[type=checkbox]:checked");

// checked olunmamis checkboxlar
// document.querySelectorAll("#login form input[type=checkbox]:not(:checked)");

var form = document.querySelector("#login form");
var agree = document.querySelector("#login form input[type=checkbox][name=agreement]");
var username = document.querySelector("#login form input[name=username]");
var password = document.querySelector("#login form input[name=password]");
var submit = document.querySelector("#login form button");

form.addEventListener("submit",function(event){

    if(agree.checked == false || username.value.trim().length < 6  || password.value.trim().length < 6){
        alert("Sertleri qebul ele seyfeni ");
        submit.disabled = true;
        event.preventDefault();
    }
    else{
        alert(document.querySelector("#login form input[type=radio]:checked").value);
    }

});

var selectLang = document.getElementById("languageSelect");
var img = document.querySelector("#language img");
console.log(img)
selectLang.addEventListener("change",function(){
    switch(this.value){
        case "az": img.setAttribute("src","https://bisorubicevap.com/images/bisoru-bicevap/tarih/azerbaycan-bayraginin-anlami-nedir.jpg");
        break;
        case "tr": img.setAttribute("src","https://iasbh.tmgrup.com.tr/ea8093/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/galeri/turkiye/en-guzel-turk-bayragi-resimleri-2016-turk-bayragi-resimleri/15.jpg");
        break;

        case "rus": img.setAttribute("src","http://img.day.az/2016/02/18/rusiya_bayragi_002.jpg");
        break;
    }
});









//neye clicklemiwikse onu qaytarir
// window.addEventListener("click",function(e){
//     console.log(e.target)
// })