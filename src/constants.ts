export const BRAND = {
  name: "Men Nhà Nông",
  productName: "Bộ men vi sinh ủ chín thức ăn chăn nuôi",
  company: "Men Nhà Nông",
  hotline: "0969 813 880",
  zalo: "0969813880",
  zaloUrl: "https://zalo.me/0969813880",
  region: "Giao hàng toàn quốc",
  stats: "Chuyên gia hỗ trợ kỹ thuật tận tình"
};

export const TRACKING_CONFIG = {
  pixelId: "3606095186215719",
  sheetName: "biofarm", // will be "channuoi" on menvisinh2 branch
  branchName: "landing-variant-giat-tit" // will be "menvisinh2" on menvisinh2 branch
};

export const trackEvent = (name: string, params: Record<string, any> = {}) => {
  console.log(`[TrackEvent] ${name}`, params);
  
  if (typeof window !== 'undefined' && (window as any).fbq) {
    try {
      // Map common events to standard Meta Pixel events
      if (name === 'lead_form_submit') {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Đăng ký tư vấn thức ăn chăn nuôi',
          currency: 'VND',
          value: 0,
          ...params
        });
      } else if (name === 'form_start') {
        (window as any).fbq('track', 'InitiateCheckout', params);
      } else if (name === 'view_content' || name === 'page_view') {
        (window as any).fbq('track', 'PageView');
      } else {
        // Track other events as custom events
        (window as any).fbq('trackCustom', name, params);
      }
    } catch (e) {
      console.error('Meta Pixel tracking error:', e);
    }
  }
};
