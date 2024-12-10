const OLocal = {
  Seoul: '서울',
  Incheon: '인천',
  Gyeonggi: '경기',
  Chungbuk: '충북',
  Chungnam: '충남',
  Daegu: '대구',
  Gyeongbuk: '경북',
  Busan: '부산',
  Ulsan: '울산',
  Gyeongnam: '경남',
  Gangwon: '강원',
  PR: '비례대표',
} as const;

type Direction = typeof OLocal[keyof typeof OLocal];
type Keyss = keyof typeof OLocal

export const Locals: {label: Direction; value: Keyss}[] = [
  { label: OLocal.Seoul, value: OLocal['서울'] }
];