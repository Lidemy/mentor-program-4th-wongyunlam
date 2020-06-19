## 教你朋友 CLI

CLI (command line interface，命令列介面) 與 GUI (graphical user interface，圖形使用者介面) 都是用來與電腦溝通的 "介面"，其中 CLI 是透過下指令 (command) 並由電腦端回傳提示 (prompt) 來操作電腦與判斷目前狀態，整個過程都由字元組成。而在 window 與 mac 都有內建，分別稱作 cmd (命令提示字元) 與 terminal (終端機)。

GUI 則主要用滑鼠點擊畫面上的各種 "圖形" 來向電腦傳遞訊息，電腦再將回饋以圖形呈現，為了方便操作，使用者必須知道各個圖形所代表的意義與記憶他們的位置。


|指令|意義|補充|
|:-:|:-:|:-:|
|mkdir|開新的資料夾|Make Directory|
|cd|進入資料夾||
|rm|移除檔案|rm -rf 才能移除資料夾|
|ls|列出該資料夾下的檔案|ls -a 檢視所有檔案(包含隱藏檔案)|
|pwd|顯示所在資料夾|Print Working Directory|
|mv|移動檔案或更改檔名|Move|
|cp|複製檔案||
|code|編輯程式碼||
|date|顯示目前時間||
|cat|列出檔案內容||
|less|分頁式列出檔案內容|
|grep|顯示關鍵字||
|wget|自動下載網頁檔案||
|curl|取得網頁內容並輸出至螢幕上||
|echo|在螢幕上印出特定字串||


知道上述指令後，想建立 wifi 資料夾，並且在裡面建立 afu.js 的檔案，步驟如下
1. mkdir wifi
2. cd wifi
3. touch afu.js
