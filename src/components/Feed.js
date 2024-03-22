import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div>
      <div className='w-[40vw] border-2 border-grey-100 m-4'>
        <CreatePost/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
    </div>
  )
}

export default Feed