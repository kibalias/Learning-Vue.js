    import Header from './components/header.js';
    import Content from './components/content.js';

  const { createApp, ref } = Vue
  createApp({
    data() {
        return {
            activePage: 0,
            message: "Sample No Build VueJS",
            links: [
                {
                    name: 'Home', 
                    url: 'home.html',
                    title: 'Home Page',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ullam corrupti atque iste voluptatibus tenetur consequuntur, in consequatur recusandae provident quam unde modi odio molestiae qui! Laborum, et cumque? Home'
                },
                {
                    name: 'About', 
                    url: 'about.html',
                    title: 'About Page',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ullam corrupti atque iste voluptatibus tenetur consequuntur, in consequatur recusandae provident quam unde modi odio molestiae qui! Laborum, et cumque? About'
                },
                {
                    name: 'Contact', 
                    url: 'contact-page.html',
                    title: 'Contact Page',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt ullam corrupti atque iste voluptatibus tenetur consequuntur, in consequatur recusandae provident quam unde modi odio molestiae qui! Laborum, et cumque? Contact'
                },
            ]
        }
    },
    template: `
    <Header :links="links" :activePage="activePage" :navLinkClick="(index) => activePage = index"/>
    <h1 class="text-center">{{message}} </h1>
    <Content :pageTitle="links[activePage].title" :pageBody="links[activePage].content"/>
    `,
    components:{
        Header,
        Content
    },
  }).mount('#app')