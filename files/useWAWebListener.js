__d(
  "useWAWebListener",
  ["WAHash", "WAWebNoop", "WAWebUIListener", "react", "useWAWebStableCallback"],
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
      var e = m(),
        t = u(function (t, n, r, o) {
          e.current = g(t, n, r, babelHelpers.extends({}, o, { once: !0 }));
        }, []),
        n = u(function () {
          e.current == null || e.current();
        }, []);
      return (
        c(
          function () {
            return n;
          },
          [n],
        ),
        [t, n]
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
