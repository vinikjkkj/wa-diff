__d(
  "WAWebBrAddPixKeyOfferDialogsLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebBrAddPixKeyOfferDialogs.react",
          )
            .__setRef("WAWebBrAddPixKeyOfferDialogsLoadable")
            .load();
        }),
        "BrAddPixKeyOfferDialogs",
      );
    function u(e, t, n) {
      return d(function (r) {
        return r.openAddPixKeyLimitDialog(e, t, n);
      });
    }
    function c() {
      return d(function (e) {
        return e.openAddPixKeyBlockedDialog();
      });
    }
    function d(t) {
      return s()
        .then(t)
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "br_add_pix_key_offer: dialogs failed to load: ",
                  "",
                ])),
              r("getErrorSafe")(t).name,
            )
            .sendLogs("br-add-pix-key-offer-dialogs-failed");
        });
    }
    ((l.openAddPixKeyLimitDialogLazily = u),
      (l.openAddPixKeyBlockedDialogLazily = c));
  },
  98,
);
