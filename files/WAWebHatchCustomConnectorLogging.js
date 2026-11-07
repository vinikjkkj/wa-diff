__d(
  "WAWebHatchCustomConnectorLogging",
  ["WALogger", "WAWebHatchLogging", "WAWebHatchSecureCredentialVaultError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      try {
        e: {
          var r = n;
          if (r === "disconnect_success" || r === "disconnect_error") {
            var a = r;
            o("WAWebHatchLogging").logHatchConnector(
              a,
              babelHelpers.extends({}, c(t), { connectorType: "custom" }),
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
              babelHelpers.extends({}, c(t), { kind: "custom_connector" }),
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
    function c(e) {
      return { connectorId: e };
    }
    var d = { raw: "already_exists", reason: "already_exists" };
    function m(e, t, n) {
      try {
        p(e, t, n);
      } catch (e) {
        try {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-custom-connectors: step logging failed",
              ])),
          );
        } catch (e) {}
      }
    }
    function p(e, t, n) {
      e === "api_key" ? _(t, n) : f(t, n);
    }
    function _(e, t) {
      var n = c(e),
        r = babelHelpers.extends({}, n, { kind: "custom_connector" });
      e: {
        var a = t;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "dialog_shown" &&
          "fromCard" in a
        ) {
          var i = a.fromCard;
          (i &&
            o("WAWebHatchLogging").logHatchSecureCredential(
              "card_tap",
              "chat",
              r,
            ),
            o("WAWebHatchLogging").logHatchSecureCredential(
              "sheet_impression",
              "chat",
              r,
            ));
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "dialog_cancel"
        ) {
          o("WAWebHatchLogging").logHatchSecureCredential(
            "cancel_tap",
            "chat",
            r,
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "submit"
        ) {
          o("WAWebHatchLogging").logHatchSecureCredential(
            "save_tap",
            "chat",
            r,
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "registered"
        ) {
          (o("WAWebHatchLogging").logHatchSecureCredential(
            "save_success",
            "chat",
            r,
          ),
            o("WAWebHatchLogging").logHatchConnector(
              "auth_success",
              babelHelpers.extends({}, n, { connectorType: "custom" }),
            ));
          break e;
        }
        {
          g(!0, e, t);
          break e;
        }
      }
    }
    function f(e, t) {
      var n = babelHelpers.extends({}, c(e), { connectorType: "custom" });
      e: {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.step === "dialog_shown"
        ) {
          o("WAWebHatchLogging").logHatchConnector(
            "bottom_sheet_impression",
            n,
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.step === "dialog_cancel"
        ) {
          o("WAWebHatchLogging").logHatchConnector("cancel_tap", n);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.step === "submit"
        ) {
          o("WAWebHatchLogging").logHatchConnector(
            "bottom_sheet_connect_tap",
            n,
          );
          break e;
        }
        {
          g(!1, e, t);
          break e;
        }
      }
    }
    function g(e, t, n) {
      var r = babelHelpers.extends({}, c(t), { connectorType: "custom" });
      e: {
        var a = n;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "failed" &&
          "error" in a
        ) {
          var i = a.error;
          h(
            e,
            o(
              "WAWebHatchSecureCredentialVaultError",
            ).getHatchSecureCredentialFailure(i),
            t,
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "name_taken"
        ) {
          h(e, d, t);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "sign_in_opened"
        ) {
          o("WAWebHatchLogging").logHatchConnector("auth_web_start", r);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "connected"
        ) {
          o("WAWebHatchLogging").logHatchConnector("auth_success", r);
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.step === "sign_in_failed" &&
          "reason" in a
        ) {
          var l = a.reason;
          o("WAWebHatchLogging").logHatchConnector(
            "auth_error",
            babelHelpers.extends({}, r, { failure: { reason: l } }),
          );
          break e;
        }
        return;
      }
    }
    function h(e, t, n) {
      var r = c(n);
      (e &&
        o("WAWebHatchLogging").logHatchSecureCredentialSaveError(
          t,
          "chat",
          babelHelpers.extends({}, r, { kind: "custom_connector" }),
        ),
        o("WAWebHatchLogging").logHatchConnector(
          "auth_error",
          babelHelpers.extends({}, r, {
            connectorType: "custom",
            failure: y(t),
          }),
        ));
    }
    function y(e) {
      var t = e.reason === "http" ? Number(e.raw.split(".")[1]) : NaN;
      return Number.isInteger(t)
        ? { httpStatus: t, reason: "http" }
        : { reason: C(e.reason) };
    }
    function C(e) {
      return e === "already_exists"
        ? "already_exists"
        : e === "http"
          ? "http"
          : e === "malformed_response"
            ? "malformed_response"
            : e === "session"
              ? "no_channel"
              : e === "stream_refused" || e === "transport"
                ? "transport"
                : e === "timed_out"
                  ? "timed_out"
                  : e === "unknown"
                    ? "not_confirmed"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    ((l.logHatchCustomConnectorStoreStep = u),
      (l.getHatchCustomConnectorIdField = c),
      (l.logHatchCustomConnectorStep = m));
  },
  98,
);
