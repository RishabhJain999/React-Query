interface Props {
    page: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
}

const Pagination = ({ page, totalPages, onPrev, onNext }: Props) => {
    return (
        <div className="mt-6 flex justify-end items-center gap-4">
            <button
                onClick={onPrev}
                disabled={page === 1}
                className="rounded-md border px-4 py-2 text-sm disabled:opacity-40"
            >
                Previous
            </button>

            <span className="text-sm text-gray-600">
                Page <strong>{page}</strong> of {totalPages}
            </span>

            <button
                onClick={onNext}
                disabled={page === totalPages}
                className="rounded-md border px-4 py-2 text-sm disabled:opacity-40"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
