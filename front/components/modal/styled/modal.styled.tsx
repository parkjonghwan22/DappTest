import styled from "styled-components";
import { StyledProps } from "utils/types/style.interface";
import tw from "tailwind-styled-components"


export const ModalWrapper = tw.div`
  fixed top-0 left-0 w-full h-full z-8 flex justify-center items-center bg-black bg-opacity-50
`;

export const ModalContent = tw.div<StyledProps>`
  relative rounded-lg shadow bg-white dark:bg-gray-700 p-3
`;

