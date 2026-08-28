__d(
  "MAIBAMessageCreatorCardsRendererCard_creator.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "UserSingleValueInsightsResult",
          kind: "LinkedField",
          name: "followers_count",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "value",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "MAIBAMessageCreatorCardsRendererCard_creator",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creator_user_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creator_igid",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "CAMCreatorProfileBulkData",
            kind: "LinkedField",
            name: "creator_profile_materialized",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "followers_number",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "profile_pic_uri_without_fallback",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "CAMCrossPlatformInsights",
            kind: "LinkedField",
            name: "cross_platform_insights",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "ig_insights",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "fb_insights",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "CAMCreator",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
