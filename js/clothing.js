// Clothing items database
const clothingItems = [
   "Abibas suit",
   "Air Bior pullover sweater",
   "Alaska winter jacket",
   "Alvin Lein T-shirt",
   "Anti Social Club hoodie",
   "Arm Pangel jacket",
   "black jacket with yellow trim",
   "blob longsleeve top",
   "bomber jacket with glowing elements",
   "branded insulated hoodie",
   "branded longsleeve",
   "branded Molo T-shirt",
   "branded T-shirt",
   "bright hoodie",
   "bright StarWars hoodie",
   "Casual neon torso",
   "CDG branded T-shirt",
   "classic denim jacket",
   "collection 2022 T-shirt",
   "cropp collection T-shirt",
   "denim jacket",
   "exclusive T-shirt",
   "fur coat without a hood",
   "Grand RP collection hoodie",
   "Grand RP collection T-shirt",
   "Hilipp Lein T-shirt",
   "hoodie",
   "jacket",
   "Jacket with a hood",
   "jacket with blue luminous trim",
   "jacket with green luminous trim",
   "jacket with pink luminous trim",
   "jacket with red luminous trim",
   "jacket with T-shirt",
   "jacket with turquoise luminous trim",
   "jacket with white luminous trim",
   "Juice Wrld Vlone T-shirt",
   "Khampion T-shirt",
   "Khanel top",
   "Kupreme T-shirt",
   "Lacoste T-shirt",
   "Lui Vi jacket",
   "Lui Vi sweatshirt",
   "Lui Vi T-shirt",
   "Lui Vi top",
   "luminous LM Playboy jacket",
   "luminous LM Playboy T-shirt",
   "luminous LM Playboy top",
   "luminous T-shirt",
   "maliky hoodie",
   "maliky T-shirt",
   "Mickey Mouse T-shirt",
   "Mikachu hoodie",
   "mix collection T-shirt",
   "Muci hoodie",
   "Muci hoodie with a snake",
   "Muci Not Fake hoodie",
   "Muci sweatshirt",
   "N.E.S.A. T-shirt",
   "neon torso",
   "New Years Eve costume",
   "Niki new collection hoodie",
   "Niki tech top",
   "Niki track suit top",
   "Plain jacket with sweater",
   "Polo Kinder T-shirt",
   "Rick and Morty trendy jacket",
   "scary turtleneck T-shirt",
   "shirt new",
   "Simpsons T-shirt",
   "skinny jacket",
   "summer collection T-shirt",
   "sweatshirt",
   "swimming trunks",
   "T-shirt",
   "The West Pace jacket",
   "top",
   "trendy jacket",
   "Tron torso",
   "Tsum collection T-shirt",
   "Up-Green sweatshirt",
   "Valenciaga T-shirt",
   "VIN T-shirt",
   "vintage Abibas Olympic Jerseys",
   "bandana top",
   "Barberry corset dress",
   "body wraps kill top",
   "bomber jacket with luminous elements",
   "calligraphy dress",
   "collection 5 top",
   "corset top",
   "day dress",
   "dress",
   "dress with cutout",
   "faution top",
   "Kupreme dress",
   "long brand T-shirt",
   "low dress",
   "pullover with long sleeve",
   "short pullover",
   "sports top",
   "stylish suit",
   "summer bra",
   "summer top",
   "top 2 outerwear",
   "top with chains",
   "topic pok",
   "Watch Me sweater",
   "luminous LM Playboy sweatshirt",
   "Mikachu T-shirt",
   "winter collection dress",
   "Abibas pants",
   "Abibas sport pants",
   "Abibas sweatpants",
   "Alvin Lein pants",
   "Bersace trousers",
   "Bior pants",
   "branded pants with bunny detail",
   "bright StarWars trousers",
   "bright trousers",
   "colored pants",
   "Grand RP collection pants",
   "half-glowing pants",
   "insulated personal pants",
   "Khampion pants",
   "Khanel pants",
   "Lui Vi pants",
   "luminous Bendi pants",
   "luminous branded pants with bunny detail",
   "luminous Grand RP trousers",
   "luminous LM Playboy trousers",
   "luminous OFF pants",
   "luminous trousers",
   "Mickey Mouse pants",
   "Muci pants",
   "Muci trousers",
   "Murberry pants",
   "N.E.S.A. pants",
   "neon pants",
   "New Balance trousers",
   "new fashionable joggers",
   "Niki new collection pants",
   "Niki tech fleece pants",
   "Niki track suit pants",
   "old summer shorts",
   "pants",
   "pants split",
   "shorts",
   "skater jeans",
   "spider pants",
   "Stonislan pants",
   "summer voyage shorts",
   "swordmen pants",
   "Tron pants",
   "trousers",
   "Valenciaga pants",
   "zipper pants",
   "Abibas leggings",
   "Gussi shorts",
   "jeans",
   "Muci shorts",
   "Nik shorts with leggings",
   "Panel pants",
   "ragged jeans",
   "skirt",
   "skirt with tights",
   "S cargo pants",
   "pants with belt",
   "Abibas Marquee Boost Lows shoes",
   "Abibas Pezy Boost 700 V3 Alvah shoes",
   "Abibas Keezy Foam shoes",
   "Abibas Pro Bounce 2019 Lows shoes",
   "Bans sneakers",
   "checkered Pans sneakers",
   "Curry Flow 8 sneakers",
   "Ground Mordan 4 Retro Laser 30th shoes",
   "Keezy Boost shoes",
   "luminous shoes",
   "Mordan 1 shoes",
   "Mordan 6 shoes",
   "Muci branded flip-flops",
   "multi-colored Pans sneakers",
   "neon shoes",
   "Niki Ground Porce One new collection shoes",
   "Niki Shox shoes",
   "Niki Uptempo shoes",
   "Niki Zoom Freak 1 Multi-Color shoes",
   "Pans sneakers",
   "Pezy Boost shoes",
   "red sneakers",
   "RGB neon shoes",
   "Rocs",
   "shoes",
   "sneakers",
   "trainers",
   "Tron shoes",
   "Up-Green Keezy Boost shoes",
   "Up-Green Pezy Boost shoes",
   "Valenciaga Track shoes",
   "tall boots",
   "accessory",
   "AK-47 chain",
   "boxing gloves",
   "bracelet",
   "chain",
   "chain around the body accessory",
   "chain lost treasure neon accessory",
   "clown chain",
   "deer antler accessory",
   "deer antlers with a red nose accessory",
   "eagle necklace",
   "el primo corazon krawl on the shoulder accessory",
   "flying bear on the shoulder accessory",
   "gloves",
   "glowing nails",
   "hamster on the shoulder accessory",
   "hearts Pride glasses",
   "leon krawl on the shoulder accessory",
   "lovely bird egg on the shoulder accessory",
   "neck scarf accessory",
   "necklace",
   "neon rabbit ears",
   "owl on the shoulder accessory",
   "pixel glasses",
   "scarf",
   "shiny deer antler headband accessory",
   "six-tailed fox on the shoulder accessory",
   "snowflake glasses",
   "strong chicken on the shoulder accessory",
   "tie",
   "toothless dragon on the shoulder accessory",
   "wristband accessory",
   "beads accessory",
   "navel piercing accessory",
   "onelove chain",
   "beads accessory",
   "navel piercing accessory",
   "onelove chain",
   "alien with neon eyes mask",
   "anime mask",
   "assassins mask",
   "bandana mask",
   "baseball mask",
   "Bigness mask",
   "boxing helmet",
   "carnival mask",
   "Casual neon helmet",
   "cat mask",
   "Christmas tree mask",
   "clown mask",
   "cowgirl hat",
   "Craft Munk mask",
   "Cupids crown",
   "demon mask",
   "desert scarf mask",
   "Lui Vi desert scarf mask",
   "devil mask",
   "earphones with a heart",
   "emoji mask",
   "evil mask",
   "exotic mask",
   "fashionista scarf mask",
   "fox mask",
   "gorilla mask",
   "handkerchief mask",
   "Jason blue mask",
   "Kazer headphones",
   "kitsune mask",
   "luminous head bag mask",
   "luminous LM Playboy mask",
   "mask",
   "Mask Broken",
   "monkey boss mask",
   "monkey mask",
   "Nik mask",
   "owl mask",
   "panama hat",
   "penguin mask",
   "pig mask",
   "purge mask",
   "raccoon mask",
   "raptor mask",
   "raven mask",
   "red stocking mask",
   "reindeer mask",
   "robot human mask",
   "robot mask",
   "rooster mask",
   "samurai mask",
   "Santa Claus mask",
   "Sashmello mask",
   "shamanic mask",
   "skeleton king mask",
   "snowboarders mask",
   "snowflake glasses",
   "snowman mask",
   "sports mask",
   "stealthy mask",
   "tied scarf mask",
   "tight mask",
   "toothy mask",
   "trending shark head hat",
   "Tron helmet",
   "TV-head mask",
   "white Lui Vi desert scarf mask with multi-colored top",
   "gold Kolex watch with black dial",
   "gold Kolex watch with rainbow bezels",
   "Kasio G-Shock watch",
   "Kolex 2 watch",
   "Kolex watch",
   "silver Kolex watch with rainbow bezels",
   "Volex 2 watch",
   "gold Kolex watch with black dial",
   "gold Kolex watch with rainbow bezels",
   "Kasio G-Shock watch",
   "Kolex 2 watch",
   "Kolex watch",
   "silver Kolex watch with rainbow bezels",
   "Volex 2 watch",
   "gold Kolex watch with black dial",
   "gold Kolex watch with rainbow bezels",
   "Kasio G-Shock watch",
   "Kolex 2 watch",
   "Kolex watch",
   "silver Kolex watch with rainbow bezels",
   "Volex 2 watch",
   "Alvin Lein backpack skin",
   "backpack skin",
   "backpack with a cat skin",
   "bear backpack skin",
   "biohazard backpack skin",
   "Bior backpack skin",
   "chain with spikes backpack skin",
   "cloud backpack skin",
   "cow backpack skin",
   "cross backpack skin",
   "classic Lui Vi backpack skin",
   "cute bear backpack skin",
   "demon backpack skin",
   "Domo backpack skin",
   "double pockets backpack skin",
   "duck backpack skin",
   "duffel bag skin",
   "G backpack skin",
   "handbag backpack skin",
   "heart backpack skin\n",
   "heart with wings backpack skin",
   "hippy bear backpack skin",
   "human backpack skin",
   "jolly bear backpack skin",
   "Kupreme backpack skin",
   "leather school backpack skin",
   "Lui Vi backpack skin",
   "LUV backpack with wings skin",
   "mini-bear backpack skin",
   "Muci backpack skin",
   "Niki backpack skin",
   "piggy keychain backpack skin",
   "plaid bunny backpack skin",
   "scary chicken backpack skin",
   "shark backpack skin",
   "skeleton cat backpack skin\n skin",
   "skeleton cheetah plush backpack skin",
   "skull backpack skin\n",
   "strawberry backpack skin",
   "sad hare backpack skin",
   "Venom backpack skin",
   "valentines cat backpack skin",
   "star bunny backpack skin",
   "fancy bear backpack skin.",
   "Volex watch",
   "Alvin Lein set",
   "Bersace set",
   "bright StarWars set",
   "Grada set",
   "Grand RP collection set",
   "Khampion set",
   "Khanel set",
   "Kupreme set",
   "Lui Vi set",
   "luminous Bendi set",
   "luminous LM Playboy set",
   "luminous OFF set",
   "Niki new collection set",
   "Tron set",
   "Valenciaga set",
];

