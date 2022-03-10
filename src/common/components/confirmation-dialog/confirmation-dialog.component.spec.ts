import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component'


describe('ConfirmationDialogComponent component specs', () => {

   it('should call onAgreeClick when it clicks on "Agree" button', () => {
   // Arrange
    const props = {
      onAccept: jest.fn(),
      };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

      const buttonElement = screen.getByRole('button', {
      name: /cerrar/i,
      });
     userEvent.click(buttonElement);

    const agreeButtonElement = screen.getByRole('button', { name: /agree/i });
    userEvent.click(agreeButtonElement);

   // Assert
     expect(props.onAccept).toHaveBeenCalled();
   })
  })
