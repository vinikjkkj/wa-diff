__d(
  "StoriesTrayTileNotesOverlay_overlay.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "StoriesTrayTileNotesOverlay_overlay",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "MsgrUserRichStatus",
          kind: "LinkedField",
          name: "msgr_user_rich_status",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "note_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBMusicAttachmentMetadata",
              kind: "LinkedField",
              name: "music_metadata",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "StoriesTrayNoteBubble_music",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "StoryOverlayFBNotesSticker",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
