__d(
  "AdsBulkEditMenuConfig",
  [
    "AdsBulkEditAdgroupTextUtils",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuGroupLabel",
    "AdsBulkEditMenuItems",
    "AdsCampaignGoalExpressionUtils",
    "AdsCampaignGroupBudgetStrings",
    "AdsCampaignGroupFrequencyControlStrings",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l,
        s = [
          {
            LABEL: r("AdsBulkEditMenuGroupLabel").GENERAL,
            ITEMS: [
              (i = r("AdsBulkEditMenuItems")).ad_set[
                (l = r("AdsBulkEditDialogTypes")).CAMPAIGN_NAME
              ],
            ],
          },
        ],
        u = [
          {
            LABEL: r("AdsBulkEditMenuGroupLabel").BUDGET_AND_SCHEDULE,
            ITEMS: [
              i.ad_set[l.BUDGET],
              i.ad_set[l.PERFORMANCE_BASED_BUDGET_INCREASE],
              i.ad_set[l.SCHEDULE_START],
              i.ad_set[l.SCHEDULE_END],
              i.ad_set[l.CAMPAIGN_MIN_SPEND_LIMIT],
              i.ad_set[l.CAMPAIGN_MAX_SPEND_LIMIT],
            ],
          },
          e && !r("gkx")("13671")
            ? {
                LABEL: r("AdsBulkEditMenuGroupLabel").AUDIENCE_CONTROL,
                ITEMS: [
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").LOCATION
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").MINIMUM_AGE
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").EXCLUDED_CUSTOM_AUDIENCE
                  ],
                ],
              }
            : void 0,
          e && !r("gkx")("13671")
            ? {
                LABEL: r("AdsBulkEditMenuGroupLabel").AUDIENCE,
                ITEMS: [
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").CUSTOM_AUDIENCE_SUGGESTION
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").AGE_SUGGESTION
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").GENDER
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").DETAILED_TARGETING
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").SAVED_AUDIENCE
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR
                  ],
                ],
              }
            : void 0,
          e && r("gkx")("13671")
            ? {
                LABEL: r("AdsBulkEditMenuGroupLabel").AUDIENCE,
                ITEMS: [
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").LOCATION
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").MINIMUM_AGE
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").EXCLUDED_CUSTOM_AUDIENCE
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").CUSTOM_AUDIENCE_SUGGESTION
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").AGE_SUGGESTION
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").GENDER
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").DETAILED_TARGETING
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").SAVED_AUDIENCE
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR
                  ],
                ],
              }
            : void 0,
          e
            ? void 0
            : {
                LABEL: r("AdsBulkEditMenuGroupLabel").AUDIENCE,
                ITEMS: [
                  t === !0
                    ? r("AdsBulkEditMenuItems").ad_set[
                        r("AdsBulkEditDialogTypes").AGE_SUGGESTION
                      ]
                    : r("AdsBulkEditMenuItems").ad_set[
                        r("AdsBulkEditDialogTypes").AGE
                      ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").GENDER
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").LOCATION
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").CUSTOM_AUDIENCE
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").SAVED_AUDIENCE
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes").DETAILED_TARGETING
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR
                  ],
                ],
              },
        ].filter(Boolean),
        c = [
          n
            ? {
                LABEL: r("AdsBulkEditMenuGroupLabel").AD_TRANSPARENCY,
                ITEMS: [
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_CAAP_AUSTRALIA_FINSERV_BENEFICIARY_AND_PAYER
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_CAAP_TAIWAN_BENEFICIARY_AND_PAYER
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_CAAP_SINGAPORE_UNIVERSAL_BENEFICIARY_AND_PAYER
                  ],
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_UNIVERSAL_BENEFICIARY_AND_PAYER
                  ],
                ],
              }
            : void 0,
          a
            ? {
                LABEL: r("AdsBulkEditMenuGroupLabel").COMPLIANCE,
                ITEMS: [
                  r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER
                  ],
                ],
              }
            : void 0,
        ].filter(Boolean),
        d = [
          {
            LABEL: r("AdsBulkEditMenuGroupLabel").CAMPAIGN_GOAL,
            ITEMS: [
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_TYPE
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_EXCLUDE_AUDIENCES
              ],
              o("AdsCampaignGoalExpressionUtils").shouldSplitExclusionSection()
                ? r("AdsBulkEditMenuItems").ad_set[
                    r("AdsBulkEditDialogTypes")
                      .CAMPAIGN_GOAL_EXCLUDE_ENGAGED_AUDIENCES
                  ]
                : void 0,
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_VALUE_ADJUSTMENT_RULE
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes")
                  .CAMPAIGN_GOAL_EXISTING_CUSTOMER_INCLUSION
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes")
                  .CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_LOOKALIKE_INCLUSION
              ],
            ].filter(Boolean),
          },
        ],
        m = [
          {
            LABEL: r("AdsBulkEditMenuGroupLabel").PLACEMENT,
            ITEMS: [
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").PLACEMENT
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").DEVICE_PLATFORMS
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").MOBILE_DEVICE_TYPES
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").USER_OS
              ],
            ],
          },
          {
            LABEL: r("AdsBulkEditMenuGroupLabel").OPTIMIZATION_AND_DELIVERY,
            ITEMS: [
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").OPTIMIZATION_GOAL
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").BID_STRATEGY
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").VALUE_ADJUSTMENT_RULE
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").BILLING_EVENT
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").DELIVERY_TYPE
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes").CAMPAIGN_FREQUENCY_CONTROL
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes")
                  .CAMPAIGN_LEAD_ADS_CONVERSION_VALUE_EXPRESSION
              ],
              r("AdsBulkEditMenuItems").ad_set[
                r("AdsBulkEditDialogTypes")
                  .CAMPAIGN_MESSAGING_STRUCTURED_LEAD_SPEC
              ],
            ],
          },
        ];
      return s.concat(d).concat(u).concat(c).concat(m);
    }
    function s() {
      var e,
        t,
        n = o(
          "AdsBulkEditAdgroupTextUtils",
        ).isPassingBulkEditModalL1TextConsolidateGK();
      return [
        (e = r("AdsBulkEditMenuItems")).ad[
          (t = r("AdsBulkEditDialogTypes")).ADGROUP_WEBSITE_URL
        ],
        e.ad[t.ADGROUP_DISPLAY_URL],
        e.ad[t.ADGROUP_SHOPS_ADS_OPT_IN],
        e.ad[t.ADGROUP_PRODUCT_BROWSING_OPT_IN],
        e.ad[t.ADGROUP_AGENTIC_CHECKOUT_OPT_IN],
        e.ad[t.ADGROUP_PAC_MEDIA],
        e.ad[t.ADGROUP_REGULAR_MEDIA],
      ].concat(
        n
          ? [
              r("AdsBulkEditMenuItems").ad[
                r("AdsBulkEditDialogTypes").ADGROUP_TEXT
              ],
            ]
          : [
              r("AdsBulkEditMenuItems").ad[
                r("AdsBulkEditDialogTypes").ADGROUP_MESSAGE
              ],
              r("AdsBulkEditMenuItems").ad[
                r("AdsBulkEditDialogTypes").ADGROUP_HEADLINE
              ],
            ],
        [
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").ADGROUP_MULTI_ADVERTISER_ADS
          ],
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").ADGROUP_METADATA_OPT_IN
          ],
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").ADGROUP_ADVANTAGE_CREATIVE
          ],
        ],
        n
          ? []
          : [
              r("AdsBulkEditMenuItems").ad[
                r("AdsBulkEditDialogTypes").ADGROUP_LINK_DESCRIPTION
              ],
            ],
        [
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").ADGROUP_CREATIVE_TESTIMONIAL
          ],
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").ADGROUP_CREATIVE_BADGE
          ],
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").CALL_TO_ACTION
          ],
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").RELATED_MEDIA
          ],
          r("AdsBulkEditMenuItems").ad[
            r("AdsBulkEditDialogTypes").ADGROUP_CAPA_AUDIENCE
          ],
        ],
      );
    }
    function u(t, n, a, i, l) {
      var u, c, d, m;
      return (
        (u = {}),
        (u.ad = [
          {
            LABEL: (c = r("AdsBulkEditMenuGroupLabel")).GENERAL,
            ITEMS: [
              (d = r("AdsBulkEditMenuItems")).ad[
                (m = r("AdsBulkEditDialogTypes")).ADGROUP_NAME
              ],
              d.ad[m.ADGROUP_SCHEDULE_START],
              d.ad[m.ADGROUP_SCHEDULE_END],
            ],
          },
          {
            LABEL: c.IDENTITY,
            ITEMS: [d.ad[m.ADGROUP_PAGE], d.ad[m.ADGROUP_PAGE_AND_ACCOUNTS]],
          },
          { LABEL: c.CREATIVE, ITEMS: s() },
          {
            LABEL: c.AUDIENCE,
            ITEMS: [d.ad[m.ADGROUP_CAPA_AGE], d.ad[m.ADGROUP_CAPA_GENDER]],
          },
          { LABEL: c.TRACKING, ITEMS: [d.ad[m.ADGROUP_URL_TAGS]] },
        ]),
        (u.ad_set = e(t, n, a, i)),
        (u.campaign = [
          { LABEL: c.GENERAL, ITEMS: [d.campaign[m.CAMPAIGN_GROUP_NAME]] },
          {
            LABEL: c.CAMPAIGN_DETAILS,
            ITEMS: [
              d.campaign[m.CAMPAIGN_SPENDING_LIMIT],
              l === !0
                ? r("AdsBulkEditMenuItems").campaign[
                    r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_AGENCY_FEE
                  ]
                : null,
            ].filter(Boolean),
          },
          {
            LABEL: o(
              "AdsCampaignGroupBudgetStrings",
            ).campaignGroupBudgetTitle(),
            ITEMS: [
              r("AdsBulkEditMenuItems").campaign[
                r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_BUDGET
              ],
              r("AdsBulkEditMenuItems").campaign[
                r("AdsBulkEditDialogTypes")
                  .CAMPAIGN_GROUP_PERFORMANCE_BASED_BUDGET_INCREASE
              ],
            ],
          },
          {
            LABEL: o("AdsCampaignGroupFrequencyControlStrings")
              .CAMPAIGN_FREQUENCY_CONTROL_TITLE,
            ITEMS: [
              r("AdsBulkEditMenuItems").campaign[
                r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_FREQUENCY_CONTROL
              ],
            ],
          },
        ]),
        u
      );
    }
    l.getDialogMenu = u;
  },
  98,
);
