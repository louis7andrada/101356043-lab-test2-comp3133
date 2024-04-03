import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MissionlistComponent } from './missionlist.component';
import { SpacexService } from '../services/spacex.service';
import { of } from 'rxjs';
import { Launch } from '../models/launch.model';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;
  let spacexService: SpacexService;
  let mockLaunches: Launch[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionlistComponent],
      providers: [SpacexService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
    spacexService = TestBed.inject(SpacexService);

    // Mock launches data
    // mockLaunches = [
    //  { flight_number: 1, mission_name: 'Test Flight 1', launch_year: '2020', details: 'Details 1', links: { mission_patch_small: 'url1' } },
    //  { flight_number: 2, mission_name: 'Test Flight 2', launch_year: '2021', details: 'Details 2', links: { mission_patch_small: 'url2' } },
    // ];

    // Mock the getLaunches method to return mock launches
    spyOn(spacexService, 'getLaunches').and.returnValue(of(mockLaunches));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have launches after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.launches.length).toBeGreaterThan(0);
  });

  it('should filter launches correctly by year', () => {
    component.launches = mockLaunches;
    component.filterYear = '2020';
    component.applyFilter();
    expect(component.filteredLaunches.length).toBe(1);
    expect(component.filteredLaunches[0].mission_name).toBe('Test Flight 1');
  });
});
