import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#f4f1ea', text: '#211e18', accent: '#4f6b52' },
  fonts: {
    display:
      '"PingFang TC", "Microsoft JhengHei", "Noto Sans TC", "Hiragino Sans TC", system-ui, sans-serif',
    body: '"PingFang TC", "Microsoft JhengHei", "Noto Sans TC", "Hiragino Sans TC", system-ui, sans-serif',
  },
  typeScale: { hero: 132, body: 34 },
  radius: 6,
};

const muted = '#7d7668';
const line = '#d8d2c5';
const warn = '#9c5b2c';
const no = '#a8a094';
const mono = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';

const page = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--osd-font-body)',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  display: 'flex',
  flexDirection: 'column',
  padding: '86px 100px 64px',
} as const;

const PageNo = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 30,
        right: 100,
        fontSize: 21,
        color: muted,
        letterSpacing: '0.08em',
      }}
    >
      {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  );
};

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 60,
      fontWeight: 800,
      margin: 0,
      lineHeight: 1.2,
    }}
  >
    {children}
  </h2>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 23,
      color: 'var(--osd-accent)',
      letterSpacing: '0.22em',
      fontWeight: 600,
      marginBottom: 16,
    }}
  >
    {children}
  </div>
);

const Ref = ({ label, url }: { label: string; url: string }) => (
  <div style={{ marginBottom: 8, lineHeight: 1.35 }}>
    <span style={{ fontSize: 20, color: muted }}>{label}　</span>
    <span
      style={{
        fontSize: 18,
        fontFamily: mono,
        color: 'var(--osd-accent)',
        wordBreak: 'break-all',
      }}
    >
      {url}
    </span>
  </div>
);

const RefBlock = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: `2px solid ${line}` }}>
    <div
      style={{
        fontSize: 19,
        color: muted,
        letterSpacing: '0.16em',
        marginBottom: 10,
        fontWeight: 600,
      }}
    >
      出處
    </div>
    {children}
  </div>
);

const Cover: Page = () => (
  <div style={{ ...page, justifyContent: 'center', padding: '0 140px', position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 14,
        height: '100%',
        background: 'var(--osd-accent)',
      }}
    />
    <Eyebrow>家庭內部參考</Eyebrow>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 900,
        margin: '0 0 36px',
        lineHeight: 1.12,
      }}
    >
      佛教喪禮
      <br />
      服務商比較
    </h1>
    <p style={{ fontSize: 38, color: muted, margin: 0, lineHeight: 1.6 }}>
      基督教聯合醫院殮房出發　·　火葬　·　出席約 20–40 人
      <br />
      目標：控制開支並申領社署殮葬津貼
    </p>
    <div style={{ marginTop: 52, fontSize: 25, color: muted, letterSpacing: '0.1em' }}>
      整理日期 2026年8月28日　·　所有金額為港幣
    </div>
    <PageNo />
  </div>
);

