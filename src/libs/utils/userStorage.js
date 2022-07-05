export const USER_STORAGE_KEY = 'user';

const isUserPresence = (user) => user == null;

const userStorage = {
  get() {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    try {
      if (isUserPresence(user)) return null;
      const parsedUser = JSON.parse(user);
      return parsedUser;
    } catch (error) {
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  },

  set(user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  },

  remove() {
    localStorage.removeItem(USER_STORAGE_KEY);
  },
};

export default userStorage;
