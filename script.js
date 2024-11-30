// Get the form elements
const braForm = document.getElementById('braForm');
const result = document.getElementById('result');

// Handle form submission
braForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const underbust = parseFloat(document.getElementById('underbust').value);
    const bust = parseFloat(document.getElementById('bust').value);
    const bodyType = document.getElementById('bodyType').value;
    const activity = document.getElementById('activity').value;
    const comfort = document.getElementById('comfort').value;
    const attireType = document.getElementById('attireType').value;

    // Basic validation
    if (isNaN(underbust) || isNaN(bust)) {
        alert('Please enter valid measurements for both underbust and bust.');
        return;
    }

    // Calculate band size (underbust measurement)
    let bandSize = Math.round(underbust);
    if (underbust % 2 !== 0) {
        bandSize += 1;
    }

    // Calculate cup size (difference between bust and underbust)
    let cupDifference = bust - underbust;
    let cupSize = '';
    if (cupDifference < 1) {
        cupSize = 'A';
    } else if (cupDifference < 2) {
        cupSize = 'B';
    } else if (cupDifference < 3) {
        cupSize = 'C';
    } else if (cupDifference < 4) {
        cupSize = 'D';
    } else {
        cupSize = 'D+';
    }

    // Construct the bra size
    const braSize = `${bandSize} ${cupSize}`;

    // Suggest the best bra for the activity and comfort
    let suggestion = '';
    if (activity === 'workout') {
        suggestion = 'A sports bra is a great choice for workouts. It offers support and comfort during exercise.';
    } else if (activity === 'officeWear') {
        suggestion = 'A comfortable, everyday bra works best for office wear. Look for one with smooth fabric.';
    } else if (activity === 'party') {
        suggestion = 'For parties, consider a strapless or push-up bra, depending on the outfit.';
    } else {
        suggestion = 'For daily wear, a well-fitting bra in soft, breathable fabric is ideal.';
    }

    // Comfort sensitivity suggestions
    if (comfort === 'sensitiveSkin') {
        suggestion += ' Choose bras with cotton or organic fabric to minimize irritation.';
    } else if (comfort === 'diggingStraps') {
        suggestion += ' A bra with wide, padded straps will help prevent digging.';
    } else if (comfort === 'chafing') {
        suggestion += ' Look for seamless bras or ones made of moisture-wicking materials.';
    }

    // Add attire type suggestion
    if (attireType === 'tshirt') {
        suggestion += ' A smooth, seamless t-shirt bra is perfect for under t-shirts.';
    } else if (attireType === 'cropTop') {
        suggestion += ' A bralette or strapless bra works great under crop tops.';
    } else if (attireType === 'corset') {
        suggestion += ' A supportive, structured bra will complement a corset nicely.';
    } else if (attireType === 'sundress') {
        suggestion += ' Look for a strapless bra for sundresses, or a convertible bra.';
    } else if (attireType === 'saree') {
        suggestion += ' A well-fitted, non-bulky bra works well with sarees for a smooth silhouette.';
    } else if (attireType === 'salwar') {
        suggestion += ' A comfortable, full-coverage bra is a great choice with salwar kameez.';
    }

    // Display the result
    result.innerHTML = `
        <h2>Your Suggested Bra Size: ${braSize}</h2>
        <p>${suggestion}</p>
    `;
});
