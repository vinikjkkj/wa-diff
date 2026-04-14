__d(
  "WAWebContextualBannerWrapper.react",
  [
    "WAWebContextualBanner.react",
    "WAWebContextualBannerConfig",
    "WAWebVelocityTransitionGroup",
    "react",
    "useVisibility",
    "useWAWebCallbackOnce",
    "useWAWebContextualBanner",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState;
    function m(e) {
      var t = e.bannerListOrderedByPriority,
        n = r("useWAWebContextualBanner")(
          t.map(function (e) {
            return e.id;
          }),
        ),
        a = n[0],
        i = n[1],
        l = n[2],
        u = n[3],
        m = n[4],
        p = c(
          function () {
            return t.find(function (e) {
              var t = e.id;
              return a(t);
            });
          },
          [t, a],
        ),
        _ = d(p),
        f = _[0],
        g = _[1],
        h = r("useWAWebCallbackOnce")(i, [f]),
        y = r("useVisibility")({
          onVisible: function () {
            f && h(f.id);
          },
        }),
        C = y[0],
        b = c(
          function () {
            g(p());
          },
          [p],
        );
      if (f != null) {
        var v = s.jsx(r("WAWebContextualBanner.react"), {
          ref: C,
          canShow: a(f.id),
          config: o("WAWebContextualBannerConfig").getContextualBannerConfig(
            f.id,
          ),
          onClick: function () {
            (l(f.id), f.onClick == null || f.onClick(), b());
          },
          onDismiss: function () {
            (u(f.id), b());
          },
          onReset: function () {
            m(f.id);
          },
        });
        return s.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "butterbar",
          children: v,
        });
      }
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
