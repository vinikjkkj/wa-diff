__d(
  "WAWebAttachMenuPopupItemStickers.react",
  [
    "WAWebAttachMenuFilePicker",
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebPrepareMessageSendingAction",
    "WAWebWamEnumWebcStickerMakerEventNameType",
    "WAWebWebcStickerMakerEventsWamEvent",
    "WDSIconWdsIcStickerPlusCreateFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { refreshedIcon: { color: "x1w53qhl", $$css: !0 } };
    function c(e, t, n) {
      (new (o(
        "WAWebWebcStickerMakerEventsWamEvent",
      ).WebcStickerMakerEventsWamEvent)({
        stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType")
          .WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP,
      }).commit(),
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(e),
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(
          e,
          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER,
        ),
        o("WAWebAttachMenuFilePicker").createFilePicker(
          {
            accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE,
            multiple: !1,
            transformAttachment: function (t) {
              return { file: t, stickerMaker: !0 };
            },
          },
          function (e) {
            (new (o(
              "WAWebWebcStickerMakerEventsWamEvent",
            ).WebcStickerMakerEventsWamEvent)({
              stickerMakerEventName: o(
                "WAWebWamEnumWebcStickerMakerEventNameType",
              ).WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED,
            }).commit(),
              n(e));
          },
          t,
        ));
    }
    function d(e) {
      var t = e.chat,
        n = e.dismissMenu,
        a = e.onMediaPick,
        i = function () {
          c(t, n, a);
        },
        l = function (r) {
          return (r.preventDefault(), c(t, n, a), !1);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: l,
        onPress: i,
        Icon: r("WDSIconWdsIcStickerPlusCreateFilled.react"),
        iconXstyle: u.refreshedIcon,
        text: o("WAWebAttachMenuStrings").StickerMakerText(),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
