__d(
  "MAIBAMessageCreatorCardsRendererQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "brandIgUserID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "creatorIDs" },
        n = {
          kind: "Variable",
          name: "brand_ig_user_id",
          variableName: "brandIgUserID",
        },
        r = [
          n,
          { kind: "Variable", name: "creator_ids", variableName: "creatorIDs" },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creator_user_id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: [n],
          kind: "ScalarField",
          name: "cam_ai_search_brand_ig_asset_id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
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
          {
            kind: "InlineFragment",
            selections: [i],
            type: "CAMIGUserInsights",
            abstractKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAMessageCreatorCardsRendererQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "CAMCreator",
              kind: "LinkedField",
              name: "cam_ai_search_creators_by_ids",
              plural: !0,
              selections: [
                o,
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAMessageCreatorCardsRendererCard_creator",
                },
              ],
              storageKey: null,
            },
            a,
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "MAIBAMessageCreatorCardsRendererQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "CAMCreator",
              kind: "LinkedField",
              name: "cam_ai_search_creators_by_ids",
              plural: !0,
              selections: [
                o,
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
                      selections: l,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "fb_insights",
                      plural: !1,
                      selections: l,
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                i,
              ],
              storageKey: null,
            },
            a,
          ],
        },
        params: {
          id: "26498781939820146",
          metadata: {},
          name: "MAIBAMessageCreatorCardsRendererQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
