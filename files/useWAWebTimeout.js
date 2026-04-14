__d(
  "useWAWebTimeout",
  ["WATimeUtils", "WAWebAlarm", "react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e, t, n) {
      t === void 0 && (t = 0);
      var r = n != null ? n : {},
        o = r.immediate,
        a = o === void 0 ? !1 : o,
        i = p(e),
        l = i[0],
        s = i[1],
        d = u(
          function () {
            return l(t);
          },
          [l, t],
        );
      return (
        c(
          function () {
            a && d();
          },
          [a, d],
        ),
        [d, s]
      );
    }
    function p(e) {
      var t = r("useWAWebStableCallback")(e),
        n = d(),
        o = u(function () {
          n.current && self.clearTimeout(n.current);
        }, []),
        a = u(
          function (e) {
            (o(), (n.current = self.setTimeout(t, e)));
          },
          [o, t],
        );
      return (
        c(
          function () {
            return o;
          },
          [o],
        ),
        [a, o]
      );
    }
    function _(e, t, n) {
      var r = n != null ? n : {},
        o = r.immediate,
        a = o === void 0 ? !1 : o,
        i = r.isGlobal,
        l = i === void 0 ? !1 : i,
        s = f(e),
        d = s[0],
        m = s[1],
        p = u(
          function () {
            return d(t, l);
          },
          [d, t, l],
        );
      return (
        c(
          function () {
            a && p();
          },
          [a, p],
        ),
        [p, m]
      );
    }
    function f(e) {
      var t = r("useWAWebStableCallback")(e),
        n = d(),
        a = u(function () {
          n.current != null && r("WAWebAlarm").clearTimeout(n.current);
        }, []),
        i = u(
          function (e, a) {
            a
              ? (n.current = r("WAWebAlarm").setGlobalTimeout(
                  t,
                  o("WATimeUtils").castUnixTimeToMillisTime(e),
                  n.current,
                ))
              : (n.current = r("WAWebAlarm").setLocalTimeout(
                  t,
                  o("WATimeUtils").castUnixTimeToMillisTime(e),
                  n.current,
                ));
          },
          [t],
        );
      return (
        c(
          function () {
            return a;
          },
          [a],
        ),
        [i, a]
      );
    }
    ((l.useTimeout = m), (l.useManualTimeout = p), (l.useAlarm = _));
  },
  98,
);
