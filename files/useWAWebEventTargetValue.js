__d(
  "useWAWebEventTargetValue",
  ["WAHash", "react", "useWAWebListener", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e, t, n, a) {
      a === void 0 && (a = []);
      var i;
      e == null
        ? (i = [])
        : Array.isArray(e)
          ? (i = e.filter(Boolean))
          : (i = [e]);
      var l = c(!0),
        s = r("useWAWebStableCallback")(function () {
          return n();
        }),
        m = d(function () {
          return s();
        }),
        p = m[0],
        _ = m[1];
      o("useWAWebListener").useListeners(
        i.map(function (e) {
          return {
            source: e,
            eventOrEvents: t,
            callback: function () {
              _(s());
            },
          };
        }),
      );
      var f = i.map(r("WAHash")).join(" ");
      return (
        u(function () {
          if (l.current) {
            l.current = !1;
            return;
          }
          _(s());
        }, [f, s].concat(a)),
        p
      );
    }
    l.default = m;
  },
  98,
);
