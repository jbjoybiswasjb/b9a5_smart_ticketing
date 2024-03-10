// Open Ticket.
function openTicket(elementId) {
    const ticketSection = document.getElementById(elementId);
    ticketSection.scrollIntoView();
}

// For covert element inner text to number.
function covertTextToNumberById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);
    return elementNumber;
}

// Price after discount.
function priceAfterDiscount(percentageOfDiscount) {
    const perSeatPrice = covertTextToNumberById('per_seat_price');
    let totalSeatsPrice = covertTextToNumberById('total_seat_price');

    totalSeatsPrice = perSeatPrice * seatNumber;

    const coupon15Price = (totalSeatsPrice / 100) * percentageOfDiscount;

    const grandTotalSeatsPrice = totalSeatsPrice - coupon15Price;

    document.getElementById('grand_total_seat_price').innerText = grandTotalSeatsPrice;
}