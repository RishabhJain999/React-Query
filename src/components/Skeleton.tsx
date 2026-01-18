const Skeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg border p-4 animate-pulse"
                >
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 w-1/3 bg-gray-200 rounded" />
                        <div className="h-3 w-1/2 bg-gray-100 rounded" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skeleton;
