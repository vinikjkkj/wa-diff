__d(
  "fbicon",
  [
    "FBLogger",
    "TintableIconSource",
    "coerceImageishSprited",
    "memoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      throw r("FBLogger")("comet_ui").mustfixThrow(
        "fbicon.filled" +
          ("(" + JSON.stringify(e) + ", " + t + "): ") +
          "Unexpected fbicon.filled reference.",
      );
    }
    function s(e, t) {
      throw r("FBLogger")("comet_ui").mustfixThrow(
        "fbicon.outline" +
          ("(" + JSON.stringify(e) + ", " + t + "): ") +
          "Unexpected fbicon.outline reference.",
      );
    }
    var u = r("memoizeWithArgs")(
      function (e, t) {
        return new (r("TintableIconSource"))("FB", e, t);
      },
      function (e, t) {
        if (typeof e == "object") {
          var n = r("coerceImageishSprited")(e);
          if (n != null) return n.identifier + ":" + t;
          if (typeof e.uri == "string") return e.uri + ":" + t;
        } else if (typeof e == "string") return e + ":" + t;
        throw r("FBLogger")("comet_ui").mustfixThrow(
          "fbicon._: Invalid icon provided.",
        );
      },
    );
    ((l.filled = e), (l.outline = s), (l._ = u));
  },
  98,
);
