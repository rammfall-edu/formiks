const HOST = 'http://localhost:3001';

const request = async (path, method = 'GET', body = null) => {
  const userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo);
  const data = await fetch(`${HOST}${path}`, {
    method,
    body,
    headers: {
      authorization: userInfo?.token,
    },
  });
  const json = await data.json();

  if (!data.ok) {
    const error = new Error();

    error.name = json.name;
    error.message = json.info;

    throw error;
  }

  return json;
};

export const registerUser = async (body) => {
  return await request('/register', 'POST', body);
};

export const loginUser = async (body) => {
  return await request('/login', 'POST', body);
};

export const getProfile = async () => {
  return await request('/profile');
};

export const createProfile = async (body) => {
  return await request('/profile', 'POST', body);
};

export const updateProfile = async (body) => {
  return await request('/profile', 'PUT', body);
};

export const updatePassword = async (body) => {
  return await request('/account/password', 'PUT', body);
};

export const updateEmail = async (body) => {
  return await request('/account/email', 'PUT', body);
};

export const createFormsRequest = async (body) => {
  return await request('/form', 'POST', body);
};

export const getFormsRequest = async () => {
  return await request('/form');
};
