import { FC } from 'react'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Product from '../product'
import { useLocation } from 'react-router-dom';
import ListProduct from '../list-product'
import DetailProduct from '../detail-product'

interface Main { }

const index: FC<Main> = () => {
    const location = useLocation();

    return (
        <>
            <div className='bg-gradient-to-r from-crown to-blue-500 min-h-screen'>
                <Navbar />
                <Container>
                    <>
                        {!location.pathname.includes('/meals/detail/') && <Header />}
                        {location.pathname === '/' ?
                            <Product />
                            : location.pathname.includes('/meals/detail/') ?
                                <DetailProduct location={location.pathname}/>
                                :
                                <ListProduct location={location.pathname} />
                        }
                    </>
                </Container>
            </div>
        </>
    )
}

export default index