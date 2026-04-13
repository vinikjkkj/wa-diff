__d(
  "useWAWebListener",
  [
    "WAHash",
    "WAWebNoop",
    "WAWebUIListener",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useLayoutEffect,
      m = s.useRef;
    function p(e, t, n, o) {
      var a = r("useWAWebStableCallback")(n),
        i = y(t);
      d(
        function () {
          if (n != null) return g(e, t, a, o);
        },
        [e, n == null, i],
      );
    }
    function _(e) {
      var t = e.map(function (e) {
          var t = e.callback;
          return t;
        }),
        n = m(t);
      n.current = t;
      var o = e
        .map(function (e) {
          var t = e.eventOrEvents,
            n = e.source;
          return r("WAHash")(n) + "," + y(t);
        })
        .join("-");
      d(
        function () {
          var t = e.map(function (e, t) {
            var r = e.eventOrEvents,
              o = e.opts,
              a = e.source,
              i = function () {
                for (
                  var e, r, o = arguments.length, a = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  a[i] = arguments[i];
                return (e = (r = n.current)[t]) == null
                  ? void 0
                  : e.call.apply(e, [r].concat(a));
              };
            return g(a, r, i, o);
          });
          return function () {
            return t.forEach(function (e) {
              return e();
            });
          };
        },
        [o],
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(5),
        t = m(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = function (n, r, o, a) {
            t.current = g(n, r, o, babelHelpers.extends({}, a, { once: !0 }));
          }),
          (e[0] = n))
        : (n = e[0]);
      var r = n,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            t.current == null || t.current();
          }),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l,
        s;
      (e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return i;
          }),
          (s = [i]),
          (e[2] = l),
          (e[3] = s))
        : ((l = e[2]), (s = e[3])),
        c(l, s));
      var u;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = [r, i]), (e[4] = u))
          : (u = e[4]),
        u
      );
    }
    function g(e, t, n, a) {
      if (e == null) return r("WAWebNoop");
      var i = h(e, t),
        l = i.map(function (t) {
          return new (o("WAWebUIListener").Listener)(
            e,
            t,
            function () {
              ((a == null ? void 0 : a.once) === !0 && s(),
                n.apply(void 0, arguments));
            },
            a,
          );
        });
      l.forEach(function (e) {
        e.engage();
      });
      var s = function () {
        l.forEach(function (e) {
          e.disengage();
        });
      };
      return s;
    }
    function h(e, t) {
      return Array.isArray(t)
        ? o("WAWebUIListener").isEventsType(e)
          ? [t.join(" ")]
          : t
        : [t];
    }
    function y(e) {
      return Array.isArray(e) ? e.join("\0") : e;
    }
    ((l.useListener = p), (l.useListeners = _), (l.useAddListenerOnce = f));
  },
  98,
);
