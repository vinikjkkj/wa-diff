__d(
  "WAWebBizOrderStatusUpdateFlow.react",
  [
    "$InternalEnum",
    "WAWebOrderStatusUpdateDrawer.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Updatestatus"]);
    function c(e) {
      var t = e.chat,
        n = e.entryPoint,
        a = e.orderInfo,
        i = e.sellerJid,
        l = o("useWAWebFlow").useFlow(u.Updatestatus, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        c = l[0],
        d = l[1],
        m = s.jsx(r("WAWebOrderStatusUpdateDrawer.react"), {
          entryPoint: n,
          chat: t,
          onBack: d.pop,
          orderInfo: a,
          sellerJid: i,
        });
      return s.jsx(c, { flow: d, children: m });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
