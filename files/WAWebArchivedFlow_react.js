__d(
  "WAWebArchivedFlow.react",
  [
    "$InternalEnum",
    "WAWebArchivedDrawer.react",
    "WAWebSettingsModel",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Chats"]);
    function c(e) {
      var t = e.onEnd,
        n = o("useWAWebFlow").useFlow(u.Chats, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: t,
        }),
        a = n[0],
        i = n[1];
      if (i.step == null) return null;
      var l;
      switch (i.step) {
        case u.Chats:
          l = s.jsx(r("WAWebArchivedDrawer.react"), {
            settings: r("WAWebSettingsModel"),
            onClose: function () {
              i.pop();
            },
          });
          break;
      }
      return s.jsx(a, { flow: i, children: l });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
