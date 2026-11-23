__d(
  "MAIBAChatMessageDebugInfoRecordOTIDMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType:
              "XFBOmnibotDevPlatformSetupUserContextMutationResponse",
            kind: "LinkedField",
            name: "xfb_omnibot_record_otid_mutation",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_success",
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
          name: "MAIBAChatMessageDebugInfoRecordOTIDMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAChatMessageDebugInfoRecordOTIDMutation",
          selections: t,
        },
        params: {
          id: "27079960055012852",
          metadata: {},
          name: "MAIBAChatMessageDebugInfoRecordOTIDMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
