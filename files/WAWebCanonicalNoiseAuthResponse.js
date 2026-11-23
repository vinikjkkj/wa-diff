__d(
  "WAWebCanonicalNoiseAuthResponse",
  [],
  function (t, n, r, o, a, i) {
    var e = /^for\s*\(\s*;;\s*\)\s*;\s*/,
      l = new Map([
        ["rate_limited", "rate_limited"],
        ["endpoint_disabled", "disabled"],
        ["invalid_request", "invalid"],
        ["authentication_failed", "unauthorized"],
        ["challenge_expired", "unauthorized"],
        ["token_issuance_failed", "unavailable"],
        ["challenge_issuance_failed", "unavailable"],
        ["credentials_store_failed", "store_failed"],
      ]);
    function s(e, t) {
      var n,
        r,
        o = c((n = c(u(e))) == null ? void 0 : n.payload);
      if ((o == null ? void 0 : o.status) === "success")
        return { kind: "ok", payload: o, httpStatus: t };
      var a = o == null ? void 0 : o.error;
      return {
        kind: "failed",
        failure:
          typeof a == "string" && (r = l.get(a)) != null ? r : "malformed",
        httpStatus: t,
      };
    }
    function u(t) {
      try {
        return JSON.parse(t.replace(e, ""));
      } catch (e) {
        return null;
      }
    }
    function c(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    i.parsePayload = s;
  },
  66,
);
