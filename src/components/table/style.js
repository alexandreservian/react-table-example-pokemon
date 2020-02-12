import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const colorsType = {
  Normal: '#9c9c63',
  Fighting: '#ae2a24',
  Flying: '#8e6eeb',
  Poison: '#913a92',
  Ground: '#dbb54c',
  Rock: '#a48f31',
  Bug: '#97a51d',
  Ghost: '#644e88',
  Steel: '#a0a0c0',
  Fire: '#ed6d11',
  Water: '#4577ed',
  Grass: '#68c23d',
  Electric: '#f6c913',
  Psychic: '#f53670',
  Ice: '#7ecece',
  Dragon: '#5e1df7',
  Dark: '#644e40',
  Fairy: '#e8788f'
}

export const Content = styled.div`
  flex: 1 1 auto;
  height: 100%;

  .BaseTable__header-row {
    background: #fff;
    box-shadow: inset 0px -16px 11px -13px rgba(0, 0, 0, 0.18);
  }

  .BaseTable__header-cell-text {
    color: #000;
    font-size: 1em;
    font-weight: bold;
    user-select: none;
  }

  .BaseTable__row-cell {
    border-right: none;
  }

  .BaseTable__row {
    border-bottom: none;
    transition: 0.3s;

    &:nth-of-type(even) {
      background: #f5f5f5;
    }

    &:hover {
      background: #929191;
      .BaseTable__row-cell-text {
        color: #fff;
      }
    }
  }

  .BaseTable__row.active {
    background: #afafaf;
  }

  .BaseTable__header-cell--sortable {
    &:hover {
      background: #dedede;
    }
  }

  .BaseTable__sort-indicator {
    font-size: 0;
    position: relative;
    margin: 0 0 0 5px;
    &:before,
    &:after {
      background: #8c8c8c;
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      top: 7px;
      width: 6px;
    }
    &:before {
      border-radius: 5px 0 0 5px;
      left: 6px;
      transform: rotate(45deg);
    }
    &:after {
      border-radius: 0 5px 5px 0;
      left: 3px;
      transform: rotate(-45deg);
    }
  }

  .BaseTable__sort-indicator--descending {
    &:before {
      left: 3px;
    }
    &:after {
      left: 6px;
    }
  }
`;

export const EmptyBox = styled.div`
  align-items: center;
  color: #717171;
  display: flex;
  font-size: 0.9em;
  height: 100%;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderElement = styled.div`
  display: inline-block;
  border-radius: 100%;
  margin: 2px;
  border: 2px solid #0696d7;
  border-bottom-color: transparent;
  margin: 2px;
  width: 22px;
  height: 22px;
  animation: ${rotate} 0.75s linear infinite;
`;

export const CampoNumerico = styled.div`
  text-align: right;
  width: 100%;
`;

export const BoxImg = styled.div`
  padding: 10px;
  img{
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
  }
`;

export const Type = styled.div`
  background: ${({ type }) => colorsType[type]};
  border-radius: 6px;
  color: #fff;
  display: inline-block;
  font-weight: bold;
  padding: 3px 8px;

  &:first-of-type{
    margin: 0 10px 0 0;
  }
`;