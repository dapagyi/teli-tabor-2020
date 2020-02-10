export type lelki_modul = {
  id: string;
  title: string;
  description: string[];
  sound: string;
};

export const lelki_modulok: lelki_modul[] = [
  {
    id: 'az-ur-a-te-orizod',
    title: 'Az Úr a te őriződ',
    description: [
      'Zarándokének.',
      'Tekintetem a hegyekre emelem: Honnan jön segítségem?',
      'Segítségem az ÚRtól jön, aki az eget és a földet alkotta.',
      'Nem engedi, hogy lábad megtántorodjék, nem szunnyad őriződ.',
      'Bizony nem szunnyad, nem alszik Izráel őrizője!',
      'Az ÚR a te őriződ, az ÚR a te oltalmad jobb kezed felől.',
      'Nem árt neked nappal a nap, sem éjjel a hold.',
      'Az ÚR megőriz téged minden bajtól, megőrzi életedet.',
      'Megőriz az ÚR jártodban-keltedben, most és mindenkor.',
    ],
    sound: 'Az_Úr_a_te_őriződ.m4a',
  },
];
