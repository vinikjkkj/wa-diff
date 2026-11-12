__d(
  "WAWebMexFetchMembershipApprovalRequestsJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "id" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "include_username",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "query_context",
        },
        r = [
          {
            fields: [
              { kind: "Variable", name: "group_id", variableName: "id" },
              {
                kind: "Variable",
                name: "query_context",
                variableName: "query_context",
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
          name: "jid",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pn",
          storageKey: null,
        },
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
          ],
          type: "XWA2Username",
          abstractKey: null,
        },
        l = [
          o,
          a,
          {
            condition: "include_username",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "username_info",
                plural: !1,
                selections: [i],
                storageKey: null,
              },
            ],
          },
        ],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "request_method",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "request_time",
          storageKey: null,
        },
        c = [
          {
            alias: null,
            args: null,
            concreteType: "XWA2GroupMembershipRequestConnection",
            kind: "LinkedField",
            name: "membership_approval_requests",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWA2GroupMembershipRequestEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2GroupMembershipRequest",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWA2User",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      s,
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWA2User",
                        kind: "LinkedField",
                        name: "requestor",
                        plural: !1,
                        selections: l,
                        storageKey: null,
                      },
                      u,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        p = [
          o,
          a,
          {
            condition: "include_username",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "username_info",
                plural: !1,
                selections: [d, i],
                storageKey: null,
              },
            ],
          },
          m,
        ],
        _ = [
          {
            alias: null,
            args: null,
            concreteType: "XWA2GroupMembershipRequestConnection",
            kind: "LinkedField",
            name: "membership_approval_requests",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWA2GroupMembershipRequestEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2GroupMembershipRequest",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWA2User",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: p,
                        storageKey: null,
                      },
                      s,
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWA2User",
                        kind: "LinkedField",
                        name: "requestor",
                        plural: !1,
                        selections: p,
                        storageKey: null,
                      },
                      u,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchMembershipApprovalRequestsJobQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: c,
                  type: "XWA2GroupRegularGroup",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: c,
                  type: "XWA2CommunitySubGroup",
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
          name: "WAWebMexFetchMembershipApprovalRequestsJobQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [
                d,
                {
                  kind: "InlineFragment",
                  selections: _,
                  type: "XWA2GroupRegularGroup",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: _,
                  type: "XWA2CommunitySubGroup",
                  abstractKey: null,
                },
                m,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "40086730520941352",
          metadata: {},
          name: "WAWebMexFetchMembershipApprovalRequestsJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
