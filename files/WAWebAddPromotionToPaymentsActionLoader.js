__d(
  "WAWebAddPromotionToPaymentsActionLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrAddPixKeyDeepLinkGating",
    "WAWebInteractiveActionsChanges",
    "WAWebLazyLoadedRetriable",
    "WAWebMobilePlatforms",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebAddPromotionToPaymentsAction",
      ).__setRef("WAWebAddPromotionToPaymentsActionLoader"),
      u = r("WAWebLazyLoadedRetriable")(
        function () {
          return s.load();
        },
        "WAWebAddPromotionToPaymentsAction",
        {
          onFinalFailure: function (n) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] button did not load",
                  ])),
              )
              .catching(n)
              .sendLogs("saved-promotions-button-load-failed");
          },
        },
      ),
      c = null,
      d = !1;
    function m(e, t, n, r) {
      return p(e, t)
        ? c != null
          ? c.getCurrentAddPromotionToPaymentsAction(e, t, n, r)
          : (_(), null)
        : null;
    }
    function p(e, t) {
      return (
        !t.fromMe &&
        t.isFromTemplate === !0 &&
        t.isCarouselCard !== !0 &&
        e.remote.isUser() &&
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBrAddPixKeyDeepLinkGating").isSelfInBrazil()
      );
    }
    function _() {
      d ||
        ((d = !0),
        u()
          .then(function (e) {
            ((c = e),
              o(
                "WAWebInteractiveActionsChanges",
              ).notifyInteractiveActionsChanged());
          })
          .catch(r("WAWebNoop")));
    }
    l.getAddPromotionToPaymentsActionIfLoaded = m;
  },
  98,
);
