import React, { forwardRef, memo } from 'react';
import styled, { css } from 'styled-components';
import { GLOBAL_COLOR } from '../../styles/constans';

export const Input = memo(
  forwardRef(
    (
      {
        height = '35px',
        width = '250px',
        validated,
        variant = 'primary',
        ...rest
      },
      ref
    ) => {
      return (
        <InputStyled
          height={height}
          width={width}
          ref={ref}
          validated={validated}
          variant={variant}
          {...rest}
        />
      );
    }
  )
);

Input.displayName = 'Input';

const InputStyled = styled.input`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: 2px;
  font-size: 12px;
  border-radius: 5px;
  border: ${({ validated }) =>
    validated ? '1px solid #e5e5e5;' : '2px solid #ff8d8d;'};
  ${({ variant }) =>
    variant === 'primary'
      ? css`
          padding: 6px 0 2px 8px;
          background-color: ${GLOBAL_COLOR.WHITE};
        `
      : variant === 'secondary'
      ? css`
          max-width: 250px;
          padding: 6px 0 2px 34px;
          background-color: ${GLOBAL_COLOR.GRAY_1};
          border: none;
          max-width: 250px;
          ::placeholder {
            color: ${GLOBAL_COLOR.GRAY_2};
          }
        `
      : null}
`;
