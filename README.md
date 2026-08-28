# 佛教喪禮服務商比較

以 [open-slide](https://github.com/1weiho/open-slide) 製作的簡報，用於家庭內部比較香港佛教喪禮服務商報價。

投影片原始碼：`slides/buddhist-funeral-comparison/index.tsx`

## 前提

| 條件 | 內容 |
| --- | --- |
| 宗教儀式 | 佛教 |
| 遺體所在 | 基督教聯合醫院殮房，需安排接體入館 |
| 安葬方式 | 火葬 |
| 出席人數 | 約 20–40 人 |
| 目標 | 控制開支，並申領社署綜援殮葬津貼 |

## 頁面

| # | 頁面 |
| --- | --- |
| 01 | 封面 |
| 02 | 社署殮葬津貼 $17,870 |
| 03 | 東華三院 佛教傳統喪禮套裝 |
| 04 | 其他佛教／可辦佛教方案 |
| 05 | 扣除津貼後實際自付 |
| 06 | 項目對照 — 場地、遺體及政府收費 |
| 07 | 項目對照 — 儀式、用品及後續 |
| 08 | 場地容量與親友交通 |
| 09 | 接體入館是否已包 |
| 10 | 津貼資格、文件與限期 |
| 11 | 未能核實的項目 |
| 12 | 報價前必問 |
| 13 | 資料來源一覽 |

## 資料來源

每個金額在投影片上都附有出處連結。以下為完整清單。

| 項目 | 出處 |
| --- | --- |
| 東華三院 服務套裝收費（總頁） | https://funeralservices.tungwahcsd.org/packages?_lang=zh-TW |
| 東華 鑽石山 佛教 $35,830 | https://funeralservices.tungwahcsd.org/content/files/diamond-hill-funeral-parlour/DHFP%20funeral%20package%202025_1.pdf |
| 東華 萬國 佛教 $38,820 | https://funeralservices.tungwahcsd.org/content/files/international-funeral-parlour/IFP%20funeral%20package%202025_10OCT.pdf |
| 東華 寰宇 佛教 $38,820 | https://funeralservices.tungwahcsd.org/content/files/global-funeral-parlour/GFP%20funeral%20package%202025_2.pdf |
| 綜援殮葬津貼 $17,870（生效 2026-04-01） | https://funeralservices.tungwahcsd.org/content/files/CSSA%20Package/%E6%9D%B1%E8%8F%AF%E4%B8%89%E9%99%A2CSSA_2026.pdf |
| 鋒盛殯儀 佛教套餐 $43,680 | https://www.goodbye-funeral.com.hk/p6-funeral-parlor-39800.php |
| 大圍寶福紀念館 特惠道教／佛教 $50,000 | https://funeral.pofookhill.com/%e7%89%b9%e6%83%a0%e6%ae%af%e5%84%80%e5%a5%97%e9%a4%90-%e2%94%80-%e9%81%93%e6%95%99%e3%80%81%e4%bd%9b%e6%95%99/ |
| 津貼申請資格、文件、流程 | https://www.paradise.com.hk/post/funeral-subsidy-application-guide-hong-kong |
| 晶彩終轉站 $32,800 · 仁智 laGreen $29,800 | 紙本單張（仁智單張編號 202508），無公開網頁可核對 |

### 注意事項

- 津貼金額以 **$17,870** 為準（東華 2026 年版文件）。網上多處仍寫 $17,540，該數字為 2025/26 年度，已失效。
- 寶福 $50,000 出自 2018-10-10 刊登的頁面，並註明「價格只供參考」，現價須向館方確認。
- 東華萬國及鑽石山無公開場地租金表，套裝已含靈寢室；如需大禮堂須另行報價。
- 項目對照表以 `？` 標示對方文件未列明、須落單前確認的項目，並非代表不包。
- 所有金額為港幣，僅供比較參考，一切以服務商正式報價為準。

## 開發

```bash
npm install
npm run dev      # 開發伺服器，熱更新
npm run build    # 輸出靜態網站至 dist/
npm run preview  # 本機預覽
```

## 部署至 Vercel

`vercel.json` 已明確聲明建置設定，匯入 repo 後可直接部署。

- Build Command `npm run build`
- Output Directory `dist`
- 已加入 `X-Robots-Tag: noindex, nofollow`

此簡報含家庭內部資料。建議 GitHub repo 設為 **private**，並在 Vercel 專案的
Settings → Deployment Protection 開啟密碼保護或 Vercel Authentication。
