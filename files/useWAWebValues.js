__d(
  "useWAWebValues",
  [
    "WAArraysShallowEqual",
    "WANullthrows",
    "WAWebNoop",
    "WAWebUseValuesUtils",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useRef,
      m = s.useState,
      p = function (t) {
        return r("WAWebNoop");
      };
    function _(e, t, n) {
      var o = f(e, t, n);
      return r("WANullthrows")(o);
    }
    function f(e, t, n) {
      var a,
        i = c(function () {
          return o("WAWebUseValuesUtils").computedForComponent(t);
        }, t),
        l = m(function () {
          return e == null ? null : i(e);
        }),
        s = l[0],
        _ = l[1],
        f = r("useWAWebStableCallback")(function () {
          _(function (t) {
            var n = e == null ? null : i(e);
            return g(t, n) ? t : n;
          });
        }),
        h = d(e),
        y = h.current;
      e !== y && ((h.current = e), f());
      var C = (a = n == null ? void 0 : n.subscribe) != null ? a : p;
      return (
        u(
          function () {
            return C(function () {
              f();
            });
          },
          [C, f],
        ),
        s
      );
    }
    function g(e, t) {
      return e == t
        ? !0
        : e == null || t == null
          ? !1
          : r("WAArraysShallowEqual")(e, t, function (e, t) {
              return !!(
                e === t ||
                (Array.isArray(e) &&
                  Array.isArray(t) &&
                  e.length === 0 &&
                  t.length === 0)
              );
            });
    }
    ((l.useValues = _), (l.useOptionalValues = f));
  },
  98,
);
