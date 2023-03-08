import { useContext, useState,useEffect} from 'react';
import { EmployeeContext } from '../EmployeeContext';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';

const Employee= ({employee})=>{

    const {deleteEmployee} = useContext(EmployeeContext)

    const [show, setShow]= useState(false);
    const handleClose= () => setShow(false)
    const handleShow= () => setShow(true)
    
    useEffect(()=>{
        handleClose();
      }, [employee])

    //object destruction yöntemi ile employees i yakalıyoruz
    return(
        
       <>
       
       {/* {
        useStatten aldığımız veriyi ekranda gösterebilmek için map metodundan geçirmemiz gerek. Bilgiyi daha önceden EmployeeList componentinden alıp props ile burada çekmiştik ancak kodun daha okunabilir olması ve ve bir employeenin düzenlenmesini sağlamak için EmployeeListte tuttmak daha doğru olduğu için direkt olarak EmployeeList componentinde map ile döndük
            employees.map((employee) => (
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phone}</td>
                    <td>
                        <button  className="btn text-warning btn-act" data-toggle="modal"><i className="fa-solid fa-pencil"></i></button>
                        
                        <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="fa-solid fa-trash"></i></button>
                    </td>
                </tr>

            ))
        } */}
        


        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
        <td>
            <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="fa-solid fa-pencil"></i></button>
            
            <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="fa-solid fa-trash"></i> 
            </button>
        </td>
        <Modal show={show} onHide= {handleClose}>
            <Modal.Header >
                <Modal.Title>Update Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm theEmployee = {employee}/>
                {/* theEmployee propsunu yazmamızın sebebi editForm aracılığıyla eidtForma göndermek. propsta yakaldığımız hangi çalışanın üstüne bastığımızı yakalamak için employee bilgisini gönderiyoruz */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} >
                Close Modal
                </Button>
            </Modal.Footer>
         </Modal>
         {/* her bir edit modalı farklı bilgiler içereceği için modalı EmployeeListte değil de Employee componentinde oluşturduk */}



       </>
    )
}
export default Employee;