import React from 'react'

const Divider = ({divWidth = 'w-full', divHeight = 'h-[4px]', propsStyle = ''}) => {
  return (
    <div className={`${divHeight} bg-gray-500 ${divWidth} ${propsStyle}`}>
    </div>
  )
}

export default Divider
