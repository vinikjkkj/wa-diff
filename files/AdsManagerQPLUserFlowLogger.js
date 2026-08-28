__d(
  "AdsManagerQPLUserFlowLogger",
  [
    "AdsManagerErrorUtils",
    "AdsManagerQPLUserFlowLoggerConsts",
    "AdsManagerQPLUserFlowLoggerHelpers",
    "AdsManagerQPLUserFlowLoggerListeners",
    "ErrorNormalizeUtils",
    "QPLEvent",
    "QPLServerClock",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "addAnnotations",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1,
      c = 2;
    function d(e) {
      return r("QPLUserFlow")
        .getActiveFlowIDs()
        .includes((s || (s = o("QPLEvent"))).getMarkerId(e));
    }
    function m(e, t) {
      var n = t
        .map(function (e) {
          var t = o("AdsManagerErrorUtils").getErrorCode(e);
          if (t != null) return t.toString();
        })
        .filter(Boolean);
      n.length > 0 &&
        r("addAnnotations")(e, { string_array: { error_codes: n } });
      var a = t
        .map(function (e) {
          var t = e.name;
          if (t != null) return t;
        })
        .filter(Boolean);
      a.length > 0 &&
        r("addAnnotations")(e, { string_array: { error_name: a } });
      var i = t
        .map(function (e) {
          var t = o("AdsManagerErrorUtils").getErrorMessage(e);
          if (t != null) return t;
        })
        .filter(Boolean);
      return (
        i.length > 0 &&
          (r("addAnnotations")(e, { string: { error_message: r("first")(i) } }),
          r("addAnnotations")(e, { string_array: { error_message: i } })),
        p(e, t),
        e
      );
    }
    function p(e, t) {
      var n = t
        .map(function (e) {
          return o("AdsManagerErrorUtils").getOpesMIDs(e);
        })
        .flat()
        .filter(Boolean);
      n.length > 0 &&
        r("addAnnotations")(e, { string_array: { opes_mids: n } });
      var a = t
        .map(function (e) {
          return o("AdsManagerErrorUtils").getErrorWWWRequestID(e);
        })
        .filter(Boolean);
      a.length > 0 &&
        (r("addAnnotations")(e, {
          string: { error_www_request_id: r("first")(a) },
        }),
        r("addAnnotations")(e, { string_array: { error_www_request_ids: a } }));
      var i = t.filter(function (e) {
        return (
          o("AdsManagerErrorUtils").isJSError(e) ||
          o("AdsManagerErrorUtils").isBuiltInJSError(e) ||
          o("AdsManagerErrorUtils").isMinifiedInvariant(e)
        );
      });
      (i.forEach(function (e) {
        var t = o("AdsManagerErrorUtils").getJSNormalizedError(e);
        if (t == null) {
          var n = r("ErrorNormalizeUtils").normalizeError(e);
          e.js_normalized_error = n;
        }
      }),
        i.length > 0 && r("addAnnotations")(e, { bool: { is_js_error: !0 } }));
      var l = t
        .map(function (e) {
          return o("AdsManagerErrorUtils").getJSNormalizedError(e);
        })
        .filter(Boolean);
      l.length > 0 && _(e, l);
    }
    function _(e, t) {
      var n = r("first")(t);
      r("addAnnotations")(e, {
        string: {
          js_error_message_format: n == null ? void 0 : n.messageFormat,
          js_error_type: n == null ? void 0 : n.type,
          js_error_logging_source: n == null ? void 0 : n.loggingSource,
          js_error_project: n == null ? void 0 : n.project,
        },
        string_array: {
          js_error_message_params: n == null ? void 0 : n.messageParams,
          js_error_message_formats: t
            .map(function (e) {
              return e.messageFormat;
            })
            .filter(Boolean),
          js_error_types: t
            .map(function (e) {
              return e.type;
            })
            .filter(Boolean),
          js_error_logging_sources: t
            .map(function (e) {
              return e.loggingSource;
            })
            .filter(Boolean),
          js_error_projects: t
            .map(function (e) {
              return e.project;
            })
            .filter(Boolean),
        },
      });
    }
    function f(e, t) {
      var n = {};
      return (
        Object.keys(t).forEach(function (r) {
          var o,
            a,
            i = (o = t[r]) != null ? o : [],
            l = (a = e == null ? void 0 : e[r]) != null ? a : [];
          n[r] = Array.from(new Set([].concat(l, i)));
        }),
        n
      );
    }
    function g(t, n, o) {
      var a = o === void 0 ? {} : o,
        i = a.instanceKey,
        l = i === void 0 ? 0 : i,
        s = (e || (e = r("QuickPerformanceLogger"))).getMarker(t, l);
      if (s != null) {
        var u = {};
        if (n.bool_array != null) {
          var c;
          u.bool_array = f(
            (c = s.annotations) == null ? void 0 : c.bool_array,
            n.bool_array,
          );
        }
        if (n.double_array != null) {
          var d;
          u.double_array = f(
            (d = s.annotations) == null ? void 0 : d.double_array,
            n.double_array,
          );
        }
        if (n.int_array != null) {
          var m;
          u.int_array = f(
            (m = s.annotations) == null ? void 0 : m.int_array,
            n.int_array,
          );
        }
        if (n.string_array != null) {
          var p;
          u.string_array = f(
            (p = s.annotations) == null ? void 0 : p.string_array,
            n.string_array,
          );
        }
        r("QPLUserFlow").addAnnotations(t, u, { instanceKey: l });
      }
    }
    function h(t, n) {
      (e || (e = r("QuickPerformanceLogger"))).forEachMarkerInstance(
        (s || (s = o("QPLEvent"))).getMarkerId(t),
        function (o) {
          var a = (e || (e = r("QuickPerformanceLogger"))).getMarker(t, o);
          a != null && n(a, o, t);
        },
      );
    }
    function y(e, t) {
      var n = t === void 0 ? {} : t,
        a = n.instanceKey,
        i = a === void 0 ? 0 : a,
        l = n.annotations,
        s = l === void 0 ? {} : l,
        u = n.cancelExisting,
        c = u === void 0 ? !0 : u,
        d = n.cancelOnUnload,
        m = d === void 0 ? !0 : d,
        p = n.timestamp,
        _ = n.trackedForLoss,
        f = _ === void 0 ? !0 : _,
        g = n.joinOptions,
        h = n.timeoutInMs,
        y = n.onFlowTimeout__doNOTUSE,
        C =
          p != null
            ? o("QPLServerClock").convertToTimeOnServer(p)
            : o("QPLServerClock").getCurrentTimeOnServer(),
        b = {
          cancelExisting: c,
          cancelOnUnload: m,
          timestamp: p,
          trackedForLoss: f,
          joinOptions: g,
          timeoutInMs:
            h != null
              ? h
              : o("AdsManagerQPLUserFlowLoggerConsts").FLOW_ID_TO_TIMEOUT.get(
                  e,
                ),
          onFlowTimeout__doNOTUSE: function (t, n, r) {
            y != null && y(t, n, r);
          },
          qplInternalDoNotUseAbsoluteTimeOrigin: C,
        };
      r("QPLUserFlow").start(
        e,
        babelHelpers.extends({}, b, {
          instanceKey: i,
          annotations: s,
          enableE2ETracing: !0,
        }),
      );
    }
    function C(e, t) {
      var n = t.instanceKey,
        a = n === void 0 ? 0 : n,
        i = t.annotations,
        l = i === void 0 ? {} : i,
        s = t.cancelExisting,
        u = s === void 0 ? !0 : s,
        c = t.cancelOnUnload,
        d = c === void 0 ? !0 : c,
        m = t.trackedForLoss,
        p = m === void 0 ? !0 : m,
        _ = t.timeoutInMs,
        f = t.onFlowTimeout__doNOTUSE;
      r("QPLUserFlow").startFromNavStart(e, {
        instanceKey: a,
        annotations: l,
        cancelExisting: u,
        cancelOnUnload: d,
        trackedForLoss: p,
        timeoutInMs:
          _ != null
            ? _
            : o("AdsManagerQPLUserFlowLoggerConsts").FLOW_ID_TO_TIMEOUT.get(e),
        onFlowTimeout__doNOTUSE: function (t, n, r) {
          f != null && f(t, n, r);
        },
        qplInternalDoNotUseConvertToTimeOnServer:
          o("QPLServerClock").convertToTimeOnServer,
      });
    }
    ((l.LOCAL_SELECTOR_CHANGE_ACC_INSTANCE_KEY = u),
      (l.GLOBAL_SELECTOR_CHANGE_ACC_INSTANCE_KEY = c),
      (l.getActiveFlowInstanceIDs = o(
        "AdsManagerQPLUserFlowLoggerHelpers",
      ).getActiveFlowInstanceIDs),
      (l.initListeners = o(
        "AdsManagerQPLUserFlowLoggerListeners",
      ).initListenersHelper),
      (l.isActiveFlow = d),
      (l.appendErrorAnnotationsToExistingAnnotations = m),
      (l.appendArrayAnnotations = g),
      (l.forEachMarker = h),
      (l.start = y),
      (l.startFromNavStart = C));
  },
  98,
);
