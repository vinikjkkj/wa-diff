__d(
  "WAWebMexFetchGroupMembershipFormForJoinJobAddRequestQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "add_request",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "group_jid" },
        n = [
          {
            fields: [
              {
                kind: "Variable",
                name: "add_request",
                variableName: "add_request",
              },
              {
                kind: "Variable",
                name: "group_jid",
                variableName: "group_jid",
              },
              { kind: "Literal", name: "query_context", value: "ADD_REQUEST" },
            ],
            kind: "ObjectValue",
            name: "group_input",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
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
        a = [
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
        i = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2GroupRegularGroupProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: "XWA2GroupRegularGroup",
          abstractKey: null,
        },
        l = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2CommunitySubGroupProperties",
              kind: "LinkedField",
              name: "properties",
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: "XWA2CommunitySubGroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchGroupMembershipFormForJoinJobAddRequestQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [r, o, i, l],
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
          name: "WAWebMexFetchGroupMembershipFormForJoinJobAddRequestQuery",
          selections: [
            {
              alias: null,
              args: n,
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
                r,
                o,
                i,
                l,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29141119435545142",
          metadata: {},
          name: "WAWebMexFetchGroupMembershipFormForJoinJobAddRequestQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
