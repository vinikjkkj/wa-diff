__d(
  "DGWRequestStreamUtils",
  ["Base64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i = {};
      for (var l of Object.entries(e)) {
        var s = l[0],
          u = l[1];
        typeof u == "string"
          ? (i["XRSS-" + s] = u)
          : typeof u == "number"
            ? (i["XRSN-" + s] = u.toString())
            : typeof u == "boolean"
              ? (i["XRSB-" + s] = u.toString())
              : typeof u == "object" &&
                u != null &&
                (i["XRSO-" + s] = r("Base64").encode(JSON.stringify(u)));
      }
      return (
        t && (i["xrs-body"] = "true"),
        n != null &&
          n.length > 0 &&
          (i["xrs-instrumentation"] = r("Base64").encode(n)),
        (i["XRS-Accept-Ack"] = "RSAck"),
        o != null &&
          o.ackTimeoutSec != null &&
          (i["XRS-SRAck-Timeout"] = o.ackTimeoutSec.toString()),
        i["XRSS-http_referer"] == null &&
          (i["XRSS-http_referer"] = window.location.href),
        a != null &&
          ((i["XRSB-is_test"] = "true"), (i["XRSS-original_request_id"] = a)),
        i
      );
    }
    function s(e) {
      return Object.keys(e).reduce(function (t, n) {
        return (
          (typeof e[n] == "string" ||
            typeof e[n] == "boolean" ||
            typeof e[n] == "number" ||
            typeof e[n] == "object") &&
            (t[n] = e[n]),
          t
        );
      }, {});
    }
    function u(e) {
      if (
        e.response &&
        e.response.instrumentation_data != null &&
        e.response.instrumentation_data.length > 0
      )
        try {
          var t,
            n = JSON.parse(
              new TextDecoder("utf-8").decode(e.response.instrumentation_data),
            );
          return {
            auxId: n.auxId,
            dfTraceId: (t = n.dataFlowTracingData) == null ? void 0 : t.traceId,
          };
        } catch (e) {}
      return null;
    }
    function c(e, t) {
      var n = e.headers,
        r = e.body;
      if (
        (t.kill_body === !0 && (r = null),
        t.new_body != null && (r = t.new_body),
        t.new_headers != null)
      )
        try {
          n = s(JSON.parse(t.new_headers));
        } catch (e) {}
      if (t.patch_headers != null)
        try {
          n = babelHelpers.extends({}, n, s(JSON.parse(t.patch_headers)));
        } catch (e) {}
      return { headers: n, body: r };
    }
    ((l.convertHeaders = e),
      (l.cleanHeaders = s),
      (l.getInstrumentationDataFieldsFromPayload = u),
      (l.transformContextWithRewriteDelta = c));
  },
  98,
);
