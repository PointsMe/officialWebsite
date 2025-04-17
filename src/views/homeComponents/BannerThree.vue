<template>
  <div class="warehouse-management">
    <!-- 标题部分 -->
    <div class="title-section">
      <h1 class="main-title">两大专业仓库管理系统</h1>
      <div class="subtitle">满足各类商户需求，确保百货机食品供货仓储高效、规范运营</div>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-container">
      <!-- 左侧功能说明 -->
      <div class="left-section">
        <div class="supplier-title">
          <img src="@/assets/supplier-icon.png" alt="供应商图标" class="icon">
          <span>意酷供应商</span>
        </div>

        <!-- 功能列表 -->
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon">
              <div class="circle"></div>
            </div>
            <div class="feature-content">
              <h3>AI商品采购智能管理</h3>
              <p>依托历史订单，借助系统与市场数据，自动生成精准采购建议，助力商品库存优化管理等，平衡市场利润，提升盈利自主水平。</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <div class="circle"></div>
            </div>
            <div class="feature-content">
              <h3>AI智能销售预售单</h3>
              <p>通过对下游客户采购规律的深度学习，预判未来需求，自动生成销售预订单，实现从被动接单到主动的商品管理，增强客户粘性与竞争力。</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <div class="circle"></div>
            </div>
            <div class="feature-content">
              <h3>AI智能配送路线生成</h3>
              <p>系统自动分析客户位置，计算优化配送物流成本路线，智能规划物流配送路径，自动排单、同步发货状态等，全面提升配送效率与客户满意度。</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧手机展示 -->
      <div class="right-section">
        <img src="@/assets/banner3-1.png" alt="手机应用界面" class="phone-preview">
      </div>
    </div>

    <!-- 底部功能特点 -->
    <div class="bottom-features">
      <div class="feature-card">
        <h3>智能库存管理</h3>
        <p>以最完整精准的库存管理，以满足连锁终端市场调拨、库存的灵活调度</p>
      </div>
      <div class="feature-card">
        <h3>高效的订单处理</h3>
        <p>自动生成订单，多任务并行处理手续，简化订单操作，提高产品配入配送的效率</p>
      </div>
      <div class="feature-card">
        <h3>批量产品导入和条形码生成</h3>
        <p>轻松快速上传产品并生成对应的条形码和以供应商统一管理</p>
      </div>
      <div class="feature-card">
        <h3>基于云的数据存储</h3>
        <p>安全的云存储，确保数据安全和高效管理</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑这里暂时不需要添加
</script>

<style scoped>
.warehouse-management {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}

.title-section {
  text-align: center;
  margin-bottom: 60px;
}

.main-title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1a1a1a;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 18px;
  color: #666;
  line-height: 1.5;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
  position: relative;
}

.left-section {
  flex: 1;
  max-width: 580px;
}

.supplier-title {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.supplier-title .icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.supplier-title span {
  font-size: 28px;
  font-weight: 600;
  color: #1a1a1a;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.feature-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.feature-icon {
  flex-shrink: 0;
  margin-top: 6px;
}

.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #4169E1;
  position: relative;
}

.circle::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(65, 105, 225, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.feature-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.feature-content p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.phone-preview {
  width: 100%;
  max-width: 480px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
}

.bottom-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.feature-card {
  background-color: #f8f9fc;
  padding: 30px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.feature-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .warehouse-management {
    padding: 40px 20px;
  }
  
  .content-container {
    gap: 40px;
  }
}

@media (max-width: 992px) {
  .main-title {
    font-size: 32px;
  }
  
  .subtitle {
    font-size: 16px;
  }
  
  .bottom-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
  }
  
  .left-section {
    max-width: 100%;
  }
  
  .right-section {
    order: -1;
    margin-bottom: 40px;
  }
  
  .phone-preview {
    max-width: 360px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 28px;
  }
  
  .bottom-features {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 24px;
  }
}
</style>
    