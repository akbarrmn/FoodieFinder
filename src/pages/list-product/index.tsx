import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { filterCategories } from '../../store/ProductSlices'
import getListMeals from '../../models/getListMeals';
import BackAction from '../../components/BackAction';
import Pagination from '../../components/Pagination';
import CardLoading from '../../components/CardLoading';

const ListProduct = () => {
    const dispatch = useAppDispatch();
    const { filtered } = useAppSelector(state => state.product)
    const data = useParams().categories

    useEffect(() => {
        dispatch(filterCategories(data))
    }, [data])

    // Pagination
    const Data = Object.keys(filtered).length !== 0 ? filtered : []
    const [currentPage, setCurrentPage] = useState<number>(1)
    const recordPerPage = 8;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const paginatedMeals = Data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Data.length / recordPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [loading])


    return (
        <div className='category py-20'>
            <div className='relative'>
                <BackAction target={'/'} className={'absolute left-0'} />
                <h1 className='font-bold text-4xl antialiased text-white text-center'>Meals List</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 pt-14 '>
                {Object.keys(paginatedMeals).length !== 0 && paginatedMeals.map((data: getListMeals) =>
                    loading? <CardLoading /> :
                    <Link to={`/meals/detail/${data.idMeal}`} key={data.idMeal}>
                        <div className="card bg-white/60 shadow-xl">
                            <figure><img src={data.strMealThumb} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title tracking-tight text-black text-ellipsis whitespace-nowrap overflow-hidden">{data.strMeal}</h2>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            <Pagination currentPage={currentPage} firstIndex={firstIndex} setCurrentPage={setCurrentPage} lastIndex={lastIndex} numbers={numbers} setLoading={setLoading}/>
        </div>
    )
}

export default ListProduct