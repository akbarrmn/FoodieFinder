import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { Link, useParams } from 'react-router-dom'
import { fetchDetailMeals, fetchProducts } from '../../store/ProductSlices'
import BackAction from '../../components/BackAction'
import ReactPlayer from 'react-player/youtube'

type Props = {
    location: string
}

const DetailProduct = ({ location }: Props) => {
    const { detailMeals, meals } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()
    const data: string | unknown = useParams().id

    useEffect(() => {
        dispatch(fetchDetailMeals(data))
        dispatch(fetchProducts())
    }, [dispatch])

    const rest: Array = Object.keys(detailMeals).length !== 0 ? detailMeals[0].strInstructions.split(/\r?\n/) : []

    let items = []
    for (let item = 0; item < 20; item++) {
        items[item] = { strIngredient: 'strIngredient' + item, strMeasure: 'strMeasure' + item }
    }

    return (
        <div className='mt-36 w-full'>
            <BackAction location={location} target={''} className={""} />
            {Object.keys(detailMeals).length !== 0 &&
                <>
                    <div className='flex mt-4 gap-10 justify-evenly'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <img src={detailMeals[0].strMealThumb} className="rounded-2xl max-w-md" />
                                <ReactPlayer url={detailMeals[0].strYoutube} />
                            </div>
                            <div className="divider before:bg-primary after:bg-primary mt-10"></div>
                            <div>
                                <h1 className='text-white text-3xl font-semibold'>{detailMeals[0].strMeal}</h1>
                                <h2 className='text-white text-xl font-semibold'>Country / Meal Category : {detailMeals[0].strArea} / {detailMeals[0].strCategory}</h2>
                                <h2 className='text-white text-xl font-semibold'>Tags : {detailMeals[0].strTags}</h2>
                            </div>
                            <div className="divider before:bg-primary after:bg-primary mt-5"></div>
                            <div className='text-white'>
                                <h1 className='text-white text-3xl font-semibold mb-5'>Ingredients</h1>
                                {items.map((ts, index) => <p>{detailMeals[0][ts.strMeasure]} {detailMeals[0][ts.strIngredient]}</p>)}
                                {/* <p>{detailMeals[0]?.strIngredient1}</p>
                                <p>{detailMeals[0]?.strIngredient2}</p>
                                <p>{detailMeals[0]?.strIngredient3}</p>
                                <p>{detailMeals[0]?.strIngredient4}</p>
                                <p>{detailMeals[0]?.strIngredient5}</p>
                                <p>{detailMeals[0]?.strIngredient6}</p>
                                <p>{detailMeals[0]?.strIngredient7}</p>
                                <p>{detailMeals[0]?.strIngredient8}</p>
                                <p>{detailMeals[0]?.strIngredient9}</p>
                                <p>{detailMeals[0]?.strIngredient10}</p>
                                <p>{detailMeals[0]?.strIngredient11}</p>
                                <p>{detailMeals[0]?.strIngredient12}</p>
                                <p>{detailMeals[0]?.strIngredient13}</p>
                                <p>{detailMeals[0]?.strIngredient14}</p>
                                <p>{detailMeals[0]?.strIngredient15}</p>
                                <p>{detailMeals[0]?.strIngredient16}</p>
                                <p>{detailMeals[0]?.strIngredient16}</p>
                                <p>{detailMeals[0]?.strIngredient17}</p>
                                <p>{detailMeals[0]?.strIngredient18}</p>
                                <p>{detailMeals[0]?.strIngredient19}</p>
                                <p>{detailMeals[0]?.strIngredient20}</p> */}
                            </div>

                            <div className="divider before:bg-primary after:bg-primary mt-5"></div>
                            <h1 className='text-white text-3xl font-semibold'>Method</h1>
                            <div className='flex flex-col gap-4 mt-5 mb-10'>
                                {rest.map((values: string[], index: number) =>
                                    <div className='flex gap-2' key={index + 112}>
                                        <p className='text-white'>{index + 1}.</p>
                                        <p className='text-white'>{values}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <p className='text-white text-3xl font-semibold min-w-max'>MORE CATEGORIES</p>
                            <div className='scrollable mt-5 flex flex-col items-center gap-5 h-full max-h-[900px] overflow-y-scroll'>
                                {Object.keys(meals).length !== 0 && meals.map((data) =>
                                    <Link to={`/${data.strCategory}`} key={data.idCategory + 123}>
                                        <div className="w-52 h-52 border-2 flex bg-white/60 flex-col items-center justify-center shadow-xl text-black">
                                            <img src={data.strCategoryThumb} alt="Shoes" className='rounded-full m-2 w-36 h-36 object-cover flex justify-center items-center border-8 border-crown' />
                                            <h2 className="card-title text-black">{data.strCategory}</h2>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </>

            }
        </div >
    )
}

export default DetailProduct