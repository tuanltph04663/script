$(function () {

    const smallPrice = '3.19$';
    const mediumPrice = '4.34$';
    const largePrice = '5.22$';

    $('.product__option').find('select').on('change', function () {
        // get selected option
        const selectedOption = $(this).find('option:selected').val();

        // get price
        const productPrice = $(this).closest('.product').find('.product--price');

        const price = calculatorPrice(selectedOption);

        // change price
        productPrice.text(price);
    })

    // convert price: 3.19$ to 3.19
    function getPrice(i) {
        let o = i.slice(0, i.length - 1);
        return o;
    }

    function calculatorPrice(option) {
        if (option == 1) {
            return smallPrice;
        } else if (option == 2) {
            return mediumPrice;
        } else {
            return largePrice;
        }
    }

})
