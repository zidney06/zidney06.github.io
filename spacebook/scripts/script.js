
const container = document.getElementById("container")
const overlay = document.getElementById("overlay")

function buatPostingan() {
  const status = document.getElementById("status")
  const wrapper = document.createElement("div")

  const time = new Date()
  let hour = time.getHours()
  let minute = time.getMinutes()


  wrapper.innerHTML = `
    <div class="border-bottom">
      <div class="container-fluid d-flex w-100 p-1 position-relative border-bottom">
        <img src="images/profil.png" alt="" class="f-profil rounded-circle">
        <div class="ms-2">
          <h4>Yuriko</h4>
          <span class="">${hour} : ${minute} . <i class="bi-globe-asia-australia"></i></span>
        </div>
        <a class="btn position-absolute end-0" href="#"><i class="bi-three-dots"></i></a>
      </div>
      <div>
        <p>${status.value}</p>
      </div>
    </div>
    `
    
  container.appendChild(wrapper)
  wrapper.className = "border mb-2"

  //menghapus text yang telah di masukan
  status.value = "";

}

function tampilkan() {
  overlay.style.display = "block"
}

function tutup() {
  overlay.style.display = "none"
}

let iterator = 1
function konfirmasi() {
  const myFile = document.getElementById("myFile")
  const penjelasan = document.getElementById("penjelasan")

  const reader = new FileReader()
  const file = myFile.files[0]
  reader.readAsDataURL(file)
  
  console.log(reader)
  
  //cek apakah user sudah memasukkan sesuatu atau belum
  if (!file) {
    alert("anda belum masukan sesuatu")
    return
  }
  
  

  //macam² tipe file yang boleh dimasukan uleh user
  const allowedTypesImage = ["image/jpeg", "image/png", "image/gif"]
  const allowedTypesVideo = ["video/mp4","video/webm", "video/ogg"]
  
  reader.onload = () => {
    const result = reader.result
    
    let tester
    if (allowedTypesImage.includes(file.type)) {
      tester = document.createElement("img")
      tester.className = "w-100"
      tester.src = result
    }
    else if (allowedTypesVideo.includes(file.type)) {
      tester = document.createElement("video")
      
      tester.className = "w-100"
      tester.style.aspectRatio = 2 / 1
      tester.src = result
      tester.autoplay = true
      tester.controls = true
      tester.loop = true
      
    }
    else {
      alert("ekstensi file yang anda masukkan tidak terdaftar")
      tutup()
      return
    }
    
    //memasukan file gambar ke dalam postingan 
    const time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()

    const wrapper = document.createElement("div")

    wrapper.innerHTML = `
      <div class="border-bottom">
        <div class="container-fluid d-flex w-100 p-1 position-relative border-bottom">
          <img src="images/profil.png" alt="" class="f-profil rounded-circle">
          <div class="ms-2">
            <h4>Yuriko</h4>
            <span class="">${hour} : ${minute} . <i class="bi-globe-asia-australia"></i></span>
          </div>
          <a class="btn position-absolute end-0" href="#"><i class="bi-three-dots"></i></a>
        </div>
        <div id="tes${iterator}">
          <div class="ps-1">
            <p>${penjelasan.value}</p>
          </div>
        </div>
      </div>
    `
    
    wrapper.className = "border mb-2"
    container.appendChild(wrapper)
  
    const imageElement = document.getElementById(`tes${iterator}`)

    imageElement.appendChild(tester)
    
    iterator++
    
    myFile.value = ""
    penjelasan.value = ""
    
    tutup() 
  } 
}