__d(
  "signalsLoggingSend",
  [
    "AdsAccountStore",
    "AdsEventsManagerGatingUtils",
    "AdsInterfacesRouter",
    "CurrentBusinessUser",
    "FBLogger",
    "SignalsLoggingSessions",
    "nullthrows",
    "signalsLoggingComputeScope",
    "signalsLoggingFalcoPost",
    "signalsLoggingGetURLData",
    "signalsLoggingReduceSecondaries",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = r("CurrentBusinessUser").business_id,
        i = o("AdsEventsManagerGatingUtils").isCurrentlyAdsEventsManager()
          ? (n = r("AdsInterfacesRouter").get().getParams()) == null
            ? void 0
            : n.act
          : r("AdsAccountStore").getSelectedAccountID(),
        l = r("SignalsLoggingSessions").getForSend(),
        s = r("SignalsLoggingSessions").globalSessionStartTime,
        u = l.map(function (e) {
          var t = e.loggerData,
            n = e.start;
          return {
            namespace: r("nullthrows")(t.namespace),
            scope: r("signalsLoggingComputeScope")(t),
            start: n,
          };
        }),
        c = u.map(function (e) {
          return babelHelpers.extends({}, e, { start: String(e.start) });
        }),
        d = r("signalsLoggingReduceSecondaries")(
          [].concat(
            e.secondaries,
            l.flatMap(function (e) {
              return e.loggerData.secondaries;
            }),
          ),
        ),
        m = d.map(function (e) {
          var t = e.data,
            n = e.type;
          return { data: t, type: n };
        }),
        p = r("nullthrows")(e.namespace),
        _ = r("signalsLoggingComputeScope")(e),
        f = t.action,
        g = r("signalsLoggingGetURLData")(),
        h = g.logHTTPReferrer,
        y = g.logURL;
      switch (t.type) {
        case "action": {
          var C = {
            action: f,
            ad_account_id: i,
            business_id: a,
            global_session_start_time: String(s),
            log_http_referrer: h,
            log_url: y,
            namespace: p,
            scope: _,
            secondaries: m,
            sessions: c,
            type: t.type,
          };
          (t.flowId != null &&
            (C = babelHelpers.extends({}, C, { flow_id: t.flowId })),
            r("signalsLoggingFalcoPost")(C));
          break;
        }
        case "timing": {
          var b = t.duration,
            v = t.frameCount,
            S = t.runCount,
            R = t.start;
          r("signalsLoggingFalcoPost")({
            action: f,
            ad_account_id: i,
            business_id: a,
            duration: b,
            frame_count: String(v),
            global_session_start_time: String(s),
            log_http_referrer: h,
            log_url: y,
            namespace: p,
            run_count: String(S),
            scope: _,
            secondaries: m,
            sessions: c,
            start: R,
            type: t.type,
          });
          break;
        }
        case "error": {
          var L,
            E = t.error,
            k = E.fileName,
            I = E.lineNumber,
            T = E.message,
            D = E.stack,
            x = {
              action: f,
              ad_account_id: i,
              business_id: a,
              global_session_start_time: String(s),
              log_http_referrer: h,
              log_url: y,
              message: T,
              namespace: p,
              scope: _,
              secondaries: m,
              sessions: c,
              stack: D,
              type: t.type,
            };
          (k != null && (x = babelHelpers.extends({}, x, { file_name: k })),
            I != null &&
              (x = babelHelpers.extends({}, x, { line_number: String(I) })),
            t.flowId != null &&
              (x = babelHelpers.extends({}, x, { flow_id: t.flowId })),
            r("signalsLoggingFalcoPost")(x),
            r("FBLogger")("signals")
              .catching(t.error)
              .addMetadata(
                "ADS_INTERFACES",
                "RAW_DATA",
                "namespace - " +
                  ((L = e.namespace) != null ? L : "NO_NAMESPACE"),
              )
              .addMetadata(
                "ADS_INTERFACES",
                "RAW_DATA",
                "scope - " + r("signalsLoggingComputeScope")(e),
              )
              .warn("An exception was thrown in Signals UI"));
          break;
        }
      }
    }
    l.default = e;
  },
  98,
);
