import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { EmployeeContext } from '../EmployeeContext';

const EditForm = ({theEmployee})=>{

    const {updateEmployee} = useContext(EmployeeContext)
    const employee = theEmployee;
    const id = employee.id;
    
    const [name, SetName] = useState(employee.name);
    const [email, SetEmail] = useState(employee.email);
    const [phone, SetPhone] = useState(employee.phone);
    const [address, SetAddress] = useState(employee.address);

    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }
 

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-2'>
             {/* <Form.Control type="text" placeholder="Name *" requred value= {name} onChange= {e =>setName (e.target.value)} /> 1.yöntem */}
             <Form.Control type="text" placeholder="Name *" name="name" value={name} onChange={(e)=>SetName(e.target.value)} />
             {/* her bir form olayında aynı function çalşıyor. name vermemizin sebebi name ile value yi eşitlemek*/}
            </Form.Group>

            <Form.Group  className='mb-2'>
             {/* <Form.Control type="email" placeholder="Email *" requred value= {email} onChange= {e =>setEmail (e.target.value)}/> 1. Yöntem */}
             <Form.Control type="email" placeholder="Email *" name="email" value={email}     onChange={(e)=>SetEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group  className='mb-2'>
             {/* <Form.Control type="phone" placeholder="Phone *" requred value= {phone} onChange= {e =>setPhone (e.target.value)}/> 1. Yöntem*/}
             <Form.Control type="phone" placeholder="Phone *" name="phone" value={phone} onChange={(e)=>SetPhone(e.target.value)}/>
            </Form.Group>

            <Form.Group  className='mb-2'>
             {/* <Form.Control as="textarea" placeholder="Address" rows= {3} value= {address} onChange= {e =>setAddress (e.target.value)}/> 1.Yöntem */}
             <Form.Control as="textarea" placeholder="Address" rows= {3} name="address" value={address} onChange={(e)=>SetAddress(e.target.value)}/>
            </Form.Group>

            <Button className='w-100' variant="success" type="submit">
             Edit Employee
            </Button>
        </Form>
    )
}
export default EditForm;