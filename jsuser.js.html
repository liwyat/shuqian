// 用户页面逻辑
document.addEventListener('DOMContentLoaded', function() {
  // 验证登录状态
  const user = loadUserFromStorage();
  if (!user || user.role !== 'user') {
    window.location.href = AppConfig.routes.login;
    return;
  }
  
  // 显示用户名
  document.getElementById('user-display-name').textContent = user.name || user.username;
  
  // 用户菜单切换
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');
  
  userMenuButton.addEventListener('click', function() {
    userMenu.classList.toggle('hidden');
  });
  
  // 点击其他区域关闭菜单
  document.addEventListener('click', function(e) {
    if (!userMenuButton.contains(e.target) && !userMenu.contains(e.target)) {
      userMenu.classList.add('hidden');
    }
  });
  
  // 退出登录
  document.getElementById('logout-user').addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('确定要退出登录吗？')) {
      logout();
    }
  });
  
  // 书签点击事件
  const bookmarkItems = document.querySelectorAll('.bookmark-item');
  const browserFrame = document.getElementById('browser-frame');
  const browserUrl = document.getElementById('browser-url');
  const frameLoading = document.getElementById('frame-loading');
  
  bookmarkItems.forEach(item => {
    item.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        // 显示加载状态
        frameLoading.classList.remove('hidden');
        browserUrl.value = url;
        
        // 加载URL
        browserFrame.src = url;
        
        // 监听加载完成
        browserFrame.onload = function() {
          frameLoading.classList.add('hidden');
        };
      }
    });
  });
  
  // 浏览器控制按钮
  document.getElementById('back-btn').addEventListener('click', function() {
    if (browserFrame.contentWindow.history.length > 0) {
      browserFrame.contentWindow.history.back();
    }
  });
  
  document.getElementById('forward-btn').addEventListener('click', function() {
    browserFrame.contentWindow.history.forward();
  });
  
  document.getElementById('refresh-browser-btn').addEventListener('click', function() {
    frameLoading.classList.remove('hidden');
    browserFrame.reload();
  });
  
  document.getElementById('refresh-btn').addEventListener('click', function() {
    frameLoading.classList.remove('hidden');
    browserFrame.reload();
  });
});