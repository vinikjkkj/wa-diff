__d(
  "WAWebSendStickerAction",
  [
    "fbt",
    "WAWebAuraGating",
    "WAWebBizBotTosUtils",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebMedia",
    "WAWebMediaOpaqueData",
    "WAWebModalManager",
    "WAWebRecentStickerCollection",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebStickerPremiumStatus",
    "WAWebStickerSendWamEvent",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["stickerSendOrigin"],
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = o("WAWebStateUtils").unproxy(e);
          return (
            yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i),
            r("WAWebAuraGating").canUsePremiumSticker(
              (a = t.mediaData) == null ? void 0 : a.stickerPremiumStatus,
            )
              ? p(i, t, n)
              : (o("WAWebCmd").Cmd.closeExpressionPanels(),
                o("WAWebModalManager").ModalManager.openAlert(
                  c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    title: s._(/*BTDS*/ "This is a premium sticker"),
                    onOK: function () {
                      return o("WAWebModalManager").ModalManager.closeAlert();
                    },
                    children: s._(
                      /*BTDS*/ "View this sticker on your phone to learn how to access and use it.",
                    ),
                  }),
                ),
                {
                  messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                    .ERROR_CANCELLED,
                })
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l;
          (o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue([
            n,
          ]),
            n.mediaData &&
              n.mediaData.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              n.mediaData.mediaBlob.retain());
          var s = a.stickerSendOrigin,
            u = babelHelpers.objectWithoutPropertiesLoose(a, e),
            c = yield o("WAWebMedia")
              .prepSticker(n)
              .sendToChat({ chat: t, options: u }),
            d = {
              stickerSendOrigin: s,
              stickerIsAnimated: !!n.mediaData.isAnimated,
              stickerIsFirstParty: !!n.mediaData.isFirstParty,
              stickerIsFromStickerMaker: !!n.mediaData.isFromStickerMaker,
              stickerIsLottie: !!((i = n.mediaData) != null && i.isLottie),
              stickerIsPremium:
                ((l = n.mediaData) == null
                  ? void 0
                  : l.stickerPremiumStatus) ===
                o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
            },
            m = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(d),
            p = o("WAWebWebpMetadata").getStickerMakerSourceType(
              n.mediaData.stickerMakerSourceType,
            );
          return (p != null && (m.stickerMakerSourceType = p), m.commit(), c);
        })),
        _.apply(this, arguments)
      );
    }
    l.sendStickerToChat = d;
  },
  226,
);
