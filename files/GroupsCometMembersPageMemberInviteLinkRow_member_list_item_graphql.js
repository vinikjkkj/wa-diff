__d(
  "GroupsCometMembersPageMemberInviteLinkRow_member_list_item.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometMembersPageMemberInviteLinkRow_member_list_item",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 60 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 60 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null,
              },
              action: "THROW",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null,
              },
              action: "THROW",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "height",
                storageKey: null,
              },
              action: "THROW",
            },
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "scale",
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          storageKey: null,
        },
      ],
      type: "GroupInviteLink",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
