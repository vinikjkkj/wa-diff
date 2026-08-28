__d(
  "AdsOptimalDeliveryGrowthOpportunityResolver.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_object_level",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "confidence_level",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "recommended_tracking_pixel",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { vultureHash: "3rHbj6b-DSmIv-2Xz_VNxQjt4Vw=" },
        name: "AdsOptimalDeliveryGrowthOpportunityResolver",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "AdsDeliveryGrowthOpportunityChildMetadata",
            kind: "LinkedField",
            name: "child_metadata",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "key",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "AdsDeliveryGrowthOpportunityMetadata",
                kind: "LinkedField",
                name: "value",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AdsDeliveryGrowthOpportunityMetadata",
            kind: "LinkedField",
            name: "metadata",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "optimization_type",
            storageKey: null,
          },
        ],
        type: "AdsOptimalDeliveryGrowthOpportunity",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
