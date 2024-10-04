import { useState } from 'react';
import { useActions } from '../hooks/useActions';



const RepositoriesList: React.FC = () => {
    const [term, setterm] = useState('');
    const {searchRepositories }:any  = useActions();

    const onSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term) as any;

    };
    return (<div>
        <form onSubmit={onSubmit} action="">
            <input value={term} onChange={e => setterm(e.target.value)} type="text" name="search" placeholder="Search" />
            <button>Search</button>
        </form>
    </div>
    );
};
export default RepositoriesList;