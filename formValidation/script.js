let nameError = document.getElementById('nameError');
const submitBtn = document.getElementById('submitBtn');


function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = `Name is Required <i class="fa-solid fa-xmark"></i>`;
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = `Write Full Name <i class="fa-solid fa-xmark"></i>`;
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    validateName();
});