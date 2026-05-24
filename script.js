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

const adsenseClient = "ca-pub-7261994485465423";
const manualAdSlots = Object.assign({
  contentTop: "",
  contentMid: "",
  contentBottom: "",
  toolBottom: ""
}, window.LGT_AD_SLOTS || {});

const customFontFamily = "\"NanoDyongChyangSong CN 24\"";

function isAdDisabledPage() {
  if (document.documentElement.dataset.lgtAds === "on") {
    return false;
  }

  const robotsMeta = document.querySelector("meta[name='robots']");
  const robotsContent = robotsMeta ? robotsMeta.getAttribute("content") || "" : "";

  return document.documentElement.dataset.lgtAds === "off" || /\bnoindex\b/i.test(robotsContent);
}

function runAfterFirstPaint(callback, timeout, delay) {
  const schedule = () => {
    const run = () => {
      try {
        Promise.resolve(callback()).catch(error => console.warn("Deferred task skipped:", error));
      } catch (error) {
        console.warn("Deferred task skipped:", error);
      }
    };
    const delayedRun = () => window.setTimeout(run, delay || 0);

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(delayedRun, { timeout: timeout || 1600 });
      return;
    }

    window.requestAnimationFrame(() => {
      window.setTimeout(run, delay || 0);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedule, { once: true });
    return;
  }

  schedule();
}

function waitForFontStylesheet(link) {
  return new Promise(resolve => {
    if (link.rel === "stylesheet" || link.dataset.lgtFontLoaded === "true") {
      resolve();
      return;
    }

    const done = () => {
      link.dataset.lgtFontLoaded = "true";
      resolve();
    };

    link.addEventListener("load", done, { once: true });
    link.addEventListener("error", done, { once: true });
  });
}

async function initDeferredFont() {
  const fontLinks = Array.from(document.querySelectorAll("link[href*='fontsapi.zeoseven.com'], link[href*='fontsapi-storage.zeoseven.com']"));

  if (!fontLinks.length || document.documentElement.classList.contains("lgt-font-ready")) {
    return;
  }

  document.documentElement.classList.add("lgt-font-deferred");

  await Promise.race([
    Promise.all(fontLinks.map(waitForFontStylesheet)),
    new Promise(resolve => window.setTimeout(resolve, 3200))
  ]);

  if (document.fonts && document.fonts.load) {
    const loaded = await Promise.race([
      document.fonts.load(`1em ${customFontFamily}`)
        .then(fonts => fonts.length > 0 && document.fonts.check(`1em ${customFontFamily}`))
        .catch(() => false),
      new Promise(resolve => window.setTimeout(() => resolve(false), 1800))
    ]);

    if (!loaded) {
      return;
    }
  }

  document.documentElement.classList.add("lgt-font-ready");
}

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

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  const lowerPowerDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  const shouldAnimate = !reducedMotion && !saveData && !lowerPowerDevice;

  const options = {
    fps: shouldAnimate ? 24 : 15,
    tails: shouldAnimate ? 64 : 40,
    animate: shouldAnimate,
    scrollAnimate: false,
    colors: ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"],
    pattern: {
      image: "games.svg",
      background: "transparent",
      blur: 0,
      opacity: 0.34,
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
    let isScrolled = null;
    let ticking = false;
    const updateScrolledState = () => {
      ticking = false;
      const nextScrolled = window.scrollY > 50;
      if (nextScrolled !== isScrolled) {
        navbar.classList.toggle("scrolled", nextScrolled);
        isScrolled = nextScrolled;
      }
    };
    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrolledState);
      }
    };

    updateScrolledState();
    window.addEventListener("scroll", requestUpdate, { passive: true });
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

function initGoogleTranslateBannerOffset() {
  const root = document.documentElement;
  let lastHeight = -1;

  const getBannerHeight = () => {
    const candidates = Array.from(document.querySelectorAll("iframe.goog-te-banner-frame, iframe.skiptranslate, .goog-te-banner-frame"));
    const banner = candidates.find(element => {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden" && rect.height > 20 && rect.width > 100 && rect.top <= 8;
    });

    if (banner) {
      return Math.ceil(banner.getBoundingClientRect().height);
    }

    const bodyTop = parseInt(document.body.style.top || "0", 10);
    return Number.isFinite(bodyTop) && bodyTop > 20 ? bodyTop : 0;
  };

  const updateOffset = () => {
    const nextHeight = getBannerHeight();
    if (nextHeight === lastHeight) {
      if (nextHeight > 0 && document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.top = "0px";
      }
      return;
    }

    lastHeight = nextHeight;
    root.style.setProperty("--lgt-translate-banner-height", `${nextHeight}px`);
    root.classList.toggle("lgt-translate-banner", nextHeight > 0);

    if (nextHeight > 0) {
      document.body.style.top = "0px";
    }
  };

  updateOffset();

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(updateOffset);
    resizeObserver.observe(document.body);
  }

  const mutationObserver = new MutationObserver(updateOffset);
  mutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"]
  });

  window.addEventListener("resize", updateOffset, { passive: true });
  window.setTimeout(updateOffset, 500);
  window.setTimeout(updateOffset, 1500);
  window.setTimeout(updateOffset, 3000);
}

