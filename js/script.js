window.onload = () =>{
  let button = document.getElementById("hitung")
  button.addEventListener("click",hitung)
  
  let resetButton = document.getElementById("reset")
  resetButton.addEventListener("click", resetForm)


  
}
  
  function hitung(){
  
    let lakiInput = document.getElementById("m")
    let wanitaInput = document.getElementById("f")
    let beratInput = document.getElementById("weight")
    let usiaInput = document.getElementById("age")
    let tinggiInput = document.getElementById("height")
    let hasil = document.getElementById("hasil")
    let resultArea = document.querySelector('.comment');
  
    let laki =parseFloat(lakiInput.value)
    let wanita = parseFloat(wanitaInput.value)
  
    let jk = ('laki','wanita')
  
    let berat = parseFloat(beratInput.value)
    let usia = parseFloat(usiaInput.value)
    let tinggi = parseFloat(tinggiInput.value)
  
    if (isNaN(berat) || isNaN(usia)|| isNaN(tinggi)) {
          hasil.innerHTML= "PLEASE MASUKAN DATA."
          return;  
          console.log(hasil)
    }
    
    let bmi = berat / ((tinggi/100) ** 2)
    let category = ""
    if (bmi < 18.5) {
        result = "Kekurangan Berat Badang"

      } else if (bmi < 25) {
        result = "Berat Badan Normal"

      } else if (bmi < 30) {
        result = "Kelebihan Berat Badan"

      } else {
        result = "Obesitas"

      }
      
     
      resultArea.style.display = 'block';
      resultArea.style.display = 'block';
      document.querySelector('.comment').innerHTML = `Kamu Memiliki Berat Badan <span id="comment">${result}</span>`;
      hasil.innerHTML = bmi.toFixed(2);
      document.querySelector('.keterangan').innerHTML =  `<span id="comment">${result}</span>`;



      

   
  }


 
      function resetForm() {
        const form = document.getElementById("myForm");
        const inputs = form.querySelectorAll("input[type='number'], input[type='radio']:checked");
        const hasil = document.getElementById("hasil");
       const com =  document.querySelector('.comment');
        inputs.forEach(input => {
          if (input.type === "radio") {
            input.checked = false; // Uncheck radio buttons
          } else {
            input.value = ""; // Set value to empty string for number inputs
          }
        });
        hasil.innerHTML = "";
        com.innerHTML ="";
      }
      
  