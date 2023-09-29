<template>
    <div class="scene">
        <div class="cube">
            <div class="cube_face front-side">Front</div>
            <div class="cube_face left-side">Left</div>
            <div class="cube_face right-side">Right</div>
            <div class="cube_face back-side">Back</div>
            <div class="cube_face top-side">Top</div>
            <div class="cube_face bottom-side">Bottom</div>
        </div>
    </div>
</template>

<script>

import {useScene} from 'vue-scenejs';

export default {
    name: 'CubeComponent',
    mounted() {
        const scene = useScene({
            '.cube': {
                0: {
                    transform: 'rotateY(0deg) rotateX(0deg)',
                },
                1: {
                    transform: 'rotateY(90deg) rotateX(0deg)',
                },
                2: {
                    transform: 'rotateY(180deg) rotateX(0deg)',
                },
                3: {
                    transform: 'rotateY(270deg) rotateX(0deg)',
                },
                4: {
                    transform: 'rotateY(360deg) rotateX(0deg)',
                },
                5: {
                    transform: 'rotateY(360deg) rotateX(90deg)',
                },
                6: {
                    transform: 'rotateY(360deg) rotateX(180deg)',
                },
                7: {
                    transform: 'rotateY(360deg) rotateX(270deg)',
                },
                8: {
                    transform: 'rotateY(360deg) rotateX(360deg)',
                },
                9: {
                    transform: 'rotateY(360deg) rotateX(0deg)'
                },
                10: {
                    transform: 'rotateY(0deg) rotateX(0deg)'
                },
                11: {
                    transform: 'rotateY(45deg) rotateX(45deg)'
                },
                12: {
                    transform: 'rotateY(135deg) rotateX(45deg)'
                },
                13: {
                    transform: 'rotateY(275deg) rotateX(45deg)'
                },
                14: {
                    transform: 'rotateY(400deg) rotateX(45deg)'
                },
            }
        }, {
            easing: 'linear',
            selector: true,
            iterationCount: 'infinite'
        });

        scene.play();
    }
}

</script>

<style lang="scss" scoped>

.scene {
    width: 200px;
    height: 200px;
    perspective: 600px;
    margin-left: 500px;
}

.cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
}

.cube_face {
    position: absolute;
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    font-size: 2.5em;
    color: white;
    justify-content: center;
    align-items: center;
    transform: scale(2.5);
    transform: perspective(500px) translateZ(250px);
}

.front-side {
    background-color: rgba(0, 255, 0, 1);
    transform: rotateY(0deg) translateZ(100px);
}

.back-side {
    background-color: rgba(0, 0, 255, 1);
    transform: rotateY(180deg) translateZ(100px);
}

.left-side {
    background-color: rgba(255, 0, 0, 1);
    transform: rotateY(-90deg) translateZ(100px);
}

.right-side {
    background-color: rgba(128, 0, 128, 1);
    transform: rotateY(90deg) translateZ(100px);
}

.top-side {
    background-color: rgba(0, 255, 255, 1);
    transform: rotateX(90deg) translateZ(100px);
}

.bottom-side {
    background-color: rgba(127, 255, 0, 1);
    transform: rotateX(-90deg) translateZ(100px);
}

</style>