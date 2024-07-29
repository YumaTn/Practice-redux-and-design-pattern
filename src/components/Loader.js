import React from 'react'
import { CircularProgress, styled } from '@mui/material'
const Loader = () => {

const LoaderWapper = styled('div')(({theme}) => ({
    display:'flex',
    justifyContent:'center',
    marginTop: theme.spacing(3)
}))

  return (
    <LoaderWapper>
        <CircularProgress/>
    </LoaderWapper>
  )
}

export default Loader