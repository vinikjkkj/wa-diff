__d(
  "WAWebVideoPlayerSurface.react",
  [
    "VideoPlayerHooks",
    "VideoPlayerSurface.react",
    "WAWebCVPErrorCodeMapping",
    "WAWebVideoPlaybackSpeed",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(69),
        a = t.audioBridgeOptions,
        i = t.children,
        l = t.onBufferUpdate,
        s = t.onCanPlay,
        d = t.onEnded,
        m = t.onError,
        y = t.onLoadedData,
        E = t.onLoadedMetadata,
        k = t.onLoop,
        I = t.onPause,
        T = t.onPlay,
        D = t.onPlaying,
        x = t.onStoppedPlaying,
        $ = t.onTimeUpdate,
        P = t.onVolumeChange,
        N = t.onWaiting,
        M = t.ref,
        w = t.refOverrides,
        A = t.xstyle,
        F = (u || (u = o("VideoPlayerHooks"))).useController(),
        O = u.usePlaying(),
        B = f(null),
        W = f(null),
        q = f(null),
        U = f(null),
        V = f(0),
        H = f(null),
        G = f(null),
        z = f(null),
        j = f(0),
        K = f(!1),
        Q = f(!1),
        X = f(o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE),
        Y = f(null),
        J;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = []), (n[0] = J))
        : (J = n[0]);
      var Z = f(J),
        ee;
      n[1] !== T
        ? ((ee = function () {
            T == null || T();
          }),
          (n[1] = T),
          (n[2] = ee))
        : (ee = n[2]);
      var te = r("useWAWebStableCallback")(ee),
        ne;
      n[3] !== D
        ? ((ne = function () {
            D == null || D();
          }),
          (n[3] = D),
          (n[4] = ne))
        : (ne = n[4]);
      var re = r("useWAWebStableCallback")(ne),
        oe;
      n[5] !== x
        ? ((oe = function () {
            x == null || x();
          }),
          (n[5] = x),
          (n[6] = oe))
        : (oe = n[6]);
      var ae = r("useWAWebStableCallback")(oe),
        ie;
      n[7] !== I
        ? ((ie = function () {
            I == null || I();
          }),
          (n[7] = I),
          (n[8] = ie))
        : (ie = n[8]);
      var le = r("useWAWebStableCallback")(ie),
        se;
      n[9] !== P
        ? ((se = function (t) {
            P == null || P(t);
          }),
          (n[9] = P),
          (n[10] = se))
        : (se = n[10]);
      var ue = r("useWAWebStableCallback")(se),
        ce;
      n[11] !== $
        ? ((ce = function (t) {
            $ == null || $(t);
          }),
          (n[11] = $),
          (n[12] = ce))
        : (ce = n[12]);
      var de = r("useWAWebStableCallback")(ce),
        me;
      n[13] !== E
        ? ((me = function (t) {
            E == null || E(t);
          }),
          (n[13] = E),
          (n[14] = me))
        : (me = n[14]);
      var pe = r("useWAWebStableCallback")(me),
        _e;
      n[15] !== y
        ? ((_e = function () {
            y == null || y();
          }),
          (n[15] = y),
          (n[16] = _e))
        : (_e = n[16]);
      var fe = r("useWAWebStableCallback")(_e),
        ge;
      n[17] !== s
        ? ((ge = function () {
            s == null || s();
          }),
          (n[17] = s),
          (n[18] = ge))
        : (ge = n[18]);
      var he = r("useWAWebStableCallback")(ge),
        ye;
      n[19] !== d
        ? ((ye = function () {
            d == null || d();
          }),
          (n[19] = d),
          (n[20] = ye))
        : (ye = n[20]);
      var Ce = r("useWAWebStableCallback")(ye),
        be;
      n[21] !== m
        ? ((be = function (t, n) {
            m == null || m(t, n);
          }),
          (n[21] = m),
          (n[22] = be))
        : (be = n[22]);
      var ve = r("useWAWebStableCallback")(be),
        Se;
      n[23] !== N
        ? ((Se = function () {
            N == null || N();
          }),
          (n[23] = N),
          (n[24] = Se))
        : (Se = n[24]);
      var Re = r("useWAWebStableCallback")(Se),
        Le;
      n[25] !== l
        ? ((Le = function (t) {
            l == null || l(t);
          }),
          (n[25] = l),
          (n[26] = Le))
        : (Le = n[26]);
      var Ee = r("useWAWebStableCallback")(Le),
        ke;
      n[27] !== k
        ? ((ke = function () {
            k == null || k();
          }),
          (n[27] = k),
          (n[28] = ke))
        : (ke = n[28]);
      var Ie = r("useWAWebStableCallback")(ke),
        Te = f(F),
        De,
        xe;
      (n[29] !== F ||
      n[30] !== Ee ||
      n[31] !== he ||
      n[32] !== Ce ||
      n[33] !== ve ||
      n[34] !== fe ||
      n[35] !== pe ||
      n[36] !== Ie ||
      n[37] !== le ||
      n[38] !== te ||
      n[39] !== re ||
      n[40] !== ae ||
      n[41] !== ue ||
      n[42] !== Re
        ? ((De = function () {
            var e = Te.current !== F;
            e &&
              ((K.current = !1),
              (Q.current = !1),
              (B.current = !1),
              (W.current = !0),
              (q.current = null),
              (U.current = null),
              (V.current = 0),
              (H.current = null),
              (G.current = null),
              (z.current = null),
              (Y.current = null),
              (Z.current = []),
              (Te.current = F));
            var t = function () {
              var e,
                t = F.getCurrentState(),
                n = t.paused,
                o = t.playing,
                a = t.stalling,
                i = t.volume,
                l = t.muted,
                s = t.ended,
                u = t.error,
                c = t.domEventsLatestPerfMs,
                d = t.duration,
                m = W.current,
                p = B.current,
                _ = G.current;
              ((W.current = n),
                (B.current = o),
                (G.current = a),
                !n && m === !0 && te(),
                n && m === !1 && le(),
                o &&
                  p !== !0 &&
                  (H.current === !0 && (Ie(), (H.current = !1)), re()),
                !o && p === !0 && ae(),
                a && _ !== !0 && p === !0 && Re(),
                q.current != null &&
                  (i !== q.current || l !== U.current) &&
                  ue({ volume: i, muted: l }),
                (q.current = i),
                (U.current = l),
                s && H.current !== !0
                  ? ((H.current = !0), Ce())
                  : H.current == null && (H.current = s));
              var f = (e = u == null ? void 0 : u.errorName) != null ? e : null;
              if (f != null && z.current !== f) {
                var g;
                z.current = f;
                var h = r("WAWebCVPErrorCodeMapping")(f),
                  y =
                    (g = u == null ? void 0 : u.errorMessageFormat) != null
                      ? g
                      : f;
                ve(h, y);
              } else f == null && z.current != null && (z.current = null);
              if (
                (!Q.current && d > 0 && ((Q.current = !0), he()),
                !K.current && d > 0)
              ) {
                var C,
                  b,
                  v = F.internal_getVideoPixelsDecodedDimensions(),
                  S = (C = v == null ? void 0 : v.width) != null ? C : 0,
                  R = (b = v == null ? void 0 : v.height) != null ? b : 0;
                S > 0 &&
                  R > 0 &&
                  ((K.current = !0),
                  pe({
                    duration: d,
                    volume: i,
                    muted: l,
                    videoWidth: S,
                    videoHeight: R,
                  }));
              }
              c.loadeddata != null &&
                c.loadeddata !== Y.current &&
                ((Y.current = c.loadeddata), fe());
              var E = t.bufferedRanges,
                k = Z.current;
              (E.length !== k.length ||
                E.some(function (e, t) {
                  return (
                    e.startTime !== k[t].startTime || e.endTime !== k[t].endTime
                  );
                })) &&
                ((Z.current = E), Ee(E.map(L)));
            };
            t();
            var n = F.subscribe(t);
            return function () {
              n.remove();
            };
          }),
          (xe = [F, te, re, ae, le, Re, ue, Ce, ve, he, pe, fe, Ie, Ee]),
          (n[29] = F),
          (n[30] = Ee),
          (n[31] = he),
          (n[32] = Ce),
          (n[33] = ve),
          (n[34] = fe),
          (n[35] = pe),
          (n[36] = Ie),
          (n[37] = le),
          (n[38] = te),
          (n[39] = re),
          (n[40] = ae),
          (n[41] = ue),
          (n[42] = Re),
          (n[43] = De),
          (n[44] = xe))
        : ((De = n[43]), (xe = n[44])),
        p(De, xe));
      var $e = f(null),
        Pe;
      n[45] !== F || n[46] !== de
        ? ((Pe = function () {
            var e = F.getPlayheadPosition();
            if (e !== V.current) {
              var t = Date.now(),
                n = t - j.current;
              if (
                ($e.current != null &&
                  (window.clearTimeout($e.current.timerId),
                  ($e.current = null)),
                n >= g)
              )
                (de(e), (V.current = e), (j.current = t));
              else {
                var r = g - n,
                  o = window.setTimeout(function () {
                    var e = F.getPlayheadPosition();
                    (e !== V.current &&
                      (de(e), (V.current = e), (j.current = Date.now())),
                      ($e.current = null));
                  }, r);
                $e.current = { time: e, timerId: o };
              }
            }
          }),
          (n[45] = F),
          (n[46] = de),
          (n[47] = Pe))
        : (Pe = n[47]);
      var Ne = r("useWAWebStableCallback")(Pe),
        Me;
      n[48] !== de
        ? ((Me = function () {
            var e = $e.current;
            if (e != null) {
              window.clearTimeout(e.timerId);
              var t = e.time;
              (t !== V.current &&
                (de(t), (V.current = t), (j.current = Date.now())),
                ($e.current = null));
            }
          }),
          (n[48] = de),
          (n[49] = Me))
        : (Me = n[49]);
      var we = Me,
        Ae = f(null),
        Fe,
        Oe;
      (n[50] !== we || n[51] !== O || n[52] !== Ne
        ? ((Fe = function () {
            if (!O) {
              (Ae.current != null &&
                (window.clearInterval(Ae.current), (Ae.current = null)),
                we());
              return;
            }
            return (
              Ne(),
              (Ae.current = window.setInterval(Ne, g)),
              function () {
                (Ae.current != null &&
                  (window.clearInterval(Ae.current), (Ae.current = null)),
                  we());
              }
            );
          }),
          (Oe = [O, Ne, we]),
          (n[50] = we),
          (n[51] = O),
          (n[52] = Ne),
          (n[53] = Fe),
          (n[54] = Oe))
        : ((Fe = n[53]), (Oe = n[54])),
        p(Fe, Oe),
        r("useWAWebCometVideoPlayerAudioBridge")(F, a));
      var Be, We;
      (n[55] !== F ||
      n[56] !== w ||
      n[57] !== ve ||
      n[58] !== de ||
      n[59] !== Re
        ? ((Be = function () {
            return babelHelpers.extends(
              {
                canPlay: R,
                end: function () {
                  F.pause("product_initiated");
                },
                getAudioDisabled: S,
                getBuffered: function () {
                  return F.getCurrentState().bufferedRanges.map(v);
                },
                getCurrentTime: function () {
                  return F.getPlayheadPosition();
                },
                getDuration: function () {
                  return F.getCurrentState().duration;
                },
                getMuted: function () {
                  return F.getCurrentState().muted;
                },
                getPaused: function () {
                  return F.getCurrentState().paused;
                },
                getPlaybackRate: function () {
                  return X.current;
                },
                getVolume: function () {
                  return F.getCurrentState().volume;
                },
                onError: function () {
                  ve();
                },
                onWaiting: function () {
                  Re();
                },
                pause: function () {
                  F.pause("user_initiated");
                },
                pauseAndReset: function () {
                  (F.pause("product_initiated"), F.seek(0));
                },
                play: function () {
                  F.play("user_initiated");
                },
                setCurrentTime: function (t) {
                  (F.seek(t), de(t), (V.current = t), (j.current = Date.now()));
                },
                setDuration: b,
                setMuted: function (t) {
                  F.setMuted(t, "user_initiated");
                },
                setPlaybackRate: function (t) {
                  ((X.current = t),
                    F.setPlaybackRate == null || F.setPlaybackRate(t));
                },
                setVolume: function (t) {
                  F.setVolume(t);
                },
                underlyingVideo: C,
              },
              w,
            );
          }),
          (We = [F, ve, de, Re, w]),
          (n[55] = F),
          (n[56] = w),
          (n[57] = ve),
          (n[58] = de),
          (n[59] = Re),
          (n[60] = Be),
          (n[61] = We))
        : ((Be = n[60]), (We = n[61])),
        _(M, Be, We));
      var qe;
      n[62] !== A
        ? ((qe = (e || (e = r("stylex"))).props(h.surface, A)),
          (n[62] = A),
          (n[63] = qe))
        : (qe = n[63]);
      var Ue;
      n[64] !== i
        ? ((Ue =
            i != null &&
            c.jsx("div", {
              className:
                "x6s0dn4 x78zum5 x13vifvy xtijo5x x1ey2m1c x1o0tod xl56j7k x10l6tqk",
              children: i,
            })),
          (n[64] = i),
          (n[65] = Ue))
        : (Ue = n[65]);
      var Ve;
      return (
        n[66] !== qe || n[67] !== Ue
          ? ((Ve = c.jsx(r("VideoPlayerSurface.react"), {
              children: c.jsx(
                "div",
                babelHelpers.extends({}, qe, { children: Ue }),
              ),
            })),
            (n[66] = qe),
            (n[67] = Ue),
            (n[68] = Ve))
          : (Ve = n[68]),
        Ve
      );
    }
    function C() {
      return null;
    }
    function b(e) {}
    function v(e) {
      return [e.startTime, e.endTime];
    }
    function S() {
      return !1;
    }
    function R() {}
    function L(e) {
      return [e.startTime, e.endTime];
    }
    l.default = y;
  },
  98,
);
