import React from 'react'
import Avatar from 'react-avatar'

const SuggestionProfile = () => {
  return (
        <div className="flex items-center justify-between  mx-auto p-2 rounded-md">
          <Avatar
            src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            size="30"
            round={true}
          />
          <div>
            <p className='font-bold'>Name</p>
            <p className="text-sm">@Username</p>
          </div>
          <button className="rounded-full bg-black text-white font- px-3 py-2 text-sm">Follow</button>
        </div>
  )
}

export default SuggestionProfile