__d(
  "WAWebInternalToolsLoadingScreenSimulator.react",
  [
    "invariant",
    "WAPromiseDelays",
    "WAWebLoadingScreen.react",
    "WAWebNoop",
    "react",
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
      var t = e.unifiedLoadingScreen,
        n = t === void 0 ? !1 : t,
        a = e.variant,
        i = p(0),
        l = i[0],
        c = i[1],
        f = r("useWAWebUnmountSignal")(),
        g = p(0),
        h = g[0],
        y = g[1],
        C = p(o("WAWebLoadingScreen.react").Stage.INITIAL_LOAD),
        b = C[0],
        v = C[1],
        S = m(
          function () {
            return _(a);
          },
          [a],
        );
      return (
        d(
          function () {
            if (l < S.length) {
              var e = S[l],
                t = e.type,
                n = e.value;
              switch (t) {
                case "delay":
                  (typeof n == "number" || s(0, 56361),
                    o("WAPromiseDelays")
                      .delayMs(n)
                      .then(function () {
                        return (
                          !f.aborted &&
                          c(function (e) {
                            return e + 1;
                          })
                        );
                      }));
                  break;
                case "progress":
                  (typeof n == "number" || s(0, 56361),
                    y(n),
                    c(function (e) {
                      return e + 1;
                    }));
                  break;
                case "stage":
                  (typeof n != "number" || s(0, 56362),
                    v(n),
                    c(function (e) {
                      return e + 1;
                    }));
                  break;
              }
            }
          },
          [l, S, f],
        ),
        u.jsx(o("WAWebLoadingScreen.react").LoadingScreen, {
          progress: h,
          stage: b,
          onLogout: r("WAWebNoop"),
          theme: n
            ? o("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED
            : o("WAWebLoadingScreen.react").LoadingScreenTheme.MULTI_STAGE,
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
