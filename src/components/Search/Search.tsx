
// import  Search from '../../assets/icon-search.svg?react';
import SearchIcon from '../../assets/icon-search.svg?react';
import styles from './Search.module.scss';


interface SearchProps {
  hasError:boolean;
  onSubmit:(text:string)=>void;
}

export const Search = ({hasError,onSubmit}:SearchProps) => {
const searchRef = useRef()

const handleSubmit =()=>{

}
  return(
    <form onSubmit={()=>handleSubmit}>
      <div  className={styles.search}>

      </div>
      Search component
    </form>
  )
}



