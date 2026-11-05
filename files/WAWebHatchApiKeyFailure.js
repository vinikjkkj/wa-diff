__d(
  "WAWebHatchApiKeyFailure",
  ["WAWebHatchWriteError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        api_key_auth_callback_unreadable: "malformed_response",
        api_key_auth_invalid_input: "invalid_input",
        api_key_auth_no_session: "no_channel",
        api_key_auth_refused: "not_confirmed",
        api_key_auth_vm_connect_failed: "no_channel",
      },
      s = { NO_CHANNEL: "no_channel", TIMEOUT: "timed_out" };
    function u(t) {
      var n,
        r = o("WAWebHatchWriteError").getHatchWriteErrorDetail(t);
      if ((r == null ? void 0 : r.reason) === "api_key_auth_callback_rejected")
        return r.httpStatus != null
          ? { httpStatus: r.httpStatus, reason: "http" }
          : { reason: "http" };
      if ((r == null ? void 0 : r.reason) === "api_key_auth_callback_failure") {
        var a,
          i = r.vmFailure;
        return {
          reason: (a = i != null ? s[i] : null) != null ? a : "transport",
        };
      }
      return {
        reason: (n = r != null ? e[r.reason] : null) != null ? n : "transport",
      };
    }
    l.getHatchApiKeyFailure = u;
  },
  98,
);
