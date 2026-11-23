__d(
  "VersionControlTestResultsApplyMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "reason" },
        t = { defaultValue: null, kind: "LocalArgument", name: "studyID" },
        n = [
          { kind: "Variable", name: "reason", variableName: "reason" },
          { kind: "Variable", name: "study_id", variableName: "studyID" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "test_status",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "end_time",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "VersionControlVariantConfig",
          kind: "LinkedField",
          name: "version_control_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "change_applied",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "VersionControlTestResultsApplyMutation",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdStudy",
              kind: "LinkedField",
              name: "apply_version_control_results",
              plural: !1,
              selections: [
                r,
                o,
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAdABTestConfig",
                  kind: "LinkedField",
                  name: "ab_test_config",
                  plural: !1,
                  selections: [i],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "VersionControlTestResultsApplyMutation",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdStudy",
              kind: "LinkedField",
              name: "apply_version_control_results",
              plural: !1,
              selections: [
                r,
                o,
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAdABTestConfig",
                  kind: "LinkedField",
                  name: "ab_test_config",
                  plural: !1,
                  selections: [i, r],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26673194782275187",
          metadata: {},
          name: "VersionControlTestResultsApplyMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
