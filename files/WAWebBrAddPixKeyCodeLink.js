__d(
  "WAWebBrAddPixKeyCodeLink",
  [
    "WALogger",
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
            var a = yield C(function () {
              return h(t);
            });
            if (a == null) {
              ((n = "discarded"),
                o("WAWebBrAddPixKeyOfferLogger").logAddPixKeyLinkDiscarded(
                  "link_unusable",
                  null,
                ),
                o(
                  "WAWebBrPixPaymentsHomeDeepLink",
                ).openBrPixPaymentsHomeDeepLink());
              return;
            }
            ((n = "handed_off"),
              o("WAWebBrSavePartnerPixKeyFeature").openAddPixKeyDeepLinkScreen(
                "add_pix_key_deeplink",
                o("WAWebPaymentsUserActionPartnerReferral").asPartnerReferral(
                  p,
                ),
                a.prefill,
                a.attribution,
                a.catalogId,
              ));
          } catch (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "br_add_pix_key_code: opening failed while ",
                    ": ",
                    "",
                  ])),
                n,
                r("getErrorSafe")(t).name,
              )
              .sendLogs("br-add-pix-key-code-open-failed"),
              g(n));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      (e === "resolving" &&
        o("WAWebBrAddPixKeyOfferLogger").logAddPixKeyLinkDiscarded(
          "link_unusable",
          null,
        ),
        e !== "discarded" &&
          o("WAWebBrPixPaymentsHomeDeepLink").openBrPixPaymentsHomeDeepLink());
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebBrResolvePaymentAccountLinkQuery",
          ).resolvePaymentAccountLink(e);
          if (t.kind !== "offered") return null;
          var n = null,
            a = R(t.verifiedName);
          try {
            ((n = L(t.businessWid)), (a = yield v(t.verifiedName, n)));
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
          return { attribution: a, catalogId: n, prefill: t.prefill };
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = R(e);
          if (n.kind !== "none" || t == null) return n;
          var r = yield o(
            "WAWebBrSenderPixKeyAttribution",
          ).resolveSenderPixKeyAttributionFromCatalogue(
            { bankName: "", kind: "verified", logoUrl: "" },
            t,
          );
          return r.kind === "verified" && r.bankName !== "" ? r : m;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = e.trim();
      return t === "" ? m : { bankName: t, kind: "verified", logoUrl: "" };
    }
    function L(e) {
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
