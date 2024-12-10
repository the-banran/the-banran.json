export type Local = {
    Seoul: '서울';
    Incheon: '인천';
    Gyeonggi: '경기';
    Chungbuk: '충북';
    Chungnam: '충남';
    Daegu: '대구';
    Gyeongbuk: '경북';
    Busan: '부산';
    Ulsan: '울산';
    Gyeongnam: '경남';
    Gangwon: '강원';
    PR: '비례대표';
//   Local12: '대전';
//   Local13: '광주';
//   Local14: '세종';
//   Local15: '전북';
//   Local16: '전남';
//   Local17: '제주';
}

type Label<T> = {
  label: T[keyof T];
  value: keyof T;
}

export const Locals: Label<Local>[] = [
  { label: '서울', value: 'Seoul' },
  { label: '인천', value: 'Incheon' },
  { label: '경기', value: 'Gyeonggi' },
  { label: '충북', value: 'Chungbuk' },
  { label: '충남', value: 'Chungnam' },
  { label: '대구', value: 'Daegu' },
  { label: '경북', value: 'Gyeongbuk' },
  { label: '부산', value: 'Busan' },
  { label: '울산', value: 'Ulsan' },
  { label: '경남', value: 'Gyeongnam' },
  { label: '강원', value: 'Gangwon' },
  { label: '비례대표', value: 'PR' },
]

