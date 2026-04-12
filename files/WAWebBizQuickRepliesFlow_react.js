__d(
  "WAWebBizQuickRepliesFlow.react",
  [
    "$InternalEnum",
    "WAWebBizQuickRepliesDrawer.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = n("$InternalEnum").Mirrored(["QuickRepliesList"]);
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.isInitialStep,
        l = i === void 0 ? !1 : i,
        s = o("useWAWebFlow").useFlow(c.QuickRepliesList, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        d = s[0],
        m = s[1];
      if (m.step == null) return null;
      var p;
      switch (m.step) {
        case c.QuickRepliesList:
          p = u.jsx(r("WAWebBizQuickRepliesDrawer.react"), {
            ref: n,
            onBack: function () {
              return m.pop();
            },
            isInitialStep: l,
          });
      }
      return u.jsx(d, { flow: m, children: p });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
