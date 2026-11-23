__d(
  "WAWebMexFetchGroupMembershipFormForJoinJobInviteQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "invite_code" },
        ],
        t = [
          {
            fields: [
              {
                kind: "Variable",
                name: "invite_code",
                variableName: "invite_code",
              },
              {
                kind: "Literal",
                name: "query_context",
                value: "GET_GROUP_BY_INVITE_CODE",
              },
            ],
            kind: "ObjectValue",
            name: "group_input",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          concreteType: "XWA2GroupEncryptionKeyData",
          kind: "LinkedField",
          name: "membership_form_key",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "key_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "public_key_payload",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        o = [
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
            concreteType: "XWA2GroupMembershipForm",
            kind: "LinkedField",
            name: "membership_form",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "questions",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        a = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2GroupRegularGroupProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: o,
              storageKey: null,
            },
          ],
          type: "XWA2GroupRegularGroup",
          abstractKey: null,
        },
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2CommunitySubGroupProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: o,
              storageKey: null,
            },
          ],
          type: "XWA2CommunitySubGroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchGroupMembershipFormForJoinJobInviteQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [n, r, a, i],
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
          name: "WAWebMexFetchGroupMembershipFormForJoinJobInviteQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                n,
                r,
                a,
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29270709232562495",
          metadata: {},
          name: "WAWebMexFetchGroupMembershipFormForJoinJobInviteQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
