import Script from "next/script";
import * as stores from "@/data/store_data.json";

declare global {
  interface Window {
    kakao: any;
  }
}

const DEFAULT_LAT = 37.49765203;
const DEFAULT_LNG = 127.03088379;

export default function Map() {
  const loadKaKaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 식당데이터 마커 뛰우기
      stores?.["DATA"].map(store => {
        // 마커가 표시될 위치입니다

        var imageSrc = store?.bizcnd_code_nm
          ? `/images/markers/${store?.bizcnd_code_nm}.png`
          : "/images/markers/default.png";

        let imageSize = new window.kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
        let imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new window.kakao.maps.LatLng(
            store?.y_dnts,
            store?.x_cnts
          ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    });
  };

  // kakao Map로드
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        onReady={loadKaKaoMap}
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
