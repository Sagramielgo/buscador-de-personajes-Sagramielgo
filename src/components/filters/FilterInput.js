const FilterInput = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value.toUpperCase(),
    });
  };

  const handleReset = () => {
    props.handleReset();
  };
  return (
    <label className="form__label" htmlFor="searchField">
      <input
        className="form__input"
        type="text"
        name="searchField"
        id="searchField"
        placeholder="write a character name"
        onChange={handleChange}
      ></input>
      <span className="icon iconInput fas fa-undo" onClick={handleReset}></span>
    </label>
  );
};
export default FilterInput;
