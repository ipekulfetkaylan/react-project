import'./Form.css'

function Form ({children}){
    return <form className="formWrap">{children}</form>
}
//chilren prop vermemizin sebebi form içine yazdığımız elemanları alabilmek aksi halde form içine yazılan elemanları görüntüleyemiyoruz formun childrenlerı oarak düşün.

export default Form;