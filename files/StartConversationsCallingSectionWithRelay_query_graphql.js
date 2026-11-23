__d(
  "StartConversationsCallingSectionWithRelay_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "rtcPageIDs" }],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "StartConversationsCallingSectionWithRelay_query",
      selections: [
        {
          kind: "CatchField",
          field: {
            alias: "rtcPages",
            args: [
              { kind: "Variable", name: "ids", variableName: "rtcPageIDs" },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "StartConversationsCallingSectionWithRelay_page",
                        },
                      ],
                      type: "Page",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "rtcPage",
                  },
                ],
                type: "Page",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
          to: "NULL",
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
