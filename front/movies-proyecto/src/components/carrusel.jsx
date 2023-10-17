
import React from 'react'
function Carrusel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://www.todoshowcase.com/themes/default/images/banner_taylor_swift.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/inline-images/saw%20X.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                <img src="https://www.sdpnoticias.com/resizer/CVO7XczaEPYBGR8BuqdzHxqVca4=/640x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/47P5E4KQ4BCZ5N7NYANLI2JA2E.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block"></div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}
export default Carrusel;