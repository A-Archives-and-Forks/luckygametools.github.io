// JavaScript file for Lucky Game Tools
// Currently no interactive functionality is needed
// This file is included for future enhancements
var downloadUrl1="https://gofile.io/d/1fbRWO";
var downloadUrl2="https://ranoz.gg/file/PLYclRuR";
var downloadUrl3="https://mega.nz/file/HpxBUBjb#VD6D01S-MVMvsvNMoUccMUIu44jC_Di36Bu5UVM7aAE";

// 友情鏈接資料陣列
const friendLinks = [
{ name: "Telegram", url: "https://t.me/luckygametools" },
{ name: "Discord", url: "https://discord.gg/X4MTpDbcpT" },
{ name: "Youtube", url: "https://www.youtube.com/@GameToolsLucky" },
{ name: "YuCursorTool", url: "https://970410.xyz/" }
];

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

function copyEmail(thiz,email) {

    // 複製到剪貼簿
    navigator.clipboard.writeText(email).then(() => {
        const tooltip = thiz.firstElementChild;
        var oldTooltipText=tooltip.textContent;
        tooltip.textContent = "Copied！"; 

        setTimeout(() => {
            tooltip.textContent = oldTooltipText;
        }, 2000);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Page loaded successfully
    console.log('LuckyGameTools page loaded');
	if(document.getElementById('download1')!=null){
		document.getElementById('download1').href=downloadUrl1;
	}
	if(document.getElementById('download2')!=null){
		document.getElementById('download2').href=downloadUrl2;
	}
  if(document.getElementById('download3')!=null){
    document.getElementById('download3').href=downloadUrl3;
  }


// 創建modal元素（如果頁面上還沒有）
  let modal = document.getElementById('imageModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'modal';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    
    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.id = 'modalImage';
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
  }
  
  const modalImg = document.getElementById('modalImage');
  const close = modal.querySelector('.close');
  
  // 為頁面上所有圖片添加點擊事件
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.classList.contains('modal-content')) {
      modal.style.display = 'flex';
      modalImg.src = e.target.src;
      // 可選：使用高解析度圖片（如果有）
      if (e.target.dataset.fullsize) {
        modalImg.src = e.target.dataset.fullsize;
      }
    }
  });
  
  // 關閉按鈕事件
  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // 點擊modal背景關閉
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // 取得 footer 元素
  const footer = document.getElementsByTagName('footer')[0];

  // 建立容器元素
  const linkContainer = document.createElement('div');
  linkContainer.style.marginTop = '10px';
  linkContainer.innerHTML = 'Link：';

  // 建立每個連結並加到容器中
  friendLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.name;
    a.target = '_blank';
    a.style.margin = '0 8px';
    a.style.color = '#99ccff';
    a.style.textDecoration = 'none';
    a.addEventListener('mouseover', () => a.style.textDecoration = 'underline');
    a.addEventListener('mouseout', () => a.style.textDecoration = 'none');
    linkContainer.appendChild(a);
  });

  // 加入 footer 中
  footer.appendChild(linkContainer);


});
