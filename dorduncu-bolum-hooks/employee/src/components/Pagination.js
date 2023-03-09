import { useEffect, useState } from "react";

//EmployeeList componentinde verdiğimiz propları burada yakaladık. burada useEffect yazacağız çünkü tıklandığı anda sayfadaki çalışanlar değişecek
const Pagination = ({totalPages, setCurrentPage, currenEmployees, sortedEmployees}) =>{

    const numOfPages= [];
    for(let i=1; i< totalPages; i++){
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() =>{
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])

    return(
        <div className="clearfix">
        <div className="hint-text">Showing <b>{currenEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries </div>
        <ul className="pagination">
            {/* tıkladıkça bir öncekine gitmesini sağlayacak */}
            <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
                onClick={() => setCurrentButton((prev)=> prev === 1 ? prev : prev -1 )}
                >Previous</a></li>

                {
                   numOfPages.map((page, index) => {
                    return(
                        <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}>
                            <a href="#!" className="page-link" onClick={() => setCurrentButton(page)}>{page}</a>
                        </li> 
                    )
                   })
                }


            {/* tıkladıkça bir ileri gitmesini sağlayacak */}
            <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
                onClick={() => setCurrentButton((prev)=> prev === numOfPages.length ? prev : prev + 1 )}
                >Next</a></li>
              

        </ul>
    </div>
    )
    
}

export default Pagination;