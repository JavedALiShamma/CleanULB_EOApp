import CustomNavbar from "../TopNavbaar";
import WorkStatusPieChart from "../WorkStatusPieChart ";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bin from "../../assets/icons/bin.png"
import {useState} from "react"
const BinsArea = () => {
    const [show,setShow] = useState(false);
    return (
        <>
        <h3 style={{fontSize:"2rem",fontStyle:`popins,"serif`}} className="text-center my-2 text-success">Bins  Progress</h3>
        <div className="bg-light d-flex justify-content-center align-items-start p-2">
      <WorkStatusPieChart done={65} remaining={35} />
    </div>
        <div className="w-100 p-2 d-flex justify-content-center align-items-center gap-2">
        <div className="w-100 d-flex align-items-center gap-2">
                        <p className="m-1 p-1 font-weight-bold text-danger">Select the category to choose</p>
                    <select  className="form-select w-25" aria-label="Default select example">
                      <option value="all" >All</option>
                      <option value="clean">Clean</option>
                      <option value="Unclean">Unclean</option>
                      
                    </select> 
                    </div>        
        </div>
        <div className="w-100 p-2">
            {show && <div className={styles.popupArea}> 
            <div id={styles.popUp} className="w-auto p-5 m-auto">
        <h2 className="text-primary">Photos of today before and after</h2>
        <div className="width bg-white border p-2 d-flex flex-column">
            <div className="w-100 d-flex flex-column">
                <p className="text-primary text-center">Before</p>
                <img src="https://media.istockphoto.com/id/916291672/photo/indian-women-cleaning-road-in-the-street.jpg?s=612x612&w=0&k=20&c=qWEwLDOVEjpQsZz5m3R6jviuJz6Z8FB7QXR3av2K9vc=" alt="" className="w-100 h-50" />
            </div>
            <div className="w-100">
                <p className="text-primary text-center">After</p>
                <img src="https://img.freepik.com/premium-photo/clean-road-central-delhi-india_271326-323.jpg" className="w-100 h-50" alt="" />
            </div>
        </div>
        <button onClick={(()=>(setShow(!show)))} type="button"className="btn btn-primary m-1 px-3 py-2 w-25">Close</button>
    </div>
                </div>}<div className="w-100 border border rounded d-flex justify-content-center align-items-center gap-1">
                <img className="w-25" src={bin} alt="" />
                <div className="w-50 flex-wrap text-center">
                    <h5 className="text-wrap text-center">Address</h5>
                    <p className="text-wrap text-center">123 Main St,sasasa Anytown, USA</p>
                    <p className="badge bg-danger">BIN ID: 80045214</p>
                </div>
                <div className="w-25 d-flex flex-column gap-2 p-2">
                    <button className="btn btn-success">Clean</button>
                    <button onClick={()=>setShow(!show)} className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
        </>
    )
}   

export default BinsArea;
