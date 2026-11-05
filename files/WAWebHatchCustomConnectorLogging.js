__d(
  "WAWebHatchCustomConnectorLogging",
  ["WALogger", "WAWebHatchLogging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      try {
        e: {
          var r = n;
          if (r === "disconnect_success" || r === "disconnect_error") {
            var a = r;
            o("WAWebHatchLogging").logHatchConnector(
              a,
              babelHelpers.extends({}, u(t), { connectorType: "custom" }),
            );
            break e;
          }
          if (
            r === "detail_impression" ||
            r === "delete_tap" ||
            r === "delete_cancel_tap" ||
            r === "delete_confirm" ||
            r === "delete_success"
          ) {
            var i = r;
            o("WAWebHatchLogging").logHatchSecureCredential(
              i,
              "settings",
              babelHelpers.extends({}, u(t), { kind: "custom_connector" }),
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              r,
          );
        }
      } catch (t) {
        try {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-custom-connectors: store step logging failed",
              ])),
          );
        } catch (e) {}
      }
    }
    function u(e) {
      return { connectorId: e };
    }
    ((l.logHatchCustomConnectorStoreStep = s),
      (l.getHatchCustomConnectorIdField = u));
  },
  98,
);
