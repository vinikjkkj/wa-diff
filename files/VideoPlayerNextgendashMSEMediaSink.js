__d(
  "VideoPlayerNextgendashMSEMediaSink",
  [
    "VideoPlayerNextgendashHostAPI",
    "VideoPlayerNextgendashHostSubscribeToEventTarget",
    "VideoPlayerNextgendashMediaUtils",
    "VideoPlayerNextgendashStateMachine",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
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
    var s = {
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
            p = o(
              "VideoPlayerNextgendashHostSubscribeToEventTarget",
            ).subscribeToHostEventTarget(
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
          var a = o(
            "VideoPlayerNextgendashHostSubscribeToEventTarget",
          ).subscribeToHostEventTarget(
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
            t.host.mediaSourceEndOfStreamCallIsExpectedToBeSafeAndNotNoop(
              t,
              n,
              r,
            )
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
        sourceBufferAbort: function (n, r, a, i) {
          var t = i.mimeCodecsParsed,
            l = i.representationId,
            s = i.type;
          e(n, r, "abort");
          var u = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostSourceBuffer(a);
          try {
            u.abort();
          } catch (e) {
            var c = o("nextgendasherr").nextgendasherrFromCause(
              n,
              e,
              "VideoPlayerNextgendashHostAPISourceBufferAbortException",
              "Unable to abort for " +
                s +
                " representation %s: mimeCodecs (%s)",
              l,
              t.mimeCodecs,
            );
            if (
              typeof e == "object" &&
              e != null &&
              e.name === "InvalidStateError"
            ) {
              n.logging.log(n, { error: c, type: "generic_error_as_warning" });
              return;
            }
            throw c;
          }
        },
        sourceBufferAppendBuffer: function (n, r, a, i, l) {
          var t = l.mimeCodecsParsed,
            s = l.representationId,
            u = l.type;
          e(n, r, "appendBuffer");
          var c = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostSourceBuffer(a);
          if (c.updating)
            throw o("nextgendasherr").nextgendasherr(
              n,
              "VideoPlayerNextgendashHostAPISourceBufferAppendBufferIsUpdating",
              "Unable to appendBuffer for " +
                u +
                " representation %s: mimeCodecs (%s) - updating is true.",
              s,
              t.mimeCodecs,
            );
          try {
            c.appendBuffer(i);
          } catch (e) {
            var d = o("nextgendasherr").nextgendasherrFromCause(n, e, ""),
              m = n.host.mediaSourceCollectSnapshot(n, r),
              p = e instanceof Error && e.name === "QuotaExceededError";
            throw o("nextgendasherr").nextgendasherrFromMultipleCauses(
              n,
              [
                ["appendBuffer", d],
                m.exception ? ["snapshot", m.exception] : null,
              ].filter(Boolean),
              p
                ? "VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException"
                : "VideoPlayerNextgendashHostAPISourceBufferAppendBufferException",
              "Unable to appendBuffer for " +
                u +
                " representation %s: mimeCodecs (%s) " +
                (m.exception ? "snapshotError:partialResults:" : "") +
                " %s %s %s %s",
              s,
              t.mimeCodecs,
              "mediaSource readyState=" + m.readyState,
              "mediaSource duration=" + m.duration,
              "sourceBuffersUpdating=[" +
                (m.sourceBuffersUpdating
                  ? m.sourceBuffersUpdating.join(",")
                  : "unknown") +
                "]",
              "target sourceBuffer updating=" + (c.updating ? "true" : "false"),
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
        sourceBufferRemove: function (n, r, a, i) {
          var t = i.mimeCodecsParsed,
            l = i.removeRange,
            s = i.representationId,
            u = i.type;
          e(n, r, "remove");
          var c = o(
            "VideoPlayerNextgendashHostAPI",
          ).unopaqueVideoPlayerNextgendashHostSourceBuffer(a);
          if (c.updating)
            throw o("nextgendasherr").nextgendasherr(
              n,
              "VideoPlayerNextgendashHostAPISourceBufferRemoveIsUpdating",
              "Unable to sourceBuffer.remove() for " +
                u +
                " representation %s: mimeCodecs (%s) - updating is true.",
              s,
              t.mimeCodecs,
            );
          if (c.buffered.length === 0)
            throw o("nextgendasherr").nextgendasherr(
              n,
              "VideoPlayerNextgendashHostAPISourceBufferRemoveNoopNothingBuffered",
              "Unable to sourceBuffer.remove(%s,%s) for " +
                u +
                " representation %s: mimeCodecs (%s) - nothing is buffered.",
              l[0],
              l[1],
              s,
              t.mimeCodecs,
            );
          try {
            c.remove(l[0], l[1]);
          } catch (e) {
            throw o("nextgendasherr").nextgendasherrFromCause(
              n,
              e,
              "VideoPlayerNextgendashHostAPISourceBufferRemoveException",
              "Unable to sourceBuffer.remove(%s,%s) for " +
                u +
                " representation %s: mimeCodecs (%s) - buffered: %s",
              l[0],
              l[1],
              s,
              t.mimeCodecs,
              o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRanges(
                o("VideoPlayerNextgendashMediaUtils").snapshotTimeRanges(
                  function () {
                    return c.buffered;
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
      },
      u = s;
    l.default = u;
  },
  98,
);
