import template from './sw-property-option-detail.html.twig';

Shopware.Component.override('sw-property-option-detail', {
    template,

    inject: [
        'customFieldDataProviderService',
    ],

    data() {
        return {
            isLoading: false,
            customFieldSets: null
        };
    },

    computed: {
        showCustomFields() {
            return this.customFieldSets && this.customFieldSets.length > 0;
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.loadCustomFieldSets();
        },

        loadCustomFieldSets() {
            this.customFieldDataProviderService.getCustomFieldSets('property_group_option').then((sets) => {
                this.customFieldSets = sets;
            });
        },
    }
});
