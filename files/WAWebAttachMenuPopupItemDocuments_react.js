__d(
  "WAWebAttachMenuPopupItemDocuments.react",
  [
    "Promise",
    "WAWebAttachMenuFilePicker",
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebBotMultiModalUtils",
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
      s,
      u = s || (s = o("react")),
      c = { refreshedIcon: { color: "x19mqsdy", $$css: !0 } },
      d = "application/pdf";
    function m(t, r, a, i) {
      (n("cr:8711") == null ||
        n("cr:8711").preloadWebTPThumbnailRendererIfEnabled(
          "documentAttachClick",
        ),
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t),
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(
          t,
          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT,
        ));
      var l = o("WAWebChatGetters").getIsMetaAiBot(
          o("WAWebStateUtils").unproxy(t),
        ),
        s = null;
      if (l) {
        var u = o(
          "WAWebBotMultiModalUtils",
        ).getMetaAiFilePickerAcceptOverride();
        s = u !== "" ? u : d;
      }
      o("WAWebAttachMenuFilePicker").createFilePicker(
        {
          accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.DOCUMENT,
          acceptOverride: l ? s : null,
          multiple: a,
          transformAttachment: function (t) {
            return { file: t, type: o("WAWebFileUtils").FILETYPE.DOCUMENT };
          },
        },
        function (t) {
          if (l) {
            (e || (e = n("Promise"))).all(t).then(function (e) {
              var t = o(
                "WAWebBotMultiModalUtils",
              ).getSupportedMetaAiAttachments(e);
              (o("WAWebBotMultiModalUtils").maybeShowUnsupportedFileToast(
                t.length,
                e.length,
              ),
                t.length > 0 &&
                  i(
                    t.map(function (e) {
                      return e;
                    }),
                  ));
            });
            return;
          }
          i(t);
        },
        r,
      );
    }
    function p(e) {
      var t = e.chat,
        n = e.dismissMenu,
        a = e.multiple,
        i = e.onDocumentPick,
        l = function () {
          m(t, n, a, i);
        },
        s = function (r) {
          return (r.preventDefault(), m(t, n, a, i), !1);
        };
      return u.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: s,
        onPress: l,
        Icon: r("WDSIconIcDescriptionFilled.react"),
        iconXstyle: c.refreshedIcon,
        text: o("WAWebAttachMenuStrings").DocumentText(),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
