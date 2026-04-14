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
      var t = e.isCopyrightMuted,
        n = e.mediaId,
        a = e.mediaIdString,
        i = e.videoOrigin,
        l = r("useWAWebUnmountSignal")(),
        s = d(null),
        C = d(t),
        b = d(null),
        v = d(null),
        S = m(function () {
          return h(i);
        }),
        R = S[0],
        L = S[1],
        E = m({
          handleReactEffectInit: r("WAWebNoop"),
          handleReactEffectCleanup: r("WAWebNoop"),
          callbacks: null,
        }),
        k = E[0],
        I = E[1],
        T = u(
          function (e) {
            var t = s.current;
            if (t !== e) {
              s.current = e;
              var u = s.current;
              if (u == null || n == null || !y(i)) {
                (I({
                  handleReactEffectInit: r("WAWebNoop"),
                  handleReactEffectCleanup: r("WAWebNoop"),
                  callbacks: null,
                }),
                  n == null && L(!0));
                return;
              }
              var c = o("WAWebSNAPLUserPrefs").getSNAPLPersistentId(n, i),
                d = o("WAWebCometVideoPlayerUtils").getInitialMetadata(u),
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
                  videoEl: u,
                  fullscreenControllerRef: p,
                  videoLiveTraceRef: _,
                  videoPlayerPassiveViewabilityInfo: f,
                  metadataProvider: {
                    getErrorMetadata: g,
                    getRequiredMetadata: function () {
                      return {
                        current_watching_module: o(
                          "WAWebCometVideoPlayerUtils",
                        ).getCurrentWatchingModule(i),
                        media_id: n,
                        tracking_type: "organic",
                        persistent_id: c,
                        media_id_string: a != null ? a : "",
                      };
                    },
                    getTagMetadata: function () {
                      return {
                        is_copyright_muted: C.current,
                        country: o(
                          "WAWebMusicPlaybackUtils",
                        ).getUserCountryCodeForSNAPL(),
                        player_sound_on: !u.muted,
                      };
                    },
                  },
                  videoOrigin: i,
                }),
                S = h.callbacks,
                R = h.handleReactEffectCleanup,
                E = h.handleReactEffectInit,
                k = h.machine;
              l.aborted !== !0 &&
                (I({
                  machine: k,
                  handleReactEffectInit: E,
                  handleReactEffectCleanup: R,
                  callbacks: S,
                }),
                L(!0));
            }
          },
          [n, l.aborted, i, a],
        );
      return (
        c(
          function () {
            C.current = t;
            var e = k.machine,
              n = b.current,
              r = v.current;
            e == null ||
              n == null ||
              r == null ||
              e.dispatch({
                payload: { loggingMetaData: n, coreVideoPlayerMetaData: r },
                type: "notify_logging_metadata_change",
              });
          },
          [k.machine, t],
        ),
        {
          callbacks: k.callbacks,
          handleReactEffectInit: k.handleReactEffectInit,
          handleReactEffectCleanup: k.handleReactEffectCleanup,
          ready: R,
          videoElementRefCallback: T,
        }
      );
    }
    l.default = C;
  },
  98,
);
