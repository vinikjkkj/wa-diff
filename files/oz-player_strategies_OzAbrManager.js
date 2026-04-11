__d(
  "oz-player/strategies/OzAbrManager",
  [
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/strategies/OzPlaybackConfidenceUtils",
    "oz-player/utils/OzAbrUtils",
    "oz-player/utils/OzBufferingUtils",
    "oz-player/utils/OzPlaybackRestrictionsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o, a, i, l, s) {
        ((this.$2 = 0),
          (this.$3 = Date.now()),
          (this.$4 = !1),
          (this.$10 = null),
          (this.$1 = e),
          (this.$5 = t),
          (this.$6 = this.$15(t, n)),
          (this.$7 = r),
          (this.$8 = o),
          (this.$11 = a),
          (this.$12 = i),
          (this.$13 = l),
          (this.$14 = s),
          this.$1.getBool("enable_abr_logging") &&
            this.$14
              .getOperationLogger("abr_initialized")
              .setResult("success")
              .setUserInfo({
                newRepresentationIds: n
                  .map(function (e) {
                    return e.getID();
                  })
                  .join(","),
                newCodecs: n
                  .map(function (e) {
                    return e.getCodecs();
                  })
                  .join("|"),
                newDisplayLabels: n
                  .map(function (e) {
                    return e.getDisplayLabel();
                  })
                  .join(","),
              })
              .setRepresentationID(t.getID())
              .setType("video")
              .setInitiator("OzAbrManager")
              .log());
      }
      var t = e.prototype;
      return (
        (t.setSourceBuffer = function (t) {
          this.$9 = t;
        }),
        (t.$15 = function (t, n) {
          var e = this.$1.getNumber("abr_restrict_from_index"),
            r = this.$1.getNumber("abr_restrict_to_index");
          if (r === 0 && e === 0) return n;
          var o = n.findIndex(function (e) {
            return t.getID() === e.getID();
          });
          return o === -1
            ? n
            : n.filter(function (t, n) {
                return n - o >= e && n - o <= r;
              });
        }),
        (t.$16 = function (t) {
          var e = o("oz-player/utils/OzAbrUtils").excludeLargeRepresentations(
            t,
            this.$12(),
            this.$11,
            {
              resolutionConstraintFactor: this.$1.getNumber(
                "resolution_constraint_factor",
              ),
            },
          );
          return (
            (e = o(
              "oz-player/utils/OzPlaybackRestrictionsUtils",
            ).applyVideoPlaybackRestrictions(this.$7, this.$12(), e)),
            e
          );
        }),
        (t.getBestRepresentation = function (t) {
          var e,
            n,
            a,
            i = (e = t == null ? void 0 : t.length) != null ? e : null,
            l =
              (n =
                (a = this.$9) == null
                  ? void 0
                  : a.getSourceBufferState().getBufferedRanges()) != null
                ? n
                : null,
            s = this.$8.getCurrentTime(),
            u = o(
              "oz-player/utils/OzBufferingUtils",
            ).getBufferAheadFromCurrentTime(s, l),
            c = o("oz-player/utils/OzAbrUtils").getReasonToPreventEvaluation(
              this.$1,
              this.$4,
              u,
              r("oz-player/networks/OzBandwidthEstimator").getSampleCount(),
              this.$2,
              this.$3,
            );
          if (c != null)
            return (
              (this.$10 = c),
              this.$1.getBool("enable_abr_logging") &&
                this.$14
                  .getOperationLogger("abr_best_representation_selected")
                  .setResult("failed")
                  .setReason(this.$10)
                  .setType("video")
                  .setInitiator("OzAbrManager")
                  .log(),
              this.$5
            );
          var d = Date.now();
          this.$2 = d;
          var m = r(
              "oz-player/networks/OzBandwidthEstimator",
            ).getAdjustedBandwidth(this.$1.getLegacyConfig()),
            p = this.$16(this.$6),
            _ = this.$17(p, m, u, i),
            f = p[0];
          if (((_ = _ || f), this.$18(u, _)))
            return (
              (this.$10 = "high_buffer"),
              this.$1.getBool("enable_abr_logging") &&
                this.$14
                  .getOperationLogger("abr_best_representation_selected")
                  .setResult("failed")
                  .setUserInfo({
                    filteredRepresentationIds: p
                      .map(function (e) {
                        return e.getID();
                      })
                      .join(","),
                  })
                  .setPreviousRepresentationID(this.$5.getID())
                  .setReason(this.$10)
                  .setType("video")
                  .setInitiator("OzAbrManager")
                  .log(),
              this.$5
            );
          var g = this.$5;
          return (
            g !== _ && ((this.$4 = !0), (this.$3 = d), (this.$5 = _)),
            (this.$10 = "bandwidth"),
            this.$1.getBool("enable_abr_logging") &&
              this.$14
                .getOperationLogger("abr_best_representation_selected")
                .setResult("success")
                .setUserInfo({
                  filteredRepresentationIds: p
                    .map(function (e) {
                      return e.getID();
                    })
                    .join(","),
                })
                .setRepresentationID(_.getID())
                .setPreviousRepresentationID(g == null ? void 0 : g.getID())
                .setReason(this.$10)
                .setType("video")
                .setInitiator("OzAbrManager")
                .log(),
            _
          );
        }),
        (t.$17 = function (t, n, r, a) {
          a === void 0 && (a = null);
          for (var e = null, i = 0; i < t.length; i++) {
            var l = o(
              "oz-player/strategies/OzPlaybackConfidenceUtils",
            ).getPlaybackConfidence(
              t[i],
              n,
              r,
              this.$1.getNumber("low_buffer_bandwidth_target_threshold"),
              this.$1.getNumber("low_buffer_bandwidth_target_increase_factor"),
              a,
            );
            l > this.$1.getNumber("abr_confidence_threshold") &&
              (!e || e.getBandwidth() < t[i].getBandwidth()) &&
              (e = t[i]);
          }
          return e;
        }),
        (t.$18 = function (t, n) {
          var e = this.$1.getNumber("abr_prevent_down_switch_buffer_threshold");
          return e > 0 && t >= e && this.$5.getBandwidth() > n.getBandwidth();
        }),
        (t.getLastEvaluationReason = function () {
          return this.$10;
        }),
        (t.updateRepresentations = function (t) {
          var e = this,
            n = this.$6;
          this.$6 = t;
          var r = this.$6.find(function (t) {
              return t.getDisplayLabel() === e.$5.getDisplayLabel();
            }),
            o = this.$5;
          ((this.$5 = r != null ? r : this.$6[0]),
            this.$1.getBool("enable_abr_logging") &&
              this.$14
                .getOperationLogger("abr_representations_updated")
                .setResult("success")
                .setUserInfo({
                  previousRepresentationIds: n
                    .map(function (e) {
                      return e.getID();
                    })
                    .join(","),
                  newRepresentationIds: t
                    .map(function (e) {
                      return e.getID();
                    })
                    .join(","),
                  newCodecs: t
                    .map(function (e) {
                      return e.getCodecs();
                    })
                    .join("|"),
                  newDisplayLabels: t
                    .map(function (e) {
                      return e.getDisplayLabel();
                    })
                    .join(","),
                })
                .setRepresentationID(this.$5.getID())
                .setPreviousRepresentationID(o == null ? void 0 : o.getID())
                .setReason(this.$10)
                .setType("video")
                .setInitiator("OzAbrManager")
                .log());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
