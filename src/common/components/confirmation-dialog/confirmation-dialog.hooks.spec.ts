import { renderHook, act } from '@testing-library/react-hooks';

import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models/lookup';

describe('useConfirmationDialog component specs', () => {
  it('Set Item Delete', () => {
    // Arrange


    // Act
    const { result } = renderHook(() => useConfirmationDialog())



    // Assert



    expect(result.current.isOpen).toEqual(false);

  });
});


