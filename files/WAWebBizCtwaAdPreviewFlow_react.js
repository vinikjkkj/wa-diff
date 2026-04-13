__d(
  "WAWebBizCtwaAdPreviewFlow.react",
  [
    "$InternalEnum",
    "WAWebBizCtwaAdPreview.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["AdPreview"]);
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.msg,
        a = e.onClose,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebFlow").useFlow(u.AdPreview, i),
        c = l[0],
        d = l[1];
      if (d.step == null || n.ctwaContext == null) return null;
      var m;
      t[1] !== n || t[2] !== a
        ? ((m = s.jsx(r("WAWebBizCtwaAdPreview.react"), {
            automatedGreetingMessage: n,
            ctwaContext: n.ctwaContext,
            onClose: a,
          })),
          (t[1] = n),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== c || t[5] !== d || t[6] !== m
          ? ((p = s.jsx(c, { flow: d, children: m })),
            (t[4] = c),
            (t[5] = d),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = c;
  },
  98,
);
