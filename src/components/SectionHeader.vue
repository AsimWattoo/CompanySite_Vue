<template>
    <div class="section-header" :id="this.id">
        <h2>{{ this.heading }}</h2>
        <div class="after"></div>
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
        let line_selector = `#${this.id} .after`
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
            easing: 'ease-in-out',
            selector: header_id
        });

        let scene2 = useSceneItem({
            0: {
                opacity: 0,
                left: '50%',
                width: '0%'
            },
            1: {
                opacity: 1,
                left: '0%',
                width: '100%'
            }
        }, {
            duration: 0.7,
            easing: 'ease-in-out',
            selector: line_selector
        })

        inView(header_id, () => {
            scene.play();
            scene2.play();
        });
    }
}
</script>


<style scoped lang="scss">
@import '@/assets/sass/style.scss';

.section-header {
        overflow: hidden;
        margin: 0px 10px;
        width: 70%;
        border-radius: 5px;
        position: relative;

        .after {
            position: absolute;
            bottom: 10%;
            left: 50%;
            opacity: 0;
            width: 0%;
            height: 3px;
            background-color: $color-gray
        }

        h2 {
            font-size: 2.5rem;
            color: $color-dark;
            font-weight: 400;
            opacity: 0;
        }
    }


@media only screen and (max-width: 810px) {
    .section-header {
        width: 85%;
    }
}

@media only screen and (max-width: 600px) {
    .section-header {
        width: 90%;
    }
}

@media only screen and (max-width: 450px) {
    .section-header {
        width: 100%;
    }
}

</style>