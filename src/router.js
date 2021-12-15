import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home'
import Square from './Square/Square'
import Circle from './Circle/Circle'
import Triangle from './Triangle/Triangle'
import Diamond from './Diamond/Diamond'

export default (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/square' element={<Square/>}/>
        <Route path='/circle' element={<Circle/>}/>
        <Route path='/triangle' element={<Triangle/>}/>
        <Route path='/diamond' element={<Diamond/>}/>
    </Routes>
)