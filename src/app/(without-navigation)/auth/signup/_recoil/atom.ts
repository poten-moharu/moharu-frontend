import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
});

export const signUpInformationState = atom({
  key: 'signUpInformation',
  default: {
    email: null,
    name: null,
    profileImage: null,
    telephone: null,
    mbti: null,
    ageRange: null,
    gender: null,
    region: null,
    socialType: null,
    socialId: null,
    password: null,
  },
  effects_UNSTABLE: [persistAtom],
});
