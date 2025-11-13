let BG = document.querySelector("body");
BG.classList.add("bg-[#16171e]", "overflow-x-hidden");
let Root = document.querySelector("#root");
let divH = document.createElement("div");
divH.classList.add(
  "w-auto",
  "h-auto",
  "flex",
  "sm:justify-center",
  "lg:justify-start",
  "lg:ml-4",
  "-translate-y-6"
);
let logo = `<img class="w-[200px] h-[115px]" src="./public/img/Battle.net-Logo-2009–2017.png" alt="Battle.net-Logo">`;
divH.insertAdjacentHTML("afterbegin", logo);
Root.insertAdjacentElement("afterbegin", divH);
let Acc = `<p class="text-white font-bold text-lg ml-[1430px] translate-y-[-93px] sm:invisible lg:visible">Account</p>`;
Root.insertAdjacentHTML("beforeend", Acc);
let iAcc = `<img class="w-[30px] h-[30px] sm:invisible lg:visible translate-y-[-120px] ml-[1390px]" src="./public/img/io4vxi0w.png" alt="io4vxi0w">`;
Root.insertAdjacentHTML("beforeend", iAcc);
let Sup = `<p class="text-white font-bold text-lg ml-[1310px] translate-y-[-150px] sm:invisible lg:visible">Suport</p>`;
Root.insertAdjacentHTML("beforeend", Sup);
let iSup = `<img class="w-[30px] h-[30px] sm:invisible lg:visible translate-y-[-178px] ml-[1264px]" src="./public/img/756j799d.png" alt="756j799d">`;
Root.insertAdjacentHTML("beforeend", iSup);
let DBn = `<p class="text-white font-bold text-lg ml-[1060px] translate-y-[-206px] sm:invisible lg:visible">Download Battle.net</p>`;
Root.insertAdjacentHTML("beforeend", DBn);
let iDBn = `<img class="w-[35px] h-[35px] sm:invisible lg:visible translate-y-[-237px] ml-[1009px]" src="./public/img/download_1-1024.webp" alt="download_1-1024">`;
Root.insertAdjacentHTML("beforeend", iDBn);
let bnB = `<div class=" ml-[1340px] translate-y-[-207px] w-[180px] h-[56px] bg-gray-800 rounded-[4px] font-bold text-white hover:text-gray-900 transition-all hover:bg-gray-700 sm:invisible lg:visible "><p class="absolute mt-3.5 ml-4">Battle.net Balance</p></div>`;
Root.insertAdjacentHTML("beforeend", bnB);
let Sbox = `<input class=" lg:w-[355px] sm:w-11/12 sm:ml-[18px]  h-[56px] border-none rounded-[4px] bg-gray-800 font-bold text-white lg:ml-[970px] translate-y-[-263px] hover:bg-gray-700 transition-all" type="search" placeholder="        search shop">`;
Root.insertAdjacentHTML("beforeend", Sbox);

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // ساخت دکمه‌ها
  const btnWrapper = document.createElement("div");
  btnWrapper.className = "flex lg:invisible sm:visible justify-between translate-y-[-905px] p-4";

  const createBtn = (id, text) => {
    const btn = document.createElement("button");
    btn.id = id;
    btn.textContent = text;
    btn.className = "p-2 bg-gray-800 text-[#f8f9f9] rounded";
    return btn;
  };

  const leftBtn = createBtn("leftMenuBtn", "☰");
  const rightBtn = createBtn("rightMenuBtn", "☰");

  btnWrapper.appendChild(leftBtn);
  btnWrapper.appendChild(rightBtn);
  root.appendChild(btnWrapper);

  const createMenu = (side) => {
    const menu = document.createElement("div");
    menu.className = `
      fixed top-0 ${side === "left" ? "left-0" : "right-0"} h-full w-2/3 max-w-xs bg-[#1a1c23] shadow-lg z-50
      transform transition-transform duration-300 ease-in-out
      ${side === "left" ? "-translate-x-full" : "translate-x-full"}
    `;
    menu.id = `${side}Menu`;

    menu.innerHTML = `
      <div class="p-4 flex justify-between items-center border-b">
        <h2 class="text-xl text-[#f8f9f9] ml-[85px] font-bold">Battle.net</h2>
        <button class="closeBtn text-2xl">&times;</button>
      </div>
      <ul class="p-4 space-y-8">
        <li class=" text-[#f8f9f9] hover:text-blue-500">Warcraft</li>
        <li class=" text-[#f8f9f9] hover:text-blue-500">Diablo</li>
        <li class=" text-[#f8f9f9] hover:text-blue-500">Overwatch</li>
        <li class=" text-[#f8f9f9] hover:text-blue-500">Call of Duty</li>
        <li class=" text-[#f8f9f9] hover:text-blue-500">DOOM</li>
        <li class=" text-[#f8f9f9] hover:text-blue-500">More</li>
        <li class=" text-[#f8f9f9] hover:text-blue-500">Battle.net Balance </li>
      </ul>
    `;

    root.appendChild(menu);

    setTimeout(() => {
      menu.classList.remove(side === "left" ? "-translate-x-full" : "translate-x-full");
      menu.classList.add("translate-x-0");
    }, 10);

    menu.querySelector(".closeBtn").onclick = () => {
      closeMenu(side);
    };
  };

  const closeMenu = (side) => {
    const menu = document.getElementById(`${side}Menu`);
    if (menu) {
      menu.classList.add(side === "left" ? "-translate-x-full" : "translate-x-full");
      menu.classList.remove("translate-x-0");
      setTimeout(() => menu.remove(), 300);
    }
  };

  const toggleMenu = (side) => {
    const otherSide = side === "left" ? "right" : "left";
    closeMenu(otherSide);

    if (document.getElementById(`${side}Menu`)) {
      closeMenu(side);
    } else {
      createMenu(side);
    }
  };

  leftBtn.addEventListener("click", () => toggleMenu("left"));
  rightBtn.addEventListener("click", () => toggleMenu("right"));
});

