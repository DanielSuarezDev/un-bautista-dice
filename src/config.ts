import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'inicio'
    },
    blog: {
        path: '/blog',
        title: 'blog & Recursos'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    // resource: {
    //     path: '/resource',
    //     title: 'resource'
    // },
    about: {
        path: '/about',
        title: 'nosotros'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Impulso Cristiano',
    title: 'Impulso Cristiano',
    description: 'Impulsando tu fe',
    url: 'https://unbautistadice.info/',
    githubUrl: 'https://github.com/one-aalam/astro-ink',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