const GrantAmount: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>第一件事</Eyebrow>
    <Heading>社署殮葬津貼：$17,870</Heading>
    <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
      <div
        style={{
          flex: 1,
          border: `2px solid ${line}`,
          borderRadius: 'var(--osd-radius)',
          padding: '28px 34px',
        }}
      >
        <div style={{ fontSize: 23, color: muted, marginBottom: 12 }}>現行金額</div>
        <div style={{ fontSize: 64, fontWeight: 800, color: 'var(--osd-accent)' }}>$17,870</div>
        <div style={{ fontSize: 25, color: muted, marginTop: 10 }}>生效 2026年4月1日</div>
      </div>
      <div
        style={{
          flex: 1,
          border: `2px solid ${line}`,
          borderRadius: 'var(--osd-radius)',
          padding: '28px 34px',
        }}
      >
        <div style={{ fontSize: 23, color: muted, marginBottom: 12 }}>已失效 · 勿引用</div>
        <div style={{ fontSize: 64, fontWeight: 800, color: no, textDecoration: 'line-through' }}>
          $17,540
        </div>
        <div style={{ fontSize: 25, color: muted, marginTop: 10 }}>生效 2025年10月1日</div>
      </div>
    </div>
    <p style={{ fontSize: 31, lineHeight: 1.6, marginTop: 36, maxWidth: 1600 }}>
      <span style={{ color: warn, fontWeight: 700 }}>注意：</span>
      恩福殯儀網頁仍寫 $17,540，該文以 2025/26 年度為準，已被東華三院 2026 年版文件的 $17,870
      取代。本簡報以 $17,870 計算，實際上限以社署審批為準。
    </p>
    <RefBlock>
      <Ref
        label="$17,870（東華三院綜援殮葬津貼套裝，生效 2026-04-01）"
        url="https://funeralservices.tungwahcsd.org/content/files/CSSA%20Package/%E6%9D%B1%E8%8F%AF%E4%B8%89%E9%99%A2CSSA_2026.pdf"
      />
      <Ref
        label="$17,540（恩福殯儀津貼指南，2025/26 年度）"
        url="https://www.paradise.com.hk/post/funeral-subsidy-application-guide-hong-kong"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const TwRow = ({
  name,
  price,
  gov,
  tw,
}: {
  name: string;
  price: string;
  gov: string;
  tw: string;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 250px 210px 250px',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: `1px solid ${line}`,
      fontSize: 31,
    }}
  >
    <div>{name}</div>
    <div style={{ textAlign: 'right', fontWeight: 800, fontFamily: mono }}>{price}</div>
    <div style={{ textAlign: 'right', color: muted, fontFamily: mono }}>{gov}</div>
    <div style={{ textAlign: 'right', color: muted, fontFamily: mono }}>{tw}</div>
  </div>
);

const TungWahBuddhist: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>方案 A · 東華三院（非牟利）</Eyebrow>
    <Heading>佛教傳統喪禮套裝</Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 250px 210px 250px',
        padding: '22px 0 10px',
        borderBottom: '2px solid var(--osd-text)',
        fontSize: 23,
        color: muted,
        fontWeight: 600,
      }}
    >
      <div>殯儀館</div>
      <div style={{ textAlign: 'right' }}>套裝總額</div>
      <div style={{ textAlign: 'right' }}>政府收費</div>
      <div style={{ textAlign: 'right' }}>東華收費</div>
    </div>
    <TwRow name="鑽石山殯儀館（蒲崗村道181號）" price="$35,830" gov="$1,360" tw="$34,470" />
    <TwRow name="萬國殯儀館（紅磡暢行道8號）" price="$38,820" gov="$1,360" tw="$37,460" />
    <TwRow name="寰宇殯儀館（紅磡暢行道6號）" price="$38,820" gov="$1,360" tw="$37,460" />
    <p style={{ fontSize: 29, lineHeight: 1.6, marginTop: 28, color: muted, maxWidth: 1620 }}>
      政府收費 $1,360 = 死亡證 + 火化費。佛教儀式為尼姑四眾四出頭唸經、往生咒。
      套裝含靈寢室守夜及出殯、接送遺體回館、遺體冷凍保存。鑽石山套裝不含旅遊巴。
    </p>
    <RefBlock>
      <Ref
        label="鑽石山 $35,830"
        url="https://funeralservices.tungwahcsd.org/content/files/diamond-hill-funeral-parlour/DHFP%20funeral%20package%202025_1.pdf"
      />
      <Ref
        label="萬國 $38,820"
        url="https://funeralservices.tungwahcsd.org/content/files/international-funeral-parlour/IFP%20funeral%20package%202025_10OCT.pdf"
      />
      <Ref
        label="寰宇 $38,820"
        url="https://funeralservices.tungwahcsd.org/content/files/global-funeral-parlour/GFP%20funeral%20package%202025_2.pdf"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const OtherRow = ({ name, price, note }: { name: string; price: string; note: string }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 240px',
      alignItems: 'baseline',
      padding: '14px 0',
      borderBottom: `1px solid ${line}`,
    }}
  >
    <div>
      <div style={{ fontSize: 31 }}>{name}</div>
      <div style={{ fontSize: 23, color: muted, marginTop: 5, lineHeight: 1.45 }}>{note}</div>
    </div>
    <div style={{ textAlign: 'right', fontSize: 33, fontWeight: 800, fontFamily: mono }}>
      {price}
    </div>
  </div>
);

