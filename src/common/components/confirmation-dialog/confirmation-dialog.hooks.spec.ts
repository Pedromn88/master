import { renderHook, act } from '@testing-library/react-hooks';
import { Credential } from 'model';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog component specs', () => {
  it('Set Item Delete', () => {
    // Arrange
    const newCredential: Credential = ({
      id: '1',
      name: 'admin',
    });

    // Act
   const { result } = renderHook(() => useConfirmationDialog());

   act(() => {
    result.current.setItemToDelete(newCredential);
     });


    // Assert

    expect(result.current.itemToDelete).toEqual(newCredential);



  });
});
