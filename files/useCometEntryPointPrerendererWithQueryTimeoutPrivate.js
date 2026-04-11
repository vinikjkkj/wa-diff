__d(
  "useCometEntryPointPrerendererWithQueryTimeoutPrivate",
  [
    "CometRelay",
    "clearTimeout",
    "react",
    "requireDeferred",
    "setTimeout",
    "stableStringify",
    "useCometPrerenderer",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = r("requireDeferred")("CometRelayEF").__setRef(
        "useCometEntryPointPrerendererWithQueryTimeoutPrivate",
      ),
      p = 3e4;
    function _(e, t, n, a) {
      var i = d(null),
        l = r("stableStringify")(t),
        s = d(null),
        _ = u(function () {
          s.current != null &&
            (r("clearTimeout")(s.current), (s.current = null));
        }, []),
        f = u(
          function () {
            var e;
            _();
            var t =
              (e = i.current) == null || (e = e.preloadedEntryPoint) == null
                ? void 0
                : e.dispose;
            (t && t(), (i.current = null));
          },
          [_],
        ),
        g = u(
          function () {
            s.current = r("setTimeout")(function () {
              f();
            }, p);
          },
          [f],
        );
      c(
        function () {
          return f;
        },
        [f],
      );
      var h = r("useCometRelayEntrypointContextualEnvironmentProvider")(
          a == null ? void 0 : a.overrideRelayEnv,
        ),
        y = u(
          function () {
            var n;
            if ((_(), t != null)) {
              if (
                i.current == null ||
                i.current.entryPoint !== e ||
                i.current.preloadParamsHash !== l
              ) {
                (f(),
                  (i.current = {
                    entryPoint: e,
                    preloadedEntryPoint: o("CometRelay").loadEntryPoint(
                      h,
                      e,
                      t,
                    ),
                    preloadParamsHash: l,
                  }));
                var r = m.getModuleIfRequireable();
                r && e && r.fetchPredictedResources(e, t);
              }
              return (n = i.current) == null ? void 0 : n.preloadedEntryPoint;
            }
          },
          [_, e, f, h, l],
        ),
        C = u(
          function () {
            var n = m.getModuleIfRequireable();
            (t && n && n.fetchPredictions(e, t),
              e.root.preload(),
              a != null &&
                a.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
                y());
          },
          [
            e,
            a == null ? void 0 : a.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            t,
            y,
          ],
        ),
        b = r("useCometPrerenderer")(n, C, y, g),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[3],
        E = u(
          function () {
            var e = y();
            return (e != null && (i.current = null), e);
          },
          [y],
        );
      return [
        E,
        { onHighIntent: L, onHoverIn: v, onHoverOut: S, onPressIn: R },
      ];
    }
    l.default = _;
  },
  98,
);
