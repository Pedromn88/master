import * as apiModel from './api/project.api-model'
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';




describe('./pods/project/project.mapper', () => {
   it('Debería de ser Object "Project" vacío cuando es "undefined en la entrada', () => {
      // Arrange
   const projectModel: apiModel.Project = undefined;
   const modelEmpty = viewModel.createEmptyProject();

      // Act
   const result = mapProjectFromApiToVm(projectModel);

      // Assert
   expect(result).toEqual(modelEmpty);
    });
  });


  describe('./pods/project/project.mapper', () => {
    it('Debería de ser Object "Project" vacío cuando es "null" en la entrada', () => {
       // Arrange
    const projectModel: apiModel.Project = null;
    const modelEmpty = viewModel.createEmptyProject();

       // Act
    const result = mapProjectFromApiToVm(projectModel);

       // Assert
    expect(result).toEqual(modelEmpty);
     });
   });

