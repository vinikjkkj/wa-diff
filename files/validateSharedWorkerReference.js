__d(
  "validateSharedWorkerReference",
  ["ConstUriUtils", "isRelativeURL", "isSameOrigin", "memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
      return o("ConstUriUtils").getUri(window.location.href);
    });
    function s(t) {
      var n = e(),
        a = o("ConstUriUtils").getUri(t),
        i = n != null && a != null ? r("isSameOrigin")(a, n) : !1;
      return i || r("isRelativeURL")(t);
    }
    function u(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.rev,
        n = e.rsrcBundleUrl,
        r = e.sandboxOnlyChecksum,
        o = e.spin_time,
        a = e.url,
        i = e.version;
      return typeof t != "number" ||
        typeof o != "number" ||
        (i != null && i !== 1 && i !== 2) ||
        !Number.isInteger(t) ||
        !Number.isInteger(o) ||
        typeof a != "string" ||
        !s(a) ||
        (n != null && typeof n != "string") ||
        (r != null && typeof r != "string")
        ? null
        : {
            rev: t,
            spin_time: o,
            url: a,
            version: i != null ? i : 1,
            rsrcBundleUrl: n,
            sandboxOnlyChecksum: r,
          };
    }
    l.default = u;
  },
  98,
);
