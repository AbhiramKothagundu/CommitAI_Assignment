export const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('authenticated', 'true');
      return true;
    }
    return false;
  };
  
  export const isAuthenticated = (): boolean => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authenticated') === 'true';
    }
    return false;
  };