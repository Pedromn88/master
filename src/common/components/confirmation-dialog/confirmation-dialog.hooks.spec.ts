import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog component specs', () => {
  it('Is Open the Dialog', () => {
    // Arrange


    // Act
   const { result } = renderHook(() => useConfirmationDialog());




    // Assert

    expect(result.current.isOpen).toEqual(false);



  });
});
