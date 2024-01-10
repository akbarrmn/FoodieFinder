import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { fetchRandomMeals } from '../../store/ProductSlices'
import Pagination from '../../components/Pagination';
import CardLoading from '../../components/CardLoading';

interface Detail { }

const Product: FC<Detail> = () => {
    const { detailMeals } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchRandomMeals())
    }, [])

    // Pagination
    const Data = Object.keys(detailMeals).length !== 0 ? detailMeals : []
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
    console.log(Data);

    return (
        <>
            <div className='category py-28'>
                <div className='grid grid-cols-4 gap-4 pt-14'>
                    {Object.keys(paginatedMeals).length !== 0 && paginatedMeals.map((data, i) =>
                        loading ? <CardLoading /> :
                        <Link to={`/meals/detail/${data.idMeal}`} key={i}>
                            <div className="card bg-white/60 shadow-xl text-black">
                                <figure><img src={data.strMealThumb} alt="Shoes" loading='lazy' className='object-cover flex justify-center items-center w-full' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.strMeal}</h2>
                                    <div className='flex items-center gap-2'>
                                        <div className="badge badge-outline">{data.strCategory}</div>
                                        <div className="badge badge-outline">{data.strArea}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
                <Pagination currentPage={currentPage} firstIndex={firstIndex} setCurrentPage={setCurrentPage} lastIndex={lastIndex} numbers={numbers} setLoading={setLoading} />
            </div>
        </>
    )
}

export default Product