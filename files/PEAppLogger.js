__d(
  "PEAppLogger",
  [
    "AdsALPEEV2Extension",
    "AdsGraphAPI",
    "AdsLogger",
    "AdsLoggingUtils",
    "AdsPEAppLoggerEventQueueConfig.experimental",
    "AdsPELoggerUtils",
    "Artillery",
    "ArtilleryInAdsInterfaces",
    "CurrentWaitTimeTraceID",
    "FBLogger",
    "PEAppContext",
    "PEAppLoggerEventCounter",
    "PowerEditorConfig.experimental",
    "PowerEditorLoggerConfigDynamic",
    "SiteData",
    "URI",
    "URIInitDataUtil",
    "WebDriverConfig",
    "createLogSuppressor",
    "formatFileSize",
    "getByPath",
    "getErrorSafe",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2500,
      u = "unified_logging",
      c = "pe",
      d = new (e || (e = r("URI")))(window.location.href).getQueryData(),
      m = o("URIInitDataUtil").getShowLog(),
      p = d.showlogcategory,
      _ = d.allowClownyLogging,
      f = new Set(),
      g = new Set(r("PowerEditorLoggerConfigDynamic").fieldNames);
    g.add("vital");
    var h = new Set(),
      y = new Set([
        "was_explicit",
        "product",
        "normalized_error",
        "key",
        "is_server_error",
        "path",
        "level",
        "ahg_ad_object_id",
        "ahg_available_cap",
        "ahg_experiments",
        "ahg_fbjoiner_key",
        "ahg_invisible_reason",
        "ahg_placement",
        "ahg_log_source",
        "ahg_message_group",
        "ahg_message_type",
        "ahg_message_type_id",
        "ahg_loaded_messages",
        "ahg_score",
        "am_fragment_id",
        "card_category",
        "component_id",
        "content",
        "parent_message_id",
        "recommend_message",
        "sitevar_value",
        "subobject_category",
        "subobject_type",
        "subobject_id",
        "survey_id",
        "duration",
        "url",
        "tip_id",
      ]),
      C = r("getByPath")(r("PowerEditorConfig.experimental"), [
        "config",
        "LOG_THROTTLING",
      ]);
    function b(e) {
      return e.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
    }
    function v(e, t, n) {
      if (!(!n || _)) {
        var o = t.toLowerCase(),
          a =
            o.includes("error") ||
            o.includes("failed") ||
            o.includes("exception");
        if (!a) {
          var i = JSON.stringify(n).length;
          i > s &&
            r("FBLogger")("ads").warn(
              'Woah, "%s" is trying to log %s of data. power_editor_events should only be used for lightweight logging. If you need to log a lot of data, please create a separate data set. See https://fburl.com/pelogging',
              t,
              r("formatFileSize")(i).toString(),
            );
        }
        var l = [],
          u = [];
        (Object.keys(n).forEach(function (e) {
          var t = b(e);
          (e !== t && l.push(e + " -> " + t),
            !g.has(e) && !y.has(e) && !h.has(e) && (h.add(e), u.push(e)));
        }),
          u.length > 0 &&
            r("FBLogger")("ads").mustfix(
              "[%s] These fields are being used by `%s`, but have not been defined in AdsPENewLoggerConfig. This WILL NOT WORK and these fields are just going to be ignored and waste bandwidth. If you need them, add them to the config. Otherwise, remove them from your log call.",
              u.join(", "),
              t,
            ),
          l.length > 0 &&
            r("FBLogger")("ads").mustfix(
              "[%s] Log keys should be lowercase and underscore separated. Please change the following: %s",
              t,
              l.join(", "),
            ));
      }
    }
    var S = r("ifRequired")(
        "hyperionAutoLogging",
        function (e) {
          return function () {
            return e.ALEventIndex.getLastUsedEventIndex();
          };
        },
        function () {
          return function () {
            return -1;
          };
        },
      ),
      R = (function (e) {
        function t() {
          var t;
          if (
            ((t =
              e.call(
                this,
                c,
                null,
                o("PEAppContext").getEventDataForLogging,
                u,
                !0,
                r("AdsPEAppLoggerEventQueueConfig.experimental")
                  .MAX_EVENT_QUEUE_SIZE,
                r("AdsPEAppLoggerEventQueueConfig.experimental")
                  .EVENT_QUEUE_FLUSH_INTERVAL,
              ) || this),
            (t.$PEAppLogger$p_2 = !!m),
            (t.$PEAppLogger$p_3 = m === "trace"),
            (t.logJavaScriptError = function (e, n, r, o) {
              var a = babelHelpers.extends(
                {
                  error_message: e.message,
                  error_type: e.name,
                  stack_trace: e.stack,
                  js_error_category: n,
                  error_data: JSON.stringify(e),
                },
                o,
              );
              t.logForAnalytics(
                "errors",
                r != null && r !== "" ? r : "javascript_error",
                a,
              );
            }),
            C && C.MAX_EVENTS_PER_SECOND !== 0)
          ) {
            var n = r("createLogSuppressor")(C),
              a = n.throttler,
              i = n.unthrottler;
            ((t.$PEAppLogger$p_1 = a), i.init());
          }
          return t;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.toggleLoggingToConsole = function (t) {
            ((this.$PEAppLogger$p_2 = !this.$PEAppLogger$p_2),
              (this.$PEAppLogger$p_3 = !!t));
          }),
          (n.isLoggingToConsole = function () {
            return this.$PEAppLogger$p_2;
          }),
          (n.logForAnalytics = function (n, a, i) {
            var t,
              l = [n, a, i ? i.action_type : null].join("/"),
              s = i != null ? i : {};
            ((s.first_of_session = !f.has(l)), f.add(l));
            var u =
              (t = r("PowerEditorLoggerConfigDynamic").clientSamplingRates[
                a
              ]) == null
                ? void 0
                : t.clientSamplingRate;
            if (u != null && u > 1) {
              var c = Math.floor(Math.random() * u) === 0;
              if (!c) return;
            }
            if (!this.$PEAppLogger$p_4(n, a, s)) {
              var d = null;
              r("Artillery").isEnabled() &&
                r("ArtilleryInAdsInterfaces").traceID != null &&
                (d = r("ArtilleryInAdsInterfaces").traceID);
              try {
                var m,
                  _,
                  g,
                  h = r("PEAppLoggerEventCounter").increase(),
                  y = o("PEAppContext").getEventDataForLogging(),
                  C = babelHelpers.extends(
                    {
                      version: "v" + o("AdsGraphAPI").getVersion(),
                      artillery_trace_id: d,
                      wait_time_trace_id: o("CurrentWaitTimeTraceID").get(),
                      vital: !1,
                    },
                    y,
                    s,
                    ((g = {}),
                    (g.ad_account_id =
                      (m = s.ad_account_id) != null ? m : y.ad_account_id),
                    (g.adgroup_id =
                      (_ = s.adgroup_id) != null ? _ : y.adgroup_id),
                    (g.index = h),
                    (g.js_build_revision = r("SiteData").client_revision),
                    (g.js_push_phase = r("SiteData").push_phase),
                    (g.cohort = r("SiteData").pkg_cohort),
                    (g.current_route =
                      o("AdsPELoggerUtils").getCurrentRouteName()),
                    (g.flushImmediatelyOnLargeQueue = !0),
                    (g.semr_host_bucket = r("SiteData").semr_host_bucket),
                    (g.is_experimental_tier =
                      r("SiteData").is_experimental_tier),
                    (g.is_jit_warmed_up = r("SiteData").is_jit_warmed_up),
                    g),
                    u != null ? { weight: u } : {},
                    o("AdsALPEEV2Extension").getALEventData(),
                  );
                (e.prototype.logForAnalytics.call(this, n, a, C),
                  this.$PEAppLogger$p_2 &&
                    (!p || p === n) &&
                    o("AdsLoggingUtils").logToConsole(
                      n,
                      a,
                      C,
                      "PE",
                      this.$PEAppLogger$p_3,
                    ));
              } catch (e) {
                var b = r("getErrorSafe")(e);
                (r("FBLogger")("ads")
                  .catching(b)
                  .mustfix("Error logging Power Editor event"),
                  a !== "log_failed" &&
                    this.logJavaScriptError(b, "errors", "log_failed", {
                      original_event_name: (n || "") + "." + a,
                    }));
              }
            }
          }),
          (n.logForUserAction = function (t) {
            this.logForAnalytics("user_action", t);
          }),
          (n.$PEAppLogger$p_4 = function (t, n, o) {
            if (n === "log_throttled" || !this.$PEAppLogger$p_1) return !1;
            var e = (t || "") + "-" + n;
            o && o.action_type && (e += "-" + o.action_type);
            var a = this.$PEAppLogger$p_1(e);
            return a.type === "begin-throttle"
              ? (r("FBLogger")("ads").warn(
                  "Woah, %s is being logged too frequently (%s calls per second)! Temporarily throttling it.",
                  n,
                  Math.round(a.avgCallsPerSecond),
                ),
                this.logForAnalytics(
                  "errors",
                  "log_throttled",
                  babelHelpers.extends({}, o, {
                    original_event_name: (t || "") + "." + n,
                  }),
                ),
                !0)
              : a.type === "throttled";
          }),
          (n.__shouldSilenceError = function (t) {
            return !0;
          }),
          t
        );
      })(r("AdsLogger")),
      L = new R(),
      E = L;
    l.default = E;
  },
  98,
);
