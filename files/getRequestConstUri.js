__d(
  "getRequestConstUri",
  ["ConstUriUtils", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("ConstUriUtils").getUri(window.location.href);
      if (e == null)
        throw r("FBLogger")("comet_infra").mustfixThrow(
          "Cannot create ConstUriImpl of current request",
        );
      return e;
    }
    l.default = e;
  },
  98,
);
