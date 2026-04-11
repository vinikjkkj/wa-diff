__d(
  "react-relay/relay-hooks/useEntryPointLoader",
  [
    "react",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/useIsMountedRef",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = e || (e = n("react")),
      s = l.useCallback,
      u = l.useEffect,
      c = l.useRef,
      d = l.useState,
      m = { kind: "NullEntryPointReference" };
    function p(e, t, r) {
      var o,
        a,
        i,
        l,
        p =
          (o =
            r == null || (a = r.TEST_ONLY__initialEntryPointData) == null
              ? void 0
              : a.entryPointReference) != null
            ? o
            : m,
        _ =
          (i =
            r == null || (l = r.TEST_ONLY__initialEntryPointData) == null
              ? void 0
              : l.entryPointParams) != null
            ? i
            : null,
        f = n("react-relay/relay-hooks/useIsMountedRef")(),
        g = c(new Set([p])),
        h = d(p),
        y = h[0],
        C = h[1],
        b = d(_),
        v = b[0],
        S = b[1],
        R = s(
          function () {
            if (f.current) {
              var e = { kind: "NullEntryPointReference" };
              (g.current.add(e), C(e));
            }
          },
          [C, f],
        ),
        L = s(
          function (r) {
            if (f.current) {
              var o = n("react-relay/relay-hooks/loadEntryPoint")(e, t, r);
              (g.current.add(o), C(o), S(r));
            }
          },
          [e, t, C, f],
        ),
        E = c(!1);
      return (
        u(function () {
          return function () {
            E.current = !0;
          };
        }, []),
        u(
          function () {
            if (E.current === !0) {
              ((E.current = !1),
                y.kind !== "NullEntryPointReference" && v != null && L(v));
              return;
            }
            var e = g.current;
            if (f.current)
              for (var t of e) {
                if (t === y) break;
                (e.delete(t),
                  t.kind !== "NullEntryPointReference" && t.dispose());
              }
          },
          [y, v, L, f],
        ),
        u(function () {
          return function () {
            for (var e of g.current)
              e.kind !== "NullEntryPointReference" && e.dispose();
          };
        }, []),
        [y.kind === "NullEntryPointReference" ? null : y, L, R]
      );
    }
    a.exports = p;
  },
  null,
);
