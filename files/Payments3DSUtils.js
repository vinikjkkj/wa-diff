__d(
  "Payments3DSUtils",
  ["fbt", "invariant", "$InternalEnum"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = "3DS_RESPONSE_MESSAGE",
      c = "app_url",
      d = "post_message",
      m = { COMPLETED: "COMPLETED", FAILED: "FAILED", PENDING: "PENDING" },
      p = n("$InternalEnum").Mirrored(["Success", "Failure"]),
      _ = n("$InternalEnum")({
        CARDINAL: "cardinal",
        PAYU: "payu",
        PAYU_INDIA: "payu_india",
        STRIPE: "stripe",
        KBANK: "kbank",
        RAZORPAY: "razorpay",
      });
    function f() {
      return {
        error_message: "Try again later.",
        error_title: "There was a problem",
        cta_type: "DISMISS",
      };
    }
    var g = s._(/*BTDS*/ "Please wait while we contact your bank."),
      h = s._(/*BTDS*/ "This may take a moment.");
    function y() {
      return "comet";
    }
    function C(e) {
      var t = [_.PAYU, _.PAYU_INDIA],
        n = t.find(function (t) {
          return _.getName(t).toLowerCase() === e;
        });
      return (n != null || u(0, 94270), n);
    }
    function b(e) {
      var t = [_.PAYU, _.PAYU_INDIA, _.RAZORPAY, _.STRIPE],
        n = t.find(function (t) {
          return _.getName(t).toLowerCase() === e;
        });
      return (n != null || u(0, 99828), n);
    }
    function v(e, t, n, r) {
      var o,
        a = t.toLowerCase(),
        i = f(),
        l =
          ((o = {}),
          (o[_.CARDINAL] = { success: "succeeded", failure: "failed" }),
          (o[_.PAYU] = { success: "succeed", failure: "failed" }),
          (o[_.PAYU_INDIA] = { success: "success", failure: "failure" }),
          (o[_.STRIPE] = { success: "succeeded", failure: "failed" }),
          (o[_.RAZORPAY] = { success: "succeeded", failure: "failed" }),
          o);
      if (e === _.KBANK) {
        if (a === "Success".toLowerCase())
          return {
            auth_result: p.Success,
            step_up_complete_token: n,
            client_state: r,
          };
        if (a === "Failed".toLowerCase())
          return babelHelpers.extends(
            { auth_result: p.Failure, client_state: r },
            i,
          );
      } else {
        var s = l[e];
        if (s && a === s.success)
          return {
            auth_result: p.Success,
            step_up_complete_token: n,
            client_state: r,
          };
        if (s && a === s.failure)
          return babelHelpers.extends(
            { auth_result: p.Failure, client_state: r },
            i,
          );
      }
      var u = new Error(
          "Invalid Processor Response " +
            a +
            ". Please reach out to Payment Platform to validate whether this is a 3rd-party change",
        ),
        c = u.stack;
      throw u;
    }
    function S(e) {
      return e === "CARDINAL_3DS2" || e === "CARDINAL_3DS1"
        ? _.CARDINAL
        : e === "PAYU"
          ? _.PAYU
          : e === "STRIPE"
            ? _.STRIPE
            : null;
    }
    ((l.THREEDS_RESPONSE_MESSAGE = e),
      (l.APP_URL = c),
      (l.POST_MESSAGE = d),
      (l.ThreeDSLookupStatus = m),
      (l.ThreeDSAuthResult = p),
      (l.ThreeDSProcessor = _),
      (l.get3DSUserFacingErrorData = f),
      (l.THREEDS_LOADING_BODY = g),
      (l.THREEDS_LOADING_SUB_BODY = h),
      (l.getUserPlatform = y),
      (l.resolvePayuThreeDSProcessorTypeFromString = C),
      (l.resolveIndiaPSPThreeDSProcessorTypeFromString = b),
      (l.mapProcessorResponseToUnifiedThreeDSAuthResult = v),
      (l.mapMPIProcessorTypeToThreeDSProcessor = S));
  },
  226,
);
