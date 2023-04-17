import React from 'react'

const checkout = () => {
  return (
    <div >
      <img src="data:image/jpeg;base64,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"className='checkoutpage' alt="checkout page" />
      <h1 className='ctext'>Your order placed Successfully</h1>
    </div>
  )
}

export default checkout
