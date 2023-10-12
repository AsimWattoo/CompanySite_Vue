<template>
    <div class="external-container">
        <div class="footer-container">
            <div class="company">
                <div class="header">
                    <img src="@/assets/images/logo.png"/>
                    <div class="name">
                        Axontick
                    </div>
                </div>
                <div class="description">
                    Bringing vision to life with a team of excellent professionals and innovatice and cutting edge technology.
                </div>
            </div>
            <div class="sitemap-container">
                <div class="sitemap">
                    <div class="title">
                        Links
                    </div>
                    <div class="link">
                        Home
                    </div>
                    <div class="link">
                        Services
                    </div>
                    <div class="link">
                        Products
                    </div>
                    <div class="link">
                        About
                    </div>
                    <div class="link">
                        Contact Us
                    </div>
                </div>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <div class="title">
                        Contact Info
                    </div>
                    <div class="info-item">
                        <div class="title">
                            Email:
                        </div>
                        <div class="value">
                            axontick@gmail.com
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="title">
                            Phone No:
                        </div>
                        <div class="value">
                            (+92) 311-4526242
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="title">
                            Address:
                        </div>
                        <div class="value">
                            Park Road, Islamabad
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/style.scss';

    .external-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-container {
        margin-top: 50px;
        border-top: 1px solid #dedede;
        width: 70%;
        padding: 3em 1em;
        box-sizing: border-box;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(3, 1fr);

        .company {
            display: flex;
            flex-direction: column;
            justify-content: start;
            .header {

                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0 10px 0;

                img {
                    height: 80px;
                    width: 80px;
                }

                .name {
                    font-size: 1.7rem;
                    font-weight: 600;
                }
            }
            .description {
                font-size: 1.2rem;
                color: $color-dark-gray
            }
        }

        .sitemap-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            .sitemap {
                text-align: left;

                .title {
                    font-size: 1.3rem;
                    font-weight: 500;
                    color: $color-dark;
                }

                .link {
                    font-size: 1.2rem;
                    color: $color-dark-gray;
                    cursor: pointer;
                    margin: 10px 0px;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        transform: scale(1.1) translateX(5%);
                        color: $color-primary;
                    }
                }

            }
        }

        .contact-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            .contact-info {
                text-align: left;

                & > .title {
                    font-size: 1.3rem;
                    font-weight: 500;
                    color: $color-dark;
                }

                .info-item {
                    font-size: 1.2rem;
                    color: $color-dark-gray;
                    margin: 20px 0px;
                    display: flex;
                    align-items: center;
                    justify-content: left;

                    & > .title {
                        margin-right: 0.5em;
                    }
                }

            }
        }

    }

@media only screen and (max-width: 1000px) {
    .footer-container {
        width: 85%;
    }
}

@media only screen and (max-width: 810px) {

    .footer-container {
        width: 100%;
    }
}


@media only screen and (max-width: 600px) {

    .footer-container {
        width: 80%;
        grid-template-columns: 1fr;
        grid-row-gap: 50px;
    }
}

@media only screen and (max-width: 450px) {

    .footer-container {
        width: 100%;
        grid-template-columns: 1fr;
        grid-row-gap: 50px;
    }
}
</style>