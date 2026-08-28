__d(
  "AdsWhatsAppVerificationUtils",
  [
    "AdsGraphAPI",
    "AdsWhatsAppConnectAccountDialogSendDownloadLinkFailureAction",
    "AdsWhatsAppLoggingUtils",
    "AsyncRequest",
    "XWhatsAppSendBusinessAppDownloadLinkController",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("XWhatsAppSendBusinessAppDownloadLinkController")
          .getURIBuilder()
          .getURI(),
        a = { page_token: e, whatsapp_number: t };
      new (r("AsyncRequest"))()
        .setURI(o)
        .setMethod("POST")
        .setData(a)
        .setHandler(n)
        .setErrorHandler(function () {
          r(
            "AdsWhatsAppConnectAccountDialogSendDownloadLinkFailureAction",
          ).dispatch(
            {},
            {
              line: "50",
              module: "AdsWhatsAppVerificationUtils.js",
              moduleID: i.id,
            },
          );
        })
        .send();
    }
    function s(e, t, n, a, l, s, u) {
      var c = !s && r("gkx")("4404"),
        d = {
          whatsapp_number: t,
          waive_business_number_requirement: s,
          force_verification_for_linked_number: c,
          request_source: n,
        };
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("page_id", e)
          .edge("page_whatsapp_number_verification")
          .post(d),
        function (n) {
          (o("AdsWhatsAppLoggingUtils").logClickToWhatsAppAdsUnifiedEvent(
            e,
            null,
            null,
            t,
            null,
            "verification_code_send_graph_api_request_success",
            u,
          ),
            a(n));
        },
        function (n) {
          (o("AdsWhatsAppLoggingUtils").logClickToWhatsAppAdsUnifiedEvent(
            e,
            null,
            null,
            t,
            null,
            "verification_code_send_graph_api_request_failure",
            u,
          ),
            l(n));
        },
      );
    }
    function u(e, t, n, a, l, s, u, c) {
      var d = {
        whatsapp_number: n,
        verification_code: t,
        waive_business_number_requirement: u,
        request_source: a,
      };
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("page_id", e)
          .edge("page_whatsapp_number_verification")
          .post(d),
        function (r) {
          o("AdsWhatsAppLoggingUtils").logClickToWhatsAppAdsUnifiedEvent(
            e,
            null,
            null,
            n,
            t,
            "verification_code_submit_graph_api_request_success",
            c,
          );
          var a = {
            verificationStatus: r.verification_status,
            error_message: r.error_message,
            whatsapp_number_type: r.whatsapp_number_type,
          };
          l(a);
        },
        function (r) {
          (o("AdsWhatsAppLoggingUtils").logClickToWhatsAppAdsUnifiedEvent(
            e,
            null,
            null,
            n,
            t,
            "verification_code_submit_graph_api_request_failure",
            c,
          ),
            s(r));
        },
      );
    }
    function c(e, t, n) {
      return e && t === "ENTER_VERIFICATION_CODE" && ![1, 3].includes(n);
    }
    function d(e, t, n) {
      return e && n === 1 && t === "INSTALL_WHATSAPP_BUSINESS";
    }
    ((l.sendDownloadLink = e),
      (l.sendVerificationCode = s),
      (l.submitVerificationCode = u),
      (l.shouldUpsellWhatsappBusiness = c),
      (l.shouldShowBusinessNumberConnectedConfirmation = d));
  },
  98,
);
