__d(
  "WAWebHatchMessengerPinDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebHatchJsonReaders").readBool(e, "has_pin");
    }
    function s(e, t) {
      if (t && o("WAWebHatchJsonReaders").readBool(e, "success") === !0)
        return { kind: "success" };
      var n = u(e, "login_timeout_remaining_secs");
      if (n != null && n > 0)
        return { kind: "locked_out", retryAfterSeconds: n };
      if (
        o("WAWebHatchJsonReaders").readTrimmedString(e, "error_code") ===
        "two_factor_required"
      )
        return {
          kind: "two_factor_required",
          message: o("WAWebHatchJsonReaders").trimToNull(
            o("WAWebHatchJsonReaders").readTrimmedString(e, "message"),
          ),
        };
      var r = u(e, "attempts_remaining");
      return r == null
        ? { kind: "failure" }
        : r === 0
          ? { kind: "locked_out", retryAfterSeconds: 0 }
          : { attemptsRemaining: r, kind: "wrong_pin" };
    }
    function u(e, t) {
      var n = o("WAWebHatchJsonReaders").readNumber(e, t);
      return n != null && Number.isInteger(n) && n >= 0 ? n : null;
    }
    ((l.decodeHatchMessengerPinStatus = e), (l.decodeHatchMessengerUnlock = s));
  },
  98,
);
