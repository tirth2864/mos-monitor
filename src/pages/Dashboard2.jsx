import React from 'react'
import Navbar from '../components/Navbar';
import  NftList  from '../components/NftList';

function Dashboard2() {
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="">
    <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-full">
            <div className="">
              <div className="p-3">
            <NftList />
            </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard2;