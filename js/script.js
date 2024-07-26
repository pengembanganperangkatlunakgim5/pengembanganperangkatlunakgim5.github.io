const students = [
  {
    name: "Alan",
    quote: "I will do whatever it takes.",
    urlInstagram: "instagram.com/alanzagi",
    insta: "alanzagi",
    title: "Wakil Ketua Kelas",
    imageUrl: "./img/alan.jpg",
  },
  {
    name: "Leonard Lay",
    quote: "Kalo bisa maju, kenapa harus mundur?",
    urlInstagram: "instagram.com/hyy_im_leo",
    insta: "hyy_im_leo",
    title: "Siswa Kelas",
    imageUrl: "./img/leonardlay.jpg",
  },
  {
    name: "Shervy",
    quote: "If there's will, there's way",
    urlInstagram: "instagram.com/_shervy01",
    insta: "_shervy01",
    title: "Siswa Kelas",
    imageUrl: "./img/shervy.jpg",
  },
  {
    name: "Nawang Sue Runus",
    quote: "Diam tetapi tidak kejam!",
    urlInstagram: "instagram.com/pplg.xl",
    insta: "pplg.xl",
    title: "Ketua Kelas",
    imageUrl: "./img/nawangsuerunus.jpg",
  },
  {
    name: "Harvin Deniro",
    quote: "No fear.",
    urlInstagram: "instagram.com/pplg.xl",
    insta: "pplg.xl",
    title: "Siswa Kelas",
    imageUrl: "./img/harvindeniro.jpg",
  },
  {
    name: "Hermengky",
    quote: "做一个人不要三心二意, 明白.",
    urlInstagram: "instagram.com/ssc_dick",
    insta: "ssc_dick",
    title: "Siswa Kelas",
    imageUrl: "./img/hermengky.jpg",
  },
  {
    name: "Erik",
    quote: "Pria sejati lahir untuk menantang gelombang pasang. Bukan ia mengekang dan mencari aman untuk dirinya sendiri",
    urlInstagram: "instagram.com/bg_rikzz",
    insta: "bg_rikzz",
    title: "Seksi Keamanan dan Keagamaan",
    imageUrl: "./img/erik.jpg",
  },
  {
    name: "Angely Phang",
    quote: "Saat kau menertawakan hidupku, apakah hidupmu terasa lebih baik? Begitukah?",
    urlInstagram: "instagram.com/manusia_disin1",
    insta: "manusia_disin1",
    title: "Siswa Kelas",
    imageUrl: "./img/angelyphang.jpg",
  },
  {
    name: "Hengky",
    quote: "Apapun yang terjadi tetaplah tersenyum.",
    urlInstagram: "instagram.com/hengky.096",
    insta: "hengky.096",
    title: "Siswa Kelas",
    imageUrl: "./img/hengky.jpg",
  },
  {
    name: "Aprilisia",
    quote: "No matter how difficult the path is, if it's a blessing for you, God will surely make it easy",
    urlInstagram: "instagram.com/aprilicia_04",
    insta: "aprilicia_04",
    title: "Sekretaris Kelas",
    imageUrl: "./img/aprilisia.jpg",
  },
  {
    name: "Daniel Derlino",
    quote: "Kenyang motivasi, lapar aksi. Tinggi imajinasi, lupa ekspetasi",
    urlInstagram: "instagram.com/daniel.derlino",
    insta: "daniel.derlino",
    title: "Siswa Kelas",
    imageUrl: "./img/danielderlino.jpg",
  },
  {
    name: "Ravi Kurniawan",
    quote: "Semangatlah, karena setiap pengetahuan baru akan membuka pintu kesuksesan di masa depan.",
    urlInstagram: "instagram.com/pplg.xl",
    insta: "pplg.xl",
    title: "Siswa Kelas",
    imageUrl: "./img/ravikurniawan.jpg",
  },
  {
    name: "Syaiful Roiz",
    quote: "Kukira move-on dari orang yang pernah menjalin hubungan itu berat, tapi ternyata move on dari orang yang sama sekali belum pernah menjalin hubungan apapun itu jauh lebih berat.",
    urlInstagram: "instagram.com/@__roizs",
    insta: "__roizs",
    title: "Siswa Kelas",
    imageUrl: "./img/syaifulroiz.jpg",
  },
  {
    name: "Justine",
    quote: "Teguhkan keadilan.",
    urlInstagram: "instagram.com/pplg.xl",
    insta: "pplg.xl",
    title: "Siswa Kelas",
    imageUrl: "./img/justine.jpg",
  },
  {
    name: "Pero Aparil",
    quote: "Anak SMK memang gak punya kisah romantis di sekolahnya tapi anak SMK punya solidaritas di sekolahnya.",
    urlInstagram: "instagram.com/peropero617",
    insta: "peropero617",
    title: "Siswa Kelas",
    imageUrl: "./img/peroaparil.jpg",
  },
  {
    name: "Salvianus",
    quote: "Jangan jadi seperti pohon pisang yang memiliki jantung tapi tidak memiliki hati.",
    urlInstagram: "instagram.com/talinosamuel",
    insta: "talinosamuel",
    title: "Siswa Kelas",
    imageUrl: "./img/salvianus.jpeg",
  },
  {
    name: "Sila",
    quote: "Semoga sukses selalu.",
    urlInstagram: "instagram.com/yx_sil4zz",
    insta: "yx_sil4zz",
    title: "Siswa Kelas",
    imageUrl: "./img/sila.jpeg",
  },
];

