export function ClaudeLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.734 2.562L12.292 18.46a.56.56 0 01-.543.413.57.57 0 01-.543-.413L6.783 4.34a.555.555 0 00-.543-.412.556.556 0 00-.543.412L2.275 17.867a.57.57 0 01-.543.413.555.555 0 01-.543-.413L.006 13.64a.555.555 0 01.383-.685l3.42-.94a.556.556 0 00.383-.685L2.936 6.963a.555.555 0 01.383-.685l2.043-.562a.555.555 0 01.685.383l1.256 4.368a.555.555 0 00.685.383l2.043-.562a.556.556 0 00.383-.685L8.373 2.18a.555.555 0 01.383-.685L11.723.5a.555.555 0 01.685.383l2.041 7.432a.555.555 0 00.685.383l2.043-.562a.555.555 0 01.685.383l1.183 4.227a.555.555 0 01-.383.685l-3.42.94a.555.555 0 00-.383.685l1.256 4.368a.555.555 0 01-.383.685l-2.043.562" fill="#D97757"/>
    </svg>
  )
}

export function CursorLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#1A1A1A"/>
      <path d="M6 5L18 12L12 13L10 19L6 5Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function SaleoLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#4F46E5"/>
      <path d="M7 14.5C7 14.5 8.5 13 12 13C15.5 13 17 14.5 17 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="9" r="3" stroke="white" strokeWidth="1.5"/>
      <path d="M5 17.5C5 17.5 7 15.5 12 15.5C17 15.5 19 17.5 19 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}
