
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';
const App = () => {
    return <Provider store={store}>
        <div className="App">
            <h1>Search For a Package</h1>
            <RepositoriesList></RepositoriesList>
        </div>
    </Provider>
   
};
export default App;