const OtherOperators: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>方案 B · 持牌殮葬商及私營殯儀館</Eyebrow>
    <Heading>其他佛教／可辦佛教方案</Heading>
    <div style={{ marginTop: 24 }}>
      <OtherRow
        name="晶彩終轉站 — 佛教儀式殯儀館出殯"
        price="$32,800"
        note="鑽石山殯儀館，可容納約 20–30 人；免費白雲石骨灰盅。單張另列政府收費 $140 + $1,220，未列明是否已包"
      />
      <OtherRow
        name="鋒盛殯儀 — 佛教套餐"
        price="$43,680"
        note="已包鑽石山殯儀館 30–40 人房間、政府火葬爐費 $1,220 及死亡證 $140、A級白雲石骨灰盅"
      />
      <OtherRow
        name="大圍寶福紀念館 — 特惠道教／佛教套餐"
        price="$50,000"
        note="含 E 級守夜及出殯禮堂；儀式為喃嘸打齋（道教規格），佛教家庭需確認"
      />
      <OtherRow
        name="仁智 laGreen — 尊榮告別儀式"
        price="$29,800"
        note="西式短暫停留，不含場地租金亦不含佛教法事；$23,800 + $6,000 宗教儀式安排"
      />
    </div>
    <RefBlock>
      <Ref
        label="晶彩終轉站 $32,800"
        url="用戶提供單張（Glorify Station 佛教儀式殯儀館出殯服務）· 2344 1448"
      />
      <Ref
        label="鋒盛殯儀 $43,680"
        url="https://www.goodbye-funeral.com.hk/p6-funeral-parlor-39800.php"
      />
      <Ref
        label="寶福紀念館 $50,000"
        url="https://funeral.pofookhill.com/%e7%89%b9%e6%83%a0%e6%ae%af%e5%84%80%e5%a5%97%e9%a4%90-%e2%94%80-%e9%81%93%e6%95%99%e3%80%81%e4%bd%9b%e6%95%99/"
      />
      <Ref label="仁智 laGreen $29,800" url="用戶提供單張，編號 202508 · 2511 1100" />
    </RefBlock>
    <PageNo />
  </div>
);

const GrantRow = ({
  name,
  gross,
  net,
  emphasis,
}: {
  name: string;
  gross: string;
  net: string;
  emphasis?: boolean;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 230px 270px',
      alignItems: 'center',
      padding: '14px 0',
      borderBottom: `1px solid ${line}`,
      fontSize: 31,
      color: emphasis ? 'var(--osd-accent)' : 'var(--osd-text)',
      fontWeight: emphasis ? 700 : 400,
    }}
  >
    <div>{name}</div>
    <div style={{ textAlign: 'right', fontFamily: mono, color: muted }}>{gross}</div>
    <div style={{ textAlign: 'right', fontFamily: mono, fontWeight: 800 }}>{net}</div>
  </div>
);

