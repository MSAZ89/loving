import Carousel from 'react-bootstrap/Carousel';

export default function OurReviews () {
    return (
        <>
            <h2 className="text-uppercase text-center mt-60">Reviews</h2>
            <hr style={{ width: '25%' }} className="text-center"></hr>
            <Carousel className="mt-60">
                <Carousel.Item>
                    <p className="carousel-review-text mb-40">
                    I have been a patient of Loving Family Dental for 8 years. I highly recommend them. The staff is friendly,  helpful,  on time, and efficient.  They had great safety practices during the pandemic.  Dr. Tim Loving has always been straightforward and honest about my dental options...and is just a great dentist.
                    </p>        
                    <h5 className='carousel-review-label'>Barbara.</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="carousel-review-text mb-40">
                    This just might be the best dentist I’ve ever gone to!  Virtually painless crown installation. So cool that you have it made while you wait. Unlike the old days when you had to have a temporary one and then go back a week or so later. Many thanks for a great job!
                    </p>        
                    <h5 className='carousel-review-label'>J L.</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="carousel-review-text mb-40">
                    My entire family loves this dental practice and in 4 years none of us has ever had a single complaint. From the time you walk in the door, you feel welcome. They always seem to be on time but never rushed. They are all professional and personable—from the front desk, to the hygienists, to the eponym dentists. The entire operation is a class act. I often have to reschedule because I have a dynamic travel schedule; even then, they are matter-of-fact and accommodating. If I could give six stars, I would. They are that good.
                    </p>        
                    <h5 className='carousel-review-label'>Murf.</h5>
                </Carousel.Item>
                </Carousel>
        </>
    )
}