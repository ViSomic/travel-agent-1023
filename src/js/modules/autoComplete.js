import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../data/countryList";

function autoCompleteFunc() {
    const autoCompleteJS = new autoComplete({
        selector: "#autoComplete",
        debounce: 300,
        data: {
            src: countryList,
            keys: ["name"],
            cache: true,
        },
        resultsList: {
            element: (list, data) => {
                if (!data.results.length) {
                    // Create "No Results" message element
                    const message = document.createElement("div");
                    // Add class to the created element
                    message.setAttribute("class", "no_result");
                    // Add message text content
                    message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                    // Append message element to the results list
                    list.prepend(message);
                }
            },
            noResults: true,
        },
        resultItem: {
            highlight: true,
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value.name;
                    autoCompleteJS.input.value = selection;
                }
            }
        }
    });
}

export default autoCompleteFunc;