__d(
  "WAWebBizBroadcastProCampaignMessageDataQuery.graphql",
  ["WAWebBizBroadcastProCampaignMessageDataQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "campaignId" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignId" }],
        r = {
          alias: "campaignType",
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "element",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "header_type",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          concreteType: "XFBWhatsAppHSMComponentGet",
          kind: "LinkedField",
          name: "hsm_components",
          plural: !0,
          selections: [
            i,
            l,
            {
              alias: null,
              args: null,
              concreteType: "XFBWhatsAppHSMComponentExample",
              kind: "LinkedField",
              name: "example",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "header_handle",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "header_url",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBWhatsAppHSMComponentButtonGet",
              kind: "LinkedField",
              name: "buttons",
              plural: !0,
              selections: [
                i,
                l,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "phone_number",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProCampaignMessageDataQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                r,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WhatsAppBusinessMessagingBroadcastInsights",
                      kind: "LinkedField",
                      name: "broadcast_insights",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBWhatsAppBusinessHSM",
                          kind: "LinkedField",
                          name: "template",
                          plural: !1,
                          selections: [o, a, s],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "XFBWhatsAppBusinessMMLiteCampaign",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProCampaignMessageDataQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                r,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WhatsAppBusinessMessagingBroadcastInsights",
                      kind: "LinkedField",
                      name: "broadcast_insights",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBWhatsAppBusinessHSM",
                          kind: "LinkedField",
                          name: "template",
                          plural: !1,
                          selections: [o, a, s, u],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "XFBWhatsAppBusinessMMLiteCampaign",
                  abstractKey: null,
                },
                u,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProCampaignMessageDataQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProCampaignMessageDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
