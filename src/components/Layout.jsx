import { Outlet } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            {/* 헤더*/}
            <Nav />
            {/* 교체 내용-라우터페이지 교체 */}
            <main style={{ background: 'pink', margin: 30 }}>
                {/* 라우터의 컴포넌트가 들어오는 곳 */}
                <Outlet />{' '}
            </main>
            {/* 푸터 고정 */}
            <Footer />
        </>
    );
};

export default Layout;
