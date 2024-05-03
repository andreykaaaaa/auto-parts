type IconsInnerType = { [name: string]: string };
const prepareIconsType = <T extends IconsInnerType>(config: T): T => config;

const icons = prepareIconsType({
    Geo: 'bi:geo-alt',
    Cart: 'bi:cart',
    Like: 'flat-color-icons:like',
    Checked: 'fluent:checkbox-checked-20-filled',
    Menu: 'material-symbols:menu',
    Plus: 'ic:baseline-plus',
    Phone: 'iconamoon:phone-light',
    LikeWithoutBackround: 'icon-park-outline:like',
    Left: 'teenyicons:arrow-left-solid',
    Search: 'material-symbols-light:search',
    Close: 'material-symbols-light:close',
    AboutUs: 'mdi:about-circle-outline',
    Right: 'ep:right',
    Profile: 'iconamoon:profile-light'
})

export type IconsType = keyof typeof icons;
export default icons;