__d(
  "handleCABRedirect",
  ["ConstUriUtils", "goForceFullPageRedirectTo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = o("ConstUriUtils").getUri(e)) == null
            ? void 0
            : t.addQueryParam("next", location.href);
      r("goForceFullPageRedirectTo")(n != null ? n : "/");
    }
    l.default = e;
  },
  98,
);
