__d(
  "BillingWizardInitUtils",
  [
    "BillingWizardGeneratedStateState",
    "BillingWizardRootUPLogger",
    "BillingWizardStatesEnum",
    "JSResourceForInteraction",
    "Promise",
    "asyncToGeneratorRuntime",
    "buildInternalWizardBillingError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return t.reduce(function (t, n) {
        if (e[n] != null) {
          var r;
          return babelHelpers.extends({}, t, ((r = {}), (r[n] = e[n]), r));
        }
        return t;
      }, {});
    }
    function u(t, o, a) {
      var i = s(t, o);
      return {
        BACK: function () {
          return (e || (e = n("Promise"))).resolve(a("closed", i));
        },
        CURRENCY_CHANGE: function () {
          return (
            r("BillingWizardRootUPLogger").exitWizard("currency_change"),
            (e || (e = n("Promise"))).resolve(a("currency_change", i))
          );
        },
        DONE: function (i) {
          if (i.props.status != null)
            return (e || (e = n("Promise"))).resolve(c(i));
          r("BillingWizardRootUPLogger").exitWizard("complete");
          var t = s(i.props, o);
          return (e || (e = n("Promise"))).resolve(a("complete", t));
        },
        EXIT: function () {
          return (
            r("BillingWizardRootUPLogger").exitWizard("closed"),
            (e || (e = n("Promise"))).resolve(a("closed", i))
          );
        },
        NEW_ACCOUNT_CREATED: function (i) {
          r("BillingWizardRootUPLogger").exitWizard("new_account_created");
          var t = i.props.paymentAccountID;
          return (e || (e = n("Promise"))).resolve(
            a(
              "new_account_created",
              babelHelpers.extends({}, s(i.props, o), { paymentAccountID: t }),
            ),
          );
        },
        REDIRECT_BUSINESS_VERIFICATION: function () {
          return (e || (e = n("Promise"))).resolve(
            a("redirect_business_verification", i),
          );
        },
        STATUS: function (r) {
          return (e || (e = n("Promise"))).resolve(c(r));
        },
        WIZARD: function (r) {
          return (e || (e = n("Promise"))).resolve(d(r));
        },
      };
    }
    function c(e) {
      var t,
        n,
        a = new (o("BillingWizardGeneratedStateState").GeneratedStateState)(
          e.state.events,
          function (e) {
            return e.status;
          },
        ),
        i = (t = e.props.status) == null ? void 0 : t.type,
        l = "success_status_state_display";
      switch (i) {
        case "ERROR":
          l = "error_status_state_display";
          break;
        case "WARNING":
          l = "warning_status_state_display";
          break;
        case "LEARN":
          l = "learn_status_state_display";
          break;
        default:
          break;
      }
      return (
        ((n = e.props.status) == null ? void 0 : n.type) === "SUCCESS" &&
          (a = new (o("BillingWizardGeneratedStateState").GeneratedStateState)(
            babelHelpers.extends({}, e.state.events, {
              onClose: r("BillingWizardStatesEnum").DONE,
            }),
            function (e) {
              return e.status;
            },
          )),
        (a.name = l),
        babelHelpers.extends({}, e, { state: a })
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.props.configName == null)
            throw r("buildInternalWizardBillingError")(
              "handleWizard: configName is null",
              "required parameter is missing or invalid",
            );
          var t = yield r("JSResourceForInteraction")(
            "BillingRequiredWizardState",
          )
            .__setRef("BillingWizardInitUtils")
            .load()
            .then(function (e) {
              return e.default != null ? e.default : e;
            });
          return babelHelpers.extends({}, e, {
            state: new t(
              r("JSResourceForInteraction")("BillingAutoConfig").__setRef(
                "BillingWizardInitUtils",
              ),
              "BillingAutoConfig",
            ),
          });
        })),
        m.apply(this, arguments)
      );
    }
    var p = function (t, n) {
      return t
        .filter(function (e) {
          return n[e] == null;
        })
        .join(", ");
    };
    function _(e) {
      var t;
      return e == null
        ? null
        : {
            internalState_DO_NOT_USE: e,
            state: {
              direction: e.direction,
              exitConfirmationDialog:
                e == null || (t = e.config) == null
                  ? void 0
                  : t.exitConfirmationDialog,
              hasBack: e.hasBack,
              interactionUUID: e.interactionUUID,
              output: s(e.props, e.config.output),
              props: e.props,
              state: e.state,
              title: e.title,
            },
          };
    }
    ((l.buildInitJumpTable = u),
      (l.findMissingRequiredProps = p),
      (l.buildState = _));
  },
  98,
);
