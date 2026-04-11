__d(
  "useWAWebBizAdCertifyMutation.graphql",
  ["useWAWebBizAdCertifyMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "AdsIntegritySelfCertificationResponse",
            kind: "LinkedField",
            name: "ads_integrity_self_certification_certify",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "certified_user_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "create_time",
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
          name: "useWAWebBizAdCertifyMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdCertifyMutation",
          selections: t,
        },
        params: {
          id: n("useWAWebBizAdCertifyMutation_facebookRelayOperation"),
          metadata: {},
          name: "useWAWebBizAdCertifyMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
