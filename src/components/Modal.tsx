// @ts-nocheck
// import "../css/modal.css";

const handleAdd = () => console.log("damatebulia");
const handleClose = () => console.log("gauqmeba");

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modalContainer">
        <div>
          <label>please input dish name </label>
          <input type="text" name="name" id="dish-name" />
        </div>
        <div>
          <label>please input price </label>
          <input type="number" name="price" id="price" />
        </div>
        <div>
          <label>please input rating </label>
          <input type="number" name="rating" id="rating" />
        </div>
        <div>
          <label>please input image </label>
          <input type="file" />
        </div>
        <div>
          <label>please input ingredients </label>
          <input type="text" name="ingredients" id="ingredients" />
        </div>
        <div>
          <label>please input description </label>
          <input type="text" name="description" id="description" />
        </div>
        <button onClick={handleAdd}>add</button>
        <button onClick={onClose}>cancel</button>
      </div>
    </div>
  );
};

export default Modal;
