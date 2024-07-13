
// service section types
export interface ServiceCardItemSchema {
    id: number;
    title: string;
    img: string;
}


// mobile section types
export interface IconsSchema {
    img_icon: any;
    title_icon: string;
} 

export interface MobileBoxSchema {
    title: string;
    desc: string;
    img: any;
    icons: IconsSchema[];
    id: number;
    url: string;
    technologies: boolean;
    technologies_wrapper: IconsSchema[];
    className: string;
    aos: string[]

}


// tools schema
export interface ToolsSchema {
    id: number;
    title: string;
    img:any;
    category: string;
}


// project section types

export interface PortfolioBoxSchema {
    img : any;
    desc: string;
    logo: any;
    icon: any;
    icons: IconsSchema[];
    title:string;
    color: string[];
    width: number;
    classList: string;
    id:string;
    aos: string[]
}


// work section types
 export interface WorkShcema {
    id: number;
    title: string;
    img: any;
    desc: string;
 }