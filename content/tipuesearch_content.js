var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 41023213 \n 網站倉儲:\xa0 https://github.com/41023213/cp2021_hw \n 網站連結:\xa0 https://41023213.github.io/cp2021_hw/content/index.html \n 其他與個人或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW1', 'text': '<<<<<<< HEAD \n HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n \n 1.利用英文輸入  https://docs.github.com/en/github/writing-on-github/editing-and-sharing- content-with-gists/creating-gists#about-gists \xa0中的英文內容,並用手機計時, 大概需要多少時間? \n 2.利用中文輸入  https://ithelp.ithome.com.tw/articles/10206233  的第一段中文說明,並用手機計時,大概需要多少時間? \n 3.HW1-1: 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n 4.HW1-2: 加入與 Cango 頁面 Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. \n', 'tags': '', 'url': 'HW1.html'}, {'title': '英打', 'text': 'Every gist is a Git repository,which means that it can be forkd=ed and cloned.If you are signed in to GitHub when you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your gist home page. Gists can be public or secret.Public gists show up in Discover,where people can browse new gists as they\'re created. They\'re also searchable.Secret gists aren\'t private. If you send the URL of a secret gist to a friend, they\'ll be aable to see it. However,if someone you don\'t know discovers the URL, they\'ll also be able to see your gist.If you need to kepp your code awar from prying eyes ,you may want to create a private repository instead. After creating a gist, you cannot convert it from public to secret. You\'ll receive a notification when: You are the author of a gist. Someone mentions you in a gist. You subscibe to a gist,by clicking Subscibe at the top of any gist. You can pin gists to your profile so other people can see them easilr.For more information,see "Pinning items to your profile." You can discover public gists others have created by going to the gist home page and clicking ALL Gists. This will take you to a page of all gisrs sorted and displayed by time of creation or update.You can also search gists by language with Gist Search. Gist search uses the same search syntax as code search. Since gists are Git repositories,you can view their full commit history, complete with diffs. You can also fork or clone gists. For more information,see"Forking and cloneing gists". Youcan download a ZIP file of a gist by clicking the Download ZIP button at the top of the gist. You can embed a gist in any text field that supports Javascript,such as a blog post.To get the embed code, click the clipboard icon next to the Embed URL of a gist. To embed a specific gist file, append the Embed URL with ?file=FILENAME. Gist supports mapping GeoJSON files. These maps are displayed in embedded gists,so you can easily share and embed maps. For more information,see"Working with non-code files. \n 64min \n', 'tags': '', 'url': '英打.html'}, {'title': '中打', 'text': 'Gist是Github的一個子服務，且任何人都能夠可以使用這個服務，不論你是否擁 有Github帳號。以開發者的角度來說，最基本的功能就是可以分享片段的原 始碼。有別於Github的Repository，Gist可以只分享專案中的某一個小檔案 中的程式碼，且擁有私人的選項，讓別人不會搜尋到你的Gist。在Github的 Repository設定Private是要付費的，但在Gist是不需要的。除此之外Gist 還有許多用處，包括可以直接執行我們就來一一介紹吧! \n 5min \n', 'tags': '', 'url': '中打.html'}, {'title': 'HW1-1', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW1-2', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n \n', 'tags': '', 'url': 'HW1-2.html'}, {'title': 'HW2', 'text': '\n \n HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如 run 頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇: https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py 將 https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439 作為 https://mde.tw/cp2021/content/run.html 頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行) \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'run1', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run1.html'}, {'title': 'run2', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run2.html'}, {'title': 'HW3', 'text': 'HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'W12', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag red snake1 snake2 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks \n', 'tags': '', 'url': 'Final Project.html'}, {'title': '41023213', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag 移動方塊 w13_1 w13_2 final1 final2 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': '41023213.html'}, {'title': 'Exam', 'text': '<<<<<<< HEAD \n \n 題目一: 請使用 random 模組, 以隨機方式列出六行文字如下: \n 第 1 排隨機列出的序號為 3. ...... ...... \n \n 題目二: 請使用 random 模組, 以隨機方式列出六行文字如下: \n 第一排隨機列出的序號為 3. ...... ...... \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'W13-1', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13-1.html'}, {'title': 'W13-2', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13-2.html'}]};