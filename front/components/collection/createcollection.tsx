import { useState } from "react";
import tw from "tailwind-styled-components"
import { Icon } from '@iconify/react';
import { Button } from "@components/common/button";
import { Modal } from "@components/common/modal/Modal";
import { LaunchPad } from "@components/market/launchpad";


export const CreateCollection = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const SectionWrap = tw.div`
        max-w-md p-6 bg-white rounded-lg border border-gray-200 dark:border-gray-700 shadow dark:bg-gray-800 
    `
    const SectionTitle = tw.h2`
        mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white
    `
    const SectionDescription = tw.p`
        pt-5 mb-3 font-normal text-gray-700 dark:text-gray-400 text-md
    `

    return (
        <>
            <SectionWrap>
                <SectionTitle>컬렉션 등록</SectionTitle>
                <SectionDescription>아직 NFT 컬렉션이 없으신가요</SectionDescription>
                <Button onClick={() => { setIsOpenModal(true) }} color="blue" size="w-4/12" >
                    만들러 가기
                    <Icon icon="iconamoon:enter" className="text-lg ml-2" />
                </Button>
            </SectionWrap>
            {<Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} width="20rem" height="1.5rem"><LaunchPad /></Modal>}
        </>
    )
}