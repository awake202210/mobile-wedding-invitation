import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <>
      <HostContainer>
        <HostInfo person={groom} />
        <HostInfo person={bride} />
      </HostContainer>
    </>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
    <HostDetails>
      <HostParents>
        {person.parents && (
          <>
            {person.parents.map((parent, index) => (
              <React.Fragment key={index}>
                {index > 0 && ' · '}
                {parent.name}
              </React.Fragment>
            ))}
          </>
        )}
      </HostParents>
      <RelationText>
        {/* <div>의</div> */}
        <Relation>{person.relation}</Relation>
      </RelationText>
      <HighlightedName>{person.name}</HighlightedName>
    </HostDetails>
  );
};

const HostContainer = styled.div`
  max-width: 100%;
  border-top: 1px solid #e3e3e3;
  // border-bottom: 1px solid #e3e3e3;
  padding: 1rem 0;
  gap: 8px;
  // font-family: HSSanTokki20-Regular, serif;
  font-family: MaruburiSemiBold, serif;
  font-size: 0.9rem;
  letter-spacing: 0.3rem;
  line-height: 2.2rem;
`;

const HostDetails = styled.div`
  padding: 0 55px;
  justify-content: center;
  white-space: nowrap;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  font-weight: 700;
`;

const HostParents = styled.div`
  width: 100%;
`;

const RelationText = styled.div`
  font-style: normal;
  font-size: 0.8rem;
  opacity: 0.4;
  line-height: 26px;
  width: 5rem;
  display: flex;
  gap: 6px;
`;

const Relation = styled.div`
  width: inherit;
`;

const HighlightedName = styled.span`
  // font-weight: 600;
  font-family: MaruburiBold;
  color: #4f4f4f;
  margin-right: 5px;
`;
