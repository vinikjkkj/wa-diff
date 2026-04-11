__d(
  "WAWebBizOrderStatusUpdateFlow.react",
  [
    "$InternalEnum",
    "WAWebOrderStatusUpdateDrawer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Updatestatus"]);
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.chat,
        a = e.entryPoint,
        i = e.orderInfo,
        l = e.sellerJid,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (t[0] = c))
        : (c = t[0]);
      var d = o("useWAWebFlow").useFlow(u.Updatestatus, c),
        m = d[0],
        p = d[1],
        _;
      t[1] !== n || t[2] !== a || t[3] !== p.pop || t[4] !== i || t[5] !== l
        ? ((_ = s.jsx(r("WAWebOrderStatusUpdateDrawer.react"), {
            entryPoint: a,
            chat: n,
            onBack: p.pop,
            orderInfo: i,
            sellerJid: l,
          })),
          (t[1] = n),
          (t[2] = a),
          (t[3] = p.pop),
          (t[4] = i),
          (t[5] = l),
          (t[6] = _))
        : (_ = t[6]);
      var f = _,
        g;
      return (
        t[7] !== m || t[8] !== f || t[9] !== p
          ? ((g = s.jsx(m, { flow: p, children: f })),
            (t[7] = m),
            (t[8] = f),
            (t[9] = p),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    l.default = c;
  },
  98,
);
