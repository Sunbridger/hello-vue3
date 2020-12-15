export default {
    props: {
        title: ''
    },
    data: () => ({
        test: '这是always'
    }),
    render() {
        return (
            <>
                <input type="text" v-model={this.test}/>
                <span>{this.test}</span>
                <p>{this.title}</p>
            </>
        )
    }
}
