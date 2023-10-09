<template>
    <div class="pricing-container" :id="title" :class="{'most-popular': popular}">
        <div class="header">
            {{this.title}}
        </div>
        <div class="price">
            PKR <span>{{ (this.price).toLocaleString() }}
                </span>
        </div>
        <div class="features">
            <div class="feature-item" v-for="(feature, index) in this.features" :key="index">
                <div class="icon has" v-if="feature.included">
                    <FontAwesomeIcon icon="check" />
                </div>
                <div class="icon not-has" v-if="!feature.included">
                    <FontAwesomeIcon icon="times" />
                </div>
                <div class="text">
                    {{ feature.feature }}
                </div>
            </div>
        </div>
        <div class="btn-container">
            <div class="btn">
                Order Now
                <FontAwesomeIcon icon="chevron-right"/>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useSceneItem } from 'vue-scenejs';
import { inView } from 'motion';

export default {
    name: 'PricingComponent',
    props: ['title', 'price', 'features', 'popular', 'color'],
    components: { FontAwesomeIcon },
    mounted() {
        window.onresize += () => {
            let id = `#${this.title}`
            let scene = useSceneItem({
                0: {
                    opacity: 0,
                    transform: 'translateY(150px)'
                },
                1: {
                    opacity: 1,
                    transform: this.popular ? (window.innerWidth < 810 ? 'translateY(0px)' : 'translateY(-20px)') : 'translateY(0px)'
                }
            }, {
                easing: 'cubic-bezier(.14,.27,.47,1.33)',
                duration: 0.4,
                selector: id
            });

            inView(id, () => {
                scene.play();
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/style.scss';

.most-popular {
    transform: translateY(-20px);
}

.pricing-container {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 10px;
    border-radius: 10px;

    &.most-popular {
        border: 0.5px solid v-bind(color)
    }

    .header {
        font-size: 2rem;
        font-weight: 600;
        margin-top: 1em;
        color: v-bind(color)
    }

    .price {
        margin-top: 2em;
        font-size: 1rem;
        span {
            font-size: 2rem;
            font-weight: bold;
        }
    }

    .features {
        margin: 2em 0px 0 0;
    }

    .feature-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1em 0;
        width: 100%;
        justify-content: start;

        .icon {
            margin: 0px 10px;
            font-size: 1.2rem;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            &.has {
                background-color: rgba(50, 205, 50, 0.2);
                color: rgb(50, 205, 50);
            }

            &.not-has {
                background-color: rgba(214, 32, 32, 0.2);
                color: rgb(214, 32, 32);
            }

        }

        .text {
            font-size: 1.2rem;
            font-weight: 400;
            width: 90%;
        }
    }

    .btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .btn {
            border: 1px solid v-bind(color);
            padding: 10px;
            margin-top: 0.8em;
            margin-bottom: 0.5em;
            border-radius: 5px;
            width: 70%;
            font-size: 1.3rem;
            cursor: pointer;
            position: relative;
            transition: all 0.2s ease-in-out;

            svg {
                height: 0.8em !important;
                margin-left: 5px;
            }

        }

        .btn:after {
            content: '';
            background-color: v-bind(color);
            transition: all 0.2s ease-in-out;
            height: 100%;
            width: 0%;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: -1;
        }

        .btn:hover {
            color: white;

            &:after {
                width: 100%;
            }

        }

    }

}

@media only screen and (max-width: 810px) {
    .most-popular {
        transform: translateY(0px);
    }
}

</style>