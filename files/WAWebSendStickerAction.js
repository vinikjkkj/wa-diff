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
    async function p(e, t, n) {
      var a,
        i,
        l,
        c = o("WAWebStateUtils").unproxy(e);
      if (
        (await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(c),
        !r("WAWebAuraGating").canUsePremiumSticker(
          (a = t.mediaData) == null ? void 0 : a.stickerPremiumStatus,
        ))
      )
        return (
          o("WAWebCmd").Cmd.closeExpressionPanels(),
          o("WAWebModalManager").ModalManager.openAlert(
            m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: s._(/*BTDS*/ ""),
              onOK: function () {
                return o("WAWebModalManager").ModalManager.closeAlert();
              },
              children: s._(/*BTDS*/ ""),
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
          var f = new (o(
            "WAWebWaPlusBenefitJourneyLogger",
          ).WaPlusBenefitJourneyLogger)({
            benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE
              .STICKERS,
            surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_TRAY,
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
      return o("WAWebUploadExternalStickerAction").withExternalStickerSelection(
        t,
        function (e) {
          return _(c, e, n);
        },
      );
    }
    async function _(t, n, a) {
      var i, l;
      if (n.externalUrl != null)
        try {
          await o("WAWebUploadExternalStickerAction").uploadExternalSticker(n);
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
        o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue([s]),
        n.mediaData &&
          n.mediaData.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
          n.mediaData.mediaBlob.retain());
      var u = a.stickerSendOrigin,
        d = babelHelpers.objectWithoutPropertiesLoose(a, e),
        m = await o("WAWebMediaStickers")
          .prepSticker(n)
          .sendToChat({
            chat: t,
            options: babelHelpers.extends({}, d, {
              stickerAudio: o("WAWebSoundStickerUtils").getSendableStickerAudio(
                n.stickerAudio,
                t.id,
              ),
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
            ((l = n.mediaData) == null ? void 0 : l.stickerPremiumStatus) ===
            o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
        },
        _ = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(p),
        f = o("WAWebWebpMetadata").getStickerMakerSourceType(
          n.mediaData.stickerMakerSourceType,
        );
      return (f != null && (_.stickerMakerSourceType = f), _.commit(), m);
    }
    l.sendStickerToChat = p;
  },
  226,
);
