__d(
  "adsCreativeRelatedMediaSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "CreativeRelaxationImagesFields",
    "CreativeRelaxationVideosFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          images: o(
            "AdsAdObjectsAccessorUtils",
          ).nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.images;
            },
            [].concat(t, ["images"]),
            Object.values(r("CreativeRelaxationImagesFields")),
          ),
          videos: o(
            "AdsAdObjectsAccessorUtils",
          ).nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.videos;
            },
            [].concat(t, ["videos"]),
            Object.values(r("CreativeRelaxationVideosFields")),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