const studentList = document.getElementById("studentList");

// Mengurutkan array students berdasarkan nama (huruf kecil, case insensitive)
students.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

// Menggunakan map() untuk membuat elemen li dan menggabungkannya ke dalam satu innerHTML
studentList.innerHTML = students
  .map(
    (student) => `
  <li class="flex justify-between gap-x-6 py-5 bg-gray-900">
    <div class="flex min-w-0 gap-x-4">
      <div class="h-12 w-12 flex-none rounded-full bg-white overflow-hidden">
        <img class="h-full w-full object-cover" src="${student.imageUrl}" alt="${student.name}" />
      </div>
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-white">${student.name}</p>
        <a href="https://instagram.com/${student.insta}" target="_blank">
          <p class="mt-1 text-xs leading-5 text-red-500">@${student.insta}</p>
        </a>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-white">${student.title}</p>
      ${student.quote ? `<p class="mt-1 text-xs leading-5 text-white">&quot;${student.quote}&quot;</p>` : ""}
    </div>
  </li>
`
  )
  .join("");

// Animasi angka
function animateNumbers(element, start, end, duration) {
  let current = start;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));
  const timer = setInterval(() => {
    element.textContent = `Ke-${current}`;
    if (current === end) {
      clearInterval(timer);
    }
    current++;
  }, stepTime);
}

function animateSimpleNumbers(element, start, end, duration) {
  let current = start;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));
  const timer = setInterval(() => {
    element.textContent = current;
    if (current === end) {
      clearInterval(timer);
    }
    current++;
  }, stepTime);
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const endValue = parseInt(element.textContent.replace(/[^0-9]/g, ""), 10);
          if (element.textContent.includes("Ke-")) {
            animateNumbers(element, 1, endValue, 2500);
          } else {
            animateSimpleNumbers(element, 1, endValue, 2500);
          }
          observer.unobserve(element); // Hentikan observasi setelah animasi dimulai
        }
      });
    },
    {
      threshold: 0.5, // Trigger animasi ketika 50% dari elemen terlihat
    }
  );

  elements.forEach((element) => observer.observe(element));
});

document.getElementById("submit-button").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const whatsappUrl = `https://wa.me/6281521550913?text=${encodeURIComponent(inputText)}`;
  window.open(whatsappUrl, "_blank");
});

document.addEventListener("DOMContentLoaded", function () {
  updateActiveNav();
});
