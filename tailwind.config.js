// tailwind.config.js
module.exports = {
    content: [
      // ...
    ],
    theme: {
      extend: {
        dropShadow: {
          'neon': '0 0 8px rgba(168, 85, 247, 0.5)',
        },
        animation: {
          pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }
      }
    },
    plugins: [],
  }