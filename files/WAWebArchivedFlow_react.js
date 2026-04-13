__d(
  "WAWebArchivedFlow.react",
  [
    "$InternalEnum",
    "WAWebArchivedDrawer.react",
    "WAWebSettingsModel",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Chats"]);
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onEnd,
        a;
      t[0] !== n
        ? ((a = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: n,
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = o("useWAWebFlow").useFlow(u.Chats, a),
        l = i[0],
        c = i[1];
      if (c.step == null) return null;
      var d;
      switch (c.step) {
        case u.Chats: {
          var m;
          (t[2] !== c
            ? ((m = s.jsx(r("WAWebArchivedDrawer.react"), {
                settings: r("WAWebSettingsModel"),
                onClose: function () {
                  c.pop();
                },
              })),
              (t[2] = c),
              (t[3] = m))
            : (m = t[3]),
            (d = m));
        }
      }
      var p;
      return (
        t[4] !== l || t[5] !== d || t[6] !== c
          ? ((p = s.jsx(l, { flow: c, children: d })),
            (t[4] = l),
            (t[5] = d),
            (t[6] = c),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = c;
  },
  98,
);
