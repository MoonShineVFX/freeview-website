export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Video {
	id:string;
	display:string;
	title:string;
	eng_title:string;
	intro:string;
	video_host:string;
	video_url:string;
	resolution:string;
	years:string;
	total_duration:string;
  time_added:string;
  category:string;
	msg_board_video_id:string;
  imgpath:string;
}

export interface Element {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser';
}