import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={'/images/logo.png'} alt="logo" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">지금가입하기</Link>
                    </li>
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
