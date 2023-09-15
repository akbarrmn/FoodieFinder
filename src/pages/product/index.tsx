import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { fetchProducts } from '../../store/ProductSlices'

interface Detail { }

const Product: FC<Detail> = () => {
    const { meals } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <>
            <div className='category py-20 px-20'>
                <h1 className='font-bold text-4xl text-white text-center'>Meal Category</h1>
                <div className='grid grid-cols-4 gap-4 pt-14'>
                    {Object.keys(meals).length !== 0 && meals.map((data) =>
                        <Link to={`/${data.strCategory}`} key={data.idCategory}>
                            <div className="card bg-white/60 shadow-xl text-black">
                                <figure><img src={data.strCategoryThumb} alt="Shoes"  className='rounded-full m-2 bg-WhiteRock w-56 h-56 object-cover flex justify-center items-center border-8 border-crown'/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.strCategory}</h2>
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden '>{data.strCategoryDescription}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default Product