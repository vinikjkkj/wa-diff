__d(
  "MAIBASeymourGreetingMessageQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "currentPageID" },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "XFBMAIBAViewerFields",
            kind: "LinkedField",
            name: "maiba_viewer",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "current_page_id",
                    variableName: "currentPageID",
                  },
                ],
                kind: "ScalarField",
                name: "maiba_cmo_whats_next_summary",
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
          name: "MAIBASeymourGreetingMessageQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBASeymourGreetingMessageQuery",
          selections: t,
        },
        params: {
          id: "27531042023238345",
          metadata: {},
          name: "MAIBASeymourGreetingMessageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
