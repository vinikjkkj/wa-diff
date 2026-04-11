__d(
  "RSTLogger",
  ["cr:17264"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        (e = n("cr:17264") == null ? void 0 : n("cr:17264").logSpanStart) !=
        null
          ? e
          : function (t, n, r) {
              return (r === void 0 && (r = {}), -1);
            },
      d =
        (s = n("cr:17264") == null ? void 0 : n("cr:17264").logSpanEnd) != null
          ? s
          : function (t) {},
      m =
        (u = n("cr:17264") == null ? void 0 : n("cr:17264").logSpanEndForKey) !=
        null
          ? u
          : function (t) {};
    ((l.logSpanStart = c), (l.logSpanEnd = d), (l.logSpanEndForKey = m));
  },
  98,
);
