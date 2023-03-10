import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Radio,
  RadioGroup,
  TextareaAutosize,
} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {orderProjectApi} from '../../../apis/orderProjectApi'
import {useAppDispatch} from '../../../app/hooks'
import InputBase from '../../../components/input'
import UploadFile from '../../../components/upload_file'
import {orderProjectAction} from '../../../feature/order_project/orderProjectSlice'
import {OrderProjectType} from '../../../types/orderProject.type'
import {exportResults, numberWithCommas} from '../../../utils'

const useStyles = makeStyles({
  container_development_inquiry: {
    // background: '#F9FAFB',
    paddingBottom: '40px',
    '&>div:nth-child(1)': {},
    '&>div:nth-child(2)': {
      margin: '60px auto 0',
      width: '50%',
      padding: '32px 40px',
      background: '#FFFFFF',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
      borderRadius: '6px',
      '&>p': {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '36px',
      },
      '&>div': {
        display: 'flex',
        '&>label': {
          display: 'inline-block',
          marginBottom: '10px',
          marginTop: '10px',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '27px',
          color: '#1F293',
        },
        '&>p': {
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '27px',
          color: '#1F2937',
        },
        '& .MuiFormControlLabel-label': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#6B7280',
        },
        '&>span': {
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '20px',
          color: '#000000',
          marginRight: '16px',
          '&>span': {
            color: '#0065F2',
          },
        },
      },
      '&>button': {
        width: '100%',
        height: '48px',
        background: '#0065F2',
        borderRadius: '5px',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px',
        margin: '32px 0',
      },
    },
  },
})

