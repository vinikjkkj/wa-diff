__d(
  "MAIBATemplateSelector_waba.graphql",
  ["MAIBATemplateSelectorPaginationQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = ["message_templates"],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: 25, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "searchTerm" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: e },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: e,
            },
            fragmentPathInResult: ["node"],
            operation: n("MAIBATemplateSelectorPaginationQuery.graphql"),
            identifierInfo: {
              identifierField: "id",
              identifierQueryVariableName: "id",
            },
          },
          throwOnFieldError: !0,
        },
        name: "MAIBATemplateSelector_waba",
        selections: [
          {
            alias: "message_templates",
            args: [
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
            ],
            concreteType: "WhatsAppBusinessAccountMessageTemplatesConnection",
            kind: "LinkedField",
            name: "__MAIBATemplateSelector_message_templates_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WhatsAppBusinessAccountMessageTemplatesEdge",
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
                      t,
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
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      },
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
          t,
        ],
        type: "WhatsAppBusinessAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
