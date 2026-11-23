__d(
  "AdsRBCuratedReportCTMFunnelChartContainerCTMEventOrderChangeMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "customOrdering",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "reportContextID",
        },
        n = [
          {
            fields: [
              {
                kind: "Variable",
                name: "ctx_messaging_report_id",
                variableName: "reportContextID",
              },
              {
                kind: "Variable",
                name: "order_vec",
                variableName: "customOrdering",
              },
            ],
            kind: "ObjectValue",
            name: "data",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "XFBCTMFunnelEventOrdering",
          kind: "LinkedField",
          name: "ctm_funnel_definition",
          plural: !0,
          selections: [
            r,
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
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "AdsRBCuratedReportCTMFunnelChartContainerCTMEventOrderChangeMutation",
          selections: [
            {
              alias: null,
              args: n,
              concreteType:
                "XFBUpdateCtmFunnelDefinitionCtxMessagingReportResponsePayload",
              kind: "LinkedField",
              name: "xfb_update_ctm_funnel_definition_ctx_messaging_report",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "ctx_messaging_report",
                  plural: !1,
                  selections: [o],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsRBCuratedReportCTMFunnelChartContainerCTMEventOrderChangeMutation",
          selections: [
            {
              alias: null,
              args: n,
              concreteType:
                "XFBUpdateCtmFunnelDefinitionCtxMessagingReportResponsePayload",
              kind: "LinkedField",
              name: "xfb_update_ctm_funnel_definition_ctx_messaging_report",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "ctx_messaging_report",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    o,
                    r,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "38186213267659452",
          metadata: {},
          name: "AdsRBCuratedReportCTMFunnelChartContainerCTMEventOrderChangeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
