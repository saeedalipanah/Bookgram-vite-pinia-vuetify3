import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: [
      {
        id: 1,
        name: 'Life of Pi',
        author: 'Yann Martel',
        isbn: '9780770430078',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg',
        gener: 'Fantasy',
        pageNumber: 460
      },
      {
        id: 2,
        name: 'The Kite Runner',
        author: 'Khaled Hosseini',
        isbn: '9780316393234',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg',
        gener: 'Historical Fiction',
        pageNumber: 371
      },
      {
        id: 3,
        name: 'The Diamond Eye',
        author: 'Kate Quinn',
        isbn: '9780062943514',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641777418i/58490567.jpg',
        gener: 'Historical Fiction',
        pageNumber: 435
      },
      {
        id: 4,
        name: 'Remarkably Bright Creatures',
        author: 'Shelby Van Pelt',
        isbn: '9780063204157',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg',
        gener: 'Historical Fiction',
        pageNumber: 368
      },
      {
        id: 5,
        name: 'Symphony of Secrets',
        author: 'Brendan Slocumb',
        isbn: '9780593315446',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1670796966i/61111253.jpg',
        gener: 'Mystery',
        pageNumber: 448
      },
      {
        id: 6,
        name: 'The Wicked King',
        author: 'Holly Black',
        isbn: '9780316310338',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1520620414i/26032887.jpg',
        gener: 'Fantasy',
        pageNumber: 336
      },
      {
        id: 7,
        name: 'The Queen of Nothing',
        author: 'Holly Black',
        isbn: '9780316310406',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553624975i/26032912.jpg',
        gener: 'Fantasy',
        pageNumber: 300
      },
      {
        id: 8,
        name: 'Ana María and the Fox',
        author: 'Liana De la Rosa',
        isbn: '9780593440889',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660147213i/61423847.jpg',
        gener: 'Romance',
        pageNumber: 352
      },
      {
        id: 9,
        name: 'King of Pride',
        author: 'Ana Huang',
        isbn: '9780593540621',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680192054i/62994279.jpg',
        gener: 'Romance',
        pageNumber: 358
      },
      {
        id: 10,
        name: 'If Only You',
        author: 'Chloe Liese',
        isbn: '9780592545622',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673290722i/75677471.jpg',
        gener: 'Sports',
        pageNumber: 376
      },
      {
        id: 11,
        name: 'Silver in the Bone',
        author: 'Alexandra Bracken',
        isbn: '9780593481653',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664201158i/62031346.jpg',
        gener: 'fantasy',
        pageNumber: 480
      },
      {
        id: 12,
        name: 'Midnight Strikes',
        author: 'Zeba Shahnaz',
        isbn: '9780593567555',
        coverImage:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656310116i/61356596.jpg',
        gener: 'fantasy',
        pageNumber: 448
      },
    ]
  })
})
