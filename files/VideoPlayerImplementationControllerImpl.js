__d(
  "VideoPlayerImplementationControllerImpl",
  ["FBLogger", "removeFromArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.pauseRequestCallbacks,
          n = e.playRequestCallbacks,
          r = e.scrubBeginRequestCallbacks,
          o = e.scrubEndRequestCallbacks;
        ((this.$1 = n), (this.$2 = t), (this.$3 = r), (this.$4 = o));
      }
      var t = e.prototype;
      return (
        (t.playRequest = function (t) {
          var e = this;
          return (
            this.$1.push(t),
            function () {
              r("removeFromArray")(e.$1, t);
            }
          );
        }),
        (t.pauseRequest = function (t) {
          var e = this;
          return (
            this.$2.push(t),
            function () {
              r("removeFromArray")(e.$2, t);
            }
          );
        }),
        (t.scrubBeginRequest = function (t) {
          var e = this;
          return (
            this.$3.push(t),
            function () {
              r("removeFromArray")(e.$3, t);
            }
          );
        }),
        (t.scrubEndRequest = function (t) {
          var e = this;
          return (
            this.$4.push(t),
            function () {
              r("removeFromArray")(e.$4, t);
            }
          );
        }),
        e
      );
    })();
    function s(t) {
      var n = t.concurrentAutoplayManagementAPI,
        o = t.debugAPI,
        a = t.exitPictureInPictureImpl,
        i = t.fullscreenControllerRef,
        l = t.getCurrentExposedState,
        s = t.getCurrentIsDesktopPictureInPicture,
        u = t.getCurrentIsFullscreen,
        c = t.getCurrentLiveRewindPlayheadPosition,
        d = t.getCurrentPlayheadPosition,
        m = t.internal_getCurrentStateMachineState,
        p = t.internal_injectFatalError,
        _ = t.loggerAPI,
        f = t.pauseImpl,
        g = t.playImpl,
        h = t.registerEmsgObserverImpl,
        y = t.requestPictureInPictureImpl,
        C = t.scrubBeginImpl,
        b = t.scrubEndImpl,
        v = t.seekImpl,
        S = t.selectVideoQualityImpl,
        R = t.selectVideoVariantImpl,
        L = t.setCaptionsDisplayStyleImpl,
        E = t.setCaptionsUrlImpl,
        k = t.setCaptionsVisibleImpl,
        I = t.setIsLiveRewindActiveImpl,
        T = t.setLatencyLevelImpl,
        D = t.setMutedImpl,
        x = t.setPictureInPictureStateImpl,
        $ = t.setPlaybackRateImpl,
        P = t.setVolumeImpl,
        N = t.subscribers,
        M = t.suspendAutoLoopImpl,
        w = t.unregisterEmsgObserverImpl,
        A = t.videoElementAPIRef,
        F = t.videoPlayerPassiveViewabilityInfo,
        O = new Set(),
        B = !1,
        W = null,
        q = [],
        U = [],
        V = [],
        H = [],
        G = new e({
          pauseRequestCallbacks: U,
          playRequestCallbacks: q,
          scrubBeginRequestCallbacks: V,
          scrubEndRequestCallbacks: H,
        }),
        z = {
          freeze: function () {
            if (!l().paused)
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Video player must be paused before the controller freeze",
              );
            var e = {};
            try {
              var t = !1;
              (O.size === 0 &&
                ((t = !0),
                (W = {
                  exposedState: l(),
                  isFullscreen: u(),
                  liveRewindPlayheadPosition: c(),
                  playheadPosition: d(),
                  stateMachineState: m(),
                })),
                O.add(e),
                t &&
                  ((B = !0),
                  N.forEach(function (e) {
                    e();
                  })));
            } finally {
              B = !1;
            }
            return e;
          },
          isFrozen: function () {
            return W != null;
          },
          unfreeze: function (t) {
            if (!O.has(t))
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Video player controller unfreeze token not found",
              );
            (O.delete(t),
              O.size === 0 &&
                ((W = null),
                N.forEach(function (e) {
                  e();
                })));
          },
        },
        j = function () {
          return W != null ? W.exposedState : l();
        },
        K = babelHelpers.extends({}, n, z, _, {
          changeProgressivePreload: function (t) {
            var e;
            if (!z.isFrozen()) {
              var n =
                (e = A.current) == null
                  ? void 0
                  : e.getUnderlyingVideoElement();
              n != null &&
                (t !== "none" && n.load(), n.setAttribute("preload", t));
            }
          },
          debugAPI: o,
          exitPictureInPicture: function () {
            z.isFrozen() || a();
          },
          getCurrentState: j,
          getIsDesktopPictureInPicture: function () {
            return W != null ? W.isFullscreen : s();
          },
          getIsFullscreen: function () {
            return W != null ? W.isFullscreen : u();
          },
          getLiveRewindPlayheadPosition: function () {
            return W != null ? W.liveRewindPlayheadPosition : c();
          },
          getPlayheadPosition: function () {
            return W != null ? W.playheadPosition : d();
          },
          internal_getCoreVideoStates: function () {
            return {
              implementationController: K,
              implementationExposedState: j(),
              videoPlayerPassiveViewabilityInfo: F,
            };
          },
          internal_getStateMachineState: function () {
            return W != null ? W.stateMachineState : m();
          },
          internal_getVideoElement: function () {
            var e = A.current;
            if (e != null) {
              var t = e.getUnderlyingVideoElement();
              return t;
            }
            return null;
          },
          internal_getVideoPixelsDecodedDimensions: function () {
            var e,
              t = A.current;
            return (e =
              t == null ? void 0 : t.getVideoPixelsDecodedDimensions()) != null
              ? e
              : null;
          },
          internal_getVideoPixelsPaintedDimensions: function () {
            var e,
              t = A.current;
            return (e =
              t == null ? void 0 : t.getVideoPixelsPaintedDimensions()) != null
              ? e
              : null;
          },
          internal_injectFatalError: p,
          observeOn: function () {
            return G;
          },
          pause: function (t) {
            z.isFrozen() ||
              (U.forEach(function (e) {
                return e(t);
              }),
              f(t));
          },
          play: function (t) {
            z.isFrozen() ||
              (q.forEach(function (e) {
                return e(t);
              }),
              g(t));
          },
          registerEmsgObserver: function () {
            var e = {};
            return (h(e), e);
          },
          requestPictureInPicture: function () {
            z.isFrozen() || y();
          },
          requestSetIsFullscreen: function (t) {
            if (!z.isFrozen()) {
              var e = i.current;
              if (e) {
                var n = K.internal_getVideoElement();
                e.requestSetIsFullscreen(t, n);
              }
            }
          },
          scrollIntoView: function (t) {
            var e = K.internal_getVideoElement();
            e && e.scrollIntoView(t);
          },
          scrubBegin: function () {
            z.isFrozen() ||
              (V.forEach(function (e) {
                return e();
              }),
              C());
          },
          scrubEnd: function (t) {
            z.isFrozen() ||
              (H.forEach(function (e) {
                return e(t);
              }),
              b(t));
          },
          seek: function (t) {
            z.isFrozen() || v(t);
          },
          selectVideoQuality: function (t) {
            z.isFrozen() || S(t);
          },
          selectVideoVariant: function (t) {
            z.isFrozen() || R(t);
          },
          setCaptionsDisplayStyle: function (t) {
            z.isFrozen() || L(t);
          },
          setCaptionsUrl: function (t) {
            z.isFrozen() || E(t);
          },
          setCaptionsVisible: function (t) {
            z.isFrozen() || k(t);
          },
          setIsLiveRewindActive: function (t) {
            z.isFrozen() || I(t);
          },
          setLatencyLevel: function (t) {
            z.isFrozen() || T(t);
          },
          setMuted: function (t, n) {
            z.isFrozen() || D(t, n);
          },
          setPictureInPictureState: function (t) {
            z.isFrozen() || x(t);
          },
          setPlaybackRate: function (t) {
            z.isFrozen() || $(t);
          },
          setVolume: function (t) {
            z.isFrozen() || P(t);
          },
          subscribe: function (t) {
            var e = function () {
                (z.isFrozen() && !B) || t();
              },
              n = i.current,
              o = n ? n.subscribe(e) : null;
            return (
              N.push(e),
              {
                remove: function () {
                  (o && o.remove(), r("removeFromArray")(N, e));
                },
              }
            );
          },
          suspendAutoLoop: function (t) {
            z.isFrozen() || M(t);
          },
          unregisterEmsgObserver: function (t) {
            w(t);
          },
          videoElementAPIRef: A,
        });
      return K;
    }
    l.createVideoPlayerImplementationControllerImpl = s;
  },
  98,
);
