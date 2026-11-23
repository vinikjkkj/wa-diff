__d(
  "WAWebBizAIBloksAppLoaderQuery.graphql",
  ["WAWebBizAIBloksAppLoaderQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "queryType" },
        ],
        t = [
          {
            kind: "Variable",
            name: "bloks_query_type",
            variableName: "queryType",
          },
          { kind: "Variable", name: "input", variableName: "input" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "payload",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAIBloksAppLoaderQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "CometWebBloksPayload",
                kind: "LinkedField",
                name: "fetch_bloks_payload_for_comet",
                plural: !1,
                selections: [
                  { kind: "RequiredField", field: r, action: "THROW" },
                ],
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAIBloksAppLoaderQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "CometWebBloksPayload",
              kind: "LinkedField",
              name: "fetch_bloks_payload_for_comet",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebBizAIBloksAppLoaderQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAIBloksAppLoaderQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
