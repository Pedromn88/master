import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ConfirmationDialogComponent} from './confirmation-dialog.component'


describe('ConfirmationDialogComponent component specs', () =>{

it('Cuando se', () => {
  // Arrange
  const props = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'hola',
    labels: {
      closeButton: '',
      acceptButton: '',

    }
  };

  // Act
  render(<ConfirmationDialogComponent {...props} />);


    // The only button available at this moment


  const titleElement = screen.getByText(props.title)

  // Assert

  expect(titleElement).toBeinInTheDocument
});

})
