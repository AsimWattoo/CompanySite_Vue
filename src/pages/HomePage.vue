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
            <div class="section-body cards">
                <HorizontalCard id="card1" image="website.jpeg"/>
                <HorizontalCard id="card2" :flip="true" image="ai.jpeg" :filled='true'/>
                <HorizontalCard id="card3" image="cms.jpeg"/>
                <HorizontalCard id="card4" :flip="true" image="website.jpeg" :filled='true'/>
                <HorizontalCard id="card5" image="ai.jpeg"/>
                <HorizontalCard id="card6" :flip="true" image="cms.jpeg" :filled='true'/>
                <HorizontalCard id="card7" image="website.jpeg"/>
                <HorizontalCard id="card8" :flip="true" image="ai.jpeg" :filled='true'/>
                <HorizontalCard id="card9" image="cms.jpeg"/>
            </div>
        </div>
    </div>
</template>

<script>
import {useScene} from 'vue-scenejs';
import {inView} from 'motion'
import HorizontalCard from '@/components/HorizontalCard.vue';


export default {
    name: 'HomePage',
    mounted() {

        let load_anim = useScene({
            '.image-container > img': {
                0: {
                    top: '-700px'
                },
                1: {
                    top: '-100px'
                }
            }
        }, {
            duration: 0.1,
            easing: 'ease-in-out',
            selector: true
        });

        load_anim.play();

        let scene = useScene({
            '#services-section-header h2': {
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
        inView('#services-section-header h2', () => {
            scene.play();
        });

    },
    components: { HorizontalCard }
}
</script>

<style lang="scss" scoped>

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
    animation: slide-in-from-left 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
}

.align-justified {
    text-align: center;
    animation: fade-in 1s cubic-bezier(.25,.1,.87,1.61) both;
}

.align-right {
    position: relative;
    text-align: right;
    animation: slide-in-from-right 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
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

    .section-header {
        overflow: hidden;
        background-color: rgba(239, 239, 239, 0.3);
        border-radius: 5px;
        margin: 0px 10px;

        h2 {
            font-size: 2.5rem;
            color: #40c6b1;
            font-weight: 400;
            opacity: 0;
        }
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

        &.cards {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
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

    .section-body {
        grid-template-columns: repeat(3, 1fr) !important;
        grid-template-rows: repeat(3, 1fr) !important;
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

    .section-body {
        grid-template-columns: repeat(2, 1fr) !important;
        grid-template-rows: repeat(4, 1fr) !important;
    }
}

@media only screen and (max-width: 450px) {

    .headings-container {
        height: 400px;
    }

    .image-container img {
        height: 400px;
    }

    .section-body {
        grid-template-columns: repeat(1, 1fr) !important;
        grid-template-rows: repeat(8, 1fr) !important;
    }
}

</style>