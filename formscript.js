function validateForm() {
    // Get form input values
    let fullName = document.getElementById('fullName')?.value.trim() || '';
    let icNumber = document.getElementById('icNumber')?.value.trim() || '';
    let studentId = document.getElementById('studentId')?.value.trim() || '';
    let faculty = document.getElementById('faculty')?.value || '';
    let courseCode = document.getElementById('courseCode')?.value.trim() || '';
    let gender = document.querySelector('input[name="gender"]:checked');
    let semester = document.getElementById('semester')?.value || '';
    let session = document.getElementById('session')?.value.trim() || '';
    let state = document.getElementById('state')?.value || '';
    let bankAccount = document.getElementById('bankAccount')?.value.trim() || '';
    let phone = document.getElementById('phone')?.value.trim() || '';

    console.log('Validating:', { fullName, icNumber, studentId, faculty, courseCode, gender, semester, session, state, bankAccount, phone });

    // Validation checks
    if (!fullName || !icNumber || !studentId || faculty === "-- Sila Pilih --" || !courseCode || !gender || 
        semester === "-- Sila Pilih --" || !session || state === "-- Sila Pilih --" || 
        !bankAccount || !phone) {
        alert('Error: Sila isi semua ruangan yang diperlukan.');
        return false;
    }

    // IC Number validation (12 digits)
    if (!/^\d{12}$/.test(icNumber)) {
        alert('Error: Sila masukkan nombor kad pengenalan yang sah (12 digit).');
        return false;
    }

    // Phone number validation (10-11 digits)
    if (!/^\d{10,11}$/.test(phone)) {
        alert('Error: Sila masukkan nombor telefon yang sah (10-11 digit).');
        return false;
    }

    // If all validations pass, redirect to pengesahan.html with query parameters
    const params = new URLSearchParams({
        fullName, icNumber, studentId, faculty, courseCode,
        gender: gender.value, semester, session, state, bankAccount, phone
    }).toString();
    window.location.href = `pengesahan.html?${params}`;
    return false; // Prevent default form submission
}

// Add event listener to form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('zakatForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });
    } else {
        console.error('Tiada elemen borang ditemui dalam dokumen.');
    }
});