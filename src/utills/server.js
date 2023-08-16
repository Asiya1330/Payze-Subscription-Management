export const APP_ENV = {
  domain: process.env.NEXT_PUBLIC_API_URL,
};

export const TABLES = {
  subscriptions: "subscriptions",
  packages: "packages",
  notifications: "notifications",
};

export const CRUD = {
  getAll: "list",
};

export const APIS = {
  checkSubs: "subscriptions/check-subs",
  markRead: `${TABLES.notifications}/mark-read`,
  getAllSubs: () => `http://localhost:50000/subscriptions/list`,
  getAllNoti: () => `http://localhost:50000/notifications/list`,
  getAllPack: () => `http://localhost:50000/packages/list`,
  createPack: () => ``,
};
