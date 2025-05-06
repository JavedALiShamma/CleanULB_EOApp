import { useState } from "react";
import { Navbar, Nav, Button, Dropdown, Offcanvas } from "react-bootstrap";
import { Menu, User, LogOut } from "lucide-react";
import cleanCityNoBG from "../assets/icons/cleanCityNoBG.png"
import MessageCard from "./cards/Message.card";
import { useNavigate } from "react-router-dom";
function CustomNavbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handClick = (e) => {
    console.log(e.target.id);
    if(e.target.id === "home"){
      setShow(false);
      navigate("/dashboard");
    }
    if(e.target.id === "wards"){
      setShow(false);
      navigate({
        pathname: "/dashboard/wards",
      });
    }
    if(e.target.id === "bins"){
      setShow(false);
      navigate({
        pathname: "/dashboard/bins",
      });
    }
    if(e.target.id === "auto-tipper"){
      setShow(false);
      navigate({
        pathname: "/dashboard/tippers",
      });
    }
    if(e.target.id === "profile"){
      setShow(false);
      navigate({
        pathname: "/dashboard/profile",
      });
    }
  }
  const navBarStyle={
      // background: "#51AE36",
      background: "linear-gradient(90deg,rgba(81, 174, 54, 0.85) 0%, rgba(123, 203, 41, 0.88) 50%)",fontSize:"1.2rem"

  }
  return (
    <>
      <Navbar style={{ backgroundColor: "white" }} expand={false} className="shadow-sm px-3 d-flex justify-content-between">
        <Button variant="link" className="text-dark" onClick={() => setShow(true)}>
          <Menu size={24} />
        </Button>
        <Navbar.Brand href="/dashboard" >
          <div className="h-100 w-100">
            
          <img className ="" style={{width:"4rem",height:"100%"}} src={cleanCityNoBG} alt="" />
          </div>
          </Navbar.Brand>
        <Dropdown align="end">
          <Dropdown.Toggle as={Button} variant="light" className="border-0">
            <User size={24} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item > My Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Logging out...")}> <LogOut size={16} className="me-2" /> Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      
      {/* Sidebar Menu */}
      <Offcanvas style={{width:"20rem"}} show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Executive Officer</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={handClick} id="home" style={navBarStyle} className="w-100 border text-white my-1 rounded p-2"   href="#">Home</Nav.Link>
            <Nav.Link onClick={handClick} id="wards" style={navBarStyle} className="w-100 border text-white my-1 rounded p-2" href="#">Wards Cleaning</Nav.Link>
            <Nav.Link onClick={handClick} id="bins" style={navBarStyle} className="w-100 border text-white my-1 rounded p-2" href="#">Bins Cleaned</Nav.Link>

          </Nav>
          <div style={{
           border:"2px solid #4E9C91"
          }} className="w-100 d-flex my-2 justify-content-center align-items-center rounded-3 p-2">
            <div className="w-100">
              <h3 style={{fontFamily:`"poppins" , serif`,color:"#4E9C91"}}>Executive Officer can send a message to the citizens & the Officials </h3>
              <div className="w-100 d-flex gap-2">
                <button className="btn btn-warning text-dark fw-semibold shadow-sm ">Message Citizens</button>
                <button className="btn btn-info text-black fw-semibold shadow-sm">Message Officials</button>
              </div>
            </div>
          </div>  
          <Nav className="flex-column">
            <Nav.Link onClick={handClick} id="auto-tipper" style={navBarStyle} className="w-100 border text-white my-1 rounded p-2">Auto-Tippers</Nav.Link>
            <Nav.Link  style={navBarStyle} className="w-100 border text-white my-1 rounded p-2">Zones</Nav.Link>
            <Nav.Link onClick={handClick} id="profile" style={navBarStyle} className="w-100 border text-white my-1 rounded p-2">Profile</Nav.Link>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default CustomNavbar;