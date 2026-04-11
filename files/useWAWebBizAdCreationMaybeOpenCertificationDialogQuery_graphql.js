__d(
  "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery.graphql",
  [
    "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "viewer",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_integrity_certification",
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
          name: "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery",
          selections: e,
        },
        params: {
          id: n(
            "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationMaybeOpenCertificationDialogQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
