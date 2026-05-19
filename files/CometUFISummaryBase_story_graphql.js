__d(
  "CometUFISummaryBase_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_id",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFISummaryBase_story",
        selections: [
          {
            condition:
              "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "SponsoredData",
                kind: "LinkedField",
                name: "sponsored_data",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
          },
          {
            condition:
              "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: "th_dat_spo",
                args: null,
                concreteType: "SponsoredData",
                kind: "LinkedField",
                name: "sponsored_data",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometUFIVoteCountRenderer_story",
          },
        ],
        type: "Story",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
