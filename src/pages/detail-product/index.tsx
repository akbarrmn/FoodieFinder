import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { useParams } from 'react-router-dom'
import { fetchDetailMeals, fetchProducts } from '../../store/ProductSlices'
import BackAction from '../../components/BackAction'
import ReactPlayer from 'react-player/youtube'
import DetailLoading from '../../components/DetailLoading'

const DetailProduct = () => {
    const { detailMeals } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()
    const data: string | unknown = useParams().id

    useEffect(() => {
        dispatch(fetchDetailMeals(data))
        dispatch(fetchProducts())
    }, [dispatch])

    const rest = Object.keys(detailMeals).length !== 0 ? detailMeals[0].strInstructions.split(/\r?\n/) : []

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [loading])

    return (
        <div className='mt-36 w-full'>
            {Object.keys(detailMeals).length !== 0 &&
                <>
                    <BackAction target={-1} className={""} />
                    <div className='flex mt-4 gap-10 justify-evenly'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                {loading ?
                                    <>
                                        <DetailLoading />
                                        <DetailLoading />
                                    </>
                                    :
                                    <>
                                        <img src={detailMeals[0].strMealThumb} className="rounded-2xl max-w-md" />
                                        <ReactPlayer url={detailMeals[0].strYoutube} className='youtube' />
                                    </>
                                }
                            </div>
                            <div className="divider before:bg-black after:bg-black mt-10"></div>
                            <div>
                                <h1 className='text-black text-3xl font-semibold'>{detailMeals[0].strMeal}</h1>
                                <h2 className='text-black text-xl font-semibold'>Country / Meal Category : {detailMeals[0].strArea} / {detailMeals[0].strCategory}</h2>
                                <h2 className='text-black text-xl font-semibold'>Tags : {detailMeals[0].strTags}</h2>
                            </div>
                            <div className="divider before:bg-black after:bg-black mt-5"></div>
                            <div className='text-black'>
                                <h1 className='text-black text-3xl font-semibold mb-5'>Ingredients</h1>
                                {
                                    detailMeals.map((state) =>
                                        <>
                                            <p key={'1'}>{`${state.strMeasure1} ${state.strIngredient1}`}</p>
                                            <p key={'2'}>{`${state.strMeasure2} ${state.strIngredient2}`}</p>
                                            <p key={'3'}>{`${state.strMeasure3} ${state.strIngredient3}`}</p>
                                            <p key={'4'}>{`${state.strMeasure4} ${state.strIngredient4}`}</p>
                                            <p key={'5'}>{`${state.strMeasure5} ${state.strIngredient5}`}</p>
                                            <p key={'6'}>{`${state.strMeasure6} ${state.strIngredient6}`}</p>
                                            <p key={'7'}>{`${state.strMeasure7} ${state.strIngredient7}`}</p>
                                            <p key={'8'}>{`${state.strMeasure8} ${state.strIngredient8}`}</p>
                                            <p key={'9'}>{`${state.strMeasure9} ${state.strIngredient9}`}</p>
                                            <p key={'10'}>{`${state.strMeasure10} ${state.strIngredient10}`}</p>
                                            <p key={'11'}>{`${state.strMeasure11} ${state.strIngredient11}`}</p>
                                            <p key={'12'}>{`${state.strMeasure12} ${state.strIngredient12}`}</p>
                                            <p key={'13'}>{`${state.strMeasure13} ${state.strIngredient13}`}</p>
                                            <p key={'14'}>{`${state.strMeasure14} ${state.strIngredient14}`}</p>
                                            <p key={'15'}>{`${state.strMeasure15} ${state.strIngredient15}`}</p>
                                            <p key={'16'}>{`${state.strMeasure16} ${state.strIngredient16}`}</p>
                                            <p key={'17'}>{`${state.strMeasure17} ${state.strIngredient17}`}</p>
                                            <p key={'18'}>{`${state.strMeasure18} ${state.strIngredient18}`}</p>
                                            <p key={'19'}>{`${state.strMeasure19} ${state.strIngredient19}`}</p>
                                            <p key={'20'}>{`${state.strMeasure20} ${state.strIngredient20}`}</p>
                                        </>
                                    )
                                }

                            </div>
                            <div className="divider before:bg-black after:bg-black mt-5"></div>
                            <h1 className='text-black text-3xl font-semibold'>Method</h1>
                            <div className='flex flex-col gap-4 mt-5 mb-10'>
                                {rest.map((values, index) =>
                                    <div className='flex gap-2' key={index + 112}>
                                        <p className='text-black'>{index + 1}.</p>
                                        <p className='text-black'>{values}</p>
                                    </div>
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