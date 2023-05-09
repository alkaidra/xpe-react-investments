type HeaderProps = {
    children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
    return (
        <header className="bg-blue-300 p-2 text-center font-semibold">{ children }</header>
    );
}