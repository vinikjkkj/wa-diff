__d(
  "VerificationChallengesA2UIQRWidgetQuery.graphql",
  ["VerificationChallengesA2UIQRWidgetQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "query_params" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "query_params",
                variableName: "query_params",
              },
            ],
            concreteType: "XFBBloksHandoffEvidenceSubmissionStatus",
            kind: "LinkedField",
            name: "xfb_bloks_handoff_submission_evidence_status",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_submitted_evidence",
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
          name: "VerificationChallengesA2UIQRWidgetQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "VerificationChallengesA2UIQRWidgetQuery",
          selections: t,
        },
        params: {
          id: n(
            "VerificationChallengesA2UIQRWidgetQuery_facebookRelayOperation",
          ),
          metadata: { live: { polling_interval: 2e3 } },
          name: "VerificationChallengesA2UIQRWidgetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
