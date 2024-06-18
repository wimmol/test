import { wrappedAxiosRequest } from '@/app/api/axios';
import {
  IGetLevelsResponse,
  IGetReferralsResponse,
  IPostStartRequest,
  IPostStartResponse,
} from '@/app/api/types';
import endpoints from '@/app/api/endpoints';

const postStart = (body: IPostStartRequest) =>
  wrappedAxiosRequest<IPostStartRequest, IPostStartResponse>({
    method: 'post',
    url: endpoints.start,
    data: body,
  });

const getLevels = () =>
  wrappedAxiosRequest<null, IGetLevelsResponse>({
    method: 'get',
    url: endpoints.levels,
  });

const getReferrals = () =>
  wrappedAxiosRequest<null, IGetReferralsResponse>({
    method: 'get',
    url: endpoints.referrals,
  });

const requests = {
  postStart,
  getLevels,
  getReferrals,
};

export default requests;
