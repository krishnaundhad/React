import UnReadMessage from "./UnReadMessage";
// import Message from "./Message";
// import UnReadMessage from "./component/UnReadMessage";
function Mailbox() {
    const message =["Krishna","Nency","","Manshvi","priyal","Riddhi",""];
    return ( 
        <>
        <h1>Mail Box</h1>
        <UnReadMessage unReadMessage={message}></UnReadMessage>
        </>
     );
}

export default Mailbox;