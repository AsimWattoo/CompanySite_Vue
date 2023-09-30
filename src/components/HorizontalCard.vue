<template>
    <div class="card-container" :id="id">
        <div class="column text" id="first-column" v-if="!flip">
            <div class="subtitle">
                Service
            </div>
            <div class="heading">
                {{ this.title }}
            </div>
            <div class="description">
                {{ this.description }}
            </div>
            <div class="btn btn-primary">
                Read more
            </div>
        </div>
        <div class="column align-end" id="second-column"  v-if="!flip">
            <img :src="imagePath" />
        </div>

        <div class="column align-start" id="first-column"  v-if="flip">
            <img :src="imagePath" />
        </div>
        <div class="column text" id="second-column" :class="filled ? 'filled' : ''" v-if="flip">
            <div class="subtitle">
                Service
            </div>
            <div class="heading">
                {{ this.title }}
            </div>
            <div class="description">
                {{this.description}}
            </div>
            <div class="btn btn-primary">
                Read more
            </div>
        </div>

    </div>
</template>

<script>
import { inView } from 'motion';
import { useSceneItem } from 'vue-scenejs';

export default {
    name: 'HorizontalCard',
    props: ['id', 'flip', 'image', 'title', 'description', 'filled'],
    computed: {
        imagePath() {
            if(this.image != '') {
                return require(`../assets/images/${this.image}`)
            } 
            else {
                return null;
            }
        }
    },
    mounted() {
        let containerId = `#${this.id}`;
        let sceneItem = useSceneItem({
            0: {
                opacity: 0,
                transform: 'translateX(-300px)'
            },
            1: {
                opacity: 1,
                transform: 'translateX(0px)'
            }
        }, {
            duration: 0.5,
            easing: 'cubic-bezier(.25,.1,.17,1.55)',
            selector: `${containerId} #first-column`
        });

        let sceneItem2 = useSceneItem({
            0: {
                opacity: 0,
                transform: 'translateX(300px) '
            },
            1: {
                opacity: 1,
                transform: 'translateX(0px)'
            }
        }, {
            duration: 0.5,
            easing: 'cubic-bezier(.25,.1,.17,1.55)',
            selector: `${containerId} #second-column`
        });

        inView(containerId, () => {
            sceneItem.play();
            sceneItem2.play();

            return () => {
                sceneItem.play(0);
                sceneItem2.play(0);
            }
        })
    }
}
</script>

<style lang="scss" scoped>

.align-start {
    align-items: start !important;
}

.align-end {
    align-items: end !important;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    overflow: hidden;
    grid-column-gap: 0px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 70%;

    img {
        width: 50%;
        border-radius: 10px;
    }

    .btn {
        border: 1px solid #40c6b1;
        border-radius: 5px;
        margin: 1em 0em;
        padding: 0.5em 1em;
        cursor: pointer;
        font-weight: 600;
        position: relative;
        z-index: 1;
        transition: all 0.2s linear;
        overflow: hidden;
    }

    .btn::before {
        content: '';
        position: absolute;
        top: 0;
        right: -20%;
        height: 100%;
        width: 0%;
        background-color: #40c6b1;
        transition: all 0.2s linear;
        z-index: -1;
        transform: skewX(45deg);
    }

    .btn::after {
        content: '';
        position: absolute;
        top: 0;
        left: -20%;
        height: 100%;
        width: 0%;
        background-color: #40c6b1;
        transition: all 0.2s linear;
        z-index: -1;
        transform: skewX(45deg);
    }

    .btn:hover::after,
    .btn:hover::before {
        width: 80%;
    }

    .btn:hover {
        color: white;
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0px;
        opacity: 0;

        &.filled {
            background-color: #40c6b1;
        }

        &.text {

            &.filled {
                background-color: #40c6b1;
                color: white;
            }

        }

        &.filled {
            .subtitle {
                color: white;
                &::before,
                &::after {
                    background-color: white;
                }
            }
        }

    }

    &:hover {

        .subtitle::before {
            width: 80px;
            left: -135%;
        }

        .subtitle::after {
            width: 80px;
            right: -135%;
        }
    }

    .subtitle {
        font-size: 1.2rem;
        font-weight: 600;
        color: #40c6b1;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -90%;
            width: 52px;
            height: 5px;
            background-color: #40c6b1;
            transition: all 0.3s linear;
        }

        &::after {
            content: '';
            position: absolute;
            top: 52%;
            right: -90%;
            width: 50px;
            height: 5px;
            background-color: #40c6b1;
            transition: all 0.3s linear;
        }
    }

    .heading {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .description {
        font-weight: 300;
        font-size: 1.3rem;
    }

}

@media only screen and (max-width: 800px) {
    
    .align-start {
       align-items: center !important;
    }

    .align-end {
        align-items: center !important;
    }
    .card-container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto 1fr;
        grid-row-gap: 10px;
    }

    img {
        width: 70% !important;
    }

    .column {
        padding: 0.5em;
    }
}

@media only screen and (max-width: 400px) {
    .card-container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto 1fr;
        grid-row-gap: 10px;
    }

    img {
        width: 90% !important;
    }

    .column {
        padding: 0.5em !important;
    }

    .heading {
        font-size: 1.2rem;
    }
}

</style>