__d(
  "AdsStatusPillExpiringSoon_boostInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsStatusPillExpiringSoon_boostInfo",
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
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "boosting_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "can_viewer_edit",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "remaining_duration_in_days",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "run_continuously",
                          storageKey: null,
                        },
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
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "spec",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "budget_type",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "product",
                          storageKey: null,
                        },
                      ],
                      type: "BoostedComponentWrapper",
                      abstractKey: null,
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
