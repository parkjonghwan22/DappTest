import { RootLayout } from "@components/layout/layout"
import request from "@utils/request";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { UserType } from "@utils/types/user.interface"


const MyPage = () => {
    const { address, isConnected } = useAccount()
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
    console.log(user)

    useEffect(() => {
        if (isConnected) {
            setIsDefinitelyConnected(true);
            getUser()
        } else {
            setIsDefinitelyConnected(false);
        }
    }, [address]);

    if (isLoading) return null
    return (
        <RootLayout>
            {user && <div>
                <h1>MyPage</h1>
                <img src={user.userImg} alt="profile" width={200} height={200} />
                <p>{user.address}</p>
                <p>{user.name}</p>
                <p>{user.createdAt}</p>
            </div>}
        </RootLayout>
    )
}

export default MyPage