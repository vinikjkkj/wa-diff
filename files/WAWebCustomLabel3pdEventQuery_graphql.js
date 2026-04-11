__d(
  "WAWebCustomLabel3pdEventQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "custom_labels" },
          { defaultValue: null, kind: "LocalArgument", name: "expt_group" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "custom_labels",
                variableName: "custom_labels",
              },
              {
                kind: "Variable",
                name: "expt_group",
                variableName: "expt_group",
              },
            ],
            concreteType: "XWACustomLabelTo3PDEvent",
            kind: "LinkedField",
            name: "xwa_get_3pd_event",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "custom_label",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ctwa_3pd_conversion_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ctwa_3pd_conversion_subtype",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ctwa_3pd_conversion_metadata",
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
          name: "WAWebCustomLabel3pdEventQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebCustomLabel3pdEventQuery",
          selections: t,
        },
        params: {
          id: "24247439618185103",
          metadata: {},
          name: "WAWebCustomLabel3pdEventQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
