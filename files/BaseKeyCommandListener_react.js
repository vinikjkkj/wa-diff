__d(
  "BaseKeyCommandListener.react",
  [
    "CometGlobalKeyCommandWidget",
    "CometKeyCommandUtilsContext",
    "FBLogger",
    "ReactDOM",
    "applyKeyCommand",
    "getActiveCommands",
    "getKeyCommand",
    "react",
    "stylex",
    "useGetComposingState",
    "useGlobalEventListener",
    "useUnsafeRef_DEPRECATED",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useMemo,
      f = d.useRef;
    function g(e, t) {
      var n;
      return function () {
        (window.clearTimeout(n), (n = window.setTimeout(e, t)));
      };
    }
    var h = 100;
    function y(t) {
      var n = t.children,
        a = t.observersEnabled,
        i = t.xstyle,
        l = f(null),
        u = f(null),
        d = f(new Set()),
        y = p(r("CometGlobalKeyCommandWidget").Context),
        C = m(
          function (e) {
            if (!a)
              return {
                getActiveCommands: function () {
                  return (
                    r("vulture")("rCX7UN3JjXiprN8zdYXkAZKwjdY="),
                    r("FBLogger")("comet_ax").mustfix(
                      "Key Command observers are not supported in this context",
                    ),
                    null
                  );
                },
                remove: function () {},
              };
            var t = d.current;
            return (
              t.add(e),
              {
                getActiveCommands: function () {
                  return r("getActiveCommands")(u.current, l.current, y);
                },
                remove: function () {
                  t.delete(e);
                },
              }
            );
          },
          [y, a],
        ),
        b = m(
          function (e) {
            a &&
              d.current.forEach(function (t) {
                return t({ key: e, type: "triggered" });
              });
          },
          [a],
        ),
        v = _(
          function () {
            return g(function () {
              a &&
                d.current.forEach(function (e) {
                  return e({ type: "update" });
                });
            }, h);
          },
          [a],
        ),
        S = m(
          function (e) {
            var t = l.current !== e;
            ((l.current = e), t && v());
          },
          [v],
        ),
        R = m(
          function (e) {
            var t = u.current !== e;
            ((u.current = e), t && v());
          },
          [v],
        ),
        L = (e || (e = r("useUnsafeRef_DEPRECATED")))({
          addObserver: C,
          notifyCommandUpdate: v,
          setActiveLayer: S,
          setActiveWrapper: R,
        }),
        E = m(
          function () {
            var e = u.current !== null;
            ((u.current = null), e && v());
          },
          [v],
        ),
        k = r("useGetComposingState")(),
        I = m(
          function (e) {
            k(e) ||
              o("ReactDOM").flushSync(function () {
                var t = r("applyKeyCommand")(e, u.current, l.current, y);
                if (t) {
                  var n = r("getKeyCommand")(e);
                  b(n);
                }
              });
          },
          [k, y, b],
        );
      return (
        r("useGlobalEventListener")("keydown", I),
        r("useGlobalEventListener")("keyup", I),
        c.jsx(r("CometKeyCommandUtilsContext").Provider, {
          value: L.current,
          children: c.jsx(
            "div",
            babelHelpers.extends({}, (s || (s = r("stylex"))).props(i), {
              onBlurCapture: E,
              children: n,
            }),
          ),
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
