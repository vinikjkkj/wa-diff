__d(
  "GroupsCometWorkIntegrityMembersPageMemberUserRow_member_list_item.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "groupID" }],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometWorkIntegrityMembersPageMemberUserRow_member_list_item",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Variable", name: "group_id", variableName: "groupID" },
          ],
          kind: "ScalarField",
          name: "is_user_linking_compartment_member",
          storageKey: null,
        },
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometMembersUserBadgeRow_user",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
