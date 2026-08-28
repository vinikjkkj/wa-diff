__d(
  "BillingWizardCustomerBehaviorLoggerImpl",
  ["CustomerBehaviorLoggerBase", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "Close",
      u = "Save",
      c = "Back",
      d = new Set([
        "ADD_FUNDS",
        "ADD_FUNDS_EP",
        "ADD_FUNDS_ONE_CLICK",
        "ADD_FUNDS_SUB_CONFIG",
        "IAP_ADD_FUNDS",
        "IAP_ADD_FUNDS_INIT",
        "IAP_ADD_FUNDS_INIT_V2",
      ]),
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.sessionActive = !1),
            (e.$BillingWizardCustomerBehaviorLoggerImpl$p_1 = function (t) {
              var n = t.target;
              if (n instanceof HTMLElement) {
                var r = n.closest('[aria-label="' + s + '"]');
                r && e.logButtonClick({ source: "aria-label", value: s });
                var o = n.closest('[aria-label="' + u + '"]');
                o && e.logButtonClick({ source: "aria-label", value: u });
                var a = n.closest('[aria-label="' + c + '"]');
                a && e.logButtonClick({ source: "aria-label", value: c });
              }
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.initialize = function (n) {
            ((this.wizardName = n.wizardName),
              t.prototype.init.call(this, {
                businessID: n.businessID,
                flowSessionID: n.flowSessionID,
                paymentAccountID: n.paymentAccountID,
                uplSessionID: n.uplSessionID,
                uri: n.uri,
              }),
              this.initBillingWizardListeners(),
              (this.sessionActive = !0));
          }),
          (o.deregisterUnloadListener = function () {
            (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              window.removeEventListener("beforeunload", this.detectUnload);
          }),
          (o.registerUnloadListener = function () {
            this.sessionActive &&
              (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              window.addEventListener("beforeunload", this.detectUnload);
          }),
          (o.initBillingWizardListeners = function () {
            document.addEventListener(
              "click",
              this.$BillingWizardCustomerBehaviorLoggerImpl$p_1,
            );
          }),
          (o.getUseCaseCategory = function () {
            var e = this.wizardName;
            return e != null && d.has(e) ? "ads_add_funds" : "billing_wizard";
          }),
          (o.getUseCaseSubcategory = function () {
            return this.wizardName;
          }),
          (o.getUsePubSub = function () {
            return this.usePubSub;
          }),
          (o.setUsePubSub = function (t) {
            this.usePubSub = t;
          }),
          (o.cleanup = function () {
            ((this.sessionActive = !1),
              t.prototype.cleanup.call(this),
              document.removeEventListener(
                "click",
                this.$BillingWizardCustomerBehaviorLoggerImpl$p_1,
              ));
          }),
          n
        );
      })(o("CustomerBehaviorLoggerBase").CustomerBehaviorLoggerBase);
    l.BillingWizardCustomerBehaviorLoggerImpl = m;
  },
  98,
);
