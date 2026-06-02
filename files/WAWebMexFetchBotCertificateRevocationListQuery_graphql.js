__d(
  "WAWebMexFetchBotCertificateRevocationListQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "crl_name" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "crl_name", variableName: "crl_name" },
            ],
            concreteType: "XWA2FeaturePKICRL",
            kind: "LinkedField",
            name: "xwa2_fetch_feature_pki_crl",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "crl",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "next_update",
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
          name: "WAWebMexFetchBotCertificateRevocationListQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexFetchBotCertificateRevocationListQuery",
          selections: t,
        },
        params: {
          id: "35807917542188393",
          metadata: {},
          name: "WAWebMexFetchBotCertificateRevocationListQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
