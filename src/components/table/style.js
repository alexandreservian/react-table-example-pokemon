import styled from '@emotion/styled';

const Style = styled.div`
  flex: 1 1 auto;
  height: 100%;

  .BaseTable__header-row {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0px -16px 11px -13px rgba(0, 0, 0, 0.18);
  }

  .BaseTable__header-cell-text {
    color: ${({ theme }) => theme.colors.second};
    font-family: 'roboto-medium';
    font-size: 0.9em;
    font-weight: normal;
    user-select: none;
  }

  .BaseTable__row-cell {
    border-right: none;
  }

  .BaseTable__row {
    border-bottom: none;

    &:nth-of-type(even) {
      background: ${({ theme }) => theme.colors.zebraRowTable};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.hoverRowTable};
      .BaseTable__row-cell-text {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .BaseTable__row.active {
    background: ${({ theme }) => theme.colors.activeRowTable};
  }

  .BaseTable__header-cell--sortable {
    &:hover {
      background: ${({ theme }) => theme.colors.bgmaincontainer};
    }
  }

  .BaseTable__sort-indicator {
    font-size: 0;
    position: relative;
    margin: 0 0 0 5px;
    &:before,
    &:after {
      background: ${({ theme }) => theme.colors.colorColumns};
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

export default Style;