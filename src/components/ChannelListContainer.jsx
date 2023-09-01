import React from 'react'
import { Channel, ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

const Sidebar = () => {
    return (
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src='' width={30} alt=''></img>
                </div>
            </div>
            <div className='channel-list__sidebar__icon2'>
                <div className='icon1__inner'>
                    <img src='' width={30} alt='Logout'></img>
                </div>
            </div>
        </div>
    )
}

const CompanyHeader = () => {
    return (
        <div className='channel-list__header'>
            <p className='channel-list__header__text'>Chat App</p>
        </div>
    )
}

const ChannelListContainer = () => {
    return (
        <>
            <Sidebar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='team' />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type='team' />
                    )} />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='messaging' />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type='messaging' />
                    )} />
            </div>
        </>
    )
}

export default ChannelListContainer