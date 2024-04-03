import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpacexService } from './spacex.service';
import { Launch } from '../models/launch.model'; // Adjust the path as necessary

describe('SpacexService', () => {
  let service: SpacexService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpacexService]
    });
    service = TestBed.inject(SpacexService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve launches from the API via GET', () => {
    const dummyLaunches: Launch[] = [
      { flight_number: 1, mission_name: 'Test Mission 1', launch_year: '2020', launch_date_utc: '2020-01-01T00:00:00.000Z', launch_site: { site_name_long: 'Test Site 1' }, rocket: { rocket_name: 'Test Rocket 1' }, links: { mission_patch_small: 'http://example.com/patch1', article_link: 'http://example.com/article1' }, details: 'Test Detail 1' },
      { flight_number: 2, mission_name: 'Test Mission 2', launch_year: '2021', launch_date_utc: '2021-01-01T00:00:00.000Z', launch_site: { site_name_long: 'Test Site 2' }, rocket: { rocket_name: 'Test Rocket 2' }, links: { mission_patch_small: 'http://example.com/patch2', article_link: 'http://example.com/article2' }, details: 'Test Detail 2' }
    ];

    service.getLaunches().subscribe(launches => {
      expect(launches.length).toBe(2);
      expect(launches).toEqual(dummyLaunches);
    });

    const request = httpMock.expectOne(`${service.baseUrl}/launches`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyLaunches);
  });
});
