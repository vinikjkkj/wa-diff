__d(
  "RSTConfig",
  [
    "CurrentUserInitialData",
    "FBLogger",
    "JustKnobsData",
    "WebResponsivenessConfig",
    "gkx",
    "justknobx",
    "reactComponentNameSemanticsCheck",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3456e5,
      m = {
        app_id: "default",
        first_heartbeat_threshold_ms: 1e4,
        freeze_threshold_ms: 500,
        heart_beat_interval_ms: 200,
        main_thread_logging_interval_ms: 5e3,
        encrypt_db: !1,
        start_rst_from_main_thread_extra_delay_in_ms: 0,
      };
    function p() {
      var e,
        t,
        n = r("WebResponsivenessConfig").rst.app_config;
      return n.length === 0
        ? m
        : (e =
              (t = n.find(function (e) {
                var t;
                return (
                  "" + e.app_id ==
                  "" +
                    ((t = (c || (c = r("CurrentUserInitialData"))).APP_ID) !=
                    null
                      ? t
                      : 0)
                );
              })) != null
                ? t
                : n.find(function (e) {
                    return e.app_id === "default";
                  })) != null
          ? e
          : m;
    }
    var _ = p();
    function f() {
      var e = "__felab_context" in window;
      return (
        y.RST_ANNOTATION_KILLSWITCH_ON && y.SHOULD_COLLECT_RST_ANNOTATIONS && !e
      );
    }
    function g(e) {
      var t = [];
      if (e == null) return t;
      for (var n of e)
        try {
          var o = n.trim();
          (o.startsWith("/") &&
            o.endsWith("/") &&
            (o = o.slice(1, o.length - 1)),
            t.push(new RegExp(o)));
        } catch (e) {
          r("FBLogger")("responsive-tracker").warn(
            "Failed to construct regex from %s",
            n,
          );
        }
      return t;
    }
    var h = new Map([
        [
          "Relay_JustKnobsAsyncGetBoolWithoutHashvalQuery",
          function (e, t) {
            var n = Array.from(
              o("JustKnobsData").getKnobsBeingFetched().keys(),
            );
            return n.length === 0
              ? t
              : (t != null ? t : "") + ":" + n.join(",");
          },
        ],
      ]),
      y = {
        PROJECT_NAME: "RST",
        PROJECT_ONCALL: "web_ecosystem",
        DEBUG: !1,
        ENCRYPT_DB: _.encrypt_db,
        ENABLE_SERVICE_WORKER: (u = r("justknobx"))._("4993"),
        FIRST_HEART_BEAT_THRESHOLD_MS: _.first_heartbeat_threshold_ms,
        FREEZE_THRESHOLD_MS: _.freeze_threshold_ms,
        HEART_BEAT_INTERVAL_MS: _.heart_beat_interval_ms,
        START_RST_FROM_MAIN_THREAD_EXTRA_DELAY_IN_MS:
          _.start_rst_from_main_thread_extra_delay_in_ms,
        INDEX_DB_NAME: "responsiveness-db",
        INDEX_DB_TABLE_NAME: "unresponsiveness-events-v2",
        PAST_INDEX_DB_TABLE_NAMES: ["unresponsiveness-events"],
        INDEX_DB_VERSION: 4,
        SERVICE_WORKER_INCIDENT_THRESHOLD_MS: 4e3,
        SERVICE_WORKER_HEART_BEAT_INTERVAL_MS: 1e3,
        WAIT_MS_FOR_OTHER_SESSION_BEFORE_PROCESSING: 60 * 1e3,
        WEB_WORKER_UPDATE_INCIDENTS_INTERVAL_MS: u._("3306"),
        UNRECOVER_LASTS_THRESHOLD_MS: u._("3307"),
        SHOULD_SAMPLE_RECOVERABLE: u._("3273"),
        SHOULD_CAPTURE_INTERACTION_DATA: u._("3709"),
        SHOULD_CAPTURE_INTERACTION_ELEMENT_TEXT:
          r("justknobx")._("4704") || r("gkx")("15466"),
        ELEMENT_TEXT_SIZE_LIMIT: 20,
        RST_ANNOTATION_KILLSWITCH_ON: r("justknobx")._("3738"),
        SHOULD_COLLECT_RST_ANNOTATIONS: r("gkx")("10200"),
        SHOULD_COLLECT_RST_ANNOTATIONS_LOG_FOR_CRASH: r("justknobx")._("954"),
        SHOULD_COLLECT_RST_ANNOTATIONS_INTERACTION_DATA:
          r("justknobx")._("955"),
        BLOCKED_ANNOTATION_KEYS: g(_.blocked_rst_annotation_keys),
        OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS:
          (e = _.obsolete_pending_incident_threshold_ms) != null ? e : d,
        MAX_INCIDENT_COUNT: (s = _.max_incident_count) != null ? s : null,
        MAIN_THREAD_LOGGING_INTERVAL_MS: _.main_thread_logging_interval_ms,
        INCIDENT_PROPOSED_PROCESSOR_OWNERSHIP_EXPIRE_MS:
          6 * _.main_thread_logging_interval_ms,
        MESSAGE_TYPE: "responsiveness",
        DEBUG_LOGGING_ENABLED: r("gkx")("6199"),
        MAX_DB_FAILED_COUNT: 10,
        TRACE_STATS_WINDOW_SIZE_MS: 120 * 1e3,
        TRACE_STATS_MAX_QUEUE_SIZE: 200,
        HIGH_MEMORY_USAGE_THRESHOLD_BYTES: 1500 * 1024 * 1024,
        DEFAULT_REACT_COMPONENT_CONTEXT_SIZE: 3,
        ONE_UNRECOVERABLE_INCIDENT_PER_SESSION: !0,
        shouldCollectAdditionalMetadata: f,
        isReactComponentNameBlocked: o("reactComponentNameSemanticsCheck")
          .isReactComponentNameMeaningless,
        isReactComponentTextBlocked: o("reactComponentNameSemanticsCheck")
          .isReactComponentTextBlocked,
        logSpanAnnotationsMapping: h,
      },
      C = y;
    l.default = C;
  },
  98,
);
