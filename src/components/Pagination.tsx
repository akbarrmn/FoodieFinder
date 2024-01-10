
type Props = {
    currentPage: number,
    firstIndex: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    lastIndex: number,
    numbers: number[],
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Pagination = ({ currentPage, firstIndex, setCurrentPage, lastIndex, numbers, setLoading }: Props) => {

    const prevPage = () => {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
        setLoading(true)
    }

    const changePage = (id: number) => {
        setCurrentPage(id)
        setLoading(true)
    }

    const nextPage = () => {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
        setLoading(true)
    }


    return (
        <>
            <div className="join mt-10">
                <button className="join-item btn bg-[#2A2A2A] text-white" onClick={prevPage} disabled={currentPage === numbers[0] ? true : false}>«</button>
                {
                    numbers.map((number : any, i: any) =>
                        <button key={i} className={`join-item btn  ${currentPage === number ? 'bg-gray-400 text-black' : 'bg-[#2A2A2A] text-white'}`} onClick={() => changePage(number)}>{number}</button>
                    )
                }
                <button className="join-item btn btn-dark bg-[#2A2A2A] text-white" onClick={nextPage} disabled={currentPage === numbers[numbers.length - 1] ? true : false}>»</button>
            </div>
        </>
    )
}

export default Pagination