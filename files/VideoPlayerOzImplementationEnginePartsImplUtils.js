__d(
  "VideoPlayerOzImplementationEnginePartsImplUtils",
  [
    "OzSystemicRiskABRManager",
    "OzWidevineDrmProvider",
    "cr:2964",
    "gkx",
    "justknobx",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/strategies/OzBufferingDetector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /(livestream-)?lookaside\.(facebook|workplace)\.com$/;
    function s(t) {
      return e.test(t.getDomain());
    }
    function u(e, t, n, o, a, i) {
      if (a.current == null) {
        var l = !0,
          s = function () {
            if (l) return !1;
            var e = a.current !== u;
            return !1;
          },
          u = new (r("oz-player/strategies/OzBufferingDetector"))(
            e,
            n,
            function () {
              var e = o.getCurrentState(),
                n = e.controlledState;
              return n.streamEnded ? t.getDuration() : 1 / 0;
            },
          );
        ((a.current = u), (l = !1));
        var c = function (t) {
            if (!s()) {
              o.dispatch({
                payload: { bufferingType: t },
                type: "buffering_begin_requested",
              });
              var e = n.getNumber("ull_fallback_stall_count", 0);
              if (e > 0) {
                var r = i.getLoggerState().stallCountTotal;
                (n.getBool("fix_ull_fallback_stall_count", !1) &&
                  (r = i.getLoggerState().inPlayStallCount200ms),
                  o.getCurrentState().controlledState.latencyLevel ===
                    "ultra-low" &&
                    r > e &&
                    o.dispatch({
                      payload: {
                        latencyLevel: "low",
                        ullIneligibilityReason: null,
                      },
                      type: "implementation_set_latency_level_requested",
                    }));
              }
            }
          },
          d = function (t) {
            s() ||
              o.dispatch({
                payload: { domEventPerfTimestamp: t.domEventPerfTimestamp },
                type: "buffering_end_requested",
              });
          };
        (u.addListener("enterBuffering", c),
          u.addListener("leaveBuffering", d));
      }
    }
    function c(e) {
      var t = e.accessToken,
        n = e.graphQLVideoDRMInfo,
        o = e.videoFBID,
        a = [];
      if (n && o != null) {
        var i = r("justknobx")._("717") ? null : n.widevineCert;
        a.push(
          new (r("OzWidevineDrmProvider"))(
            o,
            n.graphApiVideoLicenseUri,
            n.videoLicenseUriMap,
            t,
            i != null ? i : null,
          ),
        );
      }
      return a;
    }
    function d(e) {
      var t = e.VideoPlayerShakaPerformanceLoggerClass,
        n = e.accessToken,
        r = e.disableLogging,
        o = e.getApproximateFBLSToPlayerDisplayLatency,
        a = e.getBandwidthEstimate,
        i = e.getPlayerDimensions,
        l = e.getPlayerFormat,
        s = e.playbackIsLiveStreaming,
        u = e.playerInstanceCount,
        c = e.playerInstanceKey,
        d = e.playerSuborigin,
        m = e.playerVersion,
        p = e.videoElement,
        _ = e.videoFBID,
        f = e.videoPlayerShakaPerformanceLoggerBuilder;
      if (r || (!f && (!t || !t.shouldInitialize()))) return [];
      var g = {
        accessToken: n,
        getApproximateFBLSToPlayerDisplayLatency: o,
        getBandwidthEstimate: a,
        getPlayerDimensions: i,
        getPlayerFormat: l,
        isLive: s,
        isServableViaFbms: !1,
        playerInstanceCount: u,
        playerOrigin: null,
        playerSuborigin: d,
        playerVersion: m,
        representationId: null,
        uniqueID: c,
        video: p,
        videoID: _ != null ? _ : "",
      };
      return f != null ? [f.build(g)] : t ? [new t(g)] : [];
    }
    function m(e, t) {
      return t > 0
        ? (t / 1e3) * -1
        : e.getNumber("live_initial_playback_position", 0);
    }
    function p(e, t, n) {
      return t > 0 && n > 0
        ? (t + n) / 1e3
        : e.getNumber("livehead_fall_behind_block_threshold", 0);
    }
    function _(e, t) {
      return t > 0
        ? t / 2 / 1e3
        : e.getNumber("live_time_range_block_margin", 0);
    }
    function f(e) {
      return function (t, o, a, i, l, s, u, c, d) {
        return !e && n("cr:2964") != null
          ? new (n("cr:2964"))(t, o, a, i, l, s, u, c, d)
          : t.getLegacyConfig().getBool("use_systemic_risk_abr", !1)
            ? new (r("OzSystemicRiskABRManager"))(t, o, a, i, l, s, u, c, d)
            : null;
      };
    }
    function g(e, t) {
      var n = t.experimentationConfig,
        o = t.getCurrentVideoRepresentation,
        a = t.getOzCDNSignedQueryParams,
        i = t.isClientTriggeredTraceEnabled,
        l = t.playbackIsLiveStreaming,
        s = t.playbackSessionId,
        u = t.shouldRefresh403,
        c = e.getQueryData(),
        d;
      if (
        l &&
        ((d = {}), n.getBool("server_side_abr_send_client_estimates", !1))
      ) {
        var m = r(
          "oz-player/networks/OzBandwidthEstimator",
        ).getBandwidthDiagnostics(n);
        m &&
          (d = babelHelpers.extends({}, d, {
            _nc_bwe: String(m.bandwidthEstimate),
            _nc_bwe_std: String(m.bandwidthStandardDeviation),
            _nc_ttfb: String(m.timeToFirstByteMsEstimate),
            _nc_ttfb_std: String(m.timeToFirstByteMsStandardDeviation),
          }));
        var p = o();
        p &&
          (d = babelHelpers.extends({}, d, {
            _nc_abr_bitrate: String(p.getBandwidth()),
            _nc_abr_qlabel: p.getDisplayLabel(),
          }));
      }
      var _ = n.getNumber("live_video_chunk_duration", 0),
        f = n.getBool("use_bandwidth_estimate_from_headers_in_abr", !1),
        g = f
          ? r(
              "oz-player/networks/OzBandwidthEstimator",
            ).hasRecentBandwidthEstimateFromHeader()
          : !1;
      if (
        (l &&
          _ > 0 &&
          g &&
          (d = babelHelpers.extends({}, d, { chk_dur: _.toString(10) })),
        r("gkx")("24354") &&
          c.uss != null &&
          c.odm != null &&
          (d = babelHelpers.extends({}, d, { manual_redirect: "1" })),
        i && (d = babelHelpers.extends({}, d, { _nc_psid: s })),
        u)
      ) {
        var h = a();
        if (h != null) {
          var y = e.getDomain() + e.getPath(),
            C = h.get(y);
          if (C != null)
            for (var b in C) {
              var v;
              d = babelHelpers.extends({}, d, ((v = {}), (v[b] = C[b]), v));
            }
        }
      }
      return d;
    }
    ((l.checkShouldIncludeCredentials = s),
      (l.createOzBufferingDetector = u),
      (l.createOzDrmProviders = c),
      (l.createOzPerfLoggerProviders = d),
      (l.calculateInitialPlaybackPositionForDynamicMpd = m),
      (l.calculateLiveheadFallBehindBlockThreshold = p),
      (l.calculateLiveheadFallBehindBlockMargin = _),
      (l.getVideoAbrManagerFactory = f),
      (l.getCustomRequestParametersForURI = g));
  },
  98,
);
