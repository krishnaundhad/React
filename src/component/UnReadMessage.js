function UnReadMessage(props) {
    const {unReadMessage}=props
    return (
        <>{
            unReadMessage.length > 0 &&
            <div>
                <h1>You have <i>{unReadMessage[0]} </i>Array message</h1>
                <h2>You have {unReadMessage.length} Unread message</h2>
            </div>
            }</>
      );


}

export default UnReadMessage;