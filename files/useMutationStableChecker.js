__d(
  "useMutationStableChecker",
  ["react", "useMutationObserver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p(e, t) {
      var n = [];
      return (
        e.forEach(function (e) {
          e instanceof HTMLElement &&
            (e.matches(t) && n.push(e),
            n.push.apply(n, Array.from(e.querySelectorAll(t))));
        }),
        n
      );
    }
    function _(e, t, n, r) {
      r === void 0 && (r = !1);
      var o = p(t, n);
      return o.length === 0
        ? e
        : r
          ? new Set(
              [].concat(
                Array.from(e).filter(function (e) {
                  return !o.includes(e);
                }),
              ),
            )
          : new Set([].concat(Array.from(e), o));
    }
    var f = { childList: !0, subtree: !0 };
    function g(e, t, n) {
      var o = m(!0),
        a = o[0],
        i = o[1],
        l = d(),
        s = d(new Set()),
        p = r("useMutationObserver")(function (t) {
          (t.forEach(function (e) {
            if (e.type === "childList") {
              var t = e.addedNodes,
                r = e.removedNodes;
              n != null && (s.current = _(_(s.current, t, n, !1), r, n, !0));
            }
          }),
            g(e));
        }, f),
        g = u(
          function (e) {
            (l.current != null && window.clearTimeout(l.current),
              (l.current = window.setTimeout(function () {
                s.current.size > 0 ? g(e) : (i(!0), p(null));
              }, e)));
          },
          [p],
        );
      return (
        c(
          function () {
            return (
              e > 0
                ? (p(t.current != null ? t.current : null), i(!1))
                : p(null),
              function () {
                (l.current != null && window.clearTimeout(l.current), p(null));
              }
            );
          },
          [e, p, t],
        ),
        a
      );
    }
    l.default = g;
  },
  98,
);