const NetCost: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>扣除津貼後</Eyebrow>
    <Heading>實際自付金額</Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 230px 270px',
        padding: '22px 0 10px',
        borderBottom: '2px solid var(--osd-text)',
        fontSize: 23,
        color: muted,
        fontWeight: 600,
      }}
    >
      <div>方案</div>
      <div style={{ textAlign: 'right' }}>套裝價</div>
      <div style={{ textAlign: 'right' }}>減 $17,870 後</div>
    </div>
    <GrantRow name="東華 綜援殮葬津貼套裝" gross="$17,870" net="$0" emphasis />
    <GrantRow name="晶彩終轉站 佛教" gross="$32,800" net="$14,930" />
    <GrantRow name="東華鑽石山 佛教傳統" gross="$35,830" net="$17,960" />
    <GrantRow name="東華萬國／寰宇 佛教傳統" gross="$38,820" net="$20,950" />
    <GrantRow name="鋒盛 佛教套餐" gross="$43,680" net="$25,810" />
    <GrantRow name="寶福 特惠道／佛" gross="$50,000" net="$32,130" />
    <p style={{ fontSize: 27, lineHeight: 1.55, marginTop: 24, color: warn, maxWidth: 1620 }}>
      減數為本人計算，非服務商報價。津貼為實報實銷，須先全額墊支，社署審批後發還。
    </p>
    <RefBlock>
      <Ref
        label="津貼 $17,870"
        url="https://funeralservices.tungwahcsd.org/content/files/CSSA%20Package/%E6%9D%B1%E8%8F%AF%E4%B8%89%E9%99%A2CSSA_2026.pdf"
      />
      <Ref
        label="各套裝價出處見第 03 及 04 頁"
        url="https://funeralservices.tungwahcsd.org/packages?_lang=zh-TW"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const Mark = ({ v }: { v: string }) => {
  const yes = v === '✓';
  const unknown = v === '？';
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: yes || unknown ? 30 : 24,
        color: yes ? 'var(--osd-accent)' : unknown ? warn : no,
        fontWeight: yes || unknown ? 700 : 400,
        lineHeight: 1.35,
      }}
    >
      {v}
    </div>
  );
};

const ItemRow = ({ item, a, b, c, d }: { item: string; a: string; b: string; c: string; d: string }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '500px 1fr 1fr 1fr 1fr',
      alignItems: 'center',
      padding: '9px 0',
      borderBottom: `1px solid ${line}`,
      fontSize: 26,
    }}
  >
    <div>{item}</div>
    <Mark v={a} />
    <Mark v={b} />
    <Mark v={c} />
    <Mark v={d} />
  </div>
);

const ItemHead = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '500px 1fr 1fr 1fr 1fr',
      padding: '18px 0 8px',
      borderBottom: '2px solid var(--osd-text)',
      fontSize: 21,
      color: muted,
      fontWeight: 600,
      textAlign: 'center',
      lineHeight: 1.35,
    }}
  >
    <div style={{ textAlign: 'left' }}>項目</div>
    <div>
      東華鑽石山
      <br />
      $35,830
    </div>
    <div>
      晶彩終轉站
      <br />
      $32,800
    </div>
    <div>
      鋒盛殯儀
      <br />
      $43,680
    </div>
    <div>
      寶福特惠
      <br />
      $50,000
    </div>
  </div>
);

const Legend = () => (
  <div style={{ fontSize: 22, color: muted, marginTop: 16 }}>
    <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>✓</span> 單張／文件列明已包　
    <span style={{ color: warn, fontWeight: 700 }}>？</span> 未列明，須向對方確認　
    <span style={{ color: no }}>不包</span> 文件內無此項
  </div>
);

