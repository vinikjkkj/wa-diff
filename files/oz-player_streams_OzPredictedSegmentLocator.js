__d(
  "oz-player/streams/OzPredictedSegmentLocator",
  [
    "oz-player/streams/OzSegmentLocator",
    "oz-player/streams/OzSegmentUtils",
    "oz-player/utils/OzSourceBufferUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = 0;
      for (var r in e) {
        var o;
        r !== t &&
          (n = Math.max(
            n,
            (o = e[r].lastSkippedToSegmentNumber) != null ? o : 0,
          ));
      }
      return n;
    }
    function s(e, t) {
      var n = null;
      for (var r in e)
        r !== t &&
          e[r].inBufferAheadTimeSince != null &&
          (n =
            n != null
              ? Math.min(n, e[r].inBufferAheadTimeSince)
              : e[r].inBufferAheadTimeSince);
      return n;
    }
    var u = (function () {
      function t(e) {
        this.$5 = {};
        var t = e.dynamicVideoLibrary,
          n = e.liveLatencyManager,
          r = e.loggerProvider,
          o = e.videoNode;
        ((this.$1 = o), (this.$2 = n), (this.$3 = r), (this.$4 = t));
      }
      var n = t.prototype;
      return (
        (n.getSegment = function (t, n, r, o, a, i, l, s, u) {
          var e, c;
          (this.$5[u] == null &&
            (this.$5[u] = {
              lastSkippedToSegmentNumber: null,
              inBufferAheadTimeSince: null,
            }),
            (e = this.$2) == null || e.setEnableCatchup(s));
          var d = this.$6(t, n, r, o, a, i, l, s, u);
          ((c = d.segment) == null ||
            c.getOptions().setSegmentNumDecisionTime(Date.now()),
            d.segment === null &&
              this.$3
                .getOperationLogger("segment_locator")
                .setInitiator(d.initiator)
                .setReason(d.reason)
                .setType(u)
                .setUserInfo(d.userInfo)
                .log());
          var m = this.$4;
          if (d.segment && m != null) {
            var p = d.segment.getOptions();
            p.setIsDVLEnabled(m.shouldRequestDynamicInfo(u));
          }
          return d.segment;
        }),
        (n.$6 = function (n, r, a, i, l, u, c, d, m) {
          var t,
            p,
            _,
            f,
            g,
            h = r.getCurrentTime(),
            y = this.$2 == null ? !1 : this.$2.shouldEnableCursorBasedCatchup(),
            C =
              i != null
                ? o(
                    "oz-player/utils/OzSourceBufferUtil",
                  ).getTotalBufferAheadOfPosition(
                    i.getBufferedRanges(),
                    r.getCurrentTime(),
                    c,
                  )
                : { bufferAheadSec: 0, bufferedOffset: 0 },
            b = C.bufferAheadSec,
            v = C.bufferedOffset,
            S = null,
            R = null,
            L = this.$2 ? this.$2.enabled() : !0,
            E = n.getPredictedSegmentAfter(l),
            k = o(
              "oz-player/streams/OzSegmentUtils",
            ).getSegmentForSequenceNumber(
              n,
              c.getNumber("pdash_download_cursor_between_catchups_seg") > 0
                ? e(this.$5)
                : e(this.$5, m),
            ),
            I = !0,
            T = null;
          if (
            y &&
            d &&
            ((t = E) == null ? void 0 : t.getSequenceNumber()) != null &&
            ((p = (_ = E) == null ? void 0 : _.getSequenceNumber()) != null
              ? p
              : 0) <=
              ((f = k == null ? void 0 : k.getSequenceNumber()) != null ? f : 0)
          ) {
            var D, x, $;
            ((E = k),
              (S = "paired_catchup"),
              this.$3
                .getOperationLogger("segment_locator")
                .setInitiator(S)
                .setUserInfo({
                  bufferAheadSec: String(b),
                  bufferedOffset: String(v),
                })
                .setLength(
                  ((D = k == null ? void 0 : k.getSequenceNumber()) != null
                    ? D
                    : 0) -
                    ((x = ($ = E) == null ? void 0 : $.getSequenceNumber()) !=
                    null
                      ? x
                      : 0),
                )
                .setType(m)
                .log(),
              (I = !1),
              (T = S));
          } else if (
            y &&
            d &&
            L &&
            E != null &&
            (g = this.$2) != null &&
            g.isBehindPreferredLiveHeadLatencyWithTolerance()
          ) {
            var P, N;
            if (
              this.$2 &&
              b > this.$2.getPreferredLiveHeadLatencySec() &&
              v == 0
            )
              return {
                segment: null,
                initiator: "catchup_pause",
                userInfo: {
                  bufferAheadSec: String(b),
                  bufferedOffset: String(v),
                },
              };
            var M = n.getEndingSegment(),
              w = o("oz-player/streams/OzSegmentUtils").getMaxSegment([M, E]),
              A =
                c.getNumber("pdash_download_cursor_between_catchups_seg") ===
                  0 ||
                ((P = k == null ? void 0 : k.getSequenceNumber()) != null
                  ? P
                  : 0) +
                  c.getNumber("pdash_download_cursor_between_catchups_seg") <
                  ((N = M == null ? void 0 : M.getSequenceNumber()) != null
                    ? N
                    : 0);
            if (A) {
              var F, O, B;
              if (
                ((F = w == null ? void 0 : w.getSequenceNumber()) != null
                  ? F
                  : 0) >
                ((O = (B = E) == null ? void 0 : B.getSequenceNumber()) != null
                  ? O
                  : 0)
              ) {
                var W, q, U, V;
                ((this.$5[m].lastSkippedToSegmentNumber =
                  (W = w == null ? void 0 : w.getSequenceNumber()) != null
                    ? W
                    : 0),
                  this.$3
                    .getOperationLogger("segment_locator")
                    .setInitiator("catchup")
                    .setUserInfo({
                      bufferAheadSec: String(b),
                      bufferedOffset: String(v),
                    })
                    .setLength(
                      ((q = w == null ? void 0 : w.getSequenceNumber()) != null
                        ? q
                        : 0) -
                        ((U =
                          (V = E) == null ? void 0 : V.getSequenceNumber()) !=
                        null
                          ? U
                          : 0),
                    )
                    .setType(m)
                    .log());
              }
              ((E = w), (S = "catchup"), (I = !1), (T = S));
            }
          } else if (l == null) {
            var H, G;
            ((E = n.getSegmentByTime(h)), (S = "1st_run"));
            var z = n.getTimeRanges();
            ((R = {
              approx: String(n.canApproximateId()),
              ranges: String(z.length),
              mpdStartTime:
                z.length > 0 ? String(z[z.length - 1].startTime) : null,
              mpdEndTime: z.length > 0 ? String(z[z.length - 1].endTime) : null,
            }),
              (this.$5[m].lastSkippedToSegmentNumber =
                (H = (G = E) == null ? void 0 : G.getSequenceNumber()) != null
                  ? H
                  : 0));
          }
          if ((I && ((I = L), (T = "stream_state")), I && b > a))
            return (
              this.$5[m].inBufferAheadTimeSince == null &&
                (this.$5[m].inBufferAheadTimeSince = Date.now()),
              {
                segment: null,
                initiator: "buffer_ahead_rule",
                userInfo: {
                  bufferAheadSec: String(b),
                  bufferedOffset: String(v),
                  lastMaxSegNum: String(e(this.$5, m)),
                  segment: E ? String(E.getSequenceNumber()) : null,
                  computedBufferAheadTarget: String(a),
                },
              }
            );
          !I &&
            b > a &&
            this.$3
              .getOperationLogger("segment_locator")
              .setUserInfo({
                bufferAheadSec: String(b),
                bufferedOffset: String(v),
                computedBufferAheadTarget: String(a),
              })
              .setReason("disabled_buffer_ahead_rule:" + (T || ""))
              .setType(m)
              .log();
          var j = (u && u.getSequenceNumber()) || 0,
            K = (E && E.getSequenceNumber()) || 0;
          if (E && u && j >= K) {
            var Q = o(
              "oz-player/streams/OzSegmentLocator",
            ).getEndingSequenceNumber(n);
            return (Q || 0) >= j
              ? { segment: u }
              : {
                  segment: null,
                  initiator: "mpd_refresh",
                  userInfo: { leSegNum: String(j) },
                };
          }
          var X = i
              ? o(
                  "oz-player/utils/OzSourceBufferUtil",
                ).getTotalInBufferedRanges(i.getBufferedRanges())
              : 0,
            Y = i
              ? o(
                  "oz-player/utils/OzSourceBufferUtil",
                ).getTotalBufferAheadOfPosition(
                  i.getBufferedRanges(),
                  r.getCurrentTime(),
                  c,
                ).bufferAheadSec
              : 0,
            J = s(this.$5, m),
            Z = Date.now();
          if (
            (c.getNumber("download_cursor_total_buffer_max_sec") != 0 &&
              c.getNumber("download_cursor_total_buffer_max_sec") < Y) ||
            (c.getNumber("download_cursor_buffer_ahead_time_max_sec") != 0 &&
              J != null &&
              c.getNumber("download_cursor_buffer_ahead_time_max_sec") <
                (Z - J) / 1e3)
          ) {
            var ee, te;
            ((this.$5[m].lastSkippedToSegmentNumber =
              (ee = (te = E) == null ? void 0 : te.getSequenceNumber()) != null
                ? ee
                : 0),
              this.$3
                .getOperationLogger("segment_locator")
                .setUserInfo({
                  bufferAheadSec: String(b),
                  bufferedOffset: String(v),
                  totalBufferedSec: String(X),
                  computedBufferAheadTarget: String(a),
                  inBufferAheadElapsedTime: String(
                    (Z - (J != null ? J : 0)) / 1e3,
                  ),
                })
                .setReason("force_paired_catchup")
                .setType(m)
                .log());
          }
          return (
            (this.$5[m].inBufferAheadTimeSince = null),
            { segment: E, initiator: S || void 0, userInfo: R || void 0 }
          );
        }),
        t
      );
    })();
    l.OzPredictedSegmentLocator = u;
  },
  98,
);
