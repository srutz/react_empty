


export function Greeter(props: { name: string } & React.HTMLAttributes<HTMLHeadingElement>) {
    const { name, ...rest } = props;
    return (
        <h1 {...rest}>
            Hallo {name}
        </h1>
    )
}