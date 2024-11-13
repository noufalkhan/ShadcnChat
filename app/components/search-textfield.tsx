import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const SearchTextfield = () => {
  return (
    <div className='bg-gray-200 dark:bg-gray-600  rounded-3xl'>
      <Textarea 
          placeholder="Type your message here..."
          className="flex-1 resize-none bg-transparent px-2 border-none focus:ring-0 focus:outline-none rounded-3xl"
        />
    </div>
  )
}

export default SearchTextfield
