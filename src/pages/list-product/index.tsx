import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { filterCategories } from '../../store/ProductSlices'
import getListMeals from '../../models/getListMeals';
import BackAction from '../../components/BackAction';

type Props = {
    location: string
}

const ListProduct = ({ location }: Props) => {
    const dispatch = useAppDispatch();
    const { filtered } = useAppSelector(state => state.product)
    const data = useParams().categories

    useEffect(() => {
        dispatch(filterCategories(data))
    }, [dispatch])

    return (
        <div className='category py-20 px-20'>
            <div className='relative'>
                <BackAction location={location} target={'/'} className={'absolute left-0'}/>
                <h1 className='font-bold text-4xl antialiased text-white text-center'>Meals List</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 pt-14 '>
                {Object.keys(filtered).length !== 0 && filtered.map((data: getListMeals) =>
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
        </div>
    )
}

export default ListProduct