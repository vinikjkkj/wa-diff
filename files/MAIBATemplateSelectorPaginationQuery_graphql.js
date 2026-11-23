__d(
  "MAIBATemplateSelectorPaginationQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: 25, kind: "LocalArgument", name: "count" },
        t = { defaultValue: null, kind: "LocalArgument", name: "cursor" },
        n = { defaultValue: null, kind: "LocalArgument", name: "id" },
        r = { defaultValue: null, kind: "LocalArgument", name: "searchTerm" },
        o = [{ kind: "Variable", name: "id", variableName: "id" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [
          { kind: "Variable", name: "after", variableName: "cursor" },
          { kind: "Variable", name: "first", variableName: "count" },
          { kind: "Variable", name: "name", variableName: "searchTerm" },
          {
            kind: "Literal",
            name: "statuses",
            value: [
              "APPROVED",
              "PENDING",
              "REJECTED",
              "PAUSED",
              "DISABLED",
              "IN_APPEAL",
              "LIMIT_EXCEEDED",
              "ARCHIVED",
            ],
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "MAIBATemplateSelectorPaginationQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    { kind: "Variable", name: "count", variableName: "count" },
                    {
                      kind: "Variable",
                      name: "cursor",
                      variableName: "cursor",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "MAIBATemplateSelector_waba",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, t, r, n],
          kind: "Operation",
          name: "MAIBATemplateSelectorPaginationQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                a,
                i,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: l,
                      concreteType:
                        "WhatsAppBusinessAccountMessageTemplatesConnection",
                      kind: "LinkedField",
                      name: "message_templates",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "WhatsAppBusinessAccountMessageTemplatesEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XFBWhatsAppBusinessHSM",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "category",
                                  storageKey: null,
                                },
                                i,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "language",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "name",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "status",
                                  storageKey: null,
                                },
                                a,
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "cursor",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "PageInfo",
                          kind: "LinkedField",
                          name: "page_info",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "end_cursor",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "has_next_page",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: l,
                      filters: ["name", "statuses"],
                      handle: "connection",
                      key: "MAIBATemplateSelector_message_templates",
                      kind: "LinkedHandle",
                      name: "message_templates",
                    },
                  ],
                  type: "WhatsAppBusinessAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28082786888049511",
          metadata: {},
          name: "MAIBATemplateSelectorPaginationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
