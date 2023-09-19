export interface ICard {
    author?: { photo: string; name: string }
    text: string
    title: string
}

export interface ICardProps extends ICard {
    type: 'dark' | 'yellow'
}
