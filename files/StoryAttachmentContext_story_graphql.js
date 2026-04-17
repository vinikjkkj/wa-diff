__d(
  "StoryAttachmentContext_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoryAttachmentContext_story",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "post_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actors",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              e,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "message",
            plural: !1,
            selections: [e],
            storageKey: null,
          },
        ],
        type: "Story",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
