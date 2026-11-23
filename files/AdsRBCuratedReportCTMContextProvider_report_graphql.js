__d(
  "AdsRBCuratedReportCTMContextProvider_report.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = [e],
        n = [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "start",
              storageKey: null,
            },
            action: "THROW",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "start_timestamp",
              storageKey: null,
            },
            action: "THROW",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "end",
              storageKey: null,
            },
            action: "THROW",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "end_timestamp",
              storageKey: null,
            },
            action: "THROW",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "timezone_id",
              storageKey: null,
            },
            action: "THROW",
          },
        ],
        r = {
          alias: null,
          args: null,
          concreteType: "AdCampaignGroup",
          kind: "LinkedField",
          name: "campaign_group",
          plural: !1,
          selections: t,
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "AdsRBCuratedReportCTMContextProvider_report",
        selections: [
          e,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "curated_report_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AdAccount",
            kind: "LinkedField",
            name: "ad_accounts",
            plural: !0,
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "AdBusiness",
                kind: "LinkedField",
                name: "ads_business",
                plural: !1,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "currency",
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
            name: "report_context",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  e,
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBCTMMessagingReportDateRange",
                    kind: "LinkedField",
                    name: "date_range",
                    plural: !1,
                    selections: n,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBCTMMessagingReportDateRange",
                    kind: "LinkedField",
                    name: "bounding_dates",
                    plural: !1,
                    selections: n,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "ctm_priority_metric",
                    storageKey: null,
                  },
                ],
                type: "XFBCTXMessagingReport",
                abstractKey: "__isXFBCTXMessagingReport",
              },
              {
                kind: "InlineFragment",
                selections: [e, r],
                type: "XFBGBGFunnelPersonalizedReportContext",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "XFBAdAccountCTXMessagingReportContextCampaignGroupsConnection",
                    kind: "LinkedField",
                    name: "campaign_groups",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBCTXMessagingReportCampaignGroups",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [
                          r,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_active_in_query_range",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "XFBAdAccountCTXMessagingReportContext",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ad_object_url",
            storageKey: null,
          },
        ],
        type: "XFBCAMPCuratedReport",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
