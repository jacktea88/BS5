# BS5 網頁提示詞範本

這份範本整理了目前使用過的首頁、關於我們、產品頁與骨架頁提示詞，可以直接複製後再修改圖片、文字或檔名。

---

## 1. 首頁版型提示詞

請設計一個甜點品牌首頁網站，整體風格清新、簡潔、以蛋糕主題為主。頁面使用滿版背景圖，背景素材為草莓奶油蛋糕，背景需鋪滿整個畫面並保持置中裁切。上方有一條黑色 Bootstrap 導覽列，左側顯示品牌文字「甜時 ． Sweet」，右側有三個導覽連結：「首頁」、「關於我們」、「產品介紹」，在手機版時可收合成漢堡選單。頁面中央放置一個半透明紅色區塊，背景色為 rgba(255,73,73,0.62)，區塊內以白色大字顯示「草莓奶油慕斯蛋糕」，文字水平與垂直置中，整體畫面要有溫暖、甜美、精緻的感覺，適合蛋糕店品牌首頁。需要提供 index.html 與對應的 style.css 版面設計。

---

## 2. 關於我們頁面提示詞

### 2-1. 一般版

請設計一個關於我們頁面，包含 about1.html 和對應的 about.css，並導入 Bootstrap 5。網頁依序包含 header、banner、container 和 footer。header 的呈現方式需與 index.html 保持一致；banner 需放置 banner.jpg 圖片；container 採用兩列兩欄的排版方式：第一列左側顯示「關於我們 About US」文字，右側放置 cupcake.jpg 圖片；第二列左側放置 macarons.jpg 圖片，右側顯示「店家資訊 About US」文字；footer 則需顯示今年的版權宣告，頁面內容不足時仍然位於頁面底部。在 about.css 檔案中，footer 背景色為黑色。另外，所有文字都需要置中對齊。

### 2-2. 參考骨架版

參考 wireframe.html，請設計一個關於我們頁面，包含 about2.html 和對應的 about2.css。header 的呈現方式需與 index.html 保持一致；banner 需放置 banner.jpg 圖片；container 採用兩列兩欄的排版方式：第一列左側顯示「關於我們 About US」文字，右側放置 cupcake.jpg 圖片；第二列左側放置 macarons.jpg 圖片，右側顯示「店家資訊 About US」文字；footer 則需顯示今年的版權宣告，頁面內容不足時仍然位於頁面底部。需要提供 about2.html 與對應的 about2.css 版面設計。

---

## 3. 產品頁面提示詞

### 3-1. 一般版

請設計一個產品項的網頁，包含 product1.html 和對應的 product1.css，並導入 Bootstrap 框架。網頁依序包含 header、banner、container 和 footer。header、banner、footer 的呈現方式需與 about2.html 保持一致。banner 區域下方顯示「產品介紹」文字；container 採用三欄式的排版方式，並套用 Bootstrap 的 card 樣式，圖片依序套用 cake01.jpg 圖片、cake02.jpg 圖片、cake03.jpg 圖片，文字依序套用「鄉村檸檬乳酪塔」、「精緻手工巧克力蛋糕」、「限量莓果乳酪蛋糕」，每一個 card 右下方都有「我要訂購」按鈕。

### 3-2. 參考骨架版

參考 wireframe-product.html，請設計一個產品項目頁面，包含 product2.html 和對應的 product2.css。header、banner、footer 的呈現方式需與 about2.html 保持一致。banner 區域下方顯示「產品介紹」文字；container 採用三欄式的排版方式，並套用 Bootstrap 的 card 樣式，圖片依序套用 cake01.jpg 圖片、cake02.jpg 圖片、cake03.jpg 圖片，文字依序套用「鄉村檸檬乳酪塔」、「精緻手工巧克力蛋糕」、「限量莓果乳酪蛋糕」，每一個 card 右下方都有「我要訂購」按鈕。需要提供 product2.html 與對應的 product2.css 版面設計。

---

## 4. 骨架頁提示詞

### 4-1. 關於我們骨架版

