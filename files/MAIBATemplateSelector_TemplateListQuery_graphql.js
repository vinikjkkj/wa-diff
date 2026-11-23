__d(
  "MAIBATemplateSelector_TemplateListQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "searchTerm" },
          { defaultValue: null, kind: "LocalArgument", name: "wabaID" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "wabaID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [
          { kind: "Literal", name: "first", value: 25 },
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBATemplateSelector_TemplateListQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
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
                            name: "MAIBATemplateSelector_waba",
                          },
                        ],
                        type: "WhatsAppBusinessAccount",
                        abstractKey: null,
                      },
                      kind: "AliasedInlineFragmentSpread",
                      name: "waba",
                    },
                  ],
                  type: "WhatsAppBusinessAccount",
                  abstractKey: null,
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBATemplateSelector_TemplateListQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                n,
                r,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: o,
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
                                r,
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
                                n,
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
                      args: o,
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
          id: "28497987639819714",
          metadata: {},
          name: "MAIBATemplateSelector_TemplateListQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
