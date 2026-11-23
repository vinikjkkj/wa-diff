__d(
  "makeA2UIBusinessNameValidatorQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "business_name" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "business_name",
                variableName: "business_name",
              },
            ],
            concreteType: "IsBusinesslNameValidResponse",
            kind: "LinkedField",
            name: "business_settings_validate_business_name",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_valid",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_code",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_description",
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
          name: "makeA2UIBusinessNameValidatorQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "makeA2UIBusinessNameValidatorQuery",
          selections: t,
        },
        params: {
          id: "29768311569426182",
          metadata: {},
          name: "makeA2UIBusinessNameValidatorQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
