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

export const trackEvent = (name: string, params: Record<string, any> = {}) => {
  console.log(`[TrackEvent] ${name}`, params);
  // Todo: Connect to GA4 / Meta Pixel here
};
