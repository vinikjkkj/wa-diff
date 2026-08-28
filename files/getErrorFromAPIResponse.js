__d(
  "getErrorFromAPIResponse",
  ["errorCode"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {
        code: 1,
        error_subcode: 1357045,
        message: "unknown error (empty response)",
        type: "http",
        status: 0,
      },
      c =
        "Please reduce the amount of data you're asking for, then retry your request",
      d =
        "The request could not be understood by the server due to malformed syntax.",
      m =
        ((e = {}),
        (e[c] = "fake_mid_api_oom"),
        (e[d] = "fake_mid_malformed_syntax"),
        e);
    function p(e) {
      var t;
      if (
        e == null ||
        (e == null || (t = e.error) == null ? void 0 : t.error_subcode) ===
          1357045
      ) {
        var n, r, o, a;
        return window.navigator.onLine === !1
          ? {
              code: 1,
              error_subcode: 1357051,
              message:
                "unknown error (empty response), likely due to an unreliable network connection",
              type: "http",
              status: 0,
              opes_mids:
                (n =
                  e == null || (r = e.error) == null ? void 0 : r.opes_mids) !=
                null
                  ? n
                  : ["fake_mid_network_connection"],
            }
          : babelHelpers.extends({}, u, {
              opes_mids:
                (o =
                  e == null || (a = e.error) == null ? void 0 : a.opes_mids) !=
                null
                  ? o
                  : ["fake_mid_empty_response"],
            });
      }
      if (e.error) {
        var i, l;
        if (e.error.message && e.error.message in m) {
          var s;
          e.error.opes_mids =
            (s = e.error.opes_mids) != null ? s : [m[e.error.message]];
        }
        return babelHelpers.extends({}, e.error, {
          fbtrace_id:
            (i = (l = e.error.fbtrace_id) != null ? l : e.__www_request_id__) !=
            null
              ? i
              : e.__fbtrace_id__,
        });
      }
      if (e.error_code && e.error_msg) {
        var c, d, p;
        return {
          message: e.error_msg,
          code: e.error_code,
          type: e.error_type,
          error_subcode: e.error_subcode,
          fbtrace_id: (c = e.__www_request_id__) != null ? c : e.__fbtrace_id__,
          opes_mids:
            (d = e == null || (p = e.error) == null ? void 0 : p.opes_mids) !=
            null
              ? d
              : ["fake_mid_unexpected_format"],
        };
      }
    }
    l.default = p;
  },
  98,
);
