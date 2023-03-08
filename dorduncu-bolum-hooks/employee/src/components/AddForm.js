import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { EmployeeContext } from '../EmployeeContext';

const AddForm = ()=>{
    const {addEmployee} = useContext(EmployeeContext)

    //bu formu aktif hale getirmek için 2 yöntem var. 1- bu formda bulunan her bir input alanını state olarak düşünebiliriz ve bu state te olan değişiklikler üzerinden ilerleyebiliriz. 2- form çalıştıktan sonra oluşan yeni çalışan bilgisini state olarak düşünebiliriz ve onun üzerinden ilerleyebiliriz

    /* 1. YÖNTEM her bir inputu ayrı bir state olarak olarak alıyoruz. Bu ne demek her alana tıklanğında o anki state durumunun değişmesi demek. Bu input alanlarında olan değişikliği nerede görmek istiyorsak oraya değişikliği algılayan function yazıyoruz onChange= {e =>setName (e.target.value)} gibi. Yani set metodu ile yeni bir değer atıyoruz

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [address, setAddress]= useState("");

    */

    // 2.Yöntem burada tüm form elemanları bir satatin içinde
   const [newEmployee, setNewEmployee] = useState ({
    name:"", email:"", phone:"", address:""
   })

   const {name, email, phone, address} = newEmployee

   const onInputChange = (e)=>{
    setNewEmployee({...newEmployee, [e.target.name]: e.target.value});
    //herhangi bir değişiklik olduğunda setNewEmployee çalışacak bu ilk olarak varsayılan durumu alıyor. target.name özelliğini target.value dan alacak
   }

   const handleSubmit = (e)=>{
    e.preventDefault();
    addEmployee(name, email, phone, address)
   }


    return(
        <Form onSubmit= {handleSubmit}>
            <Form.Group className='mb-2'>
             {/* <Form.Control type="text" placeholder="Name *" requred value= {name} onChange= {e =>setName (e.target.value)} /> 1.yöntem */}
             <Form.Control type="text" placeholder="Name *" requred name="name" value= {name} onChange= {e => onInputChange(e)} />
             {/* her bir form olayında aynı function çalşıyor. name vermemizin sebebi name ile value yi eşitlemek*/}
            </Form.Group>

            <Form.Group  className='mb-2'>
             {/* <Form.Control type="email" placeholder="Email *" requred value= {email} onChange= {e =>setEmail (e.target.value)}/> 1. Yöntem */}
             <Form.Control type="email" placeholder="Email *" requred name="email" value= {email} onChange= {e => onInputChange(e)}/>
            </Form.Group>

            <Form.Group  className='mb-2'>
             {/* <Form.Control type="phone" placeholder="Phone *" requred value= {phone} onChange= {e =>setPhone (e.target.value)}/> 1. Yöntem*/}
             <Form.Control type="phone" placeholder="Phone *" requred name="phone" value= {phone} onChange= {e => onInputChange(e)}/>
            </Form.Group>

            <Form.Group  className='mb-2'>
             {/* <Form.Control as="textarea" placeholder="Address" rows= {3} value= {address} onChange= {e =>setAddress (e.target.value)}/> 1.Yöntem */}
             <Form.Control as="textarea" placeholder="Address" rows= {3} name="address" value= {address} onChange= {e => onInputChange(e)}/>
            </Form.Group>

            <Button className='w-100' variant="success" type="submit">
             Add Employee
            </Button>
        </Form>
    )
}
export default AddForm;