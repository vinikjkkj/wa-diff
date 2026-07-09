__d(
  "WAWebRoutePluginSlot",
  ["WAWebNoop", "WAWebNullFunc", "cr:7455", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useContext,
      d = u.useLayoutEffect,
      m = u.useRef,
      p = u.useSyncExternalStore;
    function _() {
      var e = null,
        t = new Set();
      return {
        getSnapshot: function () {
          return e;
        },
        subscribe: function (n) {
          return (
            t.add(n),
            function () {
              t.delete(n);
            }
          );
        },
        applyValue: function (r) {
          if (r !== e) {
            e = r;
            for (var n of t) n();
          }
        },
      };
    }
    var f = function (t) {
      return r("WAWebNoop");
    };
    function g(e) {
      var t,
        n,
        r = c(e);
      return p(
        (t = r == null ? void 0 : r.subscribe) != null ? t : f,
        (n = r == null ? void 0 : r.getSnapshot) != null
          ? n
          : o("WAWebNullFunc").returnNull,
      );
    }
    function h(t, r) {
      var a = o("react-compiler-runtime").c(4),
        i = c(t),
        l = m(null),
        s,
        u;
      (a[0] !== i || a[1] !== r
        ? ((s = function () {
            if (n("cr:7455") != null) {
              var t = l.current;
              (t != null &&
                t !== r &&
                n("cr:7455").DEV(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "useRegisterRoutePluginSlotValue: registered value reference changed between renders for the same slot. The value MUST be a stable reference (module-level export or useCallback) \u2014 see WAWebRoutePluginSlot JSDoc. Unstable references thrash the slot and re-run the layout effect on every render.",
                    ])),
                ),
                (l.current = r));
            }
            return (
              i == null || i.applyValue(r),
              function () {
                i == null || i.applyValue(null);
              }
            );
          }),
          (u = [i, r]),
          (a[0] = i),
          (a[1] = r),
          (a[2] = s),
          (a[3] = u))
        : ((s = a[2]), (u = a[3])),
        d(s, u));
    }
    ((l.WAWebRoutePluginSlot = _),
      (l.useRoutePluginSlotValue = g),
      (l.useRegisterRoutePluginSlotValue = h));
  },
  98,
);
