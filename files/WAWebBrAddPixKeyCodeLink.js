__d(
  "WAWebBrAddPixKeyCodeLink",
  [
    "WALogger",
    "WAWebBrAddPixKeyLinkErrorDialog.react",
    "WAWebBrAddPixKeyOfferLogger",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebBrPixPaymentsHomeDeepLink",
    "WAWebBrResolvePaymentAccountLinkQuery",
    "WAWebBrSavePartnerPixKeyFeature",
    "WAWebBrSenderPixKeyAttribution",
    "WAWebLoadingModal.react",
    "WAWebModalManager",
    "WAWebPaymentsUserActionPartnerReferral",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = 500,
      m = { kind: "none" },
      p = "unknown";
    async function _(t) {
      var n = "resolving";
      try {
        var a = await y(function () {
          return h(t);
        });
        if (a.kind !== "offered") {
          ((n = "discarded"),
            o("WAWebBrAddPixKeyOfferLogger").logAddPixKeyLinkDiscarded(
              "link_unusable",
              null,
            ),
            a.kind === "rejected"
              ? o(
                  "WAWebBrAddPixKeyLinkErrorDialog.react",
                ).openPaymentsHomeWithUnusableLinkDialog()
              : o(
                  "WAWebBrAddPixKeyLinkErrorDialog.react",
                ).openPaymentsHomeWithLinkRetryDialog(g(t)));
          return;
        }
        var i = a.offer;
        ((n = "handed_off"),
          o("WAWebBrSavePartnerPixKeyFeature").openAddPixKeyDeepLinkScreen(
            "add_pix_key_deeplink",
            o("WAWebPaymentsUserActionPartnerReferral").asPartnerReferral(p),
            i.prefill,
            i.attribution,
            i.catalogId,
          ));
      } catch (a) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "br_add_pix_key_code: opening failed while ",
                ": ",
                "",
              ])),
            n,
            r("getErrorSafe")(a).name,
          )
          .sendLogs("br-add-pix-key-code-open-failed"),
          f(n, t));
      }
    }
    function f(e, t) {
      e === "resolving"
        ? (o("WAWebBrAddPixKeyOfferLogger").logAddPixKeyLinkDiscarded(
            "link_unusable",
            null,
          ),
          o(
            "WAWebBrAddPixKeyLinkErrorDialog.react",
          ).openPaymentsHomeWithLinkRetryDialog(g(t)))
        : e === "handed_off" &&
          o("WAWebBrPixPaymentsHomeDeepLink").openBrPixPaymentsHomeDeepLink();
    }
    function g(e) {
      return function () {
        _(e);
      };
    }
    async function h(e) {
      var t = await o(
        "WAWebBrResolvePaymentAccountLinkQuery",
      ).resolvePaymentAccountLink(e);
      if (t.kind !== "offered") return t;
      var n = null,
        a = b(t.verifiedName);
      try {
        ((n = v(t.businessWid)), (a = await C(t.verifiedName, n)));
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "br_add_pix_key_code: catalogue lookup failed: ",
                "",
              ])),
            r("getErrorSafe")(e).name,
          )
          .sendLogs("br-add-pix-key-code-catalogue-failed");
      }
      return {
        kind: "offered",
        offer: { attribution: a, catalogId: n, prefill: t.prefill },
      };
    }
    async function y(e) {
      var t = !1,
        n = window.setTimeout(function () {
          ((t = !0),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebLoadingModal.react"), { error: !1 }),
            ));
        }, d);
      try {
        return await e();
      } finally {
        (window.clearTimeout(n),
          t && o("WAWebModalManager").ModalManager.close());
      }
    }
    async function C(e, t) {
      var n = b(e);
      if (n.kind !== "none" || t == null) return n;
      var r = await o(
        "WAWebBrSenderPixKeyAttribution",
      ).resolveSenderPixKeyAttributionFromCatalogue(
        { bankName: "", kind: "verified", logoUrl: "" },
        t,
      );
      return r.kind === "verified" && r.bankName !== "" ? r : m;
    }
    function b(e) {
      var t = e.trim();
      return t === "" ? m : { bankName: t, kind: "verified", logoUrl: "" };
    }
    function v(e) {
      return e == null
        ? null
        : o(
            "WAWebBrAddPixKeyPartnerDirectory",
          ).addPixKeyPartnerCatalogIdForSender([e]);
    }
    ((l.SPINNER_DELAY_MS = d), (l.openAddPixKeyCodeLink = _));
  },
  98,
);
