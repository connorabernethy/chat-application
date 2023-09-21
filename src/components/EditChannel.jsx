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

  const updateChannel = async (event) => {
    event.preventDefault();

    try {
      const nameChanged = channelName !== (channel.data.name || channel.data.id);
      if (nameChanged) {
        await channel.update({ name: channelName }, {text: `Channel name changed to: ${channelName}`});
      }
  
      if (selectedUsers.length) {
        await channel.addMembers(selectedUsers);
      }
      
      setChannelName(null);
      setIsEditing(false);
      setSelectedUsers([]);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className='edit-channel__container'>
      <div className='edit-channel__header'>
        <p>Edit Channel</p>
        <CloseIcon setIsEditing={setIsEditing}/>
      </div>
      <ChannelNameInput channelName={channelName} setChannelName={setChannelName}/>
      <UserList setSelectedUsers={setSelectedUsers}/>
      <div className='edit-channel__button-wrapper' onClick={updateChannel}>
        <p>Save Changes</p>
      </div>
    </div>
  )
}

export default EditChannel