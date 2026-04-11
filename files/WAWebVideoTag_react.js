__d(
  "WAWebVideoTag.react",
  [
    "WAWebDebounce",
    "WAWebDomVideoDisposeMediaPlayer",
    "WAWebMediaOpaqueData",
    "WAWebPipVideoStreaming",
    "WAWebPttAudioChannels",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebVideoPlayerSurface.react",
    "WAWebVideoPlayerX.react",
    "WAWebVideoUtils",
    "react",
    "useLazyRef",
    "useWAWebModelValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = r("WAWebDebounce")(function (e, t) {
        o("WAWebUserPrefsGeneral").setMediaVolumeSettings(e, t);
      }, 500);
    function p(e) {
      var t = e.autoPlay,
        n = e.cvpApi,
        a = e.disableContextMenu,
        i = e.msg,
        l = e.onLoadedMetadata,
        u = e.refVideo,
        p = e.startTime,
        f = e.videoCallbacks,
        g = n != null ? n : [null, {}, null],
        h = g[0],
        y = g[1].controller,
        C = g[2],
        b = r("useLazyRef")(function () {
          return n != null;
        }),
        v = n != null,
        S = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaBlob",
          "streamable",
        ]),
        R = S.mediaBlob,
        L = r("useLazyRef")(function () {
          return !!R;
        }),
        E = d(null),
        k = d(),
        I = d(),
        T = d(0),
        D = r("useWAWebStableCallback")(function () {
          I.current !== void 0 &&
            (self.clearInterval(I.current),
            (T.current = 0),
            (I.current = void 0));
        }),
        x = function (t) {
          (D(), f == null || f.onPlaying(t));
        },
        $ = r("useWAWebStableCallback")(function () {
          if (
            o("WAWebSocketModel").Socket.state ===
            o("WAWebSocketConstants").SOCKET_STATE.CONNECTED
          ) {
            T.current++;
            var e = !1;
            if (b.current) {
              var t, n;
              e =
                ((t =
                  C == null ||
                  (n = C.current) == null ||
                  (n = n.controller) == null
                    ? void 0
                    : n.getCurrentState().bufferEnd) != null
                  ? t
                  : 0) > 0;
            } else {
              var r = E.current,
                a = r == null ? void 0 : r.buffered;
              e = (a == null ? void 0 : a.length) != null && a.end(0) > 0;
            }
            (e || T.current > 240) && D();
          }
        }),
        P = function () {
          if (!v) {
            var e = E.current;
            (k.current == null || k.current(),
              e != null &&
                (k.current = o(
                  "WAWebPttAudioChannels",
                ).MainAudioChannel.registerMedia(e)));
          }
        },
        N = r("useWAWebStableCallback")(function () {
          ((T.current = 0),
            I.current === void 0 && (I.current = self.setInterval($, 250)));
        }),
        M = function () {
          var n = E.current;
          if (n && e.canChangeVolume) {
            var r = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
              a = r.muted,
              i = r.volume;
            (i != null && (n.volume = i),
              (n.muted = a),
              _() && t === !0 && N());
          }
        },
        w = function () {
          if (v) {
            var e;
            C == null ||
              (e = C.current) == null ||
              (e = e.controller) == null ||
              e.pause("product_initiated");
          } else {
            var t;
            (t = E.current) == null || t.pause == null || t.pause();
          }
        };
      c(function () {
        (M(), P(), u == null || u(E));
        var e = v ? null : E.current;
        return function () {
          (k.current == null || k.current(),
            m.flush(),
            D(),
            w(),
            o("WAWebUA").UA.isBlink &&
              e &&
              r("WAWebDomVideoDisposeMediaPlayer")(e));
        };
      }, []);
      var A = function (t) {
          f == null || f.onVolumeChange(t);
          var e = E.current;
          e && m(e.volume, e.muted);
        },
        F = function () {
          if (p != null && p !== 0)
            if (v) {
              var e;
              C == null ||
                (e = C.current) == null ||
                (e = e.controller) == null ||
                e.seek(p);
            } else {
              var t = E.current;
              t && (t.currentTime = p);
            }
        },
        O = function (t) {
          (F(), l == null || l(t), f == null || f.onLoadedMetadata(t));
        },
        B = function (t) {
          a && t.preventDefault();
        };
      c(
        function () {
          (P(), F(), u == null || u(E));
        },
        void 0,
      );
      var W = d(!1);
      (c(
        function () {
          if (
            !(!v || !y || W.current) &&
            ((W.current = !0),
            e.muted === !0 && y.setMuted(e.muted, "product_initiated"),
            !!e.canChangeVolume)
          ) {
            var n = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
              r = n.muted,
              a = n.volume;
            (a != null && y.setVolume(a),
              y.setMuted(r, "product_initiated"),
              _() && t === !0 && N());
          }
        },
        [t, y, v, e.canChangeVolume, e.muted, N],
      ),
        c(
          function () {
            if (!(!v || !y || !a)) {
              var e = y.internal_getVideoElement();
              if (e != null) {
                var t = function (t) {
                  t.preventDefault();
                };
                return (
                  e.addEventListener("contextmenu", t),
                  function () {
                    e.removeEventListener("contextmenu", t);
                  }
                );
              }
            }
          },
          [y, a, v],
        ));
      var q,
        U = o("WAWebVideoUtils").isMsgStreamable(i);
      if ((L.current || !U) && R instanceof r("WAWebMediaOpaqueData"))
        q = R.url();
      else if (U)
        q =
          o("WAWebPipVideoStreaming").VIDEO_STREAM_URL +
          "?key=" +
          i.id.toString();
      else return null;
      var V = function (n) {
          (_() && e.autoPlay !== !0 && N(), f == null || f.onPlay(n));
        },
        H = function (t) {
          (D(), f == null || f.onError(t));
        };
      if (v) {
        var G = function (t) {
            m(t.volume, t.muted);
          },
          z = function () {
            _() && t !== !0 && N();
          };
        return s.jsx(r("WAWebVideoPlayerX.react"), {
          apiRef: h,
          autoplayEnabled: e.autoPlay,
          loggingConfig: e.loggingConfig,
          loggingToSNAPLAdditionalData: e.loggingToSNAPLAdditionalData,
          mediaId: e.mediaId,
          poster: e.poster,
          src: q,
          subOrigin: e.subOrigin,
          children: s.jsx(r("WAWebVideoPlayerSurface.react"), {
            onVolumeChange: G,
            onLoadedMetadata: F,
            onPlay: z,
            onPlaying: D,
            onError: D,
          }),
        });
      }
      return s.jsx(
        "video",
        babelHelpers.extends({}, f, {
          ref: E,
          src: q,
          poster: e.poster,
          className: e.className,
          controls: e.controls,
          autoPlay: e.autoPlay,
          muted: e.muted,
          onClick: e.onClick,
          onDoubleClick: e.onDoubleClick,
          onVolumeChange: A,
          onLoadedMetadata: O,
          onPlay: V,
          onPlaying: x,
          onError: H,
          onContextMenu: B,
          children: e.children,
        }),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return o("WAWebUA").UA.isGecko || o("WAWebUA").UA.isSafari;
    }
    l.default = p;
  },
  98,
);
