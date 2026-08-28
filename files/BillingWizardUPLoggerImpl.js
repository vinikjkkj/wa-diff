__d(
  "BillingWizardUPLoggerImpl",
  [
    "BillingAbstractUPLogger",
    "RelayAPIConfig",
    "interaction-tracing-metrics",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        var n;
        return (
          (n =
            e.call(this, { wizard_session_id: t.generateWizardSessionID() }) ||
            this),
          (r("RelayAPIConfig").customHeaders["X-BH-FLOWSESSIONID"] =
            n.metadata.wizard_session_id),
          (n.screenMetadata = {}),
          (n.$BillingWizardUPLoggerImpl$p_1 = new Set()),
          (n.$BillingWizardUPLoggerImpl$p_2 = new Set()),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.enterWizard = function (t, n) {
          var e,
            r = this.metadata.wizard_session_id;
          if (!this.$BillingWizardUPLoggerImpl$p_1.has(r)) {
            this.$BillingWizardUPLoggerImpl$p_1.add(r);
            var o = t;
            this.appendMetadataIfNotNull({ context: n, wizard_name: o });
            var a = {
              event_action: "execute",
              event_result: "enter",
              event_side: "client",
              target_name:
                (e = this.metadata.wizard_name) != null ? e : "enter_wizard",
            };
            this.logEvent(a);
          }
        }),
        (n.logClickEvent = function (t, n, r) {
          var e = babelHelpers.extends({}, r, {
            event_action: "click",
            event_result: "atomic",
            event_side: "user",
            extra_data: n,
            target_name: t != null ? t : "",
          });
          this.logEvent(e);
        }),
        (n.logWizardInitLoadEvent = function (t, n, r, o, a) {
          var e = this.metadata.wizard_session_id;
          if (!this.$BillingWizardUPLoggerImpl$p_2.has(e)) {
            this.$BillingWizardUPLoggerImpl$p_2.add(e);
            var i = t,
              l;
            switch (t) {
              case "ADD_PM":
              case "ADD_PM_NUX":
              case "ADD_PM_PUX":
              case "ADD_PM_PUX_EP":
              case "ADD_PM_NUX_EP":
              case "ADD_PM_NUX_EP_V2":
              case "ADD_PM_UPI_FIRST_EP":
                l = "billingaddpm";
                break;
              case "ADD_FUNDS":
              case "ADD_FUNDS_EP":
              case "IAP_ADD_FUNDS":
                l = "billingaddfunds";
                break;
              case "PAY_NOW":
              case "PAY_NOW_EP":
                l = "billingpaynow";
                break;
              case "COLLECT_ACCOUNT_INFO":
                l = "billingaccountinfo";
                break;
              case "RESOLVE_SDC_FRICTION":
                l = "billingselfresolution";
                break;
              case "CHANGE_CARD_AVAILABILITY":
              case "EDIT_CREDIT_CARD":
                l = "billingcreditcard";
                break;
              case "ASSIGN_AD_CREDITS":
                l = "billingcoupon";
                break;
              case "UPDATE_ACCOUNT_SPEND_LIMIT":
                l = "billingspendlimits";
                break;
              case "VERIFY_COUNTRY":
                l = "billingverifycountry";
                break;
              case "MI_ONBOARDING":
              case "MI_MANDATE":
              case "SHARE_MONTHLY_INVOICING":
                l = "billingmonthlyinvoicing";
                break;
              default:
                l = "billingdefault";
                break;
            }
            this.appendMetadataIfNotNull({
              context: l,
              entry_point: r,
              external_flow_id: o,
              payment_account_id: n,
              surface_name: a,
              view_name: "NONE",
              wizard_name: i,
            });
            var s = {
              event_action: "execute",
              event_result: "init",
              event_side: "client",
              target_name: t,
            };
            this.logEvent(s);
          }
        }),
        (n.exitWizard = function (t) {
          var e,
            n = {
              event_action: "execute",
              event_result: "exit",
              event_side: "client",
              target_name:
                (e = this.metadata.wizard_name) != null ? e : "exit_wizard",
              wizardExitType: t,
            };
          (this.logEvent(n), this.clearMetaData());
        }),
        (n.clearMetaData = function () {
          var e = this.metadata.billing_notification_id,
            n = this.metadata.platform,
            o = this.metadata.session_id,
            a = this.metadata.business_id,
            i = this.metadata.entry_point,
            l = this.metadata.payment_account_id;
          ((this.metadata = {
            billing_notification_id: e,
            business_id: a,
            context: "billingdefault",
            entry_point: i,
            payment_account_id: l,
            platform: n,
            session_id: o,
            wizard_session_id: t.generateWizardSessionID(),
          }),
            (this.screenMetadata = {}),
            (r("RelayAPIConfig").customHeaders["X-BH-FLOWSESSIONID"] = ""));
        }),
        (n.setWizardConfig = function (t, n) {
          var e = t;
          this.appendMetadataIfNotNull({
            context: n != null ? n : "billingdefault",
            view_name: e,
          });
        }),
        (n.setWizardMetadata = function (t) {
          this.wizardMetadata = babelHelpers.extends({}, t);
        }),
        (n.setWizardScreen = function (t, n) {
          var e = "Started";
          if (
            (t === "success_status_state_display" && (e = "Completed"),
            this.screenMetadata.sub_screen !== t)
          ) {
            var r,
              a =
                (r = this.screenMetadata.interaction_id) != null
                  ? r
                  : this.metadata.interaction_id;
            a != null &&
              o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.addMetadata(a, "wizardScreen", t);
            var i = {
              event_action: "render",
              event_result: "display",
              event_side: "client",
              flow_milestone: e,
              target_name: t,
            };
            ((this.screenMetadata = babelHelpers.extends({ sub_screen: t }, n)),
              this.logEvent(i));
          }
        }),
        (n.getLoggingDataImpl = function () {
          var e;
          return {
            allocation_type: this.metadata.allocation_type,
            billing_notification_id:
              (e = this.metadata.billing_notification_id) != null ? e : void 0,
            business_id: this.metadata.business_id,
            entry_point: this.metadata.entry_point,
            flow_enum: this.metadata.flow_enum,
            is_in_mi_upsell: this.metadata.is_in_mi_upsell,
            mi_app_id: this.metadata.mi_app_id,
            org_id: this.metadata.org_id,
            receiving_business_id: this.metadata.receiving_business_id,
            wizard_config_name: this.metadata.view_name,
            wizard_name: this.metadata.wizard_name,
            wizard_screen_name: this.screenMetadata.sub_screen,
            wizard_session_id: this.metadata.wizard_session_id,
          };
        }),
        (n.getBasicLoggingDataImpl = function () {
          return { wizard_session_id: this.metadata.wizard_session_id };
        }),
        (t.generateWizardSessionID = function () {
          return "upl_wizard_" + Date.now() + "_" + r("uuidv4")();
        }),
        (n.getDefaultBundleBillingEvent = function (t, n, r) {
          var e = this,
            o = Array.from(
              new Set(
                [].concat(
                  Object.keys(this.screenMetadata),
                  Object.keys(this.wizardMetadata),
                  Object.keys(r),
                ),
              ),
            ).filter(function (e) {
              return !n.includes(e);
            }),
            a = o.map(function (n) {
              var o, a, i, l;
              return [
                (o = t[n]) != null ? o : n,
                (a =
                  (i = (l = r[n]) != null ? l : e.screenMetadata[n]) != null
                    ? i
                    : e.wizardMetadata[n]) != null
                  ? a
                  : void 0,
              ];
            });
          return Object.fromEntries(a);
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
            D,
            x,
            $,
            P,
            N,
            M,
            w,
            A,
            F,
            O,
            B,
            W,
            q,
            U,
            V,
            H,
            G,
            z,
            j,
            K;
          return e.prototype.buildUPLBundleBillingEvent.call(
            this,
            n,
            babelHelpers.extends(
              {},
              this.getDefaultBundleBillingEvent(
                {
                  currency: "limit_currency",
                  wizardExitType: "wizard_exit_type",
                },
                [
                  "credential_type",
                  "context",
                  "event_action",
                  "event_result",
                  "event_side",
                  "extra_data",
                  "wizard_session_id",
                  "session_id",
                  "platform",
                  "exception_class",
                  "exception_category",
                  "error_stacktrace",
                  "state",
                ],
                n,
              ),
              {
                advertising_purpose:
                  n == null || (t = n.extra_data) == null
                    ? void 0
                    : t.advertising_purpose,
                agency_representing_client:
                  (o = n.is_agency_representing_client) != null ? o : !1,
                allocation_type:
                  (a = this.metadata.allocation_type) != null ? a : void 0,
                billing_notification_id:
                  (i = this.metadata.billing_notification_id) != null
                    ? i
                    : void 0,
                billing_safe_mode_onboarding_step:
                  (l = this.metadata.billing_safe_mode_onboarding_step) != null
                    ? l
                    : void 0,
                business_account_id:
                  (s = this.metadata.business_id) != null ? s : void 0,
                business_tax_id_type:
                  (u =
                    (c = n.extra_data) == null || (c = c.tax_id_type) == null
                      ? void 0
                      : c.toString()) != null
                    ? u
                    : "",
                credential_id:
                  (d =
                    (m =
                      (p = this.screenMetadata.credential_id) != null
                        ? p
                        : this.wizardMetadata.credential_id) != null
                      ? m
                      : n == null || (_ = n.extra_data) == null
                        ? void 0
                        : _.credential_id) != null
                    ? d
                    : void 0,
                credential_type:
                  (f =
                    (g = this.transformPaymentMethodTypeToUPL(
                      this.screenMetadata.credential_type,
                    )) != null
                      ? g
                      : this.transformPaymentMethodTypeToUPL(
                          this.wizardMetadata.credential_type,
                        )) != null
                    ? f
                    : void 0,
                default_country:
                  (h = this.screenMetadata.default_country) != null
                    ? h
                    : void 0,
                default_currency:
                  (y = this.screenMetadata.default_currency) != null
                    ? y
                    : void 0,
                default_timezone:
                  (C = this.screenMetadata.default_timezone) != null
                    ? C
                    : void 0,
                flow_enum: (b = this.metadata.flow_enum) != null ? b : void 0,
                flow_milestone:
                  (v =
                    (S = this.screenMetadata.flow_milestone) != null
                      ? S
                      : n.flow_milestone) != null
                    ? v
                    : void 0,
                flow_session_id: this.metadata.wizard_session_id,
                has_written_mandate_form_advertiser:
                  (R = n.has_written_mandate_form_advertiser) != null ? R : !1,
                initial_flow_name:
                  (L =
                    (E = this.metadata.entry_point) == null
                      ? void 0
                      : E.toLowerCase()) != null
                    ? L
                    : void 0,
                is_advertising_for_multiple_clients:
                  (k = n.is_advertising_for_multiple_clients) != null ? k : !1,
                is_client_paying_invoices:
                  (I = n.is_client_paying_invoices) != null ? I : !1,
                is_in_mi_upsell:
                  (T = this.metadata.is_in_mi_upsell) != null ? T : !1,
                is_nux: (D = this.metadata.is_nux) != null ? D : void 0,
                is_recurring_card:
                  (x =
                    ($ = this.screenMetadata.is_credential_recurring) != null
                      ? $
                      : this.wizardMetadata.is_credential_recurring) != null
                    ? x
                    : !1,
                mi_app_id: (P = this.metadata.mi_app_id) != null ? P : void 0,
                new_payment_method_options:
                  (N = this.screenMetadata.new_payment_method_options) != null
                    ? N
                    : void 0,
                order_id: (M = this.metadata.order_id) != null ? M : void 0,
                org_id: (w = this.metadata.org_id) != null ? w : void 0,
                page_id: (A = this.metadata.page_id) != null ? A : void 0,
                payment_amount:
                  (F =
                    (O = this.screenMetadata.payment_amount) != null
                      ? O
                      : this.wizardMetadata.payment_amount) != null
                    ? F
                    : void 0,
                product_name:
                  (B = this.metadata.product_name) != null ? B : void 0,
                quote_id: (W = this.metadata.quote_id) != null ? W : void 0,
                receiving_business_id:
                  (q = this.metadata.receiving_business_id) != null
                    ? q
                    : void 0,
                surface_name: (U = this.metadata.surface_name) != null ? U : "",
                target_url:
                  (V = (H = n.extra_data) == null ? void 0 : H.target_url) !=
                  null
                    ? V
                    : void 0,
                timezone:
                  (G = (z = n.extra_data) == null ? void 0 : z.timezone) != null
                    ? G
                    : void 0,
                usable_payment_methods:
                  (j = this.screenMetadata.usable_payment_methods) != null
                    ? j
                    : void 0,
                wizard_name:
                  (K = this.metadata.wizard_name) != null ? K : void 0,
              },
              r,
            ),
          );
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
        (n.logMutationEvent = function (t, n, r, o) {
          var e = babelHelpers.extends(
            {
              event_action: "mutate",
              event_result: o,
              event_side: "client",
              extra_data: n,
              target_name: t,
            },
            r,
          );
          this.logEvent(e);
        }),
        (n.logMutationError = function (t, n, r, o) {
          var e = {
            error_code: o.errorPayload.exception_code,
            error_message: o.message,
            event_action: "mutate",
            event_result: "fail",
            event_side: "client",
            extra_data: n,
            target_name: t,
          };
          this.logError(o.type, e);
        }),
        (n.appendScreenMetadata = function (t) {
          var e = {};
          for (var n in t)
            if (t[n] != null) {
              var r;
              e = babelHelpers.extends({}, e, ((r = {}), (r[n] = t[n]), r));
            }
          this.screenMetadata = babelHelpers.extends(
            {},
            this.screenMetadata,
            e,
          );
        }),
        (n.appendMetadataIfNotNull = function (n) {
          var t = {};
          for (var r in n)
            if (n[r] != null) {
              var o;
              t = babelHelpers.extends({}, t, ((o = {}), (o[r] = n[r]), o));
            }
          ((this.screenMetadata = babelHelpers.extends(
            {},
            this.screenMetadata,
            t,
          )),
            e.prototype.appendMetadataIfNotNull.call(this, n));
        }),
        (n.setQE = function (t) {
          this.billingQE = t;
        }),
        t
      );
    })(r("BillingAbstractUPLogger"));
    l.default = e;
  },
  98,
);
