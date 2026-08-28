__d(
  "ZenonAudioEchoConfidenceStatsDeriver",
  [
    "EchoConfidenceMetricsManager",
    "ZenonDeltaMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r(
        "EchoConfidenceMetricsManager",
      ).getAndResetEchoConfidenceMetrics();
      if (t) {
        var n = o("ZenonMediaStatsParser").getOrCreateTrackerFromMap(
          e,
          o("ZenonMediaStatsConfig").OUTBOUND_AUDIO_STATS_TRACK_INFO,
        );
        n != null && (s(n), u(n, t));
      }
    }
    function s(e) {
      (e.deltaStat[
        o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_CONFIDENCE
      ] == null &&
        (e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_CONFIDENCE
        ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_DELAY
        ] == null &&
          (e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_DELAY
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_ERL
        ] == null &&
          (e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_ERL
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_RMS
        ] == null &&
          (e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_RMS
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_LPB_RMS
        ] == null &&
          (e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_LPB_RMS
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_ECHO_CROSS_CORRELATION
        ] == null &&
          (e.deltaStat[
            o(
              "ZenonMediaStatsConfig",
            ).DERIVED_METRICS.AUDIO_SEND_ECHO_CROSS_CORRELATION
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_GOLDEN_ECHO_CONFIDENCE
        ] == null &&
          (e.deltaStat[
            o(
              "ZenonMediaStatsConfig",
            ).DERIVED_METRICS.AUDIO_SEND_GOLDEN_ECHO_CONFIDENCE
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_DELAY
        ] == null &&
          (e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_DELAY
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_LT_ECHO_CONFIDENCE
        ] == null &&
          (e.deltaStat[
            o(
              "ZenonMediaStatsConfig",
            ).DERIVED_METRICS.AUDIO_SEND_LT_ECHO_CONFIDENCE
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_LT_ECHO_DELAY_ENTROPY
        ] == null &&
          (e.deltaStat[
            o(
              "ZenonMediaStatsConfig",
            ).DERIVED_METRICS.AUDIO_SEND_LT_ECHO_DELAY_ENTROPY
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_ERL
        ] == null &&
          (e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_ERL
          ] = new (r("ZenonDeltaMediaStat"))()),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_LT_ECHO_FRAMES_PERCENTAGE
        ] == null &&
          (e.deltaStat[
            o(
              "ZenonMediaStatsConfig",
            ).DERIVED_METRICS.AUDIO_SEND_LT_ECHO_FRAMES_PERCENTAGE
          ] = new (r("ZenonDeltaMediaStat"))()));
    }
    function u(e, t) {
      (e.deltaStat[
        o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_CONFIDENCE
      ] &&
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_CONFIDENCE
        ].add(t.echoConfidence),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_DELAY
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_DELAY
          ].add(t.echoDelay),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_ERL
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_ERL
          ].add(t.echoERL),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_RMS
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_RMS
          ].add(t.echoRMS),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_LPB_RMS
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_ECHO_LPB_RMS
          ].add(t.echoLpbRMS),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_ECHO_CROSS_CORRELATION
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS
              .AUDIO_SEND_ECHO_CROSS_CORRELATION
          ].add(t.echoCrossCorrelation),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_GOLDEN_ECHO_CONFIDENCE
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS
              .AUDIO_SEND_GOLDEN_ECHO_CONFIDENCE
          ].add(t.goldenEchoMetric),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_DELAY
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_DELAY
          ].add(t.ltEchoDelay),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_LT_ECHO_CONFIDENCE
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS
              .AUDIO_SEND_LT_ECHO_CONFIDENCE
          ].add(t.ltEchoConfidence),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_LT_ECHO_DELAY_ENTROPY
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS
              .AUDIO_SEND_LT_ECHO_DELAY_ENTROPY
          ].add(t.ltEchoDelayEntropy),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_ERL
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_SEND_LT_ECHO_ERL
          ].add(t.ltEchoERL),
        e.deltaStat[
          o("ZenonMediaStatsConfig").DERIVED_METRICS
            .AUDIO_SEND_LT_ECHO_FRAMES_PERCENTAGE
        ] &&
          e.deltaStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS
              .AUDIO_SEND_LT_ECHO_FRAMES_PERCENTAGE
          ].add(t.ltEchoFramesPercentage));
    }
    l.updateStatsWithDerivedMetric = e;
  },
  98,
);
