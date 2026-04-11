__d(
  "WAWebPipYoutubeVideoTag.react",
  [
    "WAWebDebounce",
    "WAWebPttAudioChannels",
    "WAWebUserPrefsGeneral",
    "WAWebYoutube.react",
    "lodash",
    "react",
    "useLazyRef",
    "useWAWebInterval",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = r("WAWebDebounce")(function (e) {
        o("WAWebUserPrefsGeneral").setMediaVolumeSetting(e);
      }, 500),
      f = r("WAWebDebounce")(function (e) {
        o("WAWebUserPrefsGeneral").setMediaMutedSetting(e);
      }, 500),
      g = {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5,
      },
      h = {
        width: "100%",
        height: "100%",
        playerVars: {
          cc_load_policy: 1,
          iv_load_policy: 3,
          controls: 0,
          playsinline: 1,
          rel: 0,
          modestbranding: 0,
          autoplay: 0,
        },
      },
      y = "https://whatsapp.com";
    function C(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = p(null),
        s = p(null),
        c = p(0),
        C = p(0),
        b = r("useLazyRef")(function () {
          return Symbol("audio-channel");
        }),
        v = p(null),
        S = (n = r("useWAWebStableCallback"))(function () {
          var e;
          (e = l.current) == null || e.playVideo();
        }),
        R = n(function () {
          var e;
          (e = l.current) == null || e.pauseVideo();
        }),
        L = n(function (e) {
          var t;
          (t = l.current) == null || t.seekTo(e, !0);
        }),
        E = n(function () {
          var e, t;
          return (e = (t = l.current) == null ? void 0 : t.getCurrentTime()) !=
            null
            ? e
            : 0;
        }),
        k = n(function () {
          var e, t;
          return (
            ((e = (t = l.current) == null ? void 0 : t.getVolume()) != null
              ? e
              : 0) * 0.01
          );
        }),
        I = n(function () {
          var e, t;
          return (e = (t = l.current) == null ? void 0 : t.getDuration()) !=
            null
            ? e
            : 0;
        }),
        T = n(function () {
          var e, t;
          return (e = (t = l.current) == null ? void 0 : t.isMuted()) != null
            ? e
            : !1;
        }),
        D = function () {
          var e = l.current;
          if (e) {
            var t = e.getCurrentTime();
            t !== c.current && ((c.current = t), i.onTimeUpdate(t));
            var n = e.getVideoLoadedFraction();
            if (n !== C.current) {
              C.current = n;
              var r = s.current ? s.current.duration * n : 0;
              i.onProgress([[0, r]]);
            }
            var o = s.current;
            if (o) {
              var a = e.getVolume() * 0.01,
                u = e.isMuted();
              (a !== o.volume || u !== o.muted) &&
                ((s.current = babelHelpers.extends({}, o, {
                  volume: a,
                  muted: u,
                })),
                i.onVolumeChange({ volume: a, muted: u }));
            }
          }
        },
        x = r("useWAWebInterval")(D, 250),
        $ = x[0],
        P = function () {
          if (typeof i.startTime == "number") {
            var e;
            (e = l.current) == null || e.seekTo(i.startTime, !0);
          }
        },
        N = n(function (e) {
          var t = l.current;
          t && (e ? t.mute() : t.unMute(), f(e));
        }),
        M = n(function (e) {
          l.current && (l.current.setVolume(e * 100), _(e));
        }),
        w = n(function (e) {
          var t;
          (t = l.current) == null ||
            t.setPlaybackRate == null ||
            t.setPlaybackRate(e);
        }),
        A = function (t) {
          l.current = t.target;
          var e = l.current,
            n = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
            r = n.muted,
            a = n.volume,
            u = e.getDuration(),
            d = a != null ? a : e.getVolume() * 0.01,
            m = r != null ? r : e.isMuted(),
            p = e.getIframe().getBoundingClientRect(),
            _ = p.height,
            f = p.width;
          ((s.current = {
            duration: u,
            volume: d,
            muted: m,
            videoWidth: f,
            videoHeight: _,
          }),
            i.onLoadedMetadata(s.current),
            (c.current = e.getCurrentTime()),
            $(),
            i.startTime != null && P(),
            a != null && M(a),
            r != null && N(r));
        },
        F = function (t) {
          ((v.current = o("WAWebPttAudioChannels").MainAudioChannel.claim(
            b.current,
            R,
          )),
            i.onPlaying());
        },
        O = function (t) {
          (v.current == null || v.current(), i.onPause());
        },
        B = function (t) {
          i.onEnded();
        },
        W = function (t) {
          t.target.getPlayerState() !== g.PLAYING && i.onPause();
        };
      (d(
        function () {
          P();
        },
        [i.startTime],
      ),
        r("useWAWebOnUnmount")(function () {
          v.current == null || v.current();
        }),
        m(
          a,
          function () {
            return {
              play: S,
              pause: R,
              setCurrentTime: L,
              getCurrentTime: E,
              setVolume: M,
              setMuted: N,
              setPlaybackRate: w,
              getVolume: k,
              getDuration: I,
              getMuted: T,
              getAudioDisabled: function () {
                return !1;
              },
            };
          },
          [S, R, L, E, M, N, w, k, I, T],
        ));
      var q = i.counterAbuseData,
        U = r("lodash").merge(
          {},
          h,
          {
            playerVars: {
              autoplay: i.autoPlay ? 1 : 0,
              widget_referrer: y,
              origin: window.location.origin,
            },
          },
          q != null
            ? { playerVars: { rct: q.counterAbuseToken, rctn: q.nonce } }
            : {},
        );
      return u.jsx(r("WAWebYoutube.react"), {
        videoId: i.youtubeVideoId,
        opts: U,
        onReady: A,
        onPlay: F,
        onPause: O,
        onEnd: B,
        onError: i.onEnded,
        onStateChange: W,
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
