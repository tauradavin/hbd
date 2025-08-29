document.addEventListener('DOMContentLoaded', function() {
    // Modal Selamat Datang
    const welcomeModal = document.getElementById('birthdayModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Tampilkan modal saat halaman dimuat
    welcomeModal.style.display = 'flex';

    // Sembunyikan modal saat tombol diklik
    closeModalBtn.addEventListener('click', () => {
        welcomeModal.style.display = 'none';
        typeWriter();
        confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 }
        });
    });

    // Efek Mengetik untuk Pesan Ulang Tahun
    const messageText = "Selamat ulang tahun ya sayang, makasih udh selalu ada buat aku ya... aku harap kita bisa sama sama terus kedepannya agar aku bisa ketemu momen kaya gini di setiap tahunnya. semoga kita sama sama menjadi pribadi yang lebih baik lagi untuk kedepannya... maafin aku yang selalu buat kamu nangis, sedih dan marah aku juga kecewa sama diri aku sendiri yang buat kamu begitu... selamat ulang tahunnya semoga tahun ini menjadi tahun yang baik buat kamu. Aku akan selalu ada di samping kamu dan support kamu dalam hal apapun. Happy Birthday yaa sayanggg";
    const messageElement = document.getElementById('birthday-message');
    let i = 0;
    
    function typeWriter() {
        if (i < messageText.length) {
            messageElement.innerHTML += messageText.charAt(i);
            i++;
            setTimeout(typeWriter, 25);
        }
    }

    // Fungsionalitas Tombol Kejutan (Foto Troll)
    const surpriseBtn = document.getElementById('surprise-btn');
    const trollModal = document.getElementById('trollModal');
    const closeTrollBtn = document.querySelector('.close-troll-modal');

    surpriseBtn.addEventListener('click', function() {
        trollModal.style.display = 'flex';
        // Efek konfeti saat kejutan dibuka
        confetti({
            particleCount: 100,
            spread: 90,
            origin: { y: 0.5 }
        });
    });

    closeTrollBtn.addEventListener('click', function() {
        trollModal.style.display = 'none';
    });
    
    // Fungsionalitas Galeri Modal yang diperbarui
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const galleryImages = document.querySelectorAll('.gallery-img');

    // Tambahkan fungsionalitas untuk gambar troll
    const trollImages = document.querySelectorAll('.troll-img');

    galleryImages.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // Terapkan fungsionalitas yang sama pada gambar troll
    trollImages.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });


    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});