export interface User {
    id: number;
    name: string;
    email: string;
    isActive?: boolean;
}
export type ArticleStatus = 'draft' | 'published' | 'archived';
export declare class ArticleManager {
    private apiUrl;
    private articles;
    constructor(apiUrl: string);
    addUser(user: User): void;
    getUser(email: string): User | undefined;
    fetchArticles(): Promise<User[]>;
}
export declare function createArray<T>(length: number, value: T): T[];
export declare const API_VERSION = "1.0.0";
export default function greet(name: string): string;
export declare namespace Utils {
    function formatDate(date: Date): string;
    const CONSTANTS: {
        readonly MAX_RETRIES: 3;
        readonly TIMEOUT: 5000;
    };
}
//# sourceMappingURL=example.d.ts.map