const InclusionA: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>項目對照 一之一</Eyebrow>
    <Heading>場地、遺體及政府收費</Heading>
    <ItemHead />
    <ItemRow item="守夜靈寢室／禮堂" a="✓" b="✓" c="✓" d="✓" />
    <ItemRow item="由殮房接體入館" a="✓" b="？" c="✓" d="✓" />
    <ItemRow item="遺體冷凍保存" a="✓" b="？" c="？" d="✓" />
    <ItemRow item="潔體、穿衣、化妝" a="✓" b="✓" c="✓" d="✓" />
    <ItemRow item="大殮及出殯仵工" a="✓" b="？" c="✓" d="✓" />
    <ItemRow item="出殯靈車" a="✓" b="✓" c="✓" d="✓" />
    <ItemRow item="政府收費 死亡證 $140 + 火化費 $1,220" a="✓" b="？" c="✓" d="？" />
    <ItemRow item="旅遊巴／出殯車" a="不包" b="✓ 兩程" c="✓ 兩程" d="✓ 55座" />
    <Legend />
    <RefBlock>
      <Ref
        label="東華鑽石山各項"
        url="https://funeralservices.tungwahcsd.org/content/files/diamond-hill-funeral-parlour/DHFP%20funeral%20package%202025_1.pdf"
      />
      <Ref label="鋒盛各項" url="https://www.goodbye-funeral.com.hk/p6-funeral-parlor-39800.php" />
      <Ref
        label="寶福各項（晶彩各項出自用戶提供單張）"
        url="https://funeral.pofookhill.com/%e7%89%b9%e6%83%a0%e6%ae%af%e5%84%80%e5%a5%97%e9%a4%90-%e2%94%80-%e9%81%93%e6%95%99%e3%80%81%e4%bd%9b%e6%95%99/"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const InclusionB: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>項目對照 一之二</Eyebrow>
    <Heading>儀式、用品及後續</Heading>
    <ItemHead />
    <ItemRow item="佛教法事" a="✓ 尼姑四眾" b="✓ 和尚法師" c="✓ 五僧一居士" d="✕ 道教喃嘸" />
    <ItemRow item="棺木" a="✓ 杬型" b="✓ 火化棺" c="✓ 高級日箱" d="✓ 杬型西式" />
    <ItemRow item="壽衣" a="✓" b="✓ 連壽被" c="✓ 綾鍛" d="？" />
    <ItemRow item="紙扎全套及寶爐" a="✓" b="？" c="✓ 26件" d="✓ 22件" />
    <ItemRow item="骨灰盅" a="不包" b="✓ 白雲石" c="✓ A級白雲石" d="？" />
    <ItemRow item="孝服" a="不包" b="？" c="✓ 麻衣" d="✓ 旛帽孝杖" />
    <ItemRow item="吉儀封／纓紅利是" a="✓ 只吉儀" b="✓ 已入利是" c="✓ 已入利是" d="？" />
    <ItemRow item="免費骨灰暫存" a="不包" b="✓" c="不包" d="✓" />
    <Legend />
    <RefBlock>
      <Ref
        label="東華鑽石山佛教套裝內容（收費 9 項／免費 11 項）"
        url="https://funeralservices.tungwahcsd.org/content/files/diamond-hill-funeral-parlour/DHFP%20funeral%20package%202025_1.pdf"
      />
      <Ref
        label="鋒盛佛教套餐內容（42 項）"
        url="https://www.goodbye-funeral.com.hk/p6-funeral-parlor-39800.php"
      />
      <Ref
        label="寶福特惠套餐內容（31 項）· 紙扎燒爐費另加 $180"
        url="https://funeral.pofookhill.com/%e7%89%b9%e6%83%a0%e6%ae%af%e5%84%80%e5%a5%97%e9%a4%90-%e2%94%80-%e9%81%93%e6%95%99%e3%80%81%e4%bd%9b%e6%95%99/"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const CapacityRow = ({
  venue,
  capacity,
  transit,
}: {
  venue: string;
  capacity: string;
  transit: string;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 320px 1fr',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: `1px solid ${line}`,
      fontSize: 29,
    }}
  >
    <div>{venue}</div>
    <div style={{ textAlign: 'center', fontWeight: 700 }}>{capacity}</div>
    <div style={{ textAlign: 'right', color: muted, fontSize: 26 }}>{transit}</div>
  </div>
);

