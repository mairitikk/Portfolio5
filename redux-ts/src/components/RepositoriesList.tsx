import { useState } from 'react';


const RepositoriesList: React.FC = () => {
    const [term, setterm] = useState('');

    const onSubmit = () => {

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