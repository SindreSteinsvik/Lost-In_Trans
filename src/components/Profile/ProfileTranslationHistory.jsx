import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({translations}) => {

    const translationList = translations.map((translation, index) => 
    <ProfileTranslationHistoryItem key={index + '-' + translation} translation={translation}/>)

    return (
        <section>
            <h4 className="font1">Your translation history</h4>

            {translationList.length === 0 && <p>Translation history empty</p>}
            
            <ul>
                {translationList}
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory