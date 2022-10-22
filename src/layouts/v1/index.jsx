import React, { Children } from 'react'
import NavbarTop from '../../components/Navbar';


const LayoutV1 = (props) => {
    const {children} = props;
  return (
    <div>
    <NavbarTop></NavbarTop>
    {children}
    </div>
  )
}

export default LayoutV1