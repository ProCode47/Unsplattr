
const Modal = ({ closeModal, info }) => {

  return (
    <>
     <div className="modal">
        <i className="fas fa-times" onClick={()=>{closeModal()}}></i>
      <div className="card card-sm">
       <div className="card-img"><img src={`${info.image}&fit=crop&w=800&h=400`} alt="opo"/></div> 
       <div className="text"><h2> {info.name}</h2>
        <h4> {info.location}</h4></div> 
      </div>
    </div>
    </>
  );
}

export default Modal;
