# Terribly-Tiny-Tales-Assignment

Netlify hosted link - https://terribly-tinytales-assignment.netlify.app/

Tech Stack Used - ReactJS, Recharts, File-Saver

# Components:

App.js: This is the main component of application. It handles the logic and implementation for fetching data, processing it, and calculating word frequencies. The resulting word-frequency data is then passed as props to the Chart and Export components.

Chart.js: This component receives the word-frequency data as props and utilizes the Recharts library to create a visually appealing chart. It uses the provided data to generate a histogram of the 20 most occurring words, representing the word and its corresponding count.

Export.js: This component renders an export button. When clicked, it triggers the handleExport method, which uses the "File Saver" library to export the word-frequency data into a CSV file format.


# Detail Explaination: 


In the App.js component, the main logic and implementation of the app are written. It contains a submit button that triggers an action when clicked.
When the submit button is clicked:
The histogramData state variable is declared using the useState hook. It is initialized with an empty array and will be used to store the word-frequency data.An API call is made to fetch data. The fetched data is then converted into text format.
The text is processed using the toLowerCase() method to convert it to lowercase. Then, the match() method is used with a regular expression (/\b\w+\b/g) to extract individual words from the text. These words are stored in the words array.

The frequency object is initialized as an empty object. Then, the forEach() method is used to iterate over each word in the words array.
For each word, the frequency count is updated in the frequency object. If the word already exists as a property in the frequency object, its count is incremented by 1. Otherwise, a new property is created for the word in the frequency object, and its count is set to 1.
After calculating the frequency of each word, the histogramData is created by converting the frequency object into an array of entries using Object.entries().
Then, the array is sorted in descending order based on the count value (b[1] - a[1]). The top 20 entries are selected using slice(0, 20). 

Finally, the map() method is used to transform each entry into an object with word and count properties and then it is set as the new value of the histogramData state using the setHistogramData() function.

Then data is passed as props to the Chart component, where the Recharts library is used to create a chart based on the word and count data. This chart represents a histogram of the 20 most occurring words.
Additionally, an Export component is rendered within the Chart component. It includes an export button.
When the export button is clicked, it triggers the handleExport method. This method utilizes the "FileSaver" library to export the data into a CSV file format.
The word and count data is converted into a CSV format within the handleExport method.
A Blob object is created using the CSV data.
The FileSaver library is used to save the Blob object as a CSV file, allowing the user to download and save the exported data.



