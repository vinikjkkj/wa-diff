__d(
  "useCometEntryPointPrerendererWithQueryTimeout",
  [
    "FBLogger",
    "react",
    "react-compiler-runtime",
    "useCometEntryPointPrerendererWithQueryTimeoutPrivate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e, t, n, a) {
      var i = o("react-compiler-runtime").c(8),
        l = r("useCometEntryPointPrerendererWithQueryTimeoutPrivate")(
          e,
          t,
          n,
          a,
        ),
        s = l[0],
        u = l[1],
        c = u.onHighIntent,
        d = u.onHoverIn,
        m = u.onHoverOut,
        p = u.onPressIn,
        _;
      i[0] !== s
        ? ((_ = function (t, n) {
            var e = s();
            if (e == null) {
              r("FBLogger")("comet_ui")
                .blameToPreviousFrame()
                .mustfix(
                  "Unable to present comet page EntryPoint component, preloadParams not set",
                );
              return;
            }
            var o = function () {
              for (
                var t = arguments.length, r = new Array(t), o = 0;
                o < t;
                o++
              )
                r[o] = arguments[o];
              var a = r;
              n && n.apply(void 0, a);
              var i = e == null ? void 0 : e.dispose;
              i != null && i();
            };
            t(e, o);
          }),
          (i[0] = s),
          (i[1] = _))
        : (_ = i[1]);
      var f = _,
        g;
      return (
        i[2] !== c || i[3] !== d || i[4] !== m || i[5] !== p || i[6] !== f
          ? ((g = [f, d, m, p, c]),
            (i[2] = c),
            (i[3] = d),
            (i[4] = m),
            (i[5] = p),
            (i[6] = f),
            (i[7] = g))
          : (g = i[7]),
        g
      );
    }
    l.default = u;
  },
  98,
);
