import React from 'react'
import { Link } from 'react-router-dom'

function ViewContact() {
  return (
    <>
    <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row" >
            <div className="col">
              <h3>View Contact</h3>
            </div>
          </div>
        </div>
    </section>
    <section className="view-contact mt-3">

      <div className="container row align-items-center">
        <div className="col-md-4">

        <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" alt='icon' className="contact-img" ></img>

        </div>
        <div className="col-md-8">
          <ul className="list-group" >
              <li className="list-group-item">
                  Name : <span className="fw-bold">Rajas</span>
              </li>
              <li className="list-group-item">
                  Mobile : <span className="fw-bold">123456789</span>
              </li>
              <li className="list-group-item">
                  Email : <span className="fw-bold">Rajan@gmail.com</span>
              </li>
              <li className="list-group-item">
                  company : <span className="fw-bold">Rajan@gmail.com</span>
              </li>
              <li className="list-group-item">
                  title : <span className="fw-bold">Rajan@gmail.com</span>
              </li>
              <li className="list-group-item">
                  group : <span className="fw-bold">Rajan@gmail.com</span>
              </li>
          </ul>
        </div>
        
      </div>
      

      <div className="container row">
        <div className="col">
          <Link to={'/contacts/list'} className="btn btn-warning" >Back</Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default ViewContact