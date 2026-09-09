__d(
  "VideoPlayerNextgendashHostAPIDefaultFactory",
  [
    "Promise",
    "VideoPlayerNextgendashHostAPI",
    "VideoPlayerNextgendashHostSubscribeToEventTarget",
    "VideoPlayerNextgendashHostXMLDOMParser",
    "VideoPlayerNextgendashMSEMediaSink",
    "VideoPlayerNextgendashMediaUtils",
    "VideoPlayerNextgendashStateMachine",
    "fb-error",
    "nextgendasherr",
    "oz-player/configs/OzGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/networks/OzBandwidthUtils",
    "performance",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Set();
    function d(e) {
      c.has(e) && (URL.revokeObjectURL(e), c.delete(e));
    }
    function m(t) {
      var a = t.fetchImpl,
        i = t.timers;
      return babelHelpers.extends({}, r("VideoPlayerNextgendashMSEMediaSink"), {
        clock: function () {
          return o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject({
            perfMs: (u || (u = r("performanceNow")))(),
            unixMs: Date.now(),
          });
        },
        clockPerfOriginMs: t.clockPerfOriginMs,
        fetch:
          a != null
            ? function (e, t, n) {
                return a(t, n ? babelHelpers.extends({}, n) : void 0);
              }
            : function (t) {
                var r = o("nextgendasherr").nextgendasherr(
                  t,
                  "VideoPlayerNextgendashBrowserHostAPIFetchUnsupported",
                  "VideoPlayerNextgendashBrowserHostAPI.fetch: Missing global.fetch",
                );
                return (e || (e = n("Promise"))).reject(r);
              },
        getPerformanceResourceTimingByName:
          typeof (s || (s = r("performance"))).getEntriesByName == "function"
            ? function (e) {
                return (s || (s = r("performance"))).getEntriesByName(
                  e,
                  "resource",
                );
              }
            : function () {
                return [];
              },
        mediaElementCollectOnlyPlayheadMediaTimeSec: function (t, n) {
          var e = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostMediaElement(n);
          return e.currentTime;
        },
        mediaElementCollectSnapshot: function (t, n) {
          var e = o(
              "VideoPlayerNextgendashHostAPI",
            ).unopaqueVideoPlayerNextgendashHostMediaElement(n),
            r = e.getAttribute("src"),
            a = e.srcObject != null || (r != null && r.startsWith("blob:")),
            i = e.duration,
            l = o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject({
              buffered: o(
                "VideoPlayerNextgendashMediaUtils",
              ).snapshotTimeRanges(function () {
                return e.buffered;
              }),
              currentTime: e.currentTime,
              duration: Number.isNaN(i) ? "NOT_A_NUMBER" : i,
              ended: e.ended,
              error:
                e.error != null
                  ? { code: e.error.code, message: e.error.message }
                  : null,
              mediaSourceAttached: a,
              networkState: e.networkState,
              paused: e.paused,
              playbackRate: e.playbackRate,
              readyState: e.readyState,
              seeking: e.seeking,
            });
          return l;
        },
        mediaElementSetPlayhead: function (t, n, r) {
          var e = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostMediaElement(n);
          if (!Number.isFinite(r) || r < 0)
            throw o("nextgendasherr").nextgendasherr(
              t,
              "VideoPlayerNextgendashBrowserHostAPIMediaElementSetPlayheadInvalid",
              "VideoPlayerNextgendashBrowserHostAPI.mediaElementSetPlayhead: Invalid playheadMediaTimeSec: %s",
              r,
            );
          e.currentTime = r;
        },
        mediaElementSetSource: function (t, n, r, a) {
          var e = o(
              "VideoPlayerNextgendashHostAPI",
            ).unopaqueVideoPlayerNextgendashHostMediaElement(n),
            i = e.paused === !1;
          "srcObject" in e && e.srcObject != null && (e.srcObject = null);
          var l = e.getAttribute("src");
          if (
            (l != null && l !== "" && (e.removeAttribute("src"), d(l)),
            r != null)
          ) {
            if (r.mediaSourceHandle != null)
              if ("srcObject" in e)
                (t.config.preferredMediaSourceAPIType ===
                  "ManagedMediaSource" && (e.disableRemotePlayback = !0),
                  (e.srcObject = o(
                    "VideoPlayerNextgendashHostAPI",
                  ).unopaqueVideoPlayerNextgendashHostMediaSourceHandle(
                    r.mediaSourceHandle,
                  )));
              else
                throw o("nextgendasherr").nextgendasherr(
                  t,
                  "VideoPlayerNextgendashBrowserHostAPIMediaElementSrcObjectMissing",
                  "VideoPlayerNextgendashBrowserHostAPI.mediaElementSetSource: Unable to set mediaSourceHandle because HTMLMediaElement.srcObject is missing",
                );
            else if (r.mediaSource != null) {
              var s = o(
                  "VideoPlayerNextgendashHostAPI",
                ).unopaqueVideoPlayerNextgendashHostMediaSource(r.mediaSource),
                u = URL.createObjectURL(s);
              (c.add(u),
                t.config.preferredMediaSourceAPIType === "ManagedMediaSource" &&
                  (e.disableRemotePlayback = !0),
                e.setAttribute("src", u),
                s.addEventListener(
                  "sourceopen",
                  function () {
                    d(u);
                  },
                  { once: !0 },
                ));
            } else if (r.url != null)
              if (r.url !== "") e.setAttribute("src", r.url);
              else
                throw o("nextgendasherr").nextgendasherr(
                  t,
                  "VideoPlayerNextgendashBrowserHostAPIMediaElementUrlEmpty",
                  "VideoPlayerNextgendashBrowserHostAPI.mediaElementSetSource: Unable to set url because it is empty; use null source instead of empty source.url to clear the media element source",
                );
            else
              throw o("nextgendasherr").nextgendasherr(
                t,
                "VideoPlayerNextgendashBrowserHostAPIMediaElementInvalidSource",
                "VideoPlayerNextgendashBrowserHostAPI.mediaElementSetSource: Invalid source provided",
              );
            ((a == null ? void 0 : a.playheadMediaTimeSec) != null &&
              (e.currentTime = a.playheadMediaTimeSec),
              i && e.play().catch(function () {}));
          }
        },
        mediaElementSubscribe: function (t, n, r, a) {
          return o(
            "VideoPlayerNextgendashHostSubscribeToEventTarget",
          ).subscribeToHostEventTarget(
            t,
            n,
            o(
              "VideoPlayerNextgendashHostAPI",
            ).unopaqueVideoPlayerNextgendashHostEventTarget(n),
            r,
            a,
          );
        },
        networkDiagnosticsReadBandwidth: function (t) {
          var e = r(
            "oz-player/networks/OzBandwidthEstimator",
          ).getBandwidthDiagnostics(r("oz-player/configs/OzGlobalConfig"));
          return e != null || !t
            ? e
            : o(
                "oz-player/networks/OzBandwidthUtils",
              ).createFallbackBandwidthDiagnostics(
                r("oz-player/networks/OzBandwidthEstimator").getDefaultEstimate(
                  r("oz-player/configs/OzGlobalConfig"),
                ),
              );
        },
        networkDiagnosticsUpdate: function (t) {
          (t.navigationTimingSample &&
            r(
              "oz-player/networks/OzBandwidthEstimator",
            ).addNavigationTimingSample(
              t.navigationTimingSample.timeToFirstByteMs,
              t.navigationTimingSample.timeToLastByteMs,
              t.navigationTimingSample.bytes,
              t.clock.unixMs,
            ),
            t.bandwidthSample &&
              r("oz-player/networks/OzBandwidthEstimator").addBandwidthSample(
                t.bandwidthSample.bytes,
                t.bandwidthSample.timeInMs,
                t.clock.unixMs,
              ));
        },
        networkIsOnline: function () {
          return t.networkIsOnline();
        },
        parseXML: o("VideoPlayerNextgendashHostXMLDOMParser")
          .parseXMLViaDOMParser,
        random: {
          coinflip: function (t) {
            return t === 0 ? !1 : t <= 1 ? !0 : Math.random() * t <= 1;
          },
        },
        scheduleToRun: function (t) {
          try {
            t();
          } catch (e) {
            r("fb-error")
              .FBLogger("comet_video_player_nextgendash")
              .catching(r("fb-error").getErrorSafe(e))
              .mustfix("VideoPlayerNextgendashHostAPIWorkException");
          }
        },
        timers: {
          clearInterval: i.clearInterval,
          clearTimeout: i.clearTimeout,
          setInterval: i.setInterval,
          setTimeout: i.setTimeout,
          throttle: function (t, n, o) {
            var e = o === void 0 ? {} : o,
              a = e.leading,
              l = e.trailing,
              s,
              u,
              c,
              d = null,
              m = 0,
              p = function () {
                var e = s;
                s = null;
                var n = u;
                if (((u = null), e == null))
                  throw r("fb-error")
                    .FBLogger(
                      "comet_video_player_nextgendash",
                      "VideoPlayerNextgendashHostAPIThrottleBug",
                    )
                    .mustfixThrow("VideoPlayerNextgendashHostAPIThrottleBug");
                return t.apply(n, e);
              },
              _ = function () {
                ((m = a === !1 ? 0 : Date.now()), (d = null), (c = p()));
              },
              f = function () {
                ((s = u = null), d != null && (i.clearTimeout(d), (d = null)));
              };
            function g() {
              var e = Date.now();
              !m && a === !1 && (m = e);
              var t = n - (e - m);
              return (
                t <= 0
                  ? (i.clearTimeout(d),
                    (d = null),
                    (m = e),
                    (s = arguments),
                    (u = this),
                    (c = p()))
                  : l !== !1 &&
                    ((s = arguments),
                    (u = this),
                    d == null && (d = i.setTimeout(_, t))),
                c
              );
            }
            return ((g.cancel = f), g);
          },
        },
      });
    }
    l.createVideoPlayerNextgendashHostAPIDefault = m;
  },
  98,
);
