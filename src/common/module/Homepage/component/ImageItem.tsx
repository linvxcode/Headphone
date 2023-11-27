import Image from '@/common/component/element/Image'
import React from 'react'

const ImageItem = () => {
  return (
    <div className='flex relative'>
      <Image
          src="/img/pngwing1.png"
          alt="headphone"
          width={550}
          height={550}
          className="mt-[-100px] relative z-[9] transition-all duration-300"
          priority
        />
        <Image
          src="/img/pngwing2.png"
          alt="headphone"
          width={350}
          height={350}
          priority
          className=" absolute  top-[100px] lg:w-[40%] w-[25%] 2xl:right-[60px] right-0 xl:right-[-1px]"
        />
    </div>
  )
}

export default ImageItem
