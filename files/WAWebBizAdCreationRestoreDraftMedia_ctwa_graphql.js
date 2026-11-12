__d(
  "WAWebBizAdCreationRestoreDraftMedia_ctwa.graphql",
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
      name: "WAWebBizAdCreationRestoreDraftMedia_ctwa",
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
          concreteType: "CTWADraftRestorableCard",
          kind: "LinkedField",
          name: "draft_restorable_media",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "index",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdsLWIDraftCreativeMedia",
              kind: "LinkedField",
              name: "media",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "url",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
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
