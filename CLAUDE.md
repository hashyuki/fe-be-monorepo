# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo containing an AI chat application with a Next.js frontend and FastAPI backend. The frontend uses shadcn/ui components with TailwindCSS v4, while the backend implements an AI agent using LangGraph and OpenAI GPT-4o-mini.

## Development Commands

### Environment Setup
```bash
# Set up backend environment
cp backend/.env.example backend/.env
# Edit backend/.env to add OPENAI_API_KEY

# Install dependencies
cd backend && uv sync
cd frontend && npm install
```

### Running the Application
```bash
# Start both frontend and backend (recommended)
./start.sh

# Individual services
cd backend && uv run uvicorn app.main:app --reload    # Backend on :8000
cd frontend && npm run dev                            # Frontend on :3000
```

### Frontend Development
```bash
cd frontend
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint checking
npm run pages:build  # Cloudflare Pages build
```

### Backend Development
```bash
cd backend
uv run uvicorn app.main:app --reload  # Development server with hot reload
uv sync                               # Sync dependencies
```

## Architecture Overview

### Frontend Structure
- **App Router**: Uses Next.js 15 App Router with TypeScript
- **Feature-based Architecture**: `/src/features/home/` contains chat functionality
- **Component Organization**: 
  - `/src/components/ui/` - shadcn/ui components
  - `/src/features/home/components/` - feature-specific components
  - `/src/features/home/context/` - React Context for state management
- **Routing**: Root (`/`) redirects to `/home` via middleware

### Frontend State Management
Uses React Context API with the following pattern:
- `ChatProvider` wraps the entire chat feature
- `useChatContext` hook provides access to chat state and methods
- State includes: messages, input, loading states, and refs for scroll management

### TailwindCSS v4 Configuration
- Uses `@import "tailwindcss"` in globals.css
- Color system defined with `@theme` directive
- No tailwind.config.ts file (v4 feature)
- CSS variables for theme colors with automatic dark mode

### Backend Architecture
- **FastAPI**: RESTful API with automatic OpenAPI docs at `/docs`
- **LangGraph Agent**: Implements stateful conversation flow with tool calling
- **Tool System**: Extensible tool architecture (currently has date retrieval tool)
- **Environment**: Uses python-dotenv for configuration

### LangGraph Implementation
The AI agent follows this workflow:
```python
StateGraph(MessagesState) → agent node → conditional edge → tools node → back to agent
```
Key components:
- `get_current_date()` tool provides Japanese-formatted date
- `ChatOpenAI` with GPT-4o-mini model
- Conversation state maintained through MessagesState

### API Communication
- Frontend calls `POST /api/chat` with message payload
- Backend returns structured JSON response
- CORS configured for localhost:3000 access

## Key Configuration Files

### Frontend
- `components.json`: shadcn/ui configuration (New York style, neutral colors)
- `postcss.config.mjs`: TailwindCSS v4 PostCSS plugin
- `middleware.ts`: Handles root → /home redirects
- `next.config.ts`: Next.js configuration with Cloudflare compatibility

### Backend
- `pyproject.toml`: Python dependencies managed by uv
- `.env`: OpenAI API key and other environment variables
- `app/agent.py`: LangGraph agent implementation
- `app/main.py`: FastAPI application with CORS and endpoints

## Important Implementation Details

### shadcn/ui Integration
- Uses "new-york" style with neutral base colors
- Components auto-import from `@/components/ui/`
- CSS variables system for consistent theming
- Add new components with: `npx shadcn@latest add [component]`

### Context Pattern Usage
When adding new features requiring state management, follow the established pattern:
1. Create context in `/src/features/[feature]/context/`
2. Export Provider and custom hook
3. Wrap feature components with Provider
4. Use custom hook in child components

### Tool Extension
To add new tools to the AI agent:
1. Define tool function with `@tool` decorator in `app/agent.py`
2. Add to `tools` list in `create_agent()`
3. Tool functions automatically become available to the LLM

### Environment Variables
Backend requires `OPENAI_API_KEY` in `.env` file. The application will fail to start without this configuration.