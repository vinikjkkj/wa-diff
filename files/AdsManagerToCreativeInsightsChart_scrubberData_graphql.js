__d(
  "AdsManagerToCreativeInsightsChart_scrubberData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "num_images_per_row",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thumbnail_width",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "thumbnail_height",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "AdsManagerToCreativeInsightsChart_scrubberData",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "AdsScrubberPreview",
            kind: "LinkedField",
            name: "ads_scrubber_preview_thumbnail_information",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "sprite_uri",
                storageKey: null,
              },
              e,
              t,
              n,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ScrubberPreview",
            kind: "LinkedField",
            name: "scrubber_preview_thumbnail_information",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "sprite_uris",
                storageKey: null,
              },
              e,
              t,
              n,
            ],
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
