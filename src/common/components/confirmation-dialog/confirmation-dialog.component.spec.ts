import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component'



describe('ConfirmationDialogComponent component specs', () => {

   it('should call onAgreeClick when it clicks on "Agree" button', () => {
   // Arrange
    const props = {
      isOpen: jest.fn(),
      onAccept:jest.fn(),
      onClose: jest.fn(),
      title: 'hola',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
      };

    // Act
     render(<ConfirmationDialogComponent {...props} />);

      const titleElement = screen.getByText(props.title)

   // Assert

   expect(titleElement).toBeInTheDocument()

   })
  })


