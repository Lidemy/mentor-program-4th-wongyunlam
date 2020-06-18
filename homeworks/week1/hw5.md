## 請解釋後端與前端的差異。

#前端(Front-End-Developer)
是我們現在隨處可見的網站，小到網站按鈕大至網頁建設都可以屬於前端的工作範圍，網頁基礎語法使用 HTML，網頁排版 UI/UX 使用CSS 和網頁進行互動使用 Javascript。
#後端(Back-End-Developer)
是網頁完成後，背後需要讓網頁存取資料庫，資料庫的維護和開發就屬於後端的工作內容。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

Browser request server 存取資料 Database
		response

1. Browser request DNS Sever：如何去 google.com 
2. DNS回復：你去10.1.1.1
3. Browser send request to 10.1.1.1
4. 位於 10.1.1.1 的 server 收到 request
5. Server 去詢問 Database，查詢要找的關鍵字，搜尋引擎會使用，爬行網站 (crawling)與建立網站索引 (index)，使用網頁相關性去排序 / 排名 (ranking)，去尋找要的結果
6. Database找到答案，response data toserver，提供我們符合條件的網站透過相關性排序/ 排名，標題、內容描述、網址呈現到查詢結果中
7. Server response to broswer
8. Browser 分析 Data 並顯示出來。

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. diff - 比較兩種檔案之間的不同 (file1 file2)
2. echo - 寫入檔案或是控制是某列印出指令列 (echo on/off or echo > filename)
3. type/cat 將檔案依照順序讀取並把內容送到標準輸出(螢幕)


