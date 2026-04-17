__d(
  "CometFeedStoryAttachmentRenderer_attachment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAttachmentRenderer_attachment",
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
          name: "style_list",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAttachmentMatchRenderer_attachment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometFeedStoryAttachmentMatchRendererThrowback_attachment",
        },
      ],
      type: "StoryAttachment",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
