interface headingProps
{
    heading: string;
}

const Head = (props: headingProps) =>
{
    const { heading } = props;
    return (
        <p className="text-xl text-violet-950 font-semibold text-center py-10">
            {heading}
        </p>
    )
};

export default Head;