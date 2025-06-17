# AI Chat Application Monorepo

🤖 **シンプルで拡張性の高いAIチャットアプリケーション**

フロントエンドはNext.js + shadcn/ui、バックエンドはFastAPI + LangGraphで構築された、モダンなAIチャットシステムです。

## ✨ 機能

- 🎯 **AIとのリアルタイムチャット**: GPT-4o-miniを使用した高品質な対話
- 📅 **ツール機能**: 今日の日付取得などの拡張可能なツールシステム
- 📱 **レスポンシブUI**: モバイルからデスクトップまで対応
- 🎨 **モダンなデザイン**: shadcn/ui + TailwindCSS v4によるクリーンなUI
- ⚡ **高速開発**: モノレポ構成による効率的な開発環境
- 🚀 **デプロイ対応**: Cloudflare Workersにデプロイ可能

## 🚀 クイックスタート

### 1. 初期セットアップ（自動化）

```bash
./setup.sh
```

このスクリプトが以下を自動実行します：
- 環境ファイルのコピー（`.env.example` → `.env`）
- バックエンドの依存関係インストール（`uv sync`）
- フロントエンドの依存関係インストール（`npm install`）

### 2. 環境変数の設定

`backend/.env`を編集してOpenAI APIキーを設定：
```bash
OPENAI_API_KEY=your-openai-api-key-here
```

### 3. アプリケーション起動

```bash
./start.sh
```

📍 **アクセス先**
- 🌐 **フロントエンド**: [http://localhost:3000](http://localhost:3000)
- 🔌 **バックエンドAPI**: [http://localhost:8000](http://localhost:8000)
- 📚 **API文書**: [http://localhost:8000/docs](http://localhost:8000/docs)

## 📋 手動セットアップ（オプション）

<details>
<summary>個別にセットアップする場合はこちら</summary>

### 環境変数の設定
```bash
cp backend/.env.example backend/.env
# backend/.env を編集してOPENAI_API_KEYを設定
```

### 依存関係のインストール
```bash
# バックエンド
cd backend && uv sync

# フロントエンド  
cd frontend && npm install
```

### 個別起動
```bash
# バックエンド
cd backend && uv run uvicorn app.main:app --reload

# フロントエンド（別ターミナル）
cd frontend && npm run dev
```

</details>

## 🎮 使用方法

1. 🌐 ブラウザで [http://localhost:3000](http://localhost:3000) にアクセス
2. 💬 チャット入力欄にメッセージを入力
3. 🤖 AIとの対話を楽しむ

**サンプル質問**:
- 「今日は何日？」
- 「プログラミングについて教えて」
- 「今日の天気はどう？」

## 🛠 技術スタック

### フロントエンド
- **⚛️ Next.js 15** - App Router & Server Components
- **🔷 TypeScript** - 型安全性
- **🎨 shadcn/ui** - モダンUIコンポーネント
- **💅 TailwindCSS v4** - ユーティリティファーストCSS
- **🎯 React Context** - 状態管理

### バックエンド
- **🚀 FastAPI** - 高性能WebAPI
- **🤖 LangGraph** - AIエージェントワークフロー
- **🔗 LangChain** - LLM統合フレームワーク
- **🧠 OpenAI GPT-4o-mini** - 言語モデル
- **🐍 Python 3.12+** - メイン言語

### インフラ & ツール
- **📦 uv** - 高速Pythonパッケージマネージャー
- **🌍 Cloudflare Workers** - エッジデプロイ
- **🔧 Wrangler** - デプロイツール

## 📁 プロジェクト構造

```
fe-be-monorepo/
├── 📄 README.md          # このファイル
├── 🚀 setup.sh           # 初期セットアップスクリプト
├── ▶️ start.sh            # 開発サーバー起動スクリプト
├── 🔧 CLAUDE.md          # Claude Code向け設定
├── frontend/             # Next.jsフロントエンド
│   ├── src/
│   │   ├── app/          # App Router
│   │   ├── components/   # UIコンポーネント
│   │   └── features/     # 機能別コンポーネント
│   ├── package.json
│   └── tailwind.config.js
├── backend/              # FastAPIバックエンド
│   ├── app/
│   │   ├── main.py       # FastAPIアプリケーション
│   │   └── agent.py      # LangGraphエージェント
│   ├── pyproject.toml
│   └── .env.example
└── backend-minimal/      # Cloudflare Workers用
    ├── wrangler.toml
    └── src/worker.py
```

## 🌐 デプロイ

### Cloudflare Workers（バックエンド）

実験的Python環境にデプロイ済み:
- **URL**: https://backend-fastapi.hash-yuki63.workers.dev
- **制限**: 外部ライブラリ未対応（標準ライブラリのみ）

### Cloudflare Pages（フロントエンド）

```bash
cd frontend
npm run pages:build  # Cloudflare Pages用ビルド
```

## 🔧 開発者向け

### 新機能の追加

1. **新しいツールの追加**: `backend/app/agent.py`の`tools`配列に追加
2. **UIコンポーネント**: `frontend/src/components/ui/`に追加
3. **機能別コンポーネント**: `frontend/src/features/`に追加

### コードフォーマット

```bash
# フロントエンド
cd frontend && npm run lint

# バックエンド（例）
cd backend && ruff check .
```

## 📝 ライセンス

MIT License

## 🤝 コントリビューション

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**🚀 Happy Coding!** このプロジェクトがAI開発の学習に役立てば幸いです。