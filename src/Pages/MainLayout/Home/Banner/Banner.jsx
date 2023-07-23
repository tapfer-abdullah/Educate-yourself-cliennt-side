
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {   } from "swiper";
import HomeBannerContent from "./HomeBannerContent";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const Banner = () => {
  return (
    <div className=" ">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <HomeBannerContent
              cStyle="btn-sm"
              bgImg={`https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg?w=2000`}
            
              title={`Every student matters, every moment counts.`}
              subTitle={`EDUCATE YOURSELF`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>

          <SwiperSlide>
            <HomeBannerContent
            // bgImg={`https://as2.ftcdn.net/v2/jpg/02/39/56/53/1000_F_239565396_5onQ3TJYWACYZbPjdIAMX9WYYMKs4Ycz.jpg`}
            bgImg={`https://wallpapercave.com/wp/wp11440859.jpg`}
              cStyle="btn-sm"
              title={`
              Teaching Turning
              Today's Learners Into
              Tomorrow's Leaders`}
              subTitle={`EDUCATE YOURSELF`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>

          <SwiperSlide>
            <HomeBannerContent
            bgImg={`https://edtechmagazine.com/higher/sites/edtechmagazine.com.higher/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202011/GettyImages-507272783.jpg?itok=QeU8R4OC`}
              cStyle="btn-sm"
              title={`
              Knowledge is power. Education is the back bone of a nation`}
              subTitle={`EDUCATE YOURSELF`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>

          <SwiperSlide>
            <HomeBannerContent
            bgImg={`https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg`}
              cStyle="btn-sm"
              title={`
              Putting Children First. Preparing Children For Success In Life`}
              subTitle={`EDUCATE YOURSELF`}
              destination1={`/login`}
              destination2={`/learn-more`}
            ></HomeBannerContent>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
