<template>
    <div class="menu-container">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="logo"/>
            <p class="heading">Axontick</p>
        </div>
        <div class="menu-items-container">
            <a class="menu-button" @click="toggle_menu" v-if="menuButtonShown && !menuExpanded">
                <font-awesome-icon icon="bars" />
            </a>
            <a class="menu-button" @click="toggle_menu" v-if="menuButtonShown && menuExpanded">
                <font-awesome-icon icon="times" />
            </a>
            <div class="menu-items" :class="{'expand-anim': menuExpanded, 'collapse-anim': !menuExpanded}">
                <div class="menu-item" :class="{'active': selectedRoute == 0}" @click="() => navigate_to(0)">
                    Home
                </div>
                <div class="menu-item" :class="{'active': selectedRoute == 1}" @click="() => navigate_to(1)">
                    Services
                </div>
                <div class="menu-item" :class="{'active': selectedRoute == 2}" @click="() => navigate_to(2)">
                    Pricing
                </div>
                <div class="menu-item" :class="{'active': selectedRoute == 3}" @click="() => navigate_to(3)">
                    Products
                </div>
                <div class="menu-item" :class="{'active': selectedRoute == 4}" @click="() => navigate_to(4)">
                    About Us
                </div>
                <div class="menu-item outline" :class="{'active': selectedRoute == 5}" @click="() => navigate_to(5)">
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
            menuButtonShown: false,
            selectedRoute: 0
        }
    },
    async mounted() {
        await this.$router.isReady();
        this.selectedRoute = this.$route.meta.id;
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
        navigate_to(route) {
            this.selectedRoute = route;
            if(route == 0) {
                this.$router.push('/');
            } else if (route == 1) {
                this.$router.push('services');
            }
        },
        toggle_menu() {
            this.menuExpanded = !this.menuExpanded;
        },
        window_resized() {
            this.adjust_to_window_width();
        },
    }
}
</script>

<style scoped lang="scss">

@import '@/assets/sass/style.scss';

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
        width: 80px;
        height: 80px;
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
    color: black;
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
        color: black;
        background-color: transparent;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        position: relative;

        &.active {
            color: $color-primary-hover;

            &.active::before {
                content: '';
                width: 30%;
                height: 3px;
                background-color: $color-primary-hover;
                position: absolute;
                top: 98%;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        &.outline {
            border: 2px solid $color-primary;
            border-radius: 10px;
            overflow: hidden;

            .outline-bg {
                position: absolute;
                top: 100%;
                left: 0%;
                background-color: $color-primary;
                width: 100%;
                height: 100%;
                z-index: 1;
                transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
            }

            &.active {
                color: white;
                .outline-bg {
                    top: 0% !important;
                }
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
            background-color: $color-primary;
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
                color: white;
                .outline-bg{
                    top: 0%;
                }
            }
        }
    }
}

@keyframes expand {
    from {top: -270px;}
    to {top: 100px;}
}

@keyframes collapse {
    0% {top: 100px;}
    100% {top: -270px;}
}

@media only screen and (max-width: 810px) {

    .menu-container {
        padding: 0.6em 0.5em;

        .heading {
            color: black;
            font-size: 1.8rem;
        }

        .menu-items {
            .menu-item {
                color: white;
            }
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