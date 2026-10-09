__d(
  "WAWebHatchConnectorsLogging",
  ["WAWebHatchLogging"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      o("WAWebHatchLogging").logHatchConnector(
        e,
        babelHelpers.extends({}, n, { connectorId: t.id, connectorType: s(t) }),
      );
    }
    function s(e) {
      return e.isCustom
        ? "custom"
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
    ((l.logHatchConnectorEvent = e), (l.getHatchConnectorLogType = s));
  },
  98,
);
