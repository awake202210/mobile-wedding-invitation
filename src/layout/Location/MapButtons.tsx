import styled from '@emotion/styled';
import data from 'data.json';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

import Button from '@/components/Button.tsx';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>
        <SiNaver />
        네이버 지도
      </Button>
      <Button onClick={() => window.open(kakaoMap)}>
        <FaMapMarkerAlt />
        카카오맵
      </Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
