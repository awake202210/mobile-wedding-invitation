import styled from '@emotion/styled';

export const Heading1 = styled.p`
  // font-family: HSSanTokki20-Regular, serif;
  font-family: MaruburiBold, serif;
  font-size: 1.1rem;
  margin: 10px;
  // color: #e88ca6;
  letter-spacing: 0.3rem;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: MaruburiBold, serif;
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
