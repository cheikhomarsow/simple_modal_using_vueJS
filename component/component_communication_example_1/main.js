Vue.component('coupon' , {
    template: "<input placeHolder='Enter your coupon code' @blur=\"onCouponApplied\">",

    methods: {
        onCouponApplied() {
            this.$emit('applied')
        }
    }
});


new Vue({
    el: '#root',
    data() {
        return {
            couponApplied: false
        }
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true
        }
    }
});

