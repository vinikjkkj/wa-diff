__d(
  "CoreVideoPlayerAudioClient.react",
  [
    "CometAudioManagerContexts",
    "CometAudioManagerHooks",
    "CometThrottle",
    "VideoPlayerHooks",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "createVideoStateHook",
    "makeAudioSymbol",
    "react",
    "react-compiler-runtime",
    "usePrevious",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useContext,
      d = u.useEffect,
      m = u.useId,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = o("createVideoStateHook").createVideoStateHook(),
      h = g.stateHook,
      y = 0.01;
    function C() {
      var e = o("react-compiler-runtime").c(5),
        t = (s || (s = o("VideoPlayerHooks"))).useController(),
        n;
      e[0] !== t
        ? ((n = function () {
            return t.getCurrentState().volume;
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var r = f(n),
        a = r[0],
        i = r[1],
        l,
        u;
      return (
        e[2] !== t
          ? ((l = function () {
              var e = t.subscribe(function () {
                var e = t.getCurrentState().volume;
                i(function (t) {
                  return e === 0 || e === 1 || Math.abs(t - e) > y ? e : t;
                });
              });
              return (
                i(t.getCurrentState().volume),
                function () {
                  e.remove();
                }
              );
            }),
            (u = [t]),
            (e[2] = t),
            (e[3] = l),
            (e[4] = u))
          : ((l = e[3]), (u = e[4])),
        d(l, u),
        a
      );
    }
    function b() {
      "use no memo";
      var e = h(!1),
        t = e[0],
        n = e[1],
        a = m(),
        i = (s || (s = o("VideoPlayerHooks"))).useInstanceKey(),
        l = p(
          function () {
            return r("makeAudioSymbol")(a, i);
          },
          [a, i],
        ),
        u = o("CometAudioManagerHooks").useAudioApi(),
        g = _(u);
      d(
        function () {
          g.current = u;
        },
        [u],
      );
      var y = s.useController(),
        b = s.useLastPlayReason(),
        v = s.useLastMuteReason(),
        S = s.useMuted(),
        R = C(),
        L = r("usePrevious")(R),
        E = s.usePaused(),
        k = c(o("CometAudioManagerContexts").CometAudioLocalScopeContext),
        I = c(o("CometAudioManagerContexts").CometAudioGroupContext),
        T = o(
          "VideoPlayerPortalingPlaceInfoProvider.react",
        ).useVideoPlayerPortalingPlaceInfo(),
        D = s.useVolumeSetting(),
        x = p(
          function () {
            return (
              (I == null ? void 0 : I.groupID) ||
              o("CometAudioManagerContexts").makeAudioGroupID()
            );
          },
          [I == null ? void 0 : I.groupID],
        ),
        $ = f(!0),
        P = $[0],
        N = $[1],
        M = _(!0),
        w = _(null),
        A = f(function () {
          return r("CometThrottle")(
            function (e) {
              g.current && g.current.update(e);
            },
            50,
            { leading: !0, trailing: !0 },
          );
        }),
        F = A[0],
        O = p(
          function () {
            return {
              audioLocalScope: k,
              controller: y,
              groupID: x,
              instanceKey: i,
              lastMuteReason: v,
              lastPlayReason: b,
              muted: S,
              paused: E,
              previousVolume: L,
              symbol: l,
              videoPlayerPortalingPlaceInfo: T,
              volume: R,
            };
          },
          [k, y, x, i, v, b, S, E, L, l, T, R],
        );
      d(
        function () {
          if (D != null && !t) {
            var e = w.current !== D;
            (M.current || e) &&
              ((M.current = !1), (w.current = D), y.setVolume(D), n(!0));
          }
        },
        [y, t, n, D],
      );
      var B = p(
          function () {
            return I || { allowSound: P, groupID: x, setAllowSound: N };
          },
          [I, P, x, N],
        ),
        W = _(B),
        q = _(!1);
      (d(
        function () {
          if (u && !q.current) {
            q.current = !0;
            try {
              u.register(O, W.current);
            } finally {
              q.current = !1;
            }
          }
          return function () {
            u && u.unregister(l, x);
          };
        },
        [u, O, x, l],
      ),
        d(
          function () {
            u && F(O);
          },
          [u, O, F],
        ),
        d(
          function () {
            return function () {
              F && F.cancel && F.cancel();
            };
          },
          [F],
        ));
      var U = _(!1),
        V = _(null);
      return (
        d(
          function () {
            var e = V.current !== P;
            if (!P && g.current && !U.current && e) {
              U.current = !0;
              try {
                (y.setMuted(!0, "audio_manager_initiated"), (V.current = P));
              } finally {
                U.current = !1;
              }
            }
          },
          [P, y],
        ),
        null
      );
    }
    l.default = b;
  },
  98,
);
