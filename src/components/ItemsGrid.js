import { useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { Popup } from './popup';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid({ characters }) {
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  function cardOnClickHandler(item) {
    setPopupSettings({
      visible: true,
      content: { ...item }
    });
  }

  if (!characters.length) {
    return null;
  }

  return (
    <>
      <Container>
        {characters.map((item) => (
          <Card
            key={item.id}
            onClickHandler={() => cardOnClickHandler(item)}
            {...item}
          />
        ))}

        <Popup settings={popupSettings} setSettings={setPopupSettings} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
