<template>
    <div class="card" :id="id">
        <div class="main-display">
            <div class="icon" :style="`background-color: ${this.icon_background_color}; color: ${this.icon_color};`">
                <FontAwesomeIcon :icon="icon"/>
            </div>
            <div class="heading">
                {{ this.title }}
            </div>
        </div>
        <div class="description">
            {{ this.description }}
        </div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {inView} from 'motion';
import {useSceneItem} from 'vue-scenejs'

export default {
    name: 'InfoCard',
    props: ['id', 'icon', 'title', 'description', 'icon_color', 'icon_background_color'],
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
            duration: 0.4,
            selector: cardId,
            easing: 'linear'
        });
        inView(cardId, () => {
            enter_scene.play();
        });
    },
    components: { FontAwesomeIcon }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    padding: 2em 1em;
    cursor: pointer;
    transition: all 0.2s linear;
    opacity: 0;
    margin: 50px 0px 0px 0px;
    background-color: transparent;
    transform: translateY(150px);
    position: relative;

    .main-display {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        transition: all 0.3s linear;
    }

    .description {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 300;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        transition: all 0.3s linear;
    }



    .icon {
        transform: translateY(-60px);
        width: 70px;
        height: 70px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 2rem;
            transition: all 0.2s linear;
        }
    }

    .heading {
        margin-top: 10px;
        font-size: 1.2rem;
        font-weight: 700;
        transition: all 0.2s linear;
    }
}


</style>