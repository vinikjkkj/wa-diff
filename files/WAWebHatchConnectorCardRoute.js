__d(
  "WAWebHatchConnectorCardRoute",
  ["WAWebHatchConnectorDetail", "WAWebHatchConnectorsEligibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[a-z0-9._:-]{1,128}$/;
    function s(e, t, n, r) {
      return n
        ? "noop"
        : t == null ||
            !d(t) ||
            o(
              "WAWebHatchConnectorsEligibility",
            ).isHatchPermissionsOnlyConnector(t)
          ? "fallback_url"
          : e === "ADD_ACCOUNT"
            ? m(t)
            : e === "ADD_SCOPE"
              ? p(r)
              : "fallback_url";
    }
    function u(e) {
      return (
        e != null &&
        d(e) &&
        o("WAWebHatchConnectorDetail").hasHatchConnectorDetail(e)
      );
    }
    function c(e, t) {
      return e === "ADD_ACCOUNT"
        ? !0
        : e === "ADD_SCOPE"
          ? p(t) !== "fallback_url"
          : !1;
    }
    function d(e) {
      return (
        !o("WAWebHatchConnectorsEligibility").isHatchWalletConnector(e) &&
        o("WAWebHatchConnectorsEligibility").isManageableHatchConnector(e) &&
        e.state === "connected"
      );
    }
    function m(e) {
      return e.supportsMultipleAccounts ? "add_account" : "fallback_url";
    }
    function p(t) {
      return t != null && e.test(t)
        ? { kind: "grant_scope", methodKey: t }
        : "fallback_url";
    }
    ((l.resolveHatchConnectorCardRoute = s),
      (l.canOpenHatchConnectorDetails = u),
      (l.canRouteHatchConnectorCardAction = c));
  },
  98,
);
