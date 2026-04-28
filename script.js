// Shared JavaScript for Lucky Game Tools.
var downloadUrl = "javascript:void(0);";
var downloadUrl1 = "https://gofile.io/d/Pm6pFz";
var downloadUrl2 = "https://ranoz.gg/file/gz4D1EI2";
var downloadUrl3 = "https://mega.nz/file/L0pFxayB#p7Gq2FElTA0VXNovkYvd5oXKUaCD0otgaruD6plpsFI";
var downloadUrl4 = "https://share.feijipan.com/s/iy3wqBWx";
var downloadUrl5 = "https://pan.xunlei.com/s/VOnMw7z6sJRTnLXvW6uJwTKxA1?pwd=ncg3";

const friendLinks = [
  { name: "Telegram", url: "https://t.me/luckygametools" },
  { name: "Discord", url: "https://discord.gg/X4MTpDbcpT" },
  { name: "Youtube", url: "https://www.youtube.com/@GameToolsLucky" },
  { name: "BaiLuAI", url: "https://bailucode.com" },
  { name: "YuCursorTool", url: "https://970410.xyz/" }
];

function googleTranslateElementInit() {
  const target = document.getElementById("google_translate_element");
  if (target && window.google && google.translate) {
    new google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element");
  }
}

function copyEmail(thiz, email) {
  if (!navigator.clipboard) {
    return;
  }

  navigator.clipboard.writeText(email).then(() => {
    const tooltip = thiz.firstElementChild;
    if (!tooltip) {
      return;
    }

    const oldTooltipText = tooltip.textContent;
    tooltip.textContent = "Copied!";

    setTimeout(() => {
      tooltip.textContent = oldTooltipText;
    }, 2000);
  });
}

function initAnimatedBackground() {
  const container = document.querySelector(".twp");
  const Tw = window.TWallpaper && (window.TWallpaper.default || window.TWallpaper);

  if (!container || container.id === "tw-container" || !Tw) {
    return;
  }

  const setCanvasSize = () => {
    if (Tw.prototype) {
      Tw.prototype.width = Math.max(80, Math.floor(window.innerWidth / 12));
      Tw.prototype.height = Math.max(80, Math.floor(window.innerHeight / 12));
    }
  };

  const options = {
    fps: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 20 : 45,
    tails: 90,
    animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    scrollAnimate: true,
    colors: ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"],
    pattern: {
      image: "games.svg",
      background: "transparent",
      blur: 0.5,
      opacity: 0.4,
      mask: false
    }
  };

  const render = () => {
    setCanvasSize();
    container.innerHTML = "";
    const tw = new Tw(container, options);
    tw.init();
  };

  render();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 200);
  });
}

function initDownloadLinks() {
  const links = {
    download: downloadUrl,
    download1: downloadUrl1,
    download2: downloadUrl2,
    download3: downloadUrl3,
    download4: downloadUrl4,
    download5: downloadUrl5
  };

  Object.entries(links).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = url;
    }
  });
}

function initImageModal() {
  let modal = document.getElementById("imageModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "modal";

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "close";
    closeBtn.setAttribute("aria-label", "Close image preview");
    closeBtn.innerHTML = "&times;";

    const modalImg = document.createElement("img");
    modalImg.className = "modal-content";
    modalImg.id = "modalImage";
    modalImg.alt = "Image preview";

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
  }

  const modalImg = document.getElementById("modalImage");
  const close = modal.querySelector(".close");
  if (!modalImg || !close) {
    return;
  }

  document.addEventListener("click", function(e) {
    const target = e.target;
    if (target && target.tagName === "IMG" && !target.classList.contains("modal-content")) {
      modal.style.display = "flex";
      modalImg.src = target.dataset.fullsize || target.src;
    }
  });

  close.addEventListener("click", function() {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
}

function initFriendLinks() {
  const footer = document.getElementsByTagName("footer")[0];
  if (!footer || footer.querySelector(".friend-links")) {
    return;
  }

  const linkContainer = document.createElement("div");
  linkContainer.className = "friend-links";
  linkContainer.style.marginTop = "10px";
  linkContainer.appendChild(document.createTextNode("Link: "));

  friendLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.margin = "0 8px";
    a.style.color = "#99ccff";
    a.style.textDecoration = "none";
    a.addEventListener("mouseover", () => a.style.textDecoration = "underline");
    a.addEventListener("mouseout", () => a.style.textDecoration = "none");
    linkContainer.appendChild(a);
  });

  footer.appendChild(linkContainer);
}

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarCollapse = document.getElementById("navbarCollapse");

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
  }

  if (navbarToggle && navbarCollapse) {
    navbarToggle.addEventListener("click", () => {
      const isActive = navbarToggle.classList.toggle("active");
      navbarCollapse.classList.toggle("active", isActive);
      navbarToggle.setAttribute("aria-expanded", String(isActive));
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navbarToggle.classList.remove("active");
        navbarCollapse.classList.remove("active");
        navbarToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initDownloadLinks();
  initImageModal();
  initFriendLinks();
  initNavbar();
});

initAnimatedBackground();
