__d(
  "WAWebInternalToolsLoadingScreenSimulator.react",
  [
    "invariant",
    "WAPromiseDelays",
    "WAWebLoadingScreen.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = function (t) {
        switch (t) {
          case "1-stage":
            return [{ type: "delay", value: 1e3 }];
          case "2-stages":
            return [
              { type: "delay", value: 1e3 },
              {
                type: "stage",
                value: o("WAWebLoadingScreen.react").Stage.CONNECTING,
              },
              { type: "delay", value: 2e3 },
              { type: "progress", value: 100 },
            ];
          case "3-stages":
            return [
              { type: "delay", value: 1e3 },
              {
                type: "stage",
                value: o("WAWebLoadingScreen.react").Stage.CONNECTING,
              },
              { type: "delay", value: 2e3 },
              { type: "progress", value: 100 },
              { type: "delay", value: 450 },
              {
                type: "stage",
                value: o("WAWebLoadingScreen.react").Stage.ORGANIZING,
              },
            ];
          case "4-stages":
            return [
              { type: "delay", value: 1e3 },
              {
                type: "stage",
                value: o("WAWebLoadingScreen.react").Stage.CONNECTING,
              },
              { type: "delay", value: 2e3 },
              {
                type: "stage",
                value: o("WAWebLoadingScreen.react").Stage.DOWNLOADING,
              },
              { type: "progress", value: 20 },
              { type: "delay", value: 200 },
              { type: "progress", value: 40 },
              { type: "delay", value: 200 },
              { type: "progress", value: 60 },
              { type: "delay", value: 200 },
              { type: "progress", value: 80 },
              { type: "delay", value: 200 },
              { type: "progress", value: 100 },
              { type: "delay", value: 450 },
              {
                type: "stage",
                value: o("WAWebLoadingScreen.react").Stage.ORGANIZING,
              },
            ];
        }
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.unifiedLoadingScreen,
        a = e.variant,
        i = n === void 0 ? !1 : n,
        l = p(0),
        c = l[0],
        m = l[1],
        f = r("useWAWebUnmountSignal")(),
        C = p(0),
        b = C[0],
        v = C[1],
        S = p(o("WAWebLoadingScreen.react").Stage.INITIAL_LOAD),
        R = S[0],
        L = S[1],
        E;
      t[0] !== a ? ((E = _(a)), (t[0] = a), (t[1] = E)) : (E = t[1]);
      var k = E,
        I,
        T;
      (t[2] !== c || t[3] !== k || t[4] !== f
        ? ((I = function () {
            if (c < k.length) {
              var e = k[c],
                t = e.type,
                n = e.value;
              e: switch (t) {
                case "delay": {
                  (typeof n == "number" || s(0, 56361),
                    o("WAPromiseDelays")
                      .delayMs(n)
                      .then(function () {
                        return !f.aborted && m(y);
                      }));
                  break e;
                }
                case "progress": {
                  (typeof n == "number" || s(0, 56361), v(n), m(h));
                  break e;
                }
                case "stage":
                  (typeof n != "number" || s(0, 56362), L(n), m(g));
              }
            }
          }),
          (T = [c, k, f]),
          (t[2] = c),
          (t[3] = k),
          (t[4] = f),
          (t[5] = I),
          (t[6] = T))
        : ((I = t[5]), (T = t[6])),
        d(I, T));
      var D = i
          ? o("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED
          : o("WAWebLoadingScreen.react").LoadingScreenTheme.MULTI_STAGE,
        x;
      return (
        t[7] !== b || t[8] !== R || t[9] !== D
          ? ((x = u.jsx(o("WAWebLoadingScreen.react").LoadingScreen, {
              progress: b,
              stage: R,
              onLogout: r("WAWebNoop"),
              theme: D,
            })),
            (t[7] = b),
            (t[8] = R),
            (t[9] = D),
            (t[10] = x))
          : (x = t[10]),
        x
      );
    }
    function g(e) {
      return e + 1;
    }
    function h(e) {
      return e + 1;
    }
    function y(e) {
      return e + 1;
    }
    l.default = f;
  },
  98,
);
