import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMusicRecord, updateMusicRecord } from '../Redux/AppReducer/action'

const EditMusicRecord = () => {
  const { id } = useParams()
  // console.log(id)
  const albums = useSelector((store) => store.AppReducer.musicRecords)
  // console.log(albums)
  const [musicName, setMusicName] = useState("")
  const dispatch=useDispatch()




  useEffect(() => {
    if(albums.length ===0){
      dispatch(getMusicRecord())
    }
    
  }, [albums.length,dispatch]);


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(musicName){
      const payload={
        name:musicName
      }
      dispatch(updateMusicRecord(id,payload)).then(()=>{
        dispatch(getMusicRecord())
      })
    }

  }






  useEffect(() => {
    if (id) {
      const currentMusic = albums.find((album) => album.id === id)
      if (currentMusic) {
        setMusicName(currentMusic.name)
      }
     

    }

  }, [id,albums]);



  return (
    <div>
      <h1>EDIT PAGE</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Edit music name</label>
            <input value={musicName} onChange={(e) => setMusicName(e.target.value)} />
          </div>
          <button type='submit'>Update</button>
        </form>

      </div>
    </div>
  )
}

export default EditMusicRecord