<template>
    <div class="card" :id="id">
        <div class="img">
            <img src="../assets/images/cover.jpeg" />
        </div>
        <div class="heading">
            Website Development
        </div>
        <div class="description">
            We provide excellent website development services with 24/7 availability and upto 1 month of free website maintenance
        </div>
    </div>
</template>

<script>

import {inView} from 'motion';
import {useSceneItem} from 'vue-scenejs'

export default {
    name: 'ServiceCard',
    props: ['id'],
    mounted() {
        let cardId = `#${this.id}`;
        let enter_scene = useSceneItem({
            0: {
                transform: 'translateY(150px)',
                opacity: 0,
            },
            1: {
                transform: 'translateY(0px)',
                opacity: 1
            }
        }, {
            duration: 0.2,
            selector: cardId,
            easing: 'linear'
        });

        // let exit_scene = useSceneItem({
        //     0: {
        //         transform: 'translateY(0px)',
        //         opacity: 1
        //     },
        //     1: {
        //         transform: 'translateY(150px)',
        //         opacity: 0,
        //     }
        // }, {
        //     duration: 0.2,
        //     selector: cardId,
        //     easing: 'linear'
        // });

        inView(cardId, () => {
            enter_scene.play();
        });
    }
}
</script>

<style lang="scss" scoped>

.card {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 5px;
    padding: 2em 1em;
    cursor: pointer;
    transition: all 0.2s linear;
    opacity: 0;
    transform: translateY(150px);

    &:hover {
        box-shadow: rgba(64, 198, 177, 0.5) 0px 3px 8px;
    }

    &:hover .heading {
        letter-spacing: 2px;
    }

    img {
        height: 200px;
        width: 150px;
        border-radius: 10px;
    }

    .heading {
        margin-top: 10px;
        font-size: 1.3rem;
        font-weight: 700;
        transition: all 0.2s linear;
    }

    .description {
        margin-top: 10px;
        color: gray;
        font-weight: 300;

    }
}


</style>