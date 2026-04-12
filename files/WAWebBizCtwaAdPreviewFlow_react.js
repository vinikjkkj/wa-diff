__d(
  "WAWebBizCtwaAdPreviewFlow.react",
  ["$InternalEnum", "WAWebBizCtwaAdPreview.react", "react", "useWAWebFlow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["AdPreview"]);
    function c(e) {
      var t = e.msg,
        n = e.onClose,
        a = o("useWAWebFlow").useFlow(u.AdPreview, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        i = a[0],
        l = a[1];
      return l.step == null || t.ctwaContext == null
        ? null
        : s.jsx(i, {
            flow: l,
            children: s.jsx(r("WAWebBizCtwaAdPreview.react"), {
              automatedGreetingMessage: t,
              ctwaContext: t.ctwaContext,
              onClose: n,
            }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
