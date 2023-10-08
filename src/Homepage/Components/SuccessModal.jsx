

export default function SuccessModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Thanks for submitting!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
