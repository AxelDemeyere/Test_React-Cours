interface GreetingProps {
    name?: string;
}

export function Greeting({ name = "invité" }: GreetingProps) {
    return <h1>Bonjour, {name}!</h1>;
}