__d(
  "goURIOnWindow",
  ["ConstUriUtils", "FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
        typeof t == "string"
          ? o("ConstUriUtils").getUri(t)
          : o("ConstUriUtils").isConstUri(t);
      if (n) return e == null ? !1 : ((e.location = n.toString()), !0);
      var a = "Invalid URI " + t.toString() + " provided to goURIOnWindow";
      return (
        r("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(a),
        !1
      );
    }
    l.default = e;
  },
  98,
);