參考 wireframe.html，請設計一個使用 Bootstrap 5 的版面結構示意網頁，並提供 wireframe.html 與對應的 wireframe.css。頁面整體結構依序包含 header、banner、container 和 footer。header 的導覽列需與首頁 index.html 保持一致，採用 Bootstrap 的 navbar、navbar-expand-lg、navbar-dark、bg-dark、fixed-top 樣式，左側顯示品牌文字「甜時 ． Sweet」，右側有三個導覽連結「首頁」、「關於我們」、「產品介紹」，並具備漢堡選單收合功能。

banner 區塊放在導覽列下方，作為上方大區域示意。container 區塊採用兩列兩欄的 Bootstrap 排版方式：第一列左側為文字區塊，內容以 h3、p、p 這種骨架式標示呈現，右側放置圖片區塊；第二列則左右顛倒，左側放圖片區塊，右側放文字區塊。整體版面要呈現切版骨架的感覺，各區塊以不同底色區分，例如外框、欄位面板、文字方塊與圖片方塊都要清楚可辨識。footer 放在頁面最下方，顯示 footer 字樣，並保持與上方區塊有明確分隔。

wireframe.css 需負責控制整體骨架視覺，包括導覽列底色、banner 區高度、container 外框顏色、row 與 col 的區塊色塊、文字與圖片的深色佔位塊，以及 footer 的底色與置中效果。頁面內容不需要真實主文案，重點是呈現清楚的 Bootstrap 版型骨架與區塊結構，方便後續再套入實際內容。

### 4-2. 產品骨架版

參考 wireframe-product.html，請設計一個產品項目頁面，包含 wireframe-product.html 和對應的 wireframe.css。頁面整體結構依序包含 header、banner、container 和 footer。header 的導覽列需與首頁 index.html 保持一致，採用 Bootstrap 的 navbar、navbar-expand-lg、navbar-dark、bg-dark、fixed-top 樣式，左側顯示品牌文字「甜時 ． Sweet」，右側有三個導覽連結「首頁」、「關於我們」、「產品介紹」，並具備漢堡選單收合功能。

banner 區塊放在導覽列下方，作為上方大區域示意。container 區塊採用三欄式的 Bootstrap 排版方式，每一欄都包含圖片、標題、段落與連結按鈕的骨架提示，並以不同底色區分欄位與內容區塊。整體版面要呈現切版骨架的感覺，各區塊以不同底色區分，例如外框、欄位面板、文字方塊與圖片方塊都要清楚可辨識。footer 放在頁面最下方，顯示 footer 字樣，並保持與上方區塊有明確分隔。

wireframe.css 需負責控制整體骨架視覺，包括導覽列底色、banner 區高度、container 外框顏色、row 與 col 的區塊色塊、文字與圖片的深色佔位塊，以及 footer 的底色與置中效果。頁面內容不需要真實主文案，重點是呈現清楚的 Bootstrap 版型骨架與區塊結構，方便後續再套入實際內容。

---

## 5. 可直接套用的改寫規則

如果你要快速改成新的頁面，可以直接替換下面幾個部分：

- `index.html`：首頁名稱、背景圖、中央主標題文字
- `about1.html` / `about2.html`：banner 圖、兩列內容文字、圖片來源
- `product1.html` / `product2.html`：產品名稱、card 圖片、按鈕文字
- `wireframe.html` / `wireframe-product.html`：把真實內容換成區塊骨架提示

---

## 6. 常用檔案對照

- 首頁：`index.html` + `style.css`
- 關於我們：`about1.html` + `about.css`
- 關於我們骨架版：`about2.html` + `about2.css`
- 產品頁：`product1.html` + `product1.css`
- 產品頁骨架版：`product2.html` + `product2.css`
- 骨架首頁：`wireframe.html` + `wireframe.css`
- 骨架產品頁：`wireframe-product.html` + `wireframe.css`

---

## 7. 備註

這份範本是依照目前已完成的頁面整理而成，可直接複製、替換檔名與圖片路徑後重用。若要做成新的頁面，只要沿用同樣結構，再把文字和圖片資源換掉即可。
