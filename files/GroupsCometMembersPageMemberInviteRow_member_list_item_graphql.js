__d(
  "GroupsCometMembersPageMemberInviteRow_member_list_item.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometMembersPageMemberInviteRow_member_list_item",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "invitee_profile",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "TextWithEntities",
                  kind: "LinkedField",
                  name: "bio_text",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "GroupsCometMembersPageMemberMeta_textWithEntities",
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "User",
              abstractKey: null,
            },
            {
              args: [
                { kind: "Literal", name: "height", value: 60 },
                { kind: "Variable", name: "scale", variableName: "scale" },
                { kind: "Literal", name: "width", value: 60 },
              ],
              kind: "FragmentSpread",
              name: "FDSProfilePhotoForActor_actor",
            },
          ],
          storageKey: null,
        },
      ],
      type: "GroupUserInvite",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
