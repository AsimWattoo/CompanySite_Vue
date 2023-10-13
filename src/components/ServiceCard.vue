<template>
    <div class="service">
        <div class="image">
            <img src="@/assets/images/custom-web.jpeg"/>
        </div>
        <div class="header">
            {{ title }}
        </div>
        <div class="rating">
            <div class="avgRating">
                {{ avgRating }}
            </div>
            <div v-for="(rating, index) in this.ratings" :key="index">
                <FontAwesomeIcon icon="star" :class="{'empty': rating == 0}"/>
            </div>
            <div class="orders">
                ({{ orders }})
            </div>
        </div>
        <div class="description">
            {{ description }}
        </div>
        <div class="info-container">
            <div class="info-item">
                PKR <strong>{{ price?.toLocaleString() }}</strong>
            </div>
            <div class="info-container">
                -
            </div>
            <div class="info-item">
                <strong>{{ time }} {{ timeUnit }}</strong>
            </div>
        </div>
        <div class="btn-container">
            <div class="btn-primary">
                Place Order
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    name: 'ServiceCard',
    components: { FontAwesomeIcon },
    props: ['title', 'description', 'price', 'time', 'orders', 'avgRating', 'timeUnit'],
    data() {
        return {
            ratings: []
        }
    },
    mounted() {
        for(let i = 1; i <= 5; i++) {
            if(i <= this.avgRating)
                this.ratings.push(1)
            else
                this.ratings.push(0)
        }
    }
}

</script>

<style scoped lang="scss">
@import "@/assets/sass/style.scss";


.service {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1em 1.5em;
    max-width: 300px;
    border-radius: 5px;

    .image {
        margin: 0.5em 0;
        img {
            height: 200px;
            border-radius: 3px;
            color: $color-primary;
        }
    }

    .header {
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0 0 0.5em 0;
    }

    .rating {
        display: flex;
        justify-content: center;
        align-items: center;

        .avgRating {
            margin: 0 0.2em;
            color: orange;
        }

        svg {
            color: orange;
            &.empty {
                color: $color-dark;
            }
        }
        .orders {
            margin: 0 0.5em;
            color: $color-dark-gray;
        }
    }

    .description {
        font-weight: 300;
        font-size: 1rem;
        margin: 0.5em 0;
        color: $color-dark-gray;
    }

    .info-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0.5em 0;

        .info-item {
            margin: 0 0.2em;
            font-size: 0.8rem;  
            strong {
                font-size: 1rem;
            }
        }
    }

    .btn-container {
        display: flex;
        width: 100%;
        align-items: center;
        margin: 0.5em 0;
        justify-content: center;
        .btn-primary {
            padding: 0.5em 1.5em;
            border: 1px solid $color-primary;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            &:hover {
                background-color: $color-primary;
                color: white;
                transform: scale(1.05, 1.05);
            }
        }
    }
}
</style>