export interface currencyData{
    id: number
    leyend: string,
    symbol: string, 
    ic: number,   
}

export interface currencyToConvert{
    amount: number,
    currencyFromId: number,
    currencyToId:number
}