__d(
  "AdsStatusPillAdsManagerExtend_entityInfo.graphql",
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
      name: "AdsStatusPillAdsManagerExtend_entityInfo",
      selections: [
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
                          concreteType: "TofuSelectedAdsManagerAdsInfo",
                          kind: "LinkedField",
                          name: "ads_manager_ads_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Adgroup",
                              kind: "LinkedField",
                              name: "ad",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "AdCampaign",
                                  kind: "LinkedField",
                                  name: "ad_campaign",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "stop_time",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsStatusPillAdsManagerExtendModal_extendInfo",
        },
      ],
      type: "TofuEntityInfo",
      abstractKey: "__isTofuEntityInfo",
    };
    a.exports = e;
  },
  null,
);
