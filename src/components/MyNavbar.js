import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import logo from './images/logo.svg'
import './style.css';
import TextField from '@material-ui/core/TextField';

class MyNavbar extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                <div className="z-index">
                    <div className="nav-container py-2">
                        <div> <img src={logo} alt='' /></div>
                        <div className="text-container">
                            <Button className="buttons-nav-1 shadow-none" variant="transparent">Places to stay</Button>
                            <Button className="buttons-nav-1 shadow-none" variant="transparent">Experiences</Button>
                            <Button className="buttons-nav-1 shadow-none" variant="transparent">Online Experiences</Button>
                        </div>
                        {/* SEARCH  BAR FOR NAVBAR */}
                        {/* <div className="button-container">
                    <Button className="buttons-nav2" variant="light"> <p className='m-0 p-0 button-4 d-flex'><span className='pr-5 pt-1'> Start your search</span><i class="bi bi-search ml-5" style={{ fontSize: 18, color: "black" }}></i> </p>  </Button>{' '}
                </div> */}

                        <div className="buttons-container">
                            <Button className="buttons-nav shadow-none" style={{ fontWeight: "bolder", fontSize: "14px" }} variant="transparent">Become a Host</Button>{' '}
                            <Button className="buttons-nav shadow-none py-2" variant="transparent"><img className='world-png' src='https://th.bing.com/th/id/R.6157c239f55eeb078c87779e5c7d087e?rik=y%2fBBj%2fsWb98TmA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fa%2fj%2fP%2fe%2f7%2fu%2fwhite-globe-hi.png&ehk=sbWQDeUP%2fS9Mmxy00ZYRw3TfHJXZ6jvRCrVBR%2bSuhbw%3d&risl=&pid=ImgRaw&r=0' alt='' /></Button>{' '}
                            <Button className="buttons-nav1 shadow-none  ml-2 m-0 py-0 px-n5" variant="light"> <p className='m-0 p-0 button-3'><i class="bi bi-list mr-2" style={{ fontSize: 21, color: "black" }}></i> <i class="bi bi-person-circle" style={{ fontSize: 23, color: "black" }}></i></p>  </Button>{' '}
                        </div>
                    </div>
                </div>



                {/* <div className="logo-cont">
                <img className='navbar-logo-2' src={navbarLogo} alt=''></img>
            </div> */}
                <div className='main-form-cont'>
                    <div className='d-flex justify-content-between form-main-div'>
                        <div className='nav2-item py-3 pr-5 pl-4' onClick={() => { this.handleModal() }}>
                            <div>
                                <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Location</h6>
                                <p className='m-0 text-muted add-location-loc' style={{ fontSize: "14px" }}>Where are you going?</p></div>

                        </div>

                        <div className='vl-dic'>
                            <div className='vl'></div>
                        </div>

                        <div className='nav2-item py-3 pr-0 pl-4' onClick={() => { this.handleModal() }}>
                            <div >
                                <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Check in</h6>
                                <p className='m-0 text-muted add-dates-check-in' style={{ fontSize: "14px" }}>Add dates</p>
                            </div>
                        </div>

                        <div className='vl-dic'>
                            <div className='vl'></div>
                        </div>

                        <div className='nav2-item py-3 pr-0 pl-4' onClick={() => { this.handleModal() }}>
                            <div>
                                <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Check out</h6>
                                <p className='m-0 text-muted add-dates-check-out' style={{ fontSize: "14px" }}>Add dates</p>
                            </div>
                        </div>

                        <div className='vl-dic'>
                            <div className='vl'></div>
                        </div>

                        <div className='nav2-item nav2-item-search py-3 pr-5 pl-4' onClick={() => { this.handleModal() }} style={{ position: "relative" }}>
                            <div>
                                <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Guests</h6>
                                <p className="m-0"><span className='m-0 text-muted add-guests-guests' style={{ fontSize: "14px" }}>Add</span> <span className='span-guests-text text-muted' id='add-guests-navbar' style={{ fontSize: "14px" }}>guests</span></p>
                                {/* <p className='m-0 text-muted add-guests-guests' style={{ fontSize: "14px" }}>Add guests</p> */}
                            </div>

                            <i className="bi bi-search bi-search-nav"> </i>
                            {/* <span id='search-text' className='search-name-hide' style={{ color: "white" }}>Search</span> */}
                        </div>
                        {/* <div className='nav2-item nav2-item-search py-2 pr-5 pl-3'>
                    <i className="bi bi-search bi-search-nav"></i>
                </div> */}
                    </div >
                </div >
                <div className='nav-modal-div' >
                    <Modal style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)" }} show={this.state.show}>
                        <Modal.Dialog className='modal-navbar'>
                            <Modal.Header>
                                <Modal.Title style={{ color: "black" }}>Choose dates</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Have a great Holiday!</p>
                                <div className=" px-4 w-100">
                                    <div className="pt-3 d-flex justify-content-between">
                                        <TextField
                                            id="location"
                                            label="Location"
                                            type="text"
                                            placeholder='Where are you going?'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="add-guests"
                                            label="Guests"
                                            type="number"
                                            defaultValue="1"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div className="pt-3 d-flex justify-content-between">
                                        <TextField
                                            id="date-check-in"
                                            label="Check in"
                                            type="date"
                                            defaultValue="2022-01-01"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="date-check-out"
                                            label="Check out"
                                            type="date"
                                            defaultValue="2022-01-02"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                </div>
                            </Modal.Body>



                            <Modal.Footer>
                                <Button onClick={() => { this.handleModal() }} variant="secondary">Close</Button>
                                <Button variant="primary" onClick={() => {
                                    let locationText = document.querySelector(".add-location-loc")
                                    locationText.innerHTML = document.getElementById("location").value
                                    let checkInValue = document.getElementById("date-check-in").value
                                    let checkInText = document.querySelector(".add-dates-check-in")
                                    checkInText.innerHTML = checkInValue

                                    let checkOutValue = document.getElementById("date-check-out").value
                                    let checkOutText = document.querySelector(".add-dates-check-out")
                                    checkOutText.innerHTML = checkOutValue

                                    let guestsValue = document.getElementById("add-guests").value
                                    let guestsText = document.querySelector(".add-guests-guests")

                                    let removeClass = document.querySelector(".span-guests-text")
                                    removeClass.classList.remove("text-muted")
                                    let addStyle = document.getElementById("add-guests-navbar")
                                    addStyle.style.fontWeight = "700"

                                    guestsText.innerHTML = guestsValue


                                    this.handleModal()

                                }}>Save changes</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal>
                </div>


            </div >
        )
    }
}

// function MyNavbar() {
//     consturctor(){
//         super()
//         this.state = {
//             show: false
//         }
//     }

//     return (

//     )
// }

export default MyNavbar

