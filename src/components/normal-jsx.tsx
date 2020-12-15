import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        name: {
            type: String
        },
        age: {
            type: Number
        }
    },
    setup(props) {
        const { name, age } = props;
        return () => (
            <>
                <span>{name} {age}</span>
            </>
        )
    }
});
