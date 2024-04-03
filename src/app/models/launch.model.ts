export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_utc: string;
  launch_site: {
    site_name_long: string;
  };
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small: string;
    article_link?: string;
  };
  details: string;
}
