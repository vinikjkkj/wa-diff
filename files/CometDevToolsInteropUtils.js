__d(
  "CometDevToolsInteropUtils",
  ["ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = new URL(window.location.href);
      for (var a of Object.entries(e)) {
        var i = a[0],
          l = e[i];
        if (l === null) {
          r.searchParams.delete(i);
          continue;
        } else r.searchParams.set(i, l);
      }
      window.location.href =
        (t =
          (n = o("ConstUriUtils").getUri(r.toString())) == null
            ? void 0
            : n.toString()) != null
          ? t
          : "";
    }
    function s(e) {
      var t, n, r;
      if (e === "od") {
        var a;
        r =
          (a = o("ConstUriUtils").getUri(
            "https://our.intern.facebook.com/intern/ondemand/redirect/",
          )) == null
            ? void 0
            : a.addQueryParam("uri", window.location.href);
      } else {
        var i = "www." + e + ".facebook.com",
          l = o("ConstUriUtils").getUri(window.location.href);
        r = l == null ? void 0 : l.setDomain(i);
      }
      window.location.href =
        (t = (n = r) == null ? void 0 : n.toString()) != null ? t : "";
    }
    ((l.reloadWithParams = e), (l.selectPushTier = s));
  },
  98,
);
