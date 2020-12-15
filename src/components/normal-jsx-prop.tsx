import { defineComponent, PropType } from 'vue';

// props注入的类型
interface UserInfo {
    name: string;
    age: number;
    iphone?: string;
}

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
        console.log(name, age)
        return () => (
            <div>
                {name} {age}
            </div>
        )
    }
});
