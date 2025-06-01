import styled from '@emotion/styled';
import data from 'data.json';
import { GiPin } from 'react-icons/gi';
import { TbArrowBigRightLinesFilled } from 'react-icons/tb';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <WayPointTitle>
              <GiPin /> {title}
            </WayPointTitle>
            <WayCaption>
              <TbArrowBigRightLinesFilled />
              {desc}
            </WayCaption>
          </Way>
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const WayPointTitle = styled.p`
  font-family: MaruburiBold, serif;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
`;

const WayCaption = styled.p<{ textAlign?: string }>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: center;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
