__d(
  "MAIBATextCandidatePreviewPopoverQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "adgroupID" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountID",
              },
              {
                kind: "Variable",
                name: "adgroup_id",
                variableName: "adgroupID",
              },
            ],
            kind: "ScalarField",
            name: "maiba_text_preview_creative_spec",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBATextCandidatePreviewPopoverQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBATextCandidatePreviewPopoverQuery",
          selections: t,
        },
        params: {
          id: "28448237378201050",
          metadata: {},
          name: "MAIBATextCandidatePreviewPopoverQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
