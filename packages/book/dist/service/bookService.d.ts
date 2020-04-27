export declare class BookService {
    getBook(id?: number): Promise<{
        id: number;
        name: string;
        ISBN: string;
        desc: string;
    }[]>;
}
