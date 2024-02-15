import React from 'react'; 

/**
 * Button Component
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text displayed on the button.
 * @param {boolean} [props.disabled] - Indicates if the button is disabled. Defaults to false.
 * @param {boolean} [props.outline] - Indicates if the button has an outline style. Defaults to false.
 * @param {boolean} [props.small] - Indicates if the button has a smaller size. Defaults to false.
 * @param {string} [props.custom] - Custom classes to be added to the button.
 * @param {JSX.Element} [props.icon] - An optional icon component to be displayed alongside the label.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A React component representing a button.
 */

const Button = ({ label, disabled, outline, small, custom, icon: Icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-md
        hover:opacity-80
        transition
        w-full
        border-slate-700
        flex
        items=center
        justify-center
        gap-2
        ${outline ? 'bg-white' : 'bg-slate-700'}
        ${outline ? 'text-slate' : 'text-white'}
        ${small ? 'text-sm font-light' : 'text-md font-semibold'}
        ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-2'}
        ${custom ? custom : ''}
        `}>
            {Icon && <Icon size={24} />}
            {label}
        </button>
    );
};
export default Button;
