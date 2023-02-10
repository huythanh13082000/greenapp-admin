import {makeStyles} from '@material-ui/styles'
import React, {ReactNode, useEffect} from 'react'
import {Route, useLocation} from 'react-router-dom'
import Menu from '../../components/menu'
import {ROUTE} from '../../router/routes'
interface Props {
  children: ReactNode
}
const useStyles = makeStyles({
  container_base_layout: {
    display: 'flex',
    '&>div:nth-child(1)': {},
    '&>div:nth-child(2)': {
      boxSizing: 'border-box',
      width: 'calc(100%)',
      background: '#F3F4F6',
      height: '100vh',
    },
  },
})
const BaseLayout: React.FC<Props> = ({children}) => {
  const classes = useStyles()
  const location = useLocation()
  useEffect(() => {}, [])

  return (
    <div className={classes.container_base_layout}>
      <div>{location.pathname !== ROUTE.LOGIN && <Menu />}</div>
      <div>{children}</div>
    </div>
  )
}

export default BaseLayout
