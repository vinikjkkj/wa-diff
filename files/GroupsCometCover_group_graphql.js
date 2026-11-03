__d(
  "GroupsCometCover_group.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometCover_group",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "cover_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "GroupsCometCover_group",
                  fragmentName: "GroupsCometCoverPhotoRenderer_coverRenderer",
                  fragmentPropName: "coverRenderer",
                  kind: "ModuleImport",
                },
              ],
              type: "GroupsCometCoverPhotoRenderer",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "if_viewer_can_change_cover_photo",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "GroupsCometCover_group__if_viewer_can_change_cover_photo",
              fragmentName: "GroupsCometCoverEditButton_group",
              fragmentPropName: "group",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "if_viewer_can_see_affiliation",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "GroupsCometCover_group__if_viewer_can_see_affiliation",
              fragmentName: "GroupsCometCoverPhotoAffiliationRenderer_group",
              fragmentPropName: "group",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: "photo_uploader",
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "if_viewer_can_change_cover_photo",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "GroupsCometCover_group__photo_uploader",
              fragmentName: "GroupsCometCoverPhotoUploader_group",
              fragmentPropName: "group",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
