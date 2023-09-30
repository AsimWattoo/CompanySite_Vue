<template>
    <div class="menu-container">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="logo"/>
            <p class="heading">Axontick</p>
        </div>
        <div class="menu-items-container">
            <a class="menu-button" @click="toggle_menu" v-if="menuButtonShown">
                <font-awesome-icon icon="bars" />
            </a>
            <div class="menu-items" :class="{'expand-anim': menuExpanded, 'collapse-anim': !menuExpanded}">
                <div class="menu-item active">
                    Home
                </div>
                <div class="menu-item">
                    Services
                </div>
                <div class="menu-item">
                    Pricing
                </div>
                <div class="menu-item">
                    Products
                </div>
                <div class="menu-item">
                    About Us
                </div>
                <div class="menu-item outline">
                    <div class="outline-bg"></div>
                    <div class="text">
                        Contact Us
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuBar',
    data() {
        return {
            menuExpanded: true,
            menuButtonShown: false
        }
    },
    mounted() {
        window.addEventListener('resize', this.window_resized);
        this.adjust_to_window_width();
    },
    methods: {
        adjust_to_window_width() {
            if(window.screen.width < 810)
            {
                this.menuExpanded = false
                this.menuButtonShown = true
            }
            else
            {
                this.menuExpanded = true;
                this.menuButtonShown = false;
            }
        },
        toggle_menu() {
            this.menuExpanded = !this.menuExpanded;
        },
        window_resized() {
            this.adjust_to_window_width();
        }
    }
}
</script>

<style scoped lang="scss">

.menu-container {
    padding: 1em 2em;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.logo {

    display: flex;
    align-items: center;
    justify-content: start;

    img {
        width: 50px;
        height: 50px;
    }

    .heading {
        color: black;
        font-size: 2.3rem;
        margin: 0px 0.3em;
        font-weight: 500;
    }
}

.menu-items-container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: end;
}

.menu-button {
    color: white;
    font-size: 25px;
    height: auto;
    margin-right: 0.5em;
}

.menu-items {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;

    .menu-item {
        font-weight: 300;
        font-size: 18px;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        background-color: transparent;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        position: relative;

        &.active {
            color: #40c6b1;
        }

        &.outline {
            border: 2px solid #51fadf;
            border-radius: 10px;
            overflow: hidden;

            .outline-bg {
                position: absolute;
                top: 100%;
                left: 0%;
                background-color: #51fadf;
                width: 100%;
                height: 100%;
                z-index: 1;
                transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
            }

            .text {
                position: relative;
                z-index: 2;
            }
        }

        &:not(.outline)::before {
            content: '';
            position: absolute;
            top: 98%;
            left: 50%;
            width: 0;
            background-color: #51fadf;
            height: 2px;
            border-radius: 10px;
            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &:hover {
            &:not(.outline)::before {
                transform: translateX(-50%);
                width: 65%;
            }

            &.outline {
                color: black;
                .outline-bg{
                    top: 0%;
                }
            }
        }
    }
}

@keyframes expand {
    from {top: -270px;}
    to {top: 50px;}
}

@keyframes collapse {
    0% {top: 50px;}
    100% {top: -270px;}
}

@media only screen and (max-width: 810px) {

    .menu-container {
        padding: 0.6em 0.5em;

        .heading {
            color: white;
            font-size: 1.8rem;
        }

    }

    .expand-anim {
        animation: expand 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) both;
    }

    .collapse-anim {
        animation: collapse 0.4s cubic-bezier(0.075, 0.82, 0.01, 1) both
    }

    .menu-items-container {
        width: 75%;
        flex-direction: column;
        justify-content: end;
        align-items: end;

        .menu-items {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: absolute;
            height: 270px;
            background-color: transparent;
            backdrop-filter: blur(15px);
            width: 35%;
            border-radius: 10px;
            z-index: 1;

            .menu-item {
                margin-bottom: 0.25em;
            }

        }

    }
}

@media only screen and (max-width: 500px) {
    .heading {
        font-size: 1rem;;
    }
}

</style>