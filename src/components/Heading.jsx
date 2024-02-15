/**
 * Heading component to display a title.
 * @param {Object} props - The props object.
 * @param {string} props.title - The title to display.
 * @param {boolean} [props.center=false] - Whether to center-align the title.
 * @returns {JSX.Element} The rendered heading component.
 */

const Heading = ({ title, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="font-bold text-2xl">{title}</div>
        </div>
    );
};

export default Heading;
