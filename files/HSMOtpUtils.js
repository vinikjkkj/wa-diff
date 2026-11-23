__d(
  "HSMOtpUtils",
  [
    "HSMUtils",
    "URI",
    "WAXWhatsAppOtpCopyCodeController",
    "WhatsAppBusinessAccountManagerHSMButtonRecord",
    "WhatsAppBusinessAccountManagerHSMSupportedApp",
    "WhatsAppHSMAuthContentRestrictionsConstants",
    "WhatsAppHSMTTLConstants",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        var t, a, i;
        if (n.type === "URL") {
          var l;
          try {
            l = r("WAXWhatsAppOtpCopyCodeController").getRequest(
              new (e || (e = r("URI")))(n.url),
            );
          } catch (e) {
            var s;
            return (s = n.url) != null &&
              s.startsWith("https://www.whatsapp.com/otp/copy/")
              ? new (r("WhatsAppBusinessAccountManagerHSMButtonRecord"))({
                  otp_type: "COPY_CODE",
                  text: n.text,
                  type: "OTP",
                })
              : null;
          }
          for (
            var u = l.getOptionalString("cta_display_name"),
              c = l.getOptionalString("package_name"),
              d = l.getOptionalString("signature_hash"),
              m = {},
              p = (t = c == null ? void 0 : c.split(",")) != null ? t : [],
              _ = (a = d == null ? void 0 : d.split(",")) != null ? a : [],
              f = Math.max(p.length, _.length),
              g = [],
              h = 0;
            h < f;
            h++
          ) {
            var y, C;
            g.push(
              new (r("WhatsAppBusinessAccountManagerHSMSupportedApp"))({
                package_name: (y = p == null ? void 0 : p[h]) != null ? y : "",
                signature_hash:
                  (C = _ == null ? void 0 : _[h]) != null ? C : "",
              }),
            );
          }
          m = {
            supported_apps: o("immutable").List.of.apply(
              o("immutable").List,
              g,
            ),
          };
          var b = u != null || c != null || d != null ? "ONE_TAP" : "COPY_CODE",
            v = (i = l.getOptionalEnum("otp_type")) != null ? i : b;
          switch (v) {
            case "ONE_TAP":
            case "ZERO_TAP":
              return new (r("WhatsAppBusinessAccountManagerHSMButtonRecord"))(
                babelHelpers.extends(
                  {
                    autofill_text: u != null ? u : "",
                    otp_type: v,
                    text: n.text,
                    type: "OTP",
                  },
                  m,
                  { zero_tap_terms_accepted: v === "ZERO_TAP" },
                ),
              );
            case "COPY_CODE":
              return new (r("WhatsAppBusinessAccountManagerHSMButtonRecord"))({
                otp_type: "COPY_CODE",
                text: n.text,
                type: "OTP",
              });
            default:
              return null;
          }
        }
      },
      u = function (t) {
        var e, n;
        return (e =
          (n = t.components) == null ||
          (n = n.get("BUTTONS")) == null ||
          (n = n.buttons) == null
            ? void 0
            : n.some(function (e) {
                return e.type === "OTP" || s(e) != null;
              })) != null
          ? e
          : !1;
      },
      c = function (t) {
        var e = t.buttons.buttons;
        if (e != null && e.size === 1) {
          var n = e.get(0);
          if (n == null) return t;
          var r = s(n);
          if (r != null) {
            var a = t.merge({
              buttons: t.buttons.merge({ buttons: o("immutable").List([r]) }),
            });
            return a;
          }
        }
        return t;
      },
      d = function (t) {
        return (
          t != null &&
          t.some(function (e) {
            var t = e.type;
            return t === "COPY_CODE";
          })
        );
      },
      m = function (t) {
        return t.replace(/[^a-zA-Z0-9]/g, "");
      },
      p = function (t) {
        return (
          t >=
            r("WhatsAppHSMAuthContentRestrictionsConstants")
              .CODE_EXPIRATION_MIN &&
          t <=
            r("WhatsAppHSMAuthContentRestrictionsConstants").CODE_EXPIRATION_MAX
        );
      },
      _ = function (t, n) {
        var e =
            n === "MARKETING"
              ? r("WhatsAppHSMTTLConstants")
                  .MARKETING_MESSAGE_SEND_TTL_SECONDS_MAX
              : n === "UTILITY"
                ? r("WhatsAppHSMTTLConstants")
                    .UTILITY_MESSAGE_SEND_TTL_SECONDS_MAX
                : r("WhatsAppHSMTTLConstants")
                    .AUTH_MESSAGE_SEND_TTL_SECONDS_MAX,
          o =
            n === "MARKETING"
              ? r("WhatsAppHSMTTLConstants")
                  .MARKETING_MESSAGE_SEND_TTL_SECONDS_MIN
              : r("WhatsAppHSMTTLConstants").MESSAGE_SEND_TTL_SECONDS_MIN;
        return t != null && t >= o && t <= e;
      },
      f = function (t) {
        return new RegExp(
          r("WhatsAppHSMAuthContentRestrictionsConstants").URL_REGEX,
          "g",
        ).test(t);
      };
    function g(e) {
      return o("HSMUtils").removeHSMVariables(o("HSMUtils").stripEmojis(e));
    }
    var h = function (t, n, r) {
      return (
        r === void 0 && (r = !0),
        r && n === !0 && t === "AUTHENTICATION"
      );
    };
    ((l.getOtpButtonFromUrlButton = s),
      (l.hasOtpButton = u),
      (l.getHSMCreationRecordWithOtpButton = c),
      (l.hasCopyCodeButton = d),
      (l.sanitizeCopyCode = m),
      (l.isCodeExpirationMinutesValid = p),
      (l.isMessageSendTtlSecondsValid = _),
      (l.containsUrl = f),
      (l.sanitizeAuthTemplateSupportedAppData = g),
      (l.shouldUseAuthRestrictions = h));
  },
  98,
);
