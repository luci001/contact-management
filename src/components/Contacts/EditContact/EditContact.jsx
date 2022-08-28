import React from 'react'
import { Link } from 'react-router-dom'


function EditContact() {
  return (
    <>
    <section>
      <div className="container">
        <div className="row" >
            <div className="col-md-12 p-3">
              <h3>Edit contact</h3>
            </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-md-4">
            <form>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Photo Url" />
              </div>
              <div className="mb-2">
                <input type="number" className="form-control" placeholder="Mobile" />
              </div>
              <div className="mb-2">
                <input type="email" className="form-control" placeholder="email" />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Company" />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="mb-2">
                <select className="form-control" >
                  <option value="">Select a group</option>
                  <option value="">Family</option>
                  <option value="">Friends</option>
                  <option value="">Colleague</option>
                </select>
              </div>
              <div className="mb-2">
                <input type="text" className="btn btn-success" value="Update" />
                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
              </div>
            </form>
          </div>
          <div className="col-md-6">
          <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" alt='icon' className="contact-img" ></img>

          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default EditContact