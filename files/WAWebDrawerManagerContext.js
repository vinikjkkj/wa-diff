__d(
  "WAWebDrawerManagerContext",
  [
    "WALogger",
    "WAWebDrawerManagerGlobalContext",
    "err",
    "react",
    "useWAWebDrawerManagerEvents",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useCallback,
      p = c.useContext,
      _ = c.useEffect,
      f = d(null);
    function g(e) {
      var t = e.children,
        n = e.onDrawerStateChange,
        r = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("left", n);
      return (
        _(
          function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "left",
                r,
              ),
              function () {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                  "left",
                  null,
                );
              }
            );
          },
          [r],
        ),
        u.jsx(f.Provider, { value: r, children: t })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = d(null);
    function y(e) {
      var t = e.children,
        n = e.onDrawerStateChange,
        r = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("right", n);
      return (
        _(
          function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "right",
                r,
              ),
              function () {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                  "right",
                  null,
                );
              }
            );
          },
          [r],
        ),
        u.jsx(h.Provider, { value: r, children: t })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = d(null);
    function b(e) {
      var t = e.children,
        n = e.onDrawerStateChange,
        r = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("mid", n);
      return (
        _(
          function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "mid",
                r,
              ),
              function () {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                  "mid",
                  null,
                );
              }
            );
          },
          [r],
        ),
        u.jsx(C.Provider, { value: r, children: t })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = d(null);
    function S(e) {
      var t = e.children,
        n = e.onDrawerStateChange,
        r = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents(
          "fullscreen",
          n,
        );
      return (
        _(
          function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "fullscreen",
                r,
              ),
              function () {
                o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                  "fullscreen",
                  null,
                );
              }
            );
          },
          [r],
        ),
        u.jsx(v.Provider, { value: r, children: t })
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.children,
        n = e.onDrawerStateChange,
        r = m(
          function (e) {
            n == null || n("left", e);
          },
          [n],
        ),
        o = m(
          function (e) {
            n == null || n("right", e);
          },
          [n],
        ),
        a = m(
          function (e) {
            n == null || n("mid", e);
          },
          [n],
        ),
        i = m(
          function (e) {
            n == null || n("fullscreen", e);
          },
          [n],
        );
      return u.jsx(g, {
        onDrawerStateChange: r,
        children: u.jsx(y, {
          onDrawerStateChange: o,
          children: u.jsx(b, {
            onDrawerStateChange: a,
            children: u.jsx(S, { onDrawerStateChange: i, children: t }),
          }),
        }),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.children,
        n = o("WAWebDrawerManagerGlobalContext").useGlobalDrawerManagers(),
        r = n.fullscreen,
        a = n.left,
        i = n.mid,
        l = n.right;
      return u.jsx(f.Provider, {
        value: a,
        children: u.jsx(h.Provider, {
          value: l,
          children: u.jsx(C.Provider, {
            value: i,
            children: u.jsx(v.Provider, { value: r, children: t }),
          }),
        }),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return p(C);
    }
    function k(t) {
      var n =
          t === "left"
            ? f
            : t === "right"
              ? h
              : t === "mid"
                ? C
                : t === "fullscreen"
                  ? v
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })(),
        a = p(n);
      if (a == null) {
        var i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(t);
        if (i != null)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[useDrawerManagerContext] ",
                  " ctx unavailable, using global",
                ])),
              t,
            ),
            i
          );
        throw r("err")(
          "useDrawerManagerContext: " +
            t +
            " drawer manager context is not available. Make sure the component is wrapped with the appropriate DrawerManagerContextProvider.",
        );
      }
      return a;
    }
    ((l.LeftDrawerManagerContextProvider = g),
      (l.DrawerManagerContextProvider = R),
      (l.DrawerManagerGlobalBridgeProvider = L),
      (l.useMiddleDrawerManagerContext = E),
      (l.useDrawerManagerContext = k));
  },
  98,
);
