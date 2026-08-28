__d(
  "AdsConnectWhatsAppToPageHistoryReducerPlugins",
  [
    "AdsConnectWhatsAppToPageHistory",
    "AdsWhatsAppVerificationUtils",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t === "ENTER_WHATSAPP_NUMBER"
        ? new (r("AdsConnectWhatsAppToPageHistory"))()
        : t !== e.current
          ? e
              .update("previous", function (t) {
                return t.push(e.current);
              })
              .set("current", t)
          : e;
    }
    function s(e) {
      if (e.get("current") !== "ENTER_WHATSAPP_NUMBER") {
        var t = e.get("previous").last();
        return e
          .update("previous", function (e) {
            return e.pop();
          })
          .set("current", t);
      }
      return e;
    }
    var u = {
        reduce: function (t) {
          return s(t);
        },
      },
      c = {
        reduce: function (n) {
          return e(n, "ENTER_WHATSAPP_NUMBER");
        },
      },
      d = {
        reduce: function (n, r) {
          return r.verificationStatus === "INVALID_WHATSAPP_BUSINESS_NUMBER"
            ? e(n, "ENTER_WHATSAPP_NUMBER")
            : n;
        },
      },
      m = {
        reduce: function (n, r) {
          return r.isBusinessUpsell === !0
            ? e(n, "INSTALL_WHATSAPP_BUSINESS")
            : n;
        },
      },
      p = {
        reduce: function (n, r) {
          if (
            o(
              "AdsWhatsAppVerificationUtils",
            ).shouldShowBusinessNumberConnectedConfirmation(
              r.isBusinessUpsellEligible,
              r.dialogState,
              r.whatsAppNumberType,
            )
          )
            return e(n, "WHATSAPP_BUSINESS_INSTALLED");
          var t = o(
            "AdsWhatsAppVerificationUtils",
          ).shouldUpsellWhatsappBusiness(
            r.isBusinessUpsellEligible,
            r.dialogState,
            r.whatsAppNumberType,
          );
          return e(n, t ? "LEARN_ABOUT_WHATSAPP_BUSINESS" : "VERIFIED_CODE");
        },
      },
      _ = {
        reduce: function (n, o) {
          if (o.requireWhatsAppBusinessNumber === !1) return n;
          switch (n.current) {
            case "ENTER_WHATSAPP_NUMBER":
              return e(n, "LEARN_ABOUT_WHATSAPP_BUSINESS");
            case "LEARN_ABOUT_WHATSAPP_BUSINESS":
            case "INSTALL_WHATSAPP_BUSINESS":
              return e(n, "INSTALL_WHATSAPP_BUSINESS");
            case "ENTER_VERIFICATION_CODE":
              return e(n, "ENTER_VERIFICATION_CODE");
            default:
              return (
                r("FBLogger")("ads").warn(
                  "exhaustive switch: %s not covered",
                  n.current,
                ),
                n
              );
          }
        },
      },
      f = {
        reduce: function (n) {
          return e(n, "SHOW_BLOCKING_DISCLOSURE");
        },
      },
      g = {
        reduce: function (n, r) {
          return r.whatsAppNumberType === 3
            ? e(n, "CLOUD_API_PAGE_LINKING_PENDING")
            : e(n, "ENTER_VERIFICATION_CODE");
        },
      };
    ((l.onNavigateBack = u),
      (l.onReset = c),
      (l.onVerifyCodeFailure = d),
      (l.onSendDownloadLink = m),
      (l.onVerifyCodeSuccess = p),
      (l.onVerifyWhatsAppNumberFailure = _),
      (l.onShowBlockingDisclosure = f),
      (l.onVerificationCodeSendSuccess = g));
  },
  98,
);
