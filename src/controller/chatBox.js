import React, {useEffect} from "react";

const ChatBox = (props) => {
    let Classes = ['ChatBox-Modal', 'in'];
    useEffect(()=>{
        document.body.style.overflow = "hidden";

        return ()=>{
            document.body.style.overflow = "scroll";
        }
     
      });
      let removeClass = (event)=>{
          if(event.target.id === "chat-overlay"){
            Classes = ['ChatBox-Modal', 'out'];
        
            props.showChatBox();
          }
      }
    return (
        <div className="ChatBox-Container" onClick={removeClass} id="chat-overlay">
            <div className={Classes.join(" ")}>
                <div className="ChatBox-chat-textfield">
                    <textarea></textarea>
                </div>

                
            </div>
        </div>
    )
}

export default ChatBox;