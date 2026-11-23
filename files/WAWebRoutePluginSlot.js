__d(
  "WAWebRoutePluginSlot",
  ["WAWebNoop", "WAWebNullFunc", "cr:17673", "react"],
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
    function f(e) {
      return r("WAWebNoop");
    }
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
      var o = c(t),
        a = m(null);
      d(
        function () {
          if (n("cr:17673") != null) {
            var t = a.current;
            (t != null &&
              t !== r &&
              n("cr:17673").DEV(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "useRegisterRoutePluginSlotValue: registered value reference changed between renders for the same slot. The value MUST be a stable reference (module-level export or useCallback) \u2014 see WAWebRoutePluginSlot JSDoc. Unstable references thrash the slot and re-run the layout effect on every render.",
                  ])),
              ),
              (a.current = r));
          }
          return (
            o == null || o.applyValue(r),
            function () {
              o == null || o.applyValue(null);
            }
          );
        },
        [o, r],
      );
    }
    ((l.WAWebRoutePluginSlot = _),
      (l.useRoutePluginSlotValue = g),
      (l.useRegisterRoutePluginSlotValue = h));
  },
  98,
);
