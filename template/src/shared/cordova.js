// https://github.com/WorkPlusFE/codash

import { Cordova } from '@workplus/codash';

const openMock = process.env.NODE_ENV === 'production' ? false : true;
const config = {
  mock: openMock,
  mockData: {
    'WorkPlus_Auth': {
      'getAccessToken': function(params) {
        return { access_token: 'mock_token_custom' };
      },
    },
  },
};

export const IS_MOCK_MODE = openMock;

const wp = new Cordova(config);
export const getAccessToken = wp.create('WorkPlus_Auth', 'getAccessToken');
