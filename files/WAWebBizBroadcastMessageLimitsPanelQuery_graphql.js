__d(
  "WAWebBizBroadcastMessageLimitsPanelQuery.graphql",
  ["WAWebBizBroadcastMessageLimitsPanelQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBWhatsAppSMBBBPro",
          kind: "LinkedField",
          name: "xfb_whatsapp_bb_pro",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBWABBProMessagingLimits",
              kind: "LinkedField",
              name: "messaging_limits",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "current_daily_limit",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "higher_daily_limits",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBWABBProMessagingLimitRequirement",
                  kind: "LinkedField",
                  name: "upgrade_requirements",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "requirement",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBWABBProMessagingLimitProgress",
                      kind: "LinkedField",
                      name: "progress",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "sent",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "target",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "window_days",
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
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "WAWebBizBroadcastMessageLimitsPanelQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizBroadcastMessageLimitsPanelQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizBroadcastMessageLimitsPanelQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastMessageLimitsPanelQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
