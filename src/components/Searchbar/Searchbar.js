import {
  InputBlock,
  SearchbarForm,
  SearchbarInput,
  SearchbarButton,
} from './Searchbar.style';

const Searchbar = ({ searchImage }) => {
  return (
    <>
      <InputBlock>
        <SearchbarForm onSubmit={searchImage}>
          <SearchbarInput
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <SearchbarButton type="submit">
            <span>Search</span>
          </SearchbarButton>
        </SearchbarForm>
      </InputBlock>
    </>
  );
};

export default Searchbar;
