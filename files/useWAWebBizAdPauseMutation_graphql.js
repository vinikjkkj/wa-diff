__d(
  "useWAWebBizAdPauseMutation.graphql",
  ["useWAWebBizAdPauseMutation_facebookRelayOperation"],
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
            concreteType: "WaPauseBoostedComponentResponsePayload",
            kind: "LinkedField",
            name: "wa_pause_boosted_component",
            plural: !1,
            selections: [
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "useWAWebBizAdPauseMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdPauseMutation",
          selections: t,
        },
        params: {
          id: n("useWAWebBizAdPauseMutation_facebookRelayOperation"),
          metadata: {},
          name: "useWAWebBizAdPauseMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
