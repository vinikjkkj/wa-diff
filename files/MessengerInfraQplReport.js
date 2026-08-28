__d(
  "MessengerInfraQplReport",
  [
    "FBLogger",
    "MAWCurrentUser",
    "MWBroadcastChannel",
    "MessengerInfraReport",
    "MessengerInfraReportUtils",
    "QPLEvent",
    "QuickPerformanceLogger",
    "getErrorSafe",
    "memoizeOneWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        ((e = {}),
        (e[1056839232] = {
          annotations: {
            string: ["errorDescription", "failReason", "backendAckState"],
          },
          name: "MAW_TTRC",
          single: !0,
        }),
        (e[25310776] = {
          annotations: { string: ["errorDescription", "failReason"] },
          name: "MAW_INIT",
          single: !0,
        }),
        (e[25305590] = {
          annotations: { string: ["uncaught_error"] },
          name: "LS_INIT",
          single: !0,
        }),
        (e[25313175] = {
          annotations: {
            int: ["errorCode", "applicationError"],
            string: ["errorDescription", "thread_type"],
            string_array: ["worker_restart_msgs", "worker_restart_reasons"],
          },
          name: "MESSAGE_SEND_TO_SENT",
          single: !1,
        }),
        (e[30605380] = {
          annotations: { string: ["thread_type", "cancelType"] },
          name: "CHAT_TAB_OPEN",
          single: !1,
        }),
        (e[25303796] = {
          annotations: {
            string: [
              "eb_failure_reason",
              "range_extension_error",
              "cancel_reason",
            ],
          },
          name: "LOAD_MORE_MESSAGES",
          single: !1,
        }),
        (e[1056843758] = {
          annotations: {
            string: ["range_extension_error"],
            string_array: ["message_ranges_source"],
          },
          name: "MAW_MLV2_RANGE_EXTENSION",
          single: !1,
        }),
        (e[30605361] = {
          annotations: { string: ["cancelType"] },
          name: "POPOVER_SHOW",
          single: !1,
        }),
        (e[398998698] = {
          annotations: {
            bool: ["isE2eeMandated"],
            string: ["errorDescription"],
          },
          name: "E2EE_COMPONENTS_CREATION",
          single: !1,
        }),
        (e[398997251] = {
          annotations: { string: ["endCallReason"] },
          name: "CALL_JOIN",
          single: !1,
        }),
        (e[398989351] = { name: "ZENON_SDK", single: !1 }),
        (e[521476165] = {
          annotations: {
            string: [
              "type",
              "taskSource",
              "triggerType",
              "querySource",
              "error",
              "exception",
              "thread_state_by_jid",
            ],
          },
          name: "RESTORE_END_TO_END",
          single: !1,
        }),
        (e[521471755] = {
          annotations: {
            string: ["error_description", "exception", "source", "restoreType"],
          },
          name: "EB_API_MESSAGE_RANGE_QUERY",
          single: !1,
        }),
        (e[25302828] = {
          annotations: { string: ["fail_reason"] },
          name: "MEDIA_RENDER",
          single: !1,
        }),
        (e[1056846543] = {
          annotations: {
            bool: ["is_otid", "is_thread_requested"],
            string: ["threadState", "description"],
          },
          name: "MAW_ON_ACT_THREAD_READY_USAGE",
          single: !1,
        }),
        (e[25302828] = {
          annotations: { string: ["fail_reason"] },
          name: "MEDIA_RENDER",
          single: !1,
        }),
        (e[521474469] = { name: "EB_API_MESSAGE_POINT_QUERY", single: !1 }),
        (e[521473213] = { name: "EB_API_MEDIA_RESTORE_PROBE", single: !1 }),
        (e[521476367] = {
          name: "EB_API_MESSAGE_RANGE_QUERY_SEARCH",
          single: !1,
        }),
        (e[521477507] = { name: "EBLSDB_INIT", single: !0 }),
        (e[1056836502] = {
          annotations: {
            bool: [
              "isMawThreadCreated",
              "hasMappingRowAlready",
              "hasPlaceholderRowInserted",
              "isResultVerified",
            ],
            string: ["flushReason", "trigger"],
          },
          name: "THREAD_MAPPING",
          single: !1,
        }),
        (e[521471024] = {
          annotations: { string: ["backup_id"] },
          name: "FETCH_BACKUP_IDS",
          single: !1,
        }),
        (e[25307273] = {
          annotations: { string: ["errorMsg"] },
          name: "MAW_DEVICE_REGISTRATION_ALL",
          single: !0,
        }),
        e),
      d = r("memoizeOneWithArgs")(function (e) {
        return o("MWBroadcastChannel").MWBroadcastChannel(
          "msgr_qpl_logger_" + e,
        );
      }),
      m = "not_started",
      p = function () {
        return m;
      },
      _ = function () {
        try {
          if (o("MessengerInfraReport").isEPD())
            return ((m = "epd_blocked"), function () {});
          var e = d(o("MAWCurrentUser").getID()),
            t = function (t) {
              if (n[t.data[0]] == null)
                return r("FBLogger")("msgr_web_flytrap").warn(
                  "Handler %s is not set for QPL listener",
                  t.data[0],
                );
              switch (t.data[0]) {
                case "onMarkerEnd": {
                  n.onMarkerEnd == null || n.onMarkerEnd.apply(n, t.data[1]);
                  break;
                }
                case "onAnnotation": {
                  n.onAnnotation == null || n.onAnnotation.apply(n, t.data[1]);
                  break;
                }
                case "onMarkerStart": {
                  n.onMarkerStart == null ||
                    n.onMarkerStart.apply(n, t.data[1]);
                  break;
                }
                case "onMarkerPoint": {
                  n.onMarkerPoint == null ||
                    n.onMarkerPoint.apply(n, t.data[1]);
                  break;
                }
                default:
                  r("FBLogger")("maw_init").mustfix(
                    "Must implement QPL forwarding for event name: %s",
                    t.data[0],
                  );
              }
            };
          e.addEventListener("message", t);
          var n = {
              onAnnotation: function (t, n, r, o, a) {
                y(t, n, r, o, a);
              },
              onMarkerEnd: function (t, n, r) {
                C(t, n, r);
              },
              onMarkerPoint: function (t, n, r, o) {
                b(t, n, r, o);
              },
              onMarkerStart: function (t, n) {
                v(t, n);
              },
            },
            a = (u || (u = r("QuickPerformanceLogger"))).addListener(n);
          return (
            (m = "started"),
            function () {
              (a.dispose(), e.removeEventListener("message", t));
            }
          );
        } catch (e) {
          var i = r("getErrorSafe")(e);
          return (
            (m = "error"),
            r("FBLogger")("msgr_web_flytrap")
              .catching(i)
              .mustfix("Failed to initialize QPL logger"),
            function () {}
          );
        }
      },
      f = function (t) {
        var e, n;
        return (e = (n = c[t]) == null ? void 0 : n.name) != null
          ? e
          : "UNKNOWN_QPL_NAME";
      },
      g = function (t) {
        var e = (s || (s = o("QPLEvent"))).getMarkerId(t);
        return c[e];
      },
      h = function (t, n) {
        var e = o("MessengerInfraReport").getEventData(t, n);
        return e;
      };
    function y(e, t, n, r, a) {
      var i,
        l = (s || (s = o("QPLEvent"))).getMarkerId(e),
        u = c[l];
      if (
        u &&
        (i = u.annotations) != null &&
        (i = i[a]) != null &&
        i.includes(n)
      ) {
        var d = h(l, t);
        d && d.status === 1 && (d.annotations[n] = r);
      }
    }
    function C(e, t, n) {
      var r = (s || (s = o("QPLEvent"))).getMarkerId(t),
        a = c[r];
      if (a) {
        var i = h(r, n);
        i &&
          i.status === 1 &&
          (a.single && ((i.status = e), (i.latestTimestampMs = Date.now())),
          a.single ||
            (o("MessengerInfraReportUtils").isQplActionSuccessful(e)
              ? o("MessengerInfraReport").deleteEventData(r, n)
              : ((i.status = e), (i.latestTimestampMs = Date.now()))));
      }
    }
    function b(e, t, n, r) {
      var a = (s || (s = o("QPLEvent"))).getMarkerId(e),
        i = c[a];
      if (i) {
        var l = h(a, t);
        if (
          l &&
          l.status === 1 &&
          (l.lastPoints.push(n), r != null && i.annotations != null)
        ) {
          var u = function (t) {
            var e;
            if (r[t] == null) return 1;
            (e = i.annotations) == null ||
              e[t].forEach(function (e) {
                var n,
                  o = (n = r[t]) == null ? void 0 : n[e];
                o != null && (l.annotations[e] = o);
              });
          };
          for (var d of Object.keys(i.annotations)) u(d);
        }
      }
    }
    function v(e, t) {
      var n = (s || (s = o("QPLEvent"))).getMarkerId(e),
        r = c[n];
      if (r) {
        var a = h(n, t);
        (a != null && a.status !== 1) ||
          o("MessengerInfraReport").storeEventData(
            n,
            { annotations: {}, lastPoints: [], single: r.single, status: 1 },
            t,
          );
      }
    }
    ((l.getLoggerTabCommunication = d),
      (l.getQplLoggerInitStatus = p),
      (l.initializeLogger = _),
      (l.getQplName = f),
      (l.getReportedEvent = g),
      (l.onAnnotationHandler = y),
      (l.onMarkerEndHandler = C),
      (l.onMarkerPointHandler = b),
      (l.onMarkerStartHandler = v));
  },
  98,
);
