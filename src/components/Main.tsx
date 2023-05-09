type MainProps = {
    children: React.ReactNode;
}

export function Main({ children }: MainProps) {
    return (
        <main className="container mx-auto p-4 flex flex-col gap-4">{ children }</main>
    );
}