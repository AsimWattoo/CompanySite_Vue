<template>
    <div class="card" :id="id">
        <div class="main-display">
            <div class="icon">
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
    name: 'ServiceCard',
    props: ['id', 'icon', 'title', 'description'],
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
        inView(cardId, () => {
            enter_scene.play();
        });
    },
    components: { FontAwesomeIcon }
}
</script>

<style lang="scss" scoped>

.card {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
    border-radius: 5px;
    padding: 2em 1em;
    cursor: pointer;
    transition: all 0.2s linear;
    opacity: 0;
    background-color: transparent;
    transform: translateY(150px);
    position: relative;
    overflow: hidden;
    height: 100px;

    .main-display {
        position: absolute;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        transform: rotateZ(0deg);
        top: 0;
        left: 0;
        transition: all 0.3s linear;
    }

    .description {
        color: white;
        background-color: #40c6b1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 400;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        padding: 10px;
        box-sizing: border-box;
        z-index: -1;
        transition: all 0.3s linear;
    }



    .icon {
        svg {
            font-size: 2rem;
            transition: all 0.2s linear;
        }
    }

    &:hover {
        .main-display {
            transform: translateX(-100%) rotateZ(90deg);
        }
    }

    .heading {
        margin-top: 10px;
        font-size: 1.2rem;
        font-weight: 500;
        transition: all 0.2s linear;
    }
}


</style>