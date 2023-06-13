import { RootLayout } from "@components/layout/layout"
import { useSign } from "@hooks/useSign";


const MyPage = () => {
    const { user } = useSign()

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