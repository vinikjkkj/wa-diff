__d(
  "WAWebPendingConfirmationSweep",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebInAppSignupInfoStore",
    "WAWebSchemaInAppSignupInfo",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupQPLLogger",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "confirmation_timeout",
      c = new Set(),
      d = 6e4,
      m = 5 * 6e4;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            )
          ) {
            var e = o("WATimeUtils").unixTimeMs(),
              t = yield S(e),
              r = t.expired,
              a = t.pending;
            (v(a, e),
              yield (s || (s = n("Promise"))).all(
                r.map(function (e) {
                  return C(e.signupId);
                }),
              ));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            )
          ) {
            var e = o("WATimeUtils").unixTimeMs(),
              t = yield S(e),
              r = t.expired,
              a = t.pending;
            (v(a, e),
              yield (s || (s = n("Promise"))).all(
                r.map(function (t) {
                  return e - t.deadlineMs > m ? C(t.signupId) : h(t, e);
                }),
              ));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.chatId,
            i = t.signupId;
          if (!c.has(i)) {
            c.add(i);
            try {
              var l = yield o(
                "WAWebInAppSignupInfoStore",
              ).stopExpiredPendingConfirmationTimer(i, n);
              if (l !== "cleared") {
                l === "write_failed" &&
                  o(
                    "WAWebInAppSignupInfoStore",
                  ).schedulePendingConfirmationRetry(i);
                return;
              }
              try {
                o("WAWebSignupFlowLoggerLazy").logSignupOp({
                  operation: o("WAWebSignupFlowLoggerLazy")
                    .SIGNUP_USER_JOURNEY_OPERATION
                    .SIGNUP_CONFIRMATION_NOT_RECEIVED,
                  signupId: i,
                  businessWid: o("WAWebWidFactory").createWid(a),
                });
              } finally {
                o("WAWebSignupQPLLogger").confirmationFail(i, u);
              }
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:confirmation] timeout emit failed signupId=",
                      "",
                    ])),
                  i,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("signup-confirmation-timeout-emit-failed");
            } finally {
              c.delete(i);
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!c.has(e)) {
            c.add(e);
            try {
              var t = yield o(
                "WAWebInAppSignupInfoStore",
              ).restartPendingConfirmationTimer(e, d);
              t === "write_failed" &&
                o("WAWebInAppSignupInfoStore").schedulePendingConfirmationRetry(
                  e,
                );
            } finally {
              c.delete(e);
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      for (var n of e)
        o("WAWebInAppSignupInfoStore").schedulePendingConfirmationSweep(
          n.signupId,
          n.deadlineMs,
          t,
        );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable())
            return { expired: [], pending: [] };
          var t = yield o("WAWebSchemaInAppSignupInfo")
              .getInAppSignupInfoTable()
              .all(),
            n = t
              .filter(function (e) {
                return (
                  e.pendingConfirmationSignupId != null &&
                  e.pendingConfirmationDeadlineMs != null
                );
              })
              .map(function (e) {
                var t, n;
                return {
                  chatId: e.id,
                  deadlineMs:
                    (t = e.pendingConfirmationDeadlineMs) != null ? t : 0,
                  signupId:
                    (n = e.pendingConfirmationSignupId) != null ? n : "",
                };
              });
          return {
            expired: n.filter(function (t) {
              return t.deadlineMs <= e;
            }),
            pending: n.filter(function (t) {
              return t.deadlineMs > e;
            }),
          };
        })),
        R.apply(this, arguments)
      );
    }
    ((l.deferExpiredPendingConfirmations = p),
      (l.sweepExpiredPendingConfirmations = f));
  },
  98,
);
