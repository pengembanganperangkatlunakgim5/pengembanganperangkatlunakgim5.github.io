const students = [
  {
    name: "Alan",
    quote: "We will do whatever it takes",
    urlInstagram: "instagram.com/alanzagi",
    insta: "alanzagi",
    title: "Wakil Ketua Kelas",
    imageUrl: "./img/Alan.webp",
  },
  // Tambahkan data siswa lainnya di sini jika diperlukan
];

// Periksa apakah elemen dengan ID "studentList" ada dalam HTML
const studentList = document.getElementById("studentList");

// Lakukan iterasi melalui setiap mahasiswa dalam array students
students.forEach((student) => {
  const listItem = document.createElement("li");
  listItem.className = "flex justify-between gap-x-6 py-5";
  listItem.innerHTML = `
    <div class="flex min-w-0 gap-x-4">
      <<div class="h-12 w-12 flex-none rounded-full bg-white overflow-hidden">
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
      ${student.quote ? `<p class="mt-1 text-xs leading-5 text-white">&quot;${student.quote}.&quot;</p>` : ""}
    </div>
  `;
  // Tambahkan elemen li yang dibuat ke dalam elemen ul dengan ID "studentList"
  studentList.appendChild(listItem);
});

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

// Fungsi untuk menentukan tautan navigasi yang aktif
function updateActiveNav() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("ring-1", "ring-purple-500", "ring-offset-2");
    } else {
      link.classList.remove("active");
    }
  });
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateActiveNav);
