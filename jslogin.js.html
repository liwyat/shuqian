// 登录页面逻辑
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否已登录
  const user = loadUserFromStorage();
  if (user) {
    // 根据用户角色跳转
    if (user.role === 'admin') {
      window.location.href = AppConfig.routes.admin;
    } else {
      window.location.href = AppConfig.routes.user;
    }
  }

  // 密码显示/隐藏切换
  const togglePassword = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  
  togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // 切换图标
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
  });

  // 登录表单提交
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.querySelector('input[name="userType"]:checked').value;
    
    // 验证用户 (实际环境中应通过API调用后端验证)
    let validUser = null;
    
    if (userType === 'admin') {
      if (username === AppConfig.adminUser.username && password === AppConfig.adminUser.password) {
        validUser = AppConfig.adminUser;
      }
    } else {
      // 这里可以添加普通用户验证逻辑
      if (username === AppConfig.sampleUser.username && password === AppConfig.sampleUser.password) {
        validUser = AppConfig.sampleUser;
      }
    }
    
    if (validUser) {
      // 保存用户信息并跳转
      saveUserToStorage(validUser);
      
      if (validUser.role === 'admin') {
        window.location.href = AppConfig.routes.admin;
      } else {
        window.location.href = AppConfig.routes.user;
      }
    } else {
      alert('用户名或密码错误');
    }
  });
});