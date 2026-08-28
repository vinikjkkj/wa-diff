__d(
  "BillingAbstractUPLogger",
  [
    "BillingUPSessionIdUtils",
    "InteractionTracing.xplat",
    "IsWebDriverTestRunning",
    "RelayAPIConfig",
    "UplBundleBillingFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(t) {
        var n = e.default_static_session;
        ((this.metadata = babelHelpers.extends(
          { context: "billingdefault", platform: "derived", session_id: n },
          t,
        )),
          (this.wizardMetadata = babelHelpers.extends({}, t)),
          this.setRelayHeaders());
      }
      var t = e.prototype;
      return (
        (t.setRelayHeaders = function () {
          r("RelayAPIConfig").customHeaders["X-FB-UPL-SESSIONID"] =
            this.metadata.session_id;
        }),
        (t.logEvent = function (n) {
          var t,
            o = this;
          if (n.target_name !== e.PRELOADED_QUERY_TARGET_NAME) {
            (this.internalLogEvent(n), this.$1());
            var a =
              "upl_" +
              n.target_name +
              "_" +
              (n.event_side + "_") +
              (n.event_action + "_") +
              (this.metadata.context + "_") +
              ("" + ((t = n.event_result) != null ? t : ""));
            r("InteractionTracing.xplat")
              .getPendingInteractions()
              .forEach(function (e) {
                (e.addMarkerPoint(a, "AppTiming"),
                  n && e.addAnnotation(a + "_payload", JSON.stringify(n)),
                  o.metadata.wizard_name != null &&
                    e.addAnnotation("wizard_name", o.metadata.wizard_name),
                  o.metadata.wizard_session_id != null &&
                    e.addAnnotation(
                      "wizard_session_id",
                      o.metadata.wizard_session_id,
                    ),
                  o.metadata.entry_point != null &&
                    e.addAnnotation("entry_point", o.metadata.entry_point),
                  o.metadata.context != null &&
                    e.addAnnotation("context", o.metadata.context),
                  o.metadata.payment_account_id != null &&
                    e.addAnnotation(
                      "payment_account_id",
                      o.metadata.payment_account_id,
                    ),
                  o.metadata.session_id != null &&
                    e.addAnnotation("session_id", o.metadata.session_id),
                  o.metadata.credential_type != null &&
                    e.addAnnotation(
                      "credential_type",
                      o.metadata.credential_type,
                    ),
                  n.flow_milestone != null &&
                    e.addAnnotation("flow_milestone", n.flow_milestone),
                  o.metadata.external_flow_id != null &&
                    e.addAnnotation(
                      "external_flow_id",
                      o.metadata.external_flow_id,
                    ),
                  o.metadata.business_id != null &&
                    e.addAnnotation("business_id", o.metadata.business_id),
                  o.metadata.org_id != null &&
                    e.addAnnotation("org_id", o.metadata.org_id));
              });
          }
        }),
        (t.logError = function (n, r) {
          if (r.target_name !== e.PRELOADED_QUERY_TARGET_NAME) {
            var t = babelHelpers.extends({}, r, {
              error_name: n,
              event_result: "fail",
            });
            (this.internalLogError(t), this.$1());
          }
        }),
        (t.logBillingPayloadError = function (t, n, r, o) {
          var e, a, i, l;
          this.logError(t, {
            error_code: n.exception_code,
            error_message: n.exception_message,
            error_stacktrace: n.error_stacktrace,
            event_action:
              (e = (a = n.upl_event) == null ? void 0 : a.action) != null
                ? e
                : "unknown",
            event_result: "fail",
            event_side: "client",
            exception_category: o != null ? o : void 0,
            exception_class: n.exception_class,
            extra_data: r,
            target_name:
              (i = (l = n.upl_event) == null ? void 0 : l.document_name) != null
                ? i
                : "error_handler",
          });
        }),
        (t.getSessionID = function () {
          return this.metadata.session_id;
        }),
        (t.getInteractionID = function () {
          var e;
          return (e = this.metadata.interaction_id) != null ? e : "";
        }),
        (t.getUPLContext = function () {
          return this.metadata.context;
        }),
        (t.internalLogEvent = function (n) {
          var t = this.buildUPLBundleBillingEvent(n);
          r("IsWebDriverTestRunning")()
            ? (e.captureEventForE2E(t),
              r("UplBundleBillingFalcoEvent").logRealtimeEvent(function () {
                return t;
              }))
            : r("UplBundleBillingFalcoEvent").log(function () {
                return t;
              });
        }),
        (t.internalLogError = function (n) {
          var t = this.buildUPLBundleBillingError(n);
          r("IsWebDriverTestRunning")()
            ? (e.captureEventForE2E(t),
              r("UplBundleBillingFalcoEvent").logRealtimeEvent(function () {
                return t;
              }))
            : r("UplBundleBillingFalcoEvent").log(function () {
                return t;
              });
        }),
        (t.$1 = function () {}),
        (t.getLoggingData = function (t) {
          var e;
          return babelHelpers.extends(
            {
              billing_notification_id:
                (e = this.metadata.billing_notification_id) != null
                  ? e
                  : void 0,
              context: this.metadata.context,
              credential_id: this.metadata.credential_id,
              credential_type: this.metadata.credential_type,
              entry_point: this.metadata.entry_point,
              external_flow_id: this.metadata.external_flow_id,
              target_name: t,
              user_session_id: this.metadata.session_id,
            },
            this.getLoggingDataImpl(),
          );
        }),
        (t.getBasicLoggingData = function (t) {
          return babelHelpers.extends(
            {
              context: this.metadata.context,
              target_name: t,
              user_session_id: this.metadata.session_id,
            },
            this.getBasicLoggingDataImpl(),
          );
        }),
        (t.getBasicLoggingDataImpl = function () {
          return {};
        }),
        (t.getLoggingDataImpl = function () {
          return {};
        }),
        (e.generateSessionID = function () {
          return o("BillingUPSessionIdUtils").generateBillingUPSessionId();
        }),
        (e.captureEventForE2E = function (t) {
          var e = globalThis;
          if (e.__billing_upl_captured_events__ != null)
            e.__billing_upl_captured_events__.push(t);
          else {
            var n = "__billing_upl_captured_events__";
            Object.defineProperty(globalThis, n, {
              configurable: !0,
              enumerable: !0,
              value: [t],
              writable: !0,
            });
          }
        }),
        (t.appendMetadataIfNotNull = function (t) {
          var e = {};
          for (var n in t)
            if (t[n] != null) {
              var r;
              e = babelHelpers.extends({}, e, ((r = {}), (r[n] = t[n]), r));
            }
          this.metadata = babelHelpers.extends({}, this.metadata, e);
        }),
        (t.logDebugEvent = function (n, r) {
          var t = {
            event_action: "execute",
            event_content: e.DEBUG_EVENT_CONTEXT,
            event_result: "enter",
            event_side: "client",
            extra_data: r,
            target_name: n,
          };
          this.logEvent(t);
        }),
        (t.logClickEvent = function (t, n) {
          var e = {
            event_action: "click",
            event_result: "atomic",
            event_side: "user",
            extra_data: n,
            target_name: t,
          };
          this.logEvent(e);
        }),
        (t.logEditFormEvent = function (t, n) {
          var e = {
            event_action: "edit",
            event_result: "enter",
            event_side: "user",
            extra_data: n,
            target_name: t,
          };
          this.logEvent(e);
        }),
        (t.buildUPLBundleBillingEvent = function (n, r) {
          var t, o, a, i, l, s, u, c, d, m;
          this.metadata.context.trim() === "" &&
            ((this.metadata.context = "billingdefault"),
            (n.extra_data = babelHelpers.extends({}, n.extra_data, {
              debug_info: "Issue:MISSING_EVENT_NAME",
            })));
          var p = (t = this.metadata.context) != null ? t : "billingdefault";
          n.event_content === e.DEBUG_EVENT_CONTEXT &&
            (p = e.DEBUG_EVENT_CONTEXT);
          var _ = [
              (o = n.event_side) != null ? o : "client",
              (a = n.event_action) != null ? a : "unknown",
              p,
              (i = n.event_result) != null ? i : "fail",
            ].join("_"),
            f = babelHelpers.extends(
              {
                billing_notification_id:
                  (l = this.metadata.billing_notification_id) != null
                    ? l
                    : void 0,
                entry_point: this.metadata.entry_point,
                external_flow_id: this.metadata.external_flow_id,
                is_changed:
                  ((s = n.extra_data) == null ? void 0 : s.is_changed) ===
                  "true",
                is_enabled: !((u = n.is_disabled) != null && u),
                payment_account_id: this.metadata.payment_account_id,
                surface_name: (c = this.metadata.surface_name) != null ? c : "",
                target_name: n.target_name,
                view_name: this.metadata.view_name,
              },
              r,
            ),
            g = {
              actual_event_time: Date.now().toString(),
              event_name: _,
              event_payload: f,
              extra_data: (d = n.extra_data) != null ? d : void 0,
              platform: (m = this.metadata.platform) != null ? m : "derived",
              product_type: "billing",
              session_id: this.metadata.session_id,
            };
          return g;
        }),
        (t.buildUPLBundleBillingError = function (t, n) {
          var e,
            r,
            o,
            a,
            i = this.buildUPLBundleBillingEvent(t, n);
          return babelHelpers.extends({}, i, {
            error_code:
              (e = (r = t.error_code) == null ? void 0 : r.toString()) != null
                ? e
                : void 0,
            error_message: t.error_message,
            error_stacktrace: (o = t.error_stacktrace) != null ? o : void 0,
            extra_data: babelHelpers.extends({}, i.extra_data, {
              error_category: (a = t.exception_category) != null ? a : "system",
              error_type: t.error_name,
            }),
          });
        }),
        (t.transformPaymentMethodTypeToUPL = function (t) {
          switch (t) {
            case "NEW_CREDIT_CARD":
            case "CC":
              return "CREDIT_CARD";
            case "NEW_DIRECT_DEBIT":
            case "DirectDebit":
              return "DIRECT_DEBIT";
            case "NEW_PAYPAL_BA":
              return "PAYPAL_BA";
            default:
              return t;
          }
        }),
        e
      );
    })();
    ((e.DEBUG_EVENT_CONTEXT = "billingdebug"),
      (e.PRELOADED_QUERY_TARGET_NAME = "preloaded_query"),
      (e.default_static_session = e.generateSessionID()),
      (l.default = e));
  },
  98,
);
