# elo-rocket

An open source chess platform that allows you to play games, analyze positions and grow your elo using @stockfish v17

## Project Structure

This repository contains two main projects:

### Server

A Node.js backend server built with TypeScript and Express framework.

**Location:** `./server`

**Scripts:**
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled server
- `npm run dev` - Watch mode for development

### Client

A React.js frontend application built with TypeScript and Vite.

**Location:** `./client`

**Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
3. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

### Running the Application

**Server:**
```bash
cd server
npm run build
npm run start
```

**Client:**
```bash
cd client
npm run dev
```

