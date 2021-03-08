import React from 'react'
import classes from './Youtube.module.css'

type Props = {
    url?: string
  }

function Youtube({ url } : Props) {
    return(
        <div className={classes.Embed_container}>
            <iframe src={url}
                frameBorder='0' 
                allow="autoplay; encrypted-media" 
                allowFullScreen />
        </div>
    )
}
    
export default Youtube