__d(
  "AdsUEditorAdgroupMessageDestinationPreviewContainerCTWAWabaQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "skipRequest" },
        ],
        t = [
          {
            condition: "skipRequest",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "ad_account_id",
                    variableName: "adAccountID",
                  },
                ],
                concreteType: "CTWAFlowsWabaResolution",
                kind: "LinkedField",
                name: "xfb_ctwa_flows_waba_for_ad_account",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "waba_id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsUEditorAdgroupMessageDestinationPreviewContainerCTWAWabaQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsUEditorAdgroupMessageDestinationPreviewContainerCTWAWabaQuery",
          selections: t,
        },
        params: {
          id: "27132375929736175",
          metadata: {},
          name: "AdsUEditorAdgroupMessageDestinationPreviewContainerCTWAWabaQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