const Capacity: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>20–40 人 · 不想另訂巴士</Eyebrow>
    <Heading>場地容量與親友交通</Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 320px 1fr',
        padding: '22px 0 10px',
        borderBottom: '2px solid var(--osd-text)',
        fontSize: 23,
        color: muted,
        fontWeight: 600,
      }}
    >
      <div>場地</div>
      <div style={{ textAlign: 'center' }}>列明容量</div>
      <div style={{ textAlign: 'right' }}>親友前往</div>
    </div>
    <CapacityRow venue="東華 守夜靈寢室（三館）" capacity="20–40 人" transit="鑽石山站／紅磡站" />
    <CapacityRow venue="鋒盛安排之鑽石山房間" capacity="30–40 人" transit="鑽石山站，火葬場同區" />
    <CapacityRow venue="晶彩安排之鑽石山房間" capacity="約 20–30 人" transit="鑽石山站，40 人或不足" />
    <CapacityRow venue="寶福紀念館 E 級禮堂" capacity="未列明" transit="大圍，親友車程最長" />
    <p style={{ fontSize: 29, lineHeight: 1.6, marginTop: 28, maxWidth: 1620 }}>
      鑽石山殯儀館與鑽石山火葬場同在蒲崗村道一帶，出殯至火化路程最短，最能減少對旅遊巴的依賴；
      鑽石山站為觀塘綫與屯馬綫交匯。東華文件明確寫明靈寢室可容納 20–40 人。
    </p>
    <RefBlock>
      <Ref
        label="靈寢室 20–40 人、三館地址電話"
        url="https://funeralservices.tungwahcsd.org/content/files/CSSA%20Package/%E6%9D%B1%E8%8F%AF%E4%B8%89%E9%99%A2CSSA_2026.pdf"
      />
      <Ref
        label="鋒盛 30–40 人房間"
        url="https://www.goodbye-funeral.com.hk/p6-funeral-parlor-39800.php"
      />
      <Ref label="晶彩約 20–30 人" url="用戶提供單張（Glorify Station）" />
    </RefBlock>
    <PageNo />
  </div>
);

