import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
// import RoundButton from '@/components/RoundButton.tsx';
import hostImg from '@/assets/images/host.jpg';
import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <HostImgWrapper>
        <HostImg src={hostImg} />
      </HostImgWrapper>
      {/* <Caption textAlign={'center'}>{greeting.eventDetail}</Caption> */}
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      {/* <RoundButton
        target="_blank"
        href=""
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton> */}
    </InvitationWrapper>
  );
};

export default Invitation;

const HostImgWrapper = styled.div`
  width: calc(100% + 60px);
  height: 300px;
  overflow: hidden;
  object-fit: cover;
`;
const HostImg = styled.img`
  width: 100%;
  margin-top: -8rem;
`;

const InvitationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
