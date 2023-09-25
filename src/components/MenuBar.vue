<template>
    <div class="menu-container">
        <div class="logo">
            <img src="../assets/images/logo.png" alt="logo"/>
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
            <div class="menu-item">
                Contact Us
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
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.logo {
    img {
        width: 50px;
        height: 50px;
    }
}

.menu-items {
    display: flex;
    align-items: center;
    justify-content: end;

    .menu-item {
        font-weight: 300;
        font-size: 25px;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        background-color: transparent;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        position: relative;

        &.active {
            color: #40c6b1;
        }

        &::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            width: 0;
            background-color: #51fadf;
            height: 2px;
            border-radius: 10px;
            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &:hover {
            &::before {
                transform: translateX(-50%);
                width: 80%;
            }
        }

    }
}

</style>