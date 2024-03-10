function buyTickets() {
    openTicket();
}


let seatNumber = 0;

const buttonCollection = document.querySelectorAll('#seats button');

for (const button of buttonCollection) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = '#1DD100';
        button.style.color = 'white';

        // For show the selected seat name.
        const seatName = button.innerText


        // For calculate the selected seat number.
        seatNumber += 1;
        document.getElementById('selected_seat_number').innerText = seatNumber;


        // Show the left seats number.
        const leftSeatNumber = covertTextToNumberById('seat_left');
        const leftSeat = leftSeatNumber - 1;
        document.getElementById('seat_left').innerText = leftSeat;




        // Show the Selected seats Information.
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
    })
}



// Apply coupon.
document.getElementById('apply_coupon_button').addEventListener('click', function () {


    // Expected coupon.
    const new15 = document.getElementById('new15_coupon_code').innerText;

    const couple20 = document.getElementById('couple_20_coupon').innerText;

    // Givent Text.
    const givenText = document.getElementById('coupon_input_field').value;

    if (givenText === new15) {
        priceAfterDiscount(15);
    }

    else if (givenText === couple20) {
        priceAfterDiscount(20);
    }
})