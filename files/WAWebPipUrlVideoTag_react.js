__d(
  "WAWebPipUrlVideoTag.react",
  [
    "WAWebBaseNewsletterVideo.react",
    "WAWebBaseVideo.react",
    "WAWebBaseVideoNewsletterContextProvider",
    "WAWebDebounce",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebVideoPlayerSurface.react",
    "WAWebVideoPlayerX.react",
    "react",
    "useMergeRefs",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = r("WAWebDebounce")(function (e, t) {
        o("WAWebUserPrefsGeneral").setMediaVolumeSettings(e, t);
      }, 500);
    function f(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.onBufferUpdate,
        s = i.onError,
        c = i.onLoadedMetadata,
        f = i.onPlaying,
        g = i.onTimeUpdate,
        h = i.onVolumeChange,
        y = i.startTime,
        C = m(null),
        b = r("useMergeRefs")(a, C),
        v = p(!1),
        S = v[0],
        R = v[1];
      r("useWAWebOnUnmount")(function () {
        _.flush();
      });
      var L = (n = r("useWAWebStableCallback"))(function (e) {
          var t,
            n = C.current;
          if (
            ((t = i.callbacks) == null ||
              t.onVolumeChange == null ||
              t.onVolumeChange(e),
            n)
          ) {
            var r = n.getVolume(),
              o = n.getMuted(),
              a =
                (n.getAudioDisabled == null ? void 0 : n.getAudioDisabled()) ===
                !0;
            (a || _(r, o), h({ volume: r, muted: o }));
          }
        }),
        E = n(function (e) {
          if (!S && e) {
            var t;
            ((t = i.callbacks) == null || t.onPlaying == null || t.onPlaying(e),
              R(!0));
          }
          f();
        }),
        k = n(function () {
          C.current && typeof y == "number" && C.current.setCurrentTime(y);
        }),
        I = n(function (e) {
          if (y != null) {
            var t;
            (k(), (t = i.callbacks) == null || t.onLoadedMetadata(e));
          }
          var n = {
            duration: e.currentTarget.duration,
            volume: e.currentTarget.volume,
            muted: e.currentTarget.muted,
            videoWidth: e.currentTarget.videoWidth,
            videoHeight: e.currentTarget.videoHeight,
          };
          c(n);
        }),
        T = function () {
          C.current && l(C.current.getBuffered());
        },
        D = function (t) {
          var e = t.currentTarget.currentTime;
          g(e);
        },
        x = function (t) {
          var e,
            n,
            r =
              (e =
                (n = C.current) == null || (n = n.underlyingVideo()) == null
                  ? void 0
                  : n.error) != null
                ? e
                : null;
          if (r == null && t.code != null) {
            var o;
            (s(t.code), i.onError(), (o = i.callbacks) == null || o.onError(t));
            return;
          }
          s(r == null ? void 0 : r.code, r == null ? void 0 : r.message);
        },
        $ = n(function (e) {
          var t = C.current;
          t && (_(e.volume, e.muted), h(e));
        }),
        P = n(function () {
          (S || R(!0), f());
        }),
        N = n(function (e) {
          (y != null && k(), c(e));
        }),
        M = n(function (e) {
          g(e);
        }),
        w = n(function (e, t) {
          s(e, t);
        }),
        A = n(function () {
          var e;
          ((e = C.current) == null || e.end(), i.onEnded());
        }),
        F = n(function () {
          var e;
          ((e = C.current) == null || e.canPlay(),
            i.onCanPlay == null || i.onCanPlay());
        }),
        O = n(function () {
          var e;
          ((e = C.current) == null || e.onWaiting(),
            i.onWaiting == null || i.onWaiting());
        });
      (d(
        function () {
          k();
        },
        [y, k],
      ),
        d(function () {
          var e = C.current;
          if (e) {
            var t = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
              n = t.muted,
              r = t.volume;
            (r != null && e.setVolume(r), e.setMuted(n));
          }
        }, []));
      var B = i.msg,
        W =
          B != null &&
          o("WAWebMsgGetters").getIsNewsletterMsg(B) &&
          o("WAWebNewsletterGatingUtils").isNewsletterVideoPlayLoggingEnabled();
      return B != null &&
        W &&
        o("WAWebNewsletterGatingUtils").isCometVideoPlayerEnabled()
        ? u.jsx(r("WAWebVideoPlayerX.react"), {
            autoplayEnabled: i.autoPlay,
            loggingConfig: i.loggingConfig,
            loggingToSNAPLAdditionalData: i.loggingToSNAPLAdditionalData,
            mediaId: i.mediaId,
            poster: i.poster,
            src: i.url,
            subOrigin: i.subOrigin,
            children: u.jsx(r("WAWebVideoPlayerSurface.react"), {
              ref: b,
              onBufferUpdate: l,
              onPause: i.onPause,
              onPlaying: P,
              onEnded: A,
              onError: w,
              onTimeUpdate: M,
              onLoadedMetadata: N,
              onVolumeChange: $,
              onCanPlay: F,
              onWaiting: O,
            }),
          })
        : B != null && W
          ? u.jsx(r("WAWebBaseVideoNewsletterContextProvider"), {
              children: u.jsx(r("WAWebBaseNewsletterVideo.react"), {
                msg: B,
                ref: b,
                src: i.url,
                poster: i.poster,
                className: i.className,
                onVolumeChange: L,
                onEnded: A,
                onError: x,
                onPause: i.onPause,
                onPlaying: E,
                onProgress: T,
                onTimeUpdate: D,
                onLoadedMetadata: I,
                autoPlay: i.autoPlay,
                onCanPlay: F,
                onWaiting: i.onWaiting,
                onLoadedData: i.onLoadedData,
                videoCallbacks: i.callbacks,
                children: i.children,
              }),
            })
          : u.jsx(r("WAWebBaseVideo.react"), {
              ref: b,
              src: i.url,
              poster: i.poster,
              className: i.className,
              onVolumeChange: L,
              onVolumeChangeComet: $,
              onEnded: A,
              onError: x,
              onErrorComet: w,
              onPause: i.onPause,
              onPlaying: E,
              onProgress: T,
              onBufferUpdateComet: l,
              onTimeUpdate: D,
              onTimeUpdateComet: M,
              onLoadedMetadata: I,
              onLoadedMetadataComet: N,
              autoPlay: i.autoPlay,
              onCanPlay: F,
              onWaiting: O,
              onLoadedData: i.onLoadedData,
              videoCallbacks: i.callbacks,
              children: i.children,
            });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
