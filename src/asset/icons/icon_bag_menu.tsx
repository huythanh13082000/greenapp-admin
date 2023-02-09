import React from 'react'

const IconBagMenu = (props: {color?: string}) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.8337 5.41668H13.3337V4.58334C13.3337 3.9203 13.0703 3.28442 12.6014 2.81558C12.1326 2.34674 11.4967 2.08334 10.8337 2.08334H9.16699C8.50395 2.08334 7.86807 2.34674 7.39923 2.81558C6.93038 3.28442 6.66699 3.9203 6.66699 4.58334V5.41668H4.16699C3.50395 5.41668 2.86807 5.68007 2.39923 6.14891C1.93038 6.61775 1.66699 7.25364 1.66699 7.91668V15.4167C1.66699 16.0797 1.93038 16.7156 2.39923 17.1844C2.86807 17.6533 3.50395 17.9167 4.16699 17.9167H15.8337C16.4967 17.9167 17.1326 17.6533 17.6014 17.1844C18.0703 16.7156 18.3337 16.0797 18.3337 15.4167V7.91668C18.3337 7.25364 18.0703 6.61775 17.6014 6.14891C17.1326 5.68007 16.4967 5.41668 15.8337 5.41668ZM8.33366 4.58334C8.33366 4.36233 8.42146 4.15037 8.57774 3.99409C8.73402 3.83781 8.94598 3.75001 9.16699 3.75001H10.8337C11.0547 3.75001 11.2666 3.83781 11.4229 3.99409C11.5792 4.15037 11.667 4.36233 11.667 4.58334V5.41668H8.33366V4.58334ZM16.667 15.4167C16.667 15.6377 16.5792 15.8497 16.4229 16.0059C16.2666 16.1622 16.0547 16.25 15.8337 16.25H4.16699C3.94598 16.25 3.73402 16.1622 3.57774 16.0059C3.42146 15.8497 3.33366 15.6377 3.33366 15.4167V10.8333C5.45554 11.6751 7.71757 12.1077 10.0003 12.1083C12.283 12.1069 14.5449 11.6744 16.667 10.8333V15.4167ZM16.667 9.00834C14.5657 9.93149 12.2955 10.4082 10.0003 10.4082C7.70515 10.4082 5.435 9.93149 3.33366 9.00834V7.91668C3.33366 7.69566 3.42146 7.4837 3.57774 7.32742C3.73402 7.17114 3.94598 7.08334 4.16699 7.08334H15.8337C16.0547 7.08334 16.2666 7.17114 16.4229 7.32742C16.5792 7.4837 16.667 7.69566 16.667 7.91668V9.00834Z'
        fill={props.color ? props.color : '#4D4D4D'}
      />
    </svg>
  )
}

export default IconBagMenu