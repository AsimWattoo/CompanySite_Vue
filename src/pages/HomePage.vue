<template>
    <div class="page-container">
        <div class="page-header">
            <!--Text Column-->
            <div class="headings-container">
                <div>
                    <h1 class="align-left highlight">
                        UNLEASH
                    </h1>
                    <h1 class="align-justified">
                        THE POWER OF
                    </h1>
                    <h1 class="align-right highlight">
                        DESIGN
                    </h1>
                </div>
            </div>
            <!--Image Column-->
            <div class="image-container">
                <img src="../assets/images/cover.jpeg" alt="cover-image"/>
            </div>
        </div>
        <div class="section">
            <div class="section-header" id="services-section-header">
                <h2>Our Services</h2>
            </div>
            <div class="section-body">
                <ServiceCard id="card1"/>
                <ServiceCard id="card2"/>
                <ServiceCard id="card3"/>
                <ServiceCard id="card4"/>
                <ServiceCard id="card5"/>
                <ServiceCard id="card6"/>
                <ServiceCard id="card7"/>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue';
import {useScene} from 'vue-scenejs';
import {inView} from 'motion'


export default {
    name: 'HomePage',
    mounted() {
        let scene = useScene({
            '#services-section-header': {
                0: {
                    transform: 'translateX(-150px)',
                    opacity: 0
                },
                1: {
                    transform: 'translateX(0px)',
                    opacity: 1,
                }
            }
        }, {
            duration: 2,
            easing: 'linear',
            selector: true
        })
        inView('#services-section-header', () => {
            scene.play();
        });

    },
    components: { ServiceCard}
}
</script>

<style lang="scss" scoped>

#services-section-header {
    opacity: 0;
}

.page-header {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr;
    position: relative;
}

.headings-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 750px;
    justify-content: center;
}

.headings-container > div {
    width: 70%;
    display: flex;
    flex-direction: column;

   h1{
        font-size: 4em;
        margin: 0.2em 0;
    }

    .highlight {
        font-size: 5em !important;
        color: #40c6b1;
    }
}

.align-left {
    text-align: left;
    animation: slide-in-from-left 2s cubic-bezier(0.075, 0.82, 0.165, 1) both;
}

.align-justified {
    text-align: center;
    animation: fade-in 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.align-right {
    position: relative;
    text-align: right;
    animation: slide-in-from-right 2s cubic-bezier(0.075, 0.82, 0.165, 1) both;
}

.dotted-line {
    border-width: 1px;
    border-color: black;
    border-style: dashed;
}

.pos-absolute {
    position: absolute;
    top: 0%;
    left: 0%;
}

.process-animation {
    width: 100%;
    height: 300px;
    position: relative;

    .animation-area {
        img {
            height: 50px;
            width: 50px;
            position: absolute;
            top: 0%;
            left: 0%;
            background-color: white;
        }
    }
}

.section {
    padding: 10px;
    margin: 0px 10px;
    border-top: 1px solid #dedede;

    .section-header h2{
        font-size: 2.5rem;
        color: gray;
        font-weight: 400;
    }

    .section-body {
        display: grid;
        padding: 1em;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 2em;
        grid-row-gap: 2em;
        overflow: hidden;
        transition: all 0.2s linear;
    }
}

@keyframes slide-in-from-left {
    from {margin-left: -500px;}
    to {margin-left: 0px;}
}

@keyframes fade-in {
    0% {scale: 0;}
    100% {scale: 1}
}

@keyframes slide-in-from-right {
    from {margin-right: -500px;}
    to {margin-right: 0px;}
}

.image-container {
    display: flex;
    justify-content: end;
}

.image-container img{
    height: 750px;
    width: 650px;
    top: -100px;
    border-radius: 0 0 0 75px;
    position: absolute;
    z-index: -2;
}

@media only screen and (max-width: 1000px) {
    .align-justified {
        color: white;
    }

    .headings-container {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .image-container {
        grid-column-start: 1;
        grid-column-end: 3;
    }

}

@media only screen and (max-width: 810px) {

    .headings-container {
        height: 700px;
    }

    .headings-container > div {
        width: 70%;
        display: flex;
        flex-direction: column;

        h1{
            font-size: 2em;
            margin: 0.2em 0;
        }

        .highlight {
            font-size: 3em !important;
            color: #40c6b1;
        }
    }

    .image-container img {
        width: 100%;
        height: 700px;
        border-radius: 0px;
    }
}


@media only screen and (max-width: 600px) {

    .headings-container {
        height: 500px;
    }

    .headings-container > div {
        width: 70%;
        display: flex;
        flex-direction: column;

        h1{
            font-size: 1em;
            margin: 0.2em 0;
        }

        .highlight {
            font-size: 2em !important;
            color: #40c6b1;
        }
    }

    .image-container img {
        height: 500px;
    }
}

@media only screen and (max-width: 400px) {

    .headings-container {
        height: 400px;
    }

    .image-container img {
        height: 400px;
    }
}

</style>