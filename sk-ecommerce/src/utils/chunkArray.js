export function chunkArray(array, chunkSize) {
    return Array.from({ length: array.length / chunkSize }, (_, index) =>
        array.slice(index * chunkSize, (index + 1) * chunkSize)
    )
}
