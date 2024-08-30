const TableItem = ({ name, income }) => {
    return (
        <div>
            <table style={{ border: "5px solid", padding: "1em", minWidth: "200px" }}>
                <thead>
                    <tr>
                        <th style={{ border: "2px solid", minWidth: "200px" }}>Brand</th>
                        <th style={{ border: "2px solid", minWidth: "200px" }}>Income</th>
                    </tr>
                </thead>
                <tbody>
                    <td style={{ border: "2px solid", minWidth: "200px" }}>{name}</td>
                    <td style={{ border: "2px solid", minWidth: "200px" }}>{income}</td>
                </tbody>
            </table>
        </div>
    )
}

export default TableItem;
