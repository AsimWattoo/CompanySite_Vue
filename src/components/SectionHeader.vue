<template>
    <div class="section-header" :id="this.id">
        <h2>{{ this.heading }}</h2>
    </div>
</template>

<script>
import { useSceneItem } from 'vue-scenejs';
import { inView } from 'motion';

export default {
    name: 'SectionHeader',
    props: ['heading', 'id'],
    mounted() {
        let header_id = `#${this.id} h2`
        let scene = useSceneItem({
            0: {
                transform: 'translateY(150px)',
                opacity: 0
            },
            1: {
                transform: 'translateY(0px)',
                opacity: 1,
            }
        }, {
            duration: 0.4,
            easing: 'ease',
            selector: header_id
        })
        inView(header_id, () => {
            scene.play();
        });
    }
}
</script>


<style scoped lang="scss">

.section-header {
        overflow: hidden;
        background-color: rgba(64, 198, 177, 1);
        border-radius: 5px;
        margin: 0px 10px;
        width: 100%;

        h2 {
            font-size: 2.5rem;
            color: white;
            font-weight: 400;
            opacity: 0;
        }
    }

</style>