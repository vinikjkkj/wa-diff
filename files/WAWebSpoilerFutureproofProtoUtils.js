__d(
  "WAWebSpoilerFutureproofProtoUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["documentWithCaptionMessage"];
    function l(t, n) {
      if (t.documentWithCaptionMessage != null) {
        var r = t.documentWithCaptionMessage,
          o = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, o, {
          spoilerMessage: { message: r.message },
        });
      }
      return { spoilerMessage: { message: t } };
    }
    i.createSpoilerFutureproofMessage = l;
  },
  66,
);
