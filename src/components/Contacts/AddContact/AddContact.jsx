import React from 'react'
import { Link } from 'react-router-dom'

function AddContact() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row" >
              <div className="col-md-12 p-3">
                <h3>Create contact</h3>
              </div>
          </div>
          <div className="row">
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
                  </select>
                </div>
                <div className="mb-2">
                  <input type="text" className="btn btn-success" value="Create" />
                  <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddContact