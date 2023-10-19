import PropTypes from 'prop-types';

const Service = ({name, description, children}) => {
    return (
        <div className="border-2 p-4 text-center rounded-xl">
            <div className="flex justify-center">
                <p className="text-5xl mb-3">{children}</p>
            </div>
                <h2 className="font-semibold text-xl mb-2">{name}</h2>
                <p className="text-gray-400">{description}</p>
        </div>
    );
};

Service.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node
}

export default Service;