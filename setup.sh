#!/bin/bash

# 初期セットアップスクリプト
# Fe-Be Monorepo Setup Script

set -e

echo "🚀 プロジェクトの初期セットアップを開始します..."

# プロジェクトルートへ移動
cd "$(dirname "$0")"

echo "📁 現在のディレクトリ: $(pwd)"

# バックエンドの環境ファイルをチェック
if [ ! -f "backend/.env" ]; then
    echo "📝 backend/.env ファイルをコピーしています..."
    cp backend/.env.example backend/.env
    echo "⚠️  backend/.env を編集してOPENAI_API_KEYを設定してください"
else
    echo "✅ backend/.env ファイルが既に存在します"
fi

# バックエンドの依存関係をインストール
echo "📦 バックエンドの依存関係をインストールしています..."
cd backend
if command -v uv &> /dev/null; then
    echo "   uv を使用してPython依存関係をインストール中..."
    uv sync
else
    echo "❌ uv が見つかりません。uvをインストールしてください："
    echo "   curl -LsSf https://astral.sh/uv/install.sh | sh"
    exit 1
fi
cd ..

# フロントエンドの依存関係をインストール
echo "📦 フロントエンドの依存関係をインストールしています..."
cd frontend
if command -v npm &> /dev/null; then
    echo "   npm を使用してNode.js依存関係をインストール中..."
    npm install
else
    echo "❌ npm が見つかりません。Node.jsをインストールしてください"
    exit 1
fi
cd ..

echo ""
echo "✅ セットアップが完了しました！"
echo ""
echo "📋 次のステップ："
echo "1. backend/.env ファイルを編集してOPENAI_API_KEYを設定"
echo "2. 開発サーバーを起動："
echo "   ./start.sh"
echo ""
echo "🔧 個別に起動する場合："
echo "   バックエンド: cd backend && uv run uvicorn app.main:app --reload"
echo "   フロントエンド: cd frontend && npm run dev"
echo ""
echo "🌐 アクセス先："
echo "   フロントエンド: http://localhost:3000"
echo "   バックエンド: http://localhost:8000"
echo "   API文書: http://localhost:8000/docs"