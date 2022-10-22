import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ModalShow from '../../components/Modal';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ModalDelete from '../../components/ModalDelete';
import { dataBooks } from '../../data/book';

const Detail = () => {
    const {id} = useParams();
    const [book] = useState( dataBooks[id-1]);
 
   
  return (
    <div>
        <img style={{width: "100vw", height: "50vh"}} src={book.image} alt="" />
        <div className="d-flex position-absolute top-0 end-0 me-3 mt-3 "> 
       <ModalShow dataAlert="Succesfuly Edit Data" className="text-light fs-3 fw-bold me-5" buttonName="Edit" modalTitle="Edit Data"></ModalShow>
       <ModalDelete  className="text-light fs-3 fw-bold" buttonName="Delete" modalTitle="Delete Data" desc="berhasil hapus data"></ModalDelete>
       </div>
       <Link className='fs-1 fw-bold text-decoration-none text-light position-absolute top-0 start-0 ms-3 mt-3'  to="/"><BsFillArrowLeftCircleFill /></Link>
      
    </div>
  )
}

export default Detail