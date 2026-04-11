__d(
  "WAWebBizQuickRepliesFlow.react",
  [
    "$InternalEnum",
    "WAWebBizQuickRepliesDrawer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = n("$InternalEnum").Mirrored(["QuickRepliesList"]);
    function d(t) {
      var n = o("react-compiler-runtime").c(14),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.isInitialStep,
        d = s === void 0 ? !1 : s,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (n[3] = m))
        : (m = n[3]);
      var p = o("useWAWebFlow").useFlow(c.QuickRepliesList, m),
        _ = p[0],
        f = p[1];
      if (f.step == null) return null;
      var g;
      switch (f.step) {
        case c.QuickRepliesList: {
          var h;
          n[4] !== f
            ? ((h = function () {
                return f.pop();
              }),
              (n[4] = f),
              (n[5] = h))
            : (h = n[5]);
          var y;
          (n[6] !== d || n[7] !== i || n[8] !== h
            ? ((y = u.jsx(r("WAWebBizQuickRepliesDrawer.react"), {
                ref: i,
                onBack: h,
                isInitialStep: d,
              })),
              (n[6] = d),
              (n[7] = i),
              (n[8] = h),
              (n[9] = y))
            : (y = n[9]),
            (g = y));
        }
      }
      var C;
      return (
        n[10] !== _ || n[11] !== g || n[12] !== f
          ? ((C = u.jsx(_, { flow: f, children: g })),
            (n[10] = _),
            (n[11] = g),
            (n[12] = f),
            (n[13] = C))
          : (C = n[13]),
        C
      );
    }
    l.default = d;
  },
  98,
);
