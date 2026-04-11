__d(
  "RequestStreamE2ELogger",
  [
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "WebStorage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "rs_debug_logging",
      u = [
        "FBGQLS:COMMENT_CREATE_SUBSCRIBE",
        "FBGQLS:COMMENT_LIKE_SUBSCRIBE",
        "FBGQLS:FEEDBACK_COMMENT_PERMISSION_TOGGLE_SUBSCRIBE",
        "FBGQLS:FEEDBACK_TYPING_SUBSCRIBE",
        "GRAPHQL:CometNotificationsReceiveLiveQuery",
      ],
      c = 0;
    function d() {
      var e = Date.now();
      return (c >= e ? (c += 1) : (c = e), c.toString());
    }
    var m = (function () {
      function e(e, t, n, r, o, a, i, l, s, u, c) {
        ((this.$10 = []),
          (this.$11 = !1),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = r),
          (this.$5 = o),
          (this.$6 = a),
          (this.$7 = i),
          (this.$8 = l),
          (this.$9 = s),
          (this.$12 = u != null ? u : !1),
          (this.$13 = c));
      }
      var t = e.prototype;
      return (
        (t.logE2EEvent = function (t, n, r, o, a, i, l) {
          if (
            (r === void 0 && (r = null),
            o === void 0 && (o = null),
            a === void 0 && (a = null),
            i === void 0 && (i = null),
            l === void 0 && (l = null),
            this.$3 !== "Falco")
          ) {
            var e = {
              request_id: this.$1,
              resume_id: "0",
              retry_id: a,
              transport: this.$2,
              method: this.$3,
              use_case: this.$4,
              request_log_context: this.$5,
              force_log_context: this.$6,
              e2e_sample_rate: this.$7,
              message_type: t,
              event: n,
              timestamp_ms: d(),
              aux_id: o,
              additional_data: r,
              dgw_stream_group_logging_id: this.$8,
              dgw_count_prior_streams_in_group: this.$9,
              domain: this.$13.domain,
              df_trace_id: i,
            };
            this.$14(e, l);
          }
        }),
        (t.$14 = function (t, n) {
          if (!this.$12) {
            this.$13.rs_e2e_client_event_logger.log(function () {
              return t;
            });
            return;
          }
          if (
            (this.$10.push(t),
            this.$11 ||
              t.event == r("RequestStreamE2EClientLoggerEvent").FAILURE ||
              t.message_type ==
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE)
          ) {
            var e = { events: this.$10 };
            (this.$13.rs_e2e_client_batch_event_logger.log(function () {
              return e;
            }),
              (this.$10 = []),
              (this.$11 = !0));
          }
        }),
        (t.getRequestId = function () {
          return this.$1;
        }),
        e
      );
    })();
    function p(e, t, n, r) {
      if (e == null || e.method == null) return null;
      var o = !1;
      if ((u.includes(e.method) && (o = !0), t == null || t.length === 0))
        return null;
      var a = JSON.parse(t);
      return a.requestId == null
        ? null
        : new m(
            a.requestId,
            n,
            e.method,
            _(e.method, e),
            a.requestLogContext,
            a.forceLogContext,
            a.sampleRate,
            a.dgwStreamGroupLoggingId,
            a.dgwCountPriorStreamsInGroup,
            o,
            r,
          );
    }
    function _(e, t) {
      if (e === "FBLQ" && t.config_id) return t.config_id;
      if (e === "SKY") {
        if (t.topic) {
          var n = t.topic.lastIndexOf("/");
          return n > 0 ? t.topic.substr(0, n) : t.topic;
        }
        return;
      }
      return e;
    }
    function f(e, t, n, r, o, a, i) {
      if (
        (a === void 0 && (a = null),
        i === void 0 && (i = null),
        !(t == null || t.requestId == null || t.clientLoggingDisabled != null))
      ) {
        var l = {
          request_id: t.requestId,
          resume_id: "0",
          transport: n,
          e2e_sample_rate: t.sampleRate,
          message_type: r,
          event: o,
          timestamp_ms: d(),
          aux_id: t.auxId,
          additional_data: a,
          df_trace_id: i,
        };
        e.log(function () {
          return l;
        });
      }
    }
    ((l.RequestStreamE2ELogger = m),
      (l.createStreamLogger = p),
      (l.logRequestStreamE2EEventStatic = f));
  },
  98,
);
