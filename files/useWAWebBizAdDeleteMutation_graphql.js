__d(
  "useWAWebBizAdDeleteMutation.graphql",
  ["useWAWebBizAdDeleteMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "boostID" }],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "boost_id",
                    variableName: "boostID",
                  },
                ],
                kind: "ObjectValue",
                name: "data",
              },
            ],
            concreteType: "WaDeleteBoostedComponentResponsePayload",
            kind: "LinkedField",
            name: "wa_delete_boosted_component",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "useWAWebBizAdDeleteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdDeleteMutation",
          selections: t,
        },
        params: {
          id: n("useWAWebBizAdDeleteMutation_facebookRelayOperation"),
          metadata: {},
          name: "useWAWebBizAdDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
