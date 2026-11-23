__d(
  "BizWebUnifiedTableRowHeaderBoostStatusPill_entityInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          kind: "RootArgument",
          name: "__relay_internal__pv__shouldFetchAssociatedAdsInforelayprovider",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "BizWebUnifiedTableRowHeaderBoostStatusPill_entityInfo",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "lwi_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "boosting_status",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "XFBTofuEntityWithBoostInfo",
          abstractKey: "__isXFBTofuEntityWithBoostInfo",
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              condition:
                "__relay_internal__pv__shouldFetchAssociatedAdsInforelayprovider",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "ads_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "selected_ad",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "ad_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_lwi",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "TofuEntityWithAssociatedAdsInfo",
          abstractKey: "__isTofuEntityWithAssociatedAdsInfo",
        },
      ],
      type: "TofuEntityInfo",
      abstractKey: "__isTofuEntityInfo",
    };
    a.exports = e;
  },
  null,
);
