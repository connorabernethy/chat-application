import React, {useState, useEffect} from 'react'
import { useChatContext } from 'stream-chat-react'

//import { SearchIcon } from '../assets';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }

    const getChannels = async (input) => {
        try {
            // TODO: fetch channels
        } catch(error) {
            setQuery('');
            console.log(error);
        }
    }

  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <img src=''/>
            </div>
            <input 
            className='channel-search__input__text '
            placeholder='Search'
            type="text"
            value={query}
            onChange={onSearch}/>
        </div>
    </div>
  )
}

export default ChannelSearch