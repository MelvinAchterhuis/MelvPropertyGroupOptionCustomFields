!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/melvpropertygroupoptioncustomfields/",n(n.s="GhvY")}({GhvY:function(e,t,n){"use strict";n.r(t);var o=n("LBlB"),r=n.n(o);Shopware.Component.override("sw-property-option-detail",{template:r.a,inject:["customFieldDataProviderService"],data:function(){return{isLoading:!1,customFieldSets:null}},computed:{showCustomFields:function(){return this.customFieldSets&&this.customFieldSets.length>0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadCustomFieldSets()},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("property_group_option").then((function(t){e.customFieldSets=t}))}}})},LBlB:function(e,t){e.exports='{% block sw_property_option_detail_media %}\n    {% parent() %}\n\n    <sw-card\n        v-if="showCustomFields"\n        position-identifier="sw-property-option-detail"\n        :is-loading="isLoading"\n        :style="{ marginTop: \'32px\' }"\n    >\n        <sw-custom-field-set-renderer\n            :entity="currentOption"\n            :disabled="!allowEdit"\n            :sets="customFieldSets">\n        </sw-custom-field-set-renderer>\n    </sw-card>\n\n{% endblock %}\n'}});