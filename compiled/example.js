// Class with methods
export class ArticleManager {
    apiUrl;
    articles = new Map();
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    addUser(user) {
        this.articles.set(user.email, user);
    }
    getUser(email) {
        return this.articles.get(email);
    }
    async fetchArticles() {
        const response = await fetch(this.apiUrl);
        return response.json();
    }
}
// Function with generics
export function createArray(length, value) {
    return Array(length).fill(value);
}
// Constant export
export const API_VERSION = '1.0.0';
// Default export
export default function greet(name) {
    return `Hello, ${name}!`;
}
// Namespace export
export var Utils;
(function (Utils) {
    function formatDate(date) {
        return date.toISOString().split('T')[0];
    }
    Utils.formatDate = formatDate;
    Utils.CONSTANTS = {
        MAX_RETRIES: 3,
        TIMEOUT: 5000
    };
})(Utils || (Utils = {}));
//# sourceMappingURL=example.js.map