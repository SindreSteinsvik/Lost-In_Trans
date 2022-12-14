import { useEffect } from "react"
import { userById } from "../api/user"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
// import withAuth

const Profile = () => {

    const { user, setUser } = useUser()
    

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            if(error === null){
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    }, [setUser, user.id])

    return (
        <>
            <h1 className="font1">Profile</h1>
            <ProfileHeader username={user.username} />
            <ProfileActions/>
            <ProfileTranslationHistory translations={user.translations.slice(-10)} />
        </>
    )
}

export default withAuth(Profile)