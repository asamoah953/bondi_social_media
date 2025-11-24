import '../css/messages.css';
import { useState } from 'react';


function Messages({ messages }) {


    const [selectedChat, setSelectedChat] = useState(null);

    function handleClick(chatId) {
        const found = messages.find(info => info.id === chatId);
        setSelectedChat(found);
    }

    console.log(selectedChat)


    return (
        <div className='messages-container'>

            <div className='messages-container'>
                <div className='chat-list'>
                    {messages.length > 0 &&
                        messages.map((chatInfo) => (
                            <div
                                className='sender-container'
                                key={chatInfo.id}
                                onClick={() => handleClick(chatInfo.id)}
                            >
                                <div className='sender-avatar'>
                                    {chatInfo.name[0].toUpperCase()}
                                </div>

                                <div className='sender-info'>
                                    <div className='sender-name'>{chatInfo.name}</div>
                                    <div className='sender-last'>Tap to open chat</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='chat-room'>
                {selectedChat ? (
                    <div className="chat-room-header">
                        <div className="header-avatar">
                            {selectedChat.name[0].toUpperCase()}
                        </div>

                        <div className="header-info">
                            <div className="header-name">{selectedChat.name}</div>
                            <div className="header-status">Active now</div>
                        </div>
                    </div>
                ) : (
                    <div className="empty-chat">
                        Select a chat to start messaging
                    </div>
                )}
            </div>

        </div>

    )
}

export default Messages;