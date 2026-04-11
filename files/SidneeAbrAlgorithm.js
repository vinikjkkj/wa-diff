__d(
  "SidneeAbrAlgorithm",
  ["$InternalEnum", "PolynomialCurve", "PriorityQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return t.riskRewardRatio !== n.riskRewardRatio
          ? t.riskRewardRatio < n.riskRewardRatio
          : t.riskResult.adjustedBitrateResult.rawBitrate <
              n.riskResult.adjustedBitrateResult.rawBitrate;
      },
      s = n("$InternalEnum")({
        RISK_REWARD_RATIO: "rrr",
        TOO_RISKY_REP_BITRATE: "trbr",
        ALL_REPS_ARE_TOO_RISKY: "arrtr",
        RISK_SCORE: "risk",
        REWARD_SCORE: "reward",
        ZERO_QUALITY_SCORES: "zqs",
      }),
      u = function (t, n) {
        var e = [t];
        for (var r of n) {
          var o = r.detailKey,
            a = r.msg,
            i = o;
          e.push(i, ":", a, ";");
        }
        return e.join("");
      },
      c = function (n, o, a, i) {
        var t = 0,
          l = "[sidnee]",
          c = new (r("PriorityQueue"))(e),
          m = n.slice().sort(function (e, t) {
            return e.bandwidth - t.bandwidth;
          });
        if (
          m.every(function (e) {
            return e.qualityScore === 0;
          })
        ) {
          l = u(l, [{ detailKey: s.ZERO_QUALITY_SCORES, msg: "1" }]);
          for (var _ = m.length - 1; _ >= 0; _--) {
            var f = m[_],
              g = p(f, o, a.playbackDurationInfo, i);
            if (g.riskScore <= 1)
              return {
                chosenRepresentation: f,
                decisionReasonDetails: l,
                finalAdjustedBitrate: g.adjustedBitrateResult.adjustedBitrate,
                finalBandwidthEstimate: g.bandwidthEstimation,
                finalRewardScore: 1,
                finalRiskRewardRatio: 1,
                finalRiskScore: g.riskScore,
                nextBitrate: t,
              };
          }
        }
        var h = m[0],
          y = d(h, o, a, i);
        for (var C of m) {
          t = C.bandwidth;
          var b = d(C, o, a, i);
          b.isTooRisky
            ? (l = u(l, [
                {
                  detailKey: s.TOO_RISKY_REP_BITRATE,
                  msg: b.rep.bandwidth.toString(),
                },
              ]))
            : c.offer(b);
        }
        if (c.size() === 0)
          return (
            (l = u(l, [
              { detailKey: s.ALL_REPS_ARE_TOO_RISKY, msg: "true" },
              {
                detailKey: s.RISK_SCORE,
                msg: y.riskResult.riskScore.toFixed(o.riskRatioRoundDigits),
              },
              {
                detailKey: s.REWARD_SCORE,
                msg: y.rewardResult.rewardScore.toFixed(
                  o.rewardRatioRoundDigits,
                ),
              },
              {
                detailKey: s.RISK_REWARD_RATIO,
                msg: y.riskRewardRatio.toFixed(o.riskRewardRatioRoundDigits),
              },
            ])),
            {
              chosenRepresentation: y.rep,
              decisionReasonDetails: l,
              finalAdjustedBitrate:
                y.riskResult.adjustedBitrateResult.adjustedBitrate,
              finalBandwidthEstimate: y.riskResult.bandwidthEstimation,
              finalRewardScore: parseFloat(
                y.rewardResult.rewardScore.toFixed(o.rewardRatioRoundDigits),
              ),
              finalRiskRewardRatio: parseFloat(
                (1).toFixed(o.riskRewardRatioRoundDigits),
              ),
              finalRiskScore: parseFloat(
                y.riskResult.riskScore.toFixed(o.riskRatioRoundDigits),
              ),
              nextBitrate: t,
            }
          );
        var v = c.peek();
        c.clear();
        var S = [
          { detailKey: s.ALL_REPS_ARE_TOO_RISKY, msg: "false" },
          {
            detailKey: s.RISK_SCORE,
            msg: v.riskResult.riskScore.toFixed(o.riskRatioRoundDigits),
          },
          {
            detailKey: s.REWARD_SCORE,
            msg: v.rewardResult.rewardScore.toFixed(o.rewardRatioRoundDigits),
          },
          {
            detailKey: s.RISK_REWARD_RATIO,
            msg: v.riskRewardRatio.toFixed(o.riskRewardRatioRoundDigits),
          },
        ];
        return (
          (l = u(l, S)),
          {
            chosenRepresentation: v.rep,
            decisionReasonDetails: l,
            finalAdjustedBitrate:
              v.riskResult.adjustedBitrateResult.adjustedBitrate,
            finalBandwidthEstimate: v.riskResult.bandwidthEstimation,
            finalRewardScore: v.rewardResult.rewardScore,
            finalRiskRewardRatio: v.riskRewardRatio,
            finalRiskScore: v.riskResult.riskScore,
            nextBitrate: t,
          }
        );
      },
      d = function (t, n, r, o) {
        var e = p(t, n, r.playbackDurationInfo, o),
          a = m(t, n);
        a.rewardScore <= 0 &&
          (a = babelHelpers.extends({}, a, { rewardScore: 1 }));
        var i = e.riskScore / a.rewardScore,
          l = n.maxConservativeRisk;
        return {
          isTooRisky: e.riskScore > l,
          rep: t,
          rewardResult: a,
          riskResult: e,
          riskRewardRatio: i,
          riskThreshold: l,
        };
      },
      m = function (t, n) {
        var e = t.qualityScore,
          r = t.uploadQuality,
          a =
            r > n.badUploadQualityThreshold || r <= 0
              ? n.goodUploadQualityRewardCurve
              : n.badUploadQualityRewardCurve,
          i =
            r > n.badUploadQualityThreshold || r <= 0
              ? n.goodUploadQualityRewardCurveFallback
              : n.badUploadQualityRewardCurveFallback,
          l = o("PolynomialCurve").PolynomialCurve.createFromStringWithFallback(
            a,
            i,
          ),
          s = parseFloat(l.interpolate(e).toFixed(n.rewardRatioRoundDigits)),
          u = r > n.badUploadQualityThreshold || r <= 0 ? "good" : "bad";
        return {
          qualityScore: e,
          rewardScore: s,
          uploadMos: r,
          uploadQualityClass: u,
        };
      },
      p = function (t, n, r, a) {
        var e,
          i = o("PolynomialCurve").PolynomialCurve.createFromStringWithFallback(
            n.riskCurve,
            n.riskCurveFallback,
          ),
          l = _(
            t,
            n.encodingRisk,
            r.playbackPositionMs,
            r.bufferDurationMs,
            r.videoDurationMs,
            n.lookAheadMs,
            n.minBitrateMultiplier,
          ),
          s = l.adjustedBitrate;
        if (s <= 0)
          return {
            adjustedBitrateResult: l,
            bandwidthConfidencePct: -1,
            bandwidthEstimation: -1,
            riskScore: i.maxY(),
          };
        for (
          var u = Math.floor((s * n.avgSegmentDurationMs) / 8e3),
            c = -1,
            d = n.maxBandwidthConfidencePct,
            m = n.maxBandwidthConfidencePct;
          m >= n.minBandwidthConfidencePct;
          m--
        )
          if (((c = a(u, m)), c <= 0 || (0 < c && c >= s))) {
            d = m;
            break;
          }
        if (c <= 0)
          return {
            adjustedBitrateResult: l,
            bandwidthConfidencePct: -1,
            bandwidthEstimation: c,
            riskScore: i.maxY(),
          };
        if (c < s) {
          var p = (c - s) / s;
          e = i.interpolate(p);
        } else {
          var f =
            (1 * (d - n.minBandwidthConfidencePct)) /
            (n.maxBandwidthConfidencePct - n.minBandwidthConfidencePct);
          e = parseFloat(i.interpolate(f).toFixed(n.riskRatioRoundDigits));
        }
        return {
          adjustedBitrateResult: l,
          bandwidthConfidencePct: d,
          bandwidthEstimation: c,
          riskScore: e,
        };
      },
      _ = function (t, n, r, o, a, i, l) {
        var e = n * t.bandwidth,
          s = a - r - o,
          u = Math.min(a / 1e3, (s + i) / 1e3),
          c = a > 0 ? u / (a / 1e3) : 1,
          d = Math.max(c, l),
          m = e * d;
        return {
          adjustedBitrate: m,
          encodingRisk: n,
          overallMultiplier: d,
          rawBitrate: t.bandwidth,
        };
      };
    ((l.sidneeAbrSelectQualityImpl = c),
      (l.calculateRiskRewardResult = d),
      (l.calculateRewardResult = m),
      (l.calculateRiskResult = p));
  },
  98,
);
