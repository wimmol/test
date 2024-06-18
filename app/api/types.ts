export interface IPostStartRequest {
  tg_id: number;
  ref_of: string;
  username: string;
  first_name: string;
  last_name: string;
  photo_url: string | undefined;
  is_premium: boolean;
}

export interface IPostStartResponse {
  balance: number;
  created: boolean;
  lvl: string;
}

export interface IGetLevelsResponse {
  //
}

export interface IGetReferralsResponse {
  //
}
