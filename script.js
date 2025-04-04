// Predefined politician data (Updated with party and state information)
const politicians = {
    'DK Shivakumar': { netWorth: 1413, party: 'INC', state: 'Karnataka', constituency: 'Kanakapura' },
    'KH Puttaswamy Gowda': { netWorth: 1267, party: 'IND', state: 'Karnataka', constituency: 'Gauribidanur' },
    'Priyakrishna': { netWorth: 1156, party: 'INC', state: 'Karnataka', constituency: 'Govindarajanagar' },
    'N Chandrababu Naidu': { netWorth: 668, party: 'TDP', state: 'Andhra Pradesh', constituency: 'Kuppam' },
    'Jayantibhai Somabhai Patel': { netWorth: 661, party: 'BJP', state: 'Gujarat', constituency: 'Mansa' },
    'Suresha BS': { netWorth: 648, party: 'INC', state: 'Karnataka', constituency: 'Hebbal' },
    'YS Jagan Mohan Reddy': { netWorth: 510, party: 'YSRCP', state: 'Andhra Pradesh', constituency: 'Pulivendla' },
    'Parag Shah': { netWorth: 500, party: 'BJP', state: 'Maharashtra', constituency: 'Ghatkopar East' },
    'T.S. Baba': { netWorth: 500, party: 'INC', state: 'Chhattisgarh', constituency: 'Ambikapur' },
    'Mangalprabhat Lodha': { netWorth: 441, party: 'BJP', state: 'Maharashtra', constituency: 'Malabar Hill' }
};

// Default selected politician
let selectedPolitician = 'DK Shivakumar';
let politicianNetWorth = politicians[selectedPolitician].netWorth;

// Function to calculate years to match the selected politician's net worth
function calculateYearsToMatch() {
    const salary = parseInt(document.getElementById('salary').value) || 53000; // Get salary from input, default is ₹53,000

    // Calculate annual earnings
    const annualEarnings = salary * 12; // Annual earnings in ₹

    // Calculate years to reach the politician's net worth
    const yearsToMatch = Math.round(politicianNetWorth * 100000000 / annualEarnings); // Convert politician net worth to ₹ and calculate years

    // Calculate total lifetime earnings (assuming 70 years of work)
    const averageLifespan = 70; // Average Indian lifespan in years
    const totalLifetimeEarnings = salary * 12 * averageLifespan; // Total earnings during the lifetime

    // Display the selected politician's net worth with commas
    document.getElementById("politician-net-worth").innerHTML = `<span style="color: #ff7043;"><strong>${selectedPolitician}</strong></span>'s net worth is <span style="color: #ff7043; font-size: 1.2em;"><strong>₹${politicianNetWorth.toLocaleString()}</strong> Crores</span>`;

    // Display the results for years to match the politician's net worth
    document.getElementById("years-to-match").innerHTML = `It would take you <span style="color: #ff7043;"><strong>${yearsToMatch.toLocaleString()}</strong> years</span> to match the net worth of <strong>${selectedPolitician}</strong> at <span style="color: #ff7043;">₹<strong>${salary.toLocaleString()}</strong> per month</span>.`;

    // Display the total lifetime earnings with commas
    document.getElementById("lifetime-earnings").innerHTML = `In your lifetime, you will earn ₹<strong>${totalLifetimeEarnings.toLocaleString()}</strong>`;
}

// Recalculate whenever the salary changes
document.getElementById('salary').addEventListener('input', calculateYearsToMatch);

// Update the selected politician and recalculate
function selectPolitician(politician) {
    selectedPolitician = politician;
    politicianNetWorth = politicians[selectedPolitician].netWorth;
    calculateYearsToMatch();

    // Update button styles to indicate the selected politician
    const buttons = document.querySelectorAll('.politician-btn');
    buttons.forEach(button => {
        if (button.textContent === `${politician} (${politicians[politician].party}) - ${politicians[politician].constituency}, ${politicians[politician].state}`) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

// Initial calculation on page load
calculateYearsToMatch();
