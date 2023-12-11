const template = `

<div class="content px-2" id="content">
    <div class="logo text-danger">
       <h1>{{pageTitle}}</h1>
       <p>{{pageBody}}</p>
    </div>

    <div class="form" class="d-flex justify-content-center">
    <form action="#" method="GET" class="w-50 w-100">
        <input class="form-control mb-3" type="text" name="name" placeholder="Enter your name">
        <input class="form-control mb-3" type="text" name="address" placeholder="Enter your Address">
        <input class="form-control mb-3" type="email" name="email" placeholder="Enter your Email">
        <button class="btn btn-primary"> Submit </button>
    </form>
    </div>
</div>
`

export default {
    template,
    props: ['pageTitle', 'pageBody'],
    data() {

    }, 
    methods: {

    },
    mounted() {
        console.log('Content is mounted')
    }
}