// Populate type options (1-30) for the clothing section
const clothingTypeSelect = document.getElementById('clothing-type');
if (clothingTypeSelect) { // Check if the element exists
    for (let i = 1; i <= 30; i++) {
        const option = document.createElement('option');
        option.value = ` of type ${i}`;
        option.textContent = `type ${i}`;
        clothingTypeSelect.appendChild(option);
    }
}


// Clothing name autocomplete for the clothing section
const clothingNameInput = document.getElementById('clothing-name');
const clothingSuggestionsBox = document.getElementById('clothing-suggestions');

if (clothingNameInput && clothingSuggestionsBox) { // Check if elements exist
    clothingNameInput.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        clothingSuggestionsBox.innerHTML = ''; // Clear previous suggestions

        if (inputValue) {
            const matchingItems = clothingItems.filter(item =>
                item.toLowerCase().includes(inputValue)
            );

            if (matchingItems.length > 0) {
                clothingSuggestionsBox.style.display = 'block';
                matchingItems.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item'; // Use existing suggestion item style
                    div.textContent = item;
                    div.addEventListener('click', () => {
                        clothingNameInput.value = item;
                        clothingSuggestionsBox.style.display = 'none';
                    });
                    clothingSuggestionsBox.appendChild(div);
                });
            } else {
                clothingSuggestionsBox.style.display = 'none';
            }
        } else {
            clothingSuggestionsBox.style.display = 'none';
        }
    });

    // Close suggestions when clicking outside the clothing name input or suggestions box
    document.addEventListener('click', function(e) {
        if (!clothingNameInput.contains(e.target) && !clothingSuggestionsBox.contains(e.target)) {
            clothingSuggestionsBox.style.display = 'none';
        }
    });
}


