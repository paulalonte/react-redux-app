export const currencyFormatter = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        //Sample local 'en-US' and currency 'USD'
    });
      
    return formatter.format(value);
}

