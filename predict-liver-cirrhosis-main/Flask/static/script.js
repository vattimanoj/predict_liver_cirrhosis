document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('predictForm');
    const resultDiv = document.getElementById('result');
    const reportDiv = document.getElementById('report');
    const reportContent = document.getElementById('report-content');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent form from reloading the page

        const formData = new FormData(form);

        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (data.result) {
                // Display result message
                resultDiv.innerHTML = `<h3>Prediction Result:</h3><p style="color:green;">${data.result}</p>`;

                // Build printable report content
                let reportHTML = '<ul>';
                for (let [key, value] of formData.entries()) {
                    reportHTML += `<li><strong>${formatKey(key)}:</strong> ${value}</li>`;
                }
                reportHTML += `<li><strong>Prediction:</strong> ${data.result}</li>`;
                reportHTML += '</ul>';

                // Show report section
                reportContent.innerHTML = reportHTML;
                reportDiv.style.display = 'block';
            } else if (data.error) {
                resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
                reportDiv.style.display = 'none';
            }
        })
        .catch(err => {
            resultDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
            reportDiv.style.display = 'none';
        });
    });

    // Print only the report section
    window.printReport = function () {
        const printContent = reportDiv.innerHTML;
        const win = window.open('', '', 'width=800,height=600');
        win.document.write(`
            <html>
            <head>
                <title>Prediction Report</title>
                <style>
                    body { font-family: Arial; padding: 20px; color: #000; }
                    h3 { color: #222; }
                    ul { list-style: none; padding: 0; }
                    li { margin-bottom: 8px; }
                </style>
            </head>
            <body>
                <h2>Liver Cirrhosis Prediction Report</h2>
                ${printContent}
            </body>
            </html>
        `);
        win.document.close();
        win.focus();
        win.print();
        win.close();
    };
    form.addEventListener('reset', function () {
    // Clear prediction result and hide report section
    resultDiv.innerHTML = '';
    reportContent.innerHTML = '';
    reportDiv.style.display = 'none';
});

    // Helper to format form field names
    function formatKey(key) {
        switch (key) {
            case 'bilirubin': return 'Total Bilirubin (mg/dl)';
            case 'ast': return 'SGOT/AST (U/L)';
            case 'alt': return 'SGPT/ALT (U/L)';
            case 'albumin': return 'Albumin (g/dl)';
            case 'hemoglobin': return 'Hemoglobin (g/dl)';
            case 'platelet': return 'Platelet Count (lakhs/mm)';
            case 'Alcohol': return 'Alcohol Consumption (quarters/day)';
            default: return key;
        }
    }
});
form.addEventListener('reset', function () {
    // Clear prediction result and hide report section
    resultDiv.innerHTML = '';
    reportContent.innerHTML = '';
    reportDiv.style.display = 'none';
});