// Function to convert text to proper case (capitalize only the first letter of the string)
function toProperCase(text) {
    if (!text) return ''; // Handle empty or null input
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Handle form submission for the clothing section
const clothingSubmitBtn = document.getElementById('clothing-submit-btn');
const clothingCopyBtn = document.getElementById('clothing-copy-btn');
const clothingOutput = document.getElementById('clothing-output');
const clothingForm = document.getElementById('clothingForm');


if (clothingSubmitBtn && clothingCopyBtn && clothingOutput && clothingForm) { // Check if elements exist

    clothingSubmitBtn.addEventListener('click', () => {
        // Get selected transaction type for clothing
        const clothingTransactionInput = clothingForm.querySelector('input[name="clothing-transaction"]:checked');
        const transaction = clothingTransactionInput ? clothingTransactionInput.value : ''; // Handle case where none is selected

        const colorSelect = document.getElementById('clothing-color');
        const color = colorSelect ? colorSelect.value.trim() : ''; // Handle case where element doesn't exist

        const clothingNameInput = document.getElementById('clothing-name');
        const clothingName = clothingNameInput ? clothingNameInput.value.trim() : ''; // Use the original casing

        const clothingTypeSelect = document.getElementById('clothing-type');
        const type = clothingTypeSelect ? clothingTypeSelect.value.trim() : ''; // Handle case where element doesn't exist

        // Get selected gender for clothing
        const clothingGenderInput = clothingForm.querySelector('input[name="clothing-gender"]:checked');
        const gender = clothingGenderInput ? clothingGenderInput.value.trim() : ''; // Handle case where none is selected


        const clothingPriceInput = document.getElementById('clothing-price');
        const priceInput = clothingPriceInput ? clothingPriceInput.value.trim() : ''; // Handle case where element doesn't exist

        const clothingTradingCheckbox = document.getElementById('clothing-trading');
        const isTrading = clothingTradingCheckbox ? clothingTradingCheckbox.checked : false; // Handle case where element doesn't exist


        // Validate and format price input (reusing logic from original clothing.js)
        let price = '';
        if (priceInput) {
            const priceRegex = /^[0-9]+(\.[0-9]+)?[MK]?$/i;
            if (priceRegex.test(priceInput)) {
                if (priceInput.toLowerCase().endsWith('m')) {
                    const numericValue = parseFloat(priceInput.toLowerCase().replace('m', ''));
                    price = `${numericValue} Million`;
                } else if (priceInput.toLowerCase().endsWith('b')) {
                    const numericValue = parseFloat(priceInput.toLowerCase().replace('b', ''));
                    price = `${numericValue} Billion`;
                } else {
                    price = `${parseFloat(priceInput).toLocaleString('en-US')}`;
                }
            } else {
                // Use the existing error popup mechanism
                showErrorPopup('Invalid price format! Use numbers, decimals, or shorthand like "2M" or "500K".');
                return;
            }
        } else {
            price = 'Negotiable';
        }

        // Construct the output text
        let outputText = '';

        if (isTrading) {
             // Construct trading text, ensuring spaces are handled correctly
            outputText = `Selling or trading ${color} ${clothingName} ${type} ${gender}`.replace(/\s+/g, ' ').trim();
        } else {
             // Construct buying/selling text, ensuring spaces are handled correctly
            outputText = `${transaction} ${color} ${clothingName} ${type} ${gender}`.replace(/\s+/g, ' ').trim();
        }

        // Add price/budget information
        if (transaction === "Buying") {
            outputText += price === 'Negotiable' ? `. Budget: ${price}.` : `. Budget: $${price}.`;
        } else {
            outputText += price === 'Negotiable' ? `. Price: ${price}.` : `. Price: $${price}.`;
        }


        // Set the output
        clothingOutput.textContent = outputText;
    });

    // Handle copy to clipboard for the clothing section
    clothingCopyBtn.addEventListener('click', () => {
        const output = clothingOutput.textContent;
        if (output === 'Your clothing advertisement will appear here...') {
            // Use the existing error popup mechanism
            showErrorPopup('Generate an ad first!');
            return;
        }

        navigator.clipboard.writeText(output).then(() => {
            // Use the existing notification mechanism
            showNotification('Copied to clipboard!');

            // Reset form
            clothingForm.reset();
            clothingOutput.textContent = 'Your clothing advertisement will appear here...';
             // Reset transaction radio button active state after form reset
            const transactionRadioLabels = clothingForm.querySelectorAll('.transaction-radio-label');
            transactionRadioLabels.forEach(label => label.classList.remove('active'));
            // Re-activate the default checked radio button if any
            const defaultCheckedRadio = clothingForm.querySelector('input[name="clothing-transaction"]:checked');
            if (defaultCheckedRadio) {
                 const defaultActiveLabel = defaultCheckedRadio.closest('.transaction-radio-label');
                 if(defaultActiveLabel) {
                     defaultActiveLabel.classList.add('active');
                 }
            }
        }).catch(err => {
             // Use the existing error popup mechanism for copy errors
            showErrorPopup('Failed to copy to clipboard: ' + err);
        });
    });

     // Initialize transaction radio button active state for clothing section on load
    const clothingTransactionRadioGroup = clothingForm.querySelector('.transaction-radio-group');
    if (clothingTransactionRadioGroup) {
        const clothingTransactionRadioLabels = clothingTransactionRadioGroup.querySelectorAll('.transaction-radio-label');
        const clothingTransactionInputs = clothingTransactionRadioGroup.querySelectorAll('input[name="clothing-transaction"]');

        clothingTransactionInputs.forEach(input => {
            if (input.checked) {
                clothingTransactionRadioLabels.forEach(label => label.classList.remove('active'));
                const activeLabel = Array.from(clothingTransactionRadioLabels).find(label => label.querySelector('input[type="radio"]').value === input.value);
                if (activeLabel) {
                    activeLabel.classList.add('active');
                }
            }
        });

         // Add click listener to the clothing transaction radio group for delegation
        clothingTransactionRadioGroup.addEventListener('click', (event) => {
            const clickedLabel = event.target.closest('.transaction-radio-label');
            if (clickedLabel) {
                clothingTransactionRadioLabels.forEach(label => label.classList.remove('active'));
                clickedLabel.classList.add('active');
                const associatedInput = clickedLabel.querySelector('input[type="radio"]');
                if (associatedInput) {
                    associatedInput.checked = true;
                    associatedInput.dispatchEvent(new Event('change', { bubbles: true })); // Trigger change event
                }
            }
        });

         // Add change listeners to the individual clothing transaction radio inputs (fallback/alternative)
        clothingTransactionInputs.forEach(input => {
            input.addEventListener('change', (event) => {
                clothingTransactionRadioLabels.forEach(label => label.classList.remove('active'));
                const activeLabel = Array.from(clothingTransactionRadioLabels).find(label => label.querySelector('input[type="radio"]').value === event.target.value);
                if (activeLabel) {
                    activeLabel.classList.add('active');
                }
            });
        });
    }
}


// Assuming showNotification and showErrorPopup functions are defined in main.js or the inline script
// If not, you would need to define them here or ensure main.js is loaded before clothing.js
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
}

function showErrorPopup(message) {
     const errorPopup = document.getElementById('errorPopup');
     const popupContent = errorPopup ? errorPopup.querySelector('.popup-content p') : null;
     const errorOkButton = errorPopup ? errorPopup.querySelector('#errorOkButton') : null;

     if (errorPopup && popupContent && errorOkButton) {
         popupContent.textContent = message;
         errorPopup.classList.add('show');

         // Close popup when OK is clicked
         errorOkButton.onclick = () => {
             errorPopup.classList.remove('show');
         };

         // Close popup when clicking outside (optional)
         errorPopup.onclick = (event) => {
             if (event.target === errorPopup) {
                 errorPopup.classList.remove('show');
             }
         };
     } else {
         // Fallback to alert if popup elements are not found
         alert('Error: ' + message);
     }
 }

