__d(
  "useWAWebPersistentCounterAsync",
  ["WALogger", "asyncToGeneratorRuntime", "react", "useWAWebAsync"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(t, a) {
      var i = r("useWAWebAsync")(t, []),
        l = i.error,
        s = i.loading,
        u = i.value,
        _ = p(0),
        f = _[0],
        g = _[1],
        h = m(null);
      d(
        function () {
          !s && u != null && g(u);
        },
        [s, u],
      );
      var y = c(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n;
                ((n = h.current) == null || n.abort(),
                  (h.current = new AbortController()));
                try {
                  yield a(t, h.current.signal);
                } catch (t) {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "useWAWebPersistentCounterAsync: ",
                        "",
                      ])),
                    t,
                  );
                }
                h.current = null;
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          [a],
        ),
        C = c(
          function () {
            g(function (e) {
              var t = e + 1;
              return (y(t), t);
            });
          },
          [y],
        ),
        b = c(
          function () {
            (g(0), y(0));
          },
          [y],
        );
      return s
        ? [{ loading: !0, error: null, count: null }, C, b]
        : l
          ? [{ loading: !1, error: l, count: null }, C, b]
          : [{ loading: !1, error: null, count: f }, C, b];
    }
    l.default = _;
  },
  98,
);
