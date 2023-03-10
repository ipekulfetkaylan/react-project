import {useState, useContext, useEffect} from 'react'
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { EmployeeContext } from '../EmployeeContext';
import AddForm from './AddForm';
import Employee from "./Employee";
import Pagination from './Pagination';


const EmployeeList= ()=>{
  /*
    const [employees] =useState([
        {id:1, name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
        {id:2, name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735'},
        {id:3, name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931'},
        {id:4, name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731'},
        {id:5, name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'}
    ])
    //useState yapısından dolayı bir array dönecek. Bu array iki eleman alıyor 1- çalışanlara ait olan bilgi 2-çalışanlara ait olan bilgi de herhangi bir değişiklik olması durumunda kullanılacak olan function.
    //useState ile her bir child a veriyi props ile göndermek zorundaydık. Ancak context ile istediğimiz yerde veriyi consume edebiliyoruz bu yüzden bu veriyi EmployeeContext içinde useContext içine aldık
    */

    const {sortedEmployees}= useContext(EmployeeContext)
    //useContext direkt iletmek istediği veriyi alıyor EmployeeContext kendisini yazıyorız providerı değil peki neyi iletmek istiyor? employees bilgisini. destructing yöntemi ile employeesi alıyoruz

   
// modalın görünmesini bir state atadık. Modalın görünmesi ya da görünmemesi componentin durumuna bağlı. Model göründüğünde state değişecek modal kaybolduğunda state yeniden değişecek yani modalın gösterilip ya da gösterilmemesini bir state olarak tanımladık
    const [show, setShow]= useState(false);
    const [showAlert, setShowAlert] = useState(false);
    // const handleShowAlert = ()=> setShowAlert(true)
    const handleShowAlert = ()=>{
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert (false)
      }, 2000)
    }
    
    const handleClose= () => setShow(false)
    const handleShow= () => setShow(true)

//bir çalışan ekledikten sonra modalın kapanmasını sağlamak için useEffecti kullandık. useEffect uygulamada bir işlem bir değişikliğe tepki olarak cmponentin tekrar render edilmesidir. Bu render ilk işlemden sonra da olur her güncellemeden sonra da olabilir.  useEffect bir işlem yaparken yanın da başka bir işlem de yapıldığında (sideEffect) kullanılır daha çok. Eğer bir şart yazılmaz ise her işlemde çalışır biz her işlemde çalışmasını her zaman istemeyebiliriz. Sadece başlangıçta çalışmasını istiyorsak [] yazarız burada o yüzden [employees] i yazdık. Yani employees da bir değişiklik olduğunda çalış anlamına geliyor
    useEffect(()=>{
      handleClose();
//kapatma işleminden sonra alertin görünmesini istiyoruz bunun için callback funtiona ihticımız var bu da return. 
      return () => {

        handleShowAlert(false);
      }
    }, [sortedEmployees])


    const [currentPage, setCurrentPage]= useState(1); //başlangıç olarak 1. sayfadan başlamasını istiyoruz
    const [employeesPerPage]= useState(4); // sayfada kaç çalışan göstermek istiyorsak başlangıca o değeri veriyoruz

    const indexOfLastEmployee= currentPage * employeesPerPage; //son sayfayı o andaki sayfa ile sayfada gösterilen çalışan sayısını çarparak bukduk
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage; // ilk sayfayı da son sayfadan sayfada gösterilen çalışan sayısını çıkararak bulduk.
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee); //sayfada gösterilmesini istediğimiz çalışanları göstermek için her ne kadar bunu yukarı da 2 olarak belirtsek de normal çalışanlar içinden bu ikisi slice etmeli
    const totalPagesNum = Math.ceil(sortedEmployees.length /employeesPerPage)//toplam sayfa numarası da çalışanların sayfada göstrine bölerek bulduk

    
  


   


    return(
        
      <>
        <div className="table-title ">
        <div className="row">
          <div className="col-10">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div className="col-2">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="fa-sharp fa-solid fa-circle-plus"></i> <span>Add New Employee</span></Button>
          </div>
        </div>
      </div>
      {/* bu header alanını app js değil de employyeListte yapmamızın sebebi yeni bir çalışan bilgisi eklendiğinde employeeListte state bilgisi değişecek bu state bilgisi değiştiği zaman useState hookunu kullanacağız modalın kapanmasını sağlamak için state bilgisini buarada kullandığımız için burada yapmamız daha doğru */}

      <Alert show= {showAlert} variant="success">
      Employee List Successfully Updated
      </Alert>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {/* <Employee employees={employees}></Employee> */}
               {/* props yardımı ile bilgiyi employee componentine gönderebiliriz. İlk olarak employees i burdan alıp Employee de çağırmıştık ancak kodun daha okunabilir olması için map ile burada yazdık*/}
               {
                // eklenen çalışanlar sıralı bir şekilde gelmiyor sıralamak için 1. yöntem sort().localeCompare metodunu kullanabiliriz örn:employees.sort((a,b)=>a.name.localeCompare(b.name)).map  2.yöntem ise direkt sort kullanmak

                currentEmployees.map(employee => (
                  <tr key={employee.id}>
                    <Employee employee={employee}></Employee>
                  </tr>
                ))
               }
            </tbody>
        </table>
        <Pagination 
            pages = {totalPagesNum} 
            setCurrentPage  =   {setCurrentPage}
            currentEmployees = {currentEmployees} 
            sortedEmployees = {sortedEmployees}
            />

        <Modal show= {show} onHide= {handleClose}>
          <Modal.Header >
            <Modal.Title>Add Nem Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary" >
              Close Modal
            </Button>
          </Modal.Footer>
      </Modal>
      </>
        
    )
}
export default EmployeeList;