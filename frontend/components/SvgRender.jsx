import React from 'react'

export default function SvgRender({ iconType }) {
  switch (iconType) {
    case 'meet-community':
      return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.7835 36.4501C29.2668 36.4501 28.7501 36.3167 28.2835 36.0334L21.6001 32.0667C20.9001 32.0501 20.2001 32.0001 19.5335 31.9001C19.0835 31.8334 18.7001 31.5334 18.5335 31.1C18.3668 30.6667 18.4501 30.2 18.7501 29.85C19.8501 28.5667 20.4168 27.0334 20.4168 25.4001C20.4168 21.3667 16.8668 18.0834 12.5001 18.0834C10.8668 18.0834 9.30012 18.5334 7.98345 19.4001C7.61678 19.6334 7.16679 19.6668 6.76679 19.4834C6.38346 19.3001 6.10014 18.9334 6.05014 18.5C6.00014 18.0334 5.9668 17.5667 5.9668 17.0834C5.9668 8.81675 13.1335 2.1001 21.9335 2.1001C30.7335 2.1001 37.9001 8.81675 37.9001 17.0834C37.9001 21.6167 35.8001 25.7834 32.1001 28.6334L32.6668 33.1668C32.8001 34.3001 32.3001 35.3668 31.3501 35.9835C30.8835 36.2835 30.3335 36.4501 29.7835 36.4501ZM21.9168 29.55C22.1501 29.5334 22.3835 29.6001 22.5835 29.7335L29.5668 33.8834C29.7501 34.0001 29.9001 33.9501 30.0001 33.8834C30.0835 33.8334 30.2168 33.7001 30.1835 33.4668L29.5335 28.2001C29.4835 27.7334 29.6835 27.2835 30.0501 27.0168C33.4501 24.6335 35.4001 21 35.4001 17.05C35.4001 10.1667 29.3668 4.56673 21.9335 4.56673C14.7835 4.56673 8.91679 9.7668 8.48345 16.3001C9.73345 15.8168 11.0835 15.5501 12.4835 15.5501C18.2335 15.5501 22.9001 19.95 22.9001 25.3667C22.9168 26.8334 22.5668 28.25 21.9168 29.55Z" fill="white"/>
        <path d="M7.63296 37.9168C7.19962 37.9168 6.78295 37.8002 6.39961 37.5502C5.64961 37.0669 5.24963 36.2336 5.34963 35.3502L5.68296 32.7835C3.43296 30.9502 2.09961 28.2335 2.09961 25.3835C2.09961 22.1335 3.79963 19.1002 6.64963 17.2835C8.36629 16.1668 10.3996 15.5669 12.5163 15.5669C18.2663 15.5669 22.9329 19.9668 22.9329 25.3835C22.9329 27.5835 22.1329 29.7502 20.6663 31.4669C18.7829 33.7502 15.9663 35.0835 12.8663 35.1835L8.79962 37.6002C8.43295 37.8168 8.03296 37.9168 7.63296 37.9168ZM12.4996 18.0669C10.8663 18.0669 9.29961 18.5169 7.98294 19.3835C5.84961 20.7502 4.58295 22.9835 4.58295 25.3835C4.58295 27.7002 5.71629 29.8169 7.71629 31.1836C8.09963 31.4502 8.29961 31.9002 8.24961 32.3668L7.88295 35.2169L11.8663 32.8502C12.0663 32.7336 12.283 32.6668 12.4996 32.6668C14.9496 32.6668 17.2663 31.6169 18.733 29.8336C19.833 28.5336 20.4163 27.0001 20.4163 25.3668C20.4163 21.3501 16.8663 18.0669 12.4996 18.0669Z" fill="white"/>
      </svg>
    case 'accepte-crypto':
      return <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.5665 37.9167H17.2834C16.75 37.9167 16.2833 37.5833 16.1 37.1C15.9167 36.6 16.0667 36.05 16.4667 35.7167C16.8667 35.3833 17.2333 34.95 17.5 34.4833C18.0333 33.6333 17.9833 31.4 17.9833 30.4167C17.9833 26.5 13.2998 23.95 10.3165 23.95C9.08318 23.95 7.91652 24.3666 6.93318 25.1499C6.56652 25.4499 6.04983 25.5 5.6165 25.3C5.18317 25.1 4.9165 24.65 4.9165 24.1666V19.2C4.9165 15.05 8.28316 11.6833 12.4332 11.6833H31.5665C35.7165 11.6833 39.0832 15.05 39.0832 19.2V21.6C39.0832 22.2834 38.5165 22.85 37.8332 22.85H34.4665C33.8832 22.85 33.3498 23.0667 32.9665 23.4667L32.9499 23.4834C32.4832 23.9334 32.2665 24.55 32.3165 25.1833C32.4165 26.2833 33.4665 27.1666 34.6665 27.1666H37.8332C38.5165 27.1666 39.0832 27.7333 39.0832 28.4166V30.4C39.0832 34.55 35.7165 37.9167 31.5665 37.9167ZM19.8667 35.4167H31.5665C34.3332 35.4167 36.5832 33.1666 36.5832 30.4V29.6666H34.6665C32.1498 29.6666 30.0165 27.8 29.8165 25.4C29.6832 24.0333 30.1832 22.6834 31.1832 21.7C32.0498 20.8167 33.2165 20.3334 34.4665 20.3334H36.5832V19.1833C36.5832 16.4167 34.3332 14.1667 31.5665 14.1667H12.4332C9.6665 14.1667 7.4165 16.4167 7.4165 19.1833V22C8.34984 21.6333 9.33317 21.4333 10.3332 21.4333C14.6998 21.4333 20.5 26.0333 20.5 30.4C20.5 31.7166 20.4833 34.2833 19.8667 35.4167Z" fill="white"/>
        <path d="M6.1665 21.9333C5.48317 21.9333 4.9165 21.3666 4.9165 20.6833V13.0667C4.9165 10.5834 6.48317 8.33326 8.79984 7.44993L22.0332 2.44993C23.3998 1.93326 24.9165 2.11668 26.0998 2.95001C27.2998 3.78334 27.9998 5.13333 27.9998 6.58333V12.9166C27.9998 13.6 27.4332 14.1666 26.7498 14.1666C26.0665 14.1666 25.4998 13.6 25.4998 12.9166V6.58333C25.4998 5.95 25.1998 5.36664 24.6665 4.99998C24.1332 4.63331 23.4998 4.54997 22.8998 4.7833L9.66651 9.7833C8.31651 10.3 7.39985 11.6167 7.39985 13.0667V20.6833C7.41651 21.3833 6.84984 21.9333 6.1665 21.9333Z" fill="white"/>
        <path d="M34.6666 29.6665C32.15 29.6665 30.0166 27.7999 29.8166 25.3999C29.6833 24.0165 30.1833 22.6666 31.1833 21.6832C32.0333 20.8166 33.2 20.3333 34.45 20.3333H37.9166C39.5666 20.3833 40.8333 21.6832 40.8333 23.2832V26.7166C40.8333 28.3166 39.5666 29.6165 37.9666 29.6665H34.6666ZM37.8833 22.8333H34.4666C33.8833 22.8333 33.35 23.0499 32.9666 23.4499C32.4833 23.9166 32.25 24.5499 32.3166 25.1832C32.4166 26.2832 33.4666 27.1665 34.6666 27.1665H37.9333C38.1499 27.1665 38.3499 26.9666 38.3499 26.7166V23.2832C38.3499 23.0332 38.1499 22.8499 37.8833 22.8333Z" fill="white"/>
        <path d="M25.3332 21.25H13.6665C12.9832 21.25 12.4165 20.6833 12.4165 20C12.4165 19.3167 12.9832 18.75 13.6665 18.75H25.3332C26.0165 18.75 26.5832 19.3167 26.5832 20C26.5832 20.6833 26.0165 21.25 25.3332 21.25Z" fill="white"/>
        <path d="M10.5 42C6.83053 42 3.38211 40.0547 1.52527 36.8937C0.530532 35.3021 0 33.4232 0 31.5C0 28.2726 1.43684 25.2884 3.93473 23.2989C5.79158 21.8178 8.13474 21 10.5 21C16.2916 21 21 25.7084 21 31.5C21 33.4232 20.4695 35.3021 19.4747 36.9158C18.9442 37.8442 18.2147 38.6842 17.3747 39.3916C15.54 41.0716 13.0863 42 10.5 42ZM10.5 24.3158C8.86421 24.3158 7.31684 24.8684 6.01263 25.9073C4.31053 27.2557 3.31579 29.3116 3.31579 31.5C3.31579 32.8042 3.66948 34.0863 4.35474 35.1915C5.65895 37.4021 7.95789 38.6842 10.5 38.6842C12.2463 38.6842 13.9263 38.0432 15.2084 36.8937C15.7832 36.4074 16.2695 35.8326 16.6232 35.2137C17.3305 34.0863 17.6842 32.8042 17.6842 31.5C17.6842 27.5432 14.4568 24.3158 10.5 24.3158Z" fill="white"/>
        <path d="M10.5 36C10.1262 36 9.76615 35.7913 9.58615 35.4575L8.50615 33.4822L6.54002 32.3972C6.20771 32.2164 6 31.8686 6 31.4791C6 31.0896 6.20771 30.7419 6.54002 30.561L8.50615 29.476L9.58615 27.5008C9.94615 26.8331 11.04 26.8331 11.4139 27.5008L12.4938 29.476L14.46 30.561C14.7923 30.7419 15 31.0896 15 31.4791C15 31.8686 14.7923 32.2164 14.46 32.3972L12.4938 33.4822L11.4139 35.4575C11.2339 35.7913 10.8738 36 10.5 36ZM9.19846 31.4791L9.76616 31.7991C9.94616 31.8965 10.0846 32.0355 10.1815 32.2164L10.5 32.7867L10.8185 32.2164C10.9154 32.0355 11.0538 31.8965 11.2338 31.7991L11.8015 31.4791L11.2338 31.1592C11.0538 31.0618 10.9154 30.9227 10.8185 30.7419L10.5 30.1715L10.1815 30.7419C10.0846 30.9227 9.94616 31.0618 9.76616 31.1592L9.19846 31.4791Z" fill="white"/>
      </svg>
    case 'grow-community':
      return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.9999 13.1834C29.9499 13.1834 29.9165 13.1834 29.8665 13.1834H29.7832C26.6332 13.0834 24.2832 10.6501 24.2832 7.6501C24.2832 4.58343 26.7832 2.1001 29.8332 2.1001C32.8832 2.1001 35.3832 4.6001 35.3832 7.6501C35.3665 10.6668 33.0165 13.1001 30.0165 13.2001C30.0165 13.1834 30.0165 13.1834 29.9999 13.1834ZM29.8332 4.58344C28.1499 4.58344 26.7832 5.95011 26.7832 7.63344C26.7832 9.28344 28.0665 10.6168 29.7165 10.6834C29.7332 10.6668 29.8665 10.6668 30.0165 10.6834C31.6332 10.6001 32.8832 9.26678 32.8999 7.63344C32.8999 5.95011 31.5332 4.58344 29.8332 4.58344Z" fill="white"/>
        <path d="M30.0165 25.467C29.3665 25.467 28.7165 25.417 28.0665 25.3003C27.3832 25.1837 26.9332 24.5337 27.0498 23.8503C27.1665 23.167 27.8165 22.717 28.4998 22.8337C30.5498 23.1837 32.7165 22.8003 34.1665 21.8337C34.9498 21.317 35.3665 20.667 35.3665 20.017C35.3665 19.367 34.9332 18.7337 34.1665 18.217C32.7165 17.2503 30.5165 16.867 28.4498 17.2337C27.7665 17.367 27.1165 16.9003 26.9998 16.217C26.8832 15.5337 27.3332 14.8837 28.0165 14.767C30.7332 14.2837 33.5498 14.8003 35.5498 16.1337C37.0165 17.117 37.8665 18.517 37.8665 20.017C37.8665 21.5003 37.0332 22.917 35.5498 23.917C34.0332 24.917 32.0665 25.467 30.0165 25.467Z" fill="white"/>
        <path d="M9.94981 13.1833C9.93314 13.1833 9.91647 13.1833 9.91647 13.1833C6.91647 13.0833 4.56647 10.6499 4.5498 7.64991C4.5498 4.58325 7.04981 2.08325 10.0998 2.08325C13.1498 2.08325 15.6498 4.58325 15.6498 7.63325C15.6498 10.6499 13.2998 13.0833 10.2998 13.1833L9.94981 11.9333L10.0665 13.1833C10.0331 13.1833 9.98314 13.1833 9.94981 13.1833ZM10.1165 10.6833C10.2165 10.6833 10.2998 10.6832 10.3998 10.6999C11.8831 10.6332 13.1831 9.29991 13.1831 7.64991C13.1831 5.96658 11.8165 4.59991 10.1331 4.59991C8.44981 4.59991 7.08314 5.96658 7.08314 7.64991C7.08314 9.28325 8.3498 10.5999 9.96647 10.6999C9.98314 10.6832 10.0498 10.6833 10.1165 10.6833Z" fill="white"/>
        <path d="M9.93349 25.467C7.88349 25.467 5.91683 24.917 4.40016 23.917C2.9335 22.9337 2.0835 21.517 2.0835 20.017C2.0835 18.5337 2.9335 17.117 4.40016 16.1337C6.40016 14.8003 9.21683 14.2837 11.9335 14.767C12.6168 14.8837 13.0668 15.5337 12.9502 16.217C12.8335 16.9003 12.1835 17.367 11.5002 17.2337C9.4335 16.867 7.25017 17.2503 5.7835 18.217C5.00016 18.7337 4.5835 19.367 4.5835 20.017C4.5835 20.667 5.01683 21.317 5.7835 21.8337C7.2335 22.8003 9.40016 23.1837 11.4502 22.8337C12.1335 22.717 12.7835 23.1837 12.9002 23.8503C13.0168 24.5337 12.5668 25.1837 11.8835 25.3003C11.2335 25.417 10.5835 25.467 9.93349 25.467Z" fill="white"/>
        <path d="M19.9999 25.6334C19.9499 25.6334 19.9165 25.6334 19.8665 25.6334H19.7832C16.6332 25.5334 14.2832 23.1001 14.2832 20.1001C14.2832 17.0334 16.7832 14.55 19.8332 14.55C22.8832 14.55 25.3832 17.0501 25.3832 20.1001C25.3665 23.1167 23.0165 25.5501 20.0165 25.6501C20.0165 25.6334 20.0165 25.6334 19.9999 25.6334ZM19.8332 17.0334C18.1499 17.0334 16.7832 18.4001 16.7832 20.0834C16.7832 21.7334 18.0665 23.0667 19.7165 23.1334C19.7332 23.1167 19.8665 23.1167 20.0165 23.1334C21.6332 23.0501 22.8832 21.7167 22.8999 20.0834C22.8999 18.4167 21.5332 17.0334 19.8332 17.0334Z" fill="white"/>
        <path d="M19.9995 37.9332C17.9995 37.9332 15.9995 37.4166 14.4495 36.3666C12.9828 35.3832 12.1328 33.9832 12.1328 32.4832C12.1328 30.9999 12.9661 29.5665 14.4495 28.5832C17.5661 26.5165 22.4495 26.5165 25.5495 28.5832C27.0162 29.5665 27.8661 30.9665 27.8661 32.4665C27.8661 33.9499 27.0328 35.3832 25.5495 36.3666C23.9995 37.3999 21.9995 37.9332 19.9995 37.9332ZM15.8328 30.6832C15.0495 31.1999 14.6328 31.8499 14.6328 32.4999C14.6328 33.1499 15.0661 33.7832 15.8328 34.2999C18.0828 35.8165 21.8995 35.8165 24.1495 34.2999C24.9328 33.7832 25.3495 33.1332 25.3495 32.4832C25.3495 31.8332 24.9162 31.1999 24.1495 30.6832C21.9162 29.1666 18.0995 29.1832 15.8328 30.6832Z" fill="white"/>
      </svg>
    case 'instant-payments':
      return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.6668 17.9167H3.3335C2.65016 17.9167 2.0835 17.3501 2.0835 16.6667C2.0835 15.9834 2.65016 15.4167 3.3335 15.4167H36.6668C37.3502 15.4167 37.9168 15.9834 37.9168 16.6667C37.9168 17.3501 37.3502 17.9167 36.6668 17.9167Z" fill="white"/>
        <path d="M19.2502 35.4168H10.7336C4.10025 35.4168 2.06689 33.4168 2.06689 26.8501V13.1501C2.06689 7.90011 3.18355 4.98344 9.13355 4.63344C9.63355 4.61677 10.1669 4.6001 10.7336 4.6001H29.2502C35.8836 4.6001 37.9169 6.6001 37.9169 13.1668V20.5168C37.9169 21.2001 37.3502 21.7668 36.6669 21.7668C35.9836 21.7668 35.4169 21.2001 35.4169 20.5168V13.1668C35.4169 8.01676 34.5002 7.1001 29.2502 7.1001H10.7336C10.2002 7.1001 9.71689 7.11677 9.25022 7.13344C5.63356 7.3501 4.56689 8.16676 4.56689 13.1668V26.8668C4.56689 32.0168 5.48358 32.9334 10.7336 32.9334H19.2502C19.9336 32.9334 20.5002 33.5001 20.5002 34.1834C20.5002 34.8668 19.9502 35.4168 19.2502 35.4168Z" fill="white"/>
        <path d="M16.6667 27.9167H10C9.31667 27.9167 8.75 27.3501 8.75 26.6667C8.75 25.9834 9.31667 25.4167 10 25.4167H16.6667C17.35 25.4167 17.9167 25.9834 17.9167 26.6667C17.9167 27.3501 17.35 27.9167 16.6667 27.9167Z" fill="white"/>
        <path d="M30.0002 37.9166C27.2335 37.9166 24.6335 36.4499 23.2335 34.0666C22.4835 32.8666 22.0835 31.4499 22.0835 29.9999C22.0835 25.6333 25.6335 22.0833 30.0002 22.0833C34.3668 22.0833 37.9168 25.6333 37.9168 29.9999C37.9168 31.4499 37.5168 32.8666 36.7668 34.0832C35.3668 36.4499 32.7668 37.9166 30.0002 37.9166ZM30.0002 24.5833C27.0168 24.5833 24.5835 27.0166 24.5835 29.9999C24.5835 30.9833 24.8501 31.9499 25.3668 32.7832C26.3334 34.4166 28.1168 35.4166 30.0002 35.4166C31.8835 35.4166 33.6669 34.4166 34.6335 32.7999C35.1502 31.9499 35.4168 30.9999 35.4168 29.9999C35.4168 27.0166 32.9835 24.5833 30.0002 24.5833Z" fill="white"/>
        <path d="M29.0497 32.9C28.733 32.9 28.4164 32.7834 28.1664 32.5334L26.5163 30.8833C26.033 30.4 26.033 29.6 26.5163 29.1167C26.9996 28.6333 27.7996 28.6333 28.283 29.1167L29.083 29.9167L31.7497 27.45C32.2497 26.9833 33.0497 27.0167 33.5163 27.5167C33.983 28.0167 33.9497 28.8167 33.4497 29.2834L29.8997 32.5667C29.6497 32.7833 29.3497 32.9 29.0497 32.9Z" fill="white"/>
      </svg>
    case 'money':
      return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7501 27.0832H18.6169C16.4002 27.0832 14.5835 25.2166 14.5835 22.9166C14.5835 22.2332 15.1502 21.6666 15.8335 21.6666C16.5168 21.6666 17.0835 22.2332 17.0835 22.9166C17.0835 23.8332 17.7669 24.5832 18.6169 24.5832H21.7501C22.4001 24.5832 22.9168 23.9999 22.9168 23.2832C22.9168 22.3832 22.6668 22.2499 22.1002 22.0499L17.0835 20.2999C16.0168 19.9165 14.5835 19.1499 14.5835 16.6999C14.5835 14.6166 16.2335 12.8999 18.2502 12.8999H21.3835C23.6001 12.8999 25.4168 14.7666 25.4168 17.0666C25.4168 17.7499 24.8502 18.3166 24.1668 18.3166C23.4835 18.3166 22.9168 17.7499 22.9168 17.0666C22.9168 16.1499 22.2335 15.3999 21.3835 15.3999H18.2502C17.6002 15.3999 17.0835 15.9832 17.0835 16.6999C17.0835 17.5999 17.3335 17.7332 17.9001 17.9332L22.9168 19.6832C23.9835 20.0666 25.4168 20.8332 25.4168 23.2832C25.4168 25.3832 23.7668 27.0832 21.7501 27.0832Z" fill="white"/>
        <path d="M20 28.75C19.3167 28.75 18.75 28.1833 18.75 27.5V12.5C18.75 11.8167 19.3167 11.25 20 11.25C20.6833 11.25 21.25 11.8167 21.25 12.5V27.5C21.25 28.1833 20.6833 28.75 20 28.75Z" fill="white"/>
        <path d="M20.0002 37.9166C10.1168 37.9166 2.0835 29.8833 2.0835 19.9999C2.0835 10.1166 10.1168 2.08325 20.0002 2.08325C20.6835 2.08325 21.2502 2.64992 21.2502 3.33325C21.2502 4.01659 20.6835 4.58325 20.0002 4.58325C11.5002 4.58325 4.5835 11.4999 4.5835 19.9999C4.5835 28.4999 11.5002 35.4166 20.0002 35.4166C28.5002 35.4166 35.4168 28.4999 35.4168 19.9999C35.4168 19.3166 35.9835 18.7499 36.6668 18.7499C37.3502 18.7499 37.9168 19.3166 37.9168 19.9999C37.9168 29.8833 29.8835 37.9166 20.0002 37.9166Z" fill="white"/>
        <path d="M36.6667 11.2499C35.9833 11.2499 35.4167 10.6833 35.4167 9.99992V4.58325H30C29.3167 4.58325 28.75 4.01659 28.75 3.33325C28.75 2.64992 29.3167 2.08325 30 2.08325H36.6667C37.35 2.08325 37.9167 2.64992 37.9167 3.33325V9.99992C37.9167 10.6833 37.35 11.2499 36.6667 11.2499Z" fill="white"/>
        <path d="M28.3332 12.9166C28.0166 12.9166 27.6999 12.7999 27.4499 12.5499C26.9666 12.0666 26.9666 11.2666 27.4499 10.7832L35.7832 2.4499C36.2666 1.96657 37.0666 1.96657 37.5499 2.4499C38.0332 2.93324 38.0332 3.73323 37.5499 4.21656L29.2166 12.5499C28.9666 12.7999 28.6499 12.9166 28.3332 12.9166Z" fill="white"/>
      </svg>
    case 'black-logo':
      return <svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="76.81" x2="211.16" y1="211.17" y2="76.81"><stop offset=".21" stopColor="#24272a" /><stop offset=".42" stopColor="#24272a" stopOpacity="0" /><stop offset=".59" stopColor="#24272a" stopOpacity="0" /><stop offset=".81" stopColor="#24272a" /></linearGradient><path d="m88.46 216a16.45 16.45 0 0 0 12.46-5.71l112.56-130.57a16.42 16.42 0 0 0 -13.94-7.72 16.46 16.46 0 0 0 -12.41 5.65l-113.13 129.8a16.46 16.46 0 0 0 14.46 8.55z" fill="url(#a)" /><path d="m88.46 216a16.46 16.46 0 0 0 7.54-1.83v-109l87.45 104.94a16.44 16.44 0 0 0 12.64 5.89h3.45a16.46 16.46 0 0 0 16.46-16.46v-111.08a16.46 16.46 0 0 0 -16.46-16.46 16.36 16.36 0 0 0 -7.54 1.81v109.05l-87.45-104.94a16.44 16.44 0 0 0 -12.64-5.92h-3.45a16.46 16.46 0 0 0 -16.46 16.46v111.08a16.46 16.46 0 0 0 16.46 16.46z" fill="#24272a" /></svg>
    case 'security':
      return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.8499 18.5334C34.8499 26.6834 28.9333 34.3167 20.8499 36.5501C20.2999 36.7001 19.6999 36.7001 19.1499 36.5501C11.0666 34.3167 5.1499 26.6834 5.1499 18.5334V11.2167C5.1499 9.85006 6.18326 8.30006 7.46659 7.78339L16.7499 3.98345C18.8332 3.13345 21.1832 3.13345 23.2666 3.98345L32.5499 7.78339C33.8166 8.30006 34.8666 9.85006 34.8666 11.2167L34.8499 18.5334Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.9998 20.8334C21.8408 20.8334 23.3332 19.341 23.3332 17.5001C23.3332 15.6591 21.8408 14.1667 19.9998 14.1667C18.1589 14.1667 16.6665 15.6591 16.6665 17.5001C16.6665 19.341 18.1589 20.8334 19.9998 20.8334Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20.8333V25.8333" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    case 'join-community':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="url(#paint0_linear_101_70)"/>
        <defs>
        <linearGradient id="paint0_linear_101_70" x1="22" y1="2" x2="-2.05899" y2="13.5312" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B04AFD"/>
        <stop offset="0.494792" stop-color="#6A6FF8"/>
        <stop offset="1" stop-color="#00BFE7"/>
        </linearGradient>
        </defs>
      </svg>
      case 'support':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2499 8.08008V10.9401L10.2399 10.5901C9.72992 10.4101 9.41992 10.2401 9.41992 9.37008C9.41992 8.66008 9.94992 8.08008 10.5999 8.08008H11.2499V8.08008Z" fill="url(#paint0_linear_101_89)"/>
          <path d="M14.58 14.6301C14.58 15.3401 14.05 15.9201 13.4 15.9201H12.75V13.0601L13.76 13.4101C14.27 13.5901 14.58 13.7601 14.58 14.6301Z" fill="url(#paint1_linear_101_89)"/>
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.26 12C15.04 12.27 16.08 12.84 16.08 14.63C16.08 16.17 14.88 17.42 13.4 17.42H12.75V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V17.42H10.89C9.25 17.42 7.92 16.03 7.92 14.33C7.92 13.92 8.25 13.58 8.67 13.58C9.08 13.58 9.42 13.92 9.42 14.33C9.42 15.21 10.08 15.92 10.89 15.92H11.25V12.53L9.74 12C8.96 11.73 7.92 11.16 7.92 9.37C7.92 7.83 9.12 6.58 10.6 6.58H11.25V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V6.58H13.11C14.75 6.58 16.08 7.97 16.08 9.67C16.08 10.08 15.75 10.42 15.33 10.42C14.92 10.42 14.58 10.08 14.58 9.67C14.58 8.79 13.92 8.08 13.11 8.08H12.75V11.47L14.26 12Z" fill="url(#paint2_linear_101_89)"/>
          <defs>
          <linearGradient id="paint0_linear_101_89" x1="11.2499" y1="8.08008" x2="8.77554" y2="8.83892" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B04AFD"/>
          <stop offset="0.494792" stop-color="#6A6FF8"/>
          <stop offset="1" stop-color="#00BFE7"/>
          </linearGradient>
          <linearGradient id="paint1_linear_101_89" x1="14.58" y1="13.0601" x2="12.1056" y2="13.8189" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B04AFD"/>
          <stop offset="0.494792" stop-color="#6A6FF8"/>
          <stop offset="1" stop-color="#00BFE7"/>
          </linearGradient>
          <linearGradient id="paint2_linear_101_89" x1="22" y1="2" x2="-2.05899" y2="13.5312" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B04AFD"/>
          <stop offset="0.494792" stop-color="#6A6FF8"/>
          <stop offset="1" stop-color="#00BFE7"/>
          </linearGradient>
          </defs>
        </svg>
      case 'create-wallet':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.97 16.08C20.73 18.75 18.8 20.5 16 20.5H7C4.24 20.5 2 18.26 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.51 16.75 3.55C19.14 3.83 20.76 5.5 20.97 7.92C21 8.21 20.76 8.45 20.47 8.45H18.92C17.96 8.45 17.07 8.82 16.43 9.48C15.67 10.22 15.29 11.26 15.38 12.3C15.54 14.12 17.14 15.55 19.04 15.55H20.47C20.76 15.55 21 15.79 20.97 16.08Z" fill="url(#paint0_linear_101_54)"/>
          <path d="M22.0002 10.97V13.03C22.0002 13.58 21.5602 14.03 21.0002 14.05H19.0402C17.9602 14.05 16.9702 13.26 16.8802 12.18C16.8202 11.55 17.0602 10.96 17.4802 10.55C17.8502 10.17 18.3602 9.94995 18.9202 9.94995H21.0002C21.5602 9.96995 22.0002 10.42 22.0002 10.97Z" fill="url(#paint1_linear_101_54)"/>
          <defs>
          <linearGradient id="paint0_linear_101_54" x1="20.9725" y1="3.5" x2="-0.849582" y2="15.1727" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B04AFD"/>
          <stop offset="0.494792" stop-color="#6A6FF8"/>
          <stop offset="1" stop-color="#00BFE7"/>
          </linearGradient>
          <linearGradient id="paint1_linear_101_54" x1="22.0002" y1="9.94995" x2="16.4192" y2="13.2963" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B04AFD"/>
          <stop offset="0.494792" stop-color="#6A6FF8"/>
          <stop offset="1" stop-color="#00BFE7"/>
          </linearGradient>
          </defs>
        </svg>
      
  }

}
