
<div id="google_translate_element"></div>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'zh-TW'}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" defer ></script>

[2025-06-05] 4.0.0.4版本更新
- [x] DRM遊戲圖片框右上角增加醒目的"DRM"字樣
- [x] 強化關機處理事件
- [x] 修復左側遊戲過多時最下方的遊戲無法滾出展示的bug
- [x] 縮小遊戲圖片加載失敗時默認的18禁圖片的尺寸 

[2025-05-29] 4.0.0.3版本更新
- [x] 默認不自動播放遊戲視頻
- [x] 添加監聽關機事件，關機時自動退出程序
- [x] 優化遊戲列表加載過程

[2025-05-17] 4.0.0.2版本更新
- [x] 遊戲搜索支持tag
- [x] 左側已導入遊戲，支持過濾
- [x] 工具箱導出遊戲時，如果軟件中已有的遊戲，導出按鈕背景會變黃提示
- [x] 優化網絡抖動時警告提示
- [x] 修復已導入遊戲不再出現導入按鈕

[2025-05-17] 4.0.0.1版本更新
- [x] 解決重大BUG,UI界面從此不再卡頓
- [x] 將程序全面國際化,支持非常多國家的語言(全面擁抱Steam支持的語言)
- [x] 對于特殊遊戲只能從桌標啟動Steam.exe彈窗提示
- [x] 添加程序卸載腳本在安裝目錄下
- [x] 適配更新小分辮率

[2025-05-10] 3.0.2.2版本更新
- [x] 將消息通知自動彈出
- [x] 支持steamdeck掌機最小分辨率1280*768
- [x] 優化部份按鈕佈局和描述
- [x] 對于需要從luckygametools官網下載補丁的遊戲在導入時彈框提示

[2025-04-29] 3.0.2.1版本更新
- [x] 新增系統消息提示窗口,方便重要消息通知 
- [x] 優化自動更新下載空包數據，導致軟件無法更新使用的問題

[2025-04-26] 3.0.2.0版本更新
- [x] 進一步符合windows開發規範，進一步保障Windows defender誤殺問題
- [x] 優化掉強制安裝CA證書
- [x] 修復導入遊戲，重啟后無效的BUG
- [x] 去遊戲加載時的閃爍動畫,減少CPU使用
- [x] 優化其它若干問題

[2025-04-17] 3.0.1.0版本更新
- [x] 規範使用windows api程序使用姿勢,作者本機測試，不會觸發Windows defender誤殺
- [x] 優化線程并發卡死問題
- [x] 優化UI界面遊戲列表偶爾不展示的問題  

[2025-04-17] 3.0.0.4版本更新
- [x] 修復480聯機遊戲 的存檔問題
- [x] 優化核心文件免殺defender
- [x] 優化部份文件大小

[2025-04-15] 3.0.0.3版本更新
- [x] 給大家帶來了全新的SpaceWar 480聯機引擎，無需任何第三方聯機補丁，支持99.99%SpaceWar 480聯機遊戲
- [x] 優化其它性能問題等等

[2025-04-13] 3.0.0.2版本更新
- [x] 優化當遊戲列表網絡查詢失敗時，使用本地緩存的遊戲列表
- [x] 導入的清單對于特定遊戲可以解鎖DLC

[2025-04-13] 3.0.0.1版本更新
- [x] 修復添加-luckygametools啟動遊戲時丟失其它參數的BUG
- [x] Patch遊戲工具DSX(1812620),完全可用
- [x] 開機自啟動添加任務計劃姿勢
- [x] 優化遊戲名稱搜索功能
- [x] 以需要管理員權限才能正常進入遊戲的遊戲在啟動時，彈窗提醒
- [x] 使用新字體美化了界面字體
- [x] 重大更新：：：：：添加清單導出和導入功能：：：：：：

[2025-03-31] 2.0.3.2版本更新
- [x] 遊戲列表界面展示出D加密遊戲標示
- [x] 修復遊戲列表默認是中文的BUG

[2025-03-28] 2.0.3.1版本更新
- [x] 新增 《工具箱》版本，目前版本推出，一鍵離線 Uplay的功能
- [x] 新增 部份單機遊戲需要在線驗證時進不去的 繞過方式，具體使用姿勢說過官網或群消息
- [x] 優化遊戲列表在網絡限制的情況下可以使用本地緩存的列表
- [x] 修復部份dns解析bug

[2025-03-22] 2.0.3.0版本更新
-  [x] 優化hosts文件在程序異常退出時未能正常恢復，在程序下次啟動時修正
-  [x] 減少程序啟動時UI界面的動畫效果，可有效減少CPU佔用(這個破cef框架太老了導致的)
-  [x] 自動添加聯機啟動遊戲480參數: -luckygametools([已收錄的遊戲列表](https://github.com/luckygametools/steam-cfg/blob/main/arg-luckygametools))
-  [x] 優化日誌自動清理，只保存最近兩天的
-  [x] 修復hid steam強化模式
-  [x] 修復移除入庫后重啟steam，遊戲還在的BUG
-  [x] 修復UI界面失去焦點時停止動畫的bug 

[2025-03-19] 開始記錄開發日誌了


<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
<style>
body {
  background-image: url('background.jpg'); 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
  background-attachment: fixed; 
  font-family: 'Poppins', sans-serif;
}
</style>
