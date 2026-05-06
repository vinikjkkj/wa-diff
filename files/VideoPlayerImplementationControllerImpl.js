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
        P = t.setVideoElementImpl,
        N = t.setVolumeImpl,
        M = t.subscribers,
        w = t.suspendAutoLoopImpl,
        A = t.unregisterEmsgObserverImpl,
        F = t.videoElementAPIRef,
        O = t.videoPlayerPassiveViewabilityInfo,
        B = new Set(),
        W = !1,
        q = null,
        U = [],
        V = [],
        H = [],
        G = [],
        z = new e({
          pauseRequestCallbacks: V,
          playRequestCallbacks: U,
          scrubBeginRequestCallbacks: H,
          scrubEndRequestCallbacks: G,
        }),
        j = {
          freeze: function () {
            if (!l().paused)
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Video player must be paused before the controller freeze",
              );
            var e = {};
            try {
              var t = !1;
              (B.size === 0 &&
                ((t = !0),
                (q = {
                  exposedState: l(),
                  isFullscreen: u(),
                  liveRewindPlayheadPosition: c(),
                  playheadPosition: d(),
                  stateMachineState: m(),
                })),
                B.add(e),
                t &&
                  ((W = !0),
                  M.forEach(function (e) {
                    e();
                  })));
            } finally {
              W = !1;
            }
            return e;
          },
          isFrozen: function () {
            return q != null;
          },
          unfreeze: function (t) {
            if (!B.has(t))
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Video player controller unfreeze token not found",
              );
            (B.delete(t),
              B.size === 0 &&
                ((q = null),
                M.forEach(function (e) {
                  e();
                })));
          },
        },
        K = function () {
          return q != null ? q.exposedState : l();
        },
        Q = babelHelpers.extends({}, n, j, _, {
          changeProgressivePreload: function (t) {
            var e;
            if (!j.isFrozen()) {
              var n =
                (e = F.current) == null
                  ? void 0
                  : e.getUnderlyingVideoElement();
              n != null &&
                (t !== "none" && n.load(), n.setAttribute("preload", t));
            }
          },
          debugAPI: o,
          exitPictureInPicture: function () {
            j.isFrozen() || a();
          },
          getCurrentState: K,
          getIsDesktopPictureInPicture: function () {
            return q != null ? q.isFullscreen : s();
          },
          getIsFullscreen: function () {
            return q != null ? q.isFullscreen : u();
          },
          getLiveRewindPlayheadPosition: function () {
            return q != null ? q.liveRewindPlayheadPosition : c();
          },
          getPlayheadPosition: function () {
            return q != null ? q.playheadPosition : d();
          },
          internal_getCoreVideoStates: function () {
            return {
              implementationController: Q,
              implementationExposedState: K(),
              videoPlayerPassiveViewabilityInfo: O,
            };
          },
          internal_getStateMachineState: function () {
            return q != null ? q.stateMachineState : m();
          },
          internal_getVideoElement: function () {
            var e = F.current;
            if (e != null) {
              var t = e.getUnderlyingVideoElement();
              return t;
            }
            return null;
          },
          internal_getVideoPixelsDecodedDimensions: function () {
            var e,
              t = F.current;
            return (e =
              t == null ? void 0 : t.getVideoPixelsDecodedDimensions()) != null
              ? e
              : null;
          },
          internal_getVideoPixelsPaintedDimensions: function () {
            var e,
              t = F.current;
            return (e =
              t == null ? void 0 : t.getVideoPixelsPaintedDimensions()) != null
              ? e
              : null;
          },
          internal_injectFatalError: p,
          observeOn: function () {
            return z;
          },
          pause: function (t) {
            j.isFrozen() ||
              (V.forEach(function (e) {
                return e(t);
              }),
              f(t));
          },
          play: function (t) {
            j.isFrozen() ||
              (U.forEach(function (e) {
                return e(t);
              }),
              g(t));
          },
          registerEmsgObserver: function () {
            var e = {};
            return (h(e), e);
          },
          requestPictureInPicture: function () {
            j.isFrozen() || y();
          },
          requestSetIsFullscreen: function (t) {
            if (!j.isFrozen()) {
              var e = i.current;
              if (e) {
                var n = Q.internal_getVideoElement();
                e.requestSetIsFullscreen(t, n);
              }
            }
          },
          scrollIntoView: function (t) {
            var e = Q.internal_getVideoElement();
            e && e.scrollIntoView(t);
          },
          scrubBegin: function () {
            j.isFrozen() ||
              (H.forEach(function (e) {
                return e();
              }),
              C());
          },
          scrubEnd: function (t) {
            j.isFrozen() ||
              (G.forEach(function (e) {
                return e(t);
              }),
              b(t));
          },
          seek: function (t) {
            j.isFrozen() || v(t);
          },
          selectVideoQuality: function (t) {
            j.isFrozen() || S(t);
          },
          selectVideoVariant: function (t) {
            j.isFrozen() || R(t);
          },
          setCaptionsDisplayStyle: function (t) {
            j.isFrozen() || L(t);
          },
          setCaptionsUrl: function (t) {
            j.isFrozen() || E(t);
          },
          setCaptionsVisible: function (t) {
            j.isFrozen() || k(t);
          },
          setIsLiveRewindActive: function (t) {
            j.isFrozen() || I(t);
          },
          setLatencyLevel: function (t) {
            j.isFrozen() || T(t);
          },
          setMuted: function (t, n) {
            j.isFrozen() || D(t, n);
          },
          setPictureInPictureState: function (t) {
            j.isFrozen() || x(t);
          },
          setPlaybackRate: function (t) {
            j.isFrozen() || $(t);
          },
          setVideoElement: function (t) {
            j.isFrozen() || P(t);
          },
          setVolume: function (t) {
            j.isFrozen() || N(t);
          },
          subscribe: function (t) {
            var e = function () {
                (j.isFrozen() && !W) || t();
              },
              n = i.current,
              o = n ? n.subscribe(e) : null;
            return (
              M.push(e),
              {
                remove: function () {
                  (o && o.remove(), r("removeFromArray")(M, e));
                },
              }
            );
          },
          suspendAutoLoop: function (t) {
            j.isFrozen() || w(t);
          },
          unregisterEmsgObserver: function (t) {
            A(t);
          },
          videoElementAPIRef: F,
        });
      return Q;
    }
    l.createVideoPlayerImplementationControllerImpl = s;
  },
  98,
);
