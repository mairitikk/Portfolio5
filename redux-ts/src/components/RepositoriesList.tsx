import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';


const RepositoriesList: React.FC = () => {
    const [term, setterm] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(actionCreators.searchRepositories(term) as any);

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