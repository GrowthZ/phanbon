export const BRAND = {
  name: "Men Nhà Nông",
  productName: "Bộ men vi sinh ủ chín thức ăn chăn nuôi",
  company: "Men Nhà Nông",
  hotline: "09xx xxx xxx",
  zalo: "09xxxxxxx",
  zaloUrl: "https://zalo.me/09xxxxxxx",
  region: "Giao hàng toàn quốc",
  stats: "Chuyên gia hỗ trợ kỹ thuật tận tình"
};
export const TRACKING_CONFIG = {
  pixelId: "3606095186215719",
  sheetName: "channuoi",
  branchName: "menvisinh2"
};

export const trackEvent = (name: string, params: Record<string, any> = {}) => {
  console.log(`[TrackEvent] ${name}`, params);
  
  if (typeof window !== 'undefined' && (window as any).fbq) {
    try {
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
        (window as any).fbq('trackCustom', name, params);
      }
    } catch (e) {
      console.error('Meta Pixel tracking error:', e);
    }
  }
};
