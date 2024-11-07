export default function json2html(data) {
    // Create the table element
    const table = document.createElement('table');
    table.setAttribute('data-user', 'saiteja.palegar@gmail.com');

    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Age', 'Gender'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value !== undefined ? value : '';
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Return the table as a string
    return table.outerHTML;
}