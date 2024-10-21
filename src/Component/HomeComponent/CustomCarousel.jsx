import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const CustomCarousel = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '70vh',
                overflow: 'hidden',
                marginTop: '-100px',
            }}
        >
            <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ height: '100%' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner" style={{ height: '100%' }}>
                    <div className="carousel-item active">
                        <img
                            src="https://st2.depositphotos.com/1350793/9161/i/450/depositphotos_91612518-stock-photo-blog-concept-with-man-holding.jpg"
                            alt="Blog1"
                            className="d-block w-100"
                            style={{ objectFit: 'cover', height: '100%' }} 
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://thinkzone.vn/uploads/2022_01/blogging-1641375905.jpg"
                            alt="Blog2"
                            className="d-block w-100"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://st2.depositphotos.com/1420973/6409/i/450/depositphotos_64095317-stock-photo-blog-concept-cloud-chart-print.jpg"
                            alt="Blog3"
                            className="d-block w-100"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
};

export default CustomCarousel;
