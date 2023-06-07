// import { useState, useEffect } from "react";
// import Web3 from "web3";


// // declare은 전역객체나 외부 모듈 타입 지정
// declare global {
//     interface Window {
//         ethereum?: unknown;
//     }
// }

// const useWeb3 = () => {
//     const [web3, setWeb3] = useState<Web3 | null>(null);

//     useEffect(() => {
//         if (!window.ethereum) return;
//         setWeb3(new Web3(window.ethereum));
//     }, []);

//     return {web3};
// };

// export default useWeb3;