function initScrollPerformanceMode() {
  const root = document.documentElement;
  let scrollTimer;

  const markScrolling = () => {
    if (!root.classList.contains("lgt-is-scrolling")) {
      root.classList.add("lgt-is-scrolling");
    }

    clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      root.classList.remove("lgt-is-scrolling");
    }, 160);
  };

  window.addEventListener("scroll", markScrolling, { passive: true });
  window.addEventListener("wheel", markScrolling, { passive: true });
  window.addEventListener("touchmove", markScrolling, { passive: true });
}

function loadAdSense() {
  if (isAdDisabledPage()) {
    return;
  }

  const srcPrefix = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  const hasAdSense = Array.from(document.scripts).some(script => script.src && script.src.startsWith(srcPrefix));

  if (hasAdSense) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `${srcPrefix}?client=${adsenseClient}`;
  document.head.appendChild(script);
}

function createManualAd(slotName, className) {
  const slot = manualAdSlots[slotName];

  if (!slot) {
    return null;
  }

  const wrapper = document.createElement("aside");
  wrapper.className = `lgt-ad-slot ${className || ""}`.trim();
  wrapper.setAttribute("aria-label", "Advertisements");

  const label = document.createElement("span");
  label.className = "lgt-ad-label";
  label.textContent = "Advertisements";

  const ad = document.createElement("ins");
  ad.className = "adsbygoogle";
  ad.style.display = "block";
  ad.dataset.adClient = adsenseClient;
  ad.dataset.adSlot = slot;
  ad.dataset.adFormat = "auto";
  ad.dataset.fullWidthResponsive = "true";

  wrapper.appendChild(label);
  wrapper.appendChild(ad);

  return wrapper;
}

function pushManualAd(wrapper) {
  if (!wrapper) {
    return;
  }

  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (error) {
    console.warn("AdSense ad request skipped:", error);
  }
}

function insertAdAfter(target, ad) {
  if (!target || !ad || ad.dataset.lgtInserted === "true") {
    return;
  }

  target.insertAdjacentElement("afterend", ad);
  ad.dataset.lgtInserted = "true";
  pushManualAd(ad);
}

function initManualAdSlots() {
  if (isAdDisabledPage()) {
    return;
  }

  if (document.documentElement.dataset.lgtAdsInitialized === "true") {
    return;
  }

  document.documentElement.dataset.lgtAdsInitialized = "true";

  const hasConfiguredSlot = Object.values(manualAdSlots).some(Boolean);
  if (!hasConfiguredSlot) {
    return;
  }

  loadAdSense();

  const isToolPage = location.pathname.includes("/tools/");
  const container = document.querySelector(".container.content, .main-content .container, body > .container");

  if (!container) {
    return;
  }

  if (isToolPage) {
    const toolAnchor = container.querySelector(".main-grid, .info, .card:last-child") || container.lastElementChild;
    insertAdAfter(toolAnchor, createManualAd("toolBottom", "lgt-ad-slot--tool"));
    return;
  }

  const sections = Array.from(container.querySelectorAll(":scope > .section, :scope > .download-section"));
  const firstSafeSection = sections.find(section => !section.classList.contains("download-section"));
  const midSafeSection = sections.find((section, index) => index >= 2 && !section.classList.contains("download-section"));
  const lastSafeSection = [...sections].reverse().find(section => !section.classList.contains("download-section"));

  insertAdAfter(firstSafeSection, createManualAd("contentTop", "lgt-ad-slot--content"));

  if (midSafeSection && midSafeSection !== firstSafeSection && midSafeSection !== lastSafeSection) {
    insertAdAfter(midSafeSection, createManualAd("contentMid", "lgt-ad-slot--content"));
  }

  if (lastSafeSection && lastSafeSection !== firstSafeSection && lastSafeSection !== midSafeSection) {
    insertAdAfter(lastSafeSection, createManualAd("contentBottom", "lgt-ad-slot--content"));
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadAdSense();
  initDownloadLinks();
  initImageModal();
  initFriendLinks();
  initNavbar();
  initGoogleTranslateBannerOffset();
  initScrollPerformanceMode();
  initManualAdSlots();
});

runAfterFirstPaint(initDeferredFont, 1800);
runAfterFirstPaint(initAnimatedBackground, 1200, 700);
