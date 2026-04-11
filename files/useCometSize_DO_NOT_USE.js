__d(
  "useCometSize_DO_NOT_USE",
  [
    "CometThrottle",
    "ExecutionEnvironment",
    "FBLogger",
    "HiddenSubtreePassiveContext",
    "react",
    "useResizeObserver",
    "useStable",
    "useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useContext,
      m = c.useEffect,
      p = c.useLayoutEffect,
      _ = c.useRef,
      f = c.useState;
    function g(e) {
      var t = e.setBoxStateStable,
        n = null,
        o = function (r) {
          var e, o;
          (((e = n) == null ? void 0 : e.height) === r.height &&
            ((o = n) == null ? void 0 : o.width) === r.width) ||
            ((n = r), t(r));
        },
        a = function (t) {
          var e = t.getBoundingClientRect(),
            n = e.height,
            r = e.width;
          o({ height: n, width: r });
        },
        i = r("CometThrottle")(
          function (e) {
            var t = e.height,
              n = e.width;
            (t === 0 && n === 0) || o({ height: t, width: n });
          },
          200,
          { leading: !0, trailing: !0 },
        );
      return { measure: a, onResizeThrottled: i };
    }
    function h(t, n) {
      if (
        (t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        !(e || (e = r("ExecutionEnvironment"))).canUseDOM && !t)
      )
        throw r("FBLogger")("comet_ssr")
          .blameToPreviousFile()
          .mustfixThrow(
            "useCometSize is not compatible with Server Rendering. This will break SSR! See https://fburl.com/wiki/xrzohrqb",
          );
      var o = _(null),
        a = f(null),
        i = a[0],
        l = a[1],
        u = d(r("HiddenSubtreePassiveContext")),
        c = r("useStable")(function () {
          return g({ setBoxStateStable: l });
        }),
        h = r("useResizeObserver")(c.onResizeThrottled),
        y = _(h);
      p(
        function () {
          y.current = h;
        },
        [h],
      );
      var C = (s || (s = r("useUnsafeRef_DEPRECATED")))(function (e) {
        (e !== o.current && ((o.current = e), e != null && !n && c.measure(e)),
          y.current(o.current));
      });
      return (
        m(
          function () {
            if (u.getCurrentState().hidden) {
              var e = u.subscribeToChanges(function (t) {
                !t.hidden &&
                  o.current != null &&
                  !n &&
                  (c.measure(o.current), e.remove());
              });
              return function () {
                return e.remove();
              };
            }
          },
          [u, c],
        ),
        m(
          function () {
            return function () {
              c.onResizeThrottled.cancel();
            };
          },
          [c],
        ),
        [C.current, i]
      );
    }
    l.default = h;
  },
  98,
);
