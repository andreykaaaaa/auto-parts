export interface EntityCards {
    id: number
    title: string,
    price: number,
    imageUrl: string,
    isFavorite?: boolean | undefined,
    isAdded?: boolean | undefined,
    favoriteId?: number | null
    date: string
}