#!/bin/bash

# 色付きの出力のための関数
print_status() {
    echo -e "\033[1;34m[INFO]\033[0m $1"
}

print_error() {
    echo -e "\033[1;31m[ERROR]\033[0m $1"
}

print_success() {
    echo -e "\033[1;32m[SUCCESS]\033[0m $1"
}

# プロセスを停止する関数
cleanup() {
    print_status "アプリケーションを停止しています..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    print_success "アプリケーションが停止しました"
    exit 0
}

# Ctrl+Cで終了時にクリーンアップ
trap cleanup SIGINT SIGTERM

# バックエンドの環境変数確認
if [ ! -f "backend/.env" ]; then
    print_error "backend/.envファイルが見つかりません"
    print_status ".env.exampleをコピーしてOPENAI_API_KEYを設定してください:"
    echo "  cp backend/.env.example backend/.env"
    exit 1
fi

# バックエンドの起動
print_status "バックエンドを起動しています..."
cd backend
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
cd ..

# バックエンドの起動を待つ
sleep 3

# バックエンドのヘルスチェック
if curl -s http://localhost:8000/api/health >/dev/null; then
    print_success "バックエンドが起動しました (http://localhost:8000)"
else
    print_error "バックエンドの起動に失敗しました"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# フロントエンドの起動
print_status "フロントエンドを起動しています..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# フロントエンドの起動を待つ
sleep 5

print_success "アプリケーションが起動しました"
print_status "フロントエンド: http://localhost:3000"
print_status "バックエンドAPI: http://localhost:8000"
print_status "終了するには Ctrl+C を押してください"

# プロセスを待つ
wait $BACKEND_PID $FRONTEND_PID