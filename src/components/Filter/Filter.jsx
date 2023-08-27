import PropTypes from 'prop-types';

export const Filter = ({ handleFilter }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" onChange={handleFilter} />
    </label>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
