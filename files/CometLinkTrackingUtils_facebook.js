__d(
  "CometLinkTrackingUtils.facebook",
  ["ConstUriUtils", "isFacebookURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e != null && e !== "#" && (n.length || t.length)) {
        var a = o("ConstUriUtils").getUri(e);
        if (a != null)
          return r("isFacebookURI")(a)
            ? (n.length && (a = a.addQueryParam("__cft__", n)),
              t.length &&
                a != null &&
                (a = a.addQueryParam("__tn__", t.join(""))),
              a != null ? a.toString() : e)
            : e;
      }
      return e;
    }
    l.decorateHrefWithTrackingInfo = e;
  },
  98,
);
