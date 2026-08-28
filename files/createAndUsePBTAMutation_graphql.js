__d(
  "createAndUsePBTAMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "page_id" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "page_id", variableName: "page_id" },
            ],
            concreteType: "XFBCreatePBTAResponse",
            kind: "LinkedField",
            name: "xfb_create_page_backed_threads_accounts",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "th_user_id",
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
          name: "createAndUsePBTAMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "createAndUsePBTAMutation",
          selections: t,
        },
        params: {
          id: "26055710087356540",
          metadata: {},
          name: "createAndUsePBTAMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
