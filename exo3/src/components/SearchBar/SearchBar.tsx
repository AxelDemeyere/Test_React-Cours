import {useState, type ChangeEvent, type FormEvent} from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimmedQuery = searchQuery.trim();
        if (trimmedQuery) {
            onSearch(trimmedQuery);
            setSearchQuery("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={handleChange}
                autoFocus={true}
            />
            <button type="submit" disabled={!searchQuery.trim()}>
                Rechercher
            </button>
        </form>
    );
}
