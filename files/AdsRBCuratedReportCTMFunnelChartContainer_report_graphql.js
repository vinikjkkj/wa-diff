__d(
  "AdsRBCuratedReportCTMFunnelChartContainer_report.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsRBCuratedReportCTMFunnelChartContainer_report",
      selections: [
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
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBCTMFunnelEventOrdering",
                  kind: "LinkedField",
                  name: "ctm_funnel_definition",
                  plural: !0,
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
                      kind: "ScalarField",
                      name: "custom_label",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "visible",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "XFBCTXMessagingReport",
              abstractKey: "__isXFBCTXMessagingReport",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBCAMPCuratedReport",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
