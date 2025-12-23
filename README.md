// What are some differences between interfaces and types in TypeScript? 

২টাই প্রায় একাই কিন্তু কিছু বিন্নতা আছে , 
একই কোড এ ইন্টারফেস কল করলে typescript এটিকে marge করে ফেলে , ফলে এরর দেখায় না , কিন্তু একই নামে ২টা টাইপ define করা যায় না ।



//Explain the difference between any, unknown, and never types in TypeScript.
any তে typescript কোনো টাইপ চেক করে না , unknown এ typescript আগে টাইপ চেক করে , never হলো এমন টাইপ যা funtion থেকে কখনো কোনো কিছু return করে না ।
