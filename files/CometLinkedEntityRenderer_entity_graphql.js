__d(
  "CometLinkedEntityRenderer_entity.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "CometLinkedEntityRenderer_entity",
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
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometLinkedEntityRenderer_entity",
              fragmentName:
                "GroupsCometHashtagsStoryMessageHashtagLink_hashtag",
              fragmentPropName: "hashtag",
              kind: "ModuleImport",
            },
          ],
          type: "GroupHashtag",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometLinkedEntityRenderer_entity",
              fragmentName: "PagesCometPageLink_page",
              fragmentPropName: "page",
              kind: "ModuleImport",
            },
          ],
          type: "Page",
          abstractKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileCometProfileLink_actor",
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              args: null,
              documentName: "CometLinkedEntityRenderer_entity",
              fragmentName: "ProfileGeminiWeakReferenceLink_user",
              fragmentPropName: "user",
              kind: "ModuleImport",
            },
          ],
          type: "User",
          abstractKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_prioritize_ig_display_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
          ],
          type: "InstagramUserV2",
          abstractKey: null,
        },
      ],
      type: "Entity",
      abstractKey: "__isEntity",
    };
    a.exports = e;
  },
  null,
);
