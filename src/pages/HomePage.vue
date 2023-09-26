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
    </div>
</template>

<script>
export default {
    name: 'HomePage'
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
    animation: slide-in-from-left 2s cubic-bezier(0.075, 0.82, 0.165, 1) both;
}

.align-justified {
    text-align: center;
    animation: fade-in 2s linear;
}

.align-right {
    position: relative;
    text-align: right;
    animation: slide-in-from-right 2s cubic-bezier(0.075, 0.82, 0.165, 1) both;
}

@keyframes slide-in-from-left {
    from {margin-left: -500px;}
    to {margin-left: 0px;}
}

@keyframes fade-in {
    0% {scale: 0;}
    40% {scale: 1;}
    60% {scale: 1.4;}
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