import { defineStore } from 'pinia'

export const useAuthorsStore = defineStore('authors', {
  state: () => ({
    authors: [
      {
        id: 1,
        fullName: 'Yann Martel',
        coverImage:
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg',
        writtenBooks: ['Life of Pi', 'Life of Pi 2', 'Life of Pi 3'],
        born: 'England',
        geners: ['Romance', 'Historical Fiction', 'Mystery']
      },
      {
        id: 2,
        fullName: 'Khaled Hosseini',
        coverImage:
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/111554483/original/31e067d65b21bb066c75e7b562fb73ed7283fc6c/create-social-media-avatars-in-minimalist-style.jpg',
        writtenBooks: ['The Kite Runner', 'The Kite Runner 2'],
        born: 'England',
        geners: ['Romance',  'Mystery', 'Sports', 'Fantasy']
      },
      {
        id: 3,
        fullName: 'Kate Quinn',
        coverImage:
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/111554483/original/d43403ec8cfd144786043cd6c5e9c4c966d5f61c/create-social-media-avatars-in-minimalist-style.jpg',
        writtenBooks: ['The Diamond Eye', 'The Diamond Eye 2,The Diamond Eye 4'],
        born: 'England',
        geners: ['Mystery', 'Sports', 'Fantasy']
      },
      {
        id: 4,
        fullName: 'Shelby Van Pelt',
        coverImage:
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111144127/original/796fac190959d25a639b38c89856df0a9d1f9e94/design-minimalist-flat-line-vector-avatar-of-you.jpg',
        writtenBooks: ['Remarkably Bright Creatures', 'Remarkably Bright Creatures 2'],
        born: 'England',
        geners: ['Romance', 'Historical Fiction', 'Fantasy']
      },
      {
        id: 5,
        fullName: 'Brendan Slocumb',
        coverImage:
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/111144127/original/d7ff66378168acd2d6f5334504b3d13790469e73/design-minimalist-flat-line-vector-avatar-of-you.jpg',
        writtenBooks: ['Symphony of Secrets', 'Symphony of Secrets 2'],
        born: 'England',
        geners: ['Romance',  'Sports', 'Fantasy']
      },
      {
        id: 6,
        fullName: 'Holly Black',
        coverImage:
          'https://cdn.dribbble.com/users/1572751/screenshots/5954325/media/091970739d4207afb467686b3d4e8e23.jpg',
        writtenBooks: ['The Wicked King', 'The Queen of Nothing'],
        born: 'England',
        geners: ['Romance',  'Mystery', 'Sports']
      },
      {
        id: 7,
        fullName: 'Liana De la Rosa',
        coverImage:
          'https://cdn.dribbble.com/users/1572751/screenshots/5950961/media/0ce9fab6a925973163e119150b2553c3.jpg?compress=1&resize=840x630&vertical=top',
        writtenBooks: ['Ana María and the Fox', 'Ana María and the Fox 2'],
        born: 'England',
        geners: ['Romance', 'Historical Fiction', 'Mystery', 'Sports', 'Fantasy']
      },
      {
        id: 8,
        fullName: 'Ana Huang',
        coverImage:
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/280229742/original/dfa2d1d3e52b1168a02b8b1e791717577b436bc8/draw-minimalist-flat-line-vector-avatar-of-you-within-24h.jpg',
        writtenBooks: ['King of Pride', 'King of Pride 2'],
        born: 'England',
        geners: [ 'Historical Fiction',  'Sports', 'Fantasy']
      },
      {
        id: 9,
        fullName: 'Chloe Liese',
        coverImage:
          'https://yt3.googleusercontent.com/ytc/AGIKgqPAWI5xLGr3pbP5Uc1i_Heu9KSngdlt37asEiT_Kg=s176-c-k-c0x00ffffff-no-rj',
        writtenBooks: ['If Only You', 'If Only You 2'],
        born: 'England',
        geners: ['Romance', 'Mystery', 'Sports', 'Fantasy']
      },
      {
        id: 9,
        fullName: 'Zeba Shahnaz',
        coverImage:
          'https://yt3.googleusercontent.com/ytc/AGIKgqPAWI5xLGr3pbP5Uc1i_Heu9KSngdlt37asEiT_Kg=s176-c-k-c0x00ffffff-no-rj',
        writtenBooks: ['If Only You', 'If Only You 2'],
        born: 'France',
        geners: ['Romance', 'Mystery', 'Historical Fiction', 'Fantasy']
      },
    ]
  })
})
