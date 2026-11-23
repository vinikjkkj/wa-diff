__d(
  "AdsStatusPillScaleGoodCampaign_entityInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsStatusPillScaleGoodCampaign_entityInfo",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "entity_id",
          storageKey: null,
        },
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
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "latest_boosted_component",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdsStatusPillScaleGoodCampaignCard_boostedComponent",
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "caller_id",
                          value: "BIZWEB_CONTENT_TAB_SGC",
                        },
                        {
                          kind: "Literal",
                          name: "channel",
                          value: "AD_CENTER",
                        },
                      ],
                      concreteType: "XFBLWIScaleGoodCampaignRecommendation",
                      kind: "LinkedField",
                      name: "lwi_boosted_component_scale_good_campaign_recommendation",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBLWIScaleGoodCampaignMapping",
                          kind: "LinkedField",
                          name: "lwi_scale_good_campaign_mappings",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBGoodSmbcampaignMappingsForGQLGen",
                              kind: "LinkedField",
                              name: "scale_good_campaign_mapping",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "__typename",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'lwi_boosted_component_scale_good_campaign_recommendation(caller_id:"BIZWEB_CONTENT_TAB_SGC",channel:"AD_CENTER")',
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "LWIPostFlightSGCRecommendationData",
                      kind: "LinkedField",
                      name: "lwi_post_flight_scale_good_campaign_recommendation",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_good_campaign",
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
          type: "XFBTofuEntityWithBoostInfo",
          abstractKey: "__isXFBTofuEntityWithBoostInfo",
        },
      ],
      type: "TofuEntityInfo",
      abstractKey: "__isTofuEntityInfo",
    };
    a.exports = e;
  },
  null,
);
