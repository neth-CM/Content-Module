function openModal(modalId, overlayId){
    document.getElementById(modalId).style.display = 'flex';
    document.getElementById(overlayId).style.display = 'flex';
}

function closeModal(modalId, overlayId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById(overlayId).style.display = 'none';
}

function openSuccessModal(modalId, overlayId){
    document.getElementById(modalId).style.display = 'flex';
    document.getElementById(overlayId).style.display = 'flex';
}


function closeOpenModal(modalId, overlayId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById(overlayId).style.display = 'none';
    var openModal = modalId + 'apply';
    var openOverlay = overlayId + 'apply';
    document.getElementById(openModal).style.display = 'flex';
    document.getElementById(openOverlay).style.display = 'flex';
}
