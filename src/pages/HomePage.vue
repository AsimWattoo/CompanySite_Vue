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
            <SectionHeader heading="Our Services" id="services"/>
            <div class="section-body cards">
                <HorizontalCard id="card1" image="custom-web.jpeg" title="Custom Website Development"
                    :is_popular="true"
                    description="Tailored web development services designed to create distinctive and fully customized websites and web applications that precisely cater to the specific requirements of our clients."/>
                <HorizontalCard id="card2" :flip="true" image="chatbot.jpeg" :filled='false' title="AI Chatbot Integration"
                    description="Enhance customer support and engagement with AI-powered chatbots. We integrate chatbot technology into your website to automate tasks and provide instant assistance."/>
                <HorizontalCard id="card3" image="api.jpeg" title="API Integration"
                    description="Developing and integrating APIs to facilitate seamless data exchange and functionality across various web applications and systems."/>
                <HorizontalCard id="card4" :flip="true" image="cms.jpeg" :filled='false' title="Content Management System"
                    description="We specialize in crafting and tailoring CMS platforms such as WordPress, Drupal, or Joomla to empower seamless content updates and effortless site management."/>
                <HorizontalCard id="card5" image="pwa.jpeg" title="Next Gen Progressive Web Apps (PWA)"
                    description="Creating PWAs that bring together the finest elements of web and mobile app experiences, encompassing offline functionality and push notifications."/>
                <HorizontalCard id="card6" :flip="true" image="ux.jpeg" :filled='false' title="Crafting a User Experience (UX) Design"
                    description="Emphasizing user-centered design principles to improve user engagement, satisfaction, and conversion rates"/>
                <HorizontalCard id="card7" image="seo.jpeg" title="Search Engine Optimization"
                    :is_popular="true"
                    description="Improve your website's visibility on search engines like Google. Our SEO experts employ white-hat techniques to enhance your rankings, drive organic traffic, and increase conversions."/>
                <HorizontalCard id="card8" :flip="true" image="webanalytics.jpeg" :filled='false' title="Web Analytics and Reporting"
                    description="Gain insights into user behavior and website performance through analytics tools. We help you make data-driven decisions to improve your online strategy."/>
            </div>
        </div>

        <div class="section">
            <SectionHeader heading="Why Us?" id="why-us"/>
            <div class="section-body">
                <ServiceCard id="s1" title="Team of Experienced Professionals" icon="people-group"
                    description="We have experienced and dedicated professionals with over 500 hours of development experience"
                    icon_color="#40c6b1" icon_background_color="rgb(64, 198, 177, 0.2)"/>
                <ServiceCard id="s2" icon="clock" title="On Time Delivery"
                    description="Over 90% of our projects are delivered on time as we value your time and money"
                    icon_color="rgb(247, 180, 0)" icon_background_color="rgb(247, 180, 0, 0.2)"/>
                <ServiceCard id="s3" icon="face-smile" title="50+ Happy Customers"
                    description="We have over 50+ happy customers from multiple countries"
                    icon_color="#32cd32" icon_background_color="rgb(50, 205, 50, 0.2)"/>
                <ServiceCard id="s4" icon="phone" title="24/7 Availability"
                    description="We understand your need and provide consultation and report 24/7"
                    icon_color="rgb(163, 73, 204)" icon_background_color="rgb(163, 73, 204, 0.2)"/>
            </div>
        </div>
        <div class="section">
            <SectionHeader heading="Pricing" id="pricing"/>
            <div class="section-body col-3 pt-3">
                <PricingComponent title="Basic" :price="1500"
                    :features="[
                        {feature: 'Customized Web Development', included: true}, 
                        {feature: 'Customized UI Design', included: true},
                        {feature: 'Website Maintenance', included: true},
                        {feature: 'Web Hosting', included: true},
                        {feature: 'Search Engine Optimization', included: false},
                        {feature: 'Analytics Solutions', included: false},
                        {feature: 'CMS', included: false}]"
                        color="rgb(26, 163, 232)"/>
                <PricingComponent title="Standard" :price="3500"
                :features="[
                        {feature: 'Customized Web Development', included: true}, 
                        {feature: 'Customized UI Design', included: true},
                        {feature: 'Website Maintenance', included: true},
                        {feature: 'Web Hosting', included: true},
                        {feature: 'Search Engine Optimization', included: true},
                        {feature: 'Analytics Solutions', included: true},
                        {feature: 'CMS', included: false}]"
                        color="rgb(247, 149, 4)"
                        :popular="true"/>
                <PricingComponent title="Premium" :price="8000"
                :features="[
                        {feature: 'Customized Web Development', included: true}, 
                        {feature: 'Customized UI Design', included: true},
                        {feature: 'Website Maintenance', included: true},
                        {feature: 'Web Hosting', included: true},
                        {feature: 'Search Engine Optimization', included: true},
                        {feature: 'Analytics Solutions', included: true},
                        {feature: 'CMS', included: true}]"
                        color="rgb(163, 73, 204)"/>
            </div>
        </div>
    </div>
    <PageFooter />
</template>

<script>
import {useScene} from 'vue-scenejs';
import HorizontalCard from '@/components/HorizontalCard.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import PricingComponent from '@/components/PricingComponent.vue';
import PageFooter from '@/components/PageFooter.vue';


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
            duration: 0.2,
            easing: 'ease-in-out',
            selector: true
        });

        load_anim.play();

    },
    components: { HorizontalCard, SectionHeader, ServiceCard, PricingComponent, PageFooter }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.page-header {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr;
    position: relative;
}

.pt-3 {
    padding-top: 4em !important;
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
        color: $color-primary;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-body {
        display: grid;
        padding: 1em;
        grid-auto-rows: auto;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 2em;
        grid-row-gap: 2em;
        overflow: hidden;
        width: 70%;
        transition: all 0.2s linear;

        &.col-3 {
            grid-template-columns: repeat(3, 1fr);
        }

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

    .section-body {
        width: 80% !important;

        &.col-3 {
            grid-template-columns: repeat(2, 1fr) !important;
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

        &.col-3 {
            grid-template-columns: repeat(1, 1fr) !important;
        }

        grid-template-columns: repeat(2, 1fr) !important;
        width: 90% !important;
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
        width: 100% !important;
    }
}

</style>