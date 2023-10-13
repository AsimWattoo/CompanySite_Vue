<template>
    <div class="page-header">
        <div class="img-container">
        </div>
        <div class="heading">
            Our Services
        </div>
    </div>
    <div class="services-container">
        <div class="services">
            <ServiceCard title="Custom Website Development"
                description="We offer custom designs and features for your website so it best suits your needs."
                :price="25000"
                time="1.5"
                orders="35"
                avg-rating="4.5"
                time-unit="Months"/>
            <ServiceCard title="Search Engine Optimization (SEO)"
                description="We analyze hundereds of keywords related to your business domain and compare their results. Then we choose top 5 keywords and generate optimized content to rank on those keywords"
                :price="45000"
                time="5"
                time-unit="days"
                orders="15"
                avg-rating="5"/>
            <ServiceCard title="AI Integration"
                description="We can integrate already built AI chatbots and services like ChatGPT. Moreover, we can develop custom AI tools needed to boost your business performance"
                :price="125000"
                time="1.2"
                time-unit="Months"
                orders="50"
                avg-rating="5"/>
            <ServiceCard title="Payment Integration"
                description="Payment integration involves integration of payment gateways like Stripe, Paypal, Visa and others."
                :price="15000"
                time="5"
                time-unit="days"
                orders="10"
                avg-rating="5"/>
            <ServiceCard title="UI Design"
                description="Need a UI design for your website? We exactly do that by discussing your needs and brainstorming different layouts and ideas."
                :price="80000"
                time="2"
                time-unit="weeks"
                orders="125"
                avg-rating="5"/>
        </div>
    </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue';

export default {
    name: 'ServicesPage',
    components: {ServiceCard}
}
</script>

<style scoped lang="scss">
@import "@/assets/sass/style.scss";

.page-header {
    width: 100%;
    position: relative;

    .img-container {
        width: 100%;
        height: 600px;
        background-image: url("../assets/images/laptop.jpeg");
        background-position: center;
        background-size: cover;

        &::before {
            background-color: rgba(0, 0, 0, 0.7);
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

    }

    .heading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4.5rem;
        color: $color-primary;
        font-weight: 600;
    }

}

.services-container {
    display: flex;
    justify-content: center;
    margin: 3em 0;
    .services {
        width: 70%;
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 3em;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
    }
}
</style>