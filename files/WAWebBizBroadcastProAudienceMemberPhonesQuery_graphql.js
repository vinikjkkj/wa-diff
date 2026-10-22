__d(
  "WAWebBizBroadcastProAudienceMemberPhonesQuery.graphql",
  ["WAWebBizBroadcastProAudienceMemberPhonesQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "after" },
        t = { defaultValue: null, kind: "LocalArgument", name: "caId" },
        r = { defaultValue: null, kind: "LocalArgument", name: "first" },
        o = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "after", variableName: "after" },
              { kind: "Variable", name: "ca_id", variableName: "caId" },
              { kind: "Variable", name: "first", variableName: "first" },
            ],
            concreteType: "XFBWhatsappSubscriberListMembersConnection",
            kind: "LinkedField",
            name: "xfb_whatsapp_subscriber_list_members",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsappSubscriberListMembersEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWhatsAppSubscriberListMember",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
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
              {
                alias: null,
                args: null,
                concreteType: "PageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
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
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProAudienceMemberPhonesQuery",
          selections: o,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, r, e],
          kind: "Operation",
          name: "WAWebBizBroadcastProAudienceMemberPhonesQuery",
          selections: o,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProAudienceMemberPhonesQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProAudienceMemberPhonesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
