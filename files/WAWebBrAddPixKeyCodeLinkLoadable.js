__d(
  "WAWebBrAddPixKeyCodeLinkLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrAddPixKeyOfferLoggerLoadable",
    "WAWebBrPixPaymentsHomeDeepLink",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebBrAddPixKeyCodeLink")
            .__setRef("WAWebBrAddPixKeyCodeLinkLoadable")
            .load();
        }),
        "BrAddPixKeyCodeLink",
      );
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          try {
            n = yield s();
          } catch (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "br_add_pix_key_code: bundle failed to load: ",
                    "",
                  ])),
                r("getErrorSafe")(t).name,
              )
              .sendLogs("br-add-pix-key-code-bundle-failed"),
              o(
                "WAWebBrAddPixKeyOfferLoggerLoadable",
              ).logAddPixKeyLinkDiscarded("link_unusable", null),
              o(
                "WAWebBrPixPaymentsHomeDeepLink",
              ).openBrPixPaymentsHomeDeepLink());
            return;
          }
          yield n.openAddPixKeyCodeLink(t);
        })),
        c.apply(this, arguments)
      );
    }
    l.openAddPixKeyCodeLinkLazily = u;
  },
  98,
);
