export const Table = () => {
    return (
        <>
            <div class="container mt-2">
                <table class="table">
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
                        <tr>
                            <td>1</td>
                            <td>Deshrit</td>
                            <td>deshrit@deshrit.com</td>
                            <td>9843131234</td>
                            <td>2058/3/12</td>
                            <td>Nepal, bagmati, kathmandu</td>
                            <td><button><i class="fa fa-edit"></i></button></td>
                            <td><button><i class="fa fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}