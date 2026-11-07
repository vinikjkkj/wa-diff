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
    "asyncToGeneratorRuntime",
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = "resolving";
          try {
            var a = yield b(function () {
              return y(t);
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
                    ).openPaymentsHomeWithLinkRetryDialog(h(t)));
              return;
            }
            var i = a.offer;
            ((n = "handed_off"),
              o("WAWebBrSavePartnerPixKeyFeature").openAddPixKeyDeepLinkScreen(
                "add_pix_key_deeplink",
                o("WAWebPaymentsUserActionPartnerReferral").asPartnerReferral(
                  p,
                ),
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
              g(n, t));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      e === "resolving"
        ? (o("WAWebBrAddPixKeyOfferLogger").logAddPixKeyLinkDiscarded(
            "link_unusable",
            null,
          ),
          o(
            "WAWebBrAddPixKeyLinkErrorDialog.react",
          ).openPaymentsHomeWithLinkRetryDialog(h(t)))
        : e === "handed_off" &&
          o("WAWebBrPixPaymentsHomeDeepLink").openBrPixPaymentsHomeDeepLink();
    }
    function h(e) {
      return function () {
        _(e);
      };
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebBrResolvePaymentAccountLinkQuery",
          ).resolvePaymentAccountLink(e);
          if (t.kind !== "offered") return t;
          var n = null,
            a = L(t.verifiedName);
          try {
            ((n = E(t.businessWid)), (a = yield S(t.verifiedName, n)));
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
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = !1,
            n = window.setTimeout(function () {
              ((t = !0),
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebLoadingModal.react"), { error: !1 }),
                ));
            }, d);
          try {
            return yield e();
          } finally {
            (window.clearTimeout(n),
              t && o("WAWebModalManager").ModalManager.close());
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = L(e);
          if (n.kind !== "none" || t == null) return n;
          var r = yield o(
            "WAWebBrSenderPixKeyAttribution",
          ).resolveSenderPixKeyAttributionFromCatalogue(
            { bankName: "", kind: "verified", logoUrl: "" },
            t,
          );
          return r.kind === "verified" && r.bankName !== "" ? r : m;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = e.trim();
      return t === "" ? m : { bankName: t, kind: "verified", logoUrl: "" };
    }
    function E(e) {
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
