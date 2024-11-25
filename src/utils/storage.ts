import { Work } from "@/types";

const STORAGE_KEY_PREFIX = "Todo_app_vuejs3";


const storage = {
    getItems: (): Work[] => {
        const items = localStorage.getItem(STORAGE_KEY_PREFIX);
        return items ? JSON.parse(items) : [];
    },
    saveItems: (items: Work[]): void => {
        localStorage.setItem(STORAGE_KEY_PREFIX, JSON.stringify(items));
    },
    addItem: ({title, content}: {title: string, content: string}): void => {
        const items = storage.getItems();
        const newItem: Work = {
            id: Date.now(),
            title,
            content
        };
        items.push(newItem);
        storage.saveItems(items);
    },
    updateItem: (id: number, {title, content}: {title: string, content: string}): void => {
        const items = storage.getItems();
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, title, content } : item
        );
        storage.saveItems(updatedItems);
    },
    deleteItem: (id: number): void => {
        const items = storage.getItems();
        const updatedItems = items.filter(item => item.id !== id);
        storage.saveItems(updatedItems);
    }
}
export default storage;