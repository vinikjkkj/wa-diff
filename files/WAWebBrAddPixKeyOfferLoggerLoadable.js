__d(
  "WAWebBrAddPixKeyOfferLoggerLoadable",
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
          return r("JSResourceForInteraction")("WAWebBrAddPixKeyOfferLogger")
            .__setRef("WAWebBrAddPixKeyOfferLoggerLoadable")
            .load();
        }),
        "BrAddPixKeyOfferLogger",
      );
    function u(e, t) {
      return d(function (n) {
        return n.logAddPixKeyLinkDiscarded(e, t);
      });
    }
    function c(e, t, n) {
      return d(function (r) {
        return r.logAddPixKeyMessageDiscarded(e, t, n);
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
                  "br_add_pix_key_offer: logger failed: ",
                  "",
                ])),
              r("getErrorSafe")(t).name,
            )
            .sendLogs("br-add-pix-key-offer-logger-failed");
        });
    }
    ((l.logAddPixKeyLinkDiscarded = u), (l.logAddPixKeyMessageDiscarded = c));
  },
  98,
);
