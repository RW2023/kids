// src/utils/getBaseUrl.js
function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://the-chore-tracker.vercel.app/';
  }
  return 'http://localhost:3000'; 
}

export default getBaseUrl;
