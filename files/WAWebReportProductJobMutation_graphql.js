__d(
  "WAWebReportProductJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "XWAWhatsAppCatalogReportProductResponse",
            kind: "LinkedField",
            name: "xwa_whatsapp_catalog_report_product",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
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
          name: "WAWebReportProductJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebReportProductJobMutation",
          selections: t,
        },
        params: {
          id: "WAWebReportProductJobMutation",
          metadata: {},
          name: "WAWebReportProductJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    ((e.hash = "a344b224fc28492489aa97287055b47e"), (a.exports = e));
  },
  null,
);
