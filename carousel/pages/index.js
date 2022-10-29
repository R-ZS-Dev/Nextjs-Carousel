import React from 'react'

const index = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"></link>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

    <div id="demo" className="carousel slide mt-0" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='w-100' src="./slide1.jpg"></img>
                    </div>
                    <div className="carousel-item">
                        <img className='w-100' src="./slide2.jpg"></img>
                    </div>
                    <div className="carousel-item">
                        <img className='w-100' src="./slide3.jpg"></img>
                    </div>
                    <div className="carousel-item">
                        <img className='w-100' src="./slide4.jpg"></img>
                    </div>
                </div>
            </div>
    </>
  )
}

export default index