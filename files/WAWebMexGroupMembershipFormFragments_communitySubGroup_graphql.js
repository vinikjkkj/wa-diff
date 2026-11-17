__d(
  "WAWebMexGroupMembershipFormFragments_communitySubGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "include_membership_form" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "WAWebMexGroupMembershipFormFragments_communitySubGroup",
      selections: [
        {
          condition: "include_membership_form",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
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
              ],
              storageKey: null,
            },
          ],
        },
        {
          alias: null,
          args: null,
          concreteType: "XWA2CommunitySubGroupProperties",
          kind: "LinkedField",
          name: "properties",
          plural: !1,
          selections: [
            {
              condition: "include_membership_form",
              kind: "Condition",
              passingValue: !0,
              selections: [
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
            },
          ],
          storageKey: null,
        },
      ],
      type: "XWA2CommunitySubGroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
