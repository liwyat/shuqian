// 管理员页面逻辑
document.addEventListener('DOMContentLoaded', function() {
  // 验证登录状态
  const user = loadUserFromStorage();
  if (!user || user.role !== 'admin') {
    window.location.href = AppConfig.routes.login;
    return;
  }
  
  // 显示管理员名称
  document.getElementById('admin-display-name').textContent = user.name || user.username;
  
  // 管理员菜单切换
  const adminMenuButton = document.getElementById('admin-menu-button');
  const adminMenu = document.getElementById('admin-menu');
  
  adminMenuButton.addEventListener('click', function() {
    adminMenu.classList.toggle('hidden');
  });
  
  // 点击其他区域关闭菜单
  document.addEventListener('click', function(e) {
    if (!adminMenuButton.contains(e.target) && !adminMenu.contains(e.target)) {
      adminMenu.classList.add('hidden');
    }
  });
  
  // 退出登录
  document.getElementById('logout-admin').addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('确定要退出登录吗？')) {
      logout();
    }
  });
  
  // 导航菜单切换
  const navItems = document.querySelectorAll('.admin-nav-item');
  const panels = document.querySelectorAll('.admin-panel');
  
  navItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // 更新导航状态
      navItems.forEach(i => {
        i.classList.remove('bg-primary/10', 'text-primary');
        i.classList.add('text-gray-700', 'hover:bg-gray-100');
      });
      
      this.classList.add('bg-primary/10', 'text-primary');
      this.classList.remove('text-gray-700', 'hover:bg-gray-100');
      
      // 显示对应面板
      panels.forEach(panel => panel.classList.add('hidden'));
      panels[index].classList.remove('hidden');
    });
  });
  
  // 初始化图表
  initCharts();
});

// 初始化统计图表
function initCharts() {
  // 访问统计图表
  const visitCtx = document.getElementById('visit-chart').getContext('2d');
  new Chart(visitCtx, {
    type: 'line',
    data: {
      labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      datasets: [{
        label: '访问量',
        data: [65, 59, 80, 81, 56, 55, 72],
        borderColor: '#165DFF',
        backgroundColor: 'rgba(22, 93, 255, 0.1)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // 用户组分布图表
  const userGroupCtx = document.getElementById('user-group-chart').getContext('2d');
  new Chart(userGroupCtx, {
    type: 'doughnut',
    data: {
      labels: ['开发组', '设计组', '产品组', '管理层'],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: [
          '#165DFF',
          '#36CFC9',
          '#52C41A',
          '#FAAD14'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      cutout: '70%'
    }
  });
}