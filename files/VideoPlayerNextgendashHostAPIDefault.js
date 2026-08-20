__d(
  "VideoPlayerNextgendashHostAPIDefault",
  [
    "Promise",
    "VideoPlayerNextgendashHostAPI",
    "VideoPlayerNextgendashHostXMLDOMParser",
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
    function f(e, t, n) {
      var r = o(
        "VideoPlayerNextgendashHostAPI",
      ).unopaqueVideoPlayerNextgendashHostMediaSource(t);
      if (
        e.config.guardSourceBufferOpsWithReadyStateCheck &&
        r.readyState !== "open"
      ) {
        if (
          e.config.reopenEndedMediaSourceOnRepresentationSwitch &&
          r.readyState === "ended" &&
          n !== "remove"
        )
          return;
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashHostAPISourceBufferReadyStateNotOpen",
          "Unable to " + n + ": mediaSource.readyState=%s (expected 'open')",
          r.readyState,
        );
      }
    }
    var g = {
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
        return y(
          t,
          n,
          o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostEventTarget(n),
          r,
          a,
        );
      },
      mediaSourceAddSourceBuffer: function (t, n, r, a, i) {
        var e = r.mimeCodecsParsed,
          l = r.representationId,
          s = r.type,
          u = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostMediaSource(n),
          c = u.readyState;
        if (c !== "open") {
          if (i === !0) return null;
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashHostAPIAddSourceBufferMediaSourceNotOpen",
            "Unable to addSourceBuffer for " +
              s +
              " representation %s: mediaSource.readyState='" +
              c +
              "'.",
            l,
          );
        }
        var d = t.host.mediaSourceIsTypeSupported(t, e.mimeCodecs);
        if (!d)
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashHostAPIAddSourceBufferCodecNotSupported",
            "Unable to addSourceBuffer for " +
              s +
              " representation %s: mimeCodecs (%s) is not supported by the browser.",
            l,
            e.mimeCodecs,
          );
        var m = u.addSourceBuffer(e.mimeCodecs),
          p = y(
            t,
            o(
              "VideoPlayerNextgendashHostAPI",
            ).opaqueVideoPlayerNextgendashHostSourceBuffer(m),
            m,
            ["updateend", "abort", "error"],
            a,
          ),
          _ = !1,
          f = function () {
            if (!_) {
              (p(), (_ = !0));
              try {
                u.removeSourceBuffer(m);
              } catch (r) {
                if (
                  !(
                    typeof r == "object" &&
                    r != null &&
                    r.name === "NotFoundError"
                  )
                ) {
                  var n = o("nextgendasherr").nextgendasherrFromCause(
                    t,
                    r,
                    "VideoPlayerNextgendashHostAPIAddSourceBufferUnableToCleanup",
                    "Unable to removeSourceBuffer originally added for " +
                      s +
                      " representation %s: mimeCodecs (%s)",
                    l,
                    e.mimeCodecs,
                  );
                  throw n;
                }
              }
            }
          };
        return [
          o(
            "VideoPlayerNextgendashHostAPI",
          ).opaqueVideoPlayerNextgendashHostSourceBuffer(m),
          f,
        ];
      },
      mediaSourceCanConstructInDedicatedWorker: function (t) {
        try {
          if (
            t === "ManagedMediaSource" &&
            typeof ManagedMediaSource == "function"
          )
            return ManagedMediaSource.canConstructInDedicatedWorker === !0;
          if (typeof MediaSource == "function")
            return MediaSource.canConstructInDedicatedWorker === !0;
        } catch (e) {}
        return !1;
      },
      mediaSourceCollectSnapshot: function (t, n) {
        var e = "unknown",
          r = "unknown",
          a = null,
          i = null;
        try {
          var l = [],
            s = o(
              "VideoPlayerNextgendashHostAPI",
            ).unopaqueVideoPlayerNextgendashHostMediaSource(n);
          ((e = s.duration), (r = s.readyState));
          for (var u = 0; u < s.sourceBuffers.length; u++)
            l.push(s.sourceBuffers[u].updating);
          a = l;
        } catch (e) {
          i = o("nextgendasherr").nextgendasherrFromCause(
            t,
            e,
            "VideoPlayerNextgendashHostAPIMediaSourceCollectSnapshotError",
          );
        }
        return o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          duration: Number.isNaN(e) ? "NOT_A_NUMBER" : e,
          exception: i,
          readyState: r,
          sourceBuffersUpdating: a,
        });
      },
      mediaSourceCreate: function (t, n) {
        var e = null,
          r = null;
        if (t.config.preferredMediaSourceAPIType === "ManagedMediaSource")
          try {
            typeof ManagedMediaSource == "function"
              ? (e = new ManagedMediaSource())
              : (r = o("nextgendasherr").nextgendasherr(
                  t,
                  "VideoPlayerNextgendashHostAPIManagedMediaSourceClassMissing",
                ));
          } catch (e) {
            r = o("nextgendasherr").nextgendasherrFromCause(
              t,
              e,
              "VideoPlayerNextgendashHostAPIManagedMediaSourceConstructorException",
            );
          }
        if (e == null)
          try {
            typeof MediaSource == "function"
              ? (e = new MediaSource())
              : (r = o("nextgendasherr").nextgendasherr(
                  t,
                  "VideoPlayerNextgendashHostAPIMediaSourceClassMissing",
                ));
          } catch (e) {
            r = o("nextgendasherr").nextgendasherrFromCause(
              t,
              e,
              "VideoPlayerNextgendashHostAPIMediaSourceConstructorException",
            );
          }
        if (e == null)
          throw o("nextgendasherr").nextgendasherrFromCause(
            t,
            r,
            "VideoPlayerNextgendashHostAPIMediaSourceCreateException",
            "preferredMediaSourceAPIType='" +
              t.config.preferredMediaSourceAPIType +
              "'",
          );
        var a = y(
          t,
          o(
            "VideoPlayerNextgendashHostAPI",
          ).opaqueVideoPlayerNextgendashHostMediaSource(e),
          e,
          ["sourceopen", "sourceended", "sourceclose"],
          n,
        );
        return [
          o(
            "VideoPlayerNextgendashHostAPI",
          ).opaqueVideoPlayerNextgendashHostMediaSource(e),
          a,
        ];
      },
      mediaSourceEndOfStream: function (t, n, r) {
        var e = o(
          "VideoPlayerNextgendashHostAPI",
        ).unopaqueVideoPlayerNextgendashHostMediaSource(n);
        if (
          t.host.mediaSourceEndOfStreamCallIsExpectedToBeSafeAndNotNoop(t, n, r)
        )
          try {
            e.endOfStream();
          } catch (e) {}
      },
      mediaSourceEndOfStreamCallIsExpectedToBeSafeAndNotNoop: function (
        t,
        n,
        r,
      ) {
        var e,
          a = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostMediaSource(n);
        return (
          a.readyState === "open" &&
          ((e = r == null ? void 0 : r.readyState) != null ? e : 0) >= 1
        );
      },
      mediaSourceGetDuration: function (t, n) {
        var e = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostMediaSource(n),
          r = e.duration;
        return Number.isNaN(r) ? "NOT_A_NUMBER" : r;
      },
      mediaSourceGetHandleInWorker: function (t, n) {
        var e = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostMediaSource(n),
          r = e.handle;
        if (r == null)
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashHostAPIMissingMediaSourceHandle",
          );
        return o(
          "VideoPlayerNextgendashHostAPI",
        ).opaqueVideoPlayerNextgendashHostMediaSourceHandle(r);
      },
      mediaSourceIsTypeSupported: function (t, n) {
        try {
          if (
            t.config.preferredMediaSourceAPIType === "ManagedMediaSource" &&
            typeof ManagedMediaSource == "function"
          )
            return ManagedMediaSource.isTypeSupported(n);
          if (typeof MediaSource == "function")
            return MediaSource.isTypeSupported(n);
        } catch (e) {}
        return !1;
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
      sourceBufferAbort: function (t, n, r, a) {
        var e = a.mimeCodecsParsed,
          i = a.representationId,
          l = a.type;
        f(t, n, "abort");
        var s = o(
          "VideoPlayerNextgendashHostAPI",
        ).unopaqueVideoPlayerNextgendashHostSourceBuffer(r);
        try {
          s.abort();
        } catch (n) {
          var u = o("nextgendasherr").nextgendasherrFromCause(
            t,
            n,
            "VideoPlayerNextgendashHostAPISourceBufferAbortException",
            "Unable to abort for " + l + " representation %s: mimeCodecs (%s)",
            i,
            e.mimeCodecs,
          );
          if (
            typeof n == "object" &&
            n != null &&
            n.name === "InvalidStateError"
          ) {
            t.logging.log(t, { error: u, type: "generic_error_as_warning" });
            return;
          }
          throw u;
        }
      },
      sourceBufferAppendBuffer: function (t, n, r, a, i) {
        var e = i.mimeCodecsParsed,
          l = i.representationId,
          s = i.type;
        f(t, n, "appendBuffer");
        var u = o(
          "VideoPlayerNextgendashHostAPI",
        ).unopaqueVideoPlayerNextgendashHostSourceBuffer(r);
        if (u.updating)
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashHostAPISourceBufferAppendBufferIsUpdating",
            "Unable to appendBuffer for " +
              s +
              " representation %s: mimeCodecs (%s) - updating is true.",
            l,
            e.mimeCodecs,
          );
        try {
          u.appendBuffer(a);
        } catch (r) {
          var c = o("nextgendasherr").nextgendasherrFromCause(t, r, ""),
            d = t.host.mediaSourceCollectSnapshot(t, n),
            m = r instanceof Error && r.name === "QuotaExceededError";
          throw o("nextgendasherr").nextgendasherrFromMultipleCauses(
            t,
            [
              ["appendBuffer", c],
              d.exception ? ["snapshot", d.exception] : null,
            ].filter(Boolean),
            m
              ? "VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException"
              : "VideoPlayerNextgendashHostAPISourceBufferAppendBufferException",
            "Unable to appendBuffer for " +
              s +
              " representation %s: mimeCodecs (%s) " +
              (d.exception ? "snapshotError:partialResults:" : "") +
              " %s %s %s %s",
            l,
            e.mimeCodecs,
            "mediaSource readyState=" + d.readyState,
            "mediaSource duration=" + d.duration,
            "sourceBuffersUpdating=[" +
              (d.sourceBuffersUpdating
                ? d.sourceBuffersUpdating.join(",")
                : "unknown") +
              "]",
            "target sourceBuffer updating=" + (u.updating ? "true" : "false"),
          );
        }
      },
      sourceBufferChangeType: function (t, n, r) {
        var e = r.mimeCodecsParsed,
          a = r.mimeCodecsParsedBeforeChangeType,
          i = r.representationId,
          l = r.type,
          s = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostSourceBuffer(n);
        if (s.updating)
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashHostAPISourceBufferChangeTypeIsUpdating",
            "Unable to sourceBuffer.changeType(%s) for " +
              l +
              " representation %s: mimeCodecs (%s) - updating is true.",
            e.mimeCodecs,
            i,
            a.mimeCodecs,
          );
        try {
          s.changeType(e.mimeCodecs);
        } catch (n) {
          throw o("nextgendasherr").nextgendasherrFromCause(
            t,
            n,
            "VideoPlayerNextgendashHostAPISourceBufferChangeTypeException",
            "Unable to sourceBuffer.changeType(%s) for " +
              l +
              " representation %s: mimeCodecs (%s)",
            e.mimeCodecs,
            i,
            a.mimeCodecs,
          );
        }
      },
      sourceBufferRemove: function (t, n, r, a) {
        var e = a.mimeCodecsParsed,
          i = a.removeRange,
          l = a.representationId,
          s = a.type;
        f(t, n, "remove");
        var u = o(
          "VideoPlayerNextgendashHostAPI",
        ).unopaqueVideoPlayerNextgendashHostSourceBuffer(r);
        if (u.updating)
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashHostAPISourceBufferRemoveIsUpdating",
            "Unable to sourceBuffer.remove() for " +
              s +
              " representation %s: mimeCodecs (%s) - updating is true.",
            l,
            e.mimeCodecs,
          );
        if (u.buffered.length === 0)
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashHostAPISourceBufferRemoveNoopNothingBuffered",
            "Unable to sourceBuffer.remove(%s,%s) for " +
              s +
              " representation %s: mimeCodecs (%s) - nothing is buffered.",
            i[0],
            i[1],
            l,
            e.mimeCodecs,
          );
        try {
          u.remove(i[0], i[1]);
        } catch (n) {
          throw o("nextgendasherr").nextgendasherrFromCause(
            t,
            n,
            "VideoPlayerNextgendashHostAPISourceBufferRemoveException",
            "Unable to sourceBuffer.remove(%s,%s) for " +
              s +
              " representation %s: mimeCodecs (%s) - buffered: %s",
            i[0],
            i[1],
            l,
            e.mimeCodecs,
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRanges(
              o("VideoPlayerNextgendashMediaUtils").snapshotTimeRanges(
                function () {
                  return u.buffered;
                },
              ),
            ),
          );
        }
      },
      sourceBufferSnapshotBuffered: function (t, n) {
        var e = o(
          "VideoPlayerNextgendashHostAPI",
        ).unopaqueVideoPlayerNextgendashHostSourceBuffer(n);
        return o("VideoPlayerNextgendashMediaUtils").snapshotTimeRanges(
          function () {
            return e.buffered;
          },
        );
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
    };
    g.networkIsOnline();
    var h = g;
    function y(e, t, n, r, o) {
      var a = [];
      return (
        new Set(r).forEach(function (r) {
          var i = function (a) {
            var n = e.host.clock(),
              i = a.timeStamp,
              l = n.perfMs - i,
              s = { perfMs: i, unixMs: n.unixMs - l };
            o({
              domEventAdjustedClock: s,
              domEventClock: n,
              domEventType: r,
              eventTarget: t,
            });
          };
          (a.push([r, i]), n.addEventListener(r, i));
        }),
        function () {
          a.forEach(function (e) {
            var t = e[0],
              r = e[1];
            n.removeEventListener(t, r);
          });
        }
      );
    }
    l.default = h;
  },
  98,
);
