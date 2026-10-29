__d(
  "WAWebWindowsBackgroundRunLogger",
  [
    "WALogger",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalOsVersion",
    "WaWindowsBackgroundRunFalcoEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 64;
    function d(t) {
      var n = [],
        a = function () {
          var t = f(i);
          t == null
            ? o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WindowsBackgroundRunLogger] dropped a record without its required fields",
                  ])),
              )
            : r("WaWindowsBackgroundRunFalcoEvent").log(function () {
                return babelHelpers.extends({}, t, m());
              });
          var a = g(i);
          a != null && n.push(a);
        };
      for (var i of p(t)) a();
      return n;
    }
    function m() {
      return {
        app_version: r("WAWebFalcoCanonicalAppVersion")(),
        os_version: r("WAWebFalcoCanonicalOsVersion")(),
      };
    }
    function p(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WindowsBackgroundRunLogger] malformed records payload",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          []
        );
      }
      return Array.isArray(t)
        ? t.filter(_)
        : (o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[WindowsBackgroundRunLogger] records payload is not an array",
              ])),
          ),
          []);
    }
    function _(e) {
      return typeof e == "object" && e != null && !Array.isArray(e);
    }
    function f(e) {
      var t = h(e, "trigger"),
        n = h(e, "arm_result"),
        r = h(e, "outcome"),
        o = C(e, "record_age_s"),
        a = g(e);
      return t == null || n == null || r == null || o == null || a == null
        ? null
        : {
            trigger: t,
            arm_result: n,
            outcome: r,
            record_age_s: o,
            record_id: a,
            skip_reason: h(e, "skip_reason"),
            ab_prop_value: y(e, "ab_prop_value"),
            on_battery: y(e, "on_battery"),
            energy_saver_on: y(e, "energy_saver_on"),
            background_access_status: h(e, "background_access_status"),
            notification_banner_setting: h(e, "notification_banner_setting"),
            previous_run_unrecorded_exit: y(e, "previous_run_unrecorded_exit"),
            teardown_stage: h(e, "teardown_stage"),
            stall_detected: y(e, "stall_detected"),
            fallback_toast_shown: y(e, "fallback_toast_shown"),
            pending_outgoing_at_exit: C(e, "pending_outgoing_at_exit"),
            toasts_shown: C(e, "toasts_shown"),
            replies_forwarded: C(e, "replies_forwarded"),
            sync_cycles: C(e, "sync_cycles"),
            peak_private_working_set_mb: C(e, "peak_private_working_set_mb"),
            cpu_ms: C(e, "cpu_ms"),
            decision_ms: C(e, "decision_ms"),
            app_initialized_ms: C(e, "app_initialized_ms"),
            web_client_ready_ms: C(e, "web_client_ready_ms"),
            connect_requested_ms: C(e, "connect_requested_ms"),
            offline_delivery_ended_ms: C(e, "offline_delivery_ended_ms"),
            first_toast_ms: C(e, "first_toast_ms"),
            last_toast_ms: C(e, "last_toast_ms"),
            disconnect_requested_ms: C(e, "disconnect_requested_ms"),
            disconnected_ms: C(e, "disconnected_ms"),
            exit_started_ms: C(e, "exit_started_ms"),
            duration_ms: C(e, "duration_ms"),
            dropped_records: C(e, "dropped_records"),
            dropped_records_batch_id: h(e, "dropped_records_batch_id"),
          };
    }
    function g(e) {
      var t = h(e, "record_id");
      return t != null && t.length > 0 && t.length <= c ? t : null;
    }
    function h(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function y(e, t) {
      var n = e[t];
      return typeof n == "boolean" ? n : null;
    }
    function C(e, t) {
      var n = e[t];
      return typeof n == "number" && Number.isSafeInteger(n) ? String(n) : null;
    }
    l.logBackgroundRunRecords = d;
  },
  98,
);