const Transfer: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>由基督教聯合醫院殮房接送</Eyebrow>
    <Heading>接體入館是否已包？</Heading>
    <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.6 }}>
      <div style={{ padding: '14px 0', borderBottom: `1px solid ${line}` }}>
        東華三院　—　「接送遺體回館」列為東華免費供應，已包
      </div>
      <div style={{ padding: '14px 0', borderBottom: `1px solid ${line}` }}>
        鋒盛殯儀　—　「靈車接體入館」及「專業仵工師傅接體入館」，已包
      </div>
      <div style={{ padding: '14px 0', borderBottom: `1px solid ${line}` }}>
        寶福紀念館　—　「奉體入館仵工費」，已包
      </div>
      <div style={{ padding: '14px 0', borderBottom: `1px solid ${line}` }}>
        仁智 laGreen　—　「尊體接送（入館）」，已包
      </div>
      <div style={{ padding: '14px 0', borderBottom: `1px solid ${line}`, color: warn }}>
        晶彩終轉站　—　單張只見「出殯靈車」，未見接體入館，須落單前問清楚
      </div>
    </div>
    <p style={{ fontSize: 28, lineHeight: 1.6, marginTop: 26, color: muted }}>
      醫院／公眾殮房免費存放期為 28 天。
    </p>
    <RefBlock>
      <Ref
        label="東華各套裝免費項目"
        url="https://funeralservices.tungwahcsd.org/content/files/diamond-hill-funeral-parlour/DHFP%20funeral%20package%202025_1.pdf"
      />
      <Ref
        label="殮房 28 天免費存放期"
        url="https://www.paradise.com.hk/post/funeral-subsidy-application-guide-hong-kong"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const GrantProcess: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>申請津貼</Eyebrow>
    <Heading>資格、文件與限期</Heading>
    <div style={{ display: 'flex', gap: 56, marginTop: 34 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 27, color: 'var(--osd-accent)', fontWeight: 700, marginBottom: 16 }}>
          資格
        </div>
        <ul style={{ fontSize: 28, lineHeight: 1.65, margin: 0, paddingLeft: 32 }}>
          <li>先人或申請人為綜援受助人</li>
          <li>低收入家庭經醫務社工或仁濟、博愛、聖雅各轉介</li>
          <li>只領生果金或全額傷殘者不合資格</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 27, color: 'var(--osd-accent)', fontWeight: 700, marginBottom: 16 }}>
          所需文件
        </div>
        <ul style={{ fontSize: 28, lineHeight: 1.65, margin: 0, paddingLeft: 32 }}>
          <li>先人及申請人身份證副本</li>
          <li>死亡登記證明書（行街紙）</li>
          <li>火葬許可證</li>
          <li>蓋持牌殮葬商印章之報價單及收據</li>
          <li>訂金及尾數收據</li>
        </ul>
      </div>
    </div>
    <p style={{ fontSize: 29, lineHeight: 1.6, marginTop: 32, maxWidth: 1620 }}>
      限期為離世後六個月內。實報實銷，須先墊支。若遺產凍結，可憑報價單向民政事務總署申請
      《遺產條例專用授權書》，直接從先人戶口支取。社署熱線 2343 2255。
    </p>
    <RefBlock>
      <Ref
        label="資格、文件、六個月限期、遺產授權書"
        url="https://www.paradise.com.hk/post/funeral-subsidy-application-guide-hong-kong"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const Unverified: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>誠實說明</Eyebrow>
    <Heading>未能核實的項目</Heading>
    <div style={{ marginTop: 26, fontSize: 29, lineHeight: 1.55 }}>
      <div style={{ padding: '15px 0', borderBottom: `1px solid ${line}` }}>
        <b>東華殯儀館場地租金</b>　—　東華只公開寰宇館供持牌殮葬商租用的收費表，
        萬國及鑽石山無公開租金表。套裝已含靈寢室，如需大禮堂須向館方報價。
      </div>
      <div style={{ padding: '15px 0', borderBottom: `1px solid ${line}` }}>
        <b>寶福 $50,000</b>　—　該頁刊登日期為 2018 年 10 月 10 日，並註明「價格只供參考」，
        現價須向館方確認。
      </div>
      <div style={{ padding: '15px 0', borderBottom: `1px solid ${line}` }}>
        <b>仁智及晶彩</b>　—　金額出自你提供的紙本單張，無對應公開網頁可核對。
      </div>
      <div style={{ padding: '15px 0', borderBottom: `1px solid ${line}` }}>
        <b>骨灰龕位</b>　—　東華 2026 綜援套裝將「食環署或華人永遠墳場骨灰位」列為政府收費項目，
        其餘套裝一律不包，輪候時間及費用另計。
      </div>
    </div>
    <RefBlock>
      <Ref
        label="寰宇靈寢室、禮堂及殮房收費表（2025-11）／各館套裝"
        url="https://funeralservices.tungwahcsd.org/packages?_lang=zh-TW"
      />
      <Ref
        label="寶福特惠套餐頁（2018-10-10 刊登）"
        url="https://funeral.pofookhill.com/%e7%89%b9%e6%83%a0%e6%ae%af%e5%84%80%e5%a5%97%e9%a4%90-%e2%94%80-%e9%81%93%e6%95%99%e3%80%81%e4%bd%9b%e6%95%99/"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const AskList: Page = () => (
  <div style={{ ...page, position: 'relative' }}>
    <Eyebrow>落單前 · 每一間都問同樣問題</Eyebrow>
    <Heading>報價前必問</Heading>
    <ol style={{ fontSize: 32, lineHeight: 1.7, marginTop: 32, paddingLeft: 42 }}>
      <li>由基督教聯合醫院殮房接體入館，是否已包？</li>
      <li>場地是靈寢室還是禮堂？實際容納多少人？租金已包還是另計？</li>
      <li>死亡證 $140 及火化費 $1,220 已包還是另計？</li>
      <li>遺體冷凍保存至出殯日，是否已包？</li>
      <li>骨灰盅、孝服、紙扎、化寶爐租，哪些要另加？</li>
      <li>可否提供蓋持牌殮葬商印章、分項列明的報價單？</li>
    </ol>
    <p style={{ fontSize: 27, color: muted, marginTop: 26, maxWidth: 1620, lineHeight: 1.55 }}>
      第 6 項是津貼審批的硬性要求：報價單須分列「服務費」與「政府規費」。
    </p>
    <RefBlock>
      <Ref
        label="報價單須蓋章及分項列明"
        url="https://www.paradise.com.hk/post/funeral-subsidy-application-guide-hong-kong"
      />
      <Ref
        label="政府收費 死亡證 $140 · 火／土葬費 $1,220"
        url="https://www.goodbye-funeral.com.hk/p6-funeral-parlor-39800.php"
      />
    </RefBlock>
    <PageNo />
  </div>
);

