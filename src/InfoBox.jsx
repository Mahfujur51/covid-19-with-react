import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import '../src/infoBox.css'

export const InfoBox = ({title,cases,total}) => {
  return (
    <Card className='infoBox'>
            <CardContent>
                <Typography className='infoBox_title' color="textSecondary">{title}</Typography>
                <h2 className='infoBox_cases'>{cases}</h2>
                <Typography color="initial" className='infoBox_total'>
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
  )
}
