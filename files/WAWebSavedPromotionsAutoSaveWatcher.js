__d(
  "WAWebSavedPromotionsAutoSaveWatcher",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrAddPixKeyDeepLinkGating",
    "WAWebCmd",
    "WAWebLazyLoadedRetriable",
    "WAWebMobilePlatforms",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebSavedPromotionsAutoSaveCatchUp",
      ).__setRef("WAWebSavedPromotionsAutoSaveWatcher"),
      c = r("WAWebLazyLoadedRetriable")(function () {
        return u.load();
      }, "WAWebSavedPromotionsAutoSaveCatchUp");
    function d() {
      if (!o("WAWebCmd").Cmd.isMainStreamReadyMd) {
        o("WAWebCmd").Cmd.once == null ||
          o("WAWebCmd").Cmd.once("main_stream_mode_ready_from_bridge", d);
        return;
      }
      (o("WAWebMsgCollection").MsgCollection.on("add", _),
        o("WAWebMsgCollection").MsgCollection.on("change:type", _),
        o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", p),
        o("WAWebCmd").Cmd.isOfflineDeliveryEnd && p());
    }
    function m() {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBrAddPixKeyDeepLinkGating").isSelfInBrazil()
      );
    }
    function p() {
      m() &&
        c()
          .then(function (e) {
            return e.catchUpOnStoredOffers();
          })
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] auto-save catch-up failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("saved-promotions-auto-save-catch-up-failed");
          });
    }
    function _(e) {
      !e.isNewMsg ||
        !e.recvFresh ||
        e.id.fromMe ||
        !e.id.remote.isUser() ||
        e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        e.isFromTemplate !== !0 ||
        !m() ||
        c()
          .then(function (t) {
            return t.receiveLiveOffer({
              id: e.id,
              interactivePayload: e.interactivePayload,
              interactiveType: e.interactiveType,
              isCarouselCard: e.isCarouselCard,
              isFromTemplate: e.isFromTemplate,
              nativeFlowName: e.nativeFlowName,
              t: e.t,
              type: e.type,
            });
          })
          .catch(function (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] auto-save threw before saving",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("saved-promotions-auto-save-hook-threw");
          });
    }
    l.startSavedPromotionsAutoSave = d;
  },
  98,
);
