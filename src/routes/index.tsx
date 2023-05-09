import { BrowserRouter as Router, Route, Routes as RoutesDOM } from 'react-router-dom';
import Timemania from '../pages/TimeMania';
import Quina from "../pages/Quina";
import Megasena from '../pages/Megasena';
import Menu from '../components/Menu/Menu';


    export default function Routes() {

        return (
            <Router>
                <Menu />
                <RoutesDOM>
                    <Route path='/timemania' element={<Timemania />} />
                    <Route path='/megasena' element={<Megasena />} />
                    <Route path='/quina' element={<Quina />} />
                </RoutesDOM>
            </Router>
        )
    }
