// 系统配置和常量定义
const AppConfig = {
  // 默认管理员账号 (实际环境中应存储在后端并加密)
  adminUser: {
    username: 'admin',
    password: 'Admin@123', // 建议首次登录后修改
    role: 'admin',
    name: '系统管理员',
    email: 'admin@example.com'
  },
  
  // 示例普通用户
  sampleUser: {
    username: 'user',
    password: 'User@123',
    role: 'user',
    name: '普通用户'
  },
  
  // 页面路由
  routes: {
    login: 'index.html',
    user: 'user.html',
    admin: 'admin.html'
  },
  
  // 系统常量
  constants: {
    STORAGE_KEY: 'bookmark_system_auth'
  }
};

// 存储当前登录用户信息
let currentUser = null;

// 从本地存储加载用户信息
function loadUserFromStorage() {
  const stored = localStorage.getItem(AppConfig.constants.STORAGE_KEY);
  if (stored) {
    try {
      currentUser = JSON.parse(stored);
      return currentUser;
    } catch (e) {
      console.error('Failed to parse user data', e);
      logout();
      return null;
    }
  }
  return null;
}

// 保存用户信息到本地存储
function saveUserToStorage(user) {
  localStorage.setItem(AppConfig.constants.STORAGE_KEY, JSON.stringify(user));
  currentUser = user;
}

// 清除用户信息
function logout() {
  localStorage.removeItem(AppConfig.constants.STORAGE_KEY);
  currentUser = null;
  window.location.href = AppConfig.routes.login;
}