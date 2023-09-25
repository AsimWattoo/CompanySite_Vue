<template>
    <div class="menu-container">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="logo"/>
        </div>
        <div class="menu-items-container">
            <div class="menu-button">
                <font-awesome-icon icon="bars" />
            </div>
            <div class="menu-items">
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
    name: 'MenuBar'
}
</script>

<style scoped lang="scss">

.menu-container {
    padding: 1em 2em;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    background-color: black;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.logo {
    img {
        width: 50px;
        height: 50px;
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
    visibility: collapse;
    height: 0;
    margin-right: 0.5em;
}

.menu-items {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;

    .menu-item {
        font-weight: 300;
        font-size: 25px;
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

@media only screen and (max-width: 960px) {

    .menu-container {
        padding: 0.3em 0.5em;

        img {
            height: 25px;
            width: 25px;
        }
    }

    .menu-items-container {
        width: 75%;
    }

    .menu-items {
        visibility: hidden;
        width: 0%;
    }

    .menu-button {
        visibility: visible;
        height: auto;
    }
}

</style>