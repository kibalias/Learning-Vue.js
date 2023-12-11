const template = `
<nav class="navbar navbar-expand-lg bg-dark" id="navbar">
        <div class="container-fluid mx-1 mx-md-5 py-1 py-md-0">
            <a href="#" class="brand me-auto fs-3">brand</a>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse z-3 justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav list-unstyled gap-2 gap-md-4 fw-semibold text-center">
                <li v-for="(link, index) in links" class="nav-item" :key="index">
                  <a 
                    class="nav-link"
                    :href="link.url"
                    @click.prevent="navLinkClick(index)"
                  > {{link.name}} </a>
                </li>
              </ul>
            </div>
        </div>
    </nav>
`

export default {
    template,
    data() {
        
    }, 
    methods: {

    },
    props: ['links', 'activePage', 'navLinkClick'], 
    mounted() {
        console.log('Header is mounted')
    }
}