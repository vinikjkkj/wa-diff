__d(
  "VideoPlayerNextgendashHostAPIDefault",
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
    "performanceAbsoluteNow",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = new Set(),
      p =
        (e = (u || (u = r("performance"))).timeOrigin) != null
          ? e
          : (c || (c = r("performanceAbsoluteNow")))() -
            (d || (d = r("performanceNow")))();
    function _(e) {
      m.has(e) && (URL.revokeObjectURL(e), m.delete(e));
    }
    var f = babelHelpers.extends({}, r("VideoPlayerNextgendashMSEMediaSink"), {
      clock: function () {
        return o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          perfMs: (d || (d = r("performanceNow")))(),
          unixMs: Date.now(),
        });
      },
      clockPerfOriginMs: p,
      fetch:
        typeof window.fetch == "function"
          ? function (e, t, n) {
              return window.fetch(t, n ? babelHelpers.extends({}, n) : void 0);
            }
          : function (e) {
              var t = o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashBrowserHostAPIFetchUnsupported",
                "VideoPlayerNextgendashBrowserHostAPI.fetch: Missing global.fetch",
              );
              return (s || (s = n("Promise"))).reject(t);
            },
      getPerformanceResourceTimingByName:
        typeof (u || (u = r("performance"))).getEntriesByName == "function"
          ? function (e) {
              return (u || (u = r("performance"))).getEntriesByName(
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
            buffered: o("VideoPlayerNextgendashMediaUtils").snapshotTimeRanges(
              function () {
                return e.buffered;
              },
            ),
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
          (l != null && l !== "" && (e.removeAttribute("src"), _(l)), r != null)
        ) {
          if (r.mediaSourceHandle != null)
            if ("srcObject" in e)
              (t.config.preferredMediaSourceAPIType === "ManagedMediaSource" &&
                (e.disableRemotePlayback = !0),
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
            (m.add(u),
              t.config.preferredMediaSourceAPIType === "ManagedMediaSource" &&
                (e.disableRemotePlayback = !0),
              e.setAttribute("src", u),
              s.addEventListener(
                "sourceopen",
                function () {
                  _(u);
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
        return navigator.onLine;
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
        clearInterval: window.clearInterval.bind(window),
        clearTimeout: window.clearTimeout.bind(window),
        setInterval: window.setInterval.bind(window),
        setTimeout: window.setTimeout.bind(window),
        throttle: function (t, n, o) {
          var e = o === void 0 ? {} : o,
            a = e.leading,
            i = e.trailing,
            l,
            s,
            u,
            c = null,
            d = 0,
            m = function () {
              var e = l;
              l = null;
              var n = s;
              if (((s = null), e == null))
                throw r("fb-error")
                  .FBLogger(
                    "comet_video_player_nextgendash",
                    "VideoPlayerNextgendashHostAPIThrottleBug",
                  )
                  .mustfixThrow("VideoPlayerNextgendashHostAPIThrottleBug");
              return t.apply(n, e);
            },
            p = function () {
              ((d = a === !1 ? 0 : Date.now()), (c = null), (u = m()));
            },
            _ = function () {
              ((l = s = null),
                c != null && (window.clearTimeout(c), (c = null)));
            };
          function f() {
            var e = Date.now();
            !d && a === !1 && (d = e);
            var t = n - (e - d);
            return (
              t <= 0
                ? (window.clearTimeout(c),
                  (c = null),
                  (d = e),
                  (l = arguments),
                  (s = this),
                  (u = m()))
                : i !== !1 &&
                  ((l = arguments),
                  (s = this),
                  c == null && (c = window.setTimeout(p, t))),
              u
            );
          }
          return ((f.cancel = _), f);
        },
      },
    });
    f.networkIsOnline();
    var g = f;
    l.default = g;
  },
  98,
);
