import { useState } from 'react';


const RepositoriesList: React.FC = () => {
    const [term, setterm] = useState('');
    return (<div>
        <form action="">
            <input type="text" name="search" placeholder="Search" />
            <button>Search</button>
        </form>
    </div>
    );
};
export default RepositoriesList;