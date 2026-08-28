__d(
  "AdsWebLoomGlobalLogger",
  [
    "AdsAPTrackedInteractionsConfig",
    "AdsAPTransformAPIRequest",
    "AdsDataAtomInstrumentation",
    "AdsPEInitParams",
    "AdsPerfInteractionAddSpansUtil",
    "AdsPreloaderUtils",
    "GraphAPICore",
    "InteractionTracingMetrics",
    "NetworkResourceTimingMatcher",
    "findInMap",
    "gkx",
    "ifRequired",
    "performanceNow",
    "promiseDone",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = !1;
    function c(e) {
      (r("GraphAPICore").addListener("error", function (t) {
        var n,
          r = o("AdsPerfInteractionAddSpansUtil").getCallName(t.method, t.name),
          a = "Error: " + ((n = t.source) != null ? n : "") + " " + r;
        e(a, t, t.error);
      }),
        r("GraphAPICore").addListener("success", function (t) {
          var n,
            r = o("AdsPerfInteractionAddSpansUtil").getCallName(
              t.method,
              t.name,
            ),
            a = ((n = t.source) != null ? n : "") + " " + r;
          e(a, t, null);
        }));
    }
    function d(e) {
      r("promiseDone")(
        o("AdsPEInitParams")
          .getInitParamsPromise()
          .then(function (e) {
            u = e.should_log_graphapi_details_for_ap;
          }),
      );
      for (var t of r("AdsAPTrackedInteractionsConfig"))
        e.addEventListener(t, "start", function (t) {
          var n,
            r = t.interactionID;
          (s.add(r),
            (n = e.getActiveInteractionTraceAPI(r)) == null ||
              n.onCompleteSync(function () {
                s.delete(r);
              }));
        });
      var n = function (n, r, o) {
        return p(e, n, r, o);
      };
      c(n);
      var a = function (n, o, a, i) {
        e.getInteractionIDsForGlobalLogging().forEach(function (e) {
          r("InteractionTracingMetrics").addSubspan(
            e,
            "" + n,
            "FluxAction",
            o,
            a,
            i,
          );
        });
      };
      m(a);
    }
    function m(t) {
      var n = {};
      o("AdsDataAtomInstrumentation").addInstrumentation({
        actionStart: function (o, a) {
          var t = String(a);
          n[t] = (e || (e = r("performanceNow")))();
        },
        actionEnd: function (a, i) {
          var o = String(i),
            l = (e || (e = r("performanceNow")))(),
            s = n[o],
            u = { dispatchSeqNumber: i };
          s != null && t(a, s, l, u);
        },
      });
    }
    function p(e, t, n, a) {
      var i = void 0,
        l = void 0;
      e.getInteractionIDsForGlobalLogging().forEach(function (e) {
        var u = i != null ? i : _(n, a);
        i = u;
        var c = s.has(e);
        !l && c && (l = f(n, e));
        var d = g(e, n),
          m = babelHelpers.extends({}, u, d),
          p = {
            ap_name: o("AdsPerfInteractionAddSpansUtil").replaceIDsInSpanName(
              t,
            ),
          },
          h = l != null ? l : {};
        r("InteractionTracingMetrics").addSubspan(
          e,
          o("AdsPerfInteractionAddSpansUtil").replaceIDsInSpanName(t),
          "GraphAPI",
          n.start_time,
          n.start_time + n.request_time,
          c ? babelHelpers.extends({}, m, h, p) : m,
        );
      });
    }
    function _(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u = e.api_fbtrace_id,
        c = e.method,
        d = e.name,
        m = e.params,
        p = e.path,
        _ = e.preloaded,
        f = e.priority,
        g = e.request_time,
        h = e.source,
        y = _ === !0 || (m == null ? void 0 : m.__entryPointPreloaded) === "1",
        C = babelHelpers.extends(
          {
            is_preloaded: y,
            call_name: o("AdsPerfInteractionAddSpansUtil").getCallName(c, d),
            request_source: h != null ? h : "",
            priority: f != null ? f : "",
            method: c,
            path: p,
            request_name:
              (n = m == null ? void 0 : m._reqName) != null ? n : "",
            api_fbtrace_id: u != null ? u : "",
            has_error: t != null,
          },
          t != null
            ? {
                error_msg:
                  (a = t == null ? void 0 : t.message) != null ? a : "",
                error_code: (i = t == null ? void 0 : t.code) != null ? i : 0,
                error_subcode:
                  (l = t == null ? void 0 : t.error_subcode) != null ? l : 0,
              }
            : null,
          { full_duration: g / 1e3 },
        );
      C.www_request_id = (s = e.www_request_id) != null ? s : "";
      var b = m == null ? void 0 : m.xref;
      if (typeof b == "string" && r("gkx")("21718")) {
        var v = o("NetworkResourceTimingMatcher").getResourceTimingByXref(b);
        v != null &&
          ((C.resource_timing_fetch_start = v.fetchStart),
          (C.resource_timing_response_end = v.responseEnd),
          (C.resource_timing_transfer_size = v.transferSize),
          (C.resource_timing_duration = v.duration));
      }
      return C;
    }
    function f(e, t) {
      var n = e.clientMetadata,
        a = e.method,
        i = e.params,
        l = e.path,
        s = e.preloaded,
        c = s === !0 || (i == null ? void 0 : i.__entryPointPreloaded) === "1",
        d = {};
      if (!u) return d;
      if (a.toLowerCase() === "get" && i != null && !c) {
        var m,
          p = r("unsafeCast")(n == null ? void 0 : n.get("dataLineage")),
          _ =
            (m = o("AdsAPTransformAPIRequest").transformRequestParams(i, p)) !=
            null
              ? m
              : "",
          f = o("AdsAPTransformAPIRequest").transformRequestPath(l);
        ((d.transformed_params = _), (d.transformed_path = f));
        var g = o("AdsAPTransformAPIRequest").getContextDataForTraceLogging();
        if (g != null)
          for (var h of Object.keys(g)) d["app_context_" + h] = g[h];
      } else if (n != null && n.has("apRequestTemplate")) {
        var y = r("unsafeCast")(
          n == null ? void 0 : n.get("apRequestTemplate"),
        );
        y != null &&
          ((d.transformed_params = y.params), (d.transformed_path = y.path));
      }
      return d;
    }
    function g(e, t) {
      return r("ifRequired")(
        "AdsManagerEntryPointRunner",
        function (n) {
          var a =
            r("findInMap")(n.activeEntrypoints, function (t, n) {
              return t.interactionID === e;
            }) != null;
          if (!a) return {};
          var i = t.method,
            l = t.params,
            s = t.path,
            u = t.preloaded,
            c =
              u === !0 ||
              (l == null ? void 0 : l.__entryPointPreloaded) === "1";
          return c
            ? { query_key: o("AdsPreloaderUtils").getQueryKeyImpl(l, i, s) }
            : { eventType: "AP_RECALL_MISS" };
        },
        function () {
          return {};
        },
      );
    }
    ((l.addGraphAPIListeners = c),
      (l.init = d),
      (l.addFluxActionInstrumentation = m),
      (l.getGraphAPISubspanData = _));
  },
  98,
);
