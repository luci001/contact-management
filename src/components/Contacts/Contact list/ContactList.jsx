import React, { useEffect} from 'react'
import { useState } from 'react'
import './ContactList.css'
import { Link } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService'

function ContactList() {




  return (
    <>

        <section className="contact-search p-3">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Phone Directory
                                <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle"></i> New </Link>
                            </p>
                            <p className="fst-italic">Welcome to your phone directory, where you can create, update and delete contacts :)</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                                <div className="col">
                                <div className="mb-2">
                                    <input className="form-control" type="text" placeholder="Search names"></input>
                                </div>
                                </div>
                                <div className="col">
                                <div className="mb-2">
                                    <input className="btn btn-outline-dark" type="submit" value="Search names"></input>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>












        <section className="contact-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center d-flex justify-content-around">
                                <div className="col-md-4">
                                    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" alt='icon' className="contact-img" ></img>
                                </div>
                                <div className="col-md-7">
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
                                    </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                    <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1" >
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1" >
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <button  className="btn btn-danger my-1" >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center d-flex justify-content-around">
                                <div className="col-md-4">
                                    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" alt='icon' className="contact-img" ></img>
                                </div>
                                <div className="col-md-7">
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
                                    </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                    <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1" >
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1" >
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <button  className="btn btn-danger my-1" >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactList