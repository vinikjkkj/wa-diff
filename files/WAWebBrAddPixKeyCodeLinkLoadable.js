__d(
  "WAWebBrAddPixKeyCodeLinkLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrAddPixKeyLinkErrorDialogLoadable",
    "WAWebBrAddPixKeyOfferLoggerLoadable",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")("WAWebBrAddPixKeyCodeLink")
          .__setRef("WAWebBrAddPixKeyCodeLinkLoadable")
          .load();
      }, "BrAddPixKeyCodeLink");
    async function u(t) {
      var n;
      try {
        n = await s();
      } catch (n) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "br_add_pix_key_code: bundle failed to load: ",
                "",
              ])),
            r("getErrorSafe")(n).name,
          )
          .sendLogs("br-add-pix-key-code-bundle-failed"),
          o("WAWebBrAddPixKeyOfferLoggerLoadable").logAddPixKeyLinkDiscarded(
            "link_unusable",
            null,
          ),
          o(
            "WAWebBrAddPixKeyLinkErrorDialogLoadable",
          ).openPaymentsHomeWithLinkRetryDialogLazily(function () {
            u(t);
          }));
        return;
      }
      await n.openAddPixKeyCodeLink(t);
    }
    l.openAddPixKeyCodeLinkLazily = u;
  },
  98,
);
