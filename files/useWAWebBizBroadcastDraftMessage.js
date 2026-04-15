__d(
  "useWAWebBizBroadcastDraftMessage",
  [
    "WATimeUtils",
    "WAWebChatGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n,
        r = e == null ? void 0 : e.getComposeContents();
      (r == null && t.trim() === "") ||
        ((r == null || (n = r.text) == null ? void 0 : n.trim()) !== t.trim() &&
          (e == null ||
            e.setComposeContents({
              text: t,
              timestamp: o("WATimeUtils").unixTime(),
            })));
    }
    function m(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(12),
        i;
      a[0] !== e
        ? ((i = e.values().next()), (a[0] = e), (a[1] = i))
        : (i = a[1]);
      var l = i.value,
        s =
          (t = o("useWAWebChatValues").useOptionalChatValues(
            l == null ? void 0 : l.id,
            [o("WAWebChatGetters").getDraftMessage],
          )) != null
            ? t
            : [],
        u = s[0],
        m = c((n = u == null ? void 0 : u.text) != null ? n : ""),
        p = m[0],
        _ = m[1],
        f = r("useWAWebDebouncedCallback")(d, 200),
        g;
      a[2] !== l || a[3] !== f || a[4] !== e.size
        ? ((g = function (n) {
            (_(n), e.size === 1 && f(l, n));
          }),
          (a[2] = l),
          (a[3] = f),
          (a[4] = e.size),
          (a[5] = g))
        : (g = a[5]);
      var h = g,
        y;
      a[6] !== l
        ? ((y = function () {
            l == null ||
              l.setComposeContents({
                text: "",
                timestamp: o("WATimeUtils").unixTime(),
              });
          }),
          (a[6] = l),
          (a[7] = y))
        : (y = a[7]);
      var C = y,
        b;
      return (
        a[8] !== C || a[9] !== p || a[10] !== h
          ? ((b = { clearDraftMessage: C, message: p, onMessageChange: h }),
            (a[8] = C),
            (a[9] = p),
            (a[10] = h),
            (a[11] = b))
          : (b = a[11]),
        b
      );
    }
    l.default = m;
  },
  98,
);
