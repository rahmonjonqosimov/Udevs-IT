import React, { memo } from 'react'
import { IoMdCloseCircle } from 'react-icons/io';


const LocalImage:React.FC<any> = ({file, setFile}) => {

  const handleRemoveImage = (index:number) => {
    setFile((prev:any) => [...prev].filter((_, inx) => inx !== index));
  };

  const res:any = file ? [...file] : [];

  const images:any = Object?.values(file ? file : {})?.map((image:any, index:number) => (
    <div key={index} className="image__card">
      <img src={URL.createObjectURL(image)} width={100} alt="Images" />
      <div onClick={() => handleRemoveImage(index)} className="svg">
        <IoMdCloseCircle />
      </div>
    </div>
  ));
  
  return (
    <>{res?.length ? <div className="images__wrapper">{images}</div> : <></>}</>
  )
}

export default memo(LocalImage)