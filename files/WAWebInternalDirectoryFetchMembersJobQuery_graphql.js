__d(
  "WAWebInternalDirectoryFetchMembersJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "after" },
        t = { defaultValue: null, kind: "LocalArgument", name: "first" },
        n = [
          { kind: "Variable", name: "after", variableName: "after" },
          { kind: "Variable", name: "first", variableName: "first" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "member_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lid",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "team",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "designation",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enrollment_status",
          storageKey: null,
        },
        u = {
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
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebInternalDirectoryFetchMembersJobQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XWAWhatsAppForWorkEmployeeDirectoryConnection",
              kind: "LinkedField",
              name: "xwa_whatsapp_for_work_employee_directory",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAWhatsAppForWorkEmployeeDirectoryEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWAWhatsAppForWorkMember",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [r, o, a, i, l, s],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                u,
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebInternalDirectoryFetchMembersJobQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XWAWhatsAppForWorkEmployeeDirectoryConnection",
              kind: "LinkedField",
              name: "xwa_whatsapp_for_work_employee_directory",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAWhatsAppForWorkEmployeeDirectoryEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWAWhatsAppForWorkMember",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        r,
                        o,
                        a,
                        i,
                        l,
                        s,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "id",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                u,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28645118498472724",
          metadata: {},
          name: "WAWebInternalDirectoryFetchMembersJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
