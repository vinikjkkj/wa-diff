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
    function u(t, n) {
      var r,
        a,
        i,
        l,
        u = n.abrConfig,
        c = n.bandwidthDiagnostics,
        d = n.cacheQualityScoreInRepresentation,
        m = n.devicePixelRatio,
        p = n.isDocumentHidden,
        _ = n.mediaDurationSec,
        f = n.playerDimensions,
        g = n.playheadMediaTimeSec,
        h = n.prefetchResult,
        y = n.sourceBufferBufferedRangesSec,
        C = n.useSimpleBandwidthEstimate,
        b = s(u, t),
        v = u.sidneeConfig,
        S = b.every(function (e) {
          return e.playbackResolutionCsvqmScoreCurve != null;
        })
          ? "csvqm"
          : "mos",
        R = e(b, f, v.useDpr, m, S, d),
        L =
          _ === "NOT_A_NUMBER" || isNaN(_) || !isFinite(_)
            ? v.defaultVideoDurationMs
            : _ * 1e3,
        E =
          o("oz-player/utils/OzBufferingUtils").getBufferAheadFromCurrentTime(
            g,
            (r = y.map(function (e) {
              var t = e[0],
                n = e[1];
              return { endTime: n, startTime: t };
            })) != null
              ? r
              : [],
          ) * 1e3,
        k = E + g * 1e3,
        I = v.lookAheadMs - k,
        T = {
          isAudioTrack: !1,
          playbackDurationInfo: {
            bufferDurationMs: k,
            playbackPositionMs: g * 1e3,
            videoDurationMs: L,
          },
          totalWindowDurationMs: v.lookAheadMs,
          unbufferedWindowDurationMs: I,
        },
        D = o("SidneeAbrAlgorithm").sidneeAbrSelectQualityImpl(
          R,
          v,
          T,
          o(
            "VideoPlayerNextgendashNetworkDiagnosticsUtils",
          ).getBandwidthEstimateFn(c, C),
        ),
        x =
          (a = b.find(function (e) {
            return e.representationId === D.chosenRepresentation.id;
          })) != null
            ? a
            : null,
        $ = {
          bestRepresentationId:
            (i = x == null ? void 0 : x.representationId) != null ? i : null,
          bestRepresentationIsPrefetched:
            (l =
              h == null
                ? void 0
                : h.prefetchedRepresentationIds.includes(
                    D.chosenRepresentation.id,
                  )) != null
              ? l
              : !1,
          hasMadeInitialDecision: !0,
          lastEvaluationReason: D.decisionReasonDetails,
        };
      return { bestRepresentation: x, nextABRState: $ };
    }
    ((l.filterVideoRepresentationsByVideoPreferredMinimumSmallestDimension = s),
      (l.evaluateVideoPlayerNextgendashABRForVideo = u));
  },
  98,
);
