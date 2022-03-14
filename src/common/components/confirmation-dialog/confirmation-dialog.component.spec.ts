import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ConfirmationDialogComponent} from './confirmation-dialog.component'

it('should call onClose when it clicks on "Agree" button', () => {
  // Arrange
  const props = {
    onClose: jest.fn(),
  };

  // Act
  render(<ConfirmationDialogComponent {...props} />);

  // The only button available at this moment
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement);

  const dialogElement = screen.getByRole('dialog');
  const agreeButtonElement = within(dialogElement).getByRole('button');
  userEvent.click(agreeButtonElement);

  // Assert
  expect(props.onClose).toHaveBeenCalled();
});

