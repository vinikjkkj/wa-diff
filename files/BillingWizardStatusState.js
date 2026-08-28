__d(
  "BillingWizardStatusState",
  [
    "BillingWizardDisplayState",
    "BillingWizardRootUPLogger",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("deferredLoadComponent")(
        r("requireDeferred")(
          "BillingGeneratedStatusWithNextActionsWrapper.react",
        ).__setRef("BillingWizardStatusState"),
      ),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.statusName = "success_status_state_display"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.generateStatus = function (t, n, r) {
            var e = new Error("Failed to generateStatus");
            throw (e.stack, e);
          }),
          (n.getWizardStatusScreenName = function () {
            var e,
              t = (e = this.status) == null ? void 0 : e.type;
            switch (t) {
              case "ERROR":
                this.statusName = "error_status_state_display";
                break;
              case "WARNING":
                this.statusName = "warning_status_state_display";
                break;
              case "LEARN":
                this.statusName = "learn_status_state_display";
                break;
              default:
                break;
            }
          }),
          (n.onDisplay = function (t) {
            if (this.status == null) {
              var e = new Error("Failed to generateStatus");
              throw (e.stack, e);
            }
            return s.jsx(u, {
              props: t,
              status: this.status,
              triggerEvent: t.wrapperProps.triggerEvent,
              wrapperProps: t.wrapperProps,
            });
          }),
          (n.onDisplayInternal = function (t, n, o) {
            var e;
            return (
              (this.status = this.generateStatus(t, n, o)),
              this.getWizardStatusScreenName(),
              ((e = this.status) == null ? void 0 : e.loggingMessage) != null &&
                r("BillingWizardRootUPLogger").logDebugEvent(
                  "status_screen_shown",
                  {
                    status_message: this.status.loggingMessage,
                    type: this.status.type,
                  },
                ),
              this.onDisplay(t)
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.StatusState = c;
  },
  98,
);
