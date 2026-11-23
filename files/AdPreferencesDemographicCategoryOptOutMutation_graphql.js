__d(
  "AdPreferencesDemographicCategoryOptOutMutation.graphql",
  ["AdPreferencesDemographicCategoryOptOutMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "bctID" },
          { defaultValue: null, kind: "LocalArgument", name: "isUndo" },
        ],
        t = [
          { kind: "Variable", name: "bct_id", variableName: "bctID" },
          { kind: "Variable", name: "undo", variableName: "isUndo" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdPreferencesDemographicCategoryOptOutMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "tc_remove_user_bct",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdPreferencesDemographicCategoryOptOutMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "tc_remove_user_bct",
              plural: !1,
              selections: [
                r,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "AdPreferencesDemographicCategoryOptOutMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "AdPreferencesDemographicCategoryOptOutMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
