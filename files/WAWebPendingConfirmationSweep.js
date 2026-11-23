__d(
  "WAWebPendingConfirmationSweep",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebInAppSignupInfoStore",
    "WAWebSchemaInAppSignupInfo",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupQPLLogger",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "confirmation_timeout",
      u = new Set(),
      c = 6e4,
      d = 5 * 6e4;
    async function m() {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        )
      ) {
        var e = o("WATimeUtils").unixTimeMs(),
          t = await h(e),
          n = t.expired,
          r = t.pending;
        (g(r, e),
          await Promise.all(
            n.map(function (e) {
              return f(e.signupId);
            }),
          ));
      }
    }
    async function p() {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        )
      ) {
        var e = o("WATimeUtils").unixTimeMs(),
          t = await h(e),
          n = t.expired,
          r = t.pending;
        (g(r, e),
          await Promise.all(
            n.map(function (t) {
              return e - t.deadlineMs > d ? f(t.signupId) : _(t, e);
            }),
          ));
      }
    }
    async function _(t, n) {
      var a = t.chatId,
        i = t.signupId;
      if (!u.has(i)) {
        u.add(i);
        try {
          var l = await o(
            "WAWebInAppSignupInfoStore",
          ).stopExpiredPendingConfirmationTimer(i, n);
          if (l !== "cleared") {
            l === "write_failed" &&
              o("WAWebInAppSignupInfoStore").schedulePendingConfirmationRetry(
                i,
              );
            return;
          }
          try {
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_NOT_RECEIVED,
              signupId: i,
              businessWid: o("WAWebWidFactory").createWid(a),
            });
          } finally {
            o("WAWebSignupQPLLogger").confirmationFail(i, s);
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
          u.delete(i);
        }
      }
    }
    async function f(e) {
      if (!u.has(e)) {
        u.add(e);
        try {
          var t = await o(
            "WAWebInAppSignupInfoStore",
          ).restartPendingConfirmationTimer(e, c);
          t === "write_failed" &&
            o("WAWebInAppSignupInfoStore").schedulePendingConfirmationRetry(e);
        } finally {
          u.delete(e);
        }
      }
    }
    function g(e, t) {
      for (var n of e)
        o("WAWebInAppSignupInfoStore").schedulePendingConfirmationSweep(
          n.signupId,
          n.deadlineMs,
          t,
        );
    }
    async function h(e) {
      if (!o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable())
        return { expired: [], pending: [] };
      var t = await o("WAWebSchemaInAppSignupInfo")
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
              deadlineMs: (t = e.pendingConfirmationDeadlineMs) != null ? t : 0,
              signupId: (n = e.pendingConfirmationSignupId) != null ? n : "",
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
    }
    ((l.deferExpiredPendingConfirmations = m),
      (l.sweepExpiredPendingConfirmations = p));
  },
  98,
);