const CreateDevelopmentInquiry = () => {
  const classes = useStyles()
  const {id} = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({...data, isDone: event.target.value === 'true' ? true : false})
  }
  const [data, setData] = useState<OrderProjectType>({
    projectName: '',
    governmentSupport: false,
    customerName: '',
    companyName: '',
    position: '',
    email: '',
    phone: '',
    platform: 'NOTHING',
    description: '',
  })

  useEffect(() => {
    if (id) {
      const getDetail = async () => {
        const data = await orderProjectApi.getDetail(Number(id))
        const orderProject: OrderProjectType = exportResults(data)
        setData({
          projectName: orderProject.projectName,
          governmentSupport: orderProject.governmentSupport,
          companyName: orderProject.companyName,
          customerName: orderProject.customerName,
          email: orderProject.email,
          phone: orderProject.phone,
          platform: orderProject.platform,
          position: orderProject.position,
          maximumBudget: orderProject.maximumBudget,
          description: orderProject.description,
          isDone: orderProject.isDone,
          estimatedCost: orderProject.estimatedCost,
          estimatedTime: orderProject.estimatedTime,
          planFile: orderProject.planFile,
          presenter: orderProject.presenter,
        })
      }
      getDetail()
    }
  }, [id])

  const handleOrderProject = () => {
    if (id) {
      dispatch(
        orderProjectAction.update({
          data: {
            ...data,
            orderId: Number(id),
          },
          history: navigate,
        })
      )
    }
  }
  return (
    <div className={classes.container_development_inquiry}>
      <div></div>
      <div>
        <p>?????? ??????</p>
        <div>
          <InputBase
            onChange={(e) => setData({...data, projectName: e})}
            placeholder='???????????????'
            label='???????????????'
            value={data?.projectName}
            disabled
          />
          <div style={{width: '32px'}}></div>

          <UploadFile file={data.planFile && JSON.parse(data.planFile)} />
        </div>
        <div style={{display: 'inherit'}}>
          <label htmlFor='textarea'>???????????? ?????? ??????</label>
          <br />
          <TextareaAutosize
            aria-label='minimum height'
            minRows={3}
            id='textarea'
            placeholder='???: ???????????? ????????? ????????? ?????? ?????????'
            onChange={(e) => setData({...data, description: e.target.value})}
            value={data.description}
            style={{
              width: '100%',
              paddingLeft: '10px',
              height: '144px',
              boxSizing: 'border-box',
            }}
            disabled
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, maximumBudget: e})}
            placeholder='?????? ??????'
            label='?????? ??????'
            type='number'
            value={data.maximumBudget}
            disabled
          />
        </div>
        <div>
          <InputBase
            onChange={() => console.log(11)}
            placeholder='???: ????????????????????? ?????????'
            label='?????????????????? ?????? ??????'
            disabled
          />
        </div>
        <FormControl>
          <p>?????? ?????????</p>
          <FormGroup style={{display: 'flex'}}>
            <FormControlLabel
              control={<Checkbox />}
              label='????????????(???????????????)'
              disabled
              checked={
                data.platform === 'MOBILE_APP' || data.platform === 'BOTH'
                  ? true
                  : false
              }
              onChange={() => {
                switch (data.platform) {
                  case 'NOTHING':
                    setData({...data, platform: 'MOBILE_APP'})
                    break
                  case 'BOTH': {
                    setData({...data, platform: 'WEB_APP'})
                    break
                  }
                  case 'WEB_APP': {
                    setData({...data, platform: 'BOTH'})
                    break
                  }
                  case 'MOBILE_APP': {
                    setData({...data, platform: 'NOTHING'})
                    break
                  }
                  default:
                    break
                }
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label='????????????'
              checked={
                data.platform === 'WEB_APP' || data.platform === 'BOTH'
                  ? true
                  : false
              }
              disabled
              onChange={() => {
                switch (data.platform) {
                  case 'NOTHING':
                    setData({...data, platform: 'WEB_APP'})
                    break
                  case 'BOTH': {
                    setData({...data, platform: 'MOBILE_APP'})
                    break
                  }
                  case 'WEB_APP': {
                    setData({...data, platform: 'NOTHING'})
                    break
                  }
                  case 'MOBILE_APP': {
                    setData({...data, platform: 'BOTH'})
                    break
                  }
                  default:
                    break
                }
              }}
            />
          </FormGroup>
        </FormControl>
        <div>
          <InputBase
            onChange={(e) => setData({...data, customerName: e})}
            value={data.customerName}
            placeholder='????????? ?????? ???????????????'
            label='??????'
            require
            disabled
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, companyName: e})}
            value={data.companyName}
            placeholder='???????????????'
            label='???????????? '
            disabled
          />
          <div style={{width: '32px'}}></div>
          <InputBase
            placeholder='????????? ???????????????'
            label='??????'
            onChange={(e) => setData({...data, position: e})}
            value={data.position}
            disabled
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, email: e})}
            value={data.email}
            placeholder='???????????? ???????????????'
            label='?????????'
            require
            disabled
            type='email'
          />
          <div style={{width: '32px'}}></div>
          <InputBase
            onChange={(e) => setData({...data, phone: e})}
            value={data.phone}
            placeholder='??????????????? ??????????????? '
            label='???????????????(???????????????)'
            require
            disabled
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, presenter: e})}
            value={data.presenter}
            placeholder='?????? ????????? '
            label='????????? ?????? ??????????????? ?????? ??? ??????'
            disabled
          />
        </div>
        <div
          style={{borderBottom: '1px dashed #000000', marginTop: '1.5rem'}}
        ></div>

        <div>
          <InputBase
            onChange={(e) => setData({...data, estimatedCost: Number(e)})}
            value={data.estimatedCost}
            placeholder='?????? ??????'
            label='?????? ??????'
            require
            type='number'
          />
          <div style={{width: '32px'}}></div>
          <InputBase
            onChange={(e) => setData({...data, estimatedTime: e})}
            value={data.estimatedTime}
            placeholder='????????????'
            label='????????????'
            require
            type='number'
          />
        </div>

        <FormControl>
          <p>???????????? </p>
          <RadioGroup
            name='isDone'
            value={!data.isDone ? 'false' : 'true'}
            onChange={handleChange}
            style={{display: 'flex', flexDirection: 'row'}}
          >
            <FormControlLabel
              value={'false'}
              control={<Radio />}
              label='?????????'
            />
            <FormControlLabel value={'true'} control={<Radio />} label='??????' />
          </RadioGroup>
        </FormControl>
        <div>
          <span>
            ?????? ??????:{' '}
            <span>{numberWithCommas(data.estimatedCost || 0)}???</span>
          </span>
          <span>
            ????????????: <span>{data.estimatedTime}??????</span>
          </span>
        </div>

        <Button
          variant='contained'
          color='primary'
          onClick={handleOrderProject}
        >
          ????????????
        </Button>
      </div>
    </div>
  )
}

export default CreateDevelopmentInquiry
