<template>
  <div class="package-section">
    <div class="section-header">
      <h2 class="title">精选套餐</h2>
      <div class="more">
        <span>更多 >></span>
      </div>
    </div>
    
    <div class="package-list">
      <!-- JOINKU MINI 套餐 -->
      <div class="package-card">
        <div class="card-header joinku-mini">JOINKU MINI</div>
        <div class="card-content">
          <h3>小卖铺收银管理系统</h3>
          <div class="price">
            <span class="currency">€</span>
            <span class="amount">1250</span>
            <span class="period">/年起</span>
          </div>
          
          <div class="features">
            <div class="feature-item">
              <span class="label">硬件配置</span>
              <span class="value">€200</span>
            </div>
            <div class="feature-item">
              <span class="label">软硬件优惠</span>
              <span class="value">€300</span>
            </div>
            <div class="feature-item">
              <span class="label">一体机WINDOWS</span>
              <span class="value">€1000</span>
            </div>
            <!-- 其他配置项 -->
          </div>
          
          <button class="order-button">立即购买</button>
        </div>
      </div>

      <!-- JOINKU BEAUTY 套餐 -->
      <div class="package-card">
        <div class="card-header joinku-beauty">JOINKU BEAUTY</div>
        <div class="card-content">
          <h3>美甲美发管理系统</h3>
          <div class="price">
            <span class="currency">€</span>
            <span class="amount">1250</span>
            <span class="period">/年起</span>
          </div>
          
          <div class="features">
            <!-- 美容美发特有配置项 -->
          </div>
          
          <button class="order-button">立即购买</button>
        </div>
      </div>

      <!-- JOINKU SUPPLIE 套餐 -->
      <div class="package-card">
        <div class="card-header joinku-supplie">JOINKU SUPPLIE</div>
        <div class="card-content">
          <h3>小卖铺收银管理系统</h3>
          <div class="price">
            <span class="currency">€</span>
            <span class="amount">1250</span>
            <span class="period">/年起</span>
          </div>
          
          <div class="features">
            <!-- 收银系统特有配置项 -->
          </div>
          
          <button class="order-button">立即购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用 Vue 3 的 Composition API
</script>

<style scoped lang="less">
.package-section {
  padding: 20px;
  background: #f8f8f8;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.more {
  color: #666;
  cursor: pointer;
}

.package-list {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.package-card {
  flex: 1;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 15px;
  color: white;
  font-weight: bold;
}

.joinku-mini {
  background: #4CAF50;
}

.joinku-beauty {
  background: #E91E63;
}

.joinku-supplie {
  background: #2196F3;
}

.card-content {
  padding: 20px;
}

.price {
  font-size: 32px;
  color: #333;
  margin: 20px 0;
}

.currency {
  font-size: 24px;
}

.period {
  font-size: 14px;
  color: #666;
}

.features {
  margin: 20px 0;
}

.feature-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.order-button {
  width: 100%;
  padding: 12px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.order-button:hover {
  background: #444;
}
</style>
  