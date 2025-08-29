// Basic namespace
export namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
  
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  export const PI = 3.14159;
}

// Nested namespaces
export namespace Graphics {
  export namespace Shapes {
    export class Circle {
      constructor(public radius: number) {}
      
      area(): number {
        return Math.PI * this.radius * this.radius;
      }
    }
    
    export class Rectangle {
      constructor(public width: number, public height: number) {}
      
      area(): number {
        return this.width * this.height;
      }
    }
  }
  
  export namespace Colors {
    export const RED = '#FF0000';
    export const GREEN = '#00FF00';
    export const BLUE = '#0000FF';
    
    export function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }
}

// Namespace with interfaces and types
export namespace API {
  export interface Response<T> {
    data: T;
    status: number;
    message: string;
  }
  
  export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
  
  export class Client {
    constructor(private baseUrl: string) {}
    
    async request<T>(method: HttpMethod, endpoint: string): Promise<Response<T>> {
      // Implementation would go here
      return {
        data: {} as T,
        status: 200,
        message: 'Success'
      };
    }
  }
  
  export namespace Endpoints {
    export const USERS = '/api/users';
    export const ARTICLES = '/api/articles';
    export const AUTH = '/api/auth';
  }
}

// Namespace merging (multiple declarations)
export namespace Logger {
  export function info(message: string): void {
    console.log(`[INFO] ${message}`);
  }
}

export namespace Logger {
  export function error(message: string): void {
    console.error(`[ERROR] ${message}`);
  }
  
  export function warn(message: string): void {
    console.warn(`[WARN] ${message}`);
  }
}