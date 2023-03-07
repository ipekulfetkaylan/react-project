import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const AddForm = ()=>{
    return(
        <Form>
            <Form.Group className='mb-2'>
             <Form.Control type="text" placeholder="Name *" requred />
            </Form.Group>

            <Form.Group  className='mb-2'>
             <Form.Control type="email" placeholder="Email *" requred />
            </Form.Group>

            <Form.Group  className='mb-2'>
             <Form.Control type="phone" placeholder="Phone *" requred />
            </Form.Group>

            <Form.Group  className='mb-2'>
             <Form.Control as="textarea" placeholder="Address" rows= {3} />
            </Form.Group>
            
            <Button className='w-100' variant="success" type="submit">
             Add Employee
            </Button>
        </Form>
    )
}
export default AddForm;