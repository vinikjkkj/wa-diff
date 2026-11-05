__d(
  "WAWebHatchConnectorsLogging",
  ["WALogger", "WAWebHatchConnectorsSnapshot", "WAWebHatchLogging"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "custom.";
    function d(e, t, n) {
      o("WAWebHatchLogging").logHatchConnector(
        e,
        babelHelpers.extends({}, n, { connectorId: t.id, connectorType: y(t) }),
      );
    }
    function m(t, n) {
      try {
        d("auth_error", t, { failure: n });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: auth error log failed",
              ])),
          )
          .sendLogs("hatch-connectors-auth-error-log-failed");
      }
    }
    function p(e, t) {
      try {
        var n = _(e, t);
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
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: link tap log failed",
              ])),
          )
          .sendLogs("hatch-connectors-link-tap-log-failed");
      }
    }
    function _(e, t) {
      if (e.startsWith(c)) return "custom";
      if (t) return "native";
      var n = r("WAWebHatchConnectorsSnapshot").findConnector(e);
      return n != null ? y(n) : void 0;
    }
    function f(e, t, n) {
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
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: native connector log failed",
              ])),
          )
          .sendLogs("hatch-connectors-native-log-failed");
      }
    }
    var g = new Set();
    function h(e) {
      g.add(e);
    }
    function y(e) {
      return e.isCustom
        ? "custom"
        : g.has(e.id)
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
    ((l.logHatchConnectorEvent = d),
      (l.logHatchConnectorAuthError = m),
      (l.logHatchConnectLinkTap = p),
      (l.logHatchNativeConnectorEvent = f),
      (l.rememberHatchNativeConnector = h),
      (l.getHatchConnectorLogType = y));
  },
  98,
);
