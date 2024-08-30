import EndItem from "../items/EndItem";
import TableItem from "../items/TableItem";

TableItem
const Table = ({netIncomes}) => {

    const total = netIncomes.reduce((cont, { income }) => cont + income, 0);
    const averageIncome = (total / netIncomes.length).toFixed(2);
    const netIncomesMapped = netIncomes.map((item, index) =>(
        <>
            <TableItem
                key = {index}
                name = {item.brand}
                income = {item.income}
            />
            
        </>
        ))
    const averageIncom = <EndItem
                            avegInc={averageIncome}
                        />
        return (
            <>
                {netIncomesMapped}
                {averageIncom}
            </>
        )
}

export default Table;