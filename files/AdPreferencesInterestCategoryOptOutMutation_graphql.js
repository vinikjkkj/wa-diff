__d(
  "AdPreferencesInterestCategoryOptOutMutation.graphql",
  ["AdPreferencesInterestCategoryOptOutMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "interestID" },
          { defaultValue: null, kind: "LocalArgument", name: "isUndo" },
        ],
        t = [
          { kind: "Variable", name: "interest_id", variableName: "interestID" },
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
          name: "AdPreferencesInterestCategoryOptOutMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "TCInterest",
              kind: "LinkedField",
              name: "tc_remove_user_interest",
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
          name: "AdPreferencesInterestCategoryOptOutMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "TCInterest",
              kind: "LinkedField",
              name: "tc_remove_user_interest",
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
            "AdPreferencesInterestCategoryOptOutMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "AdPreferencesInterestCategoryOptOutMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
