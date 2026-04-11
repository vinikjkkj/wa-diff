__d(
  "WAWebDebouncedLoadingScreen.react",
  [
    "$InternalEnum",
    "WALogger",
    "WAPromiseDelays",
    "WAWebCmd",
    "WAWebLoadingScreen.react",
    "WAWebOfflineHandler",
    "WAWebSocketModel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = 500,
      h = 1500,
      y = 450,
      C = 800,
      b = 450,
      v = n("$InternalEnum").Mirrored([
        "INITIAL_LOAD",
        "CONNECTING",
        "FAKE_FILL",
        "DOWNLOADING",
        "ORGANIZING",
      ]),
      S = n("$InternalEnum").Mirrored([
        "NOT_STARTED",
        "STARTED",
        "PAST_MIN_TIME",
      ]);
    function R(t) {
      var a = t.initialLoadState,
        i = t.onLogout,
        l = t.onReady,
        u = a.initialHistorySyncComplete,
        d = a.initialLoadReady,
        R = r("useWAWebUnmountSignal")(),
        L = _(!1),
        E = f(
          d
            ? o("WAWebLoadingScreen.react").Stage.CONNECTING
            : o("WAWebLoadingScreen.react").Stage.INITIAL_LOAD,
        ),
        k = E[0],
        I = E[1],
        T = f({
          INITIAL_LOAD: d ? S.PAST_MIN_TIME : S.NOT_STARTED,
          CONNECTING: S.NOT_STARTED,
          FAKE_FILL: S.NOT_STARTED,
          DOWNLOADING: S.NOT_STARTED,
          ORGANIZING: S.NOT_STARTED,
        }),
        D = T[0],
        x = T[1],
        $ = f(0),
        P = $[0],
        N = $[1],
        M = f(null),
        w = M[0],
        A = M[1],
        F = function () {
          var e = o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.getHasMessagesToDownload();
          (w == null && e != null && A(e),
            e === !0 &&
              D.CONNECTING === S.PAST_MIN_TIME &&
              N(
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.getOfflineDeliveryProgress(),
              ));
        };
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "offline_progress_update_from_bridge",
        F,
      );
      var O = m(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                (x(function (e) {
                  var n;
                  return babelHelpers.extends(
                    {},
                    e,
                    ((n = {}), (n[t] = S.STARTED), n),
                  );
                }),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "DebouncedLoadingScreen: ",
                        " - starts minimum display time",
                      ])),
                    t,
                  ),
                  yield o("WAPromiseDelays").delayMs(n),
                  !R.aborted &&
                    (x(function (e) {
                      var n;
                      return babelHelpers.extends(
                        {},
                        e,
                        ((n = {}), (n[t] = S.PAST_MIN_TIME), n),
                      );
                    }),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "DebouncedLoadingScreen: ",
                          " - ends minimum display time",
                        ])),
                      t,
                    )));
              },
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
          [R],
        ),
        B = D.CONNECTING,
        W = D.DOWNLOADING,
        q = D.FAKE_FILL,
        U = D.INITIAL_LOAD,
        V = D.ORGANIZING;
      p(
        function () {
          if (V === S.PAST_MIN_TIME) L.current || (l(), (L.current = !0));
          else if (W === S.PAST_MIN_TIME && P >= 100 && V === S.NOT_STARTED)
            o("WAPromiseDelays")
              .delayMs(b)
              .finally(function () {
                R.aborted ||
                  (I(o("WAWebLoadingScreen.react").Stage.ORGANIZING),
                  O(v.ORGANIZING, C));
              });
          else if (
            B === S.PAST_MIN_TIME &&
            w != null &&
            W === S.NOT_STARTED &&
            q === S.NOT_STARTED
          ) {
            var e = o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.getFinishedDownloading();
            w && !e
              ? (I(o("WAWebLoadingScreen.react").Stage.DOWNLOADING),
                N(
                  o(
                    "WAWebOfflineHandler",
                  ).OfflineMessageHandler.getOfflineDeliveryProgress(),
                ),
                O(v.DOWNLOADING, y))
              : (N(100),
                O(v.FAKE_FILL, b).then(function () {
                  R.aborted ||
                    (o("WAWebSocketModel").Socket.hasSynced
                      ? L.current || (l(), (L.current = !0))
                      : (I(o("WAWebLoadingScreen.react").Stage.ORGANIZING),
                        O(v.ORGANIZING, C)));
                }));
          } else
            d && U === S.PAST_MIN_TIME && B === S.NOT_STARTED
              ? (I(o("WAWebLoadingScreen.react").Stage.CONNECTING),
                O(v.CONNECTING, h))
              : U === S.NOT_STARTED && O(v.INITIAL_LOAD, g);
        },
        [P, l, w, O, R, d, B, W, V, q, U],
      );
      var H = o("WAWebLoadingScreen.react").LoadingScreenTheme.MULTI_STAGE;
      return (
        d &&
          (u !== !0
            ? (H = o("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED)
            : w === !0
              ? (H = o("WAWebLoadingScreen.react").LoadingScreenTheme
                  .UNIFIED_WITH_PROGRESS)
              : (H = o("WAWebLoadingScreen.react").LoadingScreenTheme.LOGO)),
        c.jsx(o("WAWebLoadingScreen.react").LoadingScreen, {
          stage: k,
          progress: P,
          onLogout: i,
          theme: H,
        })
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  98,
);
