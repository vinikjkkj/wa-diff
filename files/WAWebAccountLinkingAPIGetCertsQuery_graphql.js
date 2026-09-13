__d(
  "WAWebAccountLinkingAPIGetCertsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "cert_chain_pem",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "key_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ttl_seconds",
            storageKey: null,
          },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "WaffleGetCertsResponse",
            kind: "LinkedField",
            name: "waffle_get_certs",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WaffleCerts",
                kind: "LinkedField",
                name: "payload_encryption",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WaffleCerts",
                kind: "LinkedField",
                name: "password_encryption",
                plural: !1,
                selections: e,
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
          name: "WAWebAccountLinkingAPIGetCertsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebAccountLinkingAPIGetCertsQuery",
          selections: t,
        },
        params: {
          id: "28704962082445420",
          metadata: {},
          name: "WAWebAccountLinkingAPIGetCertsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
