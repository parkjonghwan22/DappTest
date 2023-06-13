import { CreateCollection } from "@components/collection/createcollection";
import { RootLayout } from "@components/layout/layout"
import { useSign } from "@hooks/useSign";


const MyCollection = () => {
    const { user } = useSign()
    console.log(user?.hasCollection)

    return (
        <RootLayout>
            {(!user?.hasCollection) ? <CreateCollection /> : <></>}
        </RootLayout>
    )
}

export default MyCollection