const SourceLine = ({ label, url }: { label: string; url: string }) => (
  <div style={{ padding: '11px 0', borderBottom: `1px solid ${line}` }}>
    <div style={{ fontSize: 24, fontWeight: 600 }}>{label}</div>
    <div
      style={{
        fontSize: 18,
        fontFamily: mono,
        color: 'var(--osd-accent)',
        wordBreak: 'break-all',
      }}
    >
      {url}
    </div>
  </div>
);

const Sources: Page = () => (
  <div style={{ ...page, padding: '70px 100px 60px', position: 'relative' }}>
    <Eyebrow>附錄</Eyebrow>
    <Heading>資料來源一覽</Heading>
    <div style={{ marginTop: 18 }}>
      <SourceLine
        label="東華三院 服務套裝收費（總頁）"
        url="https://funeralservices.tungwahcsd.org/packages?_lang=zh-TW"
      />
      <SourceLine
        label="東華 鑽石山殯儀館 套裝 PDF — 佛教 $35,830"
        url="https://funeralservices.tungwahcsd.org/content/files/diamond-hill-funeral-parlour/DHFP%20funeral%20package%202025_1.pdf"
      />
      <SourceLine
        label="東華 萬國殯儀館 套裝 PDF — 佛教 $38,820"
        url="https://funeralservices.tungwahcsd.org/content/files/international-funeral-parlour/IFP%20funeral%20package%202025_10OCT.pdf"
      />
      <SourceLine
        label="東華 寰宇殯儀館 套裝 PDF — 佛教 $38,820"
        url="https://funeralservices.tungwahcsd.org/content/files/global-funeral-parlour/GFP%20funeral%20package%202025_2.pdf"
      />
      <SourceLine
        label="東華 綜援殮葬津貼套裝 PDF — $17,870，生效 2026-04-01"
        url="https://funeralservices.tungwahcsd.org/content/files/CSSA%20Package/%E6%9D%B1%E8%8F%AF%E4%B8%89%E9%99%A2CSSA_2026.pdf"
      />
      <SourceLine
        label="鋒盛殯儀 佛教套餐 — $43,680"
        url="https://www.goodbye-funeral.com.hk/p6-funeral-parlor-39800.php"
      />
      <SourceLine
        label="大圍寶福紀念館 特惠道教／佛教套餐 — $50,000"
        url="https://funeral.pofookhill.com/%e7%89%b9%e6%83%a0%e6%ae%af%e5%84%80%e5%a5%97%e9%a4%90-%e2%94%80-%e9%81%93%e6%95%99%e3%80%81%e4%bd%9b%e6%95%99/"
      />
      <SourceLine
        label="恩福殯儀 綜援殮葬津貼申請指南 — 資格、文件、流程"
        url="https://www.paradise.com.hk/post/funeral-subsidy-application-guide-hong-kong"
      />
      <SourceLine
        label="晶彩終轉站 佛教 $32,800 · 仁智 laGreen 尊榮告別 $29,800"
        url="用戶提供之紙本單張（仁智單張編號 202508）· 無公開網頁可核對"
      />
    </div>
    <PageNo />
  </div>
);

export const meta: SlideMeta = {
  title: '佛教喪禮服務商比較',
  createdAt: '2026-08-28T12:08:16.913Z',
};

export default [
  Cover,
  GrantAmount,
  TungWahBuddhist,
  OtherOperators,
  NetCost,
  InclusionA,
  InclusionB,
  Capacity,
  Transfer,
  GrantProcess,
  Unverified,
  AskList,
  Sources,
] satisfies Page[];
