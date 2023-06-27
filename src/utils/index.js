export const updateQuery = (origin, query, value) => {
    const url = new URL(origin);

    url.searchParams.set(query, value)
}