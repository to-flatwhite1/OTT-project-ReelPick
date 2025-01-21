import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LiaYarn } from 'react-icons/lia';
import Layout from './components/Layout';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GlobalStyle from './styled/reset';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" index element={<Home />} />
                        <Route path="/signup" index element={<SignUp />} />
                        <Route path="/login" index element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
