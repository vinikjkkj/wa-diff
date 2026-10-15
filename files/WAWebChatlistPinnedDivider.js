__d(
  "WAWebChatlistPinnedDivider",
  ["WAWebChatlistTypes", "WDSSectionDividerMetrics"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = [],
        a = !1,
        i = !1;
      for (var l of e) {
        var s;
        (((s = l.pin) != null ? s : 0) > 0
          ? (a = !0)
          : t &&
            a &&
            !i &&
            (r.push({
              itemKey: "pinned-divider",
              type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_PINNED_DIVIDER,
              height: o("WDSSectionDividerMetrics").WDSSectionDividerBareHeight,
            }),
            (i = !0)),
          r.push(n(l)));
      }
      return r;
    }
    l.toChatRowsWithPinnedDivider = e;
  },
  98,
);
