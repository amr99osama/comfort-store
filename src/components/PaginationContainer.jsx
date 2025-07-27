
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
const PaginationContainer = () => {
    const { meta } = useLoaderData();
    // console.log(meta);
    const { pageCount, page } = meta.pagination;
    // console.log(pageCount, page);
    const Pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    };

    if (pageCount <= 2) {
        return null;
    }
    return (
        <div className="mt-16 flex justify-end">
            <div className="join">
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => {
                    let prevPage = page - 1;
                    if (prevPage < 1) {
                        prevPage = 1;
                    }
                    handlePageChange(prevPage)
                }} >
                    Prev
                </button>
                {Pages.map((pageNumber) => {
                    return (
                        <button
                            key={pageNumber}
                            className={`btn btn-xs sm:btn-md border-none join-item ${page === pageNumber ? 'bg-base-300 border-base-300' : ''}`}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    )
                })}
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => {
                    let nextPage = page + 1;
                    if (nextPage > pageCount) {
                        nextPage = pageCount;
                    }
                    handlePageChange(nextPage)
                }} >
                    Next
                </button>
            </div>
        </div >
    )
}

export default PaginationContainer