// Open Ticket.
function openTicket(elementId) {
    const ticketSection = document.getElementById(elementId);
    ticketSection.scrollIntoView();
}


let seatNumber = 0;

const buttonCollection = document.querySelectorAll('#seats button');

for (const button of buttonCollection) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = '#1DD100';
        button.style.color = 'white';

        // For show the selected seat name.
        const seatName = button.innerText;


        // For calculate the selected seat number.
        seatNumber += 1;

        // Seat limitation.
        if (seatNumber > 4) {
            alert("Please don't select more than 4 seats.");
            location.reload();
            return;
        }

        if (seatNumber >= 4) {
            const couponButton = document.getElementById('apply_coupon_button');
            couponButton.removeAttribute('disabled');
        }

        document.getElementById('selected_seat_number').innerText = seatNumber;


        // Show the left seats number.
        const leftSeatNumber = covertTextToNumberById('seat_left');
        const leftSeat = leftSeatNumber - 1;

        // limite the left seat number.
        if (leftSeat < 0) {
            alert('No seat left.');
            return;
        }
        document.getElementById('seat_left').innerText = leftSeat;


        // Show the selected seats information.
        const perSeatPrice = covertTextToNumberById('per_seat_price');

        const seatsInfoElement = document.getElementById('total_seat_info');

        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('justify-between');
        div.classList.add('py-4');

        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');

        span1.innerText = seatName;
        span2.innerText = 'Economy';
        span3.innerText = perSeatPrice;

        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);

        seatsInfoElement.appendChild(div);



        // Calculating total seats price.
        let totalSeatsPrice = covertTextToNumberById('total_seat_price');
        totalSeatsPrice = perSeatPrice * seatNumber;

        document.getElementById('total_seat_price').innerText = totalSeatsPrice;


        // Grand total price.
        let grandTotalSeatsPrice = covertTextToNumberById('grand_total_seat_price');
        grandTotalSeatsPrice = totalSeatsPrice;

        document.getElementById('grand_total_seat_price').innerText = grandTotalSeatsPrice;

        // After click diable the button.
        button.setAttribute("disabled", false);
    })
}

// Enable next button.
const phoneNumberField = document.getElementById('user_number');
phoneNumberField.addEventListener('keyup', function () {
    if (seatNumber === 0) {
        alert('Please at first select a seat.');
        phoneNumberField.value = '';
    }
    const phoneNumberValue = phoneNumberField.value;
    const lengthOfPhoneNumberValue = phoneNumberValue.length;

    if ((seatNumber >= 1) && (lengthOfPhoneNumberValue >= 1)) {
        const nextButton = document.getElementById('next_button');
        nextButton.removeAttribute("disabled");
    }
});


// Apply coupon.
document.getElementById('apply_coupon_button').addEventListener('click', function () {


    // Expected coupon.
    const new15 = document.getElementById('new15_coupon_code').innerText;

    const couple20 = document.getElementById('couple_20_coupon').innerText;

    // Givent Text.
    const givenText = document.getElementById('coupon_input_field').value;

    if (givenText === new15) {
        afterDiscount(15);
    }

    else if (givenText === couple20) {
        afterDiscount(20);
    }

    else {
        alert('Please give the valid coupon code.');
        document.getElementById('coupon_input_field').value = '';
    }
});