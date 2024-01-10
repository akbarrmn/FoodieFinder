
const CardLoading = () => {
    return (
        <>
            <div className="card w-full h-80 border-2 rounded-md">
                <div className="flex animate-pulse flex-col h-full">
                    <div className="w-full bg-gray-300 h-full rounded-md ">
                    </div>
                    <div className="flex py-5 px-3">
                        <div className="w-36 bg-gray-300 h-6 rounded-md ">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardLoading