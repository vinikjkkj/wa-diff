__d(
  "WAWebHatchConnectorsLogging",
  ["WALogger", "WAWebHatchConnectorsSnapshot", "WAWebHatchLogging"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "custom.";
    function m(t, n, r) {
      try {
        p(t, n, r);
      } catch (n) {
        try {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: event logging failed action=",
                "",
              ])),
            t,
          );
        } catch (e) {}
      }
    }
    function p(e, t, n) {
      o("WAWebHatchLogging").logHatchConnector(
        e,
        babelHelpers.extends({}, n, { connectorId: t.id, connectorType: b(t) }),
      );
    }
    function _(e, t) {
      try {
        p("auth_error", e, { failure: t });
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: auth error log failed",
              ])),
          )
          .sendLogs("hatch-connectors-auth-error-log-failed");
      }
    }
    function f(e, t) {
      try {
        var n = g(e, t);
        if (n === "custom") return;
        o("WAWebHatchLogging").logHatchConnector("connect_message_tapped", {
          connectorId: e,
          connectorType: n,
          entry: "text_link",
          featureEntryPoint: "chat",
        });
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: link tap log failed",
              ])),
          )
          .sendLogs("hatch-connectors-link-tap-log-failed");
      }
    }
    function g(e, t) {
      if (e.startsWith(d)) return "custom";
      if (t) return "native";
      var n = r("WAWebHatchConnectorsSnapshot").findConnector(e);
      return n != null ? b(n) : void 0;
    }
    function h(e, t, n) {
      try {
        o("WAWebHatchLogging").logHatchConnector(
          e,
          babelHelpers.extends({}, n, {
            connectorId: t.id,
            connectorType: "native",
          }),
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: native connector log failed",
              ])),
          )
          .sendLogs("hatch-connectors-native-log-failed");
      }
    }
    var y = new Set();
    function C(e) {
      y.add(e);
    }
    function b(e) {
      return e.isCustom
        ? "custom"
        : y.has(e.id)
          ? "native"
          : e.managementKind === "auth"
            ? "web"
            : e.managementKind === "policy_only"
              ? "device"
              : e.managementKind === "unknown"
                ? void 0
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e.managementKind,
                    );
                  })();
    }
    ((l.logHatchConnectorEvent = m),
      (l.logHatchConnectorEventOrThrow = p),
      (l.logHatchConnectorAuthError = _),
      (l.logHatchConnectLinkTap = f),
      (l.logHatchNativeConnectorEvent = h),
      (l.rememberHatchNativeConnector = C),
      (l.getHatchConnectorLogType = b));
  },
  98,
);
