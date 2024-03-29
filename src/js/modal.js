function openModal(modalId, overlayId){
    document.getElementById(modalId).style.display = 'flex';
    document.getElementById(overlayId).style.display = 'flex';
    document.querySelector('body').style.overflow = "hidden";
}

function closeModal(modalId, overlayId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById(overlayId).style.display = 'none';
    document.querySelector('body').style.overflow = "auto";
}

function closeSecondaryModal(modalId, overlayId){
    document.getElementById(modalId).style.display = 'none';
    document.getElementById(overlayId).style.display = 'none';
}

function closeOpenModal(modalId, overlayId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById(overlayId).style.display = 'none';
    var openModal = modalId + 'apply';
    var openOverlay = overlayId + 'apply';
    document.getElementById(openModal).style.display = 'flex';
    document.getElementById(openOverlay).style.display = 'flex';
}
