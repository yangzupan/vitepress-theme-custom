export interface ThemeConfig {
    logo?: string
    nav?: NavItem[]
    sidebar?: SidebarConfig
    footer?: Footer
    socialLinks?: SocialLink[]
    // 其他你需要的自定义配置...
  }
  
  export interface NavItem {
    text: string
    link: string
    activeMatch?: string
  }
  
  export type SidebarConfig = SidebarItem[] | { [path: string]: SidebarItem[] }
  
  export interface SidebarItem {
    text: string
    link?: string
    items?: SidebarItem[]
    collapsed?: boolean
  }
  
  export interface Footer {
    message?: string
    copyright?: string
  }
  
  export interface SocialLink {
    icon: string
    link: string
  }
  