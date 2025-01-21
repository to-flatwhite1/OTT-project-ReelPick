import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footerInner">
                <img src={'/images/logo_bottom.png'} alt="logo_bottom" />
                <div className="footer_wrap">
                    <div className="footer-details">
                        <div className="single-footer-detail">
                            <span className="label">상호명</span>
                            <span className="text">(주)ReelPick</span>
                        </div>
                        <div className="single-footer-detail">
                            <span className="label">대표이사</span>
                            <span className="text">홍길동</span>
                        </div>
                        <div className="single-footer-detail">
                            <span className="label">주소</span>
                            <span className="text">서울특별시 용산구 한강대로 100(한강로2가)</span>
                        </div>
                        <div className="single-footer-detail">
                            <span className="label">사업자등록번호</span>
                            <span className="text">106-86-43373</span>
                        </div>
                        <div className="single-footer-detail">
                            <span className="label">이메일</span>
                            <span className="text">
                                <a href="mailto:support_kr@amoremall.com">support_kr@reelpick.com</a>
                            </span>
                        </div>
                    </div>
                    <div className="footer_wrapp2">
                        <span className="footer-copyright">© ReelPick CORPORATION. All rights reserved.</span>
                        <div className="footer-section">
                            <ul className="footer-social">
                                <li>
                                    <Link to="/" target="_blank">
                                        Youtube&nbsp;<i class="fa-brands fa-youtube"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" target="_blank">
                                        Instagram&nbsp;<i class="fa-brands fa-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" target="_blank">
                                        Facebook&nbsp;<i class="fa-brands fa-square-facebook"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
