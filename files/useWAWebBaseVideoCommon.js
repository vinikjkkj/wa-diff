__d(
  "useWAWebBaseVideoCommon",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebDomPlayVideo",
    "WAWebPttAudioChannels",
    "WAWebUA",
    "WAWebVideoPlaybackSpeed",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebMediaStreamPlaybackMetric",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ["onPlaying"],
      m,
      p,
      _ = p || (p = o("react")),
      f = _.useEffect,
      g = _.useRef;
    function h(t, a, i, l, p) {
      var _,
        h = g(0),
        y = g(null),
        C = g(null),
        b = o("useWAWebMediaStreamPlaybackMetric").useMediaStreamPlaybackMetric(
          i,
          y,
          l,
        ),
        v = b.wrappedProps,
        S = v.onPlaying,
        R = babelHelpers.objectWithoutPropertiesLoose(v, d),
        L = (_ = r("useWAWebStableCallback"))(function (e) {
          var t = y.current;
          t &&
            (t.paused ||
              (t.videoHeight > 0 &&
                t.videoWidth > 0 &&
                (S == null || S(),
                p == null || p.onPlayingExtra == null || p.onPlayingExtra(y))));
        }),
        E = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = y.current;
            if (!t)
              return (m || (m = n("Promise"))).reject(
                r("err")("cannot play unmounted video"),
              );
            if (!t.paused) return (m || (m = n("Promise"))).resolve();
            t.removeEventListener("playing", L);
            try {
              (yield r("WAWebDomPlayVideo")(t),
                t.addEventListener("playing", L),
                L());
            } catch (n) {
              var a, i, l, u;
              if (
                (t.addEventListener("playing", L),
                n.name === o("WAAbortError").ABORT_ERROR)
              ) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "video.play() promise rejected w/ AbortError: ",
                      ", error code: ",
                      "",
                    ])),
                  n.message,
                  n.code,
                );
                return;
              }
              var c =
                  (a =
                    (i = y.current) == null || (i = i.error) == null
                      ? void 0
                      : i.message) != null
                    ? a
                    : "",
                d =
                  (l =
                    (u = y.current) == null || (u = u.error) == null
                      ? void 0
                      : u.code) != null
                    ? l
                    : "";
              (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "video.play() promise rejected: ",
                    " The error code is ",
                    ".",
                  ])),
                c,
                d,
              ),
                R.onError == null || R.onError(n));
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        k = _(function () {
          E();
        }),
        I = _(function () {
          var e = y.current;
          if ((e == null ? void 0 : e.paused) !== !0) {
            var t;
            (e == null || e.pause(),
              p == null ||
                p.onPauseExtra == null ||
                p.onPauseExtra(
                  (t = e == null ? void 0 : e.currentTime) != null ? t : 0,
                ));
          }
        }),
        T = _(function () {
          var e, t;
          return (e = (t = y.current) == null ? void 0 : t.volume) != null
            ? e
            : 0;
        }),
        D = _(function (e) {
          y.current && (y.current.volume = e);
        }),
        x = _(function () {
          var e, t;
          return (e = (t = y.current) == null ? void 0 : t.muted) != null
            ? e
            : !1;
        }),
        $ = _(function () {
          return !1;
        }),
        P = _(function (e) {
          y.current && (y.current.muted = e);
        }),
        N = _(function () {
          var e, t;
          return (e = (t = y.current) == null ? void 0 : t.paused) != null
            ? e
            : !0;
        }),
        M = _(function () {
          var e, t;
          return (e = (t = y.current) == null ? void 0 : t.currentTime) != null
            ? e
            : 0;
        }),
        w = _(function (e) {
          y.current && (y.current.currentTime = e);
        }),
        A = _(function () {
          var e, t;
          return (e = (t = y.current) == null ? void 0 : t.duration) != null
            ? e
            : 0;
        }),
        F = _(function (e) {
          y.current && (y.current.duration = e);
        }),
        O = _(function () {
          var e = y.current;
          e && ((e.currentTime = 0), I());
        }),
        B = _(function () {
          var e, t;
          return (e = (t = y.current) == null ? void 0 : t.playbackRate) != null
            ? e
            : o("WAWebVideoPlaybackSpeed").DEFAULT_VIDEO_PLAYBACK_RATE;
        }),
        W = _(function (e) {
          y.current && (y.current.playbackRate = e);
        }),
        q = _(function () {
          var e,
            t = (e = y.current) == null ? void 0 : e.buffered,
            n = [];
          if (t)
            for (var r = 0; r < t.length; r++) n.push([t.start(r), t.end(r)]);
          return n;
        }),
        U = _(function () {
          return y.current;
        }),
        V = function (t) {
          var e = y.current;
          if (
            e &&
            (e.removeEventListener("playing", V),
            !e.videoHeight || !e.videoWidth)
          ) {
            (I(), k());
            var n = 6;
            h.current < n && h.current++;
            var r;
            (h.current > 1 &&
              h.current < n &&
              (r =
                "the height and width of the video is not zero, count (larger than 1): " +
                h.current),
              h.current >= n &&
                (r =
                  "the height and width of the video is not zero, count larger than " +
                  h.current),
              r != null &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed! ",
                        "",
                      ])),
                    r,
                  )
                  .sendLogs("base-video-non-zero-height-and-width"));
          }
        },
        H = _(function (e, n) {
          if (t === !0) {
            (e.removeEventListener("playing", V),
              e.addEventListener("playing", V));
            var r = e.srcObject;
            (r != null || (n && e.paused)) && k();
          }
        }),
        G = _(function (e) {
          var n;
          e !== y.current &&
            ((n = y.current) == null || n.removeEventListener("playing", L),
            C.current == null || C.current(),
            (y.current = e),
            e != null &&
              ((C.current = o(
                "WAWebPttAudioChannels",
              ).MainAudioChannel.registerMedia(e)),
              "srcObject" in e && a
                ? (e.srcObject = a)
                : e.src ||
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "srcObject is not supported in video tag while src is not set.",
                      ])),
                  ),
              e.addEventListener("playing", L),
              t === !0 &&
                H(e, o("WAWebUA").UA.isGecko || o("WAWebUA").UA.isSafari)));
        });
      return (
        f(
          function () {
            var e = y.current;
            e != null && t === !0 && H(e, !0);
          },
          [t],
        ),
        r("useWAWebOnUnmount")(function () {
          C.current == null || C.current();
        }),
        {
          videoRef: y,
          autoPlayErrorCountRef: h,
          unregisterFromAudioChannelRef: C,
          wrappedProps: R,
          handlePlaying: L,
          play: k,
          pause: I,
          getAudioDisabled: $,
          getVolume: T,
          setVolume: D,
          getMuted: x,
          setMuted: P,
          getPaused: N,
          getCurrentTime: M,
          setCurrentTime: w,
          getDuration: A,
          setDuration: F,
          pauseAndReset: O,
          getPlaybackRate: B,
          setPlaybackRate: W,
          getBuffered: q,
          underlyingVideo: U,
          setRefVideo: G,
        }
      );
    }
    l.default = h;
  },
  98,
);
