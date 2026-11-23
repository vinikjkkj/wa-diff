__d(
  "BizWebUnifiedTableRowHeaderExpiringSoonPill_entityInfo.graphql",
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
      name: "BizWebUnifiedTableRowHeaderExpiringSoonPill_entityInfo",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "AdsStatusPillExpiringSoon_boostInfo",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                kind: "Defer",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "AdsStatusPillExpiringSoon_modalInfo",
                  },
                ],
              },
            ],
            type: "TofuEntityInfo",
            abstractKey: "__isTofuEntityInfo",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "modal_info",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                kind: "Defer",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "AdsStatusPillAdsManagerExtend_entityInfo",
                  },
                ],
              },
            ],
            type: "TofuEntityInfo",
            abstractKey: "__isTofuEntityInfo",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "ads_manager_info",
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
