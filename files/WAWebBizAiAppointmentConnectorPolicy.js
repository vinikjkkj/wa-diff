__d(
  "WAWebBizAiAppointmentConnectorPolicy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "auth-proxy",
      l = "oauth2",
      s = new Set(["APPOINTMENTS", "GENERIC_WITH_NUX", "GENERIC_WITHOUT_NUX"]);
    function u(e) {
      return d(e) ? "membrane" : m(e) ? "oauth" : "credentials";
    }
    function c(e) {
      return m(e) && e.authorizationParams.length > 0
        ? "oauth-with-params"
        : m(e)
          ? "oauth"
          : "api-key";
    }
    function d(t) {
      return t.isMembrane && (t.authType === e || t.authType === l);
    }
    function m(e) {
      return d(e) || (e.hasOAuthConfig && !e.isMembrane);
    }
    function p(e) {
      return e.isCustom || (e.isMembrane && !d(e));
    }
    function _(e) {
      return e != null && s.has(e);
    }
    function f(e) {
      var t;
      return e.connectionStatus === "CONNECTED"
        ? { kind: "continue" }
        : (function (t) {
            return t === "APPOINTMENTS"
              ? { kind: "show-nux", templateType: "APPOINTMENTS" }
              : t === "GENERIC_WITH_NUX"
                ? { kind: "show-nux", templateType: "GENERIC_WITH_NUX" }
                : t === "GENERIC_WITHOUT_NUX" &&
                    e.authorizationParams.length > 0
                  ? { kind: "authorize" }
                  : null;
          })((t = e.template) == null ? void 0 : t.templateType);
    }
    function g(e, t) {
      return e === "CONNECTED"
        ? "CONNECTED"
        : e === "AUTH_ERROR"
          ? "AUTH_ERROR"
          : e === "DISABLED"
            ? "DISABLED"
            : e == null && t
              ? "CONNECTED"
              : "NOT_CONNECTED";
    }
    function h(e) {
      var t = [],
        n = [],
        r = [],
        o = [];
      for (var a of e)
        e: {
          if (a.connectionStatus === "AUTH_ERROR") {
            o.push(a);
            break e;
          }
          if (a.connectionStatus === "CONNECTED") {
            n.push(a);
            break e;
          }
          if (a.connectionStatus === "DISABLED") {
            r.push(a);
            break e;
          }
          {
            t.push(a);
            break e;
          }
        }
      return { available: t, connected: n, disabled: r, reconnect: o };
    }
    function y(e) {
      return e.connectionStatus !== "DISABLED";
    }
    ((i.getAppointmentConnectorSetupKind = u),
      (i.getAppointmentConnectorConnectAction = c),
      (i.isMembraneOAuthConnector = d),
      (i.isOAuthConnector = m),
      (i.isCredentialConnector = p),
      (i.isSupportedAppointmentConnectorTemplate = _),
      (i.getAppointmentConnectorSelectionAction = f),
      (i.normalizeAppointmentConnectionStatus = g),
      (i.bucketAppointmentConnectors = h),
      (i.isAppointmentConnectorSelectable = y));
  },
  66,
);
