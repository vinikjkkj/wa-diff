__d(
  "CustomerBehaviorRiskLoggingUtils",
  [
    "ConstUriUtils",
    "FBLogger",
    "FiConsumerRiskBehaviorFalcoEvent",
    "XAsyncRequest",
    "XPaymentsCustomerBehaviorLoggerAsyncControllerRouteBuilder",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = n("FiConsumerRiskBehaviorFalcoEvent");
      t.log(function () {
        return e;
      });
    }
    function s(t) {
      var n = null;
      try {
        r("justknobx")._("658") && e(t);
        var o = document.location.href;
        ((n = r("XPaymentsCustomerBehaviorLoggerAsyncControllerRouteBuilder")
          .buildUri(c(t))
          .toString()),
          (t.use_case_category === "ecp_add_cc" ||
            t.use_case_category === "ecp_edit_cc" ||
            t.use_case_category === "mdc_checkout") &&
            (n = d(t, n, o)),
          new (r("XAsyncRequest"))(n)
            .setMethod("POST")
            .setHandler(function () {})
            .setErrorHandler(function (e) {
              var n, r, a, i, l;
              return u(
                {
                  client_event_unix_time_ms:
                    (n = t.client_event_unix_time_ms) != null
                      ? n
                      : Date.now().toString(),
                  consumer_behavior_event: "error_debugging_event",
                  event_extra_data: babelHelpers.extends(
                    {},
                    t.event_extra_data,
                    {
                      error:
                        (r =
                          e == null || (a = e.errorDescription) == null
                            ? void 0
                            : a.toString()) != null
                          ? r
                          : "",
                      uri: o != null ? o : "unknown",
                    },
                  ),
                  event_id: t.event_id,
                  falco_event: t.falco_event,
                  html_element_name: t.html_element_name,
                  primary_account_id: t.primary_account_id,
                  risk_session_id: t.risk_session_id,
                  secondary_account_id: t.secondary_account_id,
                  upl_session_id: t.upl_session_id,
                  uri: t.uri,
                  use_case_category: t.use_case_category,
                  use_case_subcategory: t.use_case_subcategory,
                },
                (i =
                  e == null || (l = e.errorDescription) == null
                    ? void 0
                    : l.toString()) != null
                  ? i
                  : "",
              );
            })
            .send());
      } catch (e) {
        e instanceof Error
          ? r("FBLogger")("fi_risk_behavioral_signals")
              .catching(e)
              .mustfix(
                "Error in emitCustomerBehaviorRiskEvent for URI: %s",
                n != null ? n : "unknown",
              )
          : r("FBLogger")("fi_risk_behavioral_signals").mustfix(
              "Error in emitCustomerBehaviorRiskEvent: %s, URI: %s",
              String(e),
              n != null ? n : "unknown",
            );
      }
    }
    function u(t, n) {
      var o = document.location.href;
      (r("FBLogger")("fi_risk_behavioral_signals")
        .catching(n)
        .mustfix(
          "Error in emitCustomerBehaviorRiskEvent for URI: %s",
          o != null ? o : "unknown",
        ),
        e(t));
    }
    function c(e) {
      var t = {
        consumer_behavior_event: e.consumer_behavior_event,
        use_case_category: e.use_case_category,
      };
      return (
        e.use_case_subcategory != null &&
          (t.use_case_subcategory = e.use_case_subcategory),
        e.primary_account_id != null &&
          (t.primary_account_id = e.primary_account_id),
        e.secondary_account_id != null &&
          (t.secondary_account_id = e.secondary_account_id),
        e.client_event_unix_time_ms != null &&
          (t.client_event_unix_time_ms = e.client_event_unix_time_ms),
        e.upl_session_id != null && (t.upl_session_id = e.upl_session_id),
        e.risk_session_id != null && (t.risk_session_id = e.risk_session_id),
        e.uri != null && (t.uri = e.uri),
        e.falco_event != null && (t.falco_event = e.falco_event),
        e.html_element_name != null &&
          (t.html_element_name = e.html_element_name),
        e.event_id != null && (t.event_id = e.event_id),
        e.event_extra_data != null && (t.event_extra_data = e.event_extra_data),
        t
      );
    }
    function d(e, t, n) {
      var a = t;
      if (
        n.startsWith("https://apps.facebook.com/") ||
        n.startsWith("https://accountscenter.facebook.com/")
      ) {
        var i, l;
        a =
          (i =
            (l = r("XPaymentsCustomerBehaviorLoggerAsyncControllerRouteBuilder")
              .buildUri(c(e))
              .qualifyDomain(
                o("ConstUriUtils").getUri("https://www.facebook.com/"),
              )) == null
              ? void 0
              : l.toString()) != null
            ? i
            : t;
      }
      return a;
    }
    ((l.logCustomerBehaviorRiskEvent = e),
      (l.emitCustomerBehaviorRiskEvent = s));
  },
  98,
);
