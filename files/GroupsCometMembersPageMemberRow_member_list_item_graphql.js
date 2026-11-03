__d(
  "GroupsCometMembersPageMemberRow_member_list_item.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          concreteType: "WorkForeignEntityInfo",
          kind: "LinkedField",
          name: "work_foreign_entity_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "GroupsCometMembersPageMemberRow_member_list_item",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [e],
            type: "Page",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_true_blue_verified_groups",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [t],
                    type: "User",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      t,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_multi_company_group",
                        storageKey: null,
                      },
                    ],
                    type: "Group",
                    abstractKey: null,
                  },
                ],
                type: "Entity",
                abstractKey: "__isEntity",
              },
            ],
            type: "User",
            abstractKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometMemberProfileLinkContainer_profile",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometMembersPageMemberRowPrimaryAddOn_profile",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometMembersPageMemberUserRow_member_list_item",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometMembersPageMemberInviteRow_member_list_item",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometMembersPageMemberInviteLinkRow_member_list_item",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometWorkIntegrityMembersPageMemberUserRow_member_list_item",
          },
        ],
        type: "Profile",
        abstractKey: "__isProfile",
      };
    })();
    a.exports = e;
  },
  null,
);
