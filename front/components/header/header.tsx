import { HeaderWrap, HeaderUserInfo, HeaderContainer, TitleContainer, NavLink, Button, NavContainer } from "./styled/Header.styled";
import { Icon } from "@iconify/react";
import { Modal } from "@components/modal/Modal";
import { useEffect, useState } from "react";
import ConnectWallet from "@components/sign/connect";
import { useAccount, useDisconnect } from "wagmi";
import { DropDownBtn } from "@components/dropdown/dropdown";
import request from "@utils/request"
import { LoadingSpinner } from "@components/loading/loading";
import Link from "next/link";
import { UserType } from "@utils/types/user.interface";




const Header = () => {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect();
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isDefinitelyConnected, setIsDefinitelyConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true)  
  const [user, setUser] = useState<UserType | null>(null)


  const getUser = async () => {
    try {
      const { data } = await request.post("auth/sign", {
        address: address
      });
      if (data.address) setUser(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      if (isConnected) {
        setIsDefinitelyConnected(true);
        getUser()
      } else {
        setIsDefinitelyConnected(false);
      }
    }, [address]);

  return (
    <>
      <HeaderWrap>
        <HeaderContainer>
          <TitleContainer />
          <NavContainer>
            <NavLink>A</NavLink>
            <NavLink>B</NavLink>
            <NavLink>C</NavLink>
            <NavLink>D</NavLink>
          </NavContainer>
          <Button color="white" backgroundColor="red" fontSize="md" onClick={isConnected? disconnect  : ()=>{setIsOpenModal(true)}}>
            <Icon icon="akar-icons:link-chain" className="w-4 h-4 mr-1" />
            {isDefinitelyConnected ? "Disconnect" : "Connect"}
          </Button>
          {isDefinitelyConnected && (isLoading ? <LoadingSpinner /> : <DropDownBtn user={user} />)}
        </HeaderContainer>
      </HeaderWrap>
      {!isConnected && <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} width="20rem" height="1.5rem"><ConnectWallet /></Modal>}
    </>
  );
}
export default Header