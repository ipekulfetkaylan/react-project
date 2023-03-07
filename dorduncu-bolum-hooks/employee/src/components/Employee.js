const Employee= ({employees})=>{
    //object destruction yöntemi ile employees i yakalıyoruz
    return(
        
       <>
       
       {
         // useStatten aldığımız veriyi ekranda gösterebilmek için map metodundan geçirmemiz gerek
            employees.map((employee) => (
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phone}</td>
                    <td>
                        <button  className="btn text-warning btn-act" data-toggle="modal"><i className="fa-solid fa-pencil"></i></button>
                        
                        <button className="btn text-danger btn-act" data-toggle="modal"><i className="fa-solid fa-trash"></i></button>
                    </td>
                </tr>

            ))
        }
       </>
    )
}
export default Employee;