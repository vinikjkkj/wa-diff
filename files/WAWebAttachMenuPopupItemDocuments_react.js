__d(
  "WAWebAttachMenuPopupItemDocuments.react",
  [
    "WAWebAttachMenuFilePicker",
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebChatGetters",
    "WAWebFileUtils",
    "WAWebPrepareMessageSendingAction",
    "WAWebStateUtils",
    "WDSIconIcDescriptionFilled.react",
    "cr:8711",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { refreshedIcon: { color: "x19mqsdy", $$css: !0 } },
      c = "application/pdf";
    function d(e, t, r) {
      (n("cr:8711") == null ||
        n("cr:8711").preloadWebTPThumbnailRendererIfEnabled(
          "documentAttachClick",
        ),
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(e),
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(
          e,
          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT,
        ));
      var a = o("WAWebChatGetters").getIsMetaAiBot(
        o("WAWebStateUtils").unproxy(e),
      );
      o("WAWebAttachMenuFilePicker").createFilePicker(
        {
          accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.DOCUMENT,
          acceptOverride: a ? c : null,
          multiple: !0,
          transformAttachment: function (t) {
            return { file: t, type: o("WAWebFileUtils").FILETYPE.DOCUMENT };
          },
        },
        r,
        t,
      );
    }
    function m(e) {
      var t = e.chat,
        n = e.dismissMenu,
        a = e.onDocumentPick,
        i = function () {
          d(t, n, a);
        },
        l = function (r) {
          return (r.preventDefault(), d(t, n, a), !1);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: l,
        onPress: i,
        Icon: r("WDSIconIcDescriptionFilled.react"),
        iconXstyle: u.refreshedIcon,
        text: o("WAWebAttachMenuStrings").DocumentText(),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
