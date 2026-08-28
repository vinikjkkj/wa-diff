__d(
  "adsCreativeMediaSourcingSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "ApiCreativeMultiTextFields",
    "MultiMediaImageSpecFields",
    "MultiMediaPlayableSpecFields",
    "MultiMediaVideoSpecFields",
    "adsCreativeRelatedMediaSpecAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          related_media: r("adsCreativeRelatedMediaSpecAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.related_media;
            },
            [].concat(t, ["related_media"]),
          ),
          images: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.images;
            },
            [].concat(t, ["images"]),
            Object.values(r("MultiMediaImageSpecFields")),
          ),
          videos: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.videos;
            },
            [].concat(t, ["videos"]),
            Object.values(r("MultiMediaVideoSpecFields")),
          ),
          playables: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.playables;
            },
            [].concat(t, ["playables"]),
            Object.values(r("MultiMediaPlayableSpecFields")),
          ),
          bodies: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.bodies;
            },
            [].concat(t, ["bodies"]),
            Object.values(r("ApiCreativeMultiTextFields")),
          ),
          titles: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.titles;
            },
            [].concat(t, ["titles"]),
            Object.values(r("ApiCreativeMultiTextFields")),
          ),
          descriptions: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.descriptions;
            },
            [].concat(t, ["descriptions"]),
            Object.values(r("ApiCreativeMultiTextFields")),
          ),
          destinations: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.destinations;
            },
            [].concat(t, ["destinations"]),
            ["url", "display_url"],
          ),
          push_metadata_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "push_metadata_ids",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
