__d(
  "WAWebEditBizProfileMutation.graphql",
  ["WAWebEditBizProfileMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "lid" },
        r = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "input", variableName: "input" },
              { kind: "Variable", name: "lid", variableName: "lid" },
            ],
            kind: "ScalarField",
            name: "edit_wa_web_biz_profile",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebEditBizProfileMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebEditBizProfileMutation",
          selections: r,
        },
        params: {
          id: n("WAWebEditBizProfileMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebEditBizProfileMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
