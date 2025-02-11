// import  Search from '../../assets/icon-search.svg?react';

import SearchIcon from "../../assets/icon-search.svg?react";
import styles from "./Search.module.scss";
import { Button } from "../Button/";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}
type FormFields ={
username:HTMLInputElement;
}
export const Search = ({ hasError, onSubmit }: SearchProps) => {

  // const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
const text = event.currentTarget.username.value;
if(text.trim()){
  onSubmit(text)
  event.currentTarget.reset()
}
    
    // const text = searchRef.current?.value || "";
    // if (text) {
    //   onSubmit(text)
    //   if(searchRef.current)
    //   searchRef.current.value ='';
    // }


  };
  return (
    <form onSubmit={ handleSubmit}  autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username"
          // ref={searchRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
