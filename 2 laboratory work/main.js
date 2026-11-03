const imageUrls = [
  "https://avatars.mds.yandex.net/get-altay/16137047/2a0000019726d9ef903ce46b3f5e3e144140/XXXL",
  "https://avatars.mds.yandex.net/i?id=45a79cced5a40a5035463b82d180bc52_l-5480874-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/get-altay/13192844/2a000001910da4cae5e17aa451d5f23c80c8/XXXL",
  "https://avatars.mds.yandex.net/get-altay/16299341/2a0000019c0e11ceca6ff3409cc13b95fea7/XXXL",
  "https://avatars.mds.yandex.net/get-altay/787110/2a000001619b12caa0d823b98b39afbd76ed/XXXL",
];

let currentIndex = 0;
const imgElement = document.getElementById("gallery-img");
const loaderElement = document.getElementById("loader");

async function loadImage(url) {
  // Показываем спиннер, чтобы доказать неблокирующий UI
  loaderElement.classList.add("active");
  imgElement.style.display = "none";

  try {
    // Искусственная задержка (как сказано в задании, если сеть быстрая)
    await new Promise((resolve) => setTimeout(resolve, 800));

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);

    return objectURL;
  } catch (error) {
    console.error("Проблема с загрузкой:", error.message);
    alert("Не удалось загрузить изображение. Проверьте CORS или ссылку.");
    return null;
  } finally {
    loaderElement.classList.remove("active");
  }
}

async function showImage(index) {
  const url = imageUrls[index];
  const newObjectURL = await loadImage(url);

  if (newObjectURL) {
    // Очищаем память от предыдущего objectURL (преподаватели это любят)
    if (imgElement.src.startsWith("blob:")) {
      URL.revokeObjectURL(imgElement.src);
    }
    imgElement.src = newObjectURL;
    imgElement.style.display = "block";
  }
}

// Обработчики кнопок
document.getElementById("btn-prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  showImage(currentIndex);
});

document.getElementById("btn-next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  showImage(currentIndex);
});

// Первичная загрузка при старте страницы
showImage(currentIndex);
