__d(
  "ZenonUsersHooks",
  ["ZenonUsers", "immutable", "promiseDone", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useDebugValue,
      c = s.useEffect,
      d = s.useLayoutEffect,
      m = s.useRef,
      p = s.useState;
    function _(e) {
      var t = m(e),
        n = p(r("immutable").Map()),
        a = n[0],
        i = n[1];
      return (
        c(function () {
          return function () {
            t.current = null;
          };
        }, []),
        d(
          function () {
            t.current = e;
            var n = o("ZenonUsers").getMultiEager(e),
              l = n[0],
              s = n[1];
            (l.equals(a) === !1 && i(l),
              s &&
                r("promiseDone")(s, function (e) {
                  var n = t.current;
                  n &&
                    i(function (t) {
                      return t.withMutations(function (t) {
                        n.forEach(function (n) {
                          var r = e.get(n);
                          r && t.set(n, r);
                        });
                      });
                    });
                }));
          },
          [e, a],
        ),
        u(a),
        a
      );
    }
    function f(e, t) {
      return _(e);
    }
    function g(e) {
      var t = m(e),
        n = p(function () {
          return o("ZenonUsers").getNow(e);
        }),
        a = n[0],
        i = n[1];
      return (
        c(
          function () {
            t.current = e;
          },
          [e],
        ),
        c(function () {
          return function () {
            t.current = null;
          };
        }, []),
        c(
          function () {
            var n = o("ZenonUsers").getNow(e);
            if (n !== a) {
              i(n);
              return;
            }
            r("promiseDone")(o("ZenonUsers").get(e), function (n) {
              t.current === e && i(n);
            });
          },
          [e, a],
        ),
        u(a),
        a
      );
    }
    ((l.useZenonUsers = _),
      (l.useZenonUsersFromThread = f),
      (l.useZenonUser = g));
  },
  98,
);
