__d(
  "WAWebBizAdCreationRestoreDraftAudience_ctwa.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "draftID" },
        { kind: "RootArgument", name: "input" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationRestoreDraftAudience_ctwa",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "caller",
              value: "CTWA_SMB_WEB_AD_CREATE_FLOW",
            },
            { kind: "Variable", name: "draft_id", variableName: "draftID" },
            { kind: "Variable", name: "input", variableName: "input" },
          ],
          kind: "ScalarField",
          name: "draft_audience_replaced",
          storageKey: null,
        },
      ],
      type: "CTWAAPI",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
