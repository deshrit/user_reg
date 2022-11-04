import {Row} from './Row';

export const Table = ({rows}) => {

    return (
        <>
            <div className="container mt-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Address</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((value, idx) => {
                                // value = {...value, idx}
                                return (
                                    <Row key={idx} idx={idx} row={value} />
                                )
                                
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}