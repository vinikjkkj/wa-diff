__d(
  "BillingSurfaceUPLoggerImpl",
  ["BillingAbstractUPLogger", "BillingHubUPLContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        var t;
        return ((t = e.call(this, {}) || this), (t.screenMetadata = {}), t);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setSurfaceName = function (t) {
          this.metadata.surface_name = t;
        }),
        (n.setViewName = function (t) {
          ((this.screenMetadata.view_name = t),
            (this.metadata.context = o(
              "BillingHubUPLContext",
            ).getBillingHubUPLContextForRoute(t)));
        }),
        (n.setPlacement = function (t) {
          ((this.screenMetadata.entry_point = String(t)),
            (this.metadata.entry_point = String(t)));
        }),
        (n.setSubScreenName = function (t, n) {
          var e = {
            event_action: "render",
            event_result: "display",
            event_side: "client",
            extra_data: babelHelpers.extends({}, n, {
              sub_screen: String(t != null ? t : ""),
            }),
            target_name: String(t != null ? t : ""),
          };
          this.logEvent(e);
        }),
        (n.logQueryEvent = function (t, n, r, o) {
          var e = babelHelpers.extends(
            {
              event_action: "fetch",
              event_result: o,
              event_side: "client",
              extra_data: n,
              target_name: t,
            },
            r,
          );
          this.logEvent(e);
        }),
        (n.logQueryError = function (t, n, r, o) {
          var e = {
            error_code: o.errorPayload.exception_code,
            error_message: o.message,
            event_action: "fetch",
            event_result: "fail",
            event_side: "client",
            extra_data: n,
            target_name: t,
          };
          this.logError(o.type, e);
        }),
        (n.getLoggingData = function (t) {
          var e, n, r, o;
          return {
            billing_notification_id:
              (e = this.metadata.billing_notification_id) != null ? e : void 0,
            business_id: (n = this.metadata.business_id) != null ? n : void 0,
            entry_point:
              (r = this.metadata.entry_point) != null ? r : "BILLING_HUB",
            external_flow_id:
              (o = this.metadata.external_flow_id) != null ? o : void 0,
            target_name: t,
          };
        }),
        (n.logClickEvent = function (t, n) {
          var e = {
            event_action: "click",
            event_result: "atomic",
            event_side: "user",
            extra_data: n,
            target_name: t != null ? t : "",
          };
          this.logEvent(e);
        }),
        (n.buildUPLBundleBillingEvent = function (n, r) {
          var t,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R,
            L,
            E,
            k,
            I,
            T,
            D =
              this.metadata.billing_hub_payment_settings_config_driven == null
                ? {}
                : {
                    billing_hub_payment_settings_config_driven: String(
                      this.metadata.billing_hub_payment_settings_config_driven,
                    ),
                  },
            x = e.prototype.buildUPLBundleBillingEvent.call(
              this,
              n,
              babelHelpers.extends({}, r, {
                billing_notification_id:
                  (t = this.metadata.billing_notification_id) != null
                    ? t
                    : void 0,
                credential_id:
                  (o = (a = n.extra_data) == null ? void 0 : a.credential_id) !=
                  null
                    ? o
                    : void 0,
                credential_type:
                  (i =
                    (l = n.extra_data) == null ? void 0 : l.credential_type) !=
                  null
                    ? i
                    : void 0,
                cta_text:
                  (s =
                    n == null || (u = n.extra_data) == null
                      ? void 0
                      : u.cta_text) != null
                    ? s
                    : void 0,
                eligible_experiences:
                  (c = n.extra_data) != null && c.experience_name
                    ? [(d = n.extra_data) == null ? void 0 : d.experience_name]
                    : void 0,
                event_target:
                  (m =
                    n == null || (p = n.extra_data) == null
                      ? void 0
                      : p.event_target) != null
                    ? m
                    : void 0,
                is_in_mi_upsell:
                  (_ = this.metadata.is_in_mi_upsell) != null ? _ : !1,
                is_primary_credential:
                  (f = n.extra_data) != null && f.is_primary_credential
                    ? !!((g = n.extra_data) != null && g.is_primary_credential)
                    : void 0,
                is_recurring_card:
                  (h = n.extra_data) != null && h.is_credential_recurring
                    ? !!(
                        (y = n.extra_data) != null && y.is_credential_recurring
                      )
                    : void 0,
                needs_verification:
                  (C = n.extra_data) != null && C.needs_verification
                    ? !!((b = n.extra_data) != null && b.needs_verification)
                    : void 0,
                report_type: (v = n.report_type) != null ? v : void 0,
                sub_screen:
                  (S =
                    (R =
                      n == null || (L = n.extra_data) == null
                        ? void 0
                        : L.pageComponentName) != null
                      ? R
                      : n == null || (E = n.extra_data) == null
                        ? void 0
                        : E.sub_screen) != null
                    ? S
                    : void 0,
                surface_name: String(
                  (k = this.metadata.surface_name) != null ? k : "",
                ),
                view_name: String(
                  (I = this.screenMetadata.view_name) != null ? I : "",
                ),
                wizard_name:
                  (T = this.metadata.wizard_name) != null ? T : void 0,
              }),
            );
          return babelHelpers.extends({}, x, {
            extra_data: babelHelpers.extends({}, x.extra_data, D, {
              logger: "BillingSurfaceUPLogger",
            }),
          });
        }),
        t
      );
    })(r("BillingAbstractUPLogger"));
    l.default = e;
  },
  98,
);
