import { getItem, removeItem, setItem } from '@/utils/asyncStorage';
import { atom, AtomEffect } from 'recoil';

export interface LinkItem {
  title: string;
  image: string;
  link: string;
  createdAt: string;
}

export interface LinkListState {
  list: LinkItem[];
}


const asyncStorageEffect =
  (key: string): AtomEffect<LinkListState> =>
    ({ setSelf, onSet }) => {
      const loadPersisted = async () => {
        const savedValue = await getItem(key);
        if (savedValue !== null && savedValue !== undefined) {
          setSelf(JSON.parse(savedValue));
        }
      };

      loadPersisted();

      onSet((newValue, _, isReset) => {
        isReset ? removeItem(key) : setItem(key, JSON.stringify(newValue));
      });
    };

export const atomLinkList = atom<LinkListState>({
  key: "MAIN/LINK_LIST",
  default: {
    list: []
  },
  effects: [asyncStorageEffect('MAIN/LINK_LIST')]
})
