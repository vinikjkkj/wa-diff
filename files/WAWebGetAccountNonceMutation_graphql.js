__d(
  "WAWebGetAccountNonceMutation.graphql",
  ["WAWebGetAccountNonceMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "XFBWhatsAppBizAccountNonceResponse",
            kind: "LinkedField",
            name: "xfb_wa_biz_account_nonce",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppBizAccountNonceDetail",
                kind: "LinkedField",
                name: "detail",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "nonce",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWhatsAppBizAccountNonceDetailRequest",
                    kind: "LinkedField",
                    name: "request",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebGetAccountNonceMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebGetAccountNonceMutation",
          selections: t,
        },
        params: {
          id: n("WAWebGetAccountNonceMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebGetAccountNonceMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
