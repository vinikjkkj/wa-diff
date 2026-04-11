__d(
  "WAWebMediaProtoUtils",
  ["isEmptyObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "$$unknownFieldCount",
        "annotations",
        "imageSourceType",
        "interactiveAnnotations",
        "scanLengths",
      ],
      s = [
        "$$unknownFieldCount",
        "annotations",
        "interactiveAnnotations",
        "processedVideos",
      ];
    function u(t) {
      var n = t.$$unknownFieldCount,
        o = t.annotations,
        a = t.imageSourceType,
        i = t.interactiveAnnotations,
        l = t.scanLengths,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return r("isEmptyObject")(s);
    }
    function c(e) {
      var t = e.$$unknownFieldCount,
        n = e.annotations,
        o = e.interactiveAnnotations,
        a = e.processedVideos,
        i = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return r("isEmptyObject")(i);
    }
    ((l.isEmptyImageMessage = u), (l.isEmptyVideoMessage = c));
  },
  98,
);
