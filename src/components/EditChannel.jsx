import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react'

import { UserList } from './'
import { CloseIcon } from 'stream-chat-react'

const ChannelNameInput = ({ channelName = '', setChannelName }) => {

  const handleChange = (e) => {
    e.preventDefault();

    setChannelName(e.target.value);
  }

  return(
    <div className='channel-name-input__wrapper'>
      <p>Name</p>
      <input value={channelName} onChange={handleChange} placeholder='channel-name' />
      <p>Add Members</p>
    </div>
  )
}

const EditChannel = ({ setIsEditing }) => {
  const { channel } = useChatContext();
  const [channelName, setChannelName] = useState(channel?.data?.name);
  const [selectedUsers, setSelectedUsers] = useState([]);
  return (
    <div className='edit-channel__container'>
      <div className='edit-channel__header'>
        <p>Edit Channel</p>
        <CloseIcon setIsEditing={setIsEditing}/>
      </div>
      <ChannelNameInput channelName={channelName} setChannelName={setChannelName}/>
      <UserList setSelectedUsers={setSelectedUsers}/>
    </div>
  )
}

export default EditChannel