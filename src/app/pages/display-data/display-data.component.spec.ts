import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of} from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

import { DisplayDataComponent } from './display-data.component';

describe('DisplayDataComponent', () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;
  let dataService: GetDataService;
  let dialog: MatDialog;
  let editDialogComponent: EditDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        DisplayDataComponent,
        EditDialogComponent,
        { provide: GetDataService, MatDialog,
          useClass: DataServiceMock
        }
      ],
      declarations: [ DisplayDataComponent ]
    })
    .compileComponents();
    component = TestBed.get(DisplayDataComponent);
    dataService = TestBed.get(GetDataService);
    dialog = TestBed.get(MatDialog);
    editDialogComponent = TestBed.get(EditDialogComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  it('should open the EditDialogComponent with the given data', () => {
    const itemData = { userId: 1, id: 2, title: 'original title', body: 'original body' };
    const expectedData = { data: { userId: 1, id: 2, title: 'original title', body: 'original body' } };
    
    spyOn(dialog, 'open').and.callThrough();
    component.openEditDialog(itemData);
    
    expect(dialog.open).toHaveBeenCalledWith(EditDialogComponent, expectedData);
  });

  it('should update the showPostsData with the given id', () => {
    component.confirmId = '1';
    component.newTitle = 'new title';
    component.newBody = 'new body';
    
    component.showPostsData();
    
    expect(component.postsDataFromUrl[0].title).toBe('new title');
    expect(component.postsDataFromUrl[0].body).toBe('new body');
  });
  
  class DataServiceMock {
    getPostsData() {
      return of([{ id: 1, title: 'original title', body: 'original body' }]);
    }
  }
  
});


