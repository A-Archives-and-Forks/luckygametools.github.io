// JavaScript file for Lucky Game Tools
// Currently no interactive functionality is needed
// This file is included for future enhancements
var downloadUrl1="https://gofile.io/d/7x1sZ9";
var downloadUrl2="https://ranoz.gg/file/cPOv0ao6111111";

// 友情鏈接資料陣列
const friendLinks = [
{ name: "Telegram", url: "https://t.me/luckygametools" },
{ name: "Discord", url: "https://discord.gg/X4MTpDbcpT" },
{ name: "Youtube", url: "https://www.youtube.com/@GameToolsLucky" }
];
  
document.addEventListener('DOMContentLoaded', function() {
    // Page loaded successfully
    console.log('LuckyGameTools page loaded');
	if(document.getElementById('download1')!=null){
		document.getElementById('download1').href=downloadUrl1;
	}
	if(document.getElementById('download2')!=null){
		document.getElementById('download2').href=downloadUrl2;
	}


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
