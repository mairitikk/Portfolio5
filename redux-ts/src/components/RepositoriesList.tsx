import { useState } from 'react';
import { useDispatch } from 'react-redux';


const RepositoriesList: React.FC = () => {
    const [term, setterm] = useState('');

    const onSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

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