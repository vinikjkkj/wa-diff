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
        M = t.unregisterEmsgObserverImpl,
        w = t.videoElementAPIRef,
        A = t.videoPlayerPassiveViewabilityInfo,
        F = new Set(),
        O = !1,
        B = null,
        W = [],
        q = [],
        U = [],
        V = [],
        H = new e({
          pauseRequestCallbacks: q,
          playRequestCallbacks: W,
          scrubBeginRequestCallbacks: U,
          scrubEndRequestCallbacks: V,
        }),
        G = {
          freeze: function () {
            if (!l().paused)
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Video player must be paused before the controller freeze",
              );
            var e = {};
            try {
              var t = !1;
              (F.size === 0 &&
                ((t = !0),
                (B = {
                  exposedState: l(),
                  isFullscreen: u(),
                  liveRewindPlayheadPosition: c(),
                  playheadPosition: d(),
                  stateMachineState: m(),
                })),
                F.add(e),
                t &&
                  ((O = !0),
                  N.forEach(function (e) {
                    e();
                  })));
            } finally {
              O = !1;
            }
            return e;
          },
          isFrozen: function () {
            return B != null;
          },
          unfreeze: function (t) {
            if (!F.has(t))
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "Video player controller unfreeze token not found",
              );
            (F.delete(t),
              F.size === 0 &&
                ((B = null),
                N.forEach(function (e) {
                  e();
                })));
          },
        },
        z = function () {
          return B != null ? B.exposedState : l();
        },
        j = babelHelpers.extends({}, n, G, _, {
          changeProgressivePreload: function (t) {
            var e;
            if (!G.isFrozen()) {
              var n =
                (e = w.current) == null
                  ? void 0
                  : e.getUnderlyingVideoElement();
              n != null &&
                (t !== "none" && n.load(), n.setAttribute("preload", t));
            }
          },
          debugAPI: o,
          exitPictureInPicture: function () {
            G.isFrozen() || a();
          },
          getCurrentState: z,
          getIsDesktopPictureInPicture: function () {
            return B != null ? B.isFullscreen : s();
          },
          getIsFullscreen: function () {
            return B != null ? B.isFullscreen : u();
          },
          getLiveRewindPlayheadPosition: function () {
            return B != null ? B.liveRewindPlayheadPosition : c();
          },
          getPlayheadPosition: function () {
            return B != null ? B.playheadPosition : d();
          },
          internal_getCoreVideoStates: function () {
            return {
              implementationController: j,
              implementationExposedState: z(),
              videoPlayerPassiveViewabilityInfo: A,
            };
          },
          internal_getStateMachineState: function () {
            return B != null ? B.stateMachineState : m();
          },
          internal_getVideoElement: function () {
            var e = w.current;
            if (e != null) {
              var t = e.getUnderlyingVideoElement();
              return t;
            }
            return null;
          },
          internal_getVideoPixelsDecodedDimensions: function () {
            var e,
              t = w.current;
            return (e =
              t == null ? void 0 : t.getVideoPixelsDecodedDimensions()) != null
              ? e
              : null;
          },
          internal_getVideoPixelsPaintedDimensions: function () {
            var e,
              t = w.current;
            return (e =
              t == null ? void 0 : t.getVideoPixelsPaintedDimensions()) != null
              ? e
              : null;
          },
          internal_injectFatalError: p,
          observeOn: function () {
            return H;
          },
          pause: function (t) {
            G.isFrozen() ||
              (q.forEach(function (e) {
                return e(t);
              }),
              f(t));
          },
          play: function (t) {
            G.isFrozen() ||
              (W.forEach(function (e) {
                return e(t);
              }),
              g(t));
          },
          registerEmsgObserver: function () {
            var e = {};
            return (h(e), e);
          },
          requestPictureInPicture: function () {
            G.isFrozen() || y();
          },
          requestSetIsFullscreen: function (t) {
            if (!G.isFrozen()) {
              var e = i.current;
              if (e) {
                var n = j.internal_getVideoElement();
                e.requestSetIsFullscreen(t, n);
              }
            }
          },
          scrollIntoView: function (t) {
            var e = j.internal_getVideoElement();
            e && e.scrollIntoView(t);
          },
          scrubBegin: function () {
            G.isFrozen() ||
              (U.forEach(function (e) {
                return e();
              }),
              C());
          },
          scrubEnd: function (t) {
            G.isFrozen() ||
              (V.forEach(function (e) {
                return e(t);
              }),
              b(t));
          },
          seek: function (t) {
            G.isFrozen() || v(t);
          },
          selectVideoQuality: function (t) {
            G.isFrozen() || S(t);
          },
          selectVideoVariant: function (t) {
            G.isFrozen() || R(t);
          },
          setCaptionsDisplayStyle: function (t) {
            G.isFrozen() || L(t);
          },
          setCaptionsUrl: function (t) {
            G.isFrozen() || E(t);
          },
          setCaptionsVisible: function (t) {
            G.isFrozen() || k(t);
          },
          setIsLiveRewindActive: function (t) {
            G.isFrozen() || I(t);
          },
          setLatencyLevel: function (t) {
            G.isFrozen() || T(t);
          },
          setMuted: function (t, n) {
            G.isFrozen() || D(t, n);
          },
          setPictureInPictureState: function (t) {
            G.isFrozen() || x(t);
          },
          setPlaybackRate: function (t) {
            G.isFrozen() || $(t);
          },
          setVolume: function (t) {
            G.isFrozen() || P(t);
          },
          subscribe: function (t) {
            var e = function () {
                (G.isFrozen() && !O) || t();
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
          unregisterEmsgObserver: function (t) {
            M(t);
          },
          videoElementAPIRef: w,
        });
      return j;
    }
    l.createVideoPlayerImplementationControllerImpl = s;
  },
  98,
);
