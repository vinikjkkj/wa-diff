__d(
  "goForceFullPageRedirectTo",
  ["ConstUriUtils", "FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
        typeof e == "string"
          ? o("ConstUriUtils").getUri(e)
          : o("ConstUriUtils").isConstUri(e);
      if (n)
        t === !0
          ? window.location.replace(n.toString())
          : (window.location = n.toString());
      else {
        var a =
          "Invalid URI " + e.toString() + " provided to goFullPageRedirectTo";
        r("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(a);
      }
    }
    l.default = e;
  },
  98,
);
