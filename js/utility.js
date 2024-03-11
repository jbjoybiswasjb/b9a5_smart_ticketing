// For covert element inner text to number.
function covertTextToNumberById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);
    return elementNumber;
}

// Price after discount.
function afterDiscount(percentageOfDiscount) {
    const perSeatPrice = covertTextToNumberById('per_seat_price');
    let totalSeatsPrice = covertTextToNumberById('total_seat_price');

    totalSeatsPrice = perSeatPrice * seatNumber;

    const coupon15Price = (totalSeatsPrice / 100) * percentageOfDiscount;

    const grandTotalSeatsPrice = totalSeatsPrice - coupon15Price;

    document.getElementById('grand_total_seat_price').innerText = grandTotalSeatsPrice;

    document.getElementById('coupon_code_area').classList.add('hidden');

    
    const discountPriceArea = document.getElementById('discount_price_area');

    const span1 = document.createElement('span');
    const p = document.createElement('p');
    const span2 = document.createElement('span');

    span1.innerText = 'Dicount Price';
    p.innerText = 'BDT ';
    span2.innerText = coupon15Price;

    discountPriceArea.appendChild(span1);
    discountPriceArea.appendChild(p);
    p.appendChild(span2);

    discountPriceArea.classList.add('flex', 'justify-between', 'text-base', 'text-commonHeadingColor', 'inter-medium', 'py-4');
}