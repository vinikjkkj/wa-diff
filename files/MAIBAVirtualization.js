__d(
  "MAIBAVirtualization",
  ["CometVirtualization.react", "qex", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = (e = r("qex")._("4233")) != null ? e : null,
      _ = (s = r("qex")._("4252")) != null ? s : !1,
      f = (u = r("qex")._("4257")) != null ? u : null,
      g = (c = r("qex")._("4298")) != null ? c : 500;
    function h(e) {
      var t = e.children,
        n = e.itemKey,
        o = e.useCase;
      return !_ || o !== p
        ? t
        : f === "activity_only"
          ? m.jsx(
              r("CometVirtualization.react"),
              { activityOnlyMode: !0, topBottomMargin: g, children: t },
              n,
            )
          : m.jsx(
              r("CometVirtualization.react"),
              { topBottomMargin: g, unmountHiddenChildren: !0, children: t },
              n,
            );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
