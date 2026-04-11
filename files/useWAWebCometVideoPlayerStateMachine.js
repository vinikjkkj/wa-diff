__d(
  "useWAWebCometVideoPlayerStateMachine",
  [
    "CoreVideoPlayerMetaData",
    "WAWebCometVideoPlayerStateMachine",
    "WAWebCometVideoPlayerUtils",
    "WAWebMusicGatingUtils",
    "WAWebMusicPlaybackUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebSNAPLUserPrefs",
    "WAWebWamEnumMessageType",
    "WAWebWamMediaMetricUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState,
      p = { current: null },
      _ = { current: null },
      f = {
        getCurrent: function () {
          return null;
        },
        subscribe: function () {
          return { remove: r("WAWebNoop") };
        },
      },
      g = function () {
        return {};
      },
      h = function (t) {
        switch (t) {
          case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS:
            return !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled();
          case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL:
            return !o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterVideoPlaybackLoggingEnabled();
          default:
            return !0;
        }
      },
      y = function (t) {
        switch (t) {
          case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS:
            return o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled();
          case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL:
            return o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterVideoPlaybackLoggingEnabled();
          default:
            return !1;
        }
      };
    function C(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.isCopyrightMuted,
        a = e.mediaId,
        i = e.mediaIdString,
        l = e.videoOrigin,
        s = r("useWAWebUnmountSignal")(),
        u = d(null),
        C = d(n),
        b = d(null),
        v = d(null),
        S;
      t[0] !== l
        ? ((S = function () {
            return h(l);
          }),
          (t[0] = l),
          (t[1] = S))
        : (S = t[1]);
      var R = m(S),
        L = R[0],
        E = R[1],
        k;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = {
            handleReactEffectInit: r("WAWebNoop"),
            handleReactEffectCleanup: r("WAWebNoop"),
            callbacks: null,
          }),
          (t[2] = k))
        : (k = t[2]);
      var I = m(k),
        T = I[0],
        D = I[1],
        x;
      t[3] !== a || t[4] !== i || t[5] !== s.aborted || t[6] !== l
        ? ((x = function (t) {
            var e = u.current;
            if (e !== t) {
              u.current = t;
              var n = u.current;
              if (n == null || a == null || !y(l)) {
                (D({
                  handleReactEffectInit: r("WAWebNoop"),
                  handleReactEffectCleanup: r("WAWebNoop"),
                  callbacks: null,
                }),
                  a == null && E(!0));
                return;
              }
              var c = o("WAWebSNAPLUserPrefs").getSNAPLPersistentId(a, l),
                d = o("WAWebCometVideoPlayerUtils").getInitialMetadata(n),
                m = o(
                  "CoreVideoPlayerMetaData",
                ).applyDefaultsToCoreVideoPlayerMetaData({
                  loggingConfig: { loggingToSNAPLCreateMetadataProvider: null },
                  subOrigin: "not_specified_please_fix",
                  videoFBID: "0",
                });
              ((b.current = d), (v.current = m));
              var h = o(
                  "WAWebCometVideoPlayerStateMachine",
                ).makeCometVideoPlayerStateMachine({
                  initialLoggingMetaData: d,
                  initialCoreVideoPlayerMetaData: m,
                  debugLogId: o("WAWebWamMediaMetricUtils")
                    .generateMediaEventId()
                    .toString(10),
                  videoEl: n,
                  fullscreenControllerRef: p,
                  videoLiveTraceRef: _,
                  videoPlayerPassiveViewabilityInfo: f,
                  metadataProvider: {
                    getErrorMetadata: g,
                    getRequiredMetadata: function () {
                      return {
                        current_watching_module: o(
                          "WAWebCometVideoPlayerUtils",
                        ).getCurrentWatchingModule(l),
                        media_id: a,
                        tracking_type: "organic",
                        persistent_id: c,
                        media_id_string: i != null ? i : "",
                      };
                    },
                    getTagMetadata: function () {
                      return {
                        is_copyright_muted: C.current,
                        country: o(
                          "WAWebMusicPlaybackUtils",
                        ).getUserCountryCodeForSNAPL(),
                        player_sound_on: !n.muted,
                      };
                    },
                  },
                  videoOrigin: l,
                }),
                S = h.callbacks,
                R = h.handleReactEffectCleanup,
                L = h.handleReactEffectInit,
                k = h.machine;
              s.aborted !== !0 &&
                (D({
                  machine: k,
                  handleReactEffectInit: L,
                  handleReactEffectCleanup: R,
                  callbacks: S,
                }),
                E(!0));
            }
          }),
          (t[3] = a),
          (t[4] = i),
          (t[5] = s.aborted),
          (t[6] = l),
          (t[7] = x))
        : (x = t[7]);
      var $ = x,
        P,
        N;
      (t[8] !== T.machine || t[9] !== n
        ? ((P = function () {
            C.current = n;
            var e = T.machine,
              t = b.current,
              r = v.current;
            e == null ||
              t == null ||
              r == null ||
              e.dispatch({
                payload: { loggingMetaData: t, coreVideoPlayerMetaData: r },
                type: "notify_logging_metadata_change",
              });
          }),
          (N = [T.machine, n]),
          (t[8] = T.machine),
          (t[9] = n),
          (t[10] = P),
          (t[11] = N))
        : ((P = t[10]), (N = t[11])),
        c(P, N));
      var M;
      return (
        t[12] !== T.callbacks ||
        t[13] !== T.handleReactEffectCleanup ||
        t[14] !== T.handleReactEffectInit ||
        t[15] !== L ||
        t[16] !== $
          ? ((M = {
              callbacks: T.callbacks,
              handleReactEffectInit: T.handleReactEffectInit,
              handleReactEffectCleanup: T.handleReactEffectCleanup,
              ready: L,
              videoElementRefCallback: $,
            }),
            (t[12] = T.callbacks),
            (t[13] = T.handleReactEffectCleanup),
            (t[14] = T.handleReactEffectInit),
            (t[15] = L),
            (t[16] = $),
            (t[17] = M))
          : (M = t[17]),
        M
      );
    }
    l.default = C;
  },
  98,
);
