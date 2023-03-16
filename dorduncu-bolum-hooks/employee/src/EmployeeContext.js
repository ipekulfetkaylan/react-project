import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const EmployeeContext = createContext();

//fonksiyonları contextin içinde yazıyoruz. Burada yazmamızın sebebi sonrasında yapmak istediğimiz işlem için context içerisinden fonksiyonu çağıracağız

//provider içine childlar ile paylaşmak istediğimiz veriyi koyuyoruz
const EmployeeContextProvider = (props) =>{
    const [employees, setEmployees] =useState([
        //uuid paketi idlerin dinamik bir şekilde oluşturulmasını sağlar
        {id:uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
        {id:uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735'},
        {id:uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931'},
        {id:uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'}
    ])

    
    useEffect(()=>{
        const employees = localStorage.getItem('employees');
        setEmployees(JSON.parse(employees));
    },[])
    // useEffect setEmployees a bir çağrı yaptığı için sayfada sürekli bir güncellemeye yol açıyor bu yüzden ikinci parametre olarak [] verdik

    useEffect(() =>{
        localStorage.setItem('employees', JSON.stringify(employees));
    })


    
    // çalışanları burada da sıralyabiliriz. burada çalışanları daha göndermeden en başta sıralıyoruz. Sonra burada artık employees yerine sortedEmployees göndreceğiz
     const sortedEmployees = employees.sort((a,b)=>(a.name < b.name ? -1 : 1));
    

    //yeni çalışan eklemek için bu function ı yazdık
    const addEmployee = (name, email, address, phone) =>{
        setEmployees([...employees, {id: uuidv4(), name, email, address, phone}]) //yeni bir eleman eklemek demek statin değişmesi demektir
    }

    // seçili olan id ye ait olan çalışan bilgisini silmek istediğimiz için parametre olarak id aldık
    const deleteEmployee = (id)=>{
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    // employee düzenleme function. Çalışan bilsigini güncellemek için bize iki bilgi gerekli. 1- hangi çalışan bilgisini güncelleyeceğiz (id) 2- güncellenmiş bilgi
    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }
    //yapmak istediğimiz yeni çalışan bilgisini alıp employees arrayine yerleştirmek bunun için önce güncellenmiş bilgiyi bulmamız lazım bunun için id yi alıyoruz sonrada güncellenmiş çaşlışanı çalışan ile değiştiriyoruz. 




    
    return (
        <EmployeeContext.Provider  value = {{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}> 
        {/* contexten addEmployee yi export etmemizin sebebi EmployeeContext çağırdığımız yerde kullanabilmek. Yani formda addEmployee yi kullanabilmek için */}
            {props.children}
        </EmployeeContext.Provider>

    )
}
export default EmployeeContextProvider;
//bu veriyi employeListe göndermek istiyoruz  o yüzden App.js de EmployeeContextProvider ile EmployeeList i kapsamamız gerekiyor