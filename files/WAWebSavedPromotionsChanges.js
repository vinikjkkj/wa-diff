__d(
  "WAWebSavedPromotionsChanges",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebInteractiveActionsChanges",
    "WAWebLazyLoadedRetriable",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")("WAWebSavedPromotionsStore").__setRef(
        "WAWebSavedPromotionsChanges",
      ),
      u = r("WAWebLazyLoadedRetriable")(
        function () {
          return s.load();
        },
        "WAWebSavedPromotionsStore",
        {
          onFinalFailure: function (n) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] store did not load",
                  ])),
              )
              .catching(n)
              .sendLogs("saved-promotions-store-load-failed");
          },
        },
      ),
      c = null,
      d = !1;
    function m(e) {
      var t;
      return ((t = c) == null ? void 0 : t.isPromotionSaved(e)) === !0;
    }
    function p() {
      d ||
        ((d = !0),
        u()
          .then(function (e) {
            ((c = e),
              e.subscribeToSavedPromotions(
                o("WAWebInteractiveActionsChanges")
                  .notifyInteractiveActionsChanged,
              ),
              e.loadSavedPromotions(),
              o(
                "WAWebInteractiveActionsChanges",
              ).notifyInteractiveActionsChanged());
          })
          .catch(r("WAWebNoop")));
    }
    ((l.isPromotionSavedNow = m), (l.watchSavedPromotions = p));
  },
  98,
);
