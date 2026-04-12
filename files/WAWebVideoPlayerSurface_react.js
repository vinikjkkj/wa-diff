__d(
  "WAWebVideoPlayerSurface.react",
  [
    "VideoPlayerHooks",
    "VideoPlayerSurface.react",
    "WAWebCVPErrorCodeMapping",
    "WAWebVideoPlaybackSpeed",
    "react",
    "stylex",
    "useWAWebCometVideoPlayerAudioBridge",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = s || (s = o("react")),
      d = s,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useImperativeHandle,
      f = d.useRef,
      g = 250,
      h = {
        surface: {
          height: "x5yr21d",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function y(t) {
      var n = t.audioBridgeOptions,
        a = t.children,
        i = t.onBufferUpdate,
        l = t.onCanPlay,
        s = t.onEnded,
        d = t.onError,
        y = t.onLoadedData,
        C = t.onLoadedMetadata,
        b = t.onLoop,
        v = t.onPause,
        S = t.onPlay,
        R = t.onPlaying,
        L = t.onStoppedPlaying,
        E = t.onTimeUpdate,
        k = t.onVolumeChange,
        I = t.onWaiting,
        T = t.ref,
        D = t.refOverrides,
        x = t.xstyle,
        $ = (u || (u = o("VideoPlayerHooks"))).useController(),
        P = u.usePlaying(),
        N = f(null),
        M = f(null),
        w = f(null),
        A = f(null),
        F = f(0),
        O = f(null),
        B = f(null),
        W = f(null),
        q = f(0),
        U = f(!1),
        V = f(!1),
        H = f(o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE),
        G = f(null),
        z = f([]),
        j = r("useWAWebStableCallback")(function () {
          S == null || S();
        }),
        K = r("useWAWebStableCallback")(function () {
          R == null || R();
        }),
        Q = r("useWAWebStableCallback")(function () {
          L == null || L();
        }),
        X = r("useWAWebStableCallback")(function () {
          v == null || v();
        }),
        Y = r("useWAWebStableCallback")(function (e) {
          k == null || k(e);
        }),
        J = r("useWAWebStableCallback")(function (e) {
          E == null || E(e);
        }),
        Z = r("useWAWebStableCallback")(function (e) {
          C == null || C(e);
        }),
        ee = r("useWAWebStableCallback")(function () {
          y == null || y();
        }),
        te = r("useWAWebStableCallback")(function () {
          l == null || l();
        }),
        ne = r("useWAWebStableCallback")(function () {
          s == null || s();
        }),
        re = r("useWAWebStableCallback")(function (e, t) {
          d == null || d(e, t);
        }),
        oe = r("useWAWebStableCallback")(function () {
          I == null || I();
        }),
        ae = r("useWAWebStableCallback")(function (e) {
          i == null || i(e);
        }),
        ie = r("useWAWebStableCallback")(function () {
          b == null || b();
        }),
        le = f($);
      p(
        function () {
          var e = le.current !== $;
          e &&
            ((U.current = !1),
            (V.current = !1),
            (N.current = !1),
            (M.current = !0),
            (w.current = null),
            (A.current = null),
            (F.current = 0),
            (O.current = null),
            (B.current = null),
            (W.current = null),
            (G.current = null),
            (z.current = []),
            (le.current = $));
          var t = function () {
            var e,
              t = $.getCurrentState(),
              n = t.paused,
              o = t.playing,
              a = t.stalling,
              i = t.volume,
              l = t.muted,
              s = t.ended,
              u = t.error,
              c = t.domEventsLatestPerfMs,
              d = t.duration,
              m = M.current,
              p = N.current,
              _ = B.current;
            ((M.current = n),
              (N.current = o),
              (B.current = a),
              !n && m === !0 && j(),
              n && m === !1 && X(),
              o &&
                p !== !0 &&
                (O.current === !0 && (ie(), (O.current = !1)), K()),
              !o && p === !0 && Q(),
              a && _ !== !0 && p === !0 && oe(),
              w.current != null &&
                (i !== w.current || l !== A.current) &&
                Y({ volume: i, muted: l }),
              (w.current = i),
              (A.current = l),
              s && O.current !== !0
                ? ((O.current = !0), ne())
                : O.current == null && (O.current = s));
            var f = (e = u == null ? void 0 : u.errorName) != null ? e : null;
            if (f != null && W.current !== f) {
              var g;
              W.current = f;
              var h = r("WAWebCVPErrorCodeMapping")(f),
                y =
                  (g = u == null ? void 0 : u.errorMessageFormat) != null
                    ? g
                    : f;
              re(h, y);
            } else f == null && W.current != null && (W.current = null);
            if (
              (!V.current && d > 0 && ((V.current = !0), te()),
              !U.current && d > 0)
            ) {
              var C,
                b,
                v = $.internal_getVideoPixelsDecodedDimensions(),
                S = (C = v == null ? void 0 : v.width) != null ? C : 0,
                R = (b = v == null ? void 0 : v.height) != null ? b : 0;
              S > 0 &&
                R > 0 &&
                ((U.current = !0),
                Z({
                  duration: d,
                  volume: i,
                  muted: l,
                  videoWidth: S,
                  videoHeight: R,
                }));
            }
            c.loadeddata != null &&
              c.loadeddata !== G.current &&
              ((G.current = c.loadeddata), ee());
            var L = t.bufferedRanges,
              E = z.current;
            (L.length !== E.length ||
              L.some(function (e, t) {
                return (
                  e.startTime !== E[t].startTime || e.endTime !== E[t].endTime
                );
              })) &&
              ((z.current = L),
              ae(
                L.map(function (e) {
                  return [e.startTime, e.endTime];
                }),
              ));
          };
          t();
          var n = $.subscribe(t);
          return function () {
            n.remove();
          };
        },
        [$, j, K, Q, X, oe, Y, ne, re, te, Z, ee, ie, ae],
      );
      var se = f(null),
        ue = r("useWAWebStableCallback")(function () {
          var e = $.getPlayheadPosition();
          if (e !== F.current) {
            var t = Date.now(),
              n = t - q.current;
            if (
              (se.current != null &&
                (window.clearTimeout(se.current.timerId), (se.current = null)),
              n >= g)
            )
              (J(e), (F.current = e), (q.current = t));
            else {
              var r = g - n,
                o = window.setTimeout(function () {
                  var e = $.getPlayheadPosition();
                  (e !== F.current &&
                    (J(e), (F.current = e), (q.current = Date.now())),
                    (se.current = null));
                }, r);
              se.current = { time: e, timerId: o };
            }
          }
        }),
        ce = m(
          function () {
            var e = se.current;
            if (e != null) {
              window.clearTimeout(e.timerId);
              var t = e.time;
              (t !== F.current &&
                (J(t), (F.current = t), (q.current = Date.now())),
                (se.current = null));
            }
          },
          [J],
        ),
        de = f(null);
      return (
        p(
          function () {
            if (!P) {
              (de.current != null &&
                (window.clearInterval(de.current), (de.current = null)),
                ce());
              return;
            }
            return (
              ue(),
              (de.current = window.setInterval(ue, g)),
              function () {
                (de.current != null &&
                  (window.clearInterval(de.current), (de.current = null)),
                  ce());
              }
            );
          },
          [P, ue, ce],
        ),
        r("useWAWebCometVideoPlayerAudioBridge")($, n),
        _(
          T,
          function () {
            return babelHelpers.extends(
              {
                canPlay: function () {},
                end: function () {
                  $.pause("product_initiated");
                },
                getAudioDisabled: function () {
                  return !1;
                },
                getBuffered: function () {
                  return $.getCurrentState().bufferedRanges.map(function (e) {
                    return [e.startTime, e.endTime];
                  });
                },
                getCurrentTime: function () {
                  return $.getPlayheadPosition();
                },
                getDuration: function () {
                  return $.getCurrentState().duration;
                },
                getMuted: function () {
                  return $.getCurrentState().muted;
                },
                getPaused: function () {
                  return $.getCurrentState().paused;
                },
                getPlaybackRate: function () {
                  return H.current;
                },
                getVolume: function () {
                  return $.getCurrentState().volume;
                },
                onError: function () {
                  re();
                },
                onWaiting: function () {
                  oe();
                },
                pause: function () {
                  $.pause("user_initiated");
                },
                pauseAndReset: function () {
                  ($.pause("product_initiated"), $.seek(0));
                },
                play: function () {
                  $.play("user_initiated");
                },
                setCurrentTime: function (t) {
                  ($.seek(t), J(t), (F.current = t), (q.current = Date.now()));
                },
                setDuration: function (t) {},
                setMuted: function (t) {
                  $.setMuted(t, "user_initiated");
                },
                setPlaybackRate: function (t) {
                  ((H.current = t),
                    $.setPlaybackRate == null || $.setPlaybackRate(t));
                },
                setVolume: function (t) {
                  $.setVolume(t);
                },
                underlyingVideo: function () {
                  return null;
                },
              },
              D,
            );
          },
          [$, re, J, oe, D],
        ),
        c.jsx(r("VideoPlayerSurface.react"), {
          children: c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(h.surface, x),
              {
                children:
                  a != null &&
                  c.jsx("div", {
                    className:
                      "x6s0dn4 x78zum5 x13vifvy xtijo5x x1ey2m1c x1o0tod xl56j7k x10l6tqk",
                    children: a,
                  }),
              },
            ),
          ),
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
