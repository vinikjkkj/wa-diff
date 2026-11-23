__d(
  "WAWebMexFetchGroupMembershipFormForJoinJobLinkedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "group_jid" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "sub_group_jid_hint",
          },
        ],
        t = [
          {
            fields: [
              {
                kind: "Variable",
                name: "group_jid",
                variableName: "group_jid",
              },
              { kind: "Literal", name: "query_context", value: "LINKED" },
              {
                kind: "Variable",
                name: "sub_group_jid_hint",
                variableName: "sub_group_jid_hint",
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
        o = {
          kind: "InlineFragment",
          selections: [
            {
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
          name: "WAWebMexFetchGroupMembershipFormForJoinJobLinkedQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xwa2_group_query_by_id",
              plural: !1,
              selections: [n, r, o],
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
          name: "WAWebMexFetchGroupMembershipFormForJoinJobLinkedQuery",
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
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29114851804844885",
          metadata: {},
          name: "WAWebMexFetchGroupMembershipFormForJoinJobLinkedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
