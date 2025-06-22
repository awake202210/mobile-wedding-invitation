import styled from '@emotion/styled';
// import data from 'data.json';
import mainImg from '@/assets/images/cover.jpg';

const Main = () => {
  // const { greeting } = data;
  return (
    <div>
      {/* <MainTitle>{greeting.title}</MainTitle> */}
      {/* <MainTitleWrapper>
        <MainName>전소현</MainName>
        <MainDate>12/6</MainDate>
        <MainName>김범수</MainName>
      </MainTitleWrapper> */}
      <MainImgWrapper>
        <MainImg src={mainImg} />
      </MainImgWrapper>
      {/* <SubTitle>{greeting.eventDetail}</SubTitle> */}
    </div>
  );
};

export default Main;

// const MainTitleWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   // gap: 1rem;
//   // font-family: HSSanTokki20-Regular, serif;
//   font-family: 양진체, Ownglyph_ParkDaHyun, MaruburiSemiBold, serif;
//   line-height: 0;
//   color: #2f2120;
//   align-items: center;
// `;

// const MainName = styled.p`
//   font-size: 1.5rem;
//   white-space: pre-line;
// `;

// const MainDate = styled.p`
//   // font-family: 양진체, Ownglyph_ParkDaHyun, MaruburiBold, serif;
//   font-size: 2rem;
//   white-space: pre-line;
// `;

const MainImgWrapper = styled.div`
  width: calc(100% + 60px);
  // height: 500px;
  height: 100%;
  overflow: hidden;
  // margin: 0 -30px;
  margin: -30px;
`;

const MainImg = styled.img`
  // width: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  // margin-top: -10rem;
`;

// const SubTitle = styled.p`
//   font-size: 1.1rem;
//   color: #2f2120;
//   line-height: 140%;
//   white-space: pre-line;
// `;
