    import { ServiceCardItemSchema, MobileBoxSchema, ToolsSchema } from './types'

// services data
import { team_service, tel_service, erp_service, design_service, optimization_service, consulting_service } from  '@/assets'

export const service_data: ServiceCardItemSchema[] = [
    {
        id:1,
        title: "Team",
        img: team_service,
    },
    {
        id: 2,
        title: "Development of mobile applications",
        img: tel_service,
    },
    {
        id: 3,
        title: "Development and implementation ERP systems",
        img: erp_service,
    },
    {
        id: 4,
        title: "User interface, User experience design",
        img: design_service,
    },
    {
        id: 5,
        title: "Optimization IT consulting infrastructure",
        img: optimization_service,
    },
    {
        id: 6,
        title: "IT consulting",
        img: consulting_service,
    },
]  

// mobile section data
import { ios, android, crossplatform, swift, klotin, flutter, mobile_app_img } from  '@/assets'

export const mobil_data:MobileBoxSchema = {
    id: 1,
    url:"mobile-application",
    title: "Development of mobile applications",
    desc: "In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.",
    icons: [
       {
         title_icon: 'iOS',
         img_icon: ios,
       },
       {
         title_icon: 'Android',
         img_icon: android,
       },
       {
         title_icon: 'Crossplatform',
         img_icon: crossplatform,
       },
    ],
    technologies: true,
    technologies_wrapper: [
        {
            img_icon: swift,
            title_icon: 'Swift',
        },
        {
            img_icon: klotin,
            title_icon: 'Kotlin',
        },
        {
            img_icon: flutter,
            title_icon: 'Flutter',
        },
    ],
    img: mobile_app_img,
    className: "mobile-app-banner"
}

// erp section data
import {  crm, learning, e_commerce, pos, email, warehouse, erp_img } from  '@/assets'

export const erp_data:MobileBoxSchema = {
    className:"erp-banner",
    desc:"IT Systems of any level of complexity at a convenient time for you",
    id: 1,
    title: "ERP systems" ,
    icons: [
        {
            img_icon: crm,
            title_icon: 'CRM',
        },
        {
            img_icon: learning,
            title_icon: 'eLearning',
        },
        {
            img_icon: e_commerce,
            title_icon: 'E-Commerce',
        },
        {
            img_icon: pos,
            title_icon: 'POS',
        },
        {
            img_icon: email,
            title_icon: 'Sms / Email',
        },
        {
            img_icon: warehouse,
            title_icon: 'Warehouse',
        },
    ],
    technologies: false,
    url: "erp",
    technologies_wrapper: [],
    img: erp_img
}

// design section data
import {  ux, ui, prototyping, phone, web_design, atomic_design, figma, sketch, lottie, Illustrator } from  '@/assets'

export const design_data:MobileBoxSchema = {
    title: "UI / UX design",
    desc: 'Our company takes a human-centered approach to design',
    id: 1,
    url: "design",
    technologies: true,
    className: "design-banner",
    img: mobile_app_img,
    icons: [
        {
            title_icon: "UX",
            img_icon: ux,
        },
        {
            title_icon: "UI",
            img_icon: ui,
        },
        {
            title_icon: "Prototyping",
            img_icon: prototyping,
        },
        {
            title_icon: "Mobile Design",
            img_icon: phone,
        },
        {
            title_icon: "Web Design",
            img_icon: web_design,
        },
        {
            title_icon: "Atomic Design",
            img_icon: atomic_design,
        },
    ],
    technologies_wrapper: [
        {
            title_icon: "Figma",
            img_icon: figma,
        },
        {
            title_icon: "Sketch",
            img_icon: sketch,
        },
        {
            title_icon: "Lottie",
            img_icon: lottie,
        },
        {
            title_icon: "Illustrator",
            img_icon: Illustrator,
        },
    ],
    

}

// optimization section data
import { architecture, auto_testing, stress_testing, load_testing, devops, cloud, CI_CD } from '@/assets'

export const optimization_data:MobileBoxSchema = {
    title: "Optimization Infrastructure",
    desc: 'Our experienced professionals will help you optimize your infrastructure',
    technologies: false,
    technologies_wrapper: [],
    className: "optimization-banner",
    url: "optimization",
    id:1,
    img: erp_img,
    icons: [
        {
            title_icon: "Architecture",
            img_icon: architecture
        },
        {
            title_icon: "Auto testing",
            img_icon: auto_testing
        },
        {
            title_icon: "Stress testing",
            img_icon: stress_testing
        },
        {
            title_icon: "Load testing",
            img_icon: load_testing
        },
        {
            title_icon: "Devops",
            img_icon: devops
        },
        {
            title_icon: "Cloud",
            img_icon: cloud
        },
        {
            title_icon: "CI / CD",
            img_icon: CI_CD
        },
    ]

}

// consulting section data
import { frontend, backend, DevOps, UX_UI, qa, consulting_img } from '@/assets'

export const consulting_data : MobileBoxSchema = {
    title: "IT consulting",
    desc: "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
    url: "consulting",
    id: 1,
    className: "consulting-banner",
    img: consulting_img,
    icons: [
        {
            title_icon: "Frontend",
            img_icon: frontend,
        },
        {
            title_icon: "Backend",
            img_icon: backend,
        },
        {
            title_icon: "Architecture",
            img_icon: architecture,
        },
        {
            title_icon: "DevOps",
            img_icon: DevOps,
        },
        {
            title_icon: "UX/UI",
            img_icon: UX_UI,
        },
        {
            title_icon: "QA",
            img_icon: qa,
        },
    ],
    technologies: false,
    technologies_wrapper: [],
}


