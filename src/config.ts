import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    // media: {
    //     path: '/media',
    //     title: 'media'
    // },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Un Baustista Dice',
    title: 'Un Bautista Dice',
    description: 'Compartiendo conocimiento por pasión a Cristo',
    url: 'https://unbautistadice.info/',
    githubUrl: 'https://github.com/one-aalam/astro-ink',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
