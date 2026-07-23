__d(
  "cometRouterSubdomainUtils",
  ["ConstUriUtils", "goForceFullPageRedirectTo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e != null) {
        var a,
          i =
            (a = o("ConstUriUtils").getUri(t.url)) == null ||
            (a = a.qualifyDomain(e)) == null
              ? void 0
              : a.setSubDomain(n);
        i != null && r("goForceFullPageRedirectTo")(i.toString());
      }
    }
    function s(t) {
      var n,
        r = o("ConstUriUtils").getUri(window.location.href),
        a = (n = r == null ? void 0 : r.getSubdomain()) != null ? n : "";
      t.useSecureSubdomain === !0 && a !== "secure"
        ? e(r, t, "secure")
        : t.useSecureSubdomain !== !0 && a === "secure" && e(r, t, "www");
    }
    l.checkSubdomainMismatch = s;
  },
  98,
);
