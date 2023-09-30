<template>
    <div class="card-container" :id="id">
        <div class="column text" id="first-column" v-if="!flip">
            <div class="subtitle">
                Service
            </div>
            <div class="heading">
                Website Development
            </div>
            <div class="description">
                Tailored web development services designed to create distinctive and fully customized websites and web applications that precisely cater to the specific requirements of our clients.
            </div>
        </div>
        <div class="column" id="second-column"  v-if="!flip">
            <img :src="imagePath" />
        </div>

        <div class="column" id="first-column"  v-if="flip">
            <img :src="imagePath" />
        </div>
        <div class="column text" id="second-column" :class="filled ? 'filled' : ''" v-if="flip">
            <div class="subtitle">
                Service
            </div>
            <div class="heading">
                Website Development
            </div>
            <div class="description">
                Tailored web development services designed to create distinctive and fully customized websites and web applications that precisely cater to the specific requirements of our clients.
            </div>
        </div>

    </div>
</template>

<script>
import { inView } from 'motion';
import { useSceneItem } from 'vue-scenejs';

export default {
    name: 'HorizontalCard',
    props: ['id', 'flip', 'image', 'heading', 'description', 'filled'],
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
            easing: 'linear',
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
            easing: 'linear',
            selector: `${containerId} #second-column`
        });

        inView(containerId, () => {
            sceneItem.play();
            sceneItem2.play();

            // return () => {
            //     sceneItem.play(0);
            //     sceneItem2.play(0);
            // }
        })
    }
}
</script>

<style lang="scss" scoped>

.card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    width: 100%;

    img {
        height: 300px;
        width: 300px;
        border-radius: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em 3em;
        border-radius: 10px;
        opacity: 0;

        &.filled {
            background-color: #40c6b1;
        }

        &.text {
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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
        font-size: 1rem;
    }

}

@media only screen and (max-width: 800px) {
        .card-container {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-row-gap: 10px;
        }
    }

@media only screen and (max-width: 400px) {
    .card-container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 10px;
    }

    .column {
        padding: 0.5em !important;
    }

    .heading {
        font-size: 1.2rem;
    }
}

</style>