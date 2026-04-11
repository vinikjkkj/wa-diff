__d(
  "VideoPlayerHooks",
  [
    "DOMRectIsEqual",
    "FBLogger",
    "VideoPlayerContexts",
    "VideoPlayerVideoPixelsFitContext",
    "VideoPlayerViewabilityContexts",
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "removeFromArray",
    "setTimeout",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useContext,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = m(e),
        r,
        a;
      return (
        t[0] !== e
          ? ((r = function () {
              n.current = e;
            }),
            (a = [e]),
            (t[0] = e),
            (t[1] = r),
            (t[2] = a))
          : ((r = t[1]), (a = t[2])),
        d(r, a),
        n
      );
    }
    function f() {
      var e = c((s || (s = o("VideoPlayerContexts"))).ControllerContext);
      if (e == null)
        throw r("FBLogger")("comet_video_player").mustfixThrow(
          "Empty ControllerContext. Are you rendering useController outside of VideoPlayerRelay/VideoPlayerX?",
        );
      return e;
    }
    function g() {
      var e = c((s || (s = o("VideoPlayerContexts"))).InstanceKeyContext);
      if (e == null)
        throw r("FBLogger")("comet_video_player").mustfixThrow(
          "Empty InstanceKeyContext. Are you rendering useInstanceKey outside of VideoPlayerRelay/VideoPlayerX?",
        );
      return e;
    }
    function h() {
      var e = de();
      return e === "LIVE";
    }
    function y() {
      var e = de();
      return e === "LIVE" || e === "VOD_READY";
    }
    function C() {
      return c((s || (s = o("VideoPlayerContexts"))).BufferEndContext);
    }
    function b() {
      return c((s || (s = o("VideoPlayerContexts"))).DurationContext);
    }
    function v() {
      return c((s || (s = o("VideoPlayerContexts"))).SeekingContext);
    }
    function S() {
      return c((s || (s = o("VideoPlayerContexts"))).EndedContext);
    }
    function R() {
      return c((s || (s = o("VideoPlayerContexts"))).ErrorContext);
    }
    function L() {
      return c((s || (s = o("VideoPlayerContexts"))).PlayingContext);
    }
    function E() {
      var e = o("react-compiler-runtime").c(3),
        t = p(0),
        n = t[0],
        r = t[1],
        a = f(),
        i,
        l;
      return (
        e[0] !== a
          ? ((i = function () {
              var e = a.subscribe(function () {
                r(a.getPlayheadPosition());
              });
              return (
                r(a.getPlayheadPosition()),
                function () {
                  return e.remove();
                }
              );
            }),
            (l = [a]),
            (e[0] = a),
            (e[1] = i),
            (e[2] = l))
          : ((i = e[1]), (l = e[2])),
        d(i, l),
        n
      );
    }
    function k(e, t, n) {
      var r = t.current,
        o = r
          ? r(e.getPlayheadPosition(), e.getCurrentState())
          : e.getPlayheadPosition();
      return ((n.current = o), o);
    }
    function I(e, t, n, o, a, i) {
      (k(e, t, n),
        a.current == null && i > 0
          ? (a.current = r("setTimeout")(function () {
              ((a.current = null), n.current != null && o(n.current));
            }, i))
          : a.current != null &&
            i <= 0 &&
            (r("clearTimeout")(a.current), (a.current = null)));
    }
    function T(e, t) {
      var n = f(),
        o = m(null),
        a = m(null),
        i = m(t),
        l = m(e),
        s = p(function () {
          return k(n, i, a);
        }),
        u = s[0],
        c = s[1];
      return (
        d(
          function () {
            t !== i.current && ((i.current = t), I(n, i, a, c, o, l.current));
          },
          [n, t],
        ),
        d(
          function () {
            l.current = e;
          },
          [n, e],
        ),
        d(
          function () {
            var e = function () {
                I(n, i, a, c, o, l.current);
              },
              t = n.subscribe(e);
            return function () {
              t.remove();
            };
          },
          [n],
        ),
        d(function () {
          return function () {
            o.current != null &&
              (r("clearTimeout")(o.current), (o.current = null));
          };
        }, []),
        u
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e === void 0 ? 200 : e,
        a = p(0),
        i = a[0],
        l = a[1],
        s = f(),
        u = h(),
        c = m(null),
        _ = m(i),
        g,
        y;
      (t[0] !== n || t[1] !== u || t[2] !== s
        ? ((g = function () {
            if (u) {
              var e = s.subscribe(function () {
                c.current == null &&
                  (c.current = r("setTimeout")(function () {
                    (s.getCurrentState().paused ||
                      ((_.current = _.current + n / 1e3), l(_.current)),
                      (c.current = null));
                  }, n));
              });
              return (
                l(0),
                function () {
                  return e.remove();
                }
              );
            }
          }),
          (y = [s, n, u]),
          (t[0] = n),
          (t[1] = u),
          (t[2] = s),
          (t[3] = g),
          (t[4] = y))
        : ((g = t[3]), (y = t[4])),
        d(g, y));
      var C, b;
      return (
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = function () {
              return function () {
                c.current !== null &&
                  (r("clearTimeout")(c.current), (c.current = null));
              };
            }),
            (b = []),
            (t[5] = C),
            (t[6] = b))
          : ((C = t[5]), (b = t[6])),
        d(C, b),
        u ? i : null
      );
    }
    function x() {
      var e = o("react-compiler-runtime").c(8),
        t = f(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = []), (e[0] = n))
        : (n = e[0]);
      var a = m(n),
        i;
      e[1] !== t ? ((i = t.isFrozen()), (e[1] = t), (e[2] = i)) : (i = e[2]);
      var l = m(i),
        s;
      e[3] !== t
        ? ((s = function () {
            return {
              getCurrentState: function () {
                return t.isFrozen();
              },
              subscribeToChanges: function (t) {
                var e = a.current;
                return (
                  e.push(t),
                  {
                    remove: function () {
                      return r("removeFromArray")(e, t);
                    },
                  }
                );
              },
            };
          }),
          (e[3] = t),
          (e[4] = s))
        : (s = e[4]);
      var u = r("useStable")(s),
        c,
        p;
      return (
        e[5] !== t
          ? ((c = function () {
              var e = t.subscribe(function () {
                var e = l.current,
                  n = t.isFrozen();
                if (((l.current = n), n !== e)) {
                  var r = a.current;
                  r.forEach(function (e) {
                    return e(n);
                  });
                }
              });
              return function () {
                e.remove();
              };
            }),
            (p = [t]),
            (e[5] = t),
            (e[6] = c),
            (e[7] = p))
          : ((c = e[6]), (p = e[7])),
        d(c, p),
        u
      );
    }
    function $() {
      return c((s || (s = o("VideoPlayerContexts"))).WatchTimeContext);
    }
    function P() {
      return c((s || (s = o("VideoPlayerContexts"))).LastPlayedTimeContext);
    }
    function N() {
      return c((s || (s = o("VideoPlayerContexts"))).PausedContext);
    }
    function M() {
      return c((s || (s = o("VideoPlayerContexts"))).StallingContext);
    }
    function w() {
      return c((s || (s = o("VideoPlayerContexts"))).InPlayStallingContext);
    }
    function A() {
      return c((s || (s = o("VideoPlayerContexts"))).LastMuteReasonContext);
    }
    function F() {
      return c((s || (s = o("VideoPlayerContexts"))).LastPauseReasonContext);
    }
    function O() {
      return c((s || (s = o("VideoPlayerContexts"))).LastPlayReasonContext);
    }
    function B() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).AvailableVideoQualitiesContext,
      );
    }
    function W() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).AvailableAudioTracksContext,
      );
    }
    function q() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).AvailableVideoTracksContext,
      );
    }
    function U() {
      return c((s || (s = o("VideoPlayerContexts"))).CaptionsVisibleContext);
    }
    function V() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).CaptionDisplayStyleContext,
      );
    }
    function H() {
      return c((s || (s = o("VideoPlayerContexts"))).ActiveCaptionsContext);
    }
    function G() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).CurrentAudioTrackIDContext,
      );
    }
    function z() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).CurrentVideoQualityContext,
      );
    }
    function j() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).CurrentVideoTrackIDContext,
      );
    }
    function K() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).SelectedVideoQualityContext,
      );
    }
    function Q() {
      return c((s || (s = o("VideoPlayerContexts"))).TargetAudioTrackContext);
    }
    function X() {
      return c((s || (s = o("VideoPlayerContexts"))).MutedContext);
    }
    function Y() {
      return c((s || (s = o("VideoPlayerContexts"))).VolumeContext);
    }
    function J() {
      return c(
        o("VideoPlayerViewabilityContexts")
          .VideoPlayerDesktopPictureInPictureContext,
      );
    }
    function Z() {
      return c(
        o("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext,
      );
    }
    function ee() {
      return c((s || (s = o("VideoPlayerContexts"))).DimensionsContext);
    }
    function te() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).VideoPixelsAspectRatioContext,
      );
    }
    function ne() {
      return c((s || (s = o("VideoPlayerContexts"))).PlayerVersionContext);
    }
    function re() {
      return c((s || (s = o("VideoPlayerContexts"))).CaptionsLoadedContext);
    }
    function oe() {
      return c((s || (s = o("VideoPlayerContexts"))).IsAbrEnabledContext);
    }
    function ae() {
      return c((s || (s = o("VideoPlayerContexts"))).TargetVideoQualityContext);
    }
    function ie() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).VideoPlayerMouseHoverContext,
      );
    }
    function le() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).VideoPlayerMouseIdleContext,
      );
    }
    function se() {
      return c(
        o("VideoPlayerViewabilityContexts")
          .VideoPlayerPassiveViewabilityInfoContext,
      );
    }
    function ue() {
      return c(
        o("VideoPlayerViewabilityContexts")
          .VideoPlayerExtendedPassiveViewabilityInfoContext,
      );
    }
    function ce() {
      var e = o("react-compiler-runtime").c(6),
        t = se(),
        n = p(null),
        a = n[0],
        i = n[1],
        l = m(a),
        s,
        u;
      (e[0] !== a
        ? ((s = function () {
            l.current = a;
          }),
          (u = [a]),
          (e[0] = a),
          (e[1] = s),
          (e[2] = u))
        : ((s = e[1]), (u = e[2])),
        d(s, u));
      var c, _;
      return (
        e[3] !== t
          ? ((c = function () {
              if (t) {
                var e = function () {
                    var e = t.getCurrent();
                    if (e) {
                      var n = e.positionToViewport,
                        o = e.visiblePercentage,
                        a = l.current;
                      (a == null ||
                        o !== a.visiblePercentage ||
                        !r("DOMRectIsEqual")(n, a.positionToViewport)) &&
                        i({ positionToViewport: n, visiblePercentage: o });
                    }
                  },
                  n = t.subscribe(function () {
                    e();
                  });
                return function () {
                  return n.remove();
                };
              }
            }),
            (_ = [i, t]),
            (e[3] = t),
            (e[4] = c),
            (e[5] = _))
          : ((c = e[4]), (_ = e[5])),
        d(c, _),
        a
      );
    }
    function de() {
      return c((s || (s = o("VideoPlayerContexts"))).BroadcastStatusContext);
    }
    function me() {
      return c((s || (s = o("VideoPlayerContexts"))).CanAutoplayContext);
    }
    function pe() {
      return c((s || (s = o("VideoPlayerContexts"))).VolumeSettingContext);
    }
    function _e() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).AutoplayGatingResultContext,
      );
    }
    function fe() {
      return c((s || (s = o("VideoPlayerContexts"))).VideoFBIDContext);
    }
    function ge() {
      return c((s || (s = o("VideoPlayerContexts"))).AdClientTokenContext);
    }
    function he() {
      return c((s || (s = o("VideoPlayerContexts"))).LoopCurrentContext);
    }
    function ye() {
      return c((s || (s = o("VideoPlayerContexts"))).LoopCountContext);
    }
    function Ce() {
      return c(
        (s || (s = o("VideoPlayerContexts")))
          .InbandCaptionsAutogeneratedContext,
      );
    }
    function be() {
      return c(
        (s || (s = o("VideoPlayerContexts")))
          .VideoPlayerCaptionsReservationsContext,
      );
    }
    function ve() {
      return c(
        (s || (s = o("VideoPlayerContexts")))
          .VideoPlayerCaptionsReservationActionsContext,
      );
    }
    function Se() {
      return c((s || (s = o("VideoPlayerContexts"))).StreamInterruptedContext);
    }
    function Re() {
      return c((s || (s = o("VideoPlayerContexts"))).SeekableRangesContext);
    }
    function Le() {
      return c((s || (s = o("VideoPlayerContexts"))).IsLiveRewindActiveContext);
    }
    function Ee() {
      var e = S(),
        t = he(),
        n = ye(),
        r = e && (n === -1 || (n > 0 && t < n));
      return r;
    }
    function ke() {
      var e = S(),
        t = Ee();
      return e && !t;
    }
    function Ie() {
      return c((s || (s = o("VideoPlayerContexts"))).PlaybackRateContext);
    }
    function Te() {
      return c((s || (s = o("VideoPlayerContexts"))).IsNCSRContext);
    }
    function De() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).IsPremiumMusicVideoContext,
      );
    }
    function xe() {
      var e = ge() != null,
        t = h(),
        n = De(),
        r = Le();
      return e || n ? !1 : t ? r : !0;
    }
    function $e() {
      return c((s || (s = o("VideoPlayerContexts"))).InitialTracePolicyContext);
    }
    function Pe() {
      return c((s || (s = o("VideoPlayerContexts"))).LatencyLevelContext);
    }
    function Ne() {
      return c(
        (s || (s = o("VideoPlayerContexts"))).AudioAvailabilityInfoContext,
      );
    }
    function Me() {
      var e = ge() != null,
        t = h(),
        n = De();
      return !(e || n || t);
    }
    function we(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e === void 0 ? !0 : e,
        r = f(),
        a,
        i;
      (t[0] !== r || t[1] !== n
        ? ((a = function () {
            if (n) {
              var e = r.registerEmsgObserver();
              return function () {
                r.unregisterEmsgObserver(e);
              };
            }
          }),
          (i = [r, n]),
          (t[0] = r),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((a = t[2]), (i = t[3])),
        d(a, i));
    }
    function Ae() {
      return (
        we(),
        c((s || (s = o("VideoPlayerContexts"))).ActiveEmsgBoxesContext)
      );
    }
    function Fe() {
      return c(r("VideoPlayerVideoPixelsFitContext"));
    }
    ((l.useLatestValueRef = _),
      (l.useController = f),
      (l.useInstanceKey = g),
      (l.useIsLive = h),
      (l.useIsVideoBroadcast = y),
      (l.useBufferEnd = C),
      (l.useDuration = b),
      (l.useSeeking = v),
      (l.useEnded = S),
      (l.useError = R),
      (l.usePlaying = L),
      (l.useCurrentTime_DO_NOT_USE = E),
      (l.useCurrentTimeThrottled = T),
      (l.useLiveTimeElapsedThrottled = D),
      (l.useIsFrozenPassive = x),
      (l.useWatchTime = $),
      (l.useLastPlayedTime = P),
      (l.usePaused = N),
      (l.useStalling = M),
      (l.useInPlayStalling = w),
      (l.useLastMuteReason = A),
      (l.useLastPauseReason = F),
      (l.useLastPlayReason = O),
      (l.useAvailableVideoQualities = B),
      (l.useAvailableAudioTracks = W),
      (l.useAvailableVideoTracks = q),
      (l.useCaptionsVisible = U),
      (l.useCaptionDisplayStyle = V),
      (l.useActiveCaptions = H),
      (l.useCurrentAudioTrackID = G),
      (l.useCurrentVideoQuality = z),
      (l.useCurrentVideoTrackID = j),
      (l.useSelectedVideoQuality = K),
      (l.useTargetAudioTrack = Q),
      (l.useMuted = X),
      (l.useVolume = Y),
      (l.useIsDesktopPictureInPicture = J),
      (l.useIsFullscreen = Z),
      (l.useDimensions = ee),
      (l.useVideoPixelsAspectRatio = te),
      (l.usePlayerVersion = ne),
      (l.useCaptionsLoaded = re),
      (l.useIsAbrEnabled = oe),
      (l.useTargetVideoQuality = ae),
      (l.useIsHovering = ie),
      (l.useIsMouseIdle = le),
      (l.useVideoPlayerPassiveViewabilityInfo = se),
      (l.useVideoPlayerExtendedPassiveViewabilityInfo = ue),
      (l.useVideoPlayerViewabilityInfo = ce),
      (l.useBroadcastStatus = de),
      (l.useCanAutoplay = me),
      (l.useVolumeSetting = pe),
      (l.useAutoplayGatingResult = _e),
      (l.useVideoFbid = fe),
      (l.useAdClientToken = ge),
      (l.useVideoPlayerCurrentLoop = he),
      (l.useVideoPlayerTotalLoops = ye),
      (l.useInbandCaptionsAutogenerated = Ce),
      (l.useVideoPlayerCaptionsReservations = be),
      (l.useVideoPlayerCaptionsReservationActions = ve),
      (l.useStreamInterrupted = Se),
      (l.useSeekableRanges_DO_NOT_USE = Re),
      (l.useIsLiveRewindActive = Le),
      (l.useIsTransitioningToNextLoop = Ee),
      (l.useVideoPlaybackEnded = ke),
      (l.usePlaybackRate = Ie),
      (l.useIsNCSR = Te),
      (l.useIsPremiumMusicVideo = De),
      (l.useShouldShowPlaybackRateControl = xe),
      (l.useVideoPlayerInitialTracePolicy = $e),
      (l.useLatencyLevel = Pe),
      (l.useAudioAvailabilityInfo = Ne),
      (l.useShouldPersistPlaybackRate = Me),
      (l.useEmsgObserver = we),
      (l.useActiveEmsgBoxes = Ae),
      (l.useVideoPlayerVideoPixelsFit = Fe));
  },
  98,
);
