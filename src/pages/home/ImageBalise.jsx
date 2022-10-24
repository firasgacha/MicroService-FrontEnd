import { Image } from 'cloudinary-react';
import React from 'react'

export default function ImageBalise(props) {
  return (
    <div className="lg:mb-0 mr-4">
      <Image cloudName="du8mkgw6r" publicId={props.image} />
    </div>
  )
}
