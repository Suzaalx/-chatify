import React from "react";

export default function Modal({children, isOpen,onClose}) {
    if (!isOpen) return null;
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    )
}