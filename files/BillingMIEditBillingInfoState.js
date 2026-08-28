__d(
  "BillingMIEditBillingInfoState",
  [
    "BillingError",
    "BillingMIBillingInfoUtils",
    "BillingMIEditBillingInfoConstants",
    "BillingMIEditBillingInfoScreen.react",
    "BillingMIEditBillingInfoStateMutation.graphql",
    "BillingMIEditBillingInfoStateQuery.graphql",
    "BillingWizardDisplayState",
    "BillingWizardRootUPLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m =
        e !== void 0
          ? e
          : (e = n("BillingMIEditBillingInfoStateQuery.graphql")),
      p =
        s !== void 0
          ? s
          : (s = n("BillingMIEditBillingInfoStateMutation.graphql")),
      _ = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "mi_edit_billing_info_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID,
                n = e.paymentMethodID;
              return { miID: n, paymentAccountID: t };
            }),
            (t.query = o("BillingMIEditBillingInfoScreen.react").query),
            (t.fetchPolicy = "network-only"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.onDisplay = function (t, n) {
            var e = function () {
                return n("onClose");
              },
              r = function (t, r, o) {
                return n("onNext", {
                  doneEdit: t,
                  existingAccountInfo: o,
                  miInfo: r,
                });
              },
              a = function (t) {
                return n("onCancelUpdate", { status: t });
              },
              i = function (t) {
                return n("onSchedule", { miInfo: t });
              };
            this.onCloseEvent = function () {
              return n("onClose");
            };
            var l = function (t, r) {
              return n("onChangeAddress", { addressType: t, miInfo: r });
            };
            return d.jsx(
              o("BillingMIEditBillingInfoScreen.react")
                .BillingMIEditBillingInfoScreen,
              babelHelpers.extends({}, t, {
                onCancelUpdate: a,
                onChangeAddress: l,
                onClose: e,
                onNext: r,
                onSchedule: i,
              }),
            );
          }),
          (a.onExit = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a) {
                var i = a.relay,
                  l = i.commitMutation,
                  s = i.fetchQuery;
                if (e === "onNext") {
                  var c,
                    d,
                    _ = t.existingAccountInfo,
                    f = t.miInfo,
                    g = t.paymentAccountID,
                    h = this.onCloseEvent,
                    y = yield s(
                      {
                        options: { fetchPolicy: "network-only" },
                        query: m,
                        queryName: m.params.name,
                        variables: { paymentAccountID: g },
                      },
                      {},
                      void 0,
                      !0,
                      a,
                      this.name,
                    ),
                    C =
                      (c =
                        y == null ||
                        (d = y.billable_account_by_payment_account) == null
                          ? void 0
                          : d.is_using_ec) != null
                        ? c
                        : !1;
                  if (!C)
                    return {
                      event: "onNext",
                      newProps: babelHelpers.extends({}, t),
                    };
                  var b = { event_action: "exit", event_side: "client_side" };
                  if (_ == null || h == null)
                    throw new (r("BillingError"))(
                      "BillingMIEditBillingInfoState: existingAccountInfo and onClose cannot be null",
                      "required parameter is missing or invalid",
                      b,
                      { action: "verify" },
                      "critical_error",
                    );
                  var v = o("BillingMIBillingInfoUtils").getUpdatedValues(f, _),
                    S = {
                      billable_account_payment_legacy_account_id: g,
                      mi_info: f
                        ? o(
                            "BillingMIBillingInfoUtils",
                          ).convertToMIInfoGraphQLObject(
                            babelHelpers.extends({}, v),
                          )
                        : void 0,
                      upl_logging_data: babelHelpers.extends(
                        {},
                        r("BillingWizardRootUPLogger").getLoggingData(
                          p.params.name,
                        ),
                      ),
                    };
                  try {
                    yield l(
                      { mutation: p, variables: { input: S } },
                      {
                        event_data: o(
                          "BillingMIBillingInfoUtils",
                        ).createUpdateMiInfoEventData(f),
                      },
                    );
                    var R = Object.keys(v).filter(function (e) {
                        return r(
                          "BillingMIEditBillingInfoConstants",
                        ).fieldNameInMsgList.includes(e);
                      }),
                      L = {
                        body: r(
                          "BillingMIEditBillingInfoConstants",
                        ).updateSuccessBody(R),
                        headline: r(
                          "BillingMIEditBillingInfoConstants",
                        ).updateSuccessHeadline(R),
                        overridePrimaryButton: { action: h },
                        type: "SUCCESS",
                      };
                    return {
                      event: "onDone",
                      newProps: babelHelpers.extends({}, t, { status: L }),
                    };
                  } catch (e) {
                    var E =
                      e instanceof r("BillingError")
                        ? e
                        : new (r("BillingError"))(
                            "BillingMIEditBillingInfoState: Unknown error during mutation",
                            "client side unknown error",
                            b,
                            { action: "verify" },
                            "critical_error",
                          );
                    r("BillingWizardRootUPLogger").logBillingPayloadError(
                      E.type,
                      E.errorPayload,
                    );
                  }
                  return {
                    event: "onError",
                    newProps: babelHelpers.extends({}, t, {
                      status: {
                        body: r("BillingMIEditBillingInfoConstants")
                          .updateFailureBody,
                        headline: r("BillingMIEditBillingInfoConstants")
                          .updateFailureHeadline,
                        title: r("BillingMIEditBillingInfoConstants")
                          .updateFailureTitle,
                        type: "ERROR",
                      },
                    }),
                  };
                }
                return (u || (u = n("Promise"))).resolve({
                  event: e,
                  newProps: t,
                });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = _;
  },
  98,
);
