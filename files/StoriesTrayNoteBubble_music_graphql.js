__d(
  "StoriesTrayNoteBubble_music.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometTextWithEntitiesRelay_textWithEntities",
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoriesTrayNoteBubble_music",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MusicSong",
            kind: "LinkedField",
            name: "license_music",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "display_artist",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "XFBMusicAttachmentMetadata",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