// tools data 
import {Node_JS, PHP, Photoshop,Python, PostgreSQL, Principle, Promotheus, React_JS, Sass, Sketch, Swift, Terraform, Vue_JS , YouTrack, Zeplin, Figma, Flutter, GO, IOS, Illustrator_language, Invision, Java, Javascript, Jmeter, Kotlin, Kubernetes, Lottie, Material_UI, MongoDB, Next_JS, AWS, Azure, GCP, DigitalOcean, Adobe_suite, Android, Bitbucket, Gatsby_JS, Grafana, Loki, Gitlab, Ant_Design, Balsamic,  Cassandra, Appium, Cypress, Docker, ELK} from '@/assets'

export const tools_data:ToolsSchema[] = [
    {
        id: 1,
        title: "Promotheus",
        img: Promotheus,
        category: "Devops"
    },
    {
        id: 2,
        title: "Loki",
        img: Loki        ,
        category: "Devops"
    },
    {
        id: 3,
        title: "Bitbucket",
        img: Bitbucket,
        category: "Devops"
    },
    {
        id: 4,
        title: "Gitlab",
        img: Gitlab,
        category: "Devops"
    },
    {
        id: 5,
        title: "Kotlin",
        img: Kotlin        ,
        category: "Mobile"
    },
    {
        id: 6,
        title: "Android",
        img: Android,
        category: "Mobile"
    },
    {
        id: 7,
        title: "Java",
        img: Java,
        category: "Mobile"
    },
    {
        id: 8,
        title: "Azure",
        img: Azure,
        category: "Infrastructure"
    },
    {
        id: 9,
        title: "GCP",
        img: GCP,
        category: "Infrastructure"
    },
    {
        id: 10,
        title: "DigitalOcean",
        img: DigitalOcean,
        category: "Infrastructure"
    },
    {
        id: 11,
        title: "AWS",
        img: AWS,
        category: "Infrastructure"
    },
    {
        id: 12,
        title: "Kubernetes",
        img: Kubernetes,
        category: "Infrastructure"
    },
    {
        id: 13,
        title: "ELK",
        img: ELK,
        category: "Devops"
    },
    {
        id: 14,
        title: "Grafana",
        img: Grafana,
        category: "Devops"
    },
    {
        id: 15,
        title: "Terraform",
        img: Terraform,
        category: "Devops"
    },
    {
        id: 16,
        title: "IOS",
        img: IOS,
        category: "Mobile"
    },
    {
        id: 17,
        title: "Swift",
        img: Swift,
        category: "Mobile"
    },
    {
        id: 18,
        title: "Flutter",
        img: Flutter,
        category: "Mobile"
    },
    {
        id: 19,
        title: "Next.JS",
        img: Next_JS,
        category: "Frontend"
    },
    {
        id: 20,
        title: "React.JS",
        img: React_JS,
        category: "Frontend"
    },
    {
        id: 21,
        title: "Javascript",
        img: Javascript,
        category: "Frontend"
    },
    {
        id: 22,
        title: "Balsamic",
        img: Balsamic,
        category: "UX/UI"
    },
    {
        id: 23,
        title: "Invision",
        img: Invision,
        category: "UX/UI"
    },
    {
        id: 24,
        title: "Figma",
        img: Figma,
        category: "UX/UI"
    },
    {
        id: 25,
        title: "Docker",
        img: Docker,
        category: "Devops"
    },
    {
        id: 26,
        title: "PostgreSQL",
        img: PostgreSQL,
        category: "Backend"
    },
    {
        id: 27,
        title: "Python",
        img: Python,
        category: "Backend"
    },
    {
        id: 28,
        title: "Node.JS",
        img: Node_JS,
        category: "Backend"
    },
    {
        id: 29,
        title: "PHP",
        img: PHP,
        category: "Backend"
    },
    {
        id: 30,
        title: "GO",
        img: GO,
        category: "Backend"
    },
    {
        id: 31,
        title: "Ant Design",
        img: Ant_Design,
        category: "Frontend"
    },
    {
        id: 32,
        title: "Gatsby.JS",
        img: Gatsby_JS,
        category: "Frontend"
    },
    {
        id: 33,
        title: "Vue.JS",
        img: Vue_JS,
        category: "Frontend"
    },
    {
        id: 34,
        title: "Principle",
        img: Principle,
        category: "UX/UI"
    },
    {
        id: 35,
        title: "Sketch",
        img: Sketch,
        category: "UX/UI"
    },
    {
        id: 36,
        title: "Adobe suite",
        img: Adobe_suite,
        category: "UX/UI"
    },
    {
        id: 37,
        title: "YouTrack",
        img: YouTrack,
        category: "Testing"
    },
    {
        id: 38,
        title: "Appium",
        img: Appium,
        category: "Testing"
    },
    {
        id: 39,
        title: "Cypress",
        img: Cypress,
        category: "Testing"
    },
    {
        id: 40,
        title: "Jmeter",
        img: Jmeter,
        category: "Testing"
    },
    {
        id: 41,
        title: "MongoDB",
        img: MongoDB,
        category: "Backend"
    },
    {
        id: 42,
        title: "Cassandra",
        img: Cassandra,
        category: "Backend"
    },
    {
        id: 43,
        title: "Sass",
        img: Sass,
        category: "Frontend"
    },
    {
        id: 44,
        title: "Material UI",
        img: Material_UI,
        category: "Frontend"
    },
    {
        id: 45,
        title: "Zeplin",
        img: Zeplin,
        category: "UX/UI"
    },
    {
        id: 46,
        title: "Illustrator",
        img: Illustrator,
        category: "UX/UI"
    },
    {
        id: 47,
        title: "Lottie",
        img: Lottie,
        category: "UX/UI"
    },
    {
        id: 48,
        title: "Photoshop",
        img: Photoshop,
        category: "UX/UI"
    },

]