// JavaScript functionality for the menus

document.addEventListener("DOMContentLoaded", function () {
  // Navigation data with custom icon paths
  const navData = [
    {
      title: "WarCraft",
      icon: "./public/img/user(2).svg",
      subItems: [
        {
          text: "World of Warcraft",
          icon: "./public/img/world-of-warcraft.svg",
        },
        {
          text: "World of Warcraft Classic",
          icon: "./public/img/diablo-ii.svg",
        },
        {
          text: "Warcraft Rumble",
          icon: "./public/img/WarcraftArclightRumble_Color_JL01.svg",
        },
        {
          text: "Hearthstone",
          icon: "./public/img/hearthstone.svg",
        },
        {
          text: "Warcraft",
          icon: "./public/img/game_icon_warcraft_family.svg",
        },
      ],
    },
    {
      title: "Diablo",
      icon: "./public/img/user(2).svg",
      subItems: [
        {
          text: "Diablo IV",
          icon: "./public/img/games-d4-colored.svg",
        },
        {
          text: "Diablo Immortal",
          icon: "./public/img/D_Immortal_Icon_Small_BlizzCon_PF08.svg",
        },
        {
          text: "Diablo III",
          icon: "./public/img/diablo-iii.svg",
        },
        {
          text: "Diablo II: Resurrected",
          icon: "./public/img/diablo-ii (1).svg",
        },
        {
          text: "Diablo",
          icon: "./public/img/blizzard_diablo_icon_EE01.svg",
        },
      ],
    },
    {
      title: "OverWatch",
      icon: "./public/img/user(2).svg",
      subItems: [
        {
          text: "OverWatch 2",
          icon: "./public/img/Overwatch2_(1).svg",
        },
      ],
    },
    {
      title: "Call of Duty",
      icon: "./public/img/user(2).svg",
      subItems: [
        {
          text: "Black Ops 6",
          icon: "./public/img/-Bnet_Game-Shop_Icon-EN-1080x1080.svg",
        },
        {
          text: "Modern Warfare III",
          icon: "./public/img/Jupiter_Coming_Soon-Bnet_Game-Icon_Shop-EN-Vector-01.svg",
        },
        {
          text: "Warzone",
          icon: "./public/img/Warzone_WZ_White_RGB.svg",
        },
        {
          text: "Modern Warfare II",
          icon: "./public/img/MWII_LOGO_SQUARE_SVG.svg",
        },
        {
          text: "Vanguard",
          icon: "./public/img/VanguardGold.svg",
        },
        {
          text: "Black Ops Cold War",
          icon: "./public/img/call-of-duty-black-ops-cold-war.svg",
        },
      ],
    },
    {
      title: "Tony Hawk's Pro Skater",
      icon: "./public/img/user(2).svg",
      subItems: [
        {
          text: "Tony Hawk’s Pro Skater 3 + 4",
          icon: "./public/img/game_icon_chicago.svg",
        },
      ],
    },
    {
      title: "More",
      icon: "./public/img/user(2).svg",
      subItems: [
        {
          text: "Avowed",
          icon: "./public/img/game_icon_avowed.svg",
        },
        {
          text: "Blizzard Arcade Collection",
          icon: "./public/img/blizzard-arcade.svg",
        },
        {
          text: "Crash Bandicoot 4",
          icon: "./public/img/crash-bandicoot-4.svg",
        },
        {
          text: "Heroes of the Storm",
          icon: "./public/img/heroes-of-the-storm.svg",
        },
        {
          text: "StarCraft",
          icon: "./public/img/starcraft-remastered.svg",
        },
        {
          text: "StarCraft II",
          icon: "./public/img/starcraft-ii.svg",
        },
      ],
    },
    // Add more items as needed...
  ];

  // Get root element
  const root = document.getElementById("root");

  // Create main container
  const container = document.createElement("div");
  container.className =
    "bg-gray-800 rounded-md p-1 my-4 w-[950px] h-[56px] translate-y-[-335px] ml-2 sm:invisible lg:visible relative z-[1000]";

  // Create navbar element
  const navbar = document.createElement("ul");
  navbar.className = "flex list-none relative";

  // Create navigation items
  navData.forEach((item) => {
    const navItem = document.createElement("li");
    navItem.className =
      "relative  text-white font-bold cursor-pointer transition-all duration-300 flex items-center group mt-3";

    // Create icon container
    const iconContainer = document.createElement("div");
    iconContainer.className = "flex items-center";

    // Create custom icon image
    const iconImg = document.createElement("img");
    iconImg.className = "w-5 h-5 mr-2 object-contain";
    iconImg.src = item.icon;
    iconImg.alt = item.title + " icon";

    // Create item text
    const itemText = document.createElement("span");
    itemText.textContent = item.title;

    // Create arrow icon
    const arrow = document.createElement("img");
    arrow.className =
      "ml-2 w-3 h-3 object-contain transition-transform duration-300 group-hover:rotate-180";
    arrow.src = "https://cdn-icons-png.flaticon.com/512/25/25243.png";
    arrow.alt = "dropdown arrow";

    // Build structure
    iconContainer.appendChild(iconImg);
    iconContainer.appendChild(itemText);
    iconContainer.appendChild(arrow);
    navItem.appendChild(iconContainer);

    // Create dropdown
    const dropdown = document.createElement("div");
    dropdown.className =
      "absolute top-full left-0 bg-slate-800 min-w-[240px] rounded-b-md shadow-lg opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50";

    // Create sub-items
    item.subItems.forEach((subItem, index) => {
      const dropdownItem = document.createElement("a");
      dropdownItem.className = `flex items-center py-3 px-5 text-white no-underline transition-colors duration-200 hover:bg-slate-700 ${
        index !== item.subItems.length - 1 ? "border-b border-slate-700" : ""
      }`;
      dropdownItem.href = "#";

      // Create sub-item icon
      const subIcon = document.createElement("img");
      subIcon.className = "w-7 h-7 mr-3 object-contain";
      subIcon.src = subItem.icon;
      subIcon.alt = subItem.text + " icon";

      dropdownItem.appendChild(subIcon);
      dropdownItem.appendChild(document.createTextNode(subItem.text));
      dropdown.appendChild(dropdownItem);
    });

    navItem.appendChild(dropdown);
    navbar.appendChild(navItem);
  });

  container.appendChild(navbar);
  root.appendChild(container);

  // Touch device support
  if ("ontouchstart" in window) {
    const navItems = navbar.querySelectorAll("li");

    navItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        // Close other open dropdowns
        navbar
          .querySelectorAll('div[class*="opacity-100"]')
          .forEach((dropdown) => {
            if (dropdown !== this.querySelector("div")) {
              dropdown.classList.remove(
                "opacity-100",
                "visible",
                "translate-y-0"
              );
              dropdown.classList.add(
                "opacity-0",
                "invisible",
                "-translate-y-2"
              );
            }
          });

        // Toggle current dropdown
        const dropdown = this.querySelector("div");
        if (dropdown.classList.contains("opacity-0")) {
          dropdown.classList.remove("opacity-0", "invisible", "-translate-y-2");
          dropdown.classList.add("opacity-100", "visible", "translate-y-0");
        } else {
          dropdown.classList.remove("opacity-100", "visible", "translate-y-0");
          dropdown.classList.add("opacity-0", "invisible", "-translate-y-2");
        }

        e.stopPropagation();
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function () {
      navbar
        .querySelectorAll('div[class*="opacity-100"]')
        .forEach((dropdown) => {
          dropdown.classList.remove("opacity-100", "visible", "translate-y-0");
          dropdown.classList.add("opacity-0", "invisible", "-translate-y-2");
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // ساختار اصلی اسلایدر
  const slider = document.createElement("div");
  slider.className =
    "swiper w-full max-w-[1504px] h-[390px] mx-auto relative lg:mt-[75px] sm:translate-y-[-320px] z-[10]";

  // Wrapper
  const swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";

  // لیست عکس‌ها (آدرس تصاویر خود را اینجا قرار دهید)
  const images = [
    {
      desktop: "./img/-Bnet_Game-Banner_Desktop-EN-1600x500_(9).jpg",
      tablet: "./img/-Bnet_Game-Banner_Mobile-EN-928x400_(10).jpg",
      mobile: "./img/-Bnet_Game-Banner_Mobile-EN-928x400_(10).jpg",
    },
    {
      desktop:
        "./img/WoW_ClassicMOPBundle_BnetShop_HeaderDesktop_1600x500.jpeg",
      tablet: "./img/WoW_ClassicMOPBundle_BnetShop_HeaderMobile_928x400.jpeg",
      mobile: "./img/WoW_ClassicMOPBundle_BnetShop_HeaderMobile_928x400.jpeg",
    },
    {
      desktop: "./img/shop_family_carousel_aries_announce_desktop.png",
      tablet: "./img/shop_family_carousel_aries_announce_mobile.jpeg",
      mobile: "./img/shop_family_carousel_aries_announce_mobile.jpeg",
    },
    {
      desktop:
        "./img/OW2_S15_MythicWeaponSkin_Widowmaker_BNET_Shop_Carousel_Desktop_1600x500.jpeg",
      tablet:
        "./img/OW2_S15_MythicWeaponSkin_Widowmaker_BNET_Shop_Carousel_Mobile_928x400.jpeg",
      mobile:
        "./img/OW2_S15_MythicWeaponSkin_Widowmaker_BNET_Shop_Carousel_Mobile_928x400.jpeg",
    },
    {
      desktop:
        "./img/HS_32p0_ITED_TavernPass_BattleNet_Shop_HomeBanner_Desktop_1600x500_LZO01.jpeg",
      tablet:
        "./img/HS_32p0_ITED_TavernPass_BattleNet_Shop_HomeBanner_Mobile_928x400_LZO01.jpg",
      mobile:
        "./img/HS_32p0_ITED_TavernPass_BattleNet_Shop_HomeBanner_Mobile_928x400_LZO01.jpg",
    },
  ];

  // ایجاد اسلایدها با عکس
  // در حلقه ساخت اسلایدها، این قسمت را تغییر دهید:
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const picture = document.createElement("picture");

    // نسخه موبایل (کوچک)
    const sourceMobile = document.createElement("source");
    sourceMobile.media = "(max-width: 640px)";
    sourceMobile.srcset = image.mobile; // آدرس عکس موبایل

    // نسخه تبلت (متوسط)
    const sourceTablet = document.createElement("source");
    sourceTablet.media = "(max-width: 1024px)";
    sourceTablet.srcset = image.tablet; // آدرس عکس تبلت

    // نسخه دسکتاپ (اصلی)
    const img = document.createElement("img");
    img.className = "w-full h-full object-cover";
    img.src = image.desktop; // آدرس عکس دسکتاپ
    img.alt = `Slide ${index + 1}`;

    picture.append(sourceMobile, sourceTablet, img);
    slide.appendChild(picture);
    swiperWrapper.appendChild(slide);
  });

  // دکمه‌های ناوبری
  const prevButton = document.createElement("div");
  prevButton.className = "swiper-button-prev !text-white";

  const nextButton = document.createElement("div");
  nextButton.className = "swiper-button-next !text-white";

  // Pagination
  const pagination = document.createElement("div");
  pagination.className = "swiper-pagination !relative !bottom-4";

  // مونتاژ نهایی
  slider.append(swiperWrapper, prevButton, nextButton, pagination);
  document.getElementById("root").appendChild(slider);

  // استایل‌های سفارشی
  const style = document.createElement("style");
  style.textContent = `
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: gray;
      border-radius: 50%;
      margin: 0 6px 7px !important;
      transition: all 0.4s ease;
      cursor: pointer;
      opacity: 1 !important;
    }
    .swiper-pagination-bullet-active {
      background: darkblue;
      width: 24px;
      border-radius: 6px;
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);

  // Initialize Swiper
  new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

const Recommended = document.createElement("div");
Recommended.innerHTML = `<h1 class="translate-y-[-285px] ml-7 text-2xl font-bold text-white">Recommended</h1>`;

async function getter() {
  // رفرنس به روت اصلی که توش کلی چیز دیگه هست
  const root = document.getElementById("root");

  // ساخت یک کانتینر مخصوص گرید محصولات
  const productGrid = document.createElement("div");
  productGrid.className =
    "w-full translate-y-[-280px] p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[402px] [&>*]:bg-gray-800 bg-[#16171e]";

  // گرفتن دیتا از API
  let req = await fetch(
    "https://raw.githubusercontent.com/AD-Cr8tive/api_BT/main/db_api.json"
  );
  let res = await req.json();

  // ساخت کارت‌های محصول و چسباندن به گرید
  res.forEach((elem) => {
    const card = document.createElement("div");
    card.className = "relative rounded-[5px] hover:-translate-y-2 transition-all duration-300 hover:bg-gray-700";

    card.innerHTML = `
      <img class="w-full rounded-[5px] h-[175px] object-cover" src="${elem.image}" alt="${elem.gameTitle}"/>
      <div class="flex p-2 gap-2 items-center">
        <img class="w-[30px] h-[30px] object-contain" src="${elem.icon}" alt="${elem.gameTitle}"/>
        <span class="font-bold text-slate-200">${elem.gameName}</span>
      </div>
      <h2 class="px-4 line-clamp-2 text-slate-300 font-bold text-[20px]">${elem.gameTitle}</h2>
      <p class="text-yellow-300 text-[14px] font-thin px-2 line-clamp-2 my-1">
        ${elem.desc}
      </p>
      <span class="font-bold text-[18px] text-slate-200 absolute bottom-[15px] left-[15px]">${elem.price}$</span>
    `;
    root.appendChild(Recommended);
    productGrid.appendChild(card);
  });

  // چسباندن گرید محصولات به root
  root.appendChild(productGrid);
}

getter();

const Featured = document.createElement("div");
Featured.innerHTML = `<h1 class="ml-7 translate-y-[-170px] text-2xl font-bold text-white">Featured</h1>`;
async function gettr() {
  // رفرنس به روت اصلی که توش کلی چیز دیگه هست
  const root = document.getElementById("root");

  // ساخت یک کانتینر مخصوص گرید محصولات
  const productGrid = document.createElement("div");
  productGrid.className =
    "w-full translate-y-[-170px] p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[402px] [&>*]:bg-gray-800 bg-[#16171e]";

  // گرفتن دیتا از API
  let req = await fetch(
    "https://raw.githubusercontent.com/AD-Cr8tive/api_BT/main/db_api.json"
  );
  let res = await req.json();

  // ساخت کارت‌های محصول و چسباندن به گرید
  res.forEach((elem) => {
    const card = document.createElement("div");
    card.className = "relative rounded-[5px] hover:-translate-y-2 transition-all duration-300 hover:bg-gray-700";

    card.innerHTML = `
      <img class="w-full rounded-[5px] h-[175px] object-cover" src="${elem.image}" alt="${elem.gameTitle}"/>
      <div class="flex p-2 gap-2 items-center">
        <img class="w-[30px] h-[30px] object-contain" src="${elem.icon}" alt="${elem.gameTitle}"/>
        <span class="font-bold text-slate-200">${elem.gameName}</span>
      </div>
      <h2 class="px-4 line-clamp-2 text-slate-300 font-bold text-[20px]">${elem.gameTitle}</h2>
      <p class="text-yellow-300 text-[14px] font-thin px-2 line-clamp-2 my-1">
        ${elem.desc}
      </p>
      <span class="font-bold text-[18px] text-slate-200 absolute bottom-[15px] left-[15px]">${elem.price}$</span>
    `;
    root.appendChild(Featured);
    productGrid.appendChild(card);
  });

  // چسباندن گرید محصولات به root
  root.appendChild(productGrid);
}

gettr();

const TrendingNow = document.createElement("div");
TrendingNow.innerHTML = `<h1 class="ml-7 translate-y-[-50px] text-2xl font-bold text-white">Trending Now</h1>`;
async function gett() {
  // رفرنس به روت اصلی که توش کلی چیز دیگه هست
  const root = document.getElementById("root");

  // ساخت یک کانتینر مخصوص گرید محصولات
  const productGrid = document.createElement("div");
  productGrid.className =
    "w-full translate-y-[-50px] p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[402px] [&>*]:bg-gray-800 bg-[#16171e]";

  // گرفتن دیتا از API
  let req = await fetch(
    "https://raw.githubusercontent.com/AD-Cr8tive/api_BT/main/db_api.json"
  );
  let res = await req.json();

  // ساخت کارت‌های محصول و چسباندن به گرید
  res.forEach((elem) => {
    const card = document.createElement("div");
    card.className = "relative rounded-[5px] hover:-translate-y-2 transition-all duration-300 hover:bg-gray-700";

    card.innerHTML = `
      <img class="w-full rounded-[5px] h-[175px] object-cover" src="${elem.image}" alt="${elem.gameTitle}"/>
      <div class="flex p-2 gap-2 items-center">
        <img class="w-[30px] h-[30px] object-contain" src="${elem.icon}" alt="${elem.gameTitle}"/>
        <span class="font-bold text-slate-200">${elem.gameName}</span>
      </div>
      <h2 class="px-4 line-clamp-2 text-slate-300 font-bold text-[20px]">${elem.gameTitle}</h2>
      <p class="text-yellow-300 text-[14px] font-thin px-2 line-clamp-2 my-1">
        ${elem.desc}
      </p>
      <span class="font-bold text-[18px] text-slate-200 absolute bottom-[15px] left-[15px]">${elem.price}$</span>
    `;
    root.appendChild(TrendingNow);
    productGrid.appendChild(card);
  });

  // چسباندن گرید محصولات به root
  root.appendChild(productGrid);
}

gett();

const MostGifted = document.createElement("div");
MostGifted.innerHTML = `<h1 class="ml-7 translate-y-[68px] text-2xl font-bold text-white">Most Gifted</h1>`;
async function gtt() {
  // رفرنس به روت اصلی که توش کلی چیز دیگه هست
  const root = document.getElementById("root");

  // ساخت یک کانتینر مخصوص گرید محصولات
  const productGrid = document.createElement("div");
  productGrid.className =
    "w-full translate-y-[65px] p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[402px] [&>*]:bg-gray-800 bg-[#16171e]";

  // گرفتن دیتا از API
  let req = await fetch(
    "https://raw.githubusercontent.com/AD-Cr8tive/api_BT/main/db_api.json"
  );
  let res = await req.json();

  // ساخت کارت‌های محصول و چسباندن به گرید
  res.forEach((elem) => {
    const card = document.createElement("div");
    card.className = "relative rounded-[5px] hover:-translate-y-2 transition-all duration-300 hover:bg-gray-700";

    card.innerHTML = `
      <img class="w-full h-[175px] rounded-[5px] object-cover" src="${elem.image}" alt="${elem.gameTitle}"/>
      <div class="flex p-2 gap-2 items-center">
        <img class="w-[30px] h-[30px] object-contain" src="${elem.icon}" alt="${elem.gameTitle}"/>
        <span class="font-bold text-slate-200">${elem.gameName}</span>
      </div>
      <h2 class="px-4 line-clamp-2 text-slate-300 font-bold text-[20px]">${elem.gameTitle}</h2>
      <p class="text-yellow-300 text-[14px] font-thin px-2 line-clamp-2 my-1">
        ${elem.desc}
      </p>
      <span class="font-bold text-[18px] text-slate-200 absolute bottom-[15px] left-[15px]">${elem.price}$</span>
    `;
    root.appendChild(MostGifted);
    productGrid.appendChild(card);
  });

  // چسباندن گرید محصولات به root
  root.appendChild(productGrid);
}

gtt();

let FI = `<section class="translate-y-[-50px]">
 <img class="w-[1536px] h-[566px] mt-36 object-cover" src="./public/img/mobile-bg-lg_3.png" alt="Foter_Img">
 <img class="lg:w-[792px] sm:w-[418px] lg:h-[434px] sm:h-[233px] lg:translate-y-[-500px] sm:translate-y-[-275px] sm:ml-[15px] lg:ml-[70px]" src="./public/img/laptop-optimized.avif">
 <h1 class="font-bold lg:text-[55px] sm:text-4xl lg:translate-y-[-870px] sm:translate-y-[-789px] sm:ml-[55px] lg:ml-[900px] text-white">Dive into adventure</h1>
 <h2 class=" lg:translate-y-[-870px] lg:ml-[900px] text-gray-400 sm:translate-y-[-780px] font-bold sm:ml-[23px]">Download Battle.net and join a community of millions.</h2>
 <a class="w-[283px] absolute h-[40px] bg-blue-700 rounded-[3px] text-center decoration-0 hover:border-[0.5px] duration-300 hover:border-gray-500 lg:translate-y-[-830px] sm:translate-y-[-750px] sm:ml-[80px] lg:ml-[900px]">
 <p  class=" text-white font-bold mt-2">Download for Windows </p>
  </a>
 <a class="lg:w-[155px] sm:w-[283px] absolute h-[40px] bg-[#6f6f6f5c] rounded-[3px] text-center decoration-0 hover:border-[0.5px] duration-300 hover:border-gray-500 lg:translate-y-[-830px] sm:translate-y-[-700px] sm:ml-[80px] lg:ml-[1195px]">
 <p  class=" text-white font-bold mt-2">Learn More</p>
  </a>
 <h2 class=" lg:translate-y-[-730px] lg:ml-[900px] sm:ml-[93px] sm:translate-y-[-630px] font-bold text-gray-400">Also available for 
  <a class="text-blue-600">Mac</a>
   and 
   <a class="text-blue-600">mobile</a>
  </h2>
 </section>`;
Root.insertAdjacentHTML("afterend", FI);

let fotr = ` 
    <footer class="w-full z-[1000] absolute h-auto translate-y-[650px]">
      <div class="w-full h-[48px]">
        <section class="flex flex-row lg:ml-[50px] lg:translate-y-[40px] sm:translate-y-[100px]">
        <div class="w-[88px] h-[48px] text-center rounded-[5px]  font-bold text-white transition-all duration-200 hover:bg-[#2b2b2b85]"><p class="mt-3">Careers</p></div>
        <div class="w-[74px] h-[48px] text-center rounded-[5px]  font-bold text-white transition-all duration-200 hover:bg-[#2b2b2b85]"><p class="mt-3">About</p></div>
        <div class="w-[89px] h-[48px] text-center rounded-[5px]  font-bold text-white transition-all duration-200 hover:bg-[#2b2b2b85]"><p class="mt-3">Support</p></div>
        <div class="w-[110px] h-[48px] text-center rounded-[5px]  font-bold text-white transition-all duration-200 hover:bg-[#2b2b2b85]"><p class="mt-3">Contact Us</p></div>
        <div class="w-[71px] h-[48px] text-center rounded-[5px]  font-bold text-white transition-all duration-200 hover:bg-[#2b2b2b85]"><p class="mt-3">Press</p></div>
        <div class="w-[56px] h-[48px] text-center rounded-[10px] font-bold text-white transition-all duration-200  hover:bg-[#2b2b2b85]"><p class="mt-3">API</p></div>
        </section>
      </div>
      <details class="relative inline-block text-left lg:ml-[1330px] sm:ml-[160px]">
  <summary class="cursor-pointer px-4 py-2  text-white rounded-md select-none list-none">
    🌐 English (US)
  </summary>

  <div
    class="absolute mt-2 w-64 bg-gray-900 text-white rounded-md shadow-lg z-50"
  >
    <div class="px-4 py-2 text-sm text-gray-400 uppercase">
      Language
    </div>
    <div class="max-h-60 overflow-y-auto px-4 py-2 grid grid-cols-2 gap-2">
      <span class="cursor-pointer hover:text-blue-400">English (US)</span>
      <span class="cursor-pointer hover:text-blue-400">Français</span>
      <span class="cursor-pointer hover:text-blue-400">Español (Latino)</span>
      <span class="cursor-pointer hover:text-blue-400">Italiano</span>
      <span class="cursor-pointer hover:text-blue-400">Português (Brasil)</span>
      <span class="cursor-pointer hover:text-blue-400">Polski</span>
      <span class="cursor-pointer hover:text-blue-400">ภาษาไทย</span>
      <span class="cursor-pointer hover:text-blue-400">Русский</span>
      <span class="cursor-pointer hover:text-blue-400">日本語</span>
      <span class="cursor-pointer hover:text-blue-400">Türkçe</span>
    </div>
  </div>
</details>
<div class="w-[1400px] lg:visible sm:invisible h-[1px] ml-[62px] mt-[20px] bg-[rgb(67,67,67)]"></div>
<div class="flex flex-row gap-3 lg:translate-y-[25px] sm:translate-y-[120px] lg:ml-[1315px] sm:ml-[160px]">
      <div class="w-[40px] h-[40px] rounded-4xl bg-[#212329] hover:bg-[#2b2b2b] transition-all duration-200 flex justify-center"><img class="w-[18px] h-[18px] mt-[10px]" src="./public/img/facebook.png" alt="facebook"></div>
      <div class="w-[40px] h-[40px] rounded-4xl bg-[#212329] hover:bg-[#2b2b2b] transition-all duration-200 flex justify-center"><img class="w-[18px] h-[18px] mt-[10px]" src="./public/img/Instagram_logo.png" alt="Instagram_logo"></div>
      <div class="w-[40px] h-[40px] rounded-4xl bg-[#212329] hover:bg-[#2b2b2b] transition-all duration-200 flex justify-center"><img class="w-[18px] h-[18px] mt-[10px]" src="./public/img/Twitter-X-Logo.png" alt="Twitter-X-Logo"></div>
    </div>
    <img class="w-[230px] h-[145px] absolute lg:translate-y-[-40px] sm:translate-y-[-25px] lg:ml-[50px] sm:ml-[100px]" src="./public/img/Battle.net-Logo-2009–2017.png" alt="Battle.net-Logo">
  <p class="lg:translate-y-[-5px] sm:translate-y-[150px] absolute text-[13px] lg:ml-[320px] sm:ml-[45px] sm:text-center text-gray-400">©2025 Blizzard Entertainment, Inc.
All trademarks</br>
 referenced herein are the properties of their respective owners.<p>

  <div class="w-full h-[48px] absolute">
        <section class="flex flex-row lg:ml-[318px] sm:ml-[65px] lg:translate-y-[40px] sm:translate-y-[210px] gap-5 ">
        <p class="mt-3 text-gray-400 text-[12px]">Careers</p>
        <p class="mt-3 text-gray-400 text-[12px]">About</p>
        <p class="mt-3 text-gray-400 text-[12px]">Support</p>
        <p class="mt-3 text-gray-400 text-[12px]">Contact Us</p>
        <p class="mt-3 text-gray-400 text-[12px]">Press</p>
        <p class="mt-3 text-gray-400 text-[12px]">API</p>
        </section>
      </div>
    </footer>`;
Root.insertAdjacentHTML("afterend", fotr);
let end =`
 <div class="flex flex-row gap-9">
   <img class="lg:translate-y-[1100px] sm:translate-y-[1200px] lg:ml-[60px] sm:ml-[130px] w-[72px] h-[97px]" src="./public/img/esrb.jpg" alt="esrb">
   <img class="lg:translate-y-[1100px] sm:translate-y-[1200px] w-[83px] h-[97px]" src="./public/img/rp-m.0zopI.png" alt="respective">
 </div>`
 Root.insertAdjacentHTML("afterend",end);