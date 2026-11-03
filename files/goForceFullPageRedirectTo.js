__d(
  "goForceFullPageRedirectTo",
  ["ConstUriUtils", "FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a =
        typeof e == "string"
          ? o("ConstUriUtils").getUri(e)
          : o("ConstUriUtils").isConstUri(e);
      if (a)
        if (t === !0) {
          var i =
            (n == null ? void 0 : n.preserveQueryOnReplace) === !0
              ? a.toStringPreserveQuery()
              : a.toString();
          window.location.replace(i);
        } else window.location = a.toString();
      else {
        var l =
          "Invalid URI " + e.toString() + " provided to goFullPageRedirectTo";
        r("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(l);
      }
    }
    l.default = e;
  },
  98,
);
