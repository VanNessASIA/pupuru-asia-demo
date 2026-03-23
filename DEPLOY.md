# Cloudflare Pages デプロイ手順

## 静的サイトとして即デプロイ可能

このサイトは完全静的 (HTML + CSS + JS) のため、Cloudflare Pagesに直接デプロイできます。

---

## デプロイ手順

### Option A: Cloudflare Pages Dashboard (推奨・最速)

1. [Cloudflare Pages](https://pages.cloudflare.com/) にログイン
2. **Create a project** → **Upload assets** を選択
3. このフォルダ (`pupuru-redesign/`) 全体をドラッグ&ドロップ
4. プロジェクト名を設定（例: `pupuru-asia`）
5. デプロイ → `https://pupuru-asia.pages.dev` で即時公開

### Option B: GitHub連携 (CI/CD)

1. このフォルダをGitHubリポジトリにpush
2. Cloudflare Pages → **Connect to Git** → リポジトリ選択
3. Build設定:
   - **Framework preset**: None
   - **Build command**: (空白)
   - **Build output directory**: `/` (ルート)
4. Saveでデプロイ開始

---

## カスタムドメイン設定

1. Cloudflare Pages → プロジェクト → **Custom domains**
2. `pupuruasia.com` (または任意のドメイン) を追加
3. Cloudflare DNS管理の場合は自動設定される

---

## 画像アセットのワイヤリング

画像ファイルが `/pupuru-assets/` フォルダに追加されたら：

| ファイル名 | 使用箇所 | 推奨サイズ |
|---|---|---|
| `hero-bg.jpg` | ヒーローセクション背景 | 1920×1080px以上 |
| `case-mfg.jpg` | 導入事例①（製造業） | 600×400px |
| `case-retail.jpg` | 導入事例②（小売） | 600×400px |
| `case-corp.jpg` | 導入事例③（商社） | 600×400px |
| `asia-map.png` | 会社概要 カバレッジマップ | SVG推奨 |

**ヒーロー背景の適用:**
```css
/* styles.css の .hero__bg に追加 */
.hero__bg {
  background-image: url('../pupuru-assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

**事例カード画像の適用:**
```css
.case-card__img--mfg {
  background-image: url('../pupuru-assets/case-mfg.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## 多言語展開ロードマップ

| 言語 | ステータス | ファイル場所 |
|---|---|---|
| 🇯🇵 日本語 | ✅ 公開中 | `/index.html` |
| 🇬🇧 English | 🔄 準備中 | `/en/index.html` (予定) |
| 🇹🇭 ภาษาไทย | 📅 近日公開 | `/th/index.html` (予定) |

多言語ページ追加後、`_redirects` ファイルのコメントアウトを解除すること。

---

## フォーム送信設定

現状はフロントエンドのみ。本番では以下を接続：
- **Formspree** (手軽): `<form action="https://formspree.io/f/YOUR_ID">`
- **Cloudflare Workers** (高度なカスタマイズ)
