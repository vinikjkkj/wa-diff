__d(
  "makeA2UIPageNameValidatorQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "input_name" },
        ],
        t = [
          {
            alias: null,
            args: [
              { kind: "Literal", name: "auto_capitalize", value: !0 },
              {
                kind: "Variable",
                name: "input_name",
                variableName: "input_name",
              },
            ],
            concreteType: "PageNameCheckResult",
            kind: "LinkedField",
            name: "page_name_check",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error",
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
          metadata: { throwOnFieldError: !0 },
          name: "makeA2UIPageNameValidatorQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "makeA2UIPageNameValidatorQuery",
          selections: t,
        },
        params: {
          id: "28867387356224577",
          metadata: {},
          name: "makeA2UIPageNameValidatorQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
