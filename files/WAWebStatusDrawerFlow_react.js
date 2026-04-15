__d(
  "WAWebStatusDrawerFlow.react",
  [
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebPrivacySettingsStatusPostDrawer.react",
    "WAWebStatusDrawer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "StatusDrawer",
        "StatusPrivacySettingDrawer",
      ]);
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.onBack,
        a;
      t[0] !== n
        ? ((a = function () {
            n != null
              ? n()
              : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = function () {
          _.pop();
        },
        c;
      t[2] !== i
        ? ((c = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: i,
          }),
          (t[2] = i),
          (t[3] = c))
        : (c = t[3]);
      var d = o("useWAWebFlow").useFlow(u.StatusDrawer, c),
        m = d[0],
        p = d[1],
        _ = p;
      if (_.step == null) return null;
      var f;
      t[4] !== i || t[5] !== _ || t[6] !== l
        ? ((f =
            _.step === u.StatusDrawer
              ? s.jsx(r("WAWebStatusDrawer.react"), {
                  onBack: i,
                  onOpenStatusPrivacySettingDrawer: function () {
                    _.push(u.StatusPrivacySettingDrawer);
                  },
                })
              : _.step === u.StatusPrivacySettingDrawer
                ? s.jsx(r("WAWebPrivacySettingsStatusPostDrawer.react"), {
                    onClose: l,
                  })
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        _.step,
                    );
                  })()),
          (t[4] = i),
          (t[5] = _),
          (t[6] = l),
          (t[7] = f))
        : (f = t[7]);
      var g = f,
        h;
      return (
        t[8] !== m || t[9] !== g || t[10] !== _
          ? ((h = s.jsx(m, { flow: _, children: g })),
            (t[8] = m),
            (t[9] = g),
            (t[10] = _),
            (t[11] = h))
          : (h = t[11]),
        h
      );
    }
    l.default = c;
  },
  98,
);
