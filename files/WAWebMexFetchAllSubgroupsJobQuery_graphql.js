__d(
  "WAWebMexFetchAllSubgroupsJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "group_id" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "query_context",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "sub_group_hint_id",
        },
        r = [
          {
            fields: [
              { kind: "Variable", name: "group_id", variableName: "group_id" },
              {
                kind: "Variable",
                name: "query_context",
                variableName: "query_context",
              },
              {
                kind: "Variable",
                name: "sub_group_hint",
                variableName: "sub_group_hint_id",
              },
            ],
            kind: "ObjectValue",
            name: "group_input",
          },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
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
          name: "value",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creation_time",
          storageKey: null,
        },
        s = {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XWA2GroupSubject",
            kind: "LinkedField",
            name: "subject",
            plural: !1,
            selections: [
              { kind: "RequiredField", field: i, action: "THROW" },
              { kind: "RequiredField", field: l, action: "THROW" },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
        u = {
          alias: null,
          args: null,
          concreteType: "XWA2CommunitySubGroupProperties",
          kind: "LinkedField",
          name: "properties",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "general_chat",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "membership_approval_mode_enabled",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "hidden_group",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        c = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "filter_input",
              value: { filter_for_user: !0 },
            },
          ],
          concreteType: "XWA2GroupMembershipRequestConnection",
          kind: "LinkedField",
          name: "membership_approval_requests",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "total_count",
              storageKey: null,
            },
          ],
          storageKey:
            'membership_approval_requests(filter_input:{"filter_for_user":true})',
        },
        d = {
          alias: null,
          args: null,
          concreteType: "XWA2GroupSubject",
          kind: "LinkedField",
          name: "subject",
          plural: !1,
          selections: [i, l],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchAllSubgroupsJobQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [
                o,
                a,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2CommunityDefaultSubGroup",
                      kind: "LinkedField",
                      name: "default_sub_group",
                      plural: !1,
                      selections: [o, s],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2CommunitySubGroupsConnection",
                      kind: "LinkedField",
                      name: "sub_groups",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XWA2CommunitySubGroupEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XWA2CommunitySubGroup",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [o, s, u, c],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "XWA2CommunityGroup",
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
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "WAWebMexFetchAllSubgroupsJobQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [
                o,
                a,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2CommunityDefaultSubGroup",
                      kind: "LinkedField",
                      name: "default_sub_group",
                      plural: !1,
                      selections: [o, d],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XWA2CommunitySubGroupsConnection",
                      kind: "LinkedField",
                      name: "sub_groups",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XWA2CommunitySubGroupEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XWA2CommunitySubGroup",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [o, d, u, c],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "XWA2CommunityGroup",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "9935467776504344",
          metadata: {},
          name: "WAWebMexFetchAllSubgroupsJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
