__d(
  "BillingWizardConfigParserUtils",
  [
    "BillingError",
    "BillingErrorUtils",
    "BillingUPLoggingTypes",
    "BillingWizardConfigUtils",
    "BillingWizardInitUtils",
    "BillingWizardRootUPLogger",
    "JSResourceForInteraction",
    "asyncToGeneratorRuntime",
    "buildInternalWizardBillingError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
      "BillingWizardGetPaymentAccountID",
    ).__setRef("BillingWizardConfigParserUtils");
    function s(e, t) {
      var n = babelHelpers.extends({}, e, { status: void 0 });
      return babelHelpers.extends({}, n, t);
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            var l,
              s,
              u = i.relay,
              c = o("BillingWizardConfigUtils").buildConfig(yield t.load());
            (n.paymentMethodID != null &&
              r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
                credential_id: n.paymentMethodID,
              }),
              n.paymentMethodType != null &&
                r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
                  credential_type: n.paymentMethodType,
                }));
            var d = n;
            if (
              c.required.includes("paymentAccountID") &&
              n.paymentAccountID == null
            ) {
              var m = yield e.load(),
                p = yield m(u);
              p != null && (d.paymentAccountID = p);
            }
            (r("BillingWizardRootUPLogger").setWizardConfig(
              c.name,
              (l = c.logging_context) != null ? l : "billingdefault",
            ),
              r("BillingWizardRootUPLogger").setWizardMetadata({
                payment_account_id: d.paymentAccountID,
              }),
              r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
                entry_point: i.getEntryPoint(),
              }),
              r("BillingWizardRootUPLogger").enterWizard(
                c.name,
                (s = c.logging_context) != null ? s : "billingdefault",
              ));
            var _ = o("BillingWizardInitUtils").findMissingRequiredProps(
              c.required,
              d,
            );
            if (_ !== "")
              throw r("buildInternalWizardBillingError")(
                "Missing Required Prop: " + _ + " for: " + c.name,
                "required props is missing or invalid",
                o("BillingErrorUtils").BILLING_ERRORS__WIZARD_MISSING_PROP,
              );
            c.configPropsInitialization != null &&
              (d = babelHelpers.extends({}, c.configPropsInitialization, d));
            var f =
              c.hostConfig != null ? c.startState : c.states[c.entryPoint];
            return {
              config: c,
              direction: "FORWARD",
              hasBack: !1,
              jumpTable: o("BillingWizardInitUtils").buildInitJumpTable(
                d,
                c.output,
                a,
              ),
              onClose: a,
              props: d,
              state: f,
              title: c.title,
            };
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t,
        n,
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
        v = e.props,
        S = v,
        R,
        L;
      (S.paymentAmount != null &&
        (S.paymentAmount.isInput ||
          ((R = S.paymentAmount.currency),
          (L = S.paymentAmount.getRawAmountForLoggingOnly()))),
        r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
          payment_intent: (t = v.paymentIntent) != null ? t : void 0,
        }),
        r("BillingWizardRootUPLogger").setWizardMetadata({
          business_id: (n = S.businessID) != null ? n : void 0,
          context:
            (a = (i = e.config) == null ? void 0 : i.logging_context) != null
              ? a
              : "billingdefault",
          credential_id: (l = S.paymentMethodID) != null ? l : void 0,
          credential_type: S.paymentMethodType,
          currency: R,
          eligible_experiences: (s = S.experiences) != null ? s : void 0,
          is_credential_recurring:
            (u = (c = S.supportsRecurring) != null ? c : S.recurring) != null
              ? u
              : void 0,
          is_saving_recurring_lpm:
            (d = S.savingRecurringLPM) != null ? d : void 0,
          order_id: (m = S.orderID) != null ? m : void 0,
          payment_account_id: (p = S.paymentAccountID) != null ? p : void 0,
          payment_amount: L,
          payment_id: (_ = S.paymentID) != null ? _ : void 0,
          payment_intent: (f = v.paymentIntent) != null ? f : void 0,
          price_id: (g = S.priceID) != null ? g : void 0,
          provider_name: (h = S.providerID) != null ? h : void 0,
          view_name:
            (y = o("BillingUPLoggingTypes").getBillingWizardType(
              String(
                (C = e == null || (b = e.config) == null ? void 0 : b.name) !=
                  null
                  ? C
                  : "",
              ),
            )) != null
              ? y
              : void 0,
        }));
    }
    function m(e, t, n) {
      if (t instanceof r("BillingError"))
        (r("BillingWizardRootUPLogger").logDebugEvent(n),
          e.gk.LOG_REFACTORED_PRELOADING_QUERY_ERRORS.getOrDefaultIfPromise() &&
            r("BillingWizardRootUPLogger").logBillingPayloadError(
              t.type,
              t.errorPayload,
            ));
      else {
        var o, a;
        r("BillingWizardRootUPLogger").logDebugEvent(n, {
          error_message:
            (o = t == null ? void 0 : t.message) != null
              ? o
              : "unknown error message",
          error_name:
            (a = t == null ? void 0 : t.name) != null
              ? a
              : "unknown error name",
        });
      }
    }
    function p(e) {
      return (
        e === "ADD_PM" ||
        e === "ADD_PM_NUX_EP" ||
        e === "ADD_PM_NUX_EP_V2" ||
        e === "ADD_PM_PUX_EP" ||
        e === "ADD_PM_UPI_FIRST_EP" ||
        e === "ADD_PM_WITH_ACCOUNT_SELECTION" ||
        e === "PAY_NOW" ||
        e === "PAY_NOW_EP"
      );
    }
    ((l.combineProps = s),
      (l.buildInitState = u),
      (l.addLoggingMetaData = d),
      (l.handlePreloadingError = m),
      (l.shouldUseManualPreload = p));
  },
  98,
);
