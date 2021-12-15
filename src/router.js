import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home'
import Square from './Square/Square'
import Circle from './Circle/Circle'

export default (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/square' element={<Square/>}/>
        <Route path='/circle' element={<Circle/>}/>
    </Routes>
)