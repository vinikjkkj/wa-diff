__d(
  "WAWebFlatListContainer.react",
  [
    "WANullthrows",
    "WAWebPREGatingUtils",
    "WAWebResizeObserver.react",
    "react",
    "useMergeRefs",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "children",
        "flatListControllers",
        "onLayout",
        "onScroll",
        "scrollOffset",
      ],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useLayoutEffect,
      p = d.useRef;
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a.flatListControllers,
        u = a.onLayout,
        d = a.onScroll,
        _ = a.scrollOffset,
        f = babelHelpers.objectWithoutPropertiesLoose(a, s),
        g = a.children,
        h = a.direction,
        y = a.flatListControllers,
        C = a.onLayout,
        b = a.onScroll,
        v = a.scrollOffset,
        S = p(null),
        R = r("useMergeRefs")(n, S),
        L = function () {
          var e = S.current;
          if (e) return h === "horizontal" ? e.scrollLeft : e.scrollTop;
        },
        E = function (t) {
          var e = S.current;
          e && (h === "horizontal" ? (e.scrollLeft = t) : (e.scrollTop = t));
        },
        k = function () {
          var e = r("WANullthrows")(S.current);
          y.forEach(function (t) {
            return t.triggerLayout({
              position: e.getBoundingClientRect(),
              width: e.clientWidth,
              height: e.clientHeight,
            });
          });
        },
        I = function (t) {
          (b && b(t),
            y.forEach(function (e) {
              return e.triggerScroll();
            }));
        },
        T = function (t) {
          var e = r("WANullthrows")(S.current),
            n = babelHelpers.extends({}, t, {
              position: e.getBoundingClientRect(),
            });
          (y.forEach(function (e) {
            return e.triggerLayout(n);
          }),
            C && C(n));
        },
        D = r("useWAWebDebouncedCallback")(T, 50);
      return (
        m(function () {
          return (
            y.forEach(function (e) {
              return e.registerContainer({
                getScrollFromStart: L,
                setScrollFromStart: E,
                onRegisterList: k,
              });
            }),
            v !== void 0 && E(v),
            function () {
              y.forEach(function (e) {
                return e.unregisterContainer();
              });
            }
          );
        }, []),
        c.jsx(
          r("WAWebResizeObserver.react"),
          babelHelpers.extends({}, f, {
            onResize: o("WAWebPREGatingUtils").isPREResizeEnabled() ? D : T,
            onScroll: I,
            ref: R,
            children: g,
          }),
        )
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
