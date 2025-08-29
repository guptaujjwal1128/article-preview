// Interface for user data
export interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
}

// Type alias for article status
export type ArticleStatus = 'draft' | 'published' | 'archived';

// Class with methods
export class ArticleManager {
  private articles: Map<string, User> = new Map();

  constructor(private apiUrl: string) {}

  public addUser(user: User): void {
    this.articles.set(user.email, user);
  }

  public getUser(email: string): User | undefined {
    return this.articles.get(email);
  }

  public async fetchArticles(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    return response.json();
  }
}

// Function with generics
export function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

// Constant export
export const API_VERSION = '1.0.0';

// Default export
export default function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Namespace export
export namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  
  export const CONSTANTS = {
    MAX_RETRIES: 3,
    TIMEOUT: 5000
  } as const;
}