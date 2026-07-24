__d(
  "WAWebMexPaymentsPasskeyHasCredentialJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XWA2PaymentsPasskeyHasCredentialResponse",
          kind: "LinkedField",
          name: "xwa2_payments_passkey_has_credential",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_passkey",
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
          name: "WAWebMexPaymentsPasskeyHasCredentialJobQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebMexPaymentsPasskeyHasCredentialJobQuery",
          selections: e,
        },
        params: {
          id: "36878915648418618",
          metadata: {},
          name: "WAWebMexPaymentsPasskeyHasCredentialJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
