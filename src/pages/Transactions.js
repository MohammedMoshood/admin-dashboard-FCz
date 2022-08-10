import React , {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'


const Transactions = () => {
  const [isOpen, setIsOpen] =useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle = {toggle}></Sidebar>
    <Navbar toggle={toggle}></Navbar>
    <h1>transactions</h1>
        </>
  )
}

export default Transactions