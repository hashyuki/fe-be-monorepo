# Frontend-Backend Monorepo

シンプルなAIチャットアプリケーション。フロントエンドはNext.js + shadcn/ui、バックエンドはFastAPI + LangGraphで構築されています。

## 機能

- AIとのリアルタイムチャット
- 今日の日付を取得するツール機能
- レスポンシブなチャットUI

## セットアップ

### 1. 環境変数の設定

```bash
cp backend/.env.example backend/.env
```

`.env`ファイルを編集してOpenAI APIキーを設定:
```
OPENAI_API_KEY=your-openai-api-key-here
```

### 2. 依存関係のインストール

バックエンド:
```bash
cd backend
uv sync
```

フロントエンド:
```bash
cd frontend
npm install
```

## 起動方法

### 一括起動（推奨）

プロジェクトルートで以下のコマンドを実行:

```bash
./start.sh
```

これにより、フロントエンドとバックエンドが同時に起動します。

- フロントエンド: http://localhost:3000
- バックエンドAPI: http://localhost:8000

終了するには `Ctrl+C` を押してください。

### 個別起動

バックエンド:
```bash
cd backend
uv run uvicorn app.main:app --reload
```

フロントエンド:
```bash
cd frontend
npm run dev
```

## 使い方

1. ブラウザで http://localhost:3000 にアクセス
2. チャット入力欄にメッセージを入力
3. 「今日は何日？」などと聞いてみてください

## 技術スタック

- **フロントエンド**: Next.js, React, TypeScript, shadcn/ui, Tailwind CSS
- **バックエンド**: FastAPI, LangGraph, LangChain, OpenAI GPT-4o-mini
- **モノレポ構成**: frontend/とbackend/ディレクトリで分離