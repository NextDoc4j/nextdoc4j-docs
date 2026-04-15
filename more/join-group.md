# 加入讨论群

<div class="join-group-container">

## 扫码加入群聊

<div class="qrcode-grid">

<div class="qrcode-item">

### 微信群

![微信群](/images/contact/wechat-group.jpg)

<div class="qrcode-tip">扫码加入微信群</div>

</div>

<div class="qrcode-divider"></div>

<div class="qrcode-item">

### 个人微信

![个人微信](/images/contact/wechat-user.png)

<div class="qrcode-tip primary">
  扫码添加微信,邀您加入群聊。
<br><span class="remark">(备注：nextdoc4j)</span><br>
  
</div>

</div>

</div>

</div>

<style scoped>
.join-group-container {
  padding: 1rem 0;
}

.qrcode-grid {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.qrcode-item {
  flex: 1;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.qrcode-item h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.qrcode-wrapper {
  position: relative;
  padding: 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.qrcode-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.qrcode-wrapper img {
  display: block;
  width: 180px;
  height: 180px;
  object-fit: contain;
}

.qrcode-tip {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.qrcode-tip.primary {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.qrcode-tip .remark {
  color: var(--vp-c-text-2);
  font-weight: normal;
}

.qrcode-divider {
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--vp-c-divider) 20%,
    var(--vp-c-divider) 80%,
    transparent
  );
  align-self: stretch;
  margin: 0 1rem;
}

@media (max-width: 640px) {
  .qrcode-grid {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .qrcode-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--vp-c-divider) 20%,
      var(--vp-c-divider) 80%,
      transparent
    );
    margin: 0;
  }

  .qrcode-item {
    max-width: 100%;
  }

  .qrcode-wrapper img {
    width: 160px;
    height: 160px;
  }
}
</style>
