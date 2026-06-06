__d(
  "WAWebSendStickerAction",
  [
    "fbt",
    "WALogger",
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
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["stickerSendOrigin"],
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i,
            l,
            c = o("WAWebStateUtils").unproxy(e);
          if (
            (yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(c),
            !r("WAWebAuraGating").canUsePremiumSticker(
              (a = t.mediaData) == null ? void 0 : a.stickerPremiumStatus,
            ))
          )
            return (
              o("WAWebCmd").Cmd.closeExpressionPanels(),
              o("WAWebModalManager").ModalManager.openAlert(
                d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
              }
            );
          var m =
              ((i = t.mediaData) == null ? void 0 : i.stickerPremiumStatus) ===
              o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
            p = (l = t.mediaData) == null ? void 0 : l.filehash;
          if (m && p != null && p !== "")
            try {
              var f = new (o(
                "WAWebWaPlusBenefitJourneyLogger",
              ).WaPlusBenefitJourneyLogger)({
                benefitType: o("WAWebWamEnumWpbujBenefitType")
                  .WPBUJ_BENEFIT_TYPE.STICKERS,
                surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE
                  .STICKER_TRAY,
              });
              (f.logSelect({ success: !0, actionTarget: p }),
                f.logApply({ success: !0, actionTarget: p }));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "stickers:wpbuj telemetry failed during send",
                    ])),
                )
                .catching(e instanceof Error ? e : r("err")(String(e)))
                .sendLogs("wpbuj-sticker-send-telemetry-failed");
            }
          return _(c, t, n);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
        f.apply(this, arguments)
      );
    }
    l.sendStickerToChat = m;
  },
  226,
);
