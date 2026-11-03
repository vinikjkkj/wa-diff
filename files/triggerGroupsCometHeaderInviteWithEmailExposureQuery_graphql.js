__d(
  "triggerGroupsCometHeaderInviteWithEmailExposureQuery.graphql",
  [
    "triggerGroupsCometHeaderInviteWithEmailExposureQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "groupId" }],
        t = [{ kind: "Variable", name: "id", variableName: "groupId" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "gk_name",
              value: "groups_invite_with_email",
            },
          ],
          concreteType: "EntGKCheck",
          kind: "LinkedField",
          name: "gk_check",
          plural: !1,
          selections: [r],
          storageKey: 'gk_check(gk_name:"groups_invite_with_email")',
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "triggerGroupsCometHeaderInviteWithEmailExposureQuery",
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
                      alias: null,
                      args: null,
                      concreteType: "Group",
                      kind: "LinkedField",
                      name: "if_viewer_is_admin",
                      plural: !1,
                      selections: [o],
                      storageKey: null,
                    },
                  ],
                  type: "Group",
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
          name: "triggerGroupsCometHeaderInviteWithEmailExposureQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                r,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "Group",
                      kind: "LinkedField",
                      name: "if_viewer_is_admin",
                      plural: !1,
                      selections: [o, a],
                      storageKey: null,
                    },
                  ],
                  type: "Group",
                  abstractKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "triggerGroupsCometHeaderInviteWithEmailExposureQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "triggerGroupsCometHeaderInviteWithEmailExposureQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
