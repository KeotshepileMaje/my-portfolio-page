const Container = ({ children }) => {
    return (
        <div
            className="
            px-10
            max-w-6xl
            mx-auto
            xl:px-20
            md:px-10
        ">
            {children}
        </div>
    );
};

export default Container;
