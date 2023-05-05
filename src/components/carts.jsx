import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import '../assets/styles/carts.scss'
import Loader from "./loader";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { getUsers } from "../store/usersSlice";

const Carts = () => {
    const users = useSelector((state) => state?.users?.users?.data)
    const pages = useSelector((state) => state?.users?.users?.total_pages)
    const loading = useSelector((state) => state.users.loading)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const handleChange = (event, value) =>{
        setPage(value);
        dispatch(getUsers(value));
    }
    return (
        <div className="carts_wrapper">
            <div className="container">
                {
                    loading ? <Loader /> :

                        <div className="carts">
                            {
                                users?.map((user) => <Card key={user.id} user={user} />)
                            }
                        </div>
                }
                {
                    (!loading&&pages) &&
                    <Stack spacing={2}>
                        <Pagination count={pages} page={page} onChange={handleChange}/>
                    </Stack>
                }
            </div>

        </div>
    )
}

export default Carts;