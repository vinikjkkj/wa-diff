__d(
  "WAWebBrAddPixKeyLinkErrorDialogLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrPixPaymentsHomeDeepLink",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebBrAddPixKeyLinkErrorDialog.react",
          )
            .__setRef("WAWebBrAddPixKeyLinkErrorDialogLoadable")
            .load();
        }),
        "BrAddPixKeyLinkErrorDialog",
      );
    function c() {
      return m(function (e) {
        return e.openPaymentsHomeWithUnusableLinkDialog();
      });
    }
    function d(e) {
      return m(function (t) {
        return t.openPaymentsHomeWithLinkRetryDialog(e);
      });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o(
              "WAWebBrPixPaymentsHomeDeepLink",
            ).reserveBrPixPaymentsHomeDeepLink(),
            a = null;
          try {
            a = yield u();
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "br_add_pix_key_link: error dialog failed to load: ",
                    "",
                  ])),
                r("getErrorSafe")(t).name,
              )
              .sendLogs("br-add-pix-key-link-error-dialog-failed");
          }
          if (n())
            try {
              a != null
                ? t(a)
                : o(
                    "WAWebBrPixPaymentsHomeDeepLink",
                  ).openBrPixPaymentsHomeDeepLink();
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "br_add_pix_key_link: opening failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).name,
                )
                .sendLogs("br-add-pix-key-link-open-failed");
            }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.openPaymentsHomeWithUnusableLinkDialogLazily = c),
      (l.openPaymentsHomeWithLinkRetryDialogLazily = d));
  },
  98,
);
