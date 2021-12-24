import React from "react";

function Modal() {
	return (
		<div className={show ? "modal display-block" : "modal display-none"}>
			<div className="modal__message">{addDeviceMessage}</div>
			<div className="modal__options">
				<button type="button" className="choice__button" onClick={hideModal}>
					No
				</button>
				<button type="button" className="choice__button" onClick={addDevice}>
					Yes
				</button>
			</div>
		</div>
	);
}

export default Modal;
