// API configuration that works for both local and production environments
export const getApiUrl = () => {
  const configuredUrl = process.env.NEXT_PUBLIC_API_URL;

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return 'http://localhost:8000';
  }

  return '';
};

export const API_URL = getApiUrl();
