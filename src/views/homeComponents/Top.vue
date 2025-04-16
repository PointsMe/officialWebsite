<template>
    <nav class="navbar">
      <div class="navbar-container">
        <!-- Logo部分 -->
        <div class="navbar-brand">
          <img src="@/assets/logo.png" alt="Joinku" class="logo">
        </div>
  
        <!-- 主导航链接 -->
        <div class="navbar-menu">
          <router-link to="/" class="nav-item">主页</router-link>
          <router-link to="/mall" class="nav-item">商城</router-link>
          <router-link to="/service" class="nav-item">服务支持</router-link>
          <router-link to="/about" class="nav-item">关于我们</router-link>
          <router-link to="/contact" class="nav-item">联系我们</router-link>
        </div>
  
        <!-- 右侧操作区 -->
        <div class="navbar-end">
          <!-- 语言选择器 -->
          <div class="language-selector">
            <select v-model="currentLanguage" @change="changeLanguage">
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
          </div>
  
          <!-- 用户操作按钮 -->
          <div class="auth-buttons">
            <button class="btn-login">登录</button>
            <button class="btn-register">注册</button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const currentLanguage = ref('zh')
  
  const changeLanguage = () => {
    // 实现语言切换逻辑
    console.log('Language changed to:', currentLanguage.value)
  }
  </script>
  
  <style scoped>
  .navbar {
    width: 100%;
    height: 64px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .navbar-container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 36px;
    width: auto;
  }
  
  .navbar-menu {
    display: flex;
    gap: 32px;
    align-items: center;
  }
  
  .nav-item {
    color: #333333;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }
  
  .nav-item:hover {
    color: #4CAF50;
  }
  
  .nav-item.router-link-active {
    color: #4CAF50;
  }
  
  .nav-item.router-link-active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4CAF50;
  }
  
  .navbar-end {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  
  .language-selector select {
    padding: 6px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #ffffff;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
    outline: none;
  }
  
  .auth-buttons {
    display: flex;
    gap: 12px;
  }
  
  .btn-login, .btn-register {
    padding: 8px 20px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-login {
    background-color: transparent;
    border: 1px solid #4CAF50;
    color: #4CAF50;
  }
  
  .btn-login:hover {
    background-color: rgba(76, 175, 80, 0.1);
  }
  
  .btn-register {
    background-color: #4CAF50;
    border: 1px solid #4CAF50;
    color: #ffffff;
  }
  
  .btn-register:hover {
    background-color: #45a049;
    border-color: #45a049;
  }
  </style> 