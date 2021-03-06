import '../../stylesSheets/filters/FilterSpecies.scss';
import PropTypes from 'prop-types';

const FilterSpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'specie',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className="specie__title">Species:</label>
      <select
        className="specie__input"
        name="specie"
        id="specie"
        onChange={handleChange}
        value={props.specie}
      >
        <option value="all">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};

FilterSpecies.propTypes = {
  specie: PropTypes.string,
};

export default FilterSpecies;
