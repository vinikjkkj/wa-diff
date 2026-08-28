__d(
  "AndromedaSVLog",
  ["MainPageUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { DEBUG: 4, INFO: 3, WARN: 2, ERROR: 1 };
    function s(t, n) {
      var r, a;
      t === void 0 && (t = 4);
      var i =
          (r =
            (a = o("MainPageUrl").mainPageUrl.searchParams.get("svlog")) == null
              ? void 0
              : a.split(",")) != null
            ? r
            : [e.ERROR.toString()],
        l = i[0],
        s = i[1],
        u = parseInt(l, 10),
        c = isNaN(u) ? e.ERROR : u;
      return n != null &&
        s != null &&
        !n.toLowerCase().includes(s.toLowerCase())
        ? !1
        : c >= t;
    }
    ((l.SV_LOG_LEVEL = e), (l.isSVLogEnabled = s));
  },
  98,
);
