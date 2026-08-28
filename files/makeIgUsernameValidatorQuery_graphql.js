__d(
  "makeIgUsernameValidatorQuery.graphql",
  ["makeIgUsernameValidatorQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "action_source" },
          { defaultValue: null, kind: "LocalArgument", name: "identity_ids" },
          { defaultValue: null, kind: "LocalArgument", name: "username" },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "FXIMQueries",
            kind: "LinkedField",
            name: "fx_identity_management",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "action_source",
                    variableName: "action_source",
                  },
                  {
                    kind: "Variable",
                    name: "identity_ids",
                    variableName: "identity_ids",
                  },
                  {
                    kind: "Variable",
                    name: "username",
                    variableName: "username",
                  },
                ],
                concreteType: "FXIMUsernameValidationResponse",
                kind: "LinkedField",
                name: "validate_username_v4",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error_message",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "status_code",
                    storageKey: null,
                  },
                ],
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
          name: "makeIgUsernameValidatorQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "makeIgUsernameValidatorQuery",
          selections: t,
        },
        params: {
          id: n("makeIgUsernameValidatorQuery_facebookRelayOperation"),
          metadata: {},
          name: "makeIgUsernameValidatorQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
