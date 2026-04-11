__d(
  "WAWebLinkedAccountsGQLQuery.graphql",
  ["WAWebLinkedAccountsGQLQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
            concreteType: "XFBWaBizLinkedAccountsAdStatus",
            kind: "LinkedField",
            name: "ad_status",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_active_ctwa_ad",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_created_ad",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "XFBWhatsAppBizLinkedAccountsResponse",
            kind: "LinkedField",
            name: "xfb_wa_biz_linked_accounts",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppBizLinkedAccounts",
                kind: "LinkedField",
                name: "linked_accounts",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWaBizLinkedAccountsFBPage",
                    kind: "LinkedField",
                    name: "fb_page",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWaBizLinkedAccountsWAAdIdentity",
                    kind: "LinkedField",
                    name: "wa_ad_identity",
                    plural: !1,
                    selections: e,
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
          metadata: null,
          name: "WAWebLinkedAccountsGQLQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebLinkedAccountsGQLQuery",
          selections: t,
        },
        params: {
          id: n("WAWebLinkedAccountsGQLQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebLinkedAccountsGQLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
