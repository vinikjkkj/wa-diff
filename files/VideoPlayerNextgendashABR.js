__d(
  "VideoPlayerNextgendashABR",
  [
    "QualityScoreUtils",
    "SidneeAbrAlgorithm",
    "VideoPlayerNextgendashNetworkDiagnosticsUtils",
    "oz-player/utils/OzBufferingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i) {
      var l = a === "csvqm";
      return e.map(function (e) {
        var a, s;
        if (i)
          s = l
            ? e.playbackResolutionCsvqmScoreCurveParsed
            : e.playbackResolutionMosScoreCurveParsed;
        else {
          var u = l
            ? e.playbackResolutionCsvqmScoreCurve
            : e.playbackResolutionMosScoreCurve;
          s = o("QualityScoreUtils").parseQualityScoreCurve(String(u));
        }
        var c =
          s != null
            ? o("QualityScoreUtils").calculateQualityScore(s, t, n, r)
            : 0;
        return {
          bandwidth: e.bandwidth,
          displayLabel: (a = e.qualityLabel) != null ? a : "",
          height: e.height,
          id: e.representationId,
          qualityScore: c,
          uploadQuality: 66,
          width: e.width,
        };
      });
    }
    function s(e, t) {
      var n = e.videoPreferredMinimumSmallestDimension,
        r = t;
      if (t.length > 0 && n > 0) {
        var o = t[0];
        ((r = t.filter(function (e) {
          var t = Math.min(e.width, e.height),
            r = Math.min(o.width, o.height);
          return (t > r && (o = e), t >= n);
        })),
          r.length === 0 && (r = [o]));
      }
      return r;
    }
    var u = 8e3;
    function c(e) {
      if (e.isLookAheadFromPlayhead) {
        var t = 2 * u;
        return {
          isAudioTrack: !1,
          playbackDurationInfo: {
            bufferDurationMs: e.bufferAheadMs,
            playbackPositionMs: e.lookAheadMs,
            videoDurationMs: t,
          },
          totalWindowDurationMs: e.lookAheadMs,
          unbufferedWindowDurationMs: e.lookAheadMs - e.bufferAheadMs,
        };
      }
      var n = e.playheadMediaTimeSec * 1e3,
        r = e.bufferAheadMs + n;
      return {
        isAudioTrack: !1,
        playbackDurationInfo: {
          bufferDurationMs: r,
          playbackPositionMs: n,
          videoDurationMs: e.mediaDurationWithFallbackMs,
        },
        totalWindowDurationMs: e.lookAheadMs,
        unbufferedWindowDurationMs: e.lookAheadMs - r,
      };
    }
    function d(t, n) {
      var r,
        a,
        i,
        l,
        u = n.abrConfig,
        d = n.bandwidthDiagnostics,
        m = n.cacheQualityScoreInRepresentation,
        p = n.devicePixelRatio,
        _ = n.isDocumentHidden,
        f = n.isLookAheadFromPlayhead,
        g = f === void 0 ? !1 : f,
        h = n.mediaDurationSec,
        y = n.playerDimensions,
        C = n.playheadMediaTimeSec,
        b = n.prefetchResult,
        v = n.sourceBufferBufferedRangesSec,
        S = n.useSimpleBandwidthEstimate,
        R = s(u, t),
        L = u.sidneeConfig,
        E = R.every(function (e) {
          return e.playbackResolutionCsvqmScoreCurve != null;
        })
          ? "csvqm"
          : "mos",
        k = e(R, y, L.useDpr, p, E, m),
        I =
          h === "NOT_A_NUMBER" || isNaN(h) || !isFinite(h)
            ? L.defaultVideoDurationMs
            : h * 1e3,
        T =
          o("oz-player/utils/OzBufferingUtils").getBufferAheadFromCurrentTime(
            C,
            (r = v.map(function (e) {
              var t = e[0],
                n = e[1];
              return { endTime: n, startTime: t };
            })) != null
              ? r
              : [],
          ) * 1e3,
        D = c({
          bufferAheadMs: T,
          isLookAheadFromPlayhead: g,
          lookAheadMs: L.lookAheadMs,
          mediaDurationWithFallbackMs: I,
          playheadMediaTimeSec: C,
        }),
        x = o("SidneeAbrAlgorithm").sidneeAbrSelectQualityImpl(
          k,
          L,
          D,
          o(
            "VideoPlayerNextgendashNetworkDiagnosticsUtils",
          ).getBandwidthEstimateFn(d, S),
        ),
        $ =
          (a = R.find(function (e) {
            return e.representationId === x.chosenRepresentation.id;
          })) != null
            ? a
            : null,
        P = {
          bestRepresentationId:
            (i = $ == null ? void 0 : $.representationId) != null ? i : null,
          bestRepresentationIsPrefetched:
            (l =
              b == null
                ? void 0
                : b.prefetchedRepresentationIds.includes(
                    x.chosenRepresentation.id,
                  )) != null
              ? l
              : !1,
          hasMadeInitialDecision: !0,
          lastEvaluationReason: x.decisionReasonDetails,
        };
      return { bestRepresentation: $, nextABRState: P };
    }
    ((l.filterVideoRepresentationsByVideoPreferredMinimumSmallestDimension = s),
      (l.internal_getObservingWindowPlayerInfo = c),
      (l.evaluateVideoPlayerNextgendashABRForVideo = d));
  },
  98,
);
