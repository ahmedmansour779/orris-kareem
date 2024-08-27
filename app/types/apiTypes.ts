export type settingType = {
    behanceLink: string
    facebookLink: string
    id: string
    instgramLink: string
    linkedinLink: string
    logo: string
    vimeoLink: string
}
export type mainBannerType = {
    id: string,
    title: string,
    video_link: string
}
export type statsType = {
    id: string
    countries: number
    clients: number
    projects: number
}
export type servicesType = {
    id: string
    title: string
    image: string
}
export type aboutUsType = {
    id: string
    title: string
    content: string
}
export type contactType = {
    name: string
    email: string
    message: string
}
export type projectsType = {
    title: string
    cover: string
    images: string[]
}
export type clientsType = {
    id: string
    name: string
    image: string
}