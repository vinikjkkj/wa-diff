__d(
  "WAWebSendStickerAction",
  [
    "fbt",
    "WALogger",
    "WAWebAuraGating",
    "WAWebBizBotTosUtils",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaStickers",
    "WAWebModalManager",
    "WAWebRecentStickerCollection",
    "WAWebSendMsgResultAction",
    "WAWebSoundStickerUtils",
    "WAWebStateUtils",
    "WAWebStickerModel",
    "WAWebStickerPremiumStatus",
    "WAWebStickerSendWamEvent",
    "WAWebUploadExternalStickerAction",
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["stickerSendOrigin"],
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
          var d =
              ((i = t.mediaData) == null ? void 0 : i.stickerPremiumStatus) ===
              o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
            p = (l = t.mediaData) == null ? void 0 : l.filehash;
          if (d && p != null && p !== "")
            try {
              var _ = new (o(
                "WAWebWaPlusBenefitJourneyLogger",
              ).WaPlusBenefitJourneyLogger)({
                benefitType: o("WAWebWamEnumWpbujBenefitType")
                  .WPBUJ_BENEFIT_TYPE.STICKERS,
                surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE
                  .STICKER_TRAY,
              });
              (_.logSelect({ success: !0, actionTarget: p }),
                _.logApply({ success: !0, actionTarget: p }));
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
          return o(
            "WAWebUploadExternalStickerAction",
          ).withExternalStickerSelection(t, function (e) {
            return f(c, e, n);
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l;
          if (n.externalUrl != null)
            try {
              yield o("WAWebUploadExternalStickerAction").uploadExternalSticker(
                n,
              );
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "External sticker upload failed during send",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("external-sticker-send-upload-failed"),
                {
                  messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                    .ERROR_UPLOAD,
                }
              );
            }
          var s =
            n.externalUrl != null
              ? new (o("WAWebStickerModel").StickerModel)(n.toDbData())
              : n;
          ((s.mediaData.accessibilityLabel = n.mediaData.accessibilityLabel),
            o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue([
              s,
            ]),
            n.mediaData &&
              n.mediaData.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              n.mediaData.mediaBlob.retain());
          var u = a.stickerSendOrigin,
            d = babelHelpers.objectWithoutPropertiesLoose(a, e),
            m = yield o("WAWebMediaStickers")
              .prepSticker(n)
              .sendToChat({
                chat: t,
                options: babelHelpers.extends({}, d, {
                  stickerAudio: o(
                    "WAWebSoundStickerUtils",
                  ).getSendableStickerAudio(n.stickerAudio, t.id),
                }),
              }),
            p = {
              stickerSendOrigin: u,
              stickerIsAi: !!n.mediaData.isAiSticker,
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
            _ = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(p),
            f = o("WAWebWebpMetadata").getStickerMakerSourceType(
              n.mediaData.stickerMakerSourceType,
            );
          return (f != null && (_.stickerMakerSourceType = f), _.commit(), m);
        })),
        g.apply(this, arguments)
      );
    }
    l.sendStickerToChat = p;
  },
